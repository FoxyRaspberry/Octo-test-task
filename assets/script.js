document.addEventListener('DOMContentLoaded', () => {
    const cards = [...document.getElementsByClassName('card-carousel__card')];
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    let currentIndex = 0;

    function showCards(index) {
        const visibleCardsCount = getVisibleCardsCount();
        cards.forEach((card, i) => {
            card.style.display = (i >= index && i < index + visibleCardsCount) ? 'block' : 'none';
        });
    }

    function getVisibleCardsCount() {
        const width = window.innerWidth;
        if (width < 576) return 1;
        if (width < 1200) return 2;
        return 3;
    }

    nextButton.addEventListener('click', () => {
        const visibleCardsCount = getVisibleCardsCount();
        currentIndex = (currentIndex + visibleCardsCount) % cards.length;
        showCards(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        const visibleCardsCount = getVisibleCardsCount();
        currentIndex = (currentIndex - visibleCardsCount + cards.length) % cards.length;
        showCards(currentIndex);
    });

    showCards(currentIndex);
});


// window.addEventListener('resize', () => {
//     showCards(currentIndex);
// });
