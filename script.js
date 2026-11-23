
const makeRecipe = (
  name, emoji, category, time, description,
  ingredients, steps, tip, theme
) => ({
  name, emoji, category, time, description,
  ingredients, steps, tip, theme
});

const recipes = [
  makeRecipe("Bolo de Chocolate", "🍫", "Bolos", "50 minutos",
    "Bolo fofinho com muito sabor de chocolate.",
    ["2 xícaras de farinha", "1 xícara de açúcar", "1 xícara de chocolate em pó", "3 ovos", "1 xícara de leite", "1/2 xícara de óleo", "1 colher de fermento"],
    ["Misture os ovos, o açúcar e o óleo.", "Acrescente o leite e o chocolate.", "Adicione a farinha aos poucos.", "Misture o fermento delicadamente.", "Coloque em uma forma untada.", "Asse a 180 °C por cerca de 35 a 40 minutos."],
    "Finalize com cobertura de chocolate.",
    ["#f2d1bd", "#8b4b32", "#633a2c"]),

  makeRecipe("Bolo de Cenoura", "🥕", "Bolos", "50 minutos",
    "Bolo macio de cenoura com cobertura de chocolate.",
    ["3 cenouras médias", "3 ovos", "1 xícara de óleo", "2 xícaras de açúcar", "2 xícaras de farinha", "1 colher de fermento"],
    ["Bata as cenouras, os ovos e o óleo.", "Transfira para uma tigela.", "Misture o açúcar e a farinha.", "Acrescente o fermento.", "Coloque em forma untada.", "Asse a 180 °C por cerca de 40 minutos."],
    "Uma cobertura de chocolate combina muito bem.",
    ["#ffe0b2", "#ed8b32", "#75451d"]),

  makeRecipe("Bolo de Fubá", "🌽", "Bolos", "45 minutos",
    "Bolo tradicional, macio e delicioso.",
    ["2 xícaras de fubá", "1 xícara de farinha", "2 xícaras de açúcar", "3 ovos", "1 xícara de leite", "1/2 xícara de óleo", "1 colher de fermento"],
    ["Misture os ovos, o leite e o óleo.", "Adicione o açúcar, o fubá e a farinha.", "Mexa até ficar uniforme.", "Acrescente o fermento.", "Despeje em forma untada.", "Asse a 180 °C por 35 minutos."],
    "Sirva depois de esfriar um pouco.",
    ["#fff0bd", "#d6a84b", "#72501d"]),

  makeRecipe("Bolo de Coco", "🥥", "Bolos", "45 minutos",
    "Bolo fofinho com sabor delicado de coco.",
    ["2 xícaras de farinha", "1 xícara de açúcar", "3 ovos", "1 xícara de leite de coco", "1/2 xícara de óleo", "1/2 xícara de coco ralado", "1 colher de fermento"],
    ["Misture os ovos, o açúcar e o óleo.", "Adicione o leite de coco.", "Acrescente a farinha e o coco.", "Misture o fermento.", "Coloque em forma untada.", "Asse a 180 °C por 35 a 40 minutos."],
    "Polvilhe coco ralado por cima.",
    ["#fff4df", "#c49b6c", "#70553a"]),

  makeRecipe("Bolo de Limão", "🍋", "Bolos", "45 minutos",
    "Bolo leve com um toque cítrico.",
    ["2 xícaras de farinha", "1 xícara de açúcar", "3 ovos", "1/2 xícara de óleo", "1/2 xícara de leite", "Suco de 2 limões", "1 colher de fermento"],
    ["Misture os ovos e o açúcar.", "Adicione o óleo, o leite e o limão.", "Acrescente a farinha.", "Misture o fermento.", "Coloque em forma untada.", "Asse a 180 °C por cerca de 35 minutos."],
    "Faça uma cobertura com limão e açúcar de confeiteiro.",
    ["#eff6bd", "#b6c94b", "#596329"]),

  makeRecipe("Brigadeiro", "🍫", "Docinhos", "25 minutos",
    "Docinho tradicional das festas brasileiras.",
    ["1 lata de leite condensado", "3 colheres de chocolate em pó", "1 colher de manteiga", "Chocolate granulado"],
    ["Coloque o leite condensado em uma panela.", "Adicione o chocolate e a manteiga.", "Misture em fogo baixo com ajuda de um adulto.", "Mexa até engrossar.", "Deixe esfriar completamente.", "Enrole e passe no granulado."],
    "Unte as mãos com um pouquinho de manteiga para enrolar.",
    ["#ead0bd", "#75412f", "#553326"]),

  makeRecipe("Beijinho", "🥥", "Docinhos", "25 minutos",
    "Docinho cremoso feito com coco.",
    ["1 lata de leite condensado", "1 colher de manteiga", "100 g de coco ralado", "Cravos para decorar"],
    ["Misture o leite condensado e a manteiga.", "Adicione o coco.", "Leve ao fogo baixo com ajuda de um adulto.", "Mexa até engrossar.", "Deixe esfriar.", "Enrole e passe no coco ralado."],
    "Decore cada unidade com um cravo.",
    ["#fff1dc", "#c9a47c", "#72553c"]),

  makeRecipe("Cajuzinho", "🥜", "Docinhos", "20 minutos",
    "Docinho de amendoim perfeito para festas.",
    ["1 xícara de amendoim torrado e moído", "1/2 xícara de açúcar", "3 colheres de chocolate em pó", "Leite condensado até dar ponto"],
    ["Misture o amendoim, o açúcar e o chocolate.", "Adicione o leite condensado aos poucos.", "Misture até formar uma massa moldável.", "Modele em formato de cajuzinho.", "Passe no açúcar.", "Decore com um pedacinho de amendoim."],
    "Acrescente o leite condensado aos poucos.",
    ["#f1d6b5", "#a76b37", "#694322"]),

  makeRecipe("Palha Italiana", "🍪", "Docinhos", "30 minutos",
    "Brigadeiro com pedacinhos crocantes de biscoito.",
    ["1 lata de leite condensado", "3 colheres de chocolate em pó", "1 colher de manteiga", "1 pacote de biscoito maisena"],
    ["Prepare um brigadeiro com o leite condensado, chocolate e manteiga.", "Desligue o fogo.", "Quebre os biscoitos em pedaços.", "Misture os biscoitos ao brigadeiro.", "Espalhe em uma forma forrada.", "Espere esfriar e corte em quadradinhos."],
    "Passe os pedaços no açúcar de confeiteiro.",
    ["#e9d3c7", "#80533d", "#593a2d"]),

  makeRecipe("Trufa de Chocolate", "🍬", "Docinhos", "40 minutos",
    "Pequenas delícias com recheio cremoso.",
    ["200 g de chocolate", "1/2 caixa de creme de leite", "Chocolate em pó para finalizar"],
    ["Derreta o chocolate em banho-maria com supervisão de um adulto.", "Misture o creme de leite.", "Leve à geladeira até firmar.", "Modele pequenas porções.", "Passe no chocolate em pó.", "Mantenha refrigerado."],
    "Use chocolate de boa qualidade.",
    ["#ead5d0", "#704139", "#4c302b"]),

  makeRecipe("Mousse de Maracujá", "🍈", "Mousses", "15 minutos + geladeira",
    "Mousse cremosa e refrescante.",
    ["1 lata de leite condensado", "1 caixa de creme de leite", "1 medida de suco concentrado de maracujá"],
    ["Coloque todos os ingredientes no liquidificador.", "Bata até ficar cremoso.", "Distribua em potinhos.", "Leve à geladeira por pelo menos 3 horas.", "Sirva gelado."],
    "Decore com polpa de maracujá.",
    ["#fff0c2", "#e6a52c", "#76501d"]),

  makeRecipe("Mousse de Limão", "🍋", "Mousses", "15 minutos + geladeira",
    "Sobremesa cremosa com sabor de limão.",
    ["1 lata de leite condensado", "1 caixa de creme de leite", "Suco de 3 limões"],
    ["Coloque os ingredientes no liquidificador.", "Bata até engrossar.", "Coloque em uma travessa.", "Leve à geladeira por 3 horas.", "Decore com raspas de limão."],
    "Use raspas da parte verde da casca.",
    ["#f0f6c6", "#b7c94f", "#56612a"]),

  makeRecipe("Mousse de Morango", "🍓", "Mousses", "15 minutos + geladeira",
    "Mousse delicada feita com morangos.",
    ["1 caixa de morangos", "1 lata de leite condensado", "1 caixa de creme de leite"],
    ["Lave bem os morangos.", "Reserve alguns para decorar.", "Bata os demais com os outros ingredientes.", "Distribua em taças.", "Leve à geladeira por 3 horas.", "Decore com morangos."],
    "Use morangos frescos e maduros.",
    ["#ffe0e8", "#e77c9b", "#79394d"]),

  makeRecipe("Mousse de Chocolate", "🍫", "Mousses", "20 minutos + geladeira",
    "Sobremesa aerada e cheia de chocolate.",
    ["200 g de chocolate meio amargo", "1 caixa de creme de leite", "3 claras pasteurizadas", "3 colheres de açúcar"],
    ["Derreta o chocolate com supervisão de um adulto.", "Misture o creme de leite.", "Bata as claras pasteurizadas com o açúcar.", "Incorpore delicadamente ao chocolate frio.", "Distribua em taças.", "Leve à geladeira por 4 horas."],
    "Misture delicadamente para manter a leveza.",
    ["#e8d4c8", "#80513c", "#57372b"]),

  makeRecipe("Mousse de Coco", "🥥", "Mousses", "15 minutos + geladeira",
    "Mousse suave com coco ralado.",
    ["1 lata de leite condensado", "1 caixa de creme de leite", "200 ml de leite de coco", "1/2 xícara de coco ralado", "1 envelope de gelatina incolor preparada"],
    ["Prepare a gelatina conforme a embalagem.", "Bata os outros ingredientes no liquidificador.", "Adicione a gelatina preparada.", "Bata novamente.", "Coloque em uma travessa.", "Leve à geladeira até firmar."],
    "Finalize com coco ralado.",
    ["#fff2df", "#c6a47b", "#72583d"]),

  makeRecipe("Pudim de Leite", "🍮", "Sobremesas", "1 hora + geladeira",
    "Pudim clássico, lisinho e cremoso.",
    ["1 lata de leite condensado", "2 medidas de leite", "3 ovos", "1 xícara de açúcar para a calda"],
    ["Peça ajuda de um adulto para preparar a calda.", "Bata o leite condensado, o leite e os ovos.", "Despeje na forma caramelizada.", "Cubra com papel-alumínio.", "Asse em banho-maria a 180 °C por cerca de 1 hora.", "Espere esfriar e leve à geladeira antes de desenformar."],
    "Deixe gelar bem antes de desenformar.",
    ["#f8dfb0", "#c18a42", "#714b24"]),

  makeRecipe("Arroz Doce", "🍚", "Sobremesas", "40 minutos",
    "Doce cremoso com um toque de canela.",
    ["1 xícara de arroz", "2 xícaras de água", "500 ml de leite", "1/2 lata de leite condensado", "Canela a gosto"],
    ["Cozinhe o arroz na água.", "Quando estiver macio, adicione o leite.", "Acrescente o leite condensado.", "Mexa em fogo baixo com supervisão de um adulto.", "Cozinhe até ficar cremoso.", "Finalize com canela."],
    "Pode ser servido quente ou gelado.",
    ["#f7e7d2", "#c39a70", "#71533a"]),

  makeRecipe("Gelatina Colorida", "🍧", "Sobremesas", "30 minutos + geladeira",
    "Sobremesa alegre e cheia de cores.",
    ["3 sabores de gelatina", "1 caixa de creme de leite", "1 lata de leite condensado", "1 envelope de gelatina incolor preparada"],
    ["Prepare os sabores de gelatina separadamente.", "Leve à geladeira até firmarem.", "Corte em cubinhos.", "Bata o creme de leite, o leite condensado e a gelatina incolor.", "Misture os cubinhos delicadamente.", "Leve à geladeira até firmar."],
    "Escolha sabores de cores diferentes.",
    ["#fce0ed", "#db83b3", "#75445f"]),

  makeRecipe("Pavê de Chocolate", "🍫", "Sobremesas", "30 minutos + geladeira",
    "Camadas de creme e biscoito.",
    ["1 pacote de biscoito maisena", "1 lata de leite condensado", "2 xícaras de leite", "2 colheres de amido de milho", "3 colheres de chocolate em pó", "1 caixa de creme de leite"],
    ["Misture o leite condensado, o leite, o amido e o chocolate.", "Cozinhe em fogo baixo com ajuda de um adulto até engrossar.", "Desligue e misture o creme de leite.", "Monte camadas de creme e biscoito.", "Finalize com creme.", "Leve à geladeira por 4 horas."],
    "Decore com raspas de chocolate.",
    ["#ead5c9", "#85533e", "#57392c"]),

  makeRecipe("Banana Caramelizada", "🍌", "Sobremesas", "20 minutos",
    "Bananas macias com uma calda docinha.",
    ["4 bananas", "1/2 xícara de açúcar", "1/4 xícara de água", "Canela a gosto"],
    ["Corte as bananas ao meio.", "Com ajuda de um adulto, prepare o caramelo em uma panela.", "Acrescente a água com cuidado.", "Adicione as bananas.", "Cozinhe até ficarem macias.", "Finalize com canela."],
    "Sirva com uma bola de sorvete.",
    ["#fff0bd", "#dba33e", "#70501d"]),

  makeRecipe("Torta de Limão", "🍋", "Tortas", "45 minutos + geladeira",
    "Torta com creme cítrico e base crocante.",
    ["200 g de biscoito maisena", "100 g de manteiga derretida", "1 lata de leite condensado", "1 caixa de creme de leite", "Suco de 3 limões"],
    ["Triture os biscoitos.", "Misture com a manteiga.", "Forre o fundo de uma forma.", "Misture o leite condensado, o creme de leite e o limão.", "Espalhe sobre a base.", "Leve à geladeira por 4 horas."],
    "Decore com raspas de limão.",
    ["#eff5c6", "#b7c94f", "#58642b"]),

  makeRecipe("Torta de Morango", "🍓", "Tortas", "1 hora + geladeira",
    "Torta delicada com morangos frescos.",
    ["200 g de biscoito maisena", "100 g de manteiga", "1 lata de leite condensado", "500 ml de leite", "2 colheres de amido de milho", "Morangos para decorar"],
    ["Triture os biscoitos e misture com a manteiga.", "Forre uma forma.", "Misture o leite condensado, o leite e o amido.", "Cozinhe com supervisão de um adulto até engrossar.", "Espalhe o creme sobre a base fria.", "Decore com morangos e leve à geladeira."],
    "Seque os morangos antes de decorar.",
    ["#ffe0e8", "#df7999", "#77384e"]),

  makeRecipe("Torta de Maçã", "🍎", "Tortas", "1 hora",
    "Torta aromática com maçãs e canela.",
    ["2 xícaras de farinha", "100 g de manteiga", "1/2 xícara de açúcar", "1 ovo", "3 maçãs", "Canela a gosto"],
    ["Misture a farinha, a manteiga, o açúcar e o ovo.", "Forre uma forma com a massa.", "Corte as maçãs em fatias.", "Distribua sobre a massa.", "Polvilhe açúcar e canela.", "Asse a 180 °C por cerca de 35 minutos."],
    "Sirva depois de esfriar um pouco.",
    ["#f7e1c8", "#bd8051", "#75472d"]),

  makeRecipe("Torta de Chocolate", "🍫", "Tortas", "40 minutos + geladeira",
    "Torta cremosa para os apaixonados por chocolate.",
    ["200 g de biscoito de chocolate", "100 g de manteiga", "200 g de chocolate", "1 caixa de creme de leite"],
    ["Triture os biscoitos.", "Misture com a manteiga.", "Forre uma forma.", "Derreta o chocolate com supervisão de um adulto.", "Misture o creme de leite.", "Coloque sobre a base e leve à geladeira por 3 horas."],
    "Finalize com raspas de chocolate.",
    ["#e7d2ca", "#784b3b", "#50342c"]),

  makeRecipe("Torta de Coco", "🥥", "Tortas", "50 minutos",
    "Torta cremosa com coco ralado.",
    ["2 xícaras de farinha", "100 g de manteiga", "1/2 xícara de açúcar", "1 ovo", "1 lata de leite condensado", "100 g de coco ralado"],
    ["Misture a farinha, a manteiga, o açúcar e o ovo.", "Forre uma forma.", "Misture o leite condensado e o coco.", "Espalhe sobre a massa.", "Asse a 180 °C por cerca de 35 minutos.", "Espere esfriar para servir."],
    "Use coco fresco para um sabor especial.",
    ["#fff0df", "#c5a17a", "#70553b"]),

  makeRecipe("Cookies de Chocolate", "🍪", "Biscoitos", "30 minutos",
    "Cookies macios com gotas de chocolate.",
    ["2 xícaras de farinha", "100 g de manteiga", "1/2 xícara de açúcar", "1 ovo", "1/2 xícara de gotas de chocolate", "1 colher de fermento"],
    ["Misture a manteiga e o açúcar.", "Adicione o ovo.", "Acrescente a farinha e o fermento.", "Misture as gotas de chocolate.", "Modele bolinhas e coloque em assadeira.", "Asse a 180 °C por 12 a 15 minutos."],
    "Deixe espaço entre os cookies.",
    ["#f0ddc8", "#a8754c", "#68452c"]),

  makeRecipe("Biscoito de Maisena", "🍪", "Biscoitos", "30 minutos",
    "Biscoitinhos leves que derretem na boca.",
    ["2 xícaras de amido de milho", "1/2 lata de leite condensado", "100 g de manteiga"],
    ["Misture todos os ingredientes.", "Amasse até formar uma massa uniforme.", "Modele pequenas bolinhas.", "Coloque em uma assadeira.", "Achate levemente com um garfo.", "Asse a 180 °C por cerca de 15 minutos."],
    "Não deixe dourar demais.",
    ["#fff0dc", "#c8a77c", "#73583c"]),

  makeRecipe("Biscoito de Canela", "🍪", "Biscoitos", "30 minutos",
    "Biscoitos crocantes e perfumados.",
    ["2 xícaras de farinha", "100 g de manteiga", "1/2 xícara de açúcar", "1 ovo", "1 colher de canela", "1 colher de fermento"],
    ["Misture a manteiga e o açúcar.", "Adicione o ovo.", "Acrescente farinha, canela e fermento.", "Modele os biscoitos.", "Coloque em uma assadeira.", "Asse a 180 °C por 12 a 15 minutos."],
    "Passe os biscoitos em açúcar com canela.",
    ["#f1dfc9", "#b47b4c", "#6c462c"]),

  makeRecipe("Biscoito de Coco", "🥥", "Biscoitos", "30 minutos",
    "Biscoitos delicados com coco ralado.",
    ["2 xícaras de farinha", "1/2 xícara de coco ralado", "100 g de manteiga", "1/2 xícara de açúcar", "1 ovo"],
    ["Misture a manteiga e o açúcar.", "Adicione o ovo.", "Acrescente a farinha e o coco.", "Modele os biscoitos.", "Coloque em uma assadeira.", "Asse a 180 °C por cerca de 15 minutos."],
    "Espere esfriar antes de guardar.",
    ["#fff0df", "#c5a17a", "#70553b"]),

  makeRecipe("Brownie", "🍫", "Bolos", "40 minutos",
    "Brownie úmido e intenso de chocolate.",
    ["200 g de chocolate", "100 g de manteiga", "1 xícara de açúcar", "2 ovos", "3/4 de xícara de farinha"],
    ["Derreta o chocolate com a manteiga com ajuda de um adulto.", "Misture o açúcar.", "Adicione os ovos.", "Acrescente a farinha.", "Despeje em uma forma forrada.", "Asse a 180 °C por cerca de 25 minutos."],
    "Espere esfriar antes de cortar os quadradinhos.",
    ["#ead3c5", "#794832", "#543326"]),

  makeRecipe("Cupcake de Baunilha", "🧁", "Bolos", "35 minutos",
    "Bolinhos fofinhos com cobertura cremosa.",
    ["1 e 1/2 xícara de farinha", "3/4 de xícara de açúcar", "2 ovos", "1/2 xícara de leite", "1/3 de xícara de óleo", "1 colher de fermento", "Essência de baunilha"],
    ["Misture os ovos e o açúcar.", "Adicione o leite, o óleo e a baunilha.", "Acrescente a farinha.", "Misture o fermento.", "Distribua em forminhas até a metade.", "Asse a 180 °C por cerca de 20 minutos."],
    "Decore com cobertura depois de esfriar.",
    ["#ffe4ed", "#df91b1", "#78445c"]),

  makeRecipe("Doce de Leite Ninho", "🥛", "Docinhos", "20 minutos",
    "Docinho macio com leite em pó.",
    ["2 xícaras de leite em pó", "1 xícara de açúcar de confeiteiro", "Leite condensado até dar ponto"],
    ["Misture o leite em pó e o açúcar.", "Adicione o leite condensado aos poucos.", "Mexa até formar uma massa.", "Modele pequenas bolinhas.", "Passe no leite em pó.", "Coloque em forminhas."],
    "Acrescente o leite condensado devagar para acertar o ponto.",
    ["#fff0dc", "#c7a77d", "#73583c"]),

  makeRecipe("Doce de Abóbora", "🎃", "Docinhos", "45 minutos",
    "Doce caseiro com abóbora e coco.",
    ["500 g de abóbora descascada", "1 xícara de açúcar", "1/2 xícara de coco ralado", "Cravo e canela a gosto"],
    ["Corte a abóbora em cubos.", "Coloque em uma panela com o açúcar.", "Cozinhe em fogo baixo com ajuda de um adulto.", "Mexa até a abóbora desmanchar.", "Adicione o coco e os temperos.", "Deixe esfriar antes de servir."],
    "Fica delicioso servido gelado.",
    ["#ffe2c5", "#e68a42", "#79421f"])
];

