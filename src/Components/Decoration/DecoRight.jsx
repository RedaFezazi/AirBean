import blackLeafRight from "../../assets/decorations/decoLeftRight/blackLeafRight.svg";
import orangePlantRight from "../../assets/decorations/decoLeftRight/orangePlantRight.svg";
import purplePlantRight from "../../assets/decorations/decoLeftRight/purplePlantRight.svg";
import thickBlueLeafRight from "../../assets/decorations/decoLeftRight/thickBlueLeafRight.svg";
import thinBlueLeafRight from "../../assets/decorations/decoLeftRight/thinBlueLeafRight.svg";
import whiteLeafRight from "../../assets/decorations/decoLeftRight/whiteLeafRight.svg";
import whitePlantRight from "../../assets/decorations/decoLeftRight/whitePlantRight.svg";

import "./decoTopBottom.scss";

const DecoRight = () => {
  return (
    <>
      <img
        src={thickBlueLeafRight}
        alt="decoration"
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <img
        src={thinBlueLeafRight}
        alt="decoration"
        style={{ position: "absolute", top: 0, right: 0 }}
      />
      <img
        src={whiteLeafRight}
        alt="decoration"
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
      <img
        src={orangePlantRight}
        alt="decoration"
        style={{ position: "absolute", top: "4%", right: 0 }}
      />
      <img
        src={blackLeafRight}
        alt="decoration"
        style={{ position: "absolute", top: 0, right: 0 }}
      />

      <img
        src={purplePlantRight}
        alt="decoration"
        style={{ position: "absolute", bottom: "37%", right: 0 }}
      />
      <img
        src={whitePlantRight}
        alt="decoration"
        style={{ position: "absolute", bottom: 0, right: 0 }}
      />
    </>
  );
};
export default DecoRight;
