const axios = require('axios');

module.exports = async (message, args) => {
    const cardName = args.join(' ');

    const response = await axios.get('http://botruneterra.com.br:1337/cards/' + encodeURI(cardName));

    const card = response.data;

    message.channel.send(card.assets[0].gameAbsolutePath);
}