import React from "react";
import Flappy from "../images/FlappyBird.jpg";
import "./Project.css";

const Project = () => {
  return (
    <>
      <section className="bg-yellow-300">
        <h1 className="text-4xl font-bold flex items-center justify-center p-2 bg-yellow-400">
          FlappyBird
        </h1>

        <div className="flex items-center justify-between">
          <div>
            <img
              className="rounded-lg mt-3 ml-3 floating-animation"
              src={Flappy}
              alt="img"
            />
          </div>

          <div className="p-5">
            <p className=" mr-5 ml-5 text-justify">
              Project Title: <b>Flappy Bird Game</b> Clone in Java Project
              Description: The "Flappy Bird Game Clone in Java" is a classic and
              addictive 2D game that replicates the popular mobile game "Flappy
              Bird." This mini-project demonstrates your programming skills and
              creativity by implementing a simple yet engaging game where
              players navigate a bird through obstacles by tapping on their
              keyboard. The game showcases your ability to design graphical user
              interfaces, handle user input, manage game physics, and create an
              enjoyable gaming experience.
              <p>
                <a
                  className="font-bold text-2xl text-blue-600"
                  href="https://github.com/soumilnimbalkar26"
                >
                  Github
                </a>
              </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
