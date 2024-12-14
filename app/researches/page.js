import styles from "@/styles/researches.module.css";
import Image from "next/image";

export default async function Researches() {
  const req = await fetch("http://localhost:3000/api/create_research");
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
              </div>
            </div>
          </section>
        </section>
      ))}
    </main>
  );
}
