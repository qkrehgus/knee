document.addEventListener('click', (e) => {
    if (e.target.closest('.back-btn')) {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // 이전 기록이 없다면 메인 페이지로 보냄
            window.location.hash = '#/';
        }
    }
});