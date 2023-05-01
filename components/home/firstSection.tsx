import Image from 'next/image';
import styles from './firstSection.module.css';

export function FirstSection() {
  return (
    <div className={styles.presentation}>
      <div className={styles.container}>
        <div className={styles.principal}>
          <div className={styles.text}>
            <p>
              Hi, my name is{' '}
              <span className={styles.nameHighlight}>keleleo.</span>
            </p>
            <p>
              I&apos;m a{' '}
              <span className={styles.fullStackHighlight}>full-stack</span>{' '}
              programmer.
            </p>
          </div>
          <div className={styles.subText}>
            I program because it&apos;s my passion and constant source of
            enjoyment. I love challenges and solving complex problems through
            software development.
          </div>
        </div>
        <div className={styles.ilustration}>
          <Image
            width={700}
            height={700}
            src="./images/illustration-1.svg"
            alt="ilustration"
          />
        </div>
      </div>
    </div>
  );
}
