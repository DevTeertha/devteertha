import React, { useEffect, useRef } from "react";

const CursorMove = () => {
  const customCursor: any = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX - customCursor.current.clientWidth / 2;
      const mouseY = clientY - customCursor.current.clientHeight / 2;
      customCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    return () => {};
  }, []);

  return (
    <div className="mouseFollowContainer" ref={customCursor}>
      <div className="app_cursor1"></div>
      <div className="app_cursor2"></div>
    </div>
  );
};

export default CursorMove;
