"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface Trainer {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  category: string;
  category_display: string;
  difficulty: string;
  difficulty_display: string;
  icon: string;
  image_url: string | null;
  order: number;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function TrainersPage() {
  const [trainers, setTrainers] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/trainers/`);
      if (!response.ok) {
        throw new Error("Ошибка загрузки тренажеров");
      }
      const data = await response.json();
      setTrainers(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Произошла ошибка");
      console.error("Error fetching trainers:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerBackground}>
          <Link href="/" className={styles.logoLink} aria-label="На главную">
            <div className={styles.logo}>
              <Image
                src="/img/logo.svg"
                alt="Логотип «Лучик»"
                width={260}
                height={80}
                priority
              />
            </div>
          </Link>

          <nav className={styles.navbarRow} aria-label="Основная навигация">
            <div className={styles.navLinks}>
              <Link href="/#about" className={styles.navTextLink}>
                О нас
              </Link>
              <Link href="/#directions" className={styles.navTextLink}>
                Направления
              </Link>
              <Link href="/#schedule" className={styles.navTextLink}>
                Расписание
              </Link>
              <Link href="/trainers" className={styles.navTextLink}>
                Тренажеры
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.badge}>Программа «Тренажеры развития»</p>
          <h1 className={styles.title}>Тренажеры для развития навыков</h1>
          <p className={styles.subtitle}>
            Выбирайте тренажер и развивайте различные навыки. Тренировки помогают улучшить концентрацию,
            память, скорость мышления и другие важные способности.
          </p>
        </section>

        <section className={styles.trainers}>
          {loading ? (
            <div className={styles.loading}>Загрузка тренажеров...</div>
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : trainers.length === 0 ? (
            <div className={styles.empty}>
              Тренажеры не найдены.
            </div>
          ) : (
            trainers.map((trainer) => (
              <article key={trainer.id} className={styles.card}>
                <div className={styles.cardMedia}>
                  {trainer.image_url ? (
                    <Image
                      src={trainer.image_url}
                      alt={trainer.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 200px"
                    />
                  ) : (
                    <div className={styles.cardIcon}>{trainer.icon || "🎯"}</div>
                  )}
                  <span className={styles.mediaTag}>Тренажер</span>
                </div>

                <div className={styles.cardBody}>
                  <h2>{trainer.title}</h2>
                  <p className={styles.cardSubtitle}>
                    {trainer.short_description || "Описание отсутствует"}
                  </p>
                  <div className={styles.cardFooter}>
                    <Link
                      href={`/trainers/${trainer.slug}`}
                      className={styles.cardButton}
                    >
                      Запустить тренажер
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
