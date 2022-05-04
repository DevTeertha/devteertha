import React, { useEffect, useRef, useState } from "react";

const Sticky = ({
  position,
  stuckClasses = "",
  unstuckClasses = "",
  stuckStyles = {},
  unstuckStyles = {},
  children,
}: any) => {
  const [stuck, setStuck] = useState(false);
  const ref: any = useRef(null);

  const classes = stuck ? stuckClasses : unstuckClasses;
  const styles = stuck ? stuckStyles : unstuckStyles;

  const inlineStyles = {
    ...styles,
  };

  useEffect(() => {
    const cachedRef: any = ref.current;
    console.log("cachedRef: ", ref.current.scrollTop);
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1);
      },
      { threshold: [1] }
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return (
    <div style={inlineStyles} className={classes} ref={ref}>
      {children}
    </div>
  );
};
export default Sticky;