// Elementos da página
const recipeList = document.getElementById("recipeList");
const searchInput = document.getElementById("searchInput");
const categories = document.getElementById("categories");
const details = document.getElementById("details");
const resultCount = document.getElementById("resultCount");

let selectedCategory = "Todas";

// Mostra os cartões das receitas
function showRecipes() {
  const search = searchInput.value.trim().toLowerCase();

  const filtered = recipes
    .map((recipe, index) => ({ ...recipe, id: index }))
    .filter(recipe => {
      const matchesCategory =
        selectedCategory === "Todas" ||
        recipe.category === selectedCategory;

      const searchableText = [
        recipe.name,
        recipe.category,
        recipe.description,
        ...recipe.ingredients
      ].join(" ").toLowerCase();

      return matchesCategory && searchableText.includes(search);
    });

  resultCount.textContent =
    `${filtered.length} receita(s) encontrada(s)`;

  recipeList.innerHTML = "";

  if (filtered.length === 0) {
    recipeList.innerHTML =
      '<p class="sem-resultados">Nenhuma receita encontrada. 🍓</p>';
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--fundo", recipe.theme[0]);
    card.style.setProperty("--detalhe", recipe.theme[1]);

    card.innerHTML = `
      <div class="card-emoji">${recipe.emoji}</div>
      <div class="card-conteudo">
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <small>⏰ ${recipe.time} · ${recipe.category}</small>
        <button type="button" data-recipe="${recipe.id}">
          Ver receita 💗
        </button>
      </div>
    `;

    recipeList.appendChild(card);
  });
}

