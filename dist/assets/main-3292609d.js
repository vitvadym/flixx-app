/* empty css                */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=s(e);fetch(e.href,a)}})();const n={page:window.location.pathname,API_KEY:"ecfebf36fb13c9599b30b4385926dcff",API_URL:"https://api.themoviedb.org/3",searchQuery:{name:"",type:"",page:1,totalPages:1,totalResults:0}},x=()=>{document.querySelectorAll(".nav-link").forEach(t=>{t.getAttribute("href")===n.page&&t.classList.add("active")})},P=o=>{const t=document.getElementById("search-term").value,s=document.getElementById("search-term");t||(o.preventDefault(),s.style.border="1px solid red"),setTimeout(()=>{s.style.border="1px solid white"},4e3)},E=()=>{document.querySelector(".overlay").classList.add("show")},L=()=>{document.querySelector(".overlay").classList.remove("show")},f=async o=>{const{API_KEY:t,API_URL:s}=n;try{E();const e=await(await fetch(`${s}/${o}?api_key=${t}&language=en-US`)).json();return L(),e}catch(i){console.log(i)}},I=async()=>{const{results:o}=await f("movie/popular");o.forEach(t=>{const{id:s,title:i,poster_path:e,release_date:a}=t,r=document.createElement("div");r.classList.add("card"),r.innerHTML=`
    <a href=movie-details.html?id=${s}>
    <img
      src=https://image.tmdb.org/t/p/w500/${e}
      class="card-img-top"
      alt=${i}
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${i}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${a}</small>
    </p>
  </div>
    `,document.getElementById("popular-movies").appendChild(r)})},B=async()=>{const{results:o}=await f("tv/popular");o.forEach(t=>{const{id:s,original_name:i,poster_path:e,first_air_date:a}=t,r=document.createElement("div");r.classList.add("card"),r.innerHTML=`
    <a href=tv-details.html?id=${s}>
    <img
      src=https://image.tmdb.org/t/p/w500/${e}
      class="card-img-top"
      alt=${i}
    />
  </a>
  <div class="card-body">
    <h5 class="card-title">${i}</h5>
    <p class="card-text">
      <small class="text-muted">Release: ${a}</small>
    </p>
  </div>
    `,document.getElementById("popular-shows").appendChild(r)})},S=(o,t)=>{const s=document.createElement("div");s.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${t})`,s.classList.add("background-overlay"),o==="movie"?document.getElementById("movie-details").appendChild(s):document.getElementById("show-details").appendChild(s)},k=async()=>{const o=window.location.search.split("=")[1],t=await f(`movie/${o}`),{budget:s,genres:i,title:e,runtime:a,overview:r,release_date:l,revenue:m,status:u,production_companies:d,homepage:c,poster_path:p,backdrop_path:h,vote_average:$}=t;S("movie",h);const g=v=>v.toLocaleString("en-US",{style:"currency",currency:"USD"}),y=d.map(v=>v.name).join(", "),_=document.createElement("div");_.innerHTML=`
  <div class="details-top">
  <div>
    <img
      src=${p?`https://image.tmdb.org/t/p/w500/${p}`:"/images/no-image.jpg"}
      class="card-img-top"
      alt=${e}
    />
  </div>
  <div>
    <h2>${e}</h2>
    <p>
      <i class="fas fa-star text-primary"></i>
      ${$.toFixed(1)} / 10
    </p>
    <p class="text-muted">Release Date: ${l}</p>
    <p>
    ${r}
    </p>
    <h5>Genres</h5>
    <ul class="list-group">
    ${i.map(v=>`<li>${v.name}</li>`).join("")}
    </ul>
    <a href=${c} target="_blank" class="btn">Visit Movie Homepage</a>
  </div>
</div>
<div class="details-bottom">
  <h2>Movie Info</h2>
  <ul>
    <li><span class="text-secondary">Budget:</span> ${g(s)}</li>
    <li><span class="text-secondary">Revenue:</span> ${g(m)}</li>
    <li><span class="text-secondary">Runtime:</span> ${a} minutes</li>
    <li><span class="text-secondary">Status:</span> ${u}</li>
  </ul>
  <h4>Production Companies</h4>
  <div class="list-group">${y}</div>
