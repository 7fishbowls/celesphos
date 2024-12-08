import Link from "next/link";
import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Form({
  title,
  index,
  error_message,
  place_holder,
  styles,
  setIndex,
  max,
}) {
  const inputRef = useRef(null);
  const [error_, setError] = useState(false);
  const [err_msg, setErrorMsg] = useState("");

  const handleNext = () => {
    if (!inputRef.current.value) {
      setErrorMsg("The feild can't be empty.");
      setError(true);
    } else {
      setIndex((prev) => (prev < max ? prev + 1 : max));
      if (error_) setError(false);
    }
  };

  const handlePrev = () => {
    setIndex((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return (
    <>
      <section
        className={styles.form}
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        <section>
          <h2>
            {title}
            {error_ && (
              <span className={styles.error_icon}>
                <IoMdInformationCircleOutline />
              </span>
            )}
          </h2>
          <input type="text" placeholder={place_holder} ref={inputRef} />
          <div className={styles.buttons}>
            <button onClick={handlePrev}>
              <span>
                <BsArrowLeft />
              </span>
            </button>
            <button onClick={handleNext}>
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
          {error_ && (
            <div className={styles.error}>
              <p>{err_msg}</p>
            </div>
          )}
        </section>
      </section>
      <div className={styles.login}>
        <Link href="/login">Login</Link>
      </div>
    </>
  );
}

export default Form;
