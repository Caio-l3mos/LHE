window.addEventListener("scroll", function(){
    let header=document.querySelector('.container-nav')
    header.classList.toggle('rolagem', window.scrollY > 0)
})