// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changeTheme } from "../features/Theme/theme";

const Buttons = () => {
  // const theme = useSelector((state) => state.theme.theme);
  // console.log(theme);
  // const dispatch = useDispatch();

  // const handleThemeChange = (newTheme) => {
  //   dispatch(changeTheme(newTheme));
  // };
  // console.log(handleThemeChange);

  // const className = "theme-" + theme;
  return (
    <>
      <div className="flex   p-4 justify-end hover:bg-slate-200 hover:cursor-pointer">
        {/* <button className="mx-3 p-1 border-r-2" onClick={handleThemeChange}> */}
        {/* <button className="mx-3 p-1 border-r-2" >

          Theme
        </button>
        <h1 className={className}>hi there</h1> */}

        <button className="mx-3 p-1 border-r-2 bg-white">Log In </button>
        <button className="mx-3 p-1 border-r-2 bg-white">Sign Up</button>
        <button className="mx-3 p-1 border-2 bg-white">Account</button>
      </div>
    </>
  );
};

export default Buttons;
