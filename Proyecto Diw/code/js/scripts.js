const goUp = document.querySelector(".irArriba");
function subirArriba(e) {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0
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
const btnCerrarModal=document.getElementById('cerrar-modal');
const modal=document.getElementById('modal');

function abrirModal(){
  modal.showModal();
}
btnCerrarModal.addEventListener('click',()=>{
  modal.close();
})
