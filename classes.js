// Classes

class Module {

    constructor(
    id,
    name,
    unit,
    value,
    values,
    rpCosts = null,
    defaultValue = value
    ) {

        this.id = id;
        this.name = name;
        this.unit = unit;

        this.value = value;
        this.previousValue = value;
        this.values = values;

        this.rpCosts = rpCosts;
    this.defaultValue = defaultValue;

        this.min = values[0];
        this.max = values[values.length - 1];

        this.slider = null;
        this.display = null;
        this.rpDisplay = null;
    }

    setValue(value, update = true) {

        value = Number(value);

        if (!this.values.includes(value)) {
            return;
        }

        this.previousValue = this.value;
        this.value = value;

        if (this.slider) {
            this.slider.value =
                this.values.indexOf(value);
        }

        if (this.display) {
            this.display.textContent =
                `${formatNumber(value)} ${this.unit}`;
        }

        if (this.rpDisplay && this.rpCosts) {

            const rp = this.getRP();

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
        const index = this.values.indexOf(this.value);
        return this.rpCosts?.[index] ?? 0;
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