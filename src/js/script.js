//tela de carregamento//
window.onload = function(){
    const loading = document.querySelector('.loading')
    let body = document.querySelector('body')
    body.classList.add('no-scroll')

    setTimeout(() => {
        loading.style.opacity = '0'
        setTimeout(() => {
            loading.style.display = 'none'
            body.classList.remove('no-scroll')
        },500)
    },2000)
}


//barra de navegação//
window.addEventListener('scroll', ()=> {
    let navbar = document.querySelector('header nav')
    navbar.classList.toggle('rolagem', window.scrollY > 700)
})