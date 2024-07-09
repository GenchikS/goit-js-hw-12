import { getImages } from "./js/pixabay-API";
const formSearch = document.querySelector(".form");

let inputText = "";

formSearch.addEventListener(`submit`, handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const form = event.target;  
    // console.log("form", form);  //  перевірка доступу до форми
    inputText = form.elements.input.value;
    // console.log("inputText", inputText);  //  перевірка отриманого значення input
    getImages(inputText);
    

    form.reset();
}