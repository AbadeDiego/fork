// --------------- Navbar Menu ----------------- //

var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

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

// --------------- Barra de rolagem comentários  ----------------- //


const scrollLeftBtn = document.getElementById("scroll-left-btn");
const scrollRightBtn = document.getElementById("scroll-right-btn");
const scrollableContent = document.querySelector(".scrollable-content");
const image1 = document.getElementById("image1");

scrollLeftBtn.addEventListener("click", function () {
  if (image1.previousElementSibling) {
    image1.parentNode.insertBefore(image1, image1.previousElementSibling);
  }
});

scrollRightBtn.addEventListener("click", function () {
  if (image1.nextElementSibling) {
    image1.parentNode.insertBefore(image1.nextElementSibling, image1);
  }
});

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

// --------------- Barra de rolagem funcionalidades  ----------------- //


const scrollLeftBtn2 = document.getElementById("scroll-left-btn-2");
const scrollRightBtn2 = document.getElementById("scroll-right-btn-2");
const scrollableContent2 = document.querySelector(".scrollable-content-2");
const bar1 = document.getElementById("bar1");

scrollLeftBtn2.addEventListener("click", function () {
  if (bar1.previousElementSibling) {
    bar1.parentNode.insertBefore(bar1, bar1.previousElementSibling);
  }
});

scrollRightBtn2.addEventListener("click", function () {
  if (bar1.nextElementSibling) {
    bar1.parentNode.insertBefore(bar1.nextElementSibling, bar1);
  }
});

// --------------- Envio de Mensagem  ----------------- //

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio normal do formulário

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/enviar-mensagem/');
  xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken')); // Inclui o token CSRF

  xhr.onload = function() {
    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('success-message').style.display = 'block';
        }
    }
  };

  xhr.send(new FormData(this));
});

// Função para obter o valor do token CSRF do cookie
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}