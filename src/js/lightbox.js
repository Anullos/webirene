const imagenes = document.querySelectorAll(".porta");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");

const portafolioImg = [
  "./assets/img/temporal/img1.jpg",
  "./assets/img/temporal/img2.jpg",
  "./assets/img/temporal/img3.jpg",
  "./assets/img/temporal/img4.jpg",
];

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    //  aparecerImagen(imagen.getAttribute('src'));
    aparecerImagen(imagen.id);
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (contenedorLight.classList.contains("show") && e.target != imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
  }
});

const aparecerImagen = (id) => {
  const imagen = portafolioImg[id];
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImage");
};
