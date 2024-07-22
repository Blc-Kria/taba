import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from 'next/image';
import styles from './Slider.module.css';

const Slider = () => {
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <p className={styles.textTiny}>Projeto Social</p>
        <small className={styles.textDefault500}></small>
        <h4 className={styles.textLarge}>Nébula</h4>
      </CardHeader>
      <CardBody className={styles.cardBody}>
        <Image
          alt="Card background"
          className={styles.image}
          src="/images/nebula.jpg"
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}

export default Slider;
