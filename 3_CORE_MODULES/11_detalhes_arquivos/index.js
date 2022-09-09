const fs = require('fs')

const arquivoAntigo = 'arquivo.txt'
const arquivoNovo = 'novo.txt'


fs.rename( arquivoAntigo, arquivoNovo, function (err) {

    if (err) {
        console.log(err)
        return
    }

    console.log(`Arquivo ${arquivoAntigo} foi renomeado para ${arquivoNovo}!`)    
})

