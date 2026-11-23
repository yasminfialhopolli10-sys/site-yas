document.querySelectorAll(".filtro").forEach(botao => {
  botao.addEventListener("click", function () {
    document.querySelectorAll(".filtro").forEach(b => {
      b.classList.remove("ativo");
    });

    this.classList.add("ativo");
    filtroAtual = this.dataset.tipo;

    mostrarReceitas();
  });
});

pesquisa.addEventListener("input", mostrarReceitas);

document.getElementById("fecharModal").addEventListener("click", fecharReceita);

modal.addEventListener("click", evento => {
  if (evento.target === modal) {
    fecharReceita();
  }
});

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") fecharReceita();
});

const quantidadeDoces = receitas.filter(r => r.tipo === "doce").length;
const quantidadeSalgadas = receitas.filter(r => r.tipo === "salgada").length;

document.getElementById("totalDoces").textContent = quantidadeDoces;
document.getElementById("totalSalgadas").textContent = quantidadeSalgadas;
document.getElementById("totalReceitas").textContent = receitas.length;

filtroAtual = "todas";
mostrarReceitas();
const receitas = [
  ...criarReceitas(basesDoces, variacoesDoces, "doce"),
  ...criarReceitas(basesSalgadas, variacoesSalgadas, "salgada")
];