import { Interface } from "readline";
import styled from "./style/";

interface IProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  style?: Object;
  duration?: string;
}

const HypnosisLoading = ({
  className = "",
  color = "#0d6efd",
  width = "4em",
  height = "4em",
  style,
  duration = "1.5s",
}: IProps) => {
  return (
    <div
      style={{
        display: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          ...style,

          ["--width"]: width,
          ["--height"]: height,
          ["--color"]: color,
          ["--duration"]: duration,
        }}
        className={[styled.cssfxHypnosisLoader, className].join(" ")}
      >
        <div className={[styled.cssfxHypnosisOuter].join(" ")}></div>
        <div className={[styled.cssfxHypnosisMiddle].join(" ")}></div>
        <div className={[styled.cssfxHypnosisInner].join(" ")}></div>
      </div>
      <br />
      <h3 style={{ display: "block" }}>Loading...</h3>
    </div>
  );
};

export default HypnosisLoading;
