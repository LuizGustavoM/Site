const { text } = require("stream/consumers");

// timeline em gsap
let tl = gsap.timeline();

// Efeito do menu hamburguer
function effectMenu(){
    const hamburguer = document.querySelector("#hamburguer");
    const linha1 = document.querySelector(".linha1");
    const linha2 = document.querySelector(".linha2");
    const linha3 = document.querySelector(".linha3");
    const menuLateral = document.querySelector("#menuLateral");
    const aside = document.querySelector("#asideRedes");

    if (getComputedStyle(linha2).display === "none"){

        //efeito no hamburguer
        linha1.style.transform = "rotate(0deg)"
        linha1.style.top = "0px"

        linha2.style.display = "inline"

        linha3.style.transform = "rotate(0deg)"
        linha3.style.bottom = "0px"

        hamburguer.style.position = "relative"
        hamburguer.style.right = "0rem"

        // efeito do menu lateral
        menuLateral.style.display = "none"

        aside.style.display = "inline"

        gsap.to("#menuBar", {
            x:238
        })

    } else{

        //efeito no hamburguer
        linha1.style.transform = "rotate(44deg)"
        linha1.style.top = "12px"

        linha2.style.display = "none"

        linha3.style.transform = "rotate(-45deg)"
        linha3.style.bottom = "9px"

        hamburguer.style.position = "fixed"
        hamburguer.style.right = "0rem"

        // efeito do menu lateral
        menuLateral.style.display = "inline"

        aside.style.display = "none"

        gsap.to("#menuBar", {
            x:-240,
            duration:1
        })
    }
};

// link para sites externos
function github(){
    window.open("https://www.github.com/LuizGustavoM");
}

function linkedin(){
    window.open("https://www.linkedin.com/in/luiz-gustavo-mesquita-2075aa2a5");
}

function dev(){
    window.open("https://dev.to/luiz_gustavo0101");
}

function freepik(){
    window.open("http://www.freepik.com")
}

//efeitos
function acao1(){
    gsap.to(".textButton", {
        x:400,
    });
}