import "../styles/main.scss";

const CONFIG = ["next", "prev", "content"];
const INTERVAL = 1.953125;

class Mordor {
    /**
     * Preparando configuracion inicial.
     *
     * @param {Objec} dom  Listado de componentes.
     * 
     * @type {void}
     */
    static set config(dom) {
        this.dom = dom;
        this.swipe = {
            position: 0,
            action: false,
        };
        this.getElementsDOM()
            .setActionButton();
    }

    /**
     * Permite identificar si existen los componentes
     * basicos para la interaccion.
     * 
     * @return this.
     */
    static getElementsDOM() {
        const DOM = this.dom;
        const KEYS = Object.keys(DOM);
        const FILTER = KEYS.filter(key => CONFIG.includes(key) && document.querySelector(DOM[key]));

        if (FILTER.length >= CONFIG.length) {
            const ELEMENTS = CONFIG.reduce((element, key) => {
                let output = {};
                output[key] = document.querySelector(DOM[key]);
                if (key === CONFIG[2]) {
                    let child = output[key].children[0] || {};
                    output.leng = output[key].children.length;
                    output.item = child.offsetWidth || 0;
                    output.moveTo = Math.ceil(output.item / 128);
                    output.scroll = output[key].scrollWidth || 0;
                }
                Object.assign(element, output);
                return element;
            }, {});
            this.swipe.action = (ELEMENTS.item > 0 && ELEMENTS.moveTo > 0);
            Object.assign(this.swipe, ELEMENTS);
        }
        return this;
    }

    /**
     * Permite mover el scroll.
     *
     * @param {boolean} isNext Indica la accion del movimiento.
     * 
     * @return void
     */
    static moveScroll(isNext = true) {
        if (this.swipe.action) {
            const SCROLL = this.swipe.content;
            this.swipe.position += (isNext) ? 1 : -1;
            const FULL_MOVETO = this.swipe.item * this.swipe.position;
            let counter = 0;
            const TIMER = setInterval(() => {
                SCROLL.scrollLeft += (isNext) ? this.swipe.moveTo : -this.swipe.moveTo;
                counter += this.swipe.moveTo;
                if (counter >= this.swipe.item) {
                    clearInterval(TIMER);
                    SCROLL.scrollLeft = FULL_MOVETO;
                }
            }, INTERVAL);
        }
    }

    /**
     * Permite colocar las acciones a los botones.
     *
     * return void.
     */
    static setActionButton() {
        this.swipe.next.addEventListener("click", () => {
            this.moveScroll();
        });
        this.swipe.prev.addEventListener("click", () => {
            console.log(this.swipe.position);
        });
    }

}

export default Mordor;
