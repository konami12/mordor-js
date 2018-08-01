import OrcaSlide from "./core/orcaslide/source/";
// import OrcaSlide from "orcaslide";
import "./styles/main.scss";


document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        const demo = (orca, para = {}) => {
            console.log("----------");
            console.log(para);
        };

        OrcaSlide.config = {
            arrowPrevious: "#barrow_previus",
            arrowNext: "#barrow_next",
            contentItem: "#bswipe",
            time: 1,
            isInfinite: true,
            jump: 64,
            callbacks: [
                {
                    callback: (param) => { demo(1, param); },
                    slide: 1,
                    next: true,
                    previus: true,
                },
                {
                    callback: (param) => { demo(2, param); },
                    slide: 2,
                    next: true,
                    previus: true,
                },
                {
                    callback: (param) => { demo(3, param); },
                    slide: 3,
                    next: true,
                    previus: true,
                },
                {
                    callback: (param) => { demo(4, param); },
                    slide: 4,
                    next: true,
                    previus: true,
                },
                {
                    callback: (param) => { demo(5, param); },
                    slide: 5,
                    next: true,
                    previus: true,
                },
            ],
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
