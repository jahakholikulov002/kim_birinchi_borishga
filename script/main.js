
const elForm = document.querySelector('.form'),
    elFormInput = document.querySelector('.form__input'),
    elResultFoot = document.querySelector('.result__foot'),
    elResultBicycle = document.querySelector('.result__bicycle'),
    elResultCar = document.querySelector('.result__car'),
    elResultPlan = document.querySelector('.result__plan');

function hisoblagich(masofa) {
    let resultFoot = masofa / 3.6;
    let soat = resultFoot % 24
    let minut = (resultFoot * 60) % 60
    let sekunt = resultFoot * 3600 % 60
    let kun = resultFoot / 24
    elResultFoot.textContent = kun.toFixed(0) + ' kun, ' + soat.toFixed(0) + ' soat, ' + minut.toFixed(0) + ' min, ' + sekunt.toFixed(0) + ' sek';
    let resultBicycle = masofa / 20.1;
    let soat = resultBicycle % 24
    let minut = (resultBicycle * 60) % 60
    let sekunt = resultBicycle * 3600 % 60
    let kun = resultBicycle / 24
    elResultBicycle.textContent = kun.toFixed(0) + ' kun, ' + soat.toFixed(0) + ' soat, ' + minut.toFixed(0) + ' min, ' + sekunt.toFixed(0) + ' sek';
    let resultCar = masofa / 70;
    let soat = resultCar % 24
    let minut = (resultCar * 60) % 60
    let sekunt = resultCar * 3600 % 60
    let kun = resultCar / 24
    elResultCar.textContent = kun.toFixed(0) + ' kun, ' + soat.toFixed(0) + ' soat, ' + minut.toFixed(0) + ' min, ' + sekunt.toFixed(0) + ' sek';
    let resultPlan = masofa / 800;
    let soat = resultPlan % 24
    let minut = (resultPlan * 60) % 60
    let sekunt = resultPlan * 3600 % 60
    let kun = resultPlan / 24
    elResultPlan.textContent = kun.toFixed(0) + ' kun, ' + soat.toFixed(0) + ' soat, ' + minut.toFixed(0) + ' min, ' + sekunt.toFixed(0) + ' sek';




}

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    hisoblagich(elFormInput.value);
    elFormInput.value = '';


})
