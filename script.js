
const sweetBases = [
  "Bolo de cenoura", "Bolo de chocolate", "Bolo de fubá",
  "Bolo de laranja", "Bolo de limão", "Bolo de coco",
  "Bolo de milho", "Bolo de banana", "Brigadeiro", "Beijinho",
  "Pudim de leite", "Mousse de maracujá", "Torta de limão",
  "Torta de maçã", "Brownie", "Cookie de chocolate",
  "Cupcake de baunilha", "Pavê de chocolate", "Arroz-doce",
  "Cheesecake"
];

const sweetVersions = [
  "tradicional", "com chocolate", "com morango", "com coco",
  "com baunilha", "com canela", "com frutas", "cremoso",
  "caseiro", "especial"
];

const savoryBases = [
  "Lasanha", "Escondidinho", "Torta salgada", "Empadão de frango",
  "Quiche de queijo", "Panqueca salgada", "Pizza caseira",
  "Hambúrguer caseiro", "Almôndegas ao molho", "Frango assado",
  "Strogonoff de frango", "Macarrão ao molho", "Risoto de legumes",
  "Esfiha assada", "Pastel de forno", "Pão recheado",
  "Batata gratinada", "Sopa de legumes", "Arroz de forno",
  "Salada completa"
];

const savoryVersions = [
  "tradicional", "com queijo", "com frango", "com legumes",
  "ao forno", "cremoso", "com ervas", "gratinado",
  "caseiro", "especial"
];

const sweetPhotos = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=900"
];

const savoryPhotos = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=900",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
  "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=900",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
];

function makeRecipeList(bases, versions, type) {
  const isSweet = type === "doce";
  const photos = isSweet ? sweetPhotos : savoryPhotos;
  const list = [];

  bases.forEach((base, baseIndex) => {
    versions.forEach((version, versionIndex) => {
      const name = `${base} ${version}`;

      list.push({
        id: `${type}-${baseIndex}-${versionIndex}`,
        name,
        type,
        photo: photos[(baseIndex + versionIndex) % photos.length],
        time: isSweet ? "35–50 minutos" : "35–60 minutos",

        ingredients: isSweet
          ? [
              "2 xícaras de farinha de trigo (quando a receita levar massa)",
              "1 xícara de açúcar, ajustando conforme a receita-base",
              "2 ovos, quando indicado na preparação",
              "1 xícara de leite ou bebida equivalente",
              "2 colheres de manteiga ou óleo",
              "1 colher de fermento para preparações assadas",
              "Ingrediente principal: " + base.toLowerCase(),
              "Complemento: " + version
            ]
          : [
              "Ingrediente principal: " + base.toLowerCase(),
              "1 cebola picada",
              "2 dentes de alho",
              "1 colher de azeite",
              "Sal e pimenta a gosto",
              "Cheiro-verde ou ervas a gosto",
              "Queijo ou legumes, conforme a versão",
              "Água, caldo ou molho conforme necessário"
            ],

        steps: isSweet
          ? [
              `Leia a receita-base de ${base.toLowerCase()} e separe os ingredientes.`,
              "Misture os ingredientes secos em uma tigela, se a preparação levar massa.",
              "Acrescente os ingredientes úmidos e misture apenas até incorporar.",
              `Adicione o complemento ${version} e ajuste a mistura à consistência própria da receita.`,
              "Asse, cozinhe ou leve para gelar conforme o tipo de preparo.",
              "Espere atingir a temperatura adequada e finalize antes de servir."
            ]
          : [
              `Prepare os ingredientes da receita-base de ${base.toLowerCase()}.`,
              "Higienize e corte os vegetais. Tempere os ingredientes principais.",
              "Refogue cebola e alho no azeite, quando fizer sentido para a preparação.",
              `Incorpore o complemento ${version} e monte a receita de acordo com o método adequado.`,
              "Asse, cozinhe ou grelhe até que os ingredientes estejam completamente cozidos.",
              "Prove, ajuste os temperos e sirva."
            ],

        note: "Esta é uma variação de catálogo baseada no prato indicado. Confira proporções, temperatura e tempo em uma receita culinária testada antes de preparar."
      });
    });
  });

  return list;
}

const sweetRecipes = makeRecipeList(
  sweetBases,
  sweetVersions,
  "doce"
);

