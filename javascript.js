// ✅ MOBILE MENU TOGGLE
function toggleMenu(){
    document.getElementById("nav").classList.toggle("active");
}


// ✅ NAV LINK ACTIVE ON CLICK
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    link.addEventListener("click", function(){
        links.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});


// ✅ NAV ACTIVE ON SCROLL
window.addEventListener("scroll", () => {

    let sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            links.forEach(link => {
                link.classList.remove("active");
                document.querySelector('.nav-link[href="#'+id+'"]')?.classList.add("active");
            });
        }
    });

});


// ✅ PASSWORD SHOW / HIDE
function togglePassword(){
    let pass = document.getElementById("password");

    if(pass.type === "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}


// ✅ CONTACT FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("successMsg").style.display = "block";

    this.reset();
});


// ✅ SECTION FADE ANIMATION
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;

        if(top > offset){
            sec.classList.add("show");
        }
    });

});