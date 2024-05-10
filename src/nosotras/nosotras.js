function voltearTarjeta(id) {
    var card = document.querySelector(`.card-${id}`);
    card.classList.toggle('flipped');
}