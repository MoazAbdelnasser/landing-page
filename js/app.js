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
debugger;
let sec = document.getElementsByTagName('section');
//second we will get create navmenu list at the Navbar
let mainNav = document.getElementById("navbar__list");
for(let x of sec){
    //console.log(x.getAttribute('data-nav'));
    //debugger
    nav= document.createElement('li');
    nav.textContent = x.getAttribute('data-nav');
    mainNav.appendChild(nav);
}

//Handle scroll to top-arrow
let scrolToTop = document.getElementById("arrow-up");
scrolToTop.addEventListener('click',function(){
    scroll("smoothly",0);
    activateNav(mainNav.children[0]);
    //scrolToTop.style.display = 'none';
});
//Function to handle active nav menu list automatically when called so we can call it when scrolling or click (any other event we want else)
let activateNav = (actNav) =>{
    //Loop first at all nav-menu-items : THEN remove the class active-nav'
    for(let navList of mainNav.querySelectorAll("li")){
        navList.classList.remove('active-nav');
    }
    actNav.classList.add('active-nav');
}
//Function to handle active Section automatically when called so we can call it when scrolling or click (any other event we want else)
let activateSection = (activeSect) =>{
    for(let sector of sec){
        sector.classList.remove('your-active-class');
    };
    activeSect.classList.add('your-active-class');
}
//Handle clicks events on the Navbar item lists
mainNav.addEventListener('click', (e)=>{
    //prevent first default actions to the event
    e.preventDefault();
    //Now list identify the clicked list item
    for(let x of sec){
        if(e.target.textContent == x.getAttribute('data-nav')){
            //Add Active class for the clicked Nav menu list item
            activateNav(e.target);
            //First get the specific Element to the view port
            x.scrollIntoView({
                behavior : 'smooth'
            });
            //Change that section and the corsponding navmenu list item to active and remove the class from others
            //We will remove the class first from all sections
            activateSection(x);
        }
    }
});
/*Handle Scroll Events to activate 
    #First :
        activate the Section at the view port
    #Second :
        activate the nav-menu-list for the active section
*/
//This is a good function that identify the element at the view port
var ElementIsInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}; 

//We need to Make the firstElemnt at the navbar is active by default , then it will be changed automatically when scrolling
activateNav(mainNav.children[0]);
document.addEventListener('scroll', function (e) {
    //debugger
    e.preventDefault();
    //Now let's first identify the section that is at the position = 0   
    //As position zero is the position at top of the document
    for(let ourActiveSection of sec){
        
        if (ElementIsInViewport(ourActiveSection)){
            //console.log("alert");
            activateSection(ourActiveSection);
            //Now we look for the corrsponding nav-menu-list with the same textContent LIKE data-nav of that section
            //We need to loop for all nav-menu-list
            //console.log("Hello " + ourActiveSection.getAttribute('data-nav'));
            for(let ourAciveNav of mainNav.children){
                //Let's find active nav-menu-list
                if(ourAciveNav.textContent == ourActiveSection.getAttribute('data-nav')){
                    activateNav(ourAciveNav);
                } 
                //console.log(ourAciveNav.textContent);
            }
        }
        
    }
});