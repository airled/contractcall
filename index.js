const { ethers } = require("ethers");

const rpcUrl = ''
const contractAddress = ''
const abi = []
const privateKey = ''

async function main() {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const signer = new ethers.Wallet(privateKey, provider)
  const contract = new ethers.Contract(contractAddress, abi, signer);
  // contract.name().then(console.log)
}

main();
