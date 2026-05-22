
const ghNewFaqItems = document.querySelectorAll('.gh-newfaq-item');

ghNewFaqItems.forEach(item => {

    const button = item.querySelector('.gh-newfaq-question');

    button.addEventListener('click', () => {

        item.classList.toggle('active');

    });

});

