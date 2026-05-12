const speak = document.querySelector(".speak");

function initAudio() {
    if (!speak) return;

    // 1. 볼륨 복구
    const savedVolume = localStorage.getItem('volume');
    speak.volume = savedVolume ? parseFloat(savedVolume) : 0.5;

    // 2. 시간 복구 (메타데이터가 로드된 후 설정해야 정확함)
    const savedTime = localStorage.getItem('musicTime');
    speak.addEventListener('loadedmetadata', () => {
        if (savedTime) {
            speak.currentTime = parseFloat(savedTime);
        }
    });

    // 3. 재생 상태 복구
    if (localStorage.getItem('music') === 'true') {
        const playAudio = () => {
            speak.play().catch(() => {
                // 자동 재생이 막혔을 경우, 다음 클릭 시 재생되도록 예약
                window.addEventListener('click', playAudio, { once: true });
            });
        };
        playAudio();
    }
}

// 페이지 로드 시 바로 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudio);
} else {
    initAudio();
}

// 시간 실시간 저장 (1초마다 저장하여 부하 줄이기)
let lastSavedTime = 0;
if (speak) {
    speak.addEventListener("timeupdate", () => {
        const now = speak.currentTime;
        if (Math.abs(now - lastSavedTime) > 1) { // 1초 간격으로 저장
            localStorage.setItem('musicTime', now);
            lastSavedTime = now;
        }
    });
}

// 버튼 이벤트 (설정 페이지 등 동적으로 로드되는 엘리먼트용)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bgm-start')) {
        speak.play();
        localStorage.setItem('music', 'true');
    }
    if (e.target.classList.contains('bgm-end')) {
        speak.pause();
        localStorage.setItem('music', 'false');
    }
});

// 볼륨 슬라이더 (동적으로 로드되는 엘리먼트용 이벤트 델리게이션)
document.addEventListener("input", (e) => {
    if (e.target.classList.contains("bgm-range")) {
        const vol = e.target.value / 100;
        if (speak) speak.volume = vol;
        localStorage.setItem('volume', vol);
    }
});

// 라우팅 변경 시 설정 페이지가 로드되면 슬라이더의 초기값 셋팅
window.addEventListener("hashchange", () => {
    setTimeout(() => {
        const bgm_range = document.querySelector(".bgm-range");
        if (bgm_range && speak) {
            bgm_range.value = speak.volume * 100;
        }
    }, 50); // 페이지 로드 대기 시간
});