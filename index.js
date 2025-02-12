const readline = require('readline-sync');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function insira() {
    console.log("'Clique 'enter' para começar'");
    readline.question();
}

async function main() {
    console.clear();
    let textC = "'Clique 'enter' para começar'";
    let name, chap, alt;
    let res = false;

    console.log("+-----------------------------------------------------------------------------------------------+");
    console.log("|                                                                                               |");
    console.log("|  ,---.  ,-.,---. _______ ,---.    .---.       .--.       ,--,  .-. .-.  .--.  ,---.    .--.   |");
    console.log("|  | .-.\ |(|| .-'|__   __|| .-.\  / .-. )     / /\ \    .' .')  | | | | / /\ \ | .-.\  / /\ \  |");
    console.log("|  | |-' )(_)| `-.  )| |   | `-'/  | | |(_)   / /__\ \   |  |(_) | `-' |/ /__\ \| |-' )/ /__\ \ |");
    console.log("|  | |--' | || .-' (_) |   |   (   | | | |    |  __  |   \  \\    | .-. ||  __  || |--' |  __  | |");
    console.log("|  | |    | ||  `--. | |   | |\\ \\  \\ `-' /    | |  |)|    \\  `-. | | |)|| |  |)|| |    | |  |)| |");
    console.log("|  /(     `-'/( __.' `-'   |_| \\)\\) )---'     |_|  (_)     \\____\\/(  (_)|_|  (_)/(     |_|  (_) |");
    console.log("| (__)      (__)               (__)(_)                        (__)           (__)               |");
    console.log("|                                                                                               |");
    console.log("+-----------------------------------------------------------------------------------------------+");
    
    insira();
    process.stdout.write("Insira seu nome para começar sua aventura: ");
    name = readline.question();
    console.clear();

    await sleep(500);
    console.log(`'Era uma vez em um reino muito distante um jovem chamado ${name}'`);
    console.log("'Ele recebe uma mensagem de seu amigo Pietro que precisa de ajuda com sua chapa'");
    console.log("'Você amante do VisuAlg30 decide ajudar esse pobre coitado que você encarecidamente você chama de amigo'");
    insira();
    
    console.log("'Quando você chega a casa de Pietro, você o encontra totalmente desesperado'");
    await sleep(800);
    insira();
    
    console.clear();
    console.log("+---------------+");
    console.log("|       'chapa' |");
    console.log("|   scr     \\   |");
    console.log("|      \\   _____|");
    console.log("|\\o/  \\pi/ |   ||");
    console.log("|===============|");
    console.log("+---------------+");
    insira();
    
    console.log("++===Chapa=Do=Pietrin===++");
    console.log("||                )(    ||");
    console.log("||               (__)   ||");
    console.log("||   'sujeira'          ||");
    console.log("||                 \\|/  ||");
    console.log("||            )(   -o-  ||");
    console.log("||  )(       (__)  /|\\  ||");
    console.log("|| (__)                 ||");
    console.log("++======================++");
    
    while (!res) {
        console.log("A chapa está suja? s/n");
        chap = readline.question().toLowerCase();
        if (chap === "s") {
            res = true;
        } else {
            console.log("Você é burro");
        }
    }
    
    res = false;
    while (!res) {
        console.clear();
        console.log("O que devemos fazer?");
        console.log("(1) Mandar pietro acessar o site www.pietroamaral.netlify.app");
        console.log("(2) Limpar a chapa de Pietro");
        console.log("(3) Sair correndo sem camisa");
        alt = readline.question();
        
        switch(alt) {
            case '1':
                console.log("Boa ideia, mas não é isso que queremos.");
                break;
            case '2':
                res = true;
                break;
            case '3':
                await sleep(800);
                process.stdout.write("Não");
                await sleep(300);
                process.stdout.write(", apenas não");
                await sleep(300);
                console.log(".");
                break;
            default:
                console.log("resposta inválida");
        }
    }
    
    console.log("Ótima ideia");
    await sleep(500);
    for(let i = 0; i < 3; i++) {
        process.stdout.write("Limpa ");
        await sleep(300);
    }
    
    await sleep(300);
    console.log("\nNossa");
    await sleep(300);
    console.log(", essa chapa nunca esteve tão linda\n");
    
    console.log("++===Chapa=Do=Pietrin===++");
    console.log("||                      ||");
    console.log("||                      ||");
    console.log("||   'limpeza'          ||");
    console.log("||                      ||");
    console.log("||                      ||");
    console.log("||                      ||");
    console.log("||                      ||");
    console.log("++======================++");
}

main();