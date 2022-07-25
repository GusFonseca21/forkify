import React, { useContext } from "react";

import { StylesContext } from "../../../store/styles-context";

import classes from "./Bookmarks.module.css";

import { BsFillBookmarkFill } from "react-icons/bs";

import Recipe from "../../Body/FoundRecipes/Recipe/Recipe";

const Bookmarks = () => {
  const stylesCtx = useContext(StylesContext);

  const bookmarkClickHandler = () => {
    stylesCtx.changeState("bookmarksHeader");
  };

  return (
    <>
      {
        <button
          className={`${classes["bookmarks-button"]} ${
            stylesCtx.state.bookmarksHeaderState
              ? classes["bookmarks-button-clicked"]
              : ""
          }`}
          onClick={bookmarkClickHandler}
        >
          <BsFillBookmarkFill className={classes["bookmark-icon"]} />
          <span className={classes["bookmarks-text"]}>BOOKMARKS</span>
        </button>
      }
      {
        <div
          className={`${classes["bookmarked-recipes"]} ${
            stylesCtx.state.bookmarksHeaderState
              ? classes["bookmark-clicked"]
              : ""
          }`}
        >
          <div className={classes["recipes-list"]}></div>
        </div>
      }
    </>
  );
};

export default Bookmarks;
