/*first We will configrue our dynamic Website 
    Define project Title
    Define Developer Name
    Define Sponer
*/
let projectTitle = "Landing Page Site",
    author = "Moaz Abdelnasser",
    authorPhone = '+201115507441',
    authorLinkden = 'https://www.linkedin.com/in/moaz-abdel-nasser-265461184/',
    sponer ="Udacity Corporation";

/*Second we will create dynamically four nav menu*/

let nav1 = document.createElement('li'),
    nav2 = document.createElement('li'),
    nav3 = document.createElement('li'),
    nav4 = document.createElement('li');
nav1.innerHTML = "Home page";
nav2.innerHTML = "Services";
nav3.innerHTML = "Booking";
nav4.innerHTML = "Contact us";
var mainNav = document.getElementById("mainNavUl");
//Now we will append the Four childern navBars
mainNav.appendChild(nav1);
mainNav.appendChild(nav2);
mainNav.appendChild(nav3);
mainNav.appendChild(nav4);
/*Now we need to add an Id for each li to go to it when click the list navBar*/
nav1.setAttribute('id',"homePage");
nav2.setAttribute("id","services");
nav3.setAttribute("id","booking");
nav4.setAttribute("id","contactUs");

 