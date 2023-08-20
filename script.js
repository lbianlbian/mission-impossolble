function openLink(link){
    window.open(link, target = "_self");
}

function genNavBarElement(page, text){
    var output = document.createElement("h3");
    output.setAttribute("id", "navbarright");
    output.setAttribute("onclick", "openLink('" + page + "')");
    output.innerText = text;
    return output;
}

function genNavBar(){
    var body = document.getElementsByTagName("body")[0];

    var logo = document.createElement("img");
    logo.setAttribute("src", "newlogo.png");
    logo.setAttribute("onclick", "openLink('index.html')");

    var about = genNavBarElement("about.html", "About");
    //var restore = genNavBarElement("restore.html", "Restore Previous Mission");

    var navBarDiv = document.createElement("div");
    navBarDiv.appendChild(logo);
    navBarDiv.appendChild(about);
    //navBarDiv.appendChild(restore);
    body.prepend(navBarDiv);
}

function genButton(text, clickAction){
    var button = document.createElement("button");
    button.innerHTML = text;
    button.setAttribute("onclick", clickAction);
    return button;
}

function genMultChoice(correct, wrong1, wrong2, correctLink, wrongMsg){
    console.log("werfwefwe")
    var container = document.getElementById("multChoice");
    var correctFunc = "window.open('" + correctLink + "', target = '_self')";
    var wrongFunc = "alert('" + wrongMsg + "')";
    //add 3 buttons
    var buttonArr = [
        genButton(correct, correctFunc), 
        genButton(wrong1, wrongFunc),
        genButton(wrong2, wrongFunc)
    ];
    //randomize the order
    var start = Math.round(Math.random() * 2);
    for(var i = start; i < start + 3; i++){
        var rightInd = i % 3;
        var rightButton = buttonArr[rightInd];
        container.appendChild(rightButton);
    }
}