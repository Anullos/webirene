const home = document.getElementById("home");
const container_house = document.getElementById("container_house");
const transition_house = document.getElementById("transition_house");
const flecha = document.getElementById("pulsaaqui");


function cambioPantalla(menu) {
  switch (menu) {
    case "home":
      if (home.classList.contains("ocultar")) {
        home.classList.toggle("ocultar");
        container_house.classList.toggle("ocultar");
        transition_house.classList.toggle("ocultar");
        transition_house.classList.toggle("aumentar");
        flecha.classList.toggle("ocultar");
      }
      break;
    case "about":
      if (container_house.classList.contains("ocultar")) {
        transition_house.classList.add("aumentar");
        setTimeout(function () {
          transition_house.classList.add("ocultar");
          flecha.classList.add("ocultar");
        }, 2800);
        setTimeout(function () {
          home.classList.toggle("ocultar");
          container_house.classList.toggle("ocultar");
          document.getElementById("final").scrollIntoView(true);
        }, 1200);
      }
      break;
    case "portafolio":
      if (container_house.classList.contains("ocultar")) {
        home.classList.toggle("ocultar");
        container_house.classList.toggle("ocultar");
      }
      break;
    case "contact":
      if (container_house.classList.contains("ocultar")) {
        home.classList.toggle("ocultar");
        container_house.classList.toggle("ocultar");
      }
      break;

    default:
      break;
  }
}

function aumentar() {
  transition_house.classList.add("aumentar");
  setTimeout(function () {
    transition_house.classList.add("ocultar");
    flecha.classList.add("ocultar");
  }, 2800);
  setTimeout(function () {
    home.classList.toggle("ocultar");
    container_house.classList.toggle("ocultar");
    document.getElementById("final").scrollIntoView(true);
  }, 1200);
}
