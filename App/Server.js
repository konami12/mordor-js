import Express from "express";
import Path from "path";

// tienen que trabajar en conjunto
import Config from "./core/config.js";

const APP = Express();
const VIEWS = Path.resolve(__dirname, Config.path_views);

APP.use(Express.static(Config.path_public));

APP.use("/", (request, response) => {
    response.status(200);
    response.sendFile(`${VIEWS}/index.html`);
});

APP.listen( Config.port, Config.domain ,(error) => {
    console.log("Iniciando el servidor :)");
    if (error) {
        HELPERS.msg(error, 'e');
        process.exit(1);
        return;
    } else {
        console.log(`Servidor listo`);
    }
});//APP.listen