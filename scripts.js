//These are examples of EVENTS in-line HTML

//https://developer.mozilla.org/en-US/docs/Web/Events
//https://www.w3schools.com/jsref/dom_obj_event.asp


console.log("let's listen!");

let sayWhat = document.getElementById("output");


//this will appear like an array, but it's actually a JS "collection"

let listItems = document.getElementsByClassName("list-item");
console.log("listItems", listItems);

//we can pass parameters into the function, and we want to relate parameters to the CLICK action
function handleClick(MouseEvent) {
    console.log("MouseEvent", MouseEvent);
    let elementText = MouseEvent.target.innerHTML;
    sayWhat.innerHTML = "So you'd like to see " + elementText + " ?";
}


//start looping through the items, and in the process, we will call what is within the {}
for (let i = 0; i < listItems.length; i++) {
    listItems.item(i).addEventListener("click", handleClick)
}

//the "Event" could be just about anything, from a key click to a mouse movement, to another linked event...

let header = document.getElementById("page-header");

//when you hear a "mouseover", 
header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

function handleHeaderMouseOver(event) {
    sayWhat.innerHTML = "Welcome to Springfield!"
}

function handleHeaderMouseOut(event) {
    sayWhat.innerHTML = "We hope you enjoyed your stay!"
}

//Adding an input with an area and keyed events

//what we are doing is passing one function into another function, and the technical term
//for this a LAMBDA

let inputArea = document.getElementById("keypress-input");

inputArea.addEventListener("keyup", function(event) {
    console.log("event", event);
    sayWhat.innerHTML = event.target.value;
});

//Toggle means "if it's there, take it away; if it's not there, add it"

let bartImage = document.getElementById("Bart Simpson");

document.getElementById("change-color")
    .addEventListener("click", function() {
        bartImage.classList.toggle("flashy");
    });

document.getElementById("enlarge")
    .addEventListener("click", function() {
        bartImage.classList.toggle("moreforce");
    });

document.getElementById("add-border")
    .addEventListener("click", function() {
        bartImage.classList.toggle("bordered");
    });

//EVENT BUBBLING:

//    You can add an event handler on the body tag, 
//and since all browser events bubble up to the body, 
//you can then put in conditional logic to handle the 
//click event on many differnt elements within one function.

document.getElementById("wrapper").addEventListener("click", function(event) {
    console.log("target", event.target);
    console.log("currentTarget", event.currentTarget);

    if (event.target.tagName.toLowerCase() === "li") {
        console.log("You clicked on a <li> element");
    }

    if (event.target.className === "list-item") {
        console.log("You clicked on a `list-item` element");
    }

    if (event.target.id === "page-title") {
        console.log("You clicked on a page title element");
    }

});

let quotesArray = [
    "Cowabunga",
    "Eat my shorts",
    "Eeeeeexcellent",
    "Don't have a cow, man",
    "Oh, Homie",
    "Mmmmm. Beer.",
    "Hi-diddly-ho there neighbor!"
];

quotesArray.forEach((quote, index) => {
    let quoteBlock = `<div id="quote--${index}">
                        <h3>"${quote}" - Simpsons, Ep.1</h3>
                        </div>`;

    let quoteDiv = document.createElement("div");
    quoteDiv.innerHTML = quoteBlock;
    //now you add it to the DOM
    document.getElementById("remember").appendChild(quoteDiv);
    //not quite good enough, because we need to add a Listener 
    let quoteDOM = document.getElementById(`quote--${index}`);
    quoteDOM.addEventListener("click", () => {
        console.log("event", event);
        event.currentTarget.classList.add("accent");

    });
});

//creating new array definition for buttons html 

let characterSimpson = [10, 20, 30, 40];
let characterOther = [50, 60, 70, 80];

function changeScores(item, index, whichArray) {
    whichArray[index] = item * 10;
}
document.getElementById("changeSimpson").addEventListener("click", () => {
    characterSimpson.forEach(changeScores);
    console.log("Simpson", characterSimpson);
});
document.getElementById("changeOther").addEventListener("click", () => {
    characterOther.forEach(changeScores);
    console.log("Other", characterOther);
});

//the forEach function builds in the items and passes them into the array here ^