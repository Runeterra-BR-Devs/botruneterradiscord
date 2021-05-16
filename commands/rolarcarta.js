const axios = require('axios');

module.exports = async (message, args) => {

    const response = await axios.get('http://botruneterra.com.br:1337/random');

    const card = response.data;

    message.channel.send(card.assets[0].gameAbsolutePath);
}