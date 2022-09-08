const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual a usa lingugem preferida?", (language) => {
    if(language === "Python") {
        console.log(`A minha liguagem preferida é: ${language} e é legal`)
    } else {
        console.log(`A minha liguagem preferida é: ${language} e é mais legal`)
    }
    readline.close()
})

