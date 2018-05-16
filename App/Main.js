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
<<<<<<< HEAD
            jump: 120,
=======
            jump: 64,
>>>>>>> 294060fa8d50eaa5694753a6c8ca47b988b6eaf9
        };
        OrcaSlide.config = {
            arrowPrevious: "#arrow_previus",
            arrowNext: "#arrow_next",
            ctrlStop: "#stop",
            ctrlPlay: "#play",
            contentItem: "#swipe",
            time: 1,
<<<<<<< HEAD
            jump: 120,
=======
            jump: 64,
>>>>>>> 294060fa8d50eaa5694753a6c8ca47b988b6eaf9
            timeAutoPlay: 2.5,
            isInfinite: true,
        };
    }
};
