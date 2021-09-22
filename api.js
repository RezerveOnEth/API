const express = require('express')
const app = express()
const port = 8080
const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;
const webutils = require('web3-utils');
const ethereumjs_common = require ('ethereumjs-common').default;

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"DaiAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EmergencyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ReserveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dai","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daiBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"exchangeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"exchangeReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"floorPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flush","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]


let buff = 0;

app.get('/', (req, res) => {
  amount = getRZRVTokenSupply()
     yy = res   
     //res.send('' + amount)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

var yy;


async function getRZRVTokenSupply(){
	
	infura_url = 'https://mainnet.infura.io/v3/0644e94a01e34fc3928cb93bae997944'
        const web3 = new Web3(new Web3.providers.HttpProvider(infura_url));
        const contractAddress = '0x6b9b0e579fdc73fa92968f83e7e22eb2ab7c105a'
        const contract = new web3.eth.Contract(abi, contractAddress)
        supply = await contract.methods.currentSupply().call()

        
    	relay ( supply )
        

       
 
	return web3.eth_blockNumber;
	
}

async function relay ( balance ){
	console.log(balance + " ETH");
        json = '{"currentSupply":"' + balance + '"}'
        yy.send(json)
       
}

