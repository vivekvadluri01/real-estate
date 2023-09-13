function toggleMinBox() {
    var minBox = document.getElementById("minBox");
    var maxBox = document.getElementById("maxBox");

    if (minBox.style.display === "block") {
        minBox.style.display = "none";
    } else {
        minBox.style.display = "block";
        maxBox.style.display = "none";
    }
}

function toggleMaxBox() {
    var minBox = document.getElementById("minBox");
    var maxBox = document.getElementById("maxBox");

    if (maxBox.style.display === "block") {
        maxBox.style.display = "none";
    } else {
        maxBox.style.display = "block";
        minBox.style.display = "none";
    }
}

function setValue(inputId, selectedValue) {
    var inputField = document.getElementById(inputId);
    inputField.value = selectedValue;
}

