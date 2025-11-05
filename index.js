const botao = document.getElementById("button");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", calcularSabao);

function calcularSabao() {
  const pesoBruto = Number(document.getElementById("peso").value);
  const pesoLiquido = pesoBruto - 534;
  const tipodeCarga = document.querySelectorAll('input[name="tipo"]');
  const tipoSelecionado = Array.from(tipodeCarga).find(
    (radio) => radio.checked
  )?.value;

  resultado.classList.remove("ativo");

  if (!tipoSelecionado || isNaN(pesoBruto) || pesoBruto <= 534) {
    resultado.textContent = "Preencha todos os campos corretamente.";
    resultado.classList.add("ativo");
    return;
  }

  const sabao =
    tipoSelecionado === "pesada"
      ? (pesoLiquido * 13.64) / 1000
      : (pesoLiquido * 9.09) / 1000;

  resultado.textContent = `Você precisará de ${sabao
    .toFixed(1)
    .replace(".", ",")} ml de sabão.`;
  resultado.classList.add("ativo");
}
