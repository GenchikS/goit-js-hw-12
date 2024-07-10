import axios from "axios";

const API_KEY = "44770113-cb4279c01992ac20f8c79d080";

export async function getImages(inputText, page) {
    const promiseValue = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${inputText}&page=${page}`)  //  використання бібліотеки axios + return для отримання масиву
        .then((response) => response.data.hits)  //  отриманий масив з data.hits
        .catch((error) => console.log("error", error))
    return promiseValue;
}

