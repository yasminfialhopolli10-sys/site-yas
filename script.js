const variacoesDoces = [
  "tradicional",
  "com chocolate",
  "com morango",
  "com coco",
  "com leite condensado",
  "com baunilha",
  "com frutas",
  "cremoso",
  "caseiro",
  "especial"
];

const variacoesSalgadas = [
  "tradicional",
  "com queijo",
  "com frango",
  "com legumes",
  "ao forno",
  "cremoso",
  "caseiro",
  "com ervas",
  "especial",
  "gratinado"
];

const basesDoces = [
  "Bolo de cenoura", "Bolo de chocolate", "Bolo de fubá",
  "Bolo de limão", "Bolo de laranja", "Bolo de coco",
  "Brigadeiro", "Beijinho", "Pudim", "Mousse",
  "Torta de maçã", "Torta de limão", "Brownie",
  "Cookie", "Cupcake", "Panqueca doce", "Waffle",
  "Pavê", "Arroz doce", "Cheesecake"
];

const basesSalgadas = [
  "Lasanha", "Escondidinho", "Torta salgada", "Empadão",
  "Quiche", "Panqueca salgada", "Pizza", "Hambúrguer caseiro",
  "Almôndegas", "Frango assado", "Strogonoff", "Macarrão",
  "Risoto", "Esfiha", "Pastel", "Pão recheado",
  "Batata gratinada", "Sopa cremosa", "Salada especial",
  "Arroz de forno"
];

// Fotos reais de alimentos hospedadas no Unsplash.
// São imagens ilustrativas: podem não representar exatamente a variação da receita.
const fotosDoces = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
];

const fotosSalgadas = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
  "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800"
];

const ingredientesDoces = [
  "2 xícaras de farinha de trigo",
  "1 xícara de açúcar",
  "2 ovos",
  "1 xícara de leite",
  "2 colheres de manteiga",
  "1 colher de fermento em pó",
  "1 pitada de sal",
  "1 colher de essência de baunilha"
];

const ingredientesSalgados = [
  "2 xícaras de farinha de trigo",
  "2 ovos",
  "1 xícara de leite",
  "2 colheres de azeite",
  "1 cebola picada",
  "2 dentes de alho",
  "1 xícara de queijo ralado",
  "Sal e pimenta a gosto",
  "Cheiro-verde a gosto"
];

const preparosDoces = [
  "Separe todos os ingredientes e preaqueça o forno a 180 °C, se a receita precisar assar.",
  "Em uma tigela, misture os ingredientes secos.",
  "Acrescente os ovos, o leite e a manteiga. Misture até obter uma massa homogênea.",
  "Adicione os ingredientes de sabor indicados no nome da receita.",
  "Coloque em uma forma untada ou no recipiente adequado.",
  "Asse por aproximadamente 30 a 40 minutos, quando for uma preparação de forno, ou cozinhe conforme a consistência desejada.",
  "Espere esfriar antes de servir. Finalize com a cobertura ou decoração de sua preferência."
];

const preparosSalgados = [
  "Organize os ingredientes e pique os vegetais.",
  "Aqueça o azeite em uma panela e refogue a cebola e o alho.",
  "Acrescente o ingrediente principal e tempere com sal, pimenta e cheiro-verde.",
  "Prepare a massa ou a base da receita, misturando os ingredientes indicados.",
  "Junte o recheio à massa ou ao acompanhamento.",
  "Leve ao forno preaquecido a 180 °C por aproximadamente 30 a 40 minutos, se for uma receita assada. Para receitas de panela, cozinhe até os ingredientes ficarem macios e bem cozidos.",
  "Confira o cozimento, ajuste os temperos e sirva."
];

function criarReceitas(bases, variacoes, tipo) {
  const receitas = [];

  bases.forEach((base, indiceBase) => {
    variacoes.forEach((variacao, indiceVariacao) => {
      const doce = tipo === "doce";
      const nome = `${base} ${variacao}`;

      receitas.push({
        id: `${tipo}-${indiceBase}-${indiceVariacao}`,
        nome,
        tipo,
        foto: doce
          ? fotosDoces[(indiceBase + indiceVariacao) % fotosDoces.length]
          : fotosSalgadas[(indiceBase + indiceVariacao) % fotosSalgadas.length],
        ingredientes: doce
          ? [...ingredientesDoces, "Ingrediente de sabor: " + variacao]
          : [...ingredientesSalgados, "Ingrediente principal: " + base],
        preparo: doce ? preparosDoces : preparosSalgados,
        tempo: doce ? "35 minutos" : "45 minutos"
      });
    });
  });

  return receitas;
}

