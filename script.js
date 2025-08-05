let h1 = document.querySelector("h1");
let div = document.querySelector(".box");
let btn = document.querySelector("button");

let teams = [{
    Tname: "CSK",
    Fname: "chennai super king",
    primary: "yellow",
    Secondary: "blue",
},
{
    Tname: "RCB",
    Fname: "Royal challengers Benguluru",
    primary: "red",
    Secondary: "black",
},
{
    Tname: "KKR",
    Fname: "Kolkata knight riders",
    primary: "purple",
    Secondary: "gold",
},
{
    Tname: "RR",
    Fname: "Rajasthan Royals",
    primary: "pink",
    Secondary: "blue",
},
{
    Tname: "MI",
    Fname: "Mumbai indians",
    primary: "blue",
    Secondary: "gold",
},
{
    Tname: "DC",
    Fname: "Delhi capitals",
    primary: "blue",
    Secondary: "red",
},
{
    Tname: "LSG",
    Fname: "Lucknow super giants",
    primary: "light blue",
    Secondary: "orange",
},
];
let colorBox;
let hColor;
btn.addEventListener("click", function () {
    colorBox = Math.floor(Math.random() * teams.length);
    h1.style.backgroundColor = teams[colorBox].Secondary;
    hColor = Math.floor(Math.random() * teams.length);
    h1.innerText = teams[hColor].Tname;
   h1.style.color = teams[hColor].primary;
   h1.style.fontSize ="200px";
  h1.style.fontFamily="Fantasy";
});