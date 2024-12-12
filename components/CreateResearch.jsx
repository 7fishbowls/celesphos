import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

function CreateResearch({
  styles,
  postForm,
  title,
  index,
  setIndex,
  btn_visible = true,
  input_visible = true,
  setFormData,
  place_holder,
  formData,
  isLoading,
}) {
  const [error, setError] = useState(false);
  const isPressed = useRef(false);
  const inputRef = useRef(null);

  const handleInputData = (e) => {
    switch (index) {
      case 0:
        setFormData((prev) => ({
          ...prev,
          research_title: inputRef.current.value,
        }));
        break;

      case 3:
        setFormData((prev) => ({
          ...prev,
          research_author: inputRef.current.value,
        }));
        break;
    }
  };

  const handleNext = () => {
    if (index === 3) postForm();
    if (isPressed.current) return;
    if (!inputRef.current.value) {
      switch (index) {
        case 0:
          return setError("Whoa, can’t leave this blank like a black hole.");
        case 1:
          return setError(
            "Category are the first thing to catch the eye, so name them perfectly."
          );
        case 2:
          return setError(
            "Oops, no explanation? We need the full scoop, not a mystery!"
          );
      }
    } else if (inputRef.current.value.trim().length < 5 && index !== 2) {
      return setError("C'mon 5 character at least.");
    } else if (inputRef.current.value.trim().length < 500 && index === 2) {
      return setError(
        "A perfect explanation explains more than 500 characters."
      );
    } else {
      isPressed.current = true;
      setTimeout(() => {
        isPressed.current = false;
      }, 1300);
      setError(false);
      if (index === 2)
        setFormData({
          ...formData,
          research_explanation: inputRef.current.value,
        });
      setIndex((current) => (current < 3 ? current + 1 : 3));
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
              placeholder={place_holder}
              ref={inputRef}
              onChange={(e) => handleInputData(e)}
            ></input>
          )}
          {!input_visible && (
            <textarea
              ref={inputRef}
              onChange={(e) => handleInputData(e)}
              placeholder="_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________"
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
              {isLoading && <span className={styles.loader}></span>}
              {!isLoading && <BsArrowRight />}
            </button>
          </div>
        </section>
      </main>
    </main>
  );
}

export default CreateResearch;