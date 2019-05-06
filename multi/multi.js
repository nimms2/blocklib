const multichainnode = require("multinodejs");

const Multinode = (function () {
    function Multinode(connection) {
        this.multichain = multichainnode(connection);
    }

    Multinode.prototype.getInfo = function () {
        this.multichain.getInfo().then(info => {
            console.log(info);
            return info;
        })
    };

    Multinode.prototype.getAddresses = function () {
        this.multichain.getAddresses().then(info => {
            console.log(info);
            return info;
        })
    };


    Multinode.prototype.listPermissions = function () {
        this.multichain.listPermissions().then(info => {
            console.log(info);
            return info;
        })
    };

    Multinode.prototype.issueToAddress = function (address, asset, qty, units) {
        this.multichain.issue({
            address: address,
            asset: asset,
            qty: qty,
            units: units,
        }, (err, res) => {
            console.log(res)
        })
    };

    Multinode.prototype.sendTransaction = function (toAddress, asset, qty) {
        this.multichain.sendAsset({
            address: toAddress,
            asset: asset,
            qty: qty
        }, (err, tx) => {
            return tx;
        })
    };

    Multinode.prototype.getTotalBalances = function () {
        this.multichain.getTotalBalances().then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.listAssests = function () {
        this.multichain.listAssets().then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.listWalletTransactions = function () {
        this.multichain.listWalletTransactions().then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.getWalletTransaction = function (txid) {
        this.multichain.getWalletTransaction({txid: txid}).then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.listAddressesTransactions = function (address) {
        this.multichain.listAddressTransactions({address: address}).then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.getNewAddress = function () {
        this.multichain.getNewAddress().then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.getBalanceOfAddress = function (address) {
        this.multichain.getAddressBalances({
            address: address,
            minconf: 0
        }).then(res => {
            console.log(res);
            return res;
        });
    };

    Multinode.prototype.getAllAddresses = function () {
        this.multichain.getAddresses().then(res => {
            console.log(res);
            return res;
        });
    };

    return Multinode;

})();

module.exports = Multinode;

