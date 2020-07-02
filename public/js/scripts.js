/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */

/*
Coisas para implementar:
- modal para o suário explicar o motivo do status ok
- alert que aparece quando o usuário checka o status de uma URL: com a quantidade dos votos em cada status
*/

let usuarios = JSON.parse(localStorage.getItem("usuarios"));

if (usuarios == null) {
  localStorage.setItem("usuarios", "[]");
  usuarios = [];
}


/*
login e senha:
ID: 
nome:
saldo:
*/

const verificacao = JSON.parse(localStorage.getItem("logado"));

if (!verificacao) {
  $('#loginModal').modal('show')
}else{
  opcaoSair.style.display = "";
}

function iniciarLongin(usuario){
  opcaoSair.style.display = "";
  $('#loginModal').modal('hide')
  emailL.value = "";
  senhaL.value = "";
  localStorage.setItem("logado", JSON.stringify(usuario));
}

function login(event){
  event.preventDefault();
  console.log("login");
  console.log(emailL.value);
  console.log(senhaL.value);

  const email = emailL.value;
  const senha = senhaL.value;

    for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].email == email && usuarios[i].senha == senha){
          iniciarLongin(usuarios[i]);
          return true;
      }
    }
    alert("O e-mail ou a senha estão errados");
}

function cadastrar(event){
  event.preventDefault();
  console.log("cadastrar");
  const nome = nomeC.value
  const email = emailC.value
  const senha1 = senha1C.value
  const senha2 = senha2C.value
    if(senha1 != senha2){
      alert("As senhas não são iguais")
      return false;
    }
    for(let i = 0; i < usuarios.length; i++){
      if(usuarios[i].email == email){
          alert("Já está cadastrado este e-mail!");
          return false
      }
    }
    const date = {
      "id": usuarios.length+1,
      "nome": nome,
      "email": email,
      "senha": senha1,
      "saldo": 0,
    };

    usuarios.push(date);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    $('#cadastrarModal').modal('hide')
    nomeC.value = "";
    emailC.value = "";
    senha1C.value = "";
    senha2C.value = "";
}

function deslogar(){
  localStorage.removeItem("logado");
  opcaoSair.style.display = "none";
  $('#loginModal').modal('show')
}






(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
