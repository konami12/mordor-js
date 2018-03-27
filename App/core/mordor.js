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
     * Oculta las flechas.
     *
     * @param {number} element posicion del elemento.
     *
     * @return {void}
     */
    static displayArrow(index) {
        const { arrowNext, arrowPrevious, items } = this.configSlide;
        const DISPLAY_PREVIUS = (index > 0) ? "" : "none";
        const DISPLAY_NEXT = (items === index) ? "none" : "";
        arrowNext.style.display = DISPLAY_NEXT;
        arrowPrevious.style.display = DISPLAY_PREVIUS;
    }

    /**
     * Permite ocultar y mostar un elemento.
     *
     * @param  {Object} element Referencia a elemento del dom.
     *
     * @return {void}
     */
    static displayToggle(element) {
        const ELEMENT = element;
        const DISPLAY = ELEMENT.style.display || "block";
        ELEMENT.style.display = (DISPLAY === "block") ? "none" : "";
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

    // ================================================================= //
    //                         Setter and Getter                         //
    // ================================================================= //

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
        this.validateConfig.setActionButton;
        this.startTouch();
    }

    static startTouch() {
        const DEVICE = this.isMobile;
        let startX = 0;
        const { contentItem } = this.configSlide;
        if (DEVICE !== "desktop") {
            contentItem.addEventListener("toucstart", (action) => {
                const SWIPE = action.changedTouches[0];
                startX = parseInt(SWIPE.clientX, 10);
                action.preventDefault();
            });

            contentItem.addEventListener("touchmove", (action) => {
                const SWIPE = action.changedTouches[0];
                const CLIENT_X = parseInt(SWIPE.clientX, 10) - startX;
                this.moveToScroll(CLIENT_X, false);
                action.preventDefault();
            });
        }
    }

    /**
     * Permite manejar la logica de cuando el carousel es infinito.
     *
     * @param {number} index  Posicion actual del slider.
     *
     * @return {void}
     */
    static set isInfinite(index) {
        const {
            isInfinite,
            items,
            itemWidth,
        } = this.configSlide;
        const RELOAD = (index < 0 || index > items) && index;
        if (isInfinite) {
            const INFINITE = (index < 0 || index > items);
            if (INFINITE) {
                const SCROLL = (RELOAD < 0) ? (items * itemWidth) : 0;
                this.moveToScroll(SCROLL, false);
                this.configSlide.position = (RELOAD < 0) ? items : 0;
                this.configSlide.active = true;
            }
        } else {
            this.displayArrow(index);
        }
    }

    /**
     * Permite identificar el tipo de dispositivo.
     *
     * @type {string}
     */
    static get isMobile() {
        const DEVICE = (typeof navigator !== "undefined")
            ? navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)
            : "desktop";
        const WIDTH_SCREEN = (typeof window !== "undefined")
            ? window.innerWidth
            : "1024";
        let request = "desktop";

        if (DEVICE != null) {
            if (WIDTH_SCREEN <= 768) {
                request = "phone";
            } else if (WIDTH_SCREEN > 768 && WIDTH_SCREEN <= 1024) {
                request = "tablet";
            }
        }
        return request;
    }

    /**
     * Asigna los eventos a las flechas.
     *
     * @return void.
     */
    static get setActionButton() {
        const KEYS = [
            "arrowNext",
            "arrowPrevious",
        ];
        KEYS.forEach((button) => {
            const IS_NEXT = (button === "arrowNext");
            const BUTTON = this.configSlide[button];
            BUTTON.addEventListener("click", () => {
                const { items } = this.configSlide;
                let { position } = this.configSlide;
                position += (IS_NEXT) ? 1 : -1;
                if (position >= 0 && position <= items) {
                    this.animateSlide(IS_NEXT);
                    this.isInfinite = position;
                } else if (items < position || position < 0) {
                    this.isInfinite = position;
                }
            });
        });
        return 0;
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
                    if (!this.configSlide.isInfinite) {
                        this.displayToggle(this.configSlide.arrowPrevious);
                    }
                }
            }
        });
        return this;
    }
}

export default OrcaSlide;
