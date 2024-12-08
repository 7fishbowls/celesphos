"use client";
import Counter from "@/components/Counter";
import Form from "@/components/Form";
import styles from "@/styles/signup.module.css";
import { useState } from "react";
import forms from "@/constants/forms";

function Signup() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <section className={styles.signup}>
        {forms.map((elem, id) => {
          return (
            <Form
              styles={styles}
              index={index}
              setIndex={setIndex}
              title={elem.title}
              place_holder={elem.place_holder}
              key={id}
              max={forms.length - 1}
            />
          );
        })}
      </section>
      <Counter max={20} current_index={index} />
    </>
  );
}

export default Signup;
