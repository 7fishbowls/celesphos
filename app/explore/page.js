import { MdOutlineStar } from "react-icons/md";

function Profile() {
  const gridSize = 10;
  const cellSize = 10;
  const totalStars = 50;
  const usedPositions = new Set();
  const stars = [];

  while (stars.length < totalStars) {
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    const position = `${row}-${col}`;

    if (!usedPositions.has(position)) {
      usedPositions.add(position);
      stars.push({ top: row * cellSize, left: col * cellSize });
    }
  }

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdOutlineStar />
          <p style={{ fontSize: "0.7rem" }}>{index}</p>
        </div>
      ))}
    </section>
  );
}

export default Profile;
