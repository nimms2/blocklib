const EthersLib = require('./ethers/ethers');
const MultinodeLib = require('./multi/multi');

module.exports = {
    create: function (type,conn) {
        if (type.toLowerCase() === 'ethereum') {
            return new EthersLib(conn);
        } else if (type.toLowerCase() === 'multichain') {
            return new MultinodeLib(conn);
        } else {
            new Error('Blockchain not supported!');
        }
    }
};


