'use client'
import styles from './pages.module.css';
import { CardDefault } from '@/components/CardDefault';
import SubMenu from '@/components/SubMenu/Index';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <SubMenu />
      <div className={styles.container}>
        <CardDefault />
      </div>
      <Footer />
    </>
  );
}
