let boxes = document.querySelector(".container").children;
let btn = document.getElementById("btn");
let arr = Array.from(boxes);

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * (255 - 0));
  let val2 = Math.ceil(0 + Math.random() * (255 - 0));
  let val3 = Math.ceil(0 + Math.random() * (255 - 0));
     return `rgb(${val1}, ${val2}, ${val3})`;
}

btn.addEventListener("click", () => {
  arr.forEach((e) => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
  });
});

// Formula Explanation.
// a, b (b - a);
// a + r (b - a);
// 0 + Math.random() * (255 - 0);
// Math.ceil(0 + Math.random() * 255)