
const store = document.getElementById('item');

import data from "./data/data.json" assert {type : 'json'}

const Data3 = data.Reedem;
const home = () => {
    Data3.forEach(item => {
        const container = document.querySelector('.item');
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-header">
                <img src="${item.image}" alt="${item.nama}">
            </div>
            <div class="card-body">
                <h5>${item.barang}</h5>
                <p>Rp. ${item.harga}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

if (!store) {
    console.log('data tidak ada')
}else{
    home(data);
}