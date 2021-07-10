import React from "react";
import "./Greeting.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import BannerImg from "./BannerImg";
import Typewriter from "typewriter-effect";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites } from "../../portfolio";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.orange }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-sub" style={{ color: theme.grayText }}>
                Soy <mark data-entity="suj">{greeting.sub}</mark>
              </h1>
              <h1 className="greeting-typewriter" style={{ color: theme.blue }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Mobile/Web developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Frontend ♥")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Fan")
                      .pauseFor(200)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span
                className="greeting-text-span subTitle"
                style={{ color: theme.text }}>
                <div className="entities">
                  Un <mark data-entity="sust">Desarrollador web</mark>{" "}
                  que se esfuerza por{" "}
                  <mark data-entity="verb">crecer en cada proyecto</mark> 
                  con soluciones basadas en el{" "}
                  <mark data-entity="skill">desarrollo web</mark> y una combinación de<mark data-entity="freelance">Diseño UX/UI</mark>
                </div>
              </span>
              <CompetitiveSites logos={competitiveSites.competitiveSites} />
              <div className="button-greeting-div">
              <Button text="Hablemos!" href="/contact" />
                <Button
                  text="Este es mi CV"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <BannerImg />
          </div>
        </div>
      </div>
    </Fade>
  );
}
