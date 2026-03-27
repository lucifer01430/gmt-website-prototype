
let searchBox = document.getElementById("search-box");
let search = document.getElementById("search");

let toggle = 0;
function Toggle() {
  if (toggle === 0) {
    searchBox.style.width = "250px";
    searchBox.style.height = "40px";
    searchBox.style.border = "2px solid green";
    searchBox.style.padding = "8px 10px";
    toggle = 1;
    console.log(toggle);
  } else {
    searchBox.style.width = "0px";
    searchBox.style.height = "0px";
    searchBox.style.border = "none";
    searchBox.style.padding = "0px";
    toggle = 0;
    console.log(toggle);
  }
}
AOS.init();

