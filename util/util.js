const Ethers = require('ethers');

module.exports = {

    keccak256 : function(data) {
        let hashedData = Ethers.utils.keccak256(data);
        return hashedData;
    },

    sha256 : function (data) {
      let hashedData = Ethers.utils.sha256(data);
      return hashedData;
    },

    isValidKeccak256Hash : function (hash) {
        if (Ethers.utils.isHexString(hash)) {
            if (Ethers.utils.hexDataLength(hash) === 32) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
};

