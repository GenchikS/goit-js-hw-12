const gallery = document.querySelector(".gallery");

export function createMarcup(arr) {
    // console.log("arr", arr)  //  перевірка вхідного аргументу

    const marcup =  arr.map(
        ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
        <li class="container-list">
            <a class="gallery-link" href="${largeImageURL}">
            <img class="img-list" src="${webformatURL}" alt="${tags}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${likes}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${views}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${comments}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${downloads}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join(``)

    gallery.insertAdjacentHTML("beforeend", marcup);  //  ф-ція виклику створення скелету розмітки
}