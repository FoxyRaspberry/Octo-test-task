document.addEventListener('DOMContentLoaded', () => {
    const cards = [...document.getElementsByClassName('card-carousel__card')];
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    let currentIndex = 0;

    function showCards(index) {
        cards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCards(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCards(currentIndex);
    });

    showCards(currentIndex);
});
