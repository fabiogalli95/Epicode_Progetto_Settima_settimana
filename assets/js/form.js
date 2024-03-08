const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDRkNjJkN2IxMTAwMTkwZTZkY2EiLCJpYXQiOjE3MDk4ODg3MjYsImV4cCI6MTcxMTA5ODMyNn0.Qv7lc3LfAXVWXsHIrjfVMmmQ4Fryoeg0Y4Ors3kyycM';
const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';
const productForm = document.getElementById('productForm');
const deleteBtn = document.getElementById('deleteBtn');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const nomeProdotto = document.getElementById('nameProduct');
const brand = document.getElementById('brand');
const prezzo = document.getElementById('price');
const urlImg = document.getElementById('urlImg');
const descProduct = document.getElementById('descProduct');

/* async function caricaProdotti () {
    
    let response = await fetch(API_URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDRkNjJkN2IxMTAwMTkwZTZkY2EiLCJpYXQiOjE3MDk4ODg3MjYsImV4cCI6MTcxMTA5ODMyNn0.Qv7lc3LfAXVWXsHIrjfVMmmQ4Fryoeg0Y4Ors3kyycM"
            }
    })
    let data = response.json();

} */



async function aggiungiProdotto () {
    let nameVal = nomeProdotto.value;
    let brandVal = brand.value;
    let prezzoVal = prezzo.value;
    let urlImgVal = urlImg.value;
    let descProductVal = descProduct.value;
    let data = {
        name : nameVal,
        brand : brandVal,
        imageUrl : urlImgVal,
        price : prezzoVal,
        description : descProductVal
    }
    try{
        let response = await fetch(API_URL, {
            method: 'POST', 
            headers: {
                "Authorization": API_KEY,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data) 
          });
        
          let responseData = await response.json();
          productForm.reset()
          console.log(responseData);
          
        
    } catch (error){
        console.log(error);
    }
    

}

async function deleteProdotto (id) {
    let finalUrl = API_URL+id;
    try{
        let response = await fetch(finalUrl, {
            method: 'DELETE', 
            headers: {
                "Authorization": API_KEY,
                'Content-Type': 'application/json' 
            },
          });
        
          let responseData = await response.json();
         
          console.log(responseData);
          
        
    } catch (error){
        console.log(error);
    }
}


const init = () =>{
    saveBtn.addEventListener('click', function(e){
        e.preventDefault();
        aggiungiProdotto();
    })

    resetBtn.addEventListener('click', function(e){
        e.preventDefault();
        productForm.reset();
    })
    
}


window.onload = () => {
    init();
}