import { useState,useRef } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref=useRef();
    useOutsideClick(ref, ()=>setShowContent(false))
  

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is some random content</h1>
          <p>
            Please click outside of this to close it.It wont close if you click
            inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
