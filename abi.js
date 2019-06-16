const   contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "paramPauta",
				"type": "string"
			},
			{
				"name": "paramDecisao",
				"type": "string"
			},
			{
				"name": "paramData",
				"type": "string"
			}
		],
		"name": "ArquivarAta",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "book1",
		"outputs": [
			{
				"name": "pauta",
				"type": "string"
			},
			{
				"name": "decisao",
				"type": "string"
			},
			{
				"name": "data",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"name": "book2",
		"outputs": [
			{
				"name": "pauta",
				"type": "string"
			},
			{
				"name": "decisao",
				"type": "string"
			},
			{
				"name": "data",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "numeroAta",
				"type": "uint256"
			}
		],
		"name": "ConsultaDeliberacoesConselho",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "numeroAta",
				"type": "uint256"
			}
		],
		"name": "ConsultarData",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "numeroAta",
				"type": "uint256"
			}
		],
		"name": "ConsultarPauta",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
    
    if (network === "4") {
        contractAddress = "0x3c0015480d2e8134452312f96d14a3114fd8bd76"; 
    
    } else {
    contractAddress = "0x3c0015480d2e8134452312f96d14a3114fd8bd76"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
