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

let inputText = "";
let page;
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
    page = 1;
    const form = event.target;  
    // console.log("form", form);  //  перевірка доступу до форми
    inputText = (form.elements.input.value).trim();
    // console.log("inputText", inputText);  //  перевірка отриманого значення input
    if (inputText === "") {
        return
    } else {
        getImages(inputText, page)
            .then((data) => {
                // console.log("data", data.hits) //  перевірка отриманного масиву
                // console.log("total", data.total) //  перевірка отриманного масиву
                if (Number(data.length) === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: `topCenter`,
                progressBarColor: `rgb(255,0,0)`
            });
                } else {
                    gallery.innerHTML = "";  //  очистка попереднього контенту
                    createMarcup(data.hits);
                    userPhoto.refresh();  //  виклик та можливість зміни фото в модальному вікні
                }
                console.log("page=", page);
                if (data.hits.length > 8) {  //  перевірка умави на довжину отриманного масиву
                    // console.log("page=", page);  //  перевірка лічильника сторінок
                    buttonLoad.style.display = "block";  //   активація кнопки
                } else {
                    buttonLoad.style.display = "none";  //  приховування кнопки
                    iziToast.show({
                        message: "We're sorry, but you've reached the end of search results.",
                        position: `topCenter`,
                        progressBarColor: `rgb(255,0,0)`
                });
                }
            })
            .catch((error) => console.log("error", error))
    }
    form.reset();
}


buttonLoad.addEventListener(`click`, getImagesLoad)

function getImagesLoad() {
    page += 1;
    // console.log("page=", page);  перевірка лічильника сторінок
    getImages(inputText, page)
        .then((data) => {
            // gallery.innerHTML = "";  //  якщо не потрібен скрол, то очистка попереднього контенту
            createMarcup(data.hits);
            // console.log("data", data.hits) //  перевірка отриманного масиву
        })
}

const scrollCart = document.documentElement.getBoundingClientRect();

window.scrollBy(0, scrollCart.bottom);
console.log("top", scrollCart.top, "bottom", scrollCart.bottom);

// window.addEventListener(`scroll`, scrollListener)


// function scrollListener() {
//     const scrollCart = document.documentElement.getBoundingClientRect();
//     console.log("top", scrollCart.top, "bottom", scrollCart.bottom)
//     if (scrollCart.bottom < document.documentElement.clientHeight + 400) {
//        console.log(`Bottom`) 
//     }
// }

