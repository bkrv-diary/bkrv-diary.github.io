import"./lang-switcher-ac477f7e.js";import"./gallery-sect-db3f7ba4.js";window.addEventListener("load",()=>{document.querySelectorAll(".active-badge").forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})})});window.addEventListener("load",()=>{document.querySelectorAll(".drop-list__item").forEach(e=>{let t=e.querySelector(".drop-list__state-text"),l=e.children[1].children[0].offsetHeight;e.style.setProperty("--innerHeight",`${l}px`),e.children[0].addEventListener("click",()=>{e.classList.toggle("open"),e.classList.contains("open")?(e.children[1].style.height=`${l}px`,t.textContent="\u0421\u043A\u0440\u044B\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"):(e.children[1].style.height="0px",t.textContent="\u0427\u0438\u0442\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")})})});