const receitas = [
  ...criarReceitas(basesDoces, variacoesDoces, "doce"),
  ...criarReceitas(basesSalgadas, variacoesSalgadas, "salgada")
];

const catalogo = document.getElementById("catalogo");
const pesquisa = document.getElementById("pesquisa");
const contador = document.getElementById("contador");
const mensagemVazia = document.getElementById("mensagemVazia");
const modal = document.getElementById("modal");
const detalhes = document.getElementById("detalhes");

let filtroAtual = "todas";

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[caractere]);
}

function mostrarReceitas() {
  const termo = pesquisa.value.trim().toLowerCase();

  const filtradas = receitas.filter(receita => {
    const combinaTipo =
      filtroAtual === "todas" || receita.tipo === filtroAtual;

    const combinaNome = receita.nome.toLowerCase().includes(termo);

    return combinaTipo && combinaNome;
  });

  catalogo.innerHTML = filtradas.map(receita => `
    <article class="receita-card">
      <img
        src="${receita.foto}"
        alt="Imagem ilustrativa de ${escaparHTML(receita.nome)}"
        loading="lazy"
        onerror="this.src='https://placehold.co/600x400/ffe5ef/9b5272?text=Receita'"
      >

      <div class="card-info">
        <span class="etiqueta ${receita.tipo}">
          ${receita.tipo === "doce" ? "🍰 Doce" : "🍕 Salgada"}
        </span>

        <h2>${escaparHTML(receita.nome)}</h2>
        <p>⏱️ ${receita.tempo}</p>

        <button
          class="ver-receita"
          onclick="abrirReceita('${receita.id}')"
        >
          Ver receita
        </button>
      </div>
    </article>
  `).join("");

  contador.textContent = `Mostrando ${filtradas.length} receitas`;
  mensagemVazia.hidden = filtradas.length !== 0;
}

function abrirReceita(id) {
  const receita = receitas.find(item => item.id === id);

  if (!receita) return;

  const listaIngredientes = receita.ingredientes
    .map(item => `<li>${escaparHTML(item)}</li>`)
    .join("");

  const listaPreparo = receita.preparo
    .map((item, indice) => `
      <p><strong>${indice + 1}.</strong> ${escaparHTML(item)}</p>
    `)
    .join("");

  detalhes.innerHTML = `
    <img
      class="detalhe-foto"
      src="${receita.foto}"
      alt="Imagem ilustrativa de ${escaparHTML(receita.nome)}"
    >

    <span class="etiqueta ${receita.tipo}">
      ${receita.tipo === "doce" ? "🍰 Receita doce" : "🍕 Receita salgada"}
    </span>

    <h2>${escaparHTML(receita.nome)}</h2>
    <p>⏱️ Tempo aproximado: ${receita.tempo}</p>

    <h3>🛒 Ingredientes</h3>
    <ul>${listaIngredientes}</ul>

    <h3>👩‍🍳 Modo de preparo</h3>
    <div class="preparo">${listaPreparo}</div>

    <h3>✨ Preparando a receita...</h3>
    <div class="animacao" aria-label="Animação de preparo">
      <span>🥣</span>
      <span>🥄</span>
      <span>🍓</span>
      <span>🍰</span>
    </div>
  `;

  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharReceita() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".filtro").forEach(botao => {
  botao.addEventListener("click", () => {
    document.querySelector(".filtro.ativo")?.classList.remove("ativo");
    botao.classList.add("ativo");

    filtroAtual = botao.dataset.tipo;
    mostrarReceitas();
  });
});

pesquisa.addEventListener("input", mostrarReceitas);

document.getElementById("fecharModal").addEventListener("click", fecharReceita);

modal.addEventListener("click", evento => {
  if (evento.target === modal) fecharReceita();
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") fecharReceita();
});

// Confere a quantidade criada no catálogo.
document.getElementById("totalDoces").textContent =
  receitas.filter(r => r.tipo === "doce").length;

document.getElementById("totalSalgadas").textContent =
  receitas.filter(r => r.tipo === "salgada").length;

document.getElementById("totalReceitas").textContent = receitas.length;

mostrarReceitas();