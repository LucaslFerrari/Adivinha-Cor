const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", 
    "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", 
    "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", 
    "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", 
    "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", 
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", 
    "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", 
    "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", 
    "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", 
    "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", 
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", 
    "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", 
    "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", 
    "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", 
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", 
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", 
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", 
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", 
    "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", 
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", 
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", 
    "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", 
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", 
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", 
    "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", 
    "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", 
    "WhiteSmoke", "Yellow", "YellowGreen"
];

let selectedColors = [];
let targetColor = "";
let attemptsLeft = 3;

function startGame() {
    // Reset game state
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#333";
    document.getElementById("feedback").textContent = "";
    document.getElementById("restart-btn").style.display = "none";
    attemptsLeft = 3;

    // Select 10 random colors
    selectedColors = [];
    while (selectedColors.length < 10) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (!selectedColors.includes(randomColor)) {
            selectedColors.push(randomColor);
        }
    }

    // Pick the target color
    targetColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

    // Display color options
    const colorOptions = document.getElementById("color-options");
    colorOptions.innerHTML = "";
    selectedColors.forEach(color => {
        const li = document.createElement("li");
        li.textContent = color;
        li.addEventListener("click", () => checkGuess(color));
        colorOptions.appendChild(li);
    });
}

function checkGuess(color) {
    if (color === targetColor) {
        document.getElementById("feedback").textContent = "Correct! You guessed the color.";
        document.body.style.backgroundColor = targetColor;
        document.getElementById("restart-btn").style.display = "block";
    } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
            document.getElementById("feedback").textContent = `Wrong! You have ${attemptsLeft} attempts left.`;
        } else {
            document.getElementById("feedback").textContent = `Game Over! The color was ${targetColor}.`;
            document.getElementById("restart-btn").style.display = "block";
        }
    }
}

// Start the game on load
startGame();
