const e=document.querySelector("#what-form");e.addEventListener("submit",(e=>{e.preventDefault(),fetch("https://fakestoreapi.com/products").then((e=>e.json())).then((e=>console.log(e)))}));
//# sourceMappingURL=02-api-test.a7f541fa.js.map
