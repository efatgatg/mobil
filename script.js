const carduri = document.querySelectorAll('.card');
const listaProduse = document.getElementById('lista-produse');
const totalElement = document.getElementById('total');

let total = 0;

carduri.forEach(card => {
    card.addEventListener('click', function() {
        const idProdus = this.dataset.produsId;
        const numeProdus = this.querySelector('h3').textContent;

        const li = document.createElement('li');
        li.textContent = numeProdus;
        listaProduse.appendChild(li);

        total += 100; // Presupunem că prețul fiecărui produs este 100 lei
        totalElement.textContent = `Total: ${total} lei`;
    });
});
