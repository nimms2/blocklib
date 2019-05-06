const ethers = require('ethers');
const util = require('../util/util');

const Ethers = (function () {

    function Ethers(connection) {
        let network = connection.network;

        let privateKey = connection.privateKey;
        this.provider = ethers.getDefaultProvider(network);
        if (privateKey !== '' && (privateKey !== '' || privateKey !== undefined) && privateKey !== undefined) {
            this.wallet = new ethers.Wallet(privateKey, this.provider);
        }
    }

    //TODO mybe with other then privatekey?
    Ethers.prototype.getWallet = function (privKey) {
        this.wallet = new ethers.Wallet(privKey, this.provider);
        return this.wallet;
    };

    Ethers.prototype.generateWallet = function () {
        let randomWallet = ethers.Wallet.createRandom();
        let wallet = new ethers.Wallet(randomWallet.privateKey, this.provider);
        console.log("Save following data:");
        console.log(wallet);
        return wallet;
    };


    Ethers.prototype.getKeccak256 = function (data) {
        if (data === '0x' || data === '') {
            return data;
        } else if (util.isValidKeccak256Hash(data)) {
            return data;
        } else {
            return util.keccak256(ethers.utils.toUtf8Bytes(data));
        }
    };

    Ethers.prototype.getBalance = function () {
        let ether;
        let balancePromise = this.wallet.getBalance('latest');
        balancePromise.then((balance) => {
            let wei = ethers.utils.bigNumberify(balance)
            ether = ethers.utils.formatEther(balance);
            console.log(ether);
            return ether;
        });

    };

    Ethers.prototype.calcNeededGasLimit = function (hashedData) {
        return 21000 + 68 * Buffer.byteLength(hashedData)
    };

    Ethers.prototype.gasPrice = function () {
        this.provider.getGasPrice().then((gasPrice) => {
            let gasPriceString = gasPrice.toString();
            return gasPriceString;
        });
    };

    // Ethers.prototype.sendTransaction = function (toAddress, data, amount) {
    //     let hashedData = this.getKeccak256(data);
    //     let calcGasLimit = this.calcNeededGasLimit(hashedData);
    //     let gasPric = this.gasPrice();
    //     let transaction = {
    //         to: toAddress,
    //         value: ethers.utils.parseEther(amount.toString()),
    //         data: hashedData,
    //         gasLimit: calcGasLimit,
    //         gasPrice: gasPric,
    //         nonce: this.wallet.getTransactionCount("latest"),
    //         chainId: this.provider.network.chainId
    //     };
    //     //sign transaction
    //     let signPromise = this.wallet.sign(transaction);
    //     //send transaction
    //     signPromise.then((signedTransaction) => {
    //         this.provider.sendTransaction(signedTransaction).then((tx) => {
    //             return tx.hash;
    //         });
    //     });
    // };


    Ethers.prototype.sendTransaction = function (txData) {
        let hashedData = this.getKeccak256(txData.data);
        let calcGasLimit = this.calcNeededGasLimit(hashedData);
        let gasPric = this.gasPrice();
        let transaction = {
            to: txData.toAddress,
            value: ethers.utils.parseEther(txData.amount.toString()),
            data: hashedData,
            gasLimit: calcGasLimit,
            gasPrice: gasPric,
            nonce: this.wallet.getTransactionCount("latest"),
            chainId: this.provider.network.chainId
        };
        //sign transaction
        let signPromise = this.wallet.sign(transaction);
        //send transaction
        signPromise.then((signedTransaction) => {
            this.wallet.provider.sendTransaction(signedTransaction).then((tx) => {
                console.log(tx);
            });
        });
    };

    return Ethers;
})();

module.exports = Ethers;