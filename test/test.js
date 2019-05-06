//modul
const blocklib = require('../app');

const privkey = '759e812226889822d3d712047091d718e3e8d2bf2f767de54ec02b40164d0ddd';
const privateKey = new Buffer.from(privkey, 'hex');
//ethereum
const connectionEth = {
    network: 'ropsten',
    privateKey: '759e812226889822d3d712047091d718e3e8d2bf2f767de54ec02b40164d0ddd'
}

const ethereum = new blocklib.create('ethereum', connectionEth);

const transaction = {
    toAddress: '0x20E69884ce9Cd6D90f1bed01C6D59FB555d37F78',
    data: 'Test',
    amount: 0.001
}
ethereum.sendTransaction(transaction)

//ethereum.sendTransaction("0x20E69884ce9Cd6D90f1bed01C6D59FB555d37F78", "haalo", 0.002);

//multichain
const connectionMulti = {
    port: 2222,
    host: '10.192.1.71',
    user: "test",
    password: "test"
};
let fromAddress = '1BfHM1JQQeppSxNqxnevRX4VgQRYJcuTmHfzGu';
let toAddress = '1M9C1r9YVAhFcLVMvk26zuT4Yy5chUV7Psv1Go';

const multichain = new blocklib.create('multichain',connectionMulti);
//multichain.getInfo();
//multichain.listPermissions();
//multichain.getBalanceOfAddress(fromAddress);
//multichain.getAllAddresses()
//multichain.sendTransaction(toAddress,'asset1',10)
//multichain.getTotalBalances()
//multichain.listWalletTransactions()