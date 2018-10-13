var popup = document.querySelector(".modal");
var link = document.querySelector(".communications");
var overLay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

var popupCons = document.querySelector(".modal-consultation");
var linkCons = document.querySelector(".consultation");
var closeCons = popupCons.querySelector(".modal-close");

var popupThank = document.querySelector(".modal-thank-you");
var closeThank = popupThank.querySelector(".modal-close");
var linkThank = document.querySelector("action");

var form = popup.querySelector("form");
var yoursName = popup.querySelector(".form-name");
var phone = popup.querySelector(".form-phone");

var formCons = popupCons.querySelector("form");
var yoursNameCons = popupCons.querySelector(".form-name");
var phoneCons = popupCons.querySelector(".form-phone");

var popupProject = document.querySelector(".modal-project");
var linkProject = document.querySelector(".button-project");
var closeProject = popupProject.querySelector(".modal-close");

var formProject = popupProject.querySelector("form");
var yoursNameProject = popupProject.querySelector(".form-name");
var phoneProject = popupProject.querySelector(".form-phone");


var formMain = document.querySelector(".main-form");
var yoursNameMain = formMain.querySelector(".form-name");
var phoneMain = formMain.querySelector(".form-phone");


linkProject.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupProject.classList.add("modal-visible");
  overLay.classList.add("modal-visible");

});



link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-visible");
  overLay.classList.add("modal-visible");

});

linkCons.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCons.classList.add("modal-visible");
  overLay.classList.add("modal-visible");

});

closeProject.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupProject.classList.remove("modal-visible");
  overLay.classList.remove("modal-visible");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-visible");
  overLay.classList.remove("modal-visible");
});

closeCons.addEventListener("click", function (evt) {
  evt.preventDefault();
  overLay.classList.remove("modal-visible");
  popupCons.classList.remove("modal-visible");
});

closeThank.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupThank.classList.remove("modal-visible");
  overLay.classList.remove("modal-visible");
});

formMain.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (!yoursNameMain.value || !phoneMain.value) {
    phoneMain.classList.add("empty-value-error");
    yoursNameMain.classList.add("empty-value-error")
  } else {
    $.ajax({
      url: 'https://echo.htmlacademy.ru',
      type: 'post',
      data: $(formMain).serialize(),
      success: function () {
        popupThank.classList.add("modal-visible");
        overLay.classList.add("modal-visible");
      }
    });
  }
});

formProject.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (!yoursNameProject.value) {
    yoursNameProject.classList.add("empty-value-error")
  }
  if (!phone.value) {
    phoneProject.classList.add("empty-value-error")
  }

  if (!yoursNameProject.value || !phoneProject.value) {
    popupProject.classList.remove("modal-error");
    popupProject.offsetWidth = popupProject.offsetWidth;
    popupProject.classList.add("modal-error");
  } else {
    $.ajax({
      url: 'https://echo.htmlacademy.ru',
      type: 'post',
      data: $(formProject).serialize(),
      success: function () {
        popupThank.classList.add("modal-visible");
        overLay.classList.add("modal-visible");
        popupProject.classList.remove("modal-visible");
      }
    });
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (!yoursName.value) {
    yoursName.classList.add("empty-value-error")
  }
  if (!phone.value) {
    phone.classList.add("empty-value-error")
  }

  if (!yoursName.value || !phone.value ) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    $.ajax({
      url: 'https://echo.htmlacademy.ru',
      type: 'post',
      data: $(form).serialize(),
      success: function () {
        popupThank.classList.add("modal-visible");
        overLay.classList.add("modal-visible");
        popup.classList.remove("modal-visible");
      }
    });
  }
});

formCons.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (!yoursNameCons.value) {
    yoursNameCons.classList.add("empty-value-error")
  }
  if (!phoneCons.value) {
    phoneCons.classList.add("empty-value-error")
  }

  if (!yoursNameCons.value || !phoneCons.value) {
    popupCons.classList.remove("modal-error");
    popupCons.offsetWidth = popupCons.offsetWidth;
    popupCons.classList.add("modal-error");
    
  } else {
    $.ajax({
      url: 'https://echo.htmlacademy.ru',
      type: 'post',
      data: $(formCons).serialize(),
      success: function () {
        popupThank.classList.add("modal-visible");
        overLay.classList.add("modal-visible");
        popupCons.classList.remove("modal-visible");
      }
    });
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-visible")) {
      popup.classList.remove("modal-visible");
      overLay.classList.remove("modal-visible"); 
    }
    if (popupCons.classList.contains("modal-visible")) {
      popupCons.classList.remove("modal-visible");
      overLay.classList.remove("modal-visible");
    }
  }
});


