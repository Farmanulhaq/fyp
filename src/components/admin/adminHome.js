import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'
import './adminHome.css'
import Web3 from "web3"
import myContract from "../../smartContract/Contract.json"

import { ethers } from 'ethers'
import { getContractAddress } from 'ethers/lib/utils'

const AdminHome = () => {

    const contractAddress = '0x29176F29C0AdaaCED72225d34eD04bD3cD76660f';
    let nav = useNavigate();

    const [chases, setchases] = useState("");
    const [ipfs, setIpfs] = useState("");

    const [ConnButtonText, setConnButtonText] = useState("Connect");

    const [ErrorMessage, setErrorMessage] = useState("");
    const [defaultAccount, setdefaultAccount] = useState("");


    const [provider, setProvider] = useState("");
    const [signer, setSigner] = useState("");
    const [contract, setContract] = useState("");

    const [myWallet, setMyWallet] = useState("");
    const [myBalance, setMyBalance] = useState("");
    const [myWeb3, setMyWeb]= useState([]);


    // ----------------------------------------------------------------------------------------
    const accountChangeHandler = (newAccount) => {
        setMyWallet(newAccount)
        updateEthers()
    }
    const metamask = async () => {
        if (window.ethereum) {
            window.ethereum.request({method : 'eth_requestAccounts'})
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
    // ------------------------------------------------------------------------------------------------------------

    const storeData = async (event) => {
        event.preventDefault()
        console.log(ipfs , chases)
        contract.addData(ipfs, chases)
        // const val = await contract.getRecord(chases)
        // console.log(val)
    }
    


    // ---------------------------------------------------------------------------------------------------------------

    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            nav('/login');
        }
    })

    return (
        <>
            <div class="container">
                <div class="l-screen">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h1 class='r1'>Vehicify Admin Home</h1>


                        </div>
                    </div>
                </div>
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" id="setChases" class="login__input" placeholder="Enter chases Number" onChange={(e) => setchases(e.target.value)} required >
                                </input>
                                <input type="text" id="setIpfs" class="login__input" placeholder="Enter IPFS Hash" onChange={(e) => setIpfs(e.target.value)} required >
                                </input>
                            </div>

                            <button type='button' onClick={storeData} class="button login__submit" id="chases_submit" >
                                <span class="button__text" >Submit</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </button>

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

export default AdminHome
// onClick={() => { nav('/payment') }}
// onClick={Store_chases_No}