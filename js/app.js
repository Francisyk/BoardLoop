function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Rent';
        gameClicado.dataset.status = '';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Return';
        gameClicado.dataset.status = 'rented';
    }
}

const links = document.querySelectorAll(".dashboard__items__item a");
links.forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();
    });
});
