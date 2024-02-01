//Define o nome, número de vitórias e número de derrotas do jogador//
rankingLevel("Pato Donald", 120, 12)

// Define o ranking do jogador//
function rankingLevel(name, wins, losses) {

    let numberOfMatches = wins + losses

    let level = wins - losses

    if(level <= 10){
        ranking = "Ferro"
    }

    else if(level >= 11 && level <= 20){
        ranking = "Bronze"
    }

    else if(level >= 21 && level <= 40){
        ranking = "Prata"
    }

    else if(level >= 41 && level <= 70){
        ranking = "Ouro"
    }

    else if(level >= 71 && level <= 80){
        ranking = "Platina"
    }

    else if(level >= 81 && level <= 90){
        ranking = "Diamante"
    }

    else if(level >= 91 && level <= 100){
        ranking = "Lendário"
    }

    else{
        ranking = "Imortal"
        
    }

// Saída 
    console.log(`O jogador ${name}, possui ${wins} vitórias em ${numberOfMatches} partidas e está no nível ${ranking}`)
}
