// --------------- Navbar Menu ----------------- //

var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "400px";

function togglemenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "400px";
  }
  else
  {
    menuList.style.maxHeight = "0px";
  }
}

// --------------- Comentários Criadores  ----------------- //

var currentIndex = 0;
var divs = document.querySelectorAll(".transition-div");

function showDivs() {
  for (var i = 0; i < divs.length; i++) {
    if (i === currentIndex || i === currentIndex + 1) {
      divs[i].classList.add("show");
    } else {
      divs[i].classList.remove("show");
    }
  }
}

function prevDiv() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    showDivs();
  }
}

function nextDiv() {
  if (currentIndex < divs.length - 1) {
    currentIndex += 1
    showDivs();
  }
}

showDivs();

// --------------- Funcionalidades BodeTech  ----------------- //

var currentIndexCard = 0;
var cards = document.querySelectorAll(".transition-card");

function showCards() {
  for (var i = 0; i < cards.length; i++) {
    if (i === currentIndexCard || i === currentIndexCard + 1) {
      cards[i].classList.add("show");
    } else {
      cards[i].classList.remove("show");
    }
  }
}

function prevCard() {
  if (currentIndexCard > 0) {
    currentIndexCard -= 1;
    showCards();
  }
}

function nextCard() {
  if (currentIndexCard < cards.length - 1) {
    currentIndexCard += 1;
    showCards();
  }
}

showCards();