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

function calculateGravityAt(radiusFromAxis) {
    const R = radiusModule.value * 1000;
    return GRAVITY * (radiusFromAxis / R);
}

function calculateWaterCentroidRadius() {

    return (
        radiusModule.value * 1000
        -
        thicknessModule.value
        -
        waterDepthModule.value / 2
    );

}

function calculateElevationCentroidRadius() {

    return (
        radiusModule.value * 1000
        -
        thicknessModule.value
        -
        waterDepthModule.value
        -
        elevationModule.value / 2
    );

}

function calculateSubstrateCentroidRadius() {

    return (
        radiusModule.value * 1000
        -
        thicknessModule.value
        -
        waterDepthModule.value
        -
        substrateDepthModule.value / 2
    );

}

function calculateAirCentroidRadius() {

    return (
        calculateAirDepth() / 2
    );

}

function calculateWaterPressure() {
    return WATER_DENSITY *
           waterDepthModule.value *
           calculateGravityAt(
               calculateWaterCentroidRadius()
           );
}

function calculateShellThickness() {

    return (
        SUBSTRATE_DENSITY *
        substrateDepthModule.value *
        calculateGravityAt(
            calculateElevationCentroidRadius()
        ) *
        elevationModule.value
        /
        2e9
    );

}

function calculateElevationPressure() {

    return (
        MATERIAL_DENSITY *
        calculateShellThickness() *
        calculateGravityAt(
            calculateElevationCentroidRadius()
        )
    );

}

function calculateSubstratePressure() {
    return SUBSTRATE_DENSITY *
           substrateDepthModule.value *
           calculateGravityAt(
               calculateSubstrateCentroidRadius()
           );
}

function calculateAirDepth() {

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

function calculateAirPressure() {
    return AIR_DENSITY *
           calculateAirDepth() *
           calculateGravityAt(
               calculateAirCentroidRadius()
           );
}

function calculateTotalStress() {

    const R = radiusModule.value * 1000;
    const t = thicknessModule.value;

    const externalPressure =
        calculateWaterPressure() +
        calculateSubstratePressure() +
        calculateElevationPressure() +
        calculateAirPressure();

    return calculateHoopStress(radiusModule.value)
         + externalPressure * (R / t);
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

function calculateSeaLevelRadius() {

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

function calculateSeaLevelGravity() {

    return calculateGravityAt(
        calculateSeaLevelRadius()
    );

}

function calculateSeaLevelGravityG() {

    return (
        calculateSeaLevelGravity()
        / GRAVITY
    );

}

function calculateMountainRadius() {

    return (
        radiusModule.value * 1000
        -
        thicknessModule.value
        -
        waterDepthModule.value
        -
        elevationModule.value
        -
        substrateDepthModule.value
    );

}

function calculateMountainGravity() {

    return calculateGravityAt(
        calculateMountainRadius()
    );

}

function calculateMountainGravityG() {

    return (
        calculateMountainGravity()
        / GRAVITY
    );

}

function calculateMaximumDepthVisibility() {

    const lightFraction =
        lightModule.value / 100;

    return (
        -Math.log(
            0.01 / lightFraction
        )
        /
        turbidityModule.value
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
        modules.reduce(
            (sum, m) => {
                return sum + m.getRP();
            },
            0
        );

    return (
        moduleRP + calculateAreaRP()
    );

}

// Bit Calculation
function bitsNeeded(module) {

    return Math.ceil(
        Math.log2(
            module.states.length
        )
    );

}

// Formatting
function formatNumber(value, decimals = 2) {

    return value.toLocaleString(
        undefined,
        {
            minimumFractionDigits: 0,
            maximumFractionDigits: decimals
        }
    );

}

// Warning
function setWarning(message) {

    warningMessage.textContent =
        message;

}