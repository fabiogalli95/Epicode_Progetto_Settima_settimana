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

async function caricaProdotti () {
    
    let response = await fetch(API_URL, {
        headers: {
            "Authorization": API_KEY
            }
    })
    let data = await response.json();
    console.log(data);
    spinner.classList.add('d-none');
    createCards(data);
    
}


const createCards = (data) => {
    productContainer.innerHTML = '';
	data.forEach(item => {
		let div = document.createElement('div');
		div.classList.add('col-md-4');
        div.id = `id-${item._id}`;
		div.innerHTML = `
            <div class="card mb-4">
                <img src="${item.imageUrl}" style="width: 100%" />
                <div class="card-title px-3">
                    <h5>${item.name}</h5>
                </div>
                <div class="card-body">
                    
                    <p class="card-text">
                    ${item.description}
                </p>
                </div>
                <div class="card-footer d-flex flex-column align-items-start">
                    <button type="button" class="btn btn-warning" onclick="edit(id-${item._id});">Modifica</button>
                    <button type="button" class="btn btn-info mt-2" onclick="window.location.href = 'detail.html?id=${item._id}'">Scopri di più</button>
                </div>
                </div>
            `;
		productContainer.appendChild(div);
	});
}



const init = () =>{
    caricaProdotti();

}


window.onload = () => {
    init();
}