import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import HomeHeader from '@/components/headers/homeHeader';
import { FirstSection } from '@/components/home/firstSection';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HomeHeader />
      <nav className={styles.nav}>
        <div>Keleleo</div>
      </nav>
      <div className={styles.container}>
        <main>
          <section>
            <FirstSection />
          </section>
        </main>
      </div>
      <div className={styles.info}>
        <a target="_blank" href="https://github.com/keleleo" >
          my
          Keleleo 
          <Image alt="github icon" width={32} height={32} src="/images/github.svg" />
        </a>
        ⚠️ This page is just a test.
      </div>
    </>
  );
}
