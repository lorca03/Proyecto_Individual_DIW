const goUp = document.querySelector(".irArriba");
function subirArriba(e) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
  if (document.documentElement.scrollTop > 400) {
    document.querySelector(".irArriba").style.display = "block";
    goUp.addEventListener("click", subirArriba);
  } else {
    document.querySelector(".irArriba").style.display = "none";
  }
};

/*pop up */
const btnCerrarModal = document.getElementById("cerrar-modal");
const modal = document.getElementById("modal");

function abrirModal(elemento) {
  const parrafo = elemento.parentNode;
  const titulo = parrafo.querySelector(".pais").textContent;
  const tituloVentana=document.getElementById('tituloVentana');
  const contenido=document.getElementById('contenido');
  switch (titulo) {
    case 'Cancun/Mexico':
      contenido.innerHTML = '<br/>Desde 940€ por persona puedes ir a Cancun y <br />' +
      'disfrutar de unas de las mejores palayas del mundo.<br /><br />'+
      '<img src="../../recursos/cama.png"> 3 dias/ 2 noches'
      break;
    case 'Venecia/Italia':
      contenido.innerHTML = '<br/>Por tan solo 430€ podras visitar Venecia y <br />' +
      'recorrerel Gran Canal en barca, ademas podras <br />'+
      'visistar la basilica de San Marcos.<br /><br />'+
      '<img src="../../recursos/cama.png"> 4 dias/ 3 noches'
      
      break;
    case 'Australia':
      contenido.innerHTML = '<br/>Conoce australia por tan solo 1050€ por <br />' +
      'persona. Podras ver Sydney, su opera  <br />'+
      'y el maravilloso jardin botanico.<br /><br />'+
      '<img src="../../recursos/cama.png"> 4 dias/ 4 noches'
      break;
  }
  tituloVentana.textContent=titulo;
  modal.showModal();
  window.scrollTo(800,800)
}
btnCerrarModal.addEventListener("click", () => {
  window.scrollTo(800,800)
  modal.close();
});
