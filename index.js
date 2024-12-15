document.querySelectorAll('.faq-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');

        const toggle = box.querySelector('.faq-toggle');
        if (toggle.textContent === '+') {
            toggle.textContent = '-';
        } else {
            toggle.textContent = '+';
        }
    });
});

