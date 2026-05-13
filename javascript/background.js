document.body.addEventListener('click', (e) => {
    const darkBtn = e.target.closest('.dark-btn')
    if(darkBtn) {
        changeback()
    }
})


function changeback() {
    const currentBack = localStorage.getItem('background')
    if(currentBack !== 'black') {
        applyTheme('black', 'white')
    }
    else {
        applyTheme('#ffe8bc', '#5b2b1d')
    }
}

function applyTheme (bg, color) {
    localStorage.setItem('background', bg)
    localStorage.setItem('color', color)

    document.body.style.backgroundColor = localStorage.getItem('background')
    document.body.style.color = localStorage.getItem('color')
}

window.addEventListener('load', () => {
    bg = localStorage.getItem('background')
    color = localStorage.getItem('color')
    applyTheme(bg, color)
})