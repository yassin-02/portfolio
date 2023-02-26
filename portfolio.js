let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// the cv btn

let  downloadBtn = document.getElementById('cv-btn');
downloadBtn.addEventListener('click',function(){
    const link = document.createElement("a");
    link.href = 'CV de siham elhamdaoui (1).pdf';
    link.download = 'CV de siham elhamdaoui (1).pdf';

    link.click();
});


// the menu button 

let menuIcon = document.getElementById('menu_icon');
let navBar = document.getElementById('navbar');

menuIcon.style.cursor = 'pointer';

menuIcon.addEventListener('click', function() {
    // menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
    navBar.classList.toggle('active');

});

window.onscroll = function(){
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            })
        }
    })

    menuIcon.classList.remove('fa-x');
    navBar.classList.remove('active');
}

ScrollReveal({
    reset: true,
    distance :'130px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .h3', { origin:'top'});
ScrollReveal().reveal('.contact h2 , .services h2 ,.projects h2 , .about h2', { origin:'top'});
ScrollReveal().reveal('.home-img , .about-content ,.input-box ,.home-content p', { origin:'right'});
ScrollReveal().reveal('.about-img , form textarea , .home-content h1', { origin:'left'});
ScrollReveal().reveal('.services-box , .projects-box', { origin:'bottom'});



let typed = new Typed('.animated',{
    strings: ['Computer Science Student' , 'FullStack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
});



// the pop up window of the about read more btn

const readMoreBtn = document.querySelector('.btn-read');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close');

readMoreBtn.addEventListener('click', function() {
    popupContainer.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    popupContainer.classList.remove('active');
});


