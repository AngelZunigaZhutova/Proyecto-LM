var character =
document.getElementById("characte");
var block = document.getElementById("block");
function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");

    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);

}