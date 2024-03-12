import blackLeaf from "../../assets/decorations/decoTopBottom/blackLeaf.svg";
import orangePlant from "../../assets/decorations/decoTopBottom/orangeLeaf.svg";
import purplePlant from "../../assets/decorations/decoTopBottom/purplePlant.svg";
import thickBlueLeaf from "../../assets/decorations/decoTopBottom/thickBlueLeaf.svg";
import thinBlueLeaf from "../../assets/decorations/decoTopBottom/thinBlueLeaf.svg";
import thickWhiteLeaf from "../../assets/decorations/decoTopBottom/thickWhiteLeaf.svg";
import thinWhiteLeaf from "../../assets/decorations/decoTopBottom/thinWhiteLeaf.svg";
import whitePlant from "../../assets/decorations/decoTopBottom/whitePlant.svg";

const DecoTop = () => {
  return (
    <>
      <img
        src={thickBlueLeaf}
        alt="decorationTop"
        style={{ position: "absolute", right: 0, top: 0 }}
      />
      <img
        src={thinWhiteLeaf}
        alt="decorationTop"
        style={{ position: "absolute", left: 0, top: 0 }}
      />

      <img
        src={thinBlueLeaf}
        alt="decorationTop"
        style={{ position: "absolute", left: 0, top: 0 }}
      />

      <img
        src={thickWhiteLeaf}
        alt="decorationTop"
        style={{ position: "absolute", right: 0, top: 0 }}
      />

      <img
        src={orangePlant}
        alt="decorationTop"
        style={{ position: "absolute", left: 0, top: 0 }}
      />
      <img
        src={blackLeaf}
        alt="decorationTop"
        style={{ position: "absolute", left: 0, top: 0 }}
      />

      <img
        src={purplePlant}
        alt="decorationTop"
        style={{ position: "absolute", right: "30%", top: 0 }}
      />
      <img
        src={whitePlant}
        alt="decorationTop"
        style={{ position: "absolute", right: 0, top: 0 }}
      />
    </>
  );
};
export default DecoTop;
