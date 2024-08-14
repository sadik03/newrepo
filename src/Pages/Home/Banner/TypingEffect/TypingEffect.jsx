import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
    const [texts] = useTypewriter({
        words:['Football','Cricket','Tennis','Badminton','Rugby','Baseball','Basketball','Swimming','Volleyball'],
        loop:{},
        typeSpeed:300,
        delaySpeed:80
    })
    return (
      <div className="text-white">
        <h2 className="md:text-6xl text-4xl font-bold">
           ARS KREEDASHALA
        </h2>
        <h4 className="md:text-4xl text-3xl my-5 font-semibold bg-red-500 md:w-4/6 w-11/12 rounded mx-auto py-2.5 px-1">
          Admission Going On
        </h4>
        <div className="md:text-3xl text-2xl font-semibold">
          <span>{texts}</span>
          <Cursor cursorStyle="." cursorColor="white" />
        </div>
        <p className="my-3">
          We provide individualized academic support and flexible,
          permeable educational pathways that are tailored to each student's needs.
          your particular requirements and goals. Since our ambitions coincide with yours.
        </p>
        <button className="btn bg-transparent border-2 border-amber-500 text-white px-5 transition-all hover:scale-95 hover:bg-amber-500 hover:border-amber-500">
          Learn More
        </button>
      </div>
    );
};

export default TypingEffect;