let div = document.querySelector("#div");
let btdiv = document.querySelector("#buton");

btdiv.addEventListener("click", function (event) {
    div.style.backgroundColor = "green";
});

let kuroro = document.querySelector("img[alt='3 personnes']");

kuroro.addEventListener("click", function (event) {
    if (this.style.width == "") {
        this.style.height = "269px";
        this.style.width = "480px";
    } else {
        let h, w;
        h = this.style.height;
        w = this.style.width;
        h = Number(h.replace("px", ""));
        w = Number(w.replace("px", ""));
        h += 20;
        w += 20;

        this.style.width = w + "px";
        this.style.height = `${h}px`;
    }
});

let input = document.querySelector("#input");
let bgColor = document.querySelector("body");
 
input.addEventListener("input", function(event){
    bgColor.style.backgroundColor = input.value;
    console.log(input.value);
});

let noir = document.querySelector("#noir");
noir.addEventListener("click", function(event){
    noir.style.width = "200px"; 
    noir.style.height = "200px";
});

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");

console.log(document.images);