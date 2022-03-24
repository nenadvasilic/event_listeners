/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

// Prvo vatamo celi kontejner!

const gridContainer = document.querySelector(".grid");

// Crvena linija oko kontejnera!

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "6px solid red";
});

gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

// Funkcija da pronalazi nasumične boje!

const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

// Sad ne vatamo više kontejner neko pojedinačne ćelije u njemu!

const gridCells = document.querySelectorAll(".cell");

// Kad stanemo na neku malu kockicu da pocrvene njene ivice!

gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "2px solid red";
  });

  // A zatim da crveni okvir nestane, kad mi napustimo tu ćeliju - kockicu!

  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  // E sad, kad kliknemo da se kockica ispuni random bojom!
  // A kad ponovo kliknemo da se izgubi boja!

  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randColor()}`; //Konačno pozivamo funkciju rand
    }
  });
});

// Sad da probamo komandu sa tastature, i to dugme: "d" !

const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);
  if (event.code === "KeyD") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
      : (body.style.backgroundColor = "");
  }
});

//Pritiskom na dugme D, menja se pozadina iz bele u tamnu(crnu)!
