"use client";

import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import ethers, { BrowserProvider, Contract, parseEther, Wallet, formatEther } from 'ethers';
import { getMetaMaskProvider, getBalance, transfer } from '../../common/MetaMaskService';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './CarouselBanner.module.css';
import contractData from '../../app/resources/DonationContract.json';

const CarouselBanner = () => {
  const [message, setMessage] = useState("");
  const [donationValue, setDonationValue] = useState(0.00);

  const PROJECT_WALLET = "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2"; // endereço da carteira que recebe a doação, pode ser trocado por um select que vai pegar os endereços do banco e exibir uma lista de endereços para o usuário que vai doar poder escolher para quem doará
  const PLATFORM_WALLET = "0x0b82B600b20868093420BB7623e2D35Fb67D9844";
  useEffect(() => {
    getPlatformBalance();
  }, []);

  async function donate() {
    setMessage("Enviando transação...");

    console.log("Donation Value: ", donationValue)
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new Contract(
        contractData.address,
        contractData.abi,
        signer
      );

      //Executar a transação de doação.
      const tx = await contract.donate(
        PROJECT_WALLET, // pra quem vai a doação
        false, // se é social ou não
        {
          value: parseEther(donationValue.toString()), // usar o estado donationValue
          gasLimit: 3000000
        }
      );

      setMessage("Transação enviada, aguardando confirmação...");
      await tx.wait();
      setMessage("Doação concluída com sucesso!");
      setDonationValue(0.00)

      console.log(tx);
    } catch (error) {
      console.error("Falha ao fazer a doação:", error);
      setMessage("Erro na doação, verifique o console.");
    }
  }

  const getPlatformBalance = async () => {
    const provider = new BrowserProvider(window.ethereum);
    let balance = (await getBalance(PLATFORM_WALLET)).toString();
    balance = formatEther(balance);
    balance = parseFloat(balance).toFixed(2);
    setPlatformBalance(balance);
  }

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      interval={5000}
      showArrows={false}
      className={styles.carousel}
    >
      <div className={styles.slide}>
        <img src="/images/nebula.jpg" alt="Slide 1" className={styles.image} />
        <div className={styles.textContainer}>
          <h2>Nébula</h2>
          <p>Preparamos jovens de alto potencial em comunidades de baixa renda para uma carreira em tecnologia.</p>
          <p>Quantidade a ser doada (XRP) </p>
          <input
            className={styles.input}
            type='number'
            step={0.10}
            value={donationValue}
            onChange={(evt) => {
              (evt.target.value);
              setDonationValue(parseFloat(evt.target.value));
            }}
          />
          <button className={styles.btn} onClick={donate}>Confirma</button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselBanner;