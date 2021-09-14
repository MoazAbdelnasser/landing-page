# Table of contents :
   Project title
   Project description
   Dependences
   Implementation process description
#######################

# Project title:
    
    Landing Page
    
# Project description
    
    This project build as the first app in udacity course,
    It's about using javascript to add navbars Dynamiclly according number of sections in th e project.
    Handle User interactions ( Scrolling - clicking) to know the active section and it's navbar list

# Dependences
    
    two images ( svg - png) to use them as two buttons one for handle responsiveness and one to handle scrolling to top smoothly


# Implementation process description
    
    First : Loop throw all sections inside the document to store them at a variable and loop throw
    
    Second : Create my own helper functions like:
        activateNav() ==>> this function take the passed argument and remove the active class from all navbars , then give the passed navbar the active class
        
        activateSection() ==>> This function used to activate the given section by the same above mechanism
        
        toggleFun() ===>> It's a function to handle show or hide the given parameter
        
        ElementIsInViewport()  ==>> It's a function that helps us to know if the passed section is at the view port scale
    
    Third:  Handle event of clicks on (the navbar-list item    && the image that take you   to the top of the document)
    
    Forth : Handle event of scrolling throw the document