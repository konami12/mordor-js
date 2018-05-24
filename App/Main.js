import OrcaSlide from "./core/orcaslide/source/";
// import OrcaSlide from "./core/mordor";
import "./styles/main.scss";

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        OrcaSlide.config = {
            arrowPrevious: "#barrow_previus",
            arrowNext: "#barrow_next",
            contentItem: "#bswipe",
            time: 1,
            isInfinite: true,
            jump: 64,
        };
        OrcaSlide.config = {
            arrowPrevious: "#carrow_previus",
            arrowNext: "#carrow_next",
            contentItem: "#cswipe",
            time: 1,
            jump: 64,
        };
        OrcaSlide.config = {
            arrowPrevious: "#darrow_previus",
            arrowNext: "#darrow_next",
            contentItem: "#dswipe",
            time: 1,
            jump: 128,
        };
    }
};
