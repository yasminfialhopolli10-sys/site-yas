
const API = "https://www.themealdb.com/api/json/v1/1";

const recipeList = document.getElementById("recipeList");
const details = document.getElementById("details");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const sectionTitle = document.getElementById("sectionTitle");

let recipes = [];
let currentType = "all";

const sweetCategories = ["Dessert"];
const savoryCategories = [
  "Beef", "Chicken", "Seafood", "Pasta",
  "Pork", "Lamb", "Starter", "Side",
  "Vegan", "Vegetarian", "Breakfast",
  "Miscellaneous"
];

async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Não foi possível carregar as receitas.");
  }

  return response.json();
}

async function loadCategory(category, type) {
  try {
    const data = await getJSON(
      `${API}/filter.php?c=${encodeURIComponent(category)}`
    );

    return (data.meals || []).map(meal => ({
      id: meal.idMeal,
      name: meal.strMeal,
      image: meal.strMealThumb,
      type,
      category
    }));
  } catch (error) {
    console.error("Erro na categoria:", category, error);
    return [];
  }
}

async function loadRecipes() {
  recipeList.innerHTML =
    '<div class="loading">Buscando fotografias e receitas... 🍳</div>';

  try {
    const results = await Promise.all([
      ...sweetCategories.map(category =>
        loadCategory(category, "sweet")
      ),
      ...savoryCategories.map(category =>
        loadCategory(category, "savory")
      )
    ]);

    const unique = new Map();

    results.flat().forEach(recipe => {
      if (!unique.has(recipe.id)) {
        unique.set(recipe.id, recipe);
      }
    });

    recipes = [...unique.values()];

    const sweets = recipes.filter(r => r.type === "sweet");
    const savory = recipes.filter(r => r.type === "savory");

    document.getElementById("sweetCount").textContent = sweets.length;
    document.getElementById("savoryCount").textContent = savory.length;

    renderRecipes();
  } catch (error) {
    recipeList.innerHTML =
      '<div class="vazio">Não foi possível carregar as receitas. Confira sua conexão e tente novamente.</div>';
  }
}

function renderRecipes() {
  const term = searchInput.value.trim().toLowerCase();

  let filtered = recipes.filter(recipe => {
    const matchesType =
      currentType === "all" || recipe.type === currentType;

    const matchesSearch =
      recipe.name.toLowerCase().includes(term) ||
      recipe.category.toLowerCase().includes(term);

    return matchesType && matchesSearch;
  });

  sectionTitle.textContent =
    currentType === "sweet" ? "Receitas doces" :
    currentType === "savory" ? "Receitas salgadas" :
    "Todas as receitas";

  resultCount.textContent =
    `${filtered.length} receitas encontradas`;

  if (!filtered.length) {
    recipeList.innerHTML =
      '<div class="vazio">Nenhuma receita encontrada. Tente outra pesquisa. 🍓</div>';
    return;
  }

  recipeList.innerHTML = filtered.map(recipe => `
    <article class="card">
      <img
        src="${escapeHTML(recipe.image)}"
        alt="${escapeHTML(recipe.name)}"
        loading="lazy"
        onerror="this.src='https://placehold.co/600x400?text=Receita'"
      >
      <div class="card-info">
        <span class="tipo">
          ${recipe.type === "sweet" ? "🍰 DOCE" : "🍕 SALGADA"}
        </span>
        <h3>${escapeHTML(recipe.name)}</h3>
        <p>${escapeHTML(recipe.category)}</p>
        <button onclick="openRecipe('${recipe.id}')">
          Ver receita →
        </button>
      </div>
    </article>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

async function openRecipe(id) {
  details.hidden = false;
  details.innerHTML = "<p>Carregando receita... 🍳</p>";
  details.scrollIntoView({ behavior: "smooth" });

  try {
    const data = await getJSON(`${API}/lookup.php?i=${id}`);
    const recipe = data.meals?.[0];

    if (!recipe) {
      throw new Error("Receita não encontrada.");
    }

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`]?.trim();
      const measure = recipe[`strMeasure${i}`]?.trim();

      if (ingredient) {
        ingredients.push(
          `${escapeHTML(measure || "")} ${escapeHTML(ingredient)}`
        );
      }
    }

    const selected = recipes.find(r => r.id === id);
    const isSweet = selected?.type === "sweet";

    const steps = (recipe.strInstructions || "")
      .split(/\r?\n/)
      .map(step => step.trim())
      .filter(Boolean);

    const animationEmoji = isSweet ? "🍰" : "🍕";
    const animationTitle = isSweet
      ? "Preparando uma delícia!"
      : "Preparando uma receita especial!";

    details.innerHTML = `
      <button class="voltar" onclick="closeRecipe()">
        ← Voltar às receitas
      </button>

      <img
        src="${escapeHTML(recipe.strMealThumb)}"
        alt="${escapeHTML(recipe.strMeal)}"
      >

      <h1>${escapeHTML(recipe.strMeal)}</h1>
      <p>Categoria: ${escapeHTML(recipe.strCategory || "Receita")}</p>
      <p>Origem: ${escapeHTML(recipe.strArea || "Internacional")}</p>

      <h2>🛒 Ingredientes</h2>
      <ul>
        ${ingredients.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <h2>👩‍🍳 Modo de preparo</h2>
      <ol>
        ${steps.map(step => `<li>${escapeHTML(step)}</li>`).join("")}
      </ol>

      <div class="animation-box">
        <h3>${animationTitle}</h3>
        <div class="kitchen">
          <span class="ingredient">🥣</span>
          <span class="ingredient two">✨</span>
          <span class="spoon">🥄</span>
          <span class="bowl">🥣</span>
          <span class="final-food">${animationEmoji}</span>
        </div>
        <p class="animation-caption">
          Misturando, preparando e finalizando! 💗
        </p>
      </div>

      ${recipe.strYoutube ? `
        <h3>🎥 Vídeo da receita</h3>
        <a href="${escapeHTML(recipe.strYoutube)}" target="_blank" rel="noopener">
          Assistir ao vídeo
        </a>
      ` : ""}
    `;
  } catch (error) {
    details.innerHTML = `
      <p>Não foi possível abrir esta receita.</p>
      <button class="voltar" onclick="closeRecipe()">Voltar</button>
    `;
  }
}

function closeRecipe() {
  details.hidden = true;
  details.innerHTML = "";
  document.getElementById("recipeList")
    .scrollIntoView({ behavior: "smooth" });
}

searchInput.addEventListener("input", renderRecipes);

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    currentType = button.dataset.type;
    details.hidden = true;
    renderRecipes();
  });
});

loadRecipes();
