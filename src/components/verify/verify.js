import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer';
import './verify.css'
import myContract from "../../smartContract/Contract.json"

import { ethers } from 'ethers'

const Verify = () => {

	const contractAddress = '0x29176F29C0AdaaCED72225d34eD04bD3cD76660f';

	const [ConnButtonText, setConnButtonText] = useState("Connect");
	const [contract, setContract] = useState("");
	const [provider, setProvider] = useState("");
	const [signer, setSigner] = useState("");
	const [value,setvalue] = useState("none");

    const [myWallet, setMyWallet] = useState("");

	let nav = useNavigate()

	const [chases, setChases] = useState("")

	const handle = () => {
		localStorage.setItem("chases", chases);
		// nav('/payment');
	}

	const accountChangeHandler = (newAccount) => {
		setMyWallet(newAccount)
		updateEthers()
	}
	const metamask = async () => {
		if (window.ethereum) {
			window.ethereum.request({ method: 'eth_requestAccounts' })
				.then(result => {
					accountChangeHandler(result[0]);
					setConnButtonText('Connected');
				})

		} else {
			alert("Install Metamask");
		}
	}


	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum)
		setProvider(provider)

		let tempSigner = tempProvider.getSigner()
		setSigner(tempSigner)

		let tempContract = new ethers.Contract(contractAddress, myContract, tempSigner)
		setContract(tempContract)
	}

	useEffect(() => {
		if (!localStorage.getItem("authToken")) {
			nav('/login');
		}


	})
	
	const checkData = async (event) => {
		const amount = ethers.utils.parseEther('0.000000000001');
		event.preventDefault()
		console.log('hello')
		// contract.addData("kdj", chases)

		const tx = await contract.checkRecord({value: amount})
		const receipt = await tx.wait();
		if(chases != null)
		{
			if(receipt.status === 0){
				console.log(receipt.error)
			}
			else
			{
				const val = await contract.getRecord(chases)
				console.log(val)
				window.open(val,"_blank")
	
			}
		}
		else{
			alert("field is required")
		}
		
	}

	return (
		<>
			<div class="container">
				<div class="l-screen">
					<div class="overlay">
						<div class="overlay-panel overlay-right">
							<h1 class='r1'>Verify Auction Sheets!</h1>
							<p class='p1'>Steps to follow:-</p>
							<div class='list'>
								<li>Enter auction sheet number or the chasis number</li>
								<li>Click on verify</li>
								<li>Pay the required fees through one of the wallets mentioned</li>
								<li>Download the pdf of the authentic auction sheet to verify</li>
							</div>
							<button class="ghost" onClick={() => { nav('/welcome') }} id="signin" >Back To Home</button>
						</div>
					</div>
				</div>
				<div class="screen">
					<div class="screen__content">
						<form class="login">
							<div class="login__field">
								<i class="login__icon fas fa-user"></i>
								<input  required type="text" id="login" class="login__input" placeholder="Enter Chasis Number" onChange={(e) => setChases(e.target.value)} >
								</input>
							</div>

							<button type='button' class="button login__submit" id="chasis_submit" onClick={checkData} >
								<span class="button__text" >Submit</span>
								<i class="button__icon fas fa-chevron-right"></i>
							</button>{value}
							<button type='button' class="button login__submit" id="chases_submit" onClick={metamask} >
								<span class="button__text" >{ConnButtonText}</span>
								<i class="button__icon fas fa-chevron-right"></i>
							</button>

						</form>
					</div>
					<div class="screen__background">
						<span class="screen__background__shape screen__background__shape1"></span>
					</div>

				</div>


			</div>
			<Footer />

		</>
	)
}

export default Verify
// onClick={() => { nav('/payment') }}
// onClick={Store_Chasis_No}