const header = document.querySelector('header')
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('basic-btn')) {
        fontbasic();
    } else if (e.target.classList.contains('slab-btn')) {
        fontslab();
    }
});

window.addEventListener('load', () => {
    const font = localStorage.getItem('font')
    if(font) {
        document.body.style.setProperty('font-family', font, 'important')
        header.style.setProperty('font-family', font, 'important')
    }
})

function fontbasic() {
    const font = "system-ui, -apple-system, sans-serif";
    localStorage.setItem("font", font)
    document.body.style.setProperty('font-family', font, 'important');
    header.style.setProperty('font-family', font, 'important');
}

function fontslab() {
    const font = '"Clarendon", "Rockwell", "Gmarket Sans", serif';
    localStorage.setItem("font", font)
    document.body.style.setProperty('font-family', font, 'important');
    header.style.setProperty('font-family', font, 'important');
}