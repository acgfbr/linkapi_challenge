const axios = require('axios')
const js2xmlparser = require('js2xmlparser')
const config = require('../../config')
let bling = module.exports = {}


bling.createOrder = async (value, lead_name) => {
   
    let pedido = {};
    pedido.nat_operacao = 'Venda de mercadorias';
    
    let cliente = {};
    cliente.nome = lead_name;
    
    let itens = [];
    let item = {};
    
    item.codigo = 'LEAD';
    item.descricao = 'Negocio ganho atraves do pipedrive';
    item.un = 'un';
    item.qtde = '1';
    item.vlr_unit = value;
    
    itens.push({item: item});
    
    pedido.cliente = cliente;
    pedido.itens = itens;

    let xml = js2xmlparser.parse('pedido', pedido,{declaration: {encoding: 'UTF-8'}});
    const response = await axios.post(`https://bling.com.br/Api/v2/pedido/json?apikey=${config.bling.API_KEY}&xml=${xml}`);
    return response;
}


