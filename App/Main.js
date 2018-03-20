import Mordor from "./core/mordor";
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        Mordor.config = {
            prev: "#arrow_previus",
            next: "#arrow_next",
            content: "#swipe",
        };
    }
};
