const goUp = document.querySelector(".irArriba");
function subirArriba(e) {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0
}
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    document.querySelector(".irArriba").style.display = "block";
    goUp.addEventListener("click", subirArriba);
  } else {
    document.querySelector(".irArriba").style.display = "none";
  }
};