// Abre uma receita completa
function openRecipe(id) {
  const recipe = recipes[id];

  if (!recipe) return;

  const theme = recipe.theme;

  details.style.setProperty("--fundo", theme[0]);
  details.style.setProperty("--detalhe", theme[1]);
  details.style.setProperty("--texto", theme[2]);

  const ingredientItems = recipe.ingredients
    .map(item => `<li>${item}</li>`)
    .join("");

  const stepItems = recipe.steps
    .map(item => `<li>${item}</li>`)
    .join("");

  details.innerHTML = `
    <div class="detalhe-emoji">${recipe.emoji}</div>

    <h1>${recipe.name}</h1>

    <p class="informacoes">
      ⏰ ${recipe.time} &nbsp; | &nbsp;
      🍰 ${recipe.category}
    </p>

    <p>${recipe.description}</p>

    <h2>🛒 Ingredientes</h2>
    <ul>${ingredientItems}</ul>

    <h2>👩‍🍳 Modo de preparo</h2>
    <ol>${stepItems}</ol>

    <div class="dica">
      <strong>💡 Dica especial:</strong>
      <p>${recipe.tip}</p>
    </div>

    <section class="animacao">
      <h2>✨ Hora de preparar!</h2>
      <p>Olha só a nossa sobremesa ganhando vida!</p>

      <div class="cena" aria-label="Animação da preparação da receita">
        <span class="ingrediente um">${getIngredientEmoji(recipe.category)}</span>
        <span class="ingrediente dois">${getSecondEmoji(recipe.category)}</span>
        <span class="ingrediente tres">✨</span>
        <span class="tigela">🥣</span>
        <span class="colher">🥄</span>
        <span class="sobremesa-pronta">${recipe.emoji}</span>
        <span class="brulhinho">⭐</span>
      </div>

      <p class="animacao-legenda">
        Misturando os ingredientes, preparando com carinho
        e finalizando nossa delícia! 💗
      </p>
    </section>

    <button class="botao-voltar" type="button" id="backButton">
      ← Voltar para as receitas
    </button>
  `;

  details.hidden = false;
  recipeList.hidden = true;
  searchInput.parentElement.hidden = true;
  categories.hidden = true;
  resultCount.hidden = true;

  details.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Ingredientes animados de acordo com a categoria
function getIngredientEmoji(category) {
  const emojis = {
    "Bolos": "🥚",
    "Docinhos": "🍫",
    "Mousses": "🍓",
    "Sobremesas": "🥛",
    "Tortas": "🍋",
    "Biscoitos": "🍪"
  };

  return emojis[category] || "🍓";
}

function getSecondEmoji(category) {
  const emojis = {
    "Bolos": "🌾",
    "Docinhos": "🥥",
    "Mousses": "🥛",
    "Sobremesas": "🍮",
    "Tortas": "🍪",
    "Biscoitos": "🧈"
  };

  return emojis[category] || "✨";
}

// Clique nos botões de receita e voltar
recipeList.addEventListener("click", event => {
  const button = event.target.closest("[data-recipe]");

  if (button) {
    openRecipe(Number(button.dataset.recipe));
  }
});

details.addEventListener("click", event => {
  if (event.target.closest("#backButton")) {
    details.hidden = true;
    recipeList.hidden = false;
    searchInput.parentElement.hidden = false;
    categories.hidden = false;
    resultCount.hidden = false;

    details.innerHTML = "";
    recipeList.scrollIntoView({ behavior: "smooth" });
  }
});

// Pesquisa
searchInput.addEventListener("input", showRecipes);

// Filtros de categoria
categories.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");

  if (!button) return;

  selectedCategory = button.dataset.category;

  categories.querySelectorAll("button").forEach(item => {
    item.classList.toggle("ativo", item === button);
  });

  showRecipes();
});

// Inicia o site
showRecipes();
