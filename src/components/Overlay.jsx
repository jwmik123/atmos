import { useState } from "react";
export const Overlay = () => {
  const [clicked, setClicked] = useState(true);

  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <>
      {clicked && (
        <div className="overlay">
          <div className="intro">
            <h1 className="logo">JALLATMOS</h1>
            <div className="spinner">
              <div className="spinner__image"></div>
            </div>
            <button onClick={handleClick} className="explore">
              Ontdek
            </button>
          </div>
        </div>
      )}
    </>
  );
};
