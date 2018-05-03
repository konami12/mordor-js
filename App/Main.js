import OrcaSlide from "./core/orcaslide/source/OrcaSlide";
// import OrcaSlide from "./core/mordor";
import "./styles/main.scss";

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        OrcaSlide.config = {
            arrowPrevious: "#arrow_previus",
            arrowNext: "#arrow_next",
            ctrlStop: "#stop",
            ctrlPlay: "#play",
            contentItem: "#swipe",
            time: 1,
            timeAutoPlay: 2.5,
            isInfinite: true,
        };
    }
};
