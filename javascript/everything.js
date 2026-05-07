const back_btn = document.querySelector(".back-btn")
const bgm_start = document.querySelector(".bgm-start")
const bgm_end = document.querySelector(".bgm-end")
const bgm_range = document.querySelector(".bgm-range")
const speak = document.querySelector(".speak")


back_btn.addEventListener("click", () => {
    history.back()
})


window.addEventListener('load', () => {
    if(window.localStorage.getItem('musicTime')) {}

    if(window.localStorage.getItem('volume')) {
        speak.volume = parseFloat(window.localStorage.getItem('volume'))
    }

    if(window.localStorage.getItem('music') === 'true') {
        speak.play()
    } else {
        speak.pause()
    }

    if (bgm_range  && volume100) {
        bgm_range.value = volume100 * 100
    }

})

speak.addEventListener("timeupdate", () => {
    localStorage.setItem('musicTime', speak.currentTime);
});

bgm_start.addEventListener("click", () => {
    speak.play()
    window.localStorage.setItem('music', 'true')
})
bgm_end.addEventListener("click", () => {
    speak.pause()
    window.localStorage.setItem('music', 'false')
})
bgm_range.addEventListener("input", (e) => {
    let volume = e.target.value
    let volume100 = volume/100
    speak.volume = volume100
    window.localStorage.setItem('volume', volume100)
})
