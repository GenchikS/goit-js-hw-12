import{a as y,S as h,i as p}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const b="44770113-cb4279c01992ac20f8c79d080";async function m(r,o){return await y.get(`https://pixabay.com/api/?key=${b}&q=${r}&page=${o}`).then(l=>l.data).catch(l=>console.log("error",l))}const w=document.querySelector(".gallery");function d(r){const o=r.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:n,comments:g,downloads:f})=>`
        <li class="container-list">
            <a class="gallery-link" href="${l}">
            <img class="img-list" src="${s}" alt="${e}">
            <ul class="container-cart">
                <li class="list-cart">
                    <p class="likes-cart">Likes</p>
                    <p class="number-likes">${t}</p>
                </li>
                <li class="list-cart">
                    <p class="views-cart">Views</p>
                    <p class="number-views">${n}</p>
                </li>
                <li class="list-cart">
                    <p class="comments-cart">comments</p>
                    <p class="number-comments">${g}</p>
                </li>
                <li class="list-cart">
                    <p class="downloads-cart">downloads</p>
                    <p class="number-downloads">${f}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");w.insertAdjacentHTML("beforeend",o)}const L=document.querySelector(".form"),$=document.querySelector(".gallery"),i=document.querySelector(".button-load");let a="",c,S=new h(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});L.addEventListener("submit",v);function v(r){r.preventDefault(),c=1;const o=r.target;a=o.elements.input.value.trim(),a!==""&&(m(a,c).then(s=>{Number(s.length)===0?p.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",progressBarColor:"rgb(255,0,0)"}):($.innerHTML="",d(s.hits),S.refresh()),console.log("page=",c),s.hits.length>8?i.style.display="block":(i.style.display="none",p.show({message:"We're sorry, but you've reached the end of search results.",position:"topCenter",progressBarColor:"rgb(255,0,0)"}))}).catch(s=>console.log("error",s)),o.reset())}i.addEventListener("click",P);function P(){c+=1,m(a,c).then(r=>{d(r.hits)})}const u=document.documentElement.getBoundingClientRect();window.scrollBy(0,u.bottom);console.log("top",u.top,"bottom",u.bottom);
//# sourceMappingURL=commonHelpers.js.map
