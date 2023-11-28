const wrapper = document.getElementById('container');
const addBtn = document.getElementById('add-task');
const listBtn = document.getElementById('list-btn');

addBtn.addEventListener('click', myFunction)
listBtn.addEventListener('click',showList)
function myFunction(e) {
    e.preventDefault();
    console.log('clicked');
    var tableContent = document.getElementById("table");
    var header = document.getElementById("header");
    if (header.style.visibility === "hidden") {
      header.style.visibility = "visible";
      tableContent.style.visibility = "hidden";
    } else {
      header.style.visibility = "hidden";
    }
  }

  function showList(e) {
    e.preventDefault();
    console.log('clicked');
    var tableContent = document.getElementById("table");
    if (header.style.display === "block") {
      header.style.display = "none";
    } else {
      header.style.display = "block";
    }
  }