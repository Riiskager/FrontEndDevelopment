//document.body.innerHTML += "Hello JavaScript!";
//alert("Hello Dat.js");
console.log("hello dat.js")



function sayHello(){
    document.querySelector("h3").textContent = "Hej " + document.querySelector("input").value;
}

document.querySelector("button").addEventListener("click", sayHello)