</div>
  `,document.getElementById("movie-details").appendChild(_)},M=async()=>{const o=window.location.search.split("=")[1],t=await f(`tv/${o}`);console.log(t);const{genres:s,original_name:i,last_episode_to_air:e,overview:a,first_air_date:r,status:l,number_of_seasons:m,production_companies:u,homepage:d,poster_path:c,backdrop_path:p,vote_average:h}=t;S("tv",p);const $=u.map(y=>y.name).join(", "),g=document.createElement("div");g.innerHTML=`
    <div class="details-top">
    <div>
      <img
        src=${c?`https://image.tmdb.org/t/p/w500/${c}`:"/images/no-image.jpg"}
        class="card-img-top"
        alt=${i}
      />
    </div>
    <div>
      <h2>${i}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${h.toFixed(1)} / 10
      </p>
      <p class="text-muted">Release Date: ${r}</p>
      <p>
      ${a}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
      ${s.map(y=>`<li>${y.name}</li>`).join("")}
      </ul>
      <a href=${d} target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Show info</h2>
    <ul>
    <li><span class="text-secondary">Number Of Episodes:</span> 
    ${m}
    </li>
    <li>
      <span class="text-secondary">Last Episode To Air:</span>
      ${e.air_date}
    </li>
    <li><span class="text-secondary">Status:</span> ${l}</li>
  </ul>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">${$}</div>
  </div>`,document.getElementById("show-details").appendChild(g)},C=()=>{new Swiper(".swiper",{slidesPerView:1,loop:!0,freeMode:!0,spaceBetween:30,autoplay:{delay:4e3},breakpoints:{500:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:30},1024:{slidesPerView:4,spaceBetween:40}}})},Q=async()=>{const{results:o}=await f("movie/top_rated");o.forEach(t=>{const{id:s,title:i,vote_average:e,poster_path:a}=t,r=document.createElement("div");r.classList.add("swiper-slide"),r.innerHTML=`
    <a href="movie-details.html?id=${s}">
      <img src=https://image.tmdb.org/t/p/w500/${a} alt=${i} />
    </a>
    <h4 class="swiper-rating">
      <i class="fas fa-star text-secondary"></i> ${e.toFixed(1)} / 10
    </h4>
    `,document.querySelector(".swiper-wrapper").appendChild(r)}),C()},R=()=>{const o=document.getElementById("prev"),t=document.getElementById("next");n.searchQuery.page<=1?o.disabled=!0:o.disabled=!1,n.searchQuery.page>=n.searchQuery.totalPages?t.disabled=!0:t.disabled=!1,o.addEventListener("click",async()=>{if(n.searchQuery.page>1){n.searchQuery.page--;const{results:s}=await b();w(s),console.log(n)}}),t.addEventListener("click",async()=>{if(n.searchQuery.page<n.searchQuery.totalPages){n.searchQuery.page++;const{results:s}=await b();w(s),console.log(n)}})},w=o=>{document.getElementById("search-results-heading").innerHTML="",document.getElementById("search-results").innerHTML="";const{searchQuery:{page:t,totalPages:s,totalResults:i}}=n;if(o.length)o.forEach(e=>{const{poster_path:a,title:r,name:l,id:m,first_air_date:u,release_date:d}=e,c=document.createElement("div");c.classList.add("cart"),c.innerHTML=`
          <div class="card">
            <a href=${n.searchQuery.type}-details.html?id=${m}>
  
            <img src=${a?`https://image.tmdb.org/t/p/w500/${a}`:"/images/no-image.jpg"}
             class="card-img-top" alt=${r||l} />
          </a>
          <div class="card-body">
            <h5 class="card-title">${r||l}</h5>
            <p class="card-text">
            ${d?`Release Date: ${d||u}`:""}
            </p>
          </div>
        </div>`;const p=document.getElementById("search-results-heading");p.innerHTML=`<h2>${o.length} results of 
        ${i} for ${l}</h2>`,document.getElementById("search-results").appendChild(c);const h=document.querySelector(".page-counter");h.textContent=`
      Page ${t} of ${s}`}),R();else{const e=document.createElement("h1"),a=document.querySelector(".pagination");a.style.display="none",e.textContent="NO RESUTS MATCH",e.style.margin="0 auto",e.style.height="calc(100vh - 400px)",document.getElementById("search-results").appendChild(e)}},b=async()=>{const{API_KEY:o,API_URL:t,searchQuery:{name:s,type:i,page:e}}=n;E();try{const r=await(await fetch(`${t}/search/${i}?api_key=${o}&query=${s}&page=${e}`)).json();return L(),r}catch(a){alert(a.message)}},T=async()=>{const o=window.location.search,t=new URLSearchParams(o);n.searchQuery.name=t.get("search-term"),n.searchQuery.type=t.get("type");const{results:s,page:i,total_pages:e,total_results:a}=await b();n.searchQuery.page=i,n.searchQuery.totalResults=a,n.searchQuery.totalPages=e,console.log(n),w(s)},A=()=>{switch(n.page){case"/":case"/index.html":Q(),I();break;case"/movie-details.html":k();break;case"/search.html":T();break;case"/shows.html":B();break;case"/tv-details.html":M();break}x()};document.addEventListener("DOMContentLoaded",A);const D=document.querySelector(".btn");D.addEventListener("click",P);
