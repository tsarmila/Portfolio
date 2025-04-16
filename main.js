var Typed = new Typed(".text",{
    strings : [" Frontend Developer","Backend Developer"],
    typespeed:100,
})


// circle skill /////////////////////////////////////////
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;


    for(let i=0; i<dots; i++){
        points+= `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})





// active menu /////////////////////////////////////////
let menuLi =document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');



function activeMenu(){
    let len= section.length;
    while(--len && window.scrollY+ 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



// sticky navbar /////////////////////////////////////////

const header = document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
})


// toggle icon navbar /////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon i");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
   menuIcon.classList.toggle("bx-x");
   navbar.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("open");
}



// parallax /////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));
