var elForm=document.querySelector('.form');
var elFormInput=document.querySelector('.form__input');
var elResultFoot=document.querySelector('.result__foot');
var elResultBicycle=document.querySelector('.result__bicycle');
var elResultCar=document.querySelector('.result__car');
var elResultPlan=document.querySelector('.result__plan');

function hisoblagich(masofa){
    var resultFoot=masofa/3.6;
    var soat=resultFoot%24
    var minut=(resultFoot*60)%60
    var sekunt =resultFoot*3600%60
    var kun=resultFoot/24
    elResultFoot.textContent=kun.toFixed(0)+' kun, '+soat.toFixed(0)+' soat, '+minut.toFixed(0)+' min, '+sekunt.toFixed(0)+' sek';
    var resultBicycle=masofa/20.1;
    var soat=resultBicycle%24
    var minut=(resultBicycle*60)%60
    var sekunt =resultBicycle*3600%60
    var kun=resultBicycle/24
    elResultBicycle.textContent=kun.toFixed(0)+' kun, '+soat.toFixed(0)+' soat, '+minut.toFixed(0)+' min, '+sekunt.toFixed(0)+' sek';
    var resultCar=masofa/70;
    var soat=resultCar%24
    var minut=(resultCar*60)%60
    var sekunt =resultCar*3600%60
    var kun=resultCar/24
    elResultCar.textContent=kun.toFixed(0)+' kun, '+soat.toFixed(0)+' soat, '+minut.toFixed(0)+' min, '+sekunt.toFixed(0)+' sek';
    var resultPlan=masofa/800;
    var soat=resultPlan%24
    var minut=(resultPlan*60)%60
    var sekunt =resultPlan*3600%60
    var kun=resultPlan/24
    elResultPlan.textContent=kun.toFixed(0)+' kun, '+soat.toFixed(0)+' soat, '+minut.toFixed(0)+' min, '+sekunt.toFixed(0)+' sek';

    
    
    
}
console.log(hisoblagich(35));
elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    var result_car=hisoblagich(elFormInput.value);
   
    
})