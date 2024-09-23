let icon=document.querySelector(".shop1 i");
let btn=document.querySelector(".cart1");
function color(){
icon.style.color = "red";

}
btn.addEventListener("click",color);
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }