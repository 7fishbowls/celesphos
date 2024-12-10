import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

function CreateResearch({
  styles,
  title,
  index,
  setIndex,
  btn_visible = true,
  input_visible = true,
}) {
  const [error, setError] = useState(false);
  const isPressed = useRef(false);
  const inputRef = useRef(null);
  const handleNext = () => {
    if (isPressed.current) return;
    if (!inputRef.current.value) {
      switch (index) {
        case 0:
          return setError(
            "Titles are the first thing to catch the eye, so name them perfectly."
          );
        case 1:
          return setError(
            "Category are the first thing to catch the eye, so name them perfectly."
          );
      }
    } else if (inputRef.current.value.trim().length < 5 && index !== 2) {
      return setError("Minimum 5 character are required.");
    } else {
      isPressed.current = true;
      setTimeout(() => {
        isPressed.current = false;
      }, 1300);
      setError(false);
      setIndex((current) => current + 1);
    }
  };
  const handlePrev = () => {
    if (isPressed) isPressed.current = false;
    setIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <main
      className={`${styles.create}`}
      style={{ transform: `translateX(-${index * 100}vw)` }}
    >
      <main className={styles.create_}>
        <header>
          <h2>{title}</h2>
          {error && <RiErrorWarningFill color="red" size={19} />}
        </header>
        <section className={styles.main}>
          {input_visible && (
            <input
              type="text"
              placeholder="Eg., Black Holes...."
              ref={inputRef}
            ></input>
          )}
          {!input_visible && (
            <textarea
              ref={inputRef}
              placeholder="____________________________________________________________________________________________________________________________________________________________"
            ></textarea>
          )}
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.buttons}>
            {btn_visible && (
              <button onClick={handlePrev}>
                <BsArrowLeft />
              </button>
            )}
            {!btn_visible && <p> </p>}
            <button onClick={handleNext}>
              <BsArrowRight />
            </button>
          </div>
        </section>
      </main>
    </main>
  );
}

export default CreateResearch;
