const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDRkNjJkN2IxMTAwMTkwZTZkY2EiLCJpYXQiOjE3MDk4ODg3MjYsImV4cCI6MTcxMTA5ODMyNn0.Qv7lc3LfAXVWXsHIrjfVMmmQ4Fryoeg0Y4Ors3kyycM';
const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';


const spinner = document.getElementById("spinner");

const nameProductDetail = document.getElementById('nameProductDetail');
const brandDetail = document.getElementById('brandDetail');
const priceDetail = document.getElementById('priceDetail');
const imgDetail = document.getElementById('imgDetail');
const descriptionDetail = document.getElementById('descriptionDetail');

async function caricaProdotto (id) {
    let newUrl = API_URL + id;
    let response = await fetch(newUrl, {
        headers: {
            "Authorization": API_KEY
            }
    })
    let data = await response.json();
    spinner.classList.add('d-none');
    displayProduct(data);
    
}


const displayProduct = (data) => {
  nameProductDetail.innerText = data.name;
  brandDetail.innerText = data.brand;
  imgDetail.src = data.imageUrl;
  priceDetail.innerText = data.price + '€';
  descriptionDetail.innerText = data.description;
}



const init = () =>{
    const url = new URL(window.location.href); 
    const searchParams = url.searchParams;
    const idProduct = searchParams.get('id');
    caricaProdotto(idProduct);

}


window.onload = () => {
    init();
}