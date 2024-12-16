import styles from "@/styles/researches.module.css";
import Image from "next/image";
import Menu from "@/components/Menu";

export default async function Researches() {
  const req = await fetch("https://tempo-o5b5.onrender.com/research");
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || `https://${process.env.VERCEL_URL}`;
  const researches = await req.json();
  return (
    <main className={styles.researches}>
      {researches.map((elem, index) => (
        <section key={index} className={styles.researches_}>
          <section className={styles.research}>
            <Image
              src={elem.research_img_link}
              fill
              alt={elem.research_keyword}
              priority
            />

            <div className={styles.content}>
              <header>
                <h2>{elem.research_title}</h2>
                <p className={styles.author}>{elem.research_author}</p>
              </header>
              <div className={styles.explanation}>
                <p>{elem.research_explanation}</p>
                <div className={styles.date}>
                  <p>01-05-2023</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      ))}
      <Menu />
    </main>
  );
}
