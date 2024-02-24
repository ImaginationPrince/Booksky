//Select button:add-containerand button:cancel and popup-overlay ,popup-box
var addcontainer = document.getElementById("add-container");
var popupoverlay = document.getElementById("popup-overlay");
var popupbox = document.getElementById("popup-box");

addcontainer.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

//Select button:add-book,book-title-input,book-author-input,book-description-input

var firstcontainer = document.getElementById("container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var scetion = document.createElement("section");
  scetion.setAttribute("id", "book-container");
  scetion.innerHTML = `<h1>${booktitleinput.value}</h1>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick ="deletebook(event)" id="delete-button">Delete</button>`;
  firstcontainer.append(scetion);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
