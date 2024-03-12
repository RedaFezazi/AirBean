import blackLeaf from "../../assets/decorations/decoTopBottom/bottomBlackLeaf.svg";
import orangePlant from "../../assets/decorations/decoTopBottom/bottomOrangeLeaf.svg";
import purplePlant from "../../assets/decorations/decoTopBottom/bottomPurplePlant.svg";
import thickBlueLeaf from "../../assets/decorations/decoTopBottom/bottomThickBlueLeaf.svg";
import thinBlueLeaf from "../../assets/decorations/decoTopBottom/bottomThinBlueLeaf.svg";
import thickWhiteLeaf from "../../assets/decorations/decoTopBottom/bottomThickWhiteLeaf.svg";
import whitePlant from "../../assets/decorations/decoTopBottom/bottomWhitePlant.svg";

const DecoTop = () => {
  return (
    <>
      <img
        src={thickBlueLeaf}
        alt="decorationBottom"
        style={{ position: "absolute", left: 0, bottom: 0 }}
      />

      <img
        src={thinBlueLeaf}
        alt="decorationBottom"
        style={{ position: "absolute", right: 0, bottom: 0 }}
      />

      <img
        src={thickWhiteLeaf}
        alt="decorationBottom"
        style={{ position: "absolute", left: 0, bottom: 0 }}
      />

      <img
        src={orangePlant}
        alt="decorationBottom"
        style={{ position: "absolute", right: 0, bottom: 0 }}
      />
      <img
        src={blackLeaf}
        alt="decorationBottom"
        style={{ position: "absolute", right: 0, bottom: 0 }}
      />

      <img
        src={purplePlant}
        alt="decorationBottom"
        style={{ position: "absolute", left: "30%", bottom: 0 }}
      />
      <img
        src={whitePlant}
        alt="decorationBottom"
        style={{ position: "absolute", left: 0, bottom: 0 }}
      />
    </>
  );
};
export default DecoTop;
