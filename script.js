/* ==================================
   FRIENDSHIP DAY 2026
   SCRIPT.JS
================================== */

let currentScreen = 1;

/* Next Screen */

function nextScreen(number){

document
.getElementById("screen"+currentScreen)
.classList.remove("active");

document
.getElementById("screen"+number)
.classList.add("active");

currentScreen = number;

window.scrollTo(0,0);

}

/* ============================== */
/* Floating Hearts */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["💙","🤍","✨","⭐"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(4+Math.random()*4)+"s";

heart.style.fontSize=
(18+Math.random()*18)+"px";

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);

/* ============================== */
/* Gift Animation */

function openGift(){

const gift=document.getElementById("gift");

gift.style.transform="scale(1.2) rotate(10deg)";

gift.style.opacity=".2";

setTimeout(()=>{

gift.style.display="none";

document
.getElementById("giftMessage")
.style.display="block";

confetti({

particleCount:180,

spread:100,

origin:{y:.6}

});

},500);

}

/* ============================== */
/* Final Button */

function hug(){

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

document
.getElementById("endMessage")
.style.display="block";

let total=0;

const balloons=setInterval(()=>{

confetti({

particleCount:8,

angle:60,

spread:40,

origin:{x:0}

});

confetti({

particleCount:8,

angle:120,

spread:40,

origin:{x:1}

});

total++;

if(total>18){

clearInterval(balloons);

}

},250);

}

/* ============================== */
/* Smooth Loading */

window.onload=()=>{

document
.getElementById("screen1")
.classList.add("active");

};

/* Disable Right Click (Optional) */

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});
