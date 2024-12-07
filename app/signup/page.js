"use client";
import Counter from "@/components/Counter";
import Form from "@/components/Form";
import styles from "@/styles/signup.module.css";
import { useState } from "react";

function Signup() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <section className={styles.signup}>
        <Form
          styles={styles}
          title={"What's your name ?"}
          place_holder={"John Doe"}
          error_message={"The name can't be empty!"}
          index={index}
          setIndex={setIndex}
        />
        <Form
          styles={styles}
          title={"Pick up a unique username."}
          place_holder={"John Doe"}
          error_message={"The username can't be empty!"}
          index={index}
          setIndex={setIndex}
        />
        <Form
          styles={styles}
          title={"What's your name ?"}
          place_holder={"John Doe"}
          error_message={"The username can't be empty!"}
          index={index}
          setIndex={setIndex}
        />
        <Form
          styles={styles}
          title={"What's your name ?"}
          place_holder={"John Doe"}
          error_message={"The username can't be empty!"}
          index={index}
          setIndex={setIndex}
        />
      </section>
      <Counter max={20} current_index={index} />
    </>
  );
}

export default Signup;
