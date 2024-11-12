const fs = require('fs');

const arquivoAntigo = 'novo.txt'; // Nome do arquivo antigo
const arquivoNovo = 'ArquivoNovoRenomeado.txt'; // Nome do arquivo renomeado

fs.rename(arquivoAntigo, arquivoNovo, err => {
  if (err) {
    console.error('Erro ao renomear o arquivo:', err);
  } else {
    console.log('Arquivo renomeado com sucesso!');
  }
});