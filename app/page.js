import styles from "./page.module.css";
import { FaInstagram } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main_content}>
      <div className={styles.top}>
        <footer className={styles.footer}>
          <p>Fueled by Shaik Ali.</p>
          <p>Propelled by Shaik Ali.</p>
          <p>Crafted by Shaik Ali.</p>
          <p>Compiled by Shaik Ali.</p>
          <p>Deployed by Shaik Ali.</p>
        </footer>
        <div className={styles.social}>
          <Link href={"https://instagram.com/celesphos"}>
            <FaInstagram />
          </Link>
        </div>
      </div>
      <section className={styles.bottom}>
        <header>
          <h2>SPACE</h2>
        </header>
        <Link href={"/explore"}>
          <BsArrowUpRight />
        </Link>
      </section>
      <section className={styles.stars}></section>
    </main>
  );
}
