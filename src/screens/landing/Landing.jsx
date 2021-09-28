import { useState, useEffect } from "react";

import InfoModal from "../../components/infoModal/InfoModal";
import Atom from "../../animations/atom/Atom";
import TypewriterComponent from "typewriter-effect";

import "./landing.css";

const Landing = () => {
  const [toggleDetail, setToggleDetail] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleAtomClick = () => {
    console.log(toggleDetail);
    if (toggleDetail === 2) {
      setToggleDetail(0);
    } else {
      setToggleDetail(toggleDetail + 1);
    }
  };

  return (
    <div className="landing">
      <section className="landing-intro">
        <div className="intro-greeting">
          <p className="intro-text">
            Hello World,
          </p>
          <p className="intro-typewriter">
          I'm <TypewriterComponent className="typewriter"
              options={{
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Erick!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a software engineer!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a problem-solver!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a leader!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a team-player!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a nerd!")
                  .start();
              }}
            />
          </p>
        </div>
      </section>
      <div id="landing-modal">
        <InfoModal toggleDetail={toggleDetail} />
      </div>

      <div className={`landing-atom ${toggleDetail > 0 ?"atom-transition":"atom-transition-revert"}`}>
        <Atom
          toggleDetail={toggleDetail}
          setToggleDetail={setToggleDetail}
          handleAtomClick={handleAtomClick}
        />
      </div>
    </div>
  );
};

export default Landing;
