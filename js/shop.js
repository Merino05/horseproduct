let list = document.querySelector(".cardBody");
let searchInput = document.querySelector(".searching input");
searchInput.addEventListener("input", (event) => {
    Array.from(list.children).forEach((element) => {
        if (element.querySelector(".card-title").innerText.toLowerCase().includes(event.target.value.toLowerCase())) {
            element.style.display = "flex"
        }
        else {
            element.style.display = "none"

        }
        event.preventDefault()
    })

});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}