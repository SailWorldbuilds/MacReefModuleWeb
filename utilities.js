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

function calculateSubstratePressure() {

    return (
        SUBSTRATE_DENSITY *
        substrateDepthModule.value *
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
        substrateDepthModule.value
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
        calculateSubstratePressure()
        +
        calculateAirPressure()
    );

}

function calculateSurfaceRadius() {

    return (
        radiusModule.value * 1000
        -
        thicknessModule.value
        -
        waterDepthModule.value
        -
        substrateDepthModule.value
    );

}

function calculateTrueArea() {

    return (
        2 *
        Math.PI *
        (
            calculateSurfaceRadius() / 1000
        ) *
        lengthModule.value
    );

}

function calculateSurfaceGravity() {

    return (
        GRAVITY *
        calculateSurfaceRadius()
        /
        (radiusModule.value * 1000)
    );

}

function calculateSurfaceGravityG() {

    return (
        calculateSurfaceGravity()
        /
        GRAVITY
    );

}

// Resource Points
function calculateAreaRP() {

    const area = areaResult.value;

    if (area <= 15000) return 15;
    if (area <= 30000) return 10;
    if (area <= 45000) return 5;

    return 0;
}

function calculateTotalRP() {

    const moduleRP =
        modules.reduce((sum, m) => {
            return sum + m.getRP();
        }, 0);

    return moduleRP + calculateAreaRP();
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