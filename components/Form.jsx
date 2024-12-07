import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";

function Form({ title, index, error_message, place_holder, styles, setIndex }) {
  const inputRef = useRef(null);
  const [error_, setError] = useState(false);

  const handleNext = () => {
    if (inputRef.current.value) {
      setIndex((prev) => prev + 1);
      if (error_) setError(false);
    } else setError(true);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev > 1 ? prev - 1 : 0));
  };

  return (
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
            <p>{error_message}</p>
          </div>
        )}
      </section>
    </section>
  );
}

export default Form;
