function addName() {
    let username = prompt("What is your name?", undefined);

    let nameList = document.getElementById("names");
    
    // create a brand new div to hold our name
    let div = document.createElement("div");
    // assign the name to the innerHtml
    div.innerHTML = username;
    
    nameList.appendChild(div);
}

// for (let i = 0; i < 3; i++) {
//     addName();
// }
