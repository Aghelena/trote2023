function trocaSwitch() {
    const html = document.documentElement
  
    html.classList.toggle("light")
  }

  function totalPoints(){
    let kits = Number(document.getElementById("kits").value)
    let kit = Number(document.getElementById("kit").value)
    let supplement = Number(document.getElementById("suplemento").value)
    let rice = Number(document.getElementById("arroz").value)
    let rice2 = Number(document.getElementById("arroz2").value)
    let beans = Number(document.getElementById("feijao").value)
    let beans2 = Number(document.getElementById("feijao2").value)
    let pasta = Number(document.getElementById("macarrao").value)
    let oil = Number(document.getElementById("oleo").value)
    let blood = Number(document.getElementById("sangue").value)
    let total = (50*kits) + (25*kit) + (10*suplemento) + (1*arroz) + (5*arroz2) + (1*feijao) + (2*feijao2) + (1/2*macarrao) + (1*oleo) + (15*sangue)
        if (kits >=  80){
            points = 5000
        }
        else if ((kits < 80) && (kits >= 64)){
            points = 4000
        }
        else if ((kits < 64) && (kits >= 40)){
            points = 2500
        }
        else if ((kits < 40) && (kits >= 16)){
            points = 1000
        }
        else if ((kits < 16) && (kits >= 0)){
            points = 0
        }
        else {
            points = -1 // indica que a qtde de kits é negativa
        }
        // mostra resultado ao usuário
        if (points == -1){
            Number(document.getElementById("points").innerHTML) = "Impossível calcular"
        }
    
        else {
            Number(document.getElementById("points").innerHTML) = "A pontuação da equipe é "
        }

        alert("A pontuação de sua equipe atualmente é: " + total)
    }