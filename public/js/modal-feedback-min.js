var popup=document.querySelector(".modal"),link=document.querySelector(".communications"),overLay=document.querySelector(".overlay"),close=popup.querySelector(".modal-close"),popupCons=document.querySelector(".modal-consultation"),linkCons=document.querySelector(".consultation"),closeCons=popupCons.querySelector(".modal-close"),popupThank=document.querySelector(".modal-thank-you"),closeThank=popupThank.querySelector(".modal-close"),linkThank=document.querySelector("action"),form=popup.querySelector("form"),yoursName=popup.querySelector(".form-name"),phone=popup.querySelector(".form-phone"),formCons=popupCons.querySelector("form"),yoursNameCons=popupCons.querySelector(".form-name"),phoneCons=popupCons.querySelector(".form-phone");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-visible"),overLay.classList.add("modal-visible")}),linkCons.addEventListener("click",function(e){e.preventDefault(),popupCons.classList.add("modal-visible"),overLay.classList.add("modal-visible")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")}),closeCons.addEventListener("click",function(e){e.preventDefault(),overLay.classList.remove("modal-visible"),popupCons.classList.remove("modal-visible")}),closeThank.addEventListener("click",function(e){e.preventDefault(),popupThank.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")}),form.addEventListener("submit",function(e){e.preventDefault(),yoursName.value||yoursName.classList.add("empty-value-error"),phone.value||phone.classList.add("empty-value-error"),yoursName.value&&phone.value?$.ajax({url:"https://echo.htmlacademy.ru",type:"post",data:$(form).serialize(),success:function(){popupThank.classList.add("modal-visible"),overLay.classList.add("modal-visible"),popup.classList.remove("modal-visible")}}):(popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),formCons.addEventListener("submit",function(e){e.preventDefault(),yoursNameCons.value||yoursNameCons.classList.add("empty-value-error"),phoneCons.value||phoneCons.classList.add("empty-value-error"),yoursNameCons.value&&phoneCons.value?$.ajax({url:"https://echo.htmlacademy.ru",type:"post",data:$(formCons).serialize(),success:function(){popupThank.classList.add("modal-visible"),overLay.classList.add("modal-visible"),popupCons.classList.remove("modal-visible")}}):(popupCons.classList.remove("modal-error"),popupCons.offsetWidth=popupCons.offsetWidth,popupCons.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-visible")&&(popup.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")),popupCons.classList.contains("modal-visible")&&(popupCons.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")))});