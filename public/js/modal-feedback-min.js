var popup=document.querySelector(".modal"),link=document.querySelector(".communications"),overLay=document.querySelector(".overlay"),close=popup.querySelector(".modal-close"),popupCons=document.querySelector(".modal-consultation"),linkCons=document.querySelector(".consultation"),closeCons=popupCons.querySelector(".modal-close"),popupThank=document.querySelector(".modal-thank-you"),closeThank=popupThank.querySelector(".modal-close"),linkThank=document.querySelector("action"),form=popup.querySelector("form"),yoursName=popup.querySelector(".form-name"),phone=popup.querySelector(".form-phone"),formCons=popupCons.querySelector("form"),yoursNameCons=popupCons.querySelector(".form-name"),phoneCons=popupCons.querySelector(".form-phone"),popupProject=document.querySelector(".modal-project"),linkProject=document.querySelector(".button-project"),closeProject=popupProject.querySelector(".modal-close"),formProject=popupProject.querySelector("form"),yoursNameProject=popupProject.querySelector(".form-name"),phoneProject=popupProject.querySelector(".form-phone"),formMain=document.querySelector(".main-form"),yoursNameMain=formMain.querySelector(".form-name"),phoneMain=formMain.querySelector(".form-phone");linkProject.addEventListener("click",function(e){e.preventDefault(),popupProject.classList.add("modal-visible"),overLay.classList.add("modal-visible")}),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-visible"),overLay.classList.add("modal-visible")}),linkCons.addEventListener("click",function(e){e.preventDefault(),popupCons.classList.add("modal-visible"),overLay.classList.add("modal-visible")}),closeProject.addEventListener("click",function(e){e.preventDefault(),popupProject.classList.remove("modal-visible"),overLay.classList.remove("modal-visible"),phoneProject.classList.remove("empty-value-error"),yoursNameProject.classList.remove("empty-value-error"),popupProject.classList.remove("modal-error")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-visible"),overLay.classList.remove("modal-visible"),phone.classList.remove("empty-value-error"),yoursName.classList.remove("empty-value-error"),popup.classList.remove("modal-error")}),closeCons.addEventListener("click",function(e){e.preventDefault(),overLay.classList.remove("modal-visible"),popupCons.classList.remove("modal-visible"),phoneCons.classList.remove("empty-value-error"),yoursNameCons.classList.remove("empty-value-error"),popupCons.classList.remove("modal-error")}),closeThank.addEventListener("click",function(e){e.preventDefault(),popupThank.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")}),formMain.addEventListener("submit",function(e){e.preventDefault(),yoursNameMain.value&&phoneMain.value?$.ajax({url:"https://echo.htmlacademy.ru",type:"post",data:$(formMain).serialize(),success:function(){popupThank.classList.add("modal-visible"),overLay.classList.add("modal-visible"),phoneMain.classList.remove("empty-value-error"),yoursNameMain.classList.remove("empty-value-error")}}):(phoneMain.classList.add("empty-value-error"),yoursNameMain.classList.add("empty-value-error"))}),form.addEventListener("submit",function(e){e.preventDefault(),yoursName.value||yoursName.classList.add("empty-value-error"),phone.value||phone.classList.add("empty-value-error"),yoursName.value&&phone.value?$.ajax({url:"https://echo.htmlacademy.ru",type:"post",data:$(form).serialize(),success:function(){popupThank.classList.add("modal-visible"),overLay.classList.add("modal-visible"),popup.classList.remove("modal-visible")}}):(popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),formCons.addEventListener("submit",function(e){e.preventDefault(),yoursNameCons.value||yoursNameCons.classList.add("empty-value-error"),phoneCons.value||phoneCons.classList.add("empty-value-error"),yoursNameCons.value&&phoneCons.value?$.ajax({url:"https://echo.htmlacademy.ru",type:"post",data:$(formCons).serialize(),success:function(){popupThank.classList.add("modal-visible"),overLay.classList.add("modal-visible"),popupCons.classList.remove("modal-visible")}}):(popupCons.classList.remove("modal-error"),popupCons.offsetWidth=popupCons.offsetWidth,popupCons.classList.add("modal-error"))}),formProject.addEventListener("submit",function(e){e.preventDefault(),yoursNameProject.value||yoursNameProject.classList.add("empty-value-error"),phoneProject.value||phoneProject.classList.add("empty-value-error"),yoursNameProject.value&&phoneProject.value?$.ajax({url:"https://echo.htmlacademy.ru",type:"post",data:$(formProject).serialize(),success:function(){popupThank.classList.add("modal-visible"),overLay.classList.add("modal-visible"),popupProject.classList.remove("modal-visible")}}):(popupProject.classList.remove("modal-error"),popupProject.offsetWidth=popupProject.offsetWidth,popupProject.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-visible")&&(popup.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")),popupCons.classList.contains("modal-visible")&&(popupCons.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")),popupProject.classList.contains("modal-visible")&&(popupProject.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")),popupThank.classList.contains("modal-visible")&&(popupThank.classList.remove("modal-visible"),overLay.classList.remove("modal-visible")))});