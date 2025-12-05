"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  const toggleContacts = () => {
    setIsContactsOpen(!isContactsOpen);
  };

  const closeContacts = () => {
    setIsContactsOpen(false);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerBackground}>
          {/* Логотип слева сверху */}
          <a href="/" className={styles.logoLink} aria-label="На главную">
            <div className={styles.logo}>
              <Image
                src="/img/logo.svg"
                alt="Логотип «Лучик»"
                width={260}
                height={80}
                priority
              />
            </div>
          </a>

          {/* Навигация и кнопка «Контакты» */}
          <nav className={styles.navbarRow} aria-label="Основная навигация">
            <div className={styles.navLinks}>
              <a href="#about" className={styles.navTextLink}>
                О нас
              </a>
              <a href="#directions" className={styles.navTextLink}>
                Направления
              </a>
              <a href="#schedule" className={styles.navTextLink}>
                Расписание
              </a>
              <a href="#subscriptions" className={styles.navTextLink}>
                Абонементы
              </a>
              <button 
                onClick={toggleContacts}
                className={styles.navTextLink}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Контакты
              </button>
            </div>

            <div className={styles.navbarRight}>
              <div className={styles.socials}>
                <Image
                  src="/img/socials.svg"
                  alt="Социальные сети"
                  width={96}
                  height={24}
                  className={styles.socialsImage}
                />
                <div className={styles.socialsLinks}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialIconLink}
                    aria-label="Мы в Instagram"
                  />
                  <a
                    href="https://vk.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialIconLink}
                    aria-label="Мы во ВКонтакте"
                  />
                  <a
                    href="https://ok.ru"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialIconLink}
                    aria-label="Мы в Одноклассниках"
                  />
                </div>
              </div>
            </div>
          </nav>

          {/* Большие тучи по низу шапки */}
          <div className={styles.clouds}>
            <Image
              src="/img/clouds.svg"
              alt="Тучи"
              width={1480}
              height={338}
              className={styles.cloudsImage}
              priority
            />
          </div>

          {/* Маленькое облако под логотипом */}
          <div className={styles.cloudOne}>
            <Image
              src="/img/cloud-1.svg"
              alt="Облако"
              width={174}
              height={138}
              priority
            />
          </div>

          {/* Пчела слева внизу */}
          <div className={styles.bee}>
            <Image
              src="/img/bee.svg"
              alt="Пчела"
              width={88}
              height={92}
              priority
            />
          </div>

          {/* Облако 2 справа внизу */}
          <div className={styles.cloudTwo}>
            <Image
              src="/img/cloud-2.svg"
              alt="Облако"
              width={200}
              height={120}
              priority
            />
          </div>

          <div className={styles.sunContainer}>
            <Image 
              src="/img/sun.svg" 
              alt="sun" 
              width={100} 
              height={100}
              className={styles.sun}
              priority
            />
          </div>
        </div>
      </header>

      <section className={styles.mainTitleSection}>
        <Image
          src="/img/title.svg"
          alt="Детский центр современных знаний"
          width={873}
          height={176}
          className={styles.mainTitleImage}
          priority
        />
      </section>

      <section className={styles.subtitleSection}>
        <p className={styles.subtitleText}>
          Откройте мир технологий и креативности
          <br />
          вашего ребёнка!
        </p>
        <Image
          src="/img/ladybug.svg"
          alt="Божья коровка"
          width={80}
          height={80}
          className={styles.ladybug}
          priority
        />
      </section>

      <section className={styles.ctaSection}>
        <button className={styles.ctaButton} type="button">
          <Image
            src="/img/cta-button.svg"
            alt="Оставить заявку"
            width={371}
            height={82}
            className={styles.ctaButtonImage}
            priority
          />
          <span className={styles.ctaButtonText}>ОСТАВИТЬ ЗАЯВКУ</span>
        </button>
      </section>

      {/* Панель контактов */}
      {isContactsOpen && (
        <>
          <div className={styles.contactsOverlay} onClick={closeContacts} />
          <div className={`${styles.contactsPanel} ${isContactsOpen ? styles.contactsPanelOpen : ''}`}>
            <div className={styles.contactsPanelHeader}>
              <div className={styles.contactsCloudContainer}>
                <Image
                  src="/img/облако-белое.svg"
                  alt="Облако"
                  width={250}
                  height={125}
                  className={styles.contactsCloud}
                />
                <h2 className={styles.contactsPanelTitle}>Контакты</h2>
                <Image
                  src="/img/малое-облако.svg"
                  alt="Малое облако"
                  width={110}
                  height={60}
                  className={styles.smallCloud}
                />
              </div>
            </div>
            <div className={styles.contactsPanelContent}>
              <div className={styles.contactsFrame}>
                <svg 
                  width="291" 
                  height="225" 
                  viewBox="0 0 291 225" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.contactsFrameImage}
                >
                  <rect opacity="0.65" width="291" height="225" rx="22" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </>
      )}

    </main>
  );
}
