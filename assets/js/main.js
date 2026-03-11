const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

// Tamaños
canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

// Fondos
canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

// =======================
// FUNCIÓN COLOR RANDOM
// =======================

function randomColor() {
  return "rgb(" +
    Math.floor(Math.random() * 256) + "," +
    Math.floor(Math.random() * 256) + "," +
    Math.floor(Math.random() * 256) + ")";
}

class Circle {
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
    this.lineWidth = 5;
  }

  draw(context) {
    context.beginPath();

    context.lineWidth = this.lineWidth;

    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);

    context.fillStyle = this.backcolor;
    context.fill();

    context.strokeStyle = this.color;
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";

    context.fillStyle = this.textcolor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// =======================
// CÍRCULO CENTRADO
// =======================

let miCirculo = new Circle(
  canvasOOP.width / 2,
  canvasOOP.height / 2,
  50,
  randomColor(),  // contorno random
  "Tec",
  randomColor(),  // relleno random
  randomColor()   // texto random
);

miCirculo.draw(ctx);

// =======================
// CÍRCULO RANDOM
// =======================

let tempLineWidth = 5;

let randomRadius = Math.floor(Math.random() * 100 + 30);

let maxRadius = (Math.min(canvasRandom.width, canvasRandom.height) / 2) - (tempLineWidth / 2);

if (randomRadius > maxRadius) {
  randomRadius = maxRadius;
}

let margin = randomRadius + (tempLineWidth / 2);

let randomX = Math.random() * (canvasRandom.width - 2 * margin) + margin;
let randomY = Math.random() * (canvasRandom.height - 2 * margin) + margin;

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  randomColor(),
  "Tec",
  randomColor(),
  randomColor()
);

miCirculoRandom.draw(ctxRandom);

// =======================
// MÚLTIPLES CÍRCULOS CONTROLADOS
// =======================

let MaxCircles = 10;
let arrayCircle = [];

for (let i = 0; i < MaxCircles; i++) {

  let radius = Math.floor(Math.random() * 20) + 20;

  let maxRadius = Math.min(canvasMultiple.width, canvasMultiple.height) / 2 - (tempLineWidth / 2);

  if (radius > maxRadius) {
    radius = maxRadius;
  }

  let margin = radius + (tempLineWidth / 2);

  let x = Math.random() * (canvasMultiple.width - margin * 2) + margin;
  let y = Math.random() * (canvasMultiple.height - margin * 2) + margin;

  let miCirculoMultiple = new Circle(
    x,
    y,
    radius,
    randomColor(),
    i + 1,
    randomColor(),
    randomColor()
  );

  arrayCircle.push(miCirculoMultiple);
}

arrayCircle.forEach(c => c.draw(ctxMultiple));