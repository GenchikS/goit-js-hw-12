import axios from "axios";

const API_KEY = "44770113-cb4279c01992ac20f8c79d080";

export function getImages(inputText) {
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${inputText}`)  //  використання бібліотеки axios для отримання масиву
        .then((response) => response.data.hits)  //  отриманий масив з data.hits
        .catch((error) => console.log("error", error))
}
