import styles from "./AboutUs.module.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <><section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.titulo}>Sobre Nós</p>
        <p className={styles.texto}>
          Somos uma Plataforma de Crowdfunding baseada em Blockchain, onde
          transparência, segurança e <strong>Impacto Social</strong> se
          encontram para transformar como financiamos projetos. Somos uma equipe
          apaixonada por inovação e comprometida em criar um ambiente confiável
          e eficiente para conectar investidores a{" "}
          <strong>Projetos Sociais</strong> e <strong>Startups.</strong>
        </p>
      </div>
      <div className={styles.colaboradores}>
        <div className={styles.colaborador}>
          <Image
            alt="Ester S. Miranda"
            className={styles.image}
            src="/images/ester.jpg"
            width={146}
            height={146} />
          <p className={styles.nome}>
            Ester Miranda
            <a
              href="https://www.linkedin.com/in/ester-miranda-454ab41b1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </p>
          <p className={styles.bio}>Dev Front-End.</p>
        </div>
        <div className={styles.colaborador}>
          <Image
            alt="Evandro Ladislau"
            className={styles.image}
            src="/images/evandro.jpg"
            width={146}
            height={146} />
          <p className={styles.nome}>
            Evandro Ladislau
            <a
              href="https://www.linkedin.com/in/evandro-ladislau/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </p>
          <p className={styles.bio}>Dev Full Stack</p>
        </div>
        <div className={styles.colaborador}>
          <Image
            alt="Guilherme Santos"
            className={styles.image}
            src="/images/guilherme.jpg"
            width={146}
            height={146} />
          <p className={styles.nome}>
            Guilherme Santos
            <a
              href="https://www.linkedin.com/in/guilherme-santos-denvjr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </p>
          <p className={styles.bio}>Dev Back End</p>
        </div>
        <div className={styles.colaborador}>
          <Image
            alt="Nilo Jr"
            className={styles.image}
            src="/images/nilo.jpg"
            width={146}
            height={146} />
          <p className={styles.nome}>
            Nilo Jr.
            <a
              href="https://www.linkedin.com/in/eunilo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </p>
          <p className={styles.bio}>Project Manager</p>
        </div>
        <div className={styles.colaborador}>
          <Image
            alt="Raphael Cordeiro"
            className={styles.image}
            src="/images/raphael.jpg"
            width={146}
            height={146} />
          <p className={styles.nome}>
            Raphael Cordeiro
            <a
              href="https://www.linkedin.com/in/raph2ll/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </p>
          <p className={styles.bio}>Tech Lead</p>
        </div>
      </div>
    </section><Footer /></>
  );
};

export default AboutUs;
