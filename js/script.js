const modo = document.querySelector('#mode')

const temaSalvo = localStorage.getItem('tema')

if (temaSalvo === 'light') {
    document.body.classList.add('light')
    modo.checked = true
}

modo.addEventListener("click", () => {
    document.body.classList.toggle('light')
    if (document.body.classList.contains('light')) {
        localStorage.setItem('tema', 'light')
    } else {
        localStorage.setItem("tema", "dark")
    }

})