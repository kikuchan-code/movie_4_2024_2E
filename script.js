// トグル動作を簡素化して関数化
function setupToggle(toggles, toggleClass) {
    document.querySelectorAll(toggles).forEach(toggle => {
        toggle.addEventListener('click', function () {
            const details = this.nextElementSibling;
            const isHidden = details.style.display === 'none' || details.style.display === '';
            details.style.display = isHidden ? 'block' : 'none';
            this.textContent = this.textContent.replace(isHidden ? '表示' : '非表示', isHidden ? '非表示' : '表示');
        });
    });
}

// それぞれのトグルに対して実行
setupToggle('.small-toggle', 'small-details');
setupToggle('.toggle', 'details');
setupToggle('.big-toggle', 'big-details');