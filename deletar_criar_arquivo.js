const fs = require('fs');

const arquivo = 'ArquivoNovoRenomeado.txt';

fs.unlink(arquivo, err => {
  if (err) {
    console.error('Erro ao deletar o arquivo:', err);
  } else {
    console.log('Arquivo deletado com sucesso!');
  }

 
  const novoArquivo = 'novo_arquivo.txt';
  const conteudo = 'Este é o conteúdo do novo arquivo.';

  fs.writeFileSync(novoArquivo, conteudo, err => {
    if (err) {
      console.error('Erro ao criar o arquivo:', err);
    } else {
      console.log('Novo arquivo criado com sucesso!');
    }
  });
});