var elementsss = [];

function setupp() {
    elementsss = document.getElementsByClassName("img-thumbnail");
    console.log(elementsss);
    // elementsss.forEach(myFunction);
    for (let count = 0; count <= elementsss.length; count++) {
        console.log(elementsss[count]);
        elementsss[count].setAttribute("id", "img" + (Math.floor(Math.random() * 100000) + 1));
        $(elementsss[count]).click(function(event) {
            modal(event);
        });
    }


}

function modal(event) {
    console.log(event);
    var targets = document.getElementById(event.target.id);
    console.log(targets, event.target.id);
    console.log(document.getElementById("imageeeee"));
    document.getElementById("imageeeee").src = targets.src;
    $("#myModal").modal();
}

function myFunction(item, index) {
    $(item).click(function(event) {
        alert(event.target.id);
    });
}