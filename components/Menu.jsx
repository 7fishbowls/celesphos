import styles from "@/styles/menu.module.css";
import { IoMdArrowDropup } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function Menu() {
  return (
    <nav className={styles.menu}>
      <header>
        <h2>
          <IoMdArrowDropup size={27} className={styles.bar} />
        </h2>
      </header>
      <section className={styles.main}>
        <div className={styles.star}>
          <FaStar />
          <h2>menu</h2>
        </div>
        <div className={styles.star}>
          <FaStar />
          <h2>About</h2>
        </div>
        <div className={styles.star}>
          <FaStar />
          <h2>Me</h2>
        </div>
        <div className={styles.star}>
          <FaStar />
          <h2>Create Research</h2>
        </div>
      </section>
    </nav>
  );
}

export default Menu;
