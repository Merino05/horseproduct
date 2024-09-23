let slideIndex = 1;
function setSlide(input, index) {
    slideIndex = index;
    let item = document.querySelector(`#${input}`);

    let slides = [...document.querySelector("#slider").children];
    slides.forEach((element) => {
        element.classList.remove("active")
    })
    item.classList.add("active");
}
setInterval(() => {
    slideIndex += 1;
    if (slideIndex == 8) { slideIndex = 1; }

    setSlide(`slide${slideIndex}`, slideIndex)

}, 3000);



// create massage box
function createMassage(n, m) {
    let massage1 = document.createElement("div");
    let name1 = document.createElement("h5");
    let paragraph1 = document.createElement("p");
    let icon1 = document.createElement("i");
    massage1.className = "Massage";
    icon1.className = "fa-solid fa-reply fa-xl";
    name1.innerText = n;
    paragraph1.innerText = m;
    massage1.appendChild(name1);
    massage1.appendChild(paragraph1);
    massage1.appendChild(icon1);
    return massage1;
}
// add massage to div by sending name & massage to inputs & click on sender
let massages = document.querySelector(".Massages");
let emailAddress = document.querySelector("#emailid");
let massage = document.querySelector("#messageid");
let name1 = document.querySelector("#nameid");
let sendIndex = document.querySelector("#send");
sendIndex.addEventListener("click", (a) => {
    a.preventDefault();
    if (!name1.value && !massage.value) { return; }
    if (massage.value && name1.value) {
        massages.appendChild(createMassage(name1.value, massage.value));
    }
    massage.value = "";
    name1.value = "";
    emailAddress.value = "";
});












// //create reply message
// let icon1 = document.querySelector(".fa-solid fa-reply fa-xl");
// icon1.addEventListener("click", (r) => {
//     createbox();
// }
// );

// //add input for typeing message
// let massagee = document.querySelector(".Massage");
// massagee.addEventListener("click", (event) => {
//     if (event.target.className == "fa-solid") {
//         let box = document.createElement("div");
//         let box2 = document.createElement("input");
//         let sender = document.createElement("i");
//         box2.className = "replybox";
//         sender.className = "fa-regular fa-paper-plane";
//         box.appendChild(massagee);
//         box2.appendChild(box);
//         sender.appendChild(box);

//     }
// });


// function createbox() {
//     let box = document.createElement("div");
//     let box2 = document.createElement("input");
//     let sender = document.createElement("i");
//     box2.className = "replybox";
//     sender.className = "fa-regular fa-paper-plane";
//     box.appendChild(massagee);
//     box2.appendChild(box);
//     sender.appendChild(box);
//     return box;
// };


// //add message to replying message
// function createReply() {
//     let massage1 = document.createElement("div");
//     let name1 = document.createElement("h5");
//     let name2 = document.createElement("h6");
//     let paragraph1 = document.createElement("p");
//     massage1.className = "reply";
//     name2.innerText = "TenTen";
//     massage1.appendChild(name1);
//     massage1.appendChild(name2);
//     massage1.appendChild(paragraph1);
//     return massage1;
// }



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