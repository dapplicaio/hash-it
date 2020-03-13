// JavaScript source code
const Eos = require("eosjs");

EOS = Eos({
  keyProvider: "", // private key
  httpEndpoint: "http://jungle2.cryptolions.io:80",
  chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"
});

const CONTRACT_NAME = "[insert the contract name here]";

module.exports = {
  Eos: Eos,
  EOS: EOS,
  CONTRACT_NAME: CONTRACT_NAME
};
