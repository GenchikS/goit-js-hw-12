//  Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

//  Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/pixabay-API";
import { createMarcup } from "./js/render-functions"

const formSearch = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const buttonLoad = document.querySelector(".button-load");

let inputText = "";

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
        getImages(inputText)
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
                    userPhoto.refresh();  //  виклик та можливість зміни фото в модальному вікні
                }
            })
            .catch((error) => console.log("error", error))
    }
    form.reset();
}
buttonLoad.style.display = "visibility";