const weddingDate = new Date("August 5, 2026 10:00:00").getTime();

function updateCountdown(){

const now = new Date().getTime();

const distance = weddingDate - now;

if(distance <= 0){

document.getElementById("days").innerHTML="00";

document.getElementById("hours").innerHTML="00";

document.getElementById("minutes").innerHTML="00";

document.getElementById("seconds").innerHTML="00";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

//================ BACK TO TOP ================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        backToTop.style.display="block";

    }else{

        backToTop.style.display="none";

    }

});

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

const flowers = document.getElementById("flowers");

function createFlower(){

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(5+Math.random()*5)+"s";

    flower.style.fontSize=(18+Math.random()*18)+"px";

    flowers.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },10000);

}

setInterval(createFlower,500);