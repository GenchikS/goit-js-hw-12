import{a as w,S as v,i}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const S="44770113-cb4279c01992ac20f8c79d080";async function p(s,o){return await w.get(`https://pixabay.com/api/?key=${S}&q=${s}&page=${o}&per_page=15`).then(n=>n.data).catch(n=>console.log("error",n))}const $=document.querySelector(".gallery");function m(s){const o=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:b,downloads:L})=>`
        <li class="container-list">
            <a class="gallery-link" href="${n}">
            <img class="img-list" src="${r}" alt="${e}">
            <ul class="container-card">
                <li class="list-card">
                    <p class="likes-card">Likes</p>
                    <p class="number-likes">${t}</p>
                </li>
                <li class="list-card">
                    <p class="views-card">Views</p>
                    <p class="number-views">${a}</p>
                </li>
                <li class="list-card">
                    <p class="comments-card">comments</p>
                    <p class="number-comments">${b}</p>
                </li>
                <li class="list-card">
                    <p class="downloads-card">downloads</p>
                    <p class="number-downloads">${L}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");$.insertAdjacentHTML("beforeend",o)}const q=document.querySelector(".form"),C=document.querySelector(".gallery"),u=document.querySelector(".button-load"),g=document.querySelector(".loading");let c="",l,P=new v(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});q.addEventListener("submit",T);async function T(s){s.preventDefault(),l=1;const o=s.target;if(c=o.elements.input.value.trim(),h(),c==="")return d(),i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",progressBarColor:"rgb(255,0,0)"});try{const r=await p(c,l);Number(r.length)===0?i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",progressBarColor:"rgb(255,0,0)"}):(C.innerHTML="",m(r.hits),P.refresh(),r.hits.length>14?f():(y(),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topCenter",progressBarColor:"rgb(255,0,0)"})))}catch(r){console.log("error",r)}finally{d(),o.reset()}}u.addEventListener("click",x);function x(){l+=1,h(),p(c,l).then(s=>{d(),m(s.hits),s.hits.length>14?f():(y(),i.show({message:"We're sorry, but you've reached the end of search results.",position:"topCenter",progressBarColor:"rgb(255,0,0)"}));const r=document.querySelector(".container-list").getBoundingClientRect().height;window.scrollBy({top:r*2.6,behavior:"smooth"})})}function h(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}function f(){u.classList.remove("hidden")}function y(){u.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
