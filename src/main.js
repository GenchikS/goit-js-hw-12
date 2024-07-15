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
const loading = document.querySelector(".loading")


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

async function handlerSubmit(event) {
    event.preventDefault();
    page = 1;
    const form = event.target;  
    // console.log("form", form);  //  перевірка доступу до форми
    inputText = (form.elements.input.value).trim();
    // console.log("inputText", inputText);  //  перевірка отриманого значення input
    loadingTextRemove(); //  додавання інформації про завантаження
    if (inputText === "") {
        loadingTextAdd();
        return iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: `topCenter`,
                progressBarColor: `rgb(255,0,0)`
            });
    }

    try {
        const data = await getImages(inputText, page)
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
                
            // console.log("page=", page);  //  перевірка лічильника сторінки
            if (data.hits.length > 14) {  //  перевірка умави на довжину отриманного масиву
                // console.log("page=", page);  //  перевірка лічильника сторінок
                buttonRemove();  //   активація кнопки
            } else {
                buttontAdd();  //  приховування кнопки
                iziToast.show({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: `topCenter`,
                    progressBarColor: `rgb(255,0,0)`
                });
            }
        }
        
    } catch (error) {
        console.log("error", error)
    }
    finally{
        loadingTextAdd(); //  видалення інформації про завантаження
        form.reset()
    }
}


buttonLoad.addEventListener(`click`, getImagesLoad)

function getImagesLoad() {
    page += 1;
    loadingTextRemove();   //  додавання інформації про завантаження
    // console.log("page=", page);  перевірка лічильника сторінок
    getImages(inputText, page)
        .then((data) => {
            // gallery.innerHTML = "";  //  якщо не потрібен скрол, то очистка попереднього контенту
            loadingTextAdd();  //  видалення інформації про завантаження
            createMarcup(data.hits);
            if (data.hits.length > 14) {  //  перевірка умави на довжину отриманного масиву
                // console.log("page=", page);  //  перевірка лічильника сторінок
                buttonRemove();  //   активація кнопки
            } else {
                buttontAdd();  //  приховування кнопки
                iziToast.show({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: `topCenter`,
                    progressBarColor: `rgb(255,0,0)`
                });
            }
            // console.log("data", data.hits) //  перевірка отриманного масиву
            const containerСard = document.querySelector(".container-list");
            const heigthCard = containerСard.getBoundingClientRect().height;
            // console.log("heigthCard", heigthCard)  //  перевірка прокрутки
            window.scrollBy({
                top: heigthCard * 2.6,
                behavior: "smooth",
              });
        })
}


function loadingTextRemove(){   //  ф-ція додавання loading
    loading.classList.remove("hidden")
}

function loadingTextAdd(){      //  ф-ція приховування loading
    loading.classList.add("hidden")
}

function buttonRemove(){   //  ф-ція додавання кнопки Load more
    buttonLoad.classList.remove("hidden")
}

function buttontAdd(){      //  ф-ція приховування кнопки Load more
    buttonLoad.classList.add("hidden")
}
