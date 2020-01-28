/*
    Student Name  : Jarod Colley
    StudentID     : 100704994
    Date Completed: 2020-01-28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        //changing the large button text to learn more
        let largeButton = document.getElementById("largeButton");
        largeButton.textContent = "Learn More";

        //creating an h3 tag
        let h3 = document.createElement("h3");
        //setting the text content
        h3.textContent = "Name: Jarod Colley [100704994]";
        //inserting it before the large button
        largeButton.parentNode.insertBefore(h3,largeButton);

        //changing the text content of the paragraph tag with an id of firstParagraph
        let paragraph = document.getElementById("firstParagraph");
        paragraph.textContent = "JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called Prototype that can be used to extend object properties and methods.";
        //hiding the paragraph
        paragraph.style.display = "none";

        //event listener and handler for the large button click
        largeButton.addEventListener("click", 
        function(){
            //if the button reads learn more and its clicked change the text to Hide details and display the paragraph
            if(largeButton.textContent == "Learn More")
            { largeButton.textContent = "Hide Details"
            paragraph.style.display = "block";  } 
            //else if the button is clicked set the text to Learn more and hide the paragraph
            else {largeButton.textContent = "Learn More"
            paragraph.style.display = "none";}});

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));

