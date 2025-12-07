"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Gallery() {
  const [selectedGalleryType, setSelectedGalleryType] = useState('photos');

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerBackground}>
          <a href="/" className={styles.logoLink} aria-label="На главную">
            <div className={styles.logo}>
              <Image
                src="/img/main/logo.webp"
                alt="Логотип «Лучик»"
                width={260}
                height={80}
                priority
                loading="eager"
              />
            </div>
          </a>

          <nav className={styles.navbarRow} aria-label="Основная навигация">
            <div className={styles.navLinks}>
              <Link href="/#about" className={styles.navTextLink}>
                О нас
              </Link>
              <Link href="/#directions" className={styles.navTextLink}>
                Направления
              </Link>
              <Link href="/gallery" className={styles.navTextLink}>
                Галерея
              </Link>
              <Link href="/trainers" className={styles.navTextLink}>
                Тренажеры 
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryHeader}>
            <h1 className={styles.galleryTitle}>Галерея</h1>
            <select 
              className={styles.gallerySelect}
              onChange={(e) => setSelectedGalleryType(e.target.value)}
              value={selectedGalleryType}
            >
              <option value="photos">Фото</option>
              <option value="videos">Видео</option>
            </select>
          </div>
          <div className={styles.galleryContent}>
            {selectedGalleryType === 'photos' ? (
              <div className={styles.galleryPhotos}>
                <Image
                  src="/img/main/logo.webp"
                  alt="Фото 1"
                  width={200}
                  height={150}
                  className={styles.galleryPhoto}
                  loading="lazy"
                />
                <Image
                  src="/img/main/sun.webp"
                  alt="Фото 2"
                  width={200}
                  height={150}
                  className={styles.galleryPhoto}
                  loading="lazy"
                />
                <Image
                  src="/img/main/ladybug.webp"
                  alt="Фото 3"
                  width={200}
                  height={150}
                  className={styles.galleryPhoto}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className={styles.galleryVideos}>
                <div className={styles.galleryVideo}>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Видео 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className={styles.galleryVideo}>
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Видео 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

