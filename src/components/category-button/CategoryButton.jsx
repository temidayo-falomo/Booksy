import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../helper/Context";

function CategoryButton(props) {
  const [click, setClick] = useState(false);
  const [number, setNumber] = useState(0);
  const [toggleState, setToggleState] = useState(number);

  const { setSubject, subject } = useContext(AppContext);

  const handleSubject = (param, indexParam) => {
    let handledSubject = param.toString();
    setSubject(handledSubject);
    setNumber(indexParam);
  };

  useEffect(() => {
    // handleSubject();
  }, [toggleState]);

  return (
    <>
      <button
        key={props.index}
        onClick={() => handleSubject(props.name, props.index)}
        // className={toggleState === props.index ? "active-btn" : undefined}
        // style={{ backgroundColor: toggleState === props.index ? 'red': 'initial' }}
      >
        <img src={props.img} alt="" />
        {props.name}
      </button>
    </>
  );
}

export default CategoryButton;

// onClick={() => handleLinkClick(item)} style={{ border: currentPage === item ? '3px solid #005ba9': 'initial' }}
