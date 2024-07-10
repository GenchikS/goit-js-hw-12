import{a as m,S as d,i as f}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="44770113-cb4279c01992ac20f8c79d080";async function y(r,s){return await m.get(`https://pixabay.com/api/?key=${g}&q=${r}&page=${s}`).then(l=>l.data.hits).catch(l=>console.log("error",l))}const h=document.querySelector(".gallery");function b(r){const s=r.map(({webformatURL:o,largeImageURL:l,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
        <li class="container-list">
            <a class="gallery-link" href="${l}">
            <img class="img-list" src="${o}" alt="${e}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${t}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${a}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${u}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${p}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");h.insertAdjacentHTML("beforeend",s)}const L=document.querySelector(".form"),$=document.querySelector(".gallery"),n=document.querySelector(".button-load");n.style.display="none";let c="",i=1,w=new d(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});L.addEventListener("submit",S);function S(r){r.preventDefault();const s=r.target;c=s.elements.input.value.trim(),c!==""&&(y(c,i).then(o=>{Number(o.length)===0?f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",progressBarColor:"rgb(255,0,0)"}):($.innerHTML="",b(o),n.style.display="block",w.refresh()),console.log("page=",i)}).catch(o=>console.log("error",o)),s.reset())}n.addEventListener("click",P(c,i));function P(r,s){console.log("getImages2",r,s)}
//# sourceMappingURL=commonHelpers.js.map
