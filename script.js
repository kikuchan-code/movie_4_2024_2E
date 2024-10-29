document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const details = this.nextElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            this.textContent = this.textContent.replace('表示', '非表示');
        } else {
            details.style.display = 'none';
            this.textContent = this.textContent.replace('非表示', '表示');
        }
    });
});

document.querySelectorAll('.big-toggle').forEach(bigToggle => {
    bigToggle.addEventListener('click', function () {
        const bigDetails = this.nextElementSibling;
        if (bigDetails.style.display === 'none' || bigDetails.style.display === '') {
            bigDetails.style.display = 'block';
            this.textContent = this.textContent.replace('表示', '非表示');
        } else {
            bigDetails.style.display = 'none';
            this.textContent = this.textContent.replace('非表示', '表示');
        }
    });
});