let larguraTela = window.innerWidth;

// timeline em gsap
const tl = gsap.timeline();

// Efeito do menu hamburguer
function effectMenu(){
    const hamburguer = document.querySelector("#hamburguer");
    const linha1 = document.querySelector(".linha1");
    const linha2 = document.querySelector(".linha2");
    const linha3 = document.querySelector(".linha3");
    const menuLateral = document.querySelector("#menuLateral");

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
        

        gsap.to("#menuBar", {
            x:238
        })

        gsap.to("#contatos_menuLateral", {
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
        menuLateral.style.display = "flex"

        gsap.to("#menuBar", {
            x:-240,
            duration:.5
        })

        gsap.to("#contatos_menuLateral", {
            x:-240,
            duration:.5
        })
    }
};