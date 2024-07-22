'use client'
import CarouselBanner from '../components/CarouselBanner/CarouselBanner';
import Menu from '../components/Menu';
import Card from '../components/Card';
import Taba from '@/components/Taba/Taba';
import SubMenu from '@/components/SubMenu/Index';
import Footer from '@/components/Footer';
import Slider from '@/components/Slider';
import styles from './pages.module.css';

export default function Home() {
  return (
    <>
      <SubMenu />
      <br />
      <div className={styles.container}>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      </div>

      <Card description={'aloha caption'} title={'title aqui'} />
    </>
  );
}