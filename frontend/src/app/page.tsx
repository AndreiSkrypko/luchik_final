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
              <h2 className={styles.contactsPanelTitle}>Контакты</h2>
              <button 
                className={styles.contactsPanelClose}
                onClick={closeContacts}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>
            <div className={styles.contactsPanelContent}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Телефон</h3>
                  <a href="tel:+79991234567" className={styles.contactValue}>
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Email</h3>
                  <a href="mailto:info@luchik.ru" className={styles.contactValue}>
                    info@luchik.ru
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Адрес</h3>
                  <p className={styles.contactValue}>
                    г. Москва, ул. Примерная, д. 1
                  </p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Режим работы</h3>
                  <p className={styles.contactValue}>
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </div>
              </div>
              <div className={styles.contactsSocials}>
                <h3 className={styles.contactsSocialsTitle}>Мы в соцсетях</h3>
                <div className={styles.contactsSocialsLinks}>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactsSocialLink}
                    aria-label="Мы в Instagram"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://vk.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactsSocialLink}
                    aria-label="Мы во ВКонтакте"
                  >
                    ВКонтакте
                  </a>
                  <a
                    href="https://ok.ru"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactsSocialLink}
                    aria-label="Мы в Одноклассниках"
                  >
                    Одноклассники
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </main>
  );
}
