// Classes

class Module {

    constructor(
        id,
        name,
        unit,
        type,
        states,
        defaultValue = null
    ) {

        this.id = id;
        this.name = name;
        this.unit = unit;

        this.type = type;

        this.states = states;

        this.value =
            defaultValue ??
            states[0].value;

        this.previousValue =
            this.value;

        this.defaultValue =
            this.value;

        this.slider = null;
        this.display = null;
        this.rpDisplay = null;
        this.description = null;

        if (type === "slider") {

            this.min =
                states[0].value;

            this.max =
                states[
                    states.length - 1
                ].value;

        }

    }

    getCurrentState() {

        return this.states.find(
            state =>
                state.value === this.value
        );

    }

    setValue(value, update = true) {

        value = Number(value);

        const state =
            this.states.find(
                s => s.value === value
            );

        if (!state) {
            return;
        }

        this.previousValue = this.value;
        this.value = value;

        if (this.slider) {
            this.slider.value =
                this.states.findIndex(
                    s => s.value === value
                );
        }

        if (this.display) {

            if (this.type === "slider") {

                this.display.textContent =
                    `${formatNumber(
                        state.value
                    )} ${this.unit}`;

            }

            else {

                this.display.textContent =
                    state.label;

            }

        }

        if (this.rpDisplay) {

            const rp = state.rp ?? 0;

            const abs = Math.abs(rp);

            let sign = "";
            let color = "";

            if (rp < 0) {
                sign = "-";
                color = "rpNegative";
            }

            else if (rp > 0) {
                sign = "+";
                color = "rpPositive";
            }

            this.rpDisplay.innerHTML =
                `<span class="${color}">
                    ${sign}${abs} RP
                </span>`;
        }

        if (update) {
            updateEverything(this);
        }
    }
 
    getRP() {
        return (
            this.getCurrentState()
                ?.rp
            ?? 0
        );

    }

    getDescription() {

        return (
            this.getCurrentState()
                ?.description
            ?? ""
        );

    }
}

class Result {

    constructor(
        id,
        name,
        unit
    ) {

        this.id = id;
        this.name = name;
        this.unit = unit;

        this.value = 0;

        this.display = null;
    }

    setValue(value) {

        this.value = value;

        if (this.display) {

            if (this.unit === "RP") {

                this.display.textContent =
                    Math.round(-value);

            }

            else {

                this.display.textContent =
                    formatNumber(value, 2);

            }

        }

    }

}