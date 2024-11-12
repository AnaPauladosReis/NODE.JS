const fs = require('fs');

const arquivo = 'novo.txt';


const novoConteudo = 'Olá Node.JS! UNISENAI 2024';

try {
  fs.appendFileSync(arquivo, novoConteudo);
  console.log('Arquivo atualizado com sucesso!');
} catch (err) {
  console.error('Erro ao atualizar o arquivo:', err);
}