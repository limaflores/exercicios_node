const chalk  = require("chalk")

const nota = 5

// console.log(chalk.green.bold('Parabens!'))
if(nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovado!'))
} else {
    console.log(chalk.bgRed.bold('Você precisa fazer a prova de recuperação!'))
}

