let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    // alert("clicked")
    document.querySelector(".sukriti").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("main3").style.display = "none";
    document.querySelector(".nav").style.display = "none"

    document.getElementById("main1").style.display = "block";
    document.querySelector(".box").style.display = "none";

});

let D = document.getElementById("D");
D.addEventListener("click", function(){
    // alert("clicked")
    document.querySelector(".sukriti").style.display = "none";
    document.getElementById("main3").style.display = "none";
    document.querySelector(".nav").style.display = "none"


    document.getElementById("main1").style.display = "block";

    document.getElementById("main2").style.display = "block";
    document.querySelector(".box").style.display = "block";

})

let F = document.getElementById("F");
F.addEventListener("click", function(){
    // alert("clicked")
    document.querySelector(".sukriti").style.display = "none";
    document.querySelector(".nav").style.display = "none";

    document.getElementById("main1").style.display = "block";
    document.getElementById("main2").style.display = "block";

    document.getElementById("main3").style.display = "block";
    document.querySelector(".box").style.display = "block";

})

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("mnl")) { 
            let allButtons = document.querySelectorAll(".mnl");
            allButtons.forEach(btn => btn.style.border = "none"); 

            event.target.style.border = "3px dashed darkred"; 
        }
    });
});
