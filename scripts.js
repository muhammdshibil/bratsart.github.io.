// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const paintings = document.querySelectorAll('.painting');

    paintings.forEach(painting => {
        painting.addEventListener('click', () => {
            painting.classList.toggle('painting-expanded');
        });
    });
});
