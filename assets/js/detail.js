





const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDRkNjJkN2IxMTAwMTkwZTZkY2EiLCJpYXQiOjE3MDk4ODg3MjYsImV4cCI6MTcxMTA5ODMyNn0.Qv7lc3LfAXVWXsHIrjfVMmmQ4Fryoeg0Y4Ors3kyycM';
const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';
const deleteBtn = document.getElementById('deleteBtn');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const spinner = document.getElementById("spinner");
const productContainer = document.getElementById("productContainer");
const nomeProdotto = document.getElementById('nameProduct');
const brand = document.getElementById('brand');
const prezzo = document.getElementById('price');
const urlImg = document.getElementById('urlImg');
const descProduct = document.getElementById('descProduct');

async function caricaProdotto (id) {
    let newUrl = API_URL + id;
    console.log(newUrl);
    let response = await fetch(newUrl, {
        headers: {
            "Authorization": API_KEY
            }
    })
    let data = await response.json();
    console.log(data);
    spinner.classList.add('d-none');
    displayProduct(data);
    
}


const displayProduct = (data) => {
    productContainer.innerHTML = '';
		let div = document.createElement('div');
		div.classList.add('col-md-4');
        div.id = `id-${data._id}`;
		div.innerHTML = `
            <div class="card mb-4">
                <img src="${data.imageUrl}" style="width: 100%" />
                <div class="card-title px-3">
                    <h5>${data.name}</h5>
                </div>
                <div class="card-body">
                    
                    <p class="card-text">
                    ${data.description}
                </p>
                </div>
                <div class="card-footer d-flex flex-column align-items-start">
                    <button type="button" class="btn btn-warning" onclick="edit(id-${data._id});">Modifica</button>
                    <button type="button" class="btn btn-info mt-2" onclick="window.location.href = 'detail.html?id=${data._id}'">Scopri di più</button>
                </div>
                </div>
            `;
		productContainer.appendChild(div);

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