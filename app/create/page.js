"use client";
import Loaderv2 from "@/components/create_loading";
import styles from "@/styles/create.module.css";

import { useState } from "react";
import CreateResearch from "@/components/CreateResearch";

function Create() {
  const [hide, setHide] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <section
        className={`${styles.create_researhes} ${hide ? styles.active : ""}`}
      >
        <CreateResearch
          styles={styles}
          hide={hide}
          title="Pick up a title for research."
          index={index}
          setIndex={setIndex}
          btn_visible={false}
        />
        <CreateResearch
          styles={styles}
          hide={hide}
          title="Explain research breifly."
          index={index}
          setIndex={setIndex}
        />
        <CreateResearch
          styles={styles}
          hide={hide}
          title="Explain research breifly."
          index={index}
          setIndex={setIndex}
          input_visible={false}
        />
        <CreateResearch
          styles={styles}
          hide={hide}
          title="Explain research breifly"
          index={index}
          setIndex={setIndex}
        />
        <CreateResearch
          styles={styles}
          hide={hide}
          title="Explain research breifly"
          index={index}
          setIndex={setIndex}
        />
      </section>
      <Loaderv2 hide={hide} setHide={setHide} />
    </>
  );
}

export default Create;
