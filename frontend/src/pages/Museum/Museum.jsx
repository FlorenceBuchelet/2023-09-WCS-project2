import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Museum.scss";

function Museum() {
  const [arts, setArts] = useState();
  useEffect(() => {
    fetch("http://localhost:3310/artpieces")
      .then((response) => response.json())
      .then((data) => setArts(data))
      .catch((error) => console.error(error));
  }, []);

  const [clickAhead, setClickAhead] = useState(true);
  const [clickBack, setClickBack] = useState(true);
  const [artsIndexLeft, setArtsIndexLeft] = useState(0);
  const [artsIndexRight, setArtsIndexRight] = useState(1);

  const handleClickNext = (e) => {
    e.preventDefault();
    setClickAhead(!clickAhead);
    setTimeout(() => {
      setClickAhead();
    }, 2000);
    setArtsIndexLeft(artsIndexLeft + 2);
    setArtsIndexRight(artsIndexRight + 2);
  };

  const handleClickPrevious = (e) => {
    e.preventDefault();
    setClickBack(!clickBack);
    setTimeout(() => {
      setClickBack();
    }, 2000);
    setArtsIndexLeft(artsIndexLeft - 2);
    setArtsIndexRight(artsIndexRight - 2);
  };

  return (
    <div className="museum">
      <div className="museum__background">
        <img src="src/assets/bg main.jpg" alt="Portrait de Camille Claudel" />
      </div>
      <div className="museum__walls">
        {arts ? (
          <div className="museum__wall museum__wall--left">
            <img
              className={
                (clickAhead && "museum__img--left--next") ??
                (clickBack && "museum__img--left--previous")
              }
              src={`http://localhost:3310/${arts[artsIndexLeft].imgSrc}`}
              alt={arts[artsIndexLeft].imgAlt}
            />
            <p>
              <strong>
                {`${arts[artsIndexLeft].artist} - ${arts[artsIndexLeft].city} `}
              </strong>
              {`(${arts[artsIndexLeft].street})`} <br />
              {arts[artsIndexLeft].description}
            </p>
          </div>
        ) : (
          "Loading"
        )}
        {arts ? (
          <div className="museum__wall museum__wall--right">
            <img
              className={
                (clickAhead && "museum__img--right--next") ||
                (clickBack && "museum__img--right--previous")
              }
              src={`http://localhost:3310/${arts[artsIndexRight].imgSrc}`}
              alt={arts[artsIndexRight].imgAlt}
            />
            <p>
              <strong>
                {`${arts[artsIndexRight].artist} - ${arts[artsIndexRight].city} `}
              </strong>
              {`(${arts[artsIndexRight].street})`} <br />
              {arts[artsIndexRight].description}
            </p>
          </div>
        ) : (
          "Loading"
        )}
        <nav className="museum__navigationArrows">
          <button
            type="button"
            className="museum__navigationArrows--left"
            disabled={artsIndexRight === 37}
            onClick={handleClickNext}
          >
            Avant
          </button>
          <button
            type="button"
            className="museum__navigationArrows--right"
            disabled={artsIndexLeft === 0}
            onClick={handleClickPrevious}
          >
            Arrière
          </button>
        </nav>
      </div>
    </div>
  );
}

Museum.propTypes = {
  arts: PropTypes.shape({
    imgAlt: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Museum;
