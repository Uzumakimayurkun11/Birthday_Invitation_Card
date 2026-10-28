const printButton = document.querySelector("#print-button");
const decorations = document.querySelector("#decorations");

const sprinkles = [
  [279.75, 12.95, 10, 20, -25, "#7c6cf0"], [113.33, 41.16, 10, 20, 30, "#7c6cf0"],
  [242.49, 70.83, 8, 16, -45, "#4ecdc4"], [0.44, 100.2, 8, 16, 50, "#4ecdc4"],
  [354.73, 102.63, 10, 18, -80, "#ffc94d"], [7.94, 199.24, 10, 18, 35, "#ff7da0"],
  [342.4, 205.87, 10, 20, 40, "#ffc94d"], [12.44, 330.2, 8, 16, 50, "#4ecdc4"],
  [360.27, 300.27, 10, 18, -65, "#ffc94d"], [28.7, 381.53, 12, 22, 30, "#4ecdc4"],
  [369.89, 420.97, 8, 16, -70, "#7c6cf0"], [19.17, 441.38, 10, 18, -70, "#4ecdc4"],
  [338.61, 406.17, 10, 18, 20, "#ffc94d"], [333.84, 469.33, 10, 20, 60, "#ffc94d"],
  [5.83, 521.03, 10, 22, 30, "#4ecdc4"], [357.77, 546.17, 10, 18, 20, "#ffc94d"],
  [296.37, 637.46, 10, 22, 70, "#ff7da0"], [49.36, 591.06, 10, 20, 35, "#4ecdc4"],
  [306.28, 723.1, 10, 20, 20, "#ff7da0"], [144, 766.66, 10, 20, 80, "#4ecdc4"],
  [3.83, 691.29, 10, 18, 30, "#ff7da0"]
];

sprinkles.forEach(([x, y, width, height, rotation, color]) => {
  const shape = document.createElement("span");
  shape.className = "sprinkle";
  shape.setAttribute("aria-hidden", "true");
  shape.style.left = `${(x / 390) * 100}%`;
  shape.style.top = `${(y / 844) * 100}%`;
  shape.style.width = `${width}px`;
  shape.style.height = `${height}px`;
  shape.style.backgroundColor = color;
  shape.style.transform = `rotate(${rotation}deg)`;
  decorations.append(shape);
});

printButton.addEventListener("click", () => window.print());
