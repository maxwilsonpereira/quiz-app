import React from "react";

import quizLogo from "../../../assets/logos/tenor-quiz.png";
import classes from "../../Pages.module.css";
import Button from "../../../components/UI/Button/Button";

const tenorQuizIntroEn = () => {
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
        WHO IS THE TENOR?
      </h1>
      <h1 className={[classes.IntroText, classes.LineHightLess].join(" ")}>
        For Maria Santa, there is no voice more exciting than the tenor one!
        <br />
        She knows all of them! How about you?
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
          <Button linkToGo="/tenorquiz-en" btnType="BtnNotFullGreen">
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

export default tenorQuizIntroEn;
