import axios from "axios";

const API_KEY = `44770113-cb4279c01992ac20f8c79d080`;

export async function getImages(inputText, page) {
    const promiseValue =  //  при необхідності ліміту фото можна додати &_limit=9
        await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${inputText}&page=${page}&per_page=15`)  //  використання бібліотеки axios + return для отримання масиву
        .then((response) => response.data)  //  отриманий масив з data.hits
        .catch((error) => console.log("error", error))
    return promiseValue;
}

