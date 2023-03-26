const form = document.querySelector('#what-form')



const takeData = () =>
{
  return  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

const onSubmitClick = (e) => {
    e.preventDefault();
takeData()
}


form.addEventListener('submit', onSubmitClick)





