// Creado por Wulfgard
document.addEventListener("DOMContentLoaded", () => {
  // Distancia
  const metros = document.getElementById("metros");
  const pies = document.getElementById("pies");

  metros.addEventListener("input", () => {
    pies.value = (parseFloat(metros.value) * 3.28084).toFixed(2);
  });

  pies.addEventListener("input", () => {
    metros.value = (parseFloat(pies.value) * 0.3048).toFixed(2);
  });

  // Peso
  const kilos = document.getElementById("kilos");
  const libras = document.getElementById("libras");

  kilos.addEventListener("input", () => {
    libras.value = (parseFloat(kilos.value) * 2.20462).toFixed(2);
  });

  libras.addEventListener("input", () => {
    kilos.value = (parseFloat(libras.value) * 0.45359).toFixed(2);
  });

  // Monedas D&D
  const monedas = {
    pc: document.getElementById("pc"),
    pp: document.getElementById("pp"),
    pe: document.getElementById("pe"),
    po: document.getElementById("po"),
    ppt: document.getElementById("ppt")
  };

  const tasas = {
    pc: 1,
    pp: 10,
    pe: 50,
    po: 100,
    ppt: 1000
  };

  Object.keys(monedas).forEach((moneda) => {
    monedas[moneda].addEventListener("input", () => {
      const valorBase = parseFloat(monedas[moneda].value || 0) * tasas[moneda];
      Object.keys(monedas).forEach((otra) => {
        if (otra !== moneda) {
          monedas[otra].value = (valorBase / tasas[otra]).toFixed(2);
        }
      });
    });
  });

  // Reset
  document.querySelectorAll(".reset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tipo = btn.getAttribute("data-reset");
      if (tipo === "distancia") {
        metros.value = "";
        pies.value = "";
      } else if (tipo === "peso") {
        kilos.value = "";
        libras.value = "";
      } else if (tipo === "monedas") {
        Object.values(monedas).forEach((input) => (input.value = ""));
      }
    });
  });
});
