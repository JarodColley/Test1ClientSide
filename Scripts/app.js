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

        //creatig an h3 tag
        let h3 = document.createElement("h3");
        h3.textContent = "Name: Jarod Colley [100704994]";
        largeButton.parentNode.insertBefore(h3,largeButton);

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

