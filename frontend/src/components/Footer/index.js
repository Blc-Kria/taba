import styles from "./Footer.module.css";
import Link from 'next/link';
import Image from "next/image";


function Footer() {
  return (
    <footer className={styles.rodape}>
      <img src="/images/block-logo.png" className="img-logo" alt='logo AluraFlix' width={100} height={150}></img>
      <p className={styles.textoFooter}>
        <Link href="/about">Sobre Nós</Link></p>
      <p className={styles.textoFooter}>
        <Link href="/projects">Doe</Link></p>
      <p className={styles.textoFooter}>
        <Link href="/register">Envie Projetos</Link></p>


    </footer>
  )


}

export default Footer;
