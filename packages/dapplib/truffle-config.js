require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food plastic riot pizza protect hotel light army gift'; 
let testAccounts = [
"0x780c32374e9656921f3403eb816b5f19f22e198df2f87275f29ce55f43787e2c",
"0x6c7aa57912dc88c82a131680a6910473b55e586676a8528443a79c8e6fb289af",
"0x45ba14d1da8e9b0fb4c5259b19e2b362e37e72c774a7810d6232c913c2e94393",
"0x6d7953e9c9f03d070d3896aa4850ef33a99a12817c9934b0501e3b10211e9e9e",
"0xd9a04660a98b8c8dd95409afb1d9f123c6648e5ab3a6a52c33cce7ab7c4d785b",
"0x48c1d29618b1c583117b96ca40e040361748203a1c0f2fab0049041b275c07bc",
"0xdc7eaaf50066644fdcd471e9eee9c2b87b3ab645e161a060c3d4b6f7733867e9",
"0xd359aabd43629012c7636a1180969acbe8aca842e21254db35f85b91db7d9015",
"0x0118b7ec0493c8d27fbd49af28f0bfa371b4860700fbf67e3b933b160de92d73",
"0x5ea36ea594c22b3c79ce0b4547b834cf4e91dbcb2245af3289f41dc1b87cacb3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


