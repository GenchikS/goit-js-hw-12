//  Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

//  Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/pixabay-api";
import { createMarcup } from "./js/render-functions"

const formSearch = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const buttonLoad = document.querySelector(".button-load");
buttonLoad.style.display = "none";

let inputText = "";
let page = 1;
let userPhoto = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

formSearch.addEventListener(`submit`, handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const form = event.target;  
    // console.log("form", form);  //  перевірка доступу до форми
    inputText = (form.elements.input.value).trim();
    // console.log("inputText", inputText);  //  перевірка отриманого значення input
    if (inputText === "") {
        return
    } else {
        getImages(inputText, page)
            .then((data) => {
                // console.log("data", data) //  перевірка отриманного масиву
                if (Number(data.length) === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: `topCenter`,
                progressBarColor: `rgb(255,0,0)`
            });
                } else {
                    gallery.innerHTML = "";  //  очистка попереднього контенту
                    createMarcup(data);
                    buttonLoad.style.display = "block";
                    userPhoto.refresh();  //  виклик та можливість зміни фото в модальному вікні
                }
                // page += 1;
                console.log("page=", page);
                if (page > 1) {
                    // buttonLoad.style.displey = "block"; 
                }
            })
            .catch((error) => console.log("error", error))
    }
    form.reset();
}

buttonLoad.addEventListener(`click`, getImages2(inputText, page))

function getImages2(inputText, page){
    console.log("getImages2", inputText, page)
}

