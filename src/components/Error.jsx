// import React from "react";
import animation from '../assets/Animation - 1740939425849.gif';
import dark from "./../assets/dark-mode.png"


function Error(props) {
  return (
    <>
    <div className="flex justify-center flex-col items-center px-6 h-screen">
      <img src={animation} alt="Error Animation" />
      <p className="text-2xl text-blue-700 font-bold rounded">
      The API I'm using is a free tier, so it sucks sometimes. Please try again after some time
      </p>
       <button type="button" onClick={props.toggle} className="right-0 m-2 mb-6 fixed bottom-0 inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-full ">
                 <img src={dark} className="w-12" alt="" />
      </button>
    </div>
    </>
  );
}

export default Error;