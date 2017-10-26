"use strict";

class Invitation {

    constructor(displayElement){

        displayElement.append(`<img id="image">
                              <h1 id="title"></h1>
                              <p id="date"></p>
                              <p id="start"></p>
                              <p id="end"></p>
                              <p id="location"> </p>
                              <p id="description"></p>`);

        // Set properties on the class
        this.container = displayElement;
        this.imageEl = displayElement.children("img#image");
        this.titleEl = displayElement.children("h1#title");
        this.dateEl = displayElement.children("p#date");
        this.startEl = displayElement.children("p#start");
        this.endEl = displayElement.children("p#end");
        this.locationEl = displayElement.children("p#location");
        this.descriptionEl = displayElement.children("p#description");

    }

    changeTitle(newTitle){
        this.titleEl.text(newTitle);
    }

    changeDate(newDate) {
        this.dateEl.text("Join us on " + newDate);
    }

    changeStart(newStart) {
        this.startEl.text(newStart);
    }

    changeEnd(newEnd) {
        this.endEl.text(newEnd);
    }

    changeImage(newImage){
        this.imageEl.attr("src", newImage);
    }

    changeFont(newFont) {
        this.container.css("font-family", newFont);
    }

    // Add more methods here

    changeLocation(newLocation) {
        this.locationEl.text(newLocation);
    }

    changeDescription(newDescription) {
        this.descriptionEl.text(newDescription);
    }

    changeBackgroundColor(newColor){
        this.container.css("background-color", newColor);
    }
}


// PART 2:

// Create your invitation object
let invitationElement = $("#invite-display");
let invitation = new Invitation(invitationElement);

// Add event listeners

let titleInput = $("#title-input");
function addTitle() {
    let newTitle = titleInput.val();
    // // calling method on the invitation instance and passing new title
    // from the title-input field.
    invitation.changeTitle(newTitle);
}

titleInput.on('keyup', addTitle);


let dateInput = $("#date-input");
function addDate() {
    let newDate = dateInput.val();
    invitation.changeDate(newDate);
}
dateInput.on('change', addDate);


let startInput = $("#start-time");
function addStart() {
    let newStart = startInput.val();
    invitation.changeStart(newStart);
}
startInput.on('change', addStart);


let endInput = $("#end-time");
function addEnd() {
    let newEnd = endInput.val();
    invitation.changeEnd(newEnd);
}
endInput.on('change', addEnd);


let locationInput = $("#location-input");
function addLocation() {
    let newLocation = locationInput.val();
    invitation.changeLocation(newLocation);
}
locationInput.on('keyup', addLocation);


let descriptionInput = $("#description-input");
function addDescription() {
    let newDescription = descriptionInput.val();
    invitation.changeDescription(newDescription);
}
descriptionInput.on('keyup', addDescription);

let fontInput = $("#font");
function addFont() {
    let newFont = fontInput.val();
    invitation.changeFont(newFont);
}
fontInput.on('change', addFont);


let colorInput = $(".color-btn blue");
function addColor() {
    let newColor = colorInput.data("data-color");
    invitation.changeBackgroundColor(newColor);
}
colorInput.on('click', addColor);