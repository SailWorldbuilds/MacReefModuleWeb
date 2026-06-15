// Utilities
// Math
function calculateArea(radius, length) {
    return 2 * Math.PI * radius * length;
}

function calculateHoopStress(radius) {

    return (
        MATERIAL_DENSITY * GRAVITY *radius * 1000
    );
}

function calculateWaterPressure() {

    return (
        WATER_DENSITY *
        waterDepthModule.value *
        GRAVITY *
        radiusModule.value *
        1000
        /
        thicknessModule.value
    );

}

function calculateSoilPressure() {

    return (
        SOIL_DENSITY *
        soilDepthModule.value *
        GRAVITY *
        radiusModule.value *
        1000
        /
        thicknessModule.value
    );

}

function calculateAirDepth() {

    return (
        radiusModule.value * 1000
        -
        waterDepthModule.value
        -
        soilDepthModule.value
    );

}

function calculateAirPressure() {

    return (
        AIR_DENSITY *
        calculateAirDepth()
        *
        GRAVITY *
        radiusModule.value
        * 1000
        /
        thicknessModule.value
    );

}

function calculateTotalStress() {

    return (
        calculateHoopStress(
            radiusModule.value
        )
        +
        calculateWaterPressure()
        +
        calculateSoilPressure()
        +
        calculateAirPressure()
    );

}

// Formatting
function formatNumber(
    value,
    decimals = 0
) {

    return value.toLocaleString(
        undefined,
        {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }
    );

}

// Warning
function setWarning(message) {

    warningMessage.textContent =
        message;

}