// Classes

class Module {

    constructor(
        id,
        name,
        unit,
        value,
        values
    ) {

        this.id = id;
        this.name = name;
        this.unit = unit;

        this.value = value;
        this.previousValue = value;
        this.values = values;

        this.min = values[0];
        this.max = values[values.length - 1];

        this.slider = null;
        this.display = null;
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

        if (update) {
            updateEverything(this);
        }
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

            this.display.textContent =
                formatNumber(value, 2);

        }

    }

}