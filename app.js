document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "jun",
      img: "images/jun.jpg"
    },
    {
      name: "descarga",
      img: "images/descarga.jpg"
    },
    {
      name: "descargas",
      img: "images/descargas.png"
    },
    {
      name: "hu",
      img: "images/hu.png"
    },
    {
      name: "images",
      img: "images/images.png"
    },
    {
      name: "pales",
      img: "images/pales.jpg"
    },
    {
      name: "jun",
      img: "images/jun.jpg"
    },
    {
      name: "descarga",
      img: "images/descarga.jpg"
    },
    {
      name: "descargas",
      img: "images/descargas.png"
    },
    {
      name: "hu",
      img: "images/hu.png"
    },
    {
      name: "images",
      img: "images/images.png"
    },
    {
      name: "pales",
      img: "images/pales.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
