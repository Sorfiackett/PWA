const container = document.querySelector(".container");
const coffees = [
  {
    name: "Paracetamol",
    image: "images/paracetamol.jpg"
  },
  {
    name: "Aspirinas",
    image: "images/aspirinas.jpg"
  },
  {
    name: "Caretas",
    image: "images/caretas.jpg"
  },
  {
    name: "Agua",
    image: "images/agua.jpg"
  },
  {
    name: "Comida",
    image: "images/comida.jpg"
  },
  {
    name: "Cubrebocas",
    image: "images/cubrebocas.jpg"
  },
  {
    name: "Termometro",
    image: "images/termometro.jpg"
  },
  {
    name: "Gel",
    image: "images/gel.jpg"
  },
  {
    name: "Guantes",
    image: "images/guantes.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">APROBADO</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
