function addName() {
    let username = document.getElementById("guest");
    let nameList = document.getElementById("names");
    let placeholder = document.getElementById("placeholder");

    if (username.value === "") {
        console.log("found an empty string");
        return;
    }

    if (placeholder) {
        console.log("found placeholder");
        placeholder.remove();
    }
        
    // create a brand new div to hold our name
    let div = document.createElement("div");
    // assign the name to the innerHtml
    div.innerHTML = username.value;
    
    nameList.appendChild(div);
    username.value = "";
}

// for (let i = 0; i < 3; i++) {
//     addName();
// }
