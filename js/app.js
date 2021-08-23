/*first We will configrue our dynamic Website 
    Define project Title
    Define Developer Name
    Define Sponer
*/
let projectTitle = "Landing Page Site",
    author = "Moaz Abdelnasser",
    authorPhone = '+201115507441',
    authorLinkden = 'https://www.linkedin.com/in/moaz-abdel-nasser-265461184/',
    sponser ="Udacity Corporation";

    document.getElementById('projectTitle').innerHTML = projectTitle;
    document.getElementById('author').innerHTML = author;
    document.getElementById('authorPhone').innerHTML = `<a href="tel:+${authorPhone} "> ${authorPhone}</a>`;
    document.getElementById('authorLinkden').innerHTML = `<a href = "${authorLinkden}">Linkden Profile </a>`;
    document.getElementById('sponser').innerHTML = sponser;
/*Second we will create dynamically four nav menu*/

let nav1 = document.createElement('li'),
    nav2 = document.createElement('li'),
    nav3 = document.createElement('li'),
    nav4 = document.createElement('li');
nav1.innerHTML = `<a href="#home-page">Home page</a>`;
nav2.innerHTML = `<a href="#about-us">About us</a>`;
nav3.innerHTML = `<a href="#services">Services</a>`;
nav4.innerHTML = `<a href="#contact-us">Contact us</a>`;
var mainNav = document.getElementById("mainNavUl");
//Now we will append the Four childern navBars
mainNav.appendChild(nav1);
mainNav.appendChild(nav2);
mainNav.appendChild(nav3);
mainNav.appendChild(nav4);
/*Now we need to add an Id for each li to go to it when click the list navBar*/
/* nav1.setAttribute("id","home-page");
nav2.setAttribute("id","about-us");
nav3.setAttribute("id","services");
nav4.setAttribute("id","contact-us"); */
/*Testing addEventListener / removeEventListener */
/**Now we have two variables : sames to be  the same */
/*
//removeEventListener() -->>> Works here
let myfun = function(){
    console.log("welcome");
} 
let nav = document.getElementById("navBar");
nav.addEventListener('click',myfun);
// Now Let's remove the event Listener
nav.removeEventListener('click',myfun); */

/*
let nav = document.getElementById("navBar");
nav.addEventListener('click', function () {
    myfun();
    // console.log("hi");
});
// Now Let's remove the event Listener
nav.removeEventListener('click', function () {
    myfun();
})*/
//Add background of the navBar while scrolling
function navBackground(){
    document.getElementById("navBar").style.backgroundColor = '#090e25';
}

document.addEventListener('scroll',navBackground);
//scroll to top
let scrolToTop = document.getElementById("arrow-up");
scrolToTop.addEventListener('click',function(){
    scroll("smoothly",0);
});