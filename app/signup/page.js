"use client";
import Counter from "@/components/Counter";
import Form from "@/components/Form";
import styles from "@/styles/signup.module.css";
import { use, useState } from "react";
import forms from "@/constants/forms";

function Signup() {
  const [index, setIndex] = useState(0);
  const [allError, setAllError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const postForm = async () => {
    console.log(formData);
    if (
      formData.name &&
      formData.email &&
      formData.username &&
      formData.password
    ) {
      const send = await fetch("/api/create_user", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });
    } else {
      setAllError(true);
    }
  };

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
              setFormData={setFormData}
              formData={formData}
              postForm={postForm}
              allError={allError}
            />
          );
        })}
      </section>
      <Counter max={20} current_index={index} />
    </>
  );
}

export default Signup;
