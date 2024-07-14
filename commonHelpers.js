import{a as b,S as L,i as d}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const w="44770113-cb4279c01992ac20f8c79d080";async function u(s,o){return await b.get(`https://pixabay.com/api/?key=${w}&q=${s}&page=${o}&per_page=15`).then(a=>a.data).catch(a=>console.log("error",a))}const S=document.querySelector(".gallery");function p(s){const o=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:n,comments:y,downloads:h})=>`
        <li class="container-list">
            <a class="gallery-link" href="${a}">
            <img class="img-list" src="${t}" alt="${e}">
            <ul class="container-card">
                <li class="list-card">
                    <p class="likes-card">Likes</p>
                    <p class="number-likes">${r}</p>
                </li>
                <li class="list-card">
                    <p class="views-card">Views</p>
                    <p class="number-views">${n}</p>
                </li>
                <li class="list-card">
                    <p class="comments-card">comments</p>
                    <p class="number-comments">${y}</p>
                </li>
                <li class="list-card">
                    <p class="downloads-card">downloads</p>
                    <p class="number-downloads">${h}</p>
                </li>
            </ul>
        </img>
        </a>
    </li>
    `).join("");S.insertAdjacentHTML("beforeend",o)}const v=document.querySelector(".form"),$=document.querySelector(".gallery"),l=document.querySelector(".button-load"),m=document.querySelector(".loading");let i="",c,q=new L(".gallery a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});v.addEventListener("submit",P);async function P(s){s.preventDefault(),c=1;const o=s.target;if(i=o.elements.input.value.trim(),g(),i!=="")try{const t=await u(i,c);Number(t.length)===0?d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",progressBarColor:"rgb(255,0,0)"}):($.innerHTML="",p(t.hits),q.refresh()),t.hits.length>8?l.style.display="block":(l.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",position:"topCenter",progressBarColor:"rgb(255,0,0)"}))}catch(t){console.log("error",t)}finally{f(),o.reset()}}l.addEventListener("click",C);function C(){c+=1,g(),u(i,c).then(s=>{f(),p(s.hits);const t=document.querySelector(".container-list").getBoundingClientRect().height;console.log("heigthCard",t),window.scrollBy({top:t*2,behavior:"smooth"})})}function g(){m.classList.remove("hidden")}function f(){m.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
