window.addEventListener("scroll", function(){
    let header=document.querySelector('.container-nav')
    header.classList.toggle('rolagem', window.scrollY > 0)
})




class mobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelector(navLinks)
        this.activeClass = 'active';
    }


    addClickEvent() {
        this.mobileMenu.addEventListener(" click", () => console.log("hey"))
    }


    Init() {
        if(this.mobileMenu){
            this.addClickEvent();

        }
        return this;
    }
}


const mobileNavbar = new mobileNavbar(

    ".mobile-menu",
    
    ".lista-empresa ",
    ".lista-empresa li",
)