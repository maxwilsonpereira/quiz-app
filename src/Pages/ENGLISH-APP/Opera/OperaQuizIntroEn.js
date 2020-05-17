import React from "react";

import quizLogo from "../../../assets/logos/opera-quiz-en.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const operaQuizIntroEn = () => {
  return (
    <>
      <br />
      <img src={quizLogo} className={classes.responsive} alt="QUIZ" />
      <h1
        className={[
          classes.IntroText,
          classes.IntroTextTitle,
          classes.FontColorYellow,
        ].join(" ")}
      >
        DO YOU LOVE OPERA?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        Maria Santa is very eclectic!
        <br />
        She loves opera and chose 10 operas to test your love for the genre!
      </h1>
      {/* <h1
          className={[
            classes.IntroText,
            classes.TextAmarelo,
            classes.MarginTop,
          ].join(" ")}
        >
          Um jogo para toda a família!
        </h1> */}
      <h1
        className={[
          classes.TextRed,
          classes.MarginTop,
          classes.LineHightLess,
        ].join(" ")}
      >
        If you make a mistake, Maria Santa will get pissed!
      </h1>
      <br />
      <h1
        className={[
          classes.TextBranco,
          classes.LineHightLess,
          classes.MarginLeftRight20,
        ].join(" ")}
      >
        Good luck!
      </h1>
      <br />
      <div className={classes.FlexBoxParentColumn}>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/operaquiz-en" btnType="BtnNotFullGreen">
            START
          </Button>
        </div>
        <div className={classes.FlexBoxChild}>
          <Button linkToGo="/introenglish" btnType="BtnNotFullYellow">
            MENU
          </Button>
        </div>
      </div>
    </>
  );
};

export default operaQuizIntroEn;
