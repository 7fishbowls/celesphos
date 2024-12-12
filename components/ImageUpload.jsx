import styles from "@/styles/create.module.css";

function ImageUpload({ index }) {
    <>
      <section
        className={styles.image_upload}
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        <section>
          <header>
            <h2>Upload your research images.</h2>
          </header>
          <section>
            <input type="file" accept="image/*" />
            <button>Upload</button>
          </section>
        </section>
      </section>
    </>
  );
}

export default ImageUpload;