const savoryRecipes = makeRecipeList(
  savoryBases,
  savoryVersions,
  "salgada"
);

const recipes = [
  ...sweetRecipes,
  ...savoryRecipes
];

const grid = document.getElementById("recipeGrid");
const search = document.getElementById("search");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");
const dialog = document.getElementById("recipeDialog");
const details = document.getElementById("recipeDetails");

let currentFilter = "all";

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function renderRecipes() {
  const term = search.value.trim().toLocaleLowerCase("pt-BR");

  const filtered = recipes.filter(recipe => {
    const typeMatches =
      currentFilter === "all" || recipe.type === currentFilter;

    const nameMatches =
      recipe.name.toLocaleLowerCase("pt-BR").includes(term);

    return typeMatches && nameMatches;
  });

  grid.innerHTML = filtered.map(recipe => `
    <article class="recipe-card">
      <img
        src="${recipe.photo}"
        alt="Foto ilustrativa de ${escapeHTML(recipe.name)}"
        loading="lazy"
        onerror="this.src='https://placehold.co/800x500/ffe5ef/9b5272?text=Receita'"
      >

      <div class="card-content">
        <span class="tag ${recipe.type}">
          ${recipe.type === "doce" ? "Doce" : "Salgada"}
        </span>

        <h2>${escapeHTML(recipe.name)}</h2>
        <p>Tempo estimado: ${recipe.time}</p>

        <button
          class="view-button"
          type="button"
          data-id="${recipe.id}"
        >
          Ver ficha
        </button>
      </div>
    </article>
  `).join("");

  resultCount.textContent =
    `Mostrando ${filtered.length} de ${recipes.length} fichas`;

  emptyMessage.hidden = filtered.length !== 0;
}

function openRecipe(id) {
  const recipe = recipes.find(item => item.id === id);

  if (!recipe) return;

  details.innerHTML = `
    <img
      class="detail-image"
      src="${recipe.photo}"
      alt="Foto ilustrativa de ${escapeHTML(recipe.name)}"
    >

    <span class="tag ${recipe.type}">
      ${recipe.type === "doce" ? "Receita doce" : "Receita salgada"}
    </span>

    <h1 id="dialogTitle">${escapeHTML(recipe.name)}</h1>
    <p>Tempo estimado: ${recipe.time}</p>

    <h2>Ingredientes</h2>

    <ul>
      ${recipe.ingredients.map(item =>
        `<li>${escapeHTML(item)}</li>`
      ).join("")}
    </ul>

    <h2>Modo de preparo</h2>

    <div class="steps">
      ${recipe.steps.map((step, index) =>
        `<p><b>${index + 1}.</b> ${escapeHTML(step)}</p>`
      ).join("")}
    </div>

    <p class="note">
      <b>Observação:</b> ${escapeHTML(recipe.note)}
    </p>

    <h2>Etapas na cozinha</h2>

    <div class="cooking-animation" aria-label="Animação ilustrativa de preparo">
      <span>🥣</span>
      <span>🥄</span>
      <span>🍓</span>
      <span>🍽️</span>
    </div>
  `;

  dialog.classList.add("open");
  dialog.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeRecipe() {
  dialog.classList.remove("open");
  dialog.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

grid.addEventListener("click", event => {
  const button = event.target.closest("button[data-id]");

  if (button) {
    openRecipe(button.dataset.id);
  }
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    currentFilter = button.dataset.filter;

    renderRecipes();
  });
});

search.addEventListener("input", renderRecipes);

document.getElementById("closeDialog")
  .addEventListener("click", closeRecipe);

dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    closeRecipe();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeRecipe();
  }
});

document.getElementById("sweetCount").textContent =
  sweetRecipes.length;

document.getElementById("savoryCount").textContent =
  savoryRecipes.length;

document.getElementById("allCount").textContent =
  recipes.length;

if (
  sweetRecipes.length !== 200 ||
  savoryRecipes.length !== 200 ||
  recipes.length !== 400
) {
  console.error("Erro na quantidade de receitas:", {
    doces: sweetRecipes.length,
    salgadas: savoryRecipes.length,
    total: recipes.length
  });
} else {
  console.info("Catálogo carregado: 200 doces + 200 salgadas = 400 fichas.");
}

renderRecipes();
