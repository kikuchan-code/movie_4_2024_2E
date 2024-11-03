// トグル動作
document.addEventListener('DOMContentLoaded', function() {
    // .big-toggle と .toggle .small-toggle のすべての要素を取得
    const toggles = document.querySelectorAll('.big-toggle, .toggle, .small-toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const details = this.nextElementSibling; // 次の兄弟要素を取得
            if (details) {
                if (details.style.display === 'block') {
                    details.style.display = 'none'; // 非表示
                } else {
                    details.style.display = 'block'; // 表示
                }
            }
        });
    });
});
