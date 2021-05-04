require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name repeat magic assume inflict kiwi army gesture'; 
let testAccounts = [
"0x98633b651e2ea98718130511f3658242724184664bfaadf5db50890cd893c189",
"0x8756a906ae64b0769c54fd250006f18fddca7639a59b848780542926d344dca3",
"0x4f666c0ed7fa8fc538d2cc546205c2835d0404c5c83e4a042c41202e13c4fcc8",
"0x193dff7ebd74312b3f32f6b72f603b6a6e2d8ada2b761ce62c6e65a90871db9f",
"0x5470ebcad8d2f9ce233522fd1bc753a2ded61a99c5ce356795af3b88ff07f220",
"0xdc55d5a58b3d4ebf264e3b922be5e0294f438f799e8cd8ad694c8a9758eadf7c",
"0x9978188b78f51901164751244ae14d42c96a497e4253e320569de70d8b2767a3",
"0x1f143f714820b705e2b0ceff56d8541717270efe3949152d971e1b17e6672f1e",
"0x017c1f1d47166ecb5a043047edfc8ed4fac8cf3e40fd3880a30d771fbf09c61f",
"0x2bfd09d6e5c92bccda7904123d0cab4f262872f8a9cb23164952f03dea62a222"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
