import OrcaSlide from "orcaslide";
// import OrcaSlide from "./core/mordor";
import "./styles/main.scss";

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        OrcaSlide.config = {
            arrowPrevious: "#arrow_previus",
            arrowNext: "#arrow_next",
            contentItem: "#swipe",
            time: 1,
        };
    }
};
