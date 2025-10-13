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
        if (width >= 576 && width < 768) return 2;
        if (width >= 768 && width <= 992) return 2;
        if (width > 992 && width < 1200) return 2;
        return 3; // Для ширины >= 1200px
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
