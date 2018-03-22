class OrcaSlide {
    /**
     * Genera la transicion de los sliders.
     * 
     * @param  {Boolean} isNext Optional indica el tipo de accion.
     * 
     * @return void.
     */
    static animateSlide(isNext = true) {
        const { 
            active,
            itemWidth,
            items,
            moveTo,
            time,
        } = this.configSlide;

        const MOVE_TO = (isNext) ? moveTo : -moveTo;

        if (active) {
            this.configSlide.position += (isNext) ? 1 : -1;
            this.configSlide.active = false;
            let counter = 0;
            const TIMER = setInterval(() => {
                this.moveToScroll(MOVE_TO);
                counter += moveTo;
                if (counter >= itemWidth) {
                    clearInterval(TIMER);
                    const FULL_MOVE_TO = itemWidth * this.configSlide.position;
                    this.moveToScroll(FULL_MOVE_TO, false);
                    this.configSlide.active = true;
                }
            }, time);
        }
    }

    /**
     * Permite realizar el movimiento del scroll.
     * 
     * @param  {number} pixels Numero de pixeles a desplazar.
     * @param  {Boolean} isAdd (Optiona) indica si los piexeles se agregan a la 
     *                                   cuenta actual.
     *                                   
     * @return void.
     */
    static moveToScroll(pixels, isAdd = true) {
        const { contentItem } = this.configSlide;
        if (isAdd) {
            contentItem.scrollLeft += pixels;
        } else {
            contentItem.scrollLeft = pixels;
        }
    }

    /**
     * Se carga la configuracion inicial.
     * 
     * @param {Object} config  configuracion inicial.
     *
     * @return void.
     */
    static set config(config) {
        this.configSlide = {
            arrowNext: "",
            arrowPrevious: "",
            contentItem: "",
            time: 1,
            isInfinite: false,
            position: 0,
            active: false,
        };
        Object.assign(this.configSlide, config);
        this.validateConfig
            .setActionButton;
    }

    /**
     * Asigna los eventos a las flechas.
     *
     * @return void.
     */
    static get setActionButton() {
        const KEYS = [
            "arrowNext", 
            "arrowPrevious"
        ];
        KEYS.forEach((button) => {
            const IS_NEXT = (button === "arrowNext");
            const BUTTON = this.configSlide[button];
            BUTTON.addEventListener("click", () => {
                let {
                    arrowNext,
                    position,
                    items,
                    isInfinite,
                    itemWidth 
                } = this.configSlide;
                position += (IS_NEXT) ? 1 : -1;
                if (position >= 0 && position <= items) {
                    this.animateSlide(IS_NEXT);
                } else if (items < position || position < 0) {
                    if (isInfinite) {
                        const SCROLL = (position < 0) ? (items * itemWidth) : 0;
                        this.moveToScroll(SCROLL, false);
                        this.configSlide.position = (position < 0) ? items : 0;
                        this.configSlide.active = true;
                    } else {
                        this.displayToggle(arrowNext);
                    }
                }
            });
        });
        return;
    }
    
    static displayToggle(element) {
        const ELEMENT = element;
        const DISPLAY = ELEMENT.style.display || "block";
        ELEMENT.style.display = (DISPLAY === "block") ? "none" : "";
    }
    
    /**
     * Validacion de la configuracion base.
     * 
     * @type {Object} Resive la configuracion base.
     *
     * @return self Fluent interface.
     */
    static get validateConfig() {
        const KEYS = [
            "arrowNext", 
            "arrowPrevious", 
            "contentItem",
        ];

        KEYS.forEach((item) => {
            const SELECTOR = this.configSlide[item];
            const ELEMENT = document.querySelector(SELECTOR);

            if (ELEMENT) {
                this.configSlide[item] = ELEMENT;
                if (item === "contentItem") {
                    const ITEM = ELEMENT.children[0] || {};
                    const ITEM_WIDTH = ITEM.offsetWidth || 0;
                    const NEW_CONFIG = {
                        items: ELEMENT.children.length - 1,
                        itemWidth: ITEM_WIDTH,
                        moveTo: Math.ceil(ITEM_WIDTH / 256),
                        scrollWidth: ELEMENT.scrollWidth || 0,
                        time: (this.configSlide.time * 1000) / 512,
                    };
                    this.configSlide.active = (NEW_CONFIG.items > 0 && NEW_CONFIG.moveTo > 0);
                    Object.assign(this.configSlide, NEW_CONFIG);
                }
            }
        });
        return this;
    }
}

export default OrcaSlide;
