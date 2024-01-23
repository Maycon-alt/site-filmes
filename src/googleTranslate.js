// googleTranslate.js
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({
  projectId: 'seu-id-do-projeto',
  keyFilename: 'caminho/para/sua/chave-de-api.json',
});

export const traduzirTexto = async (texto, idiomaDestino) => {
  try {
    const [traducao] = await translate.translate(texto, idiomaDestino);
    return traducao;
  } catch (error) {
    console.error('Erro na tradução:', error);
    return texto; // Retorna o texto original em caso de erro
  }
};
