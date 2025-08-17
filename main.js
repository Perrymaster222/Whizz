function RunGame() {
    // setup
    var Code = document.getElementById("CodeSpace").value;
    var GameWindow = window.open("", "Game", "width=1500,height=800");
    var CodeByLine = Code.split("\n");

    for (var i = 0; i < CodeByLine.length; i++) {
        if (CodeByLine[i].substring(0,3) == "blueprint"); {
            GameWindow.console.log(CodeByLine[i].substring(0,3))
        }
    }
}