// Calculations
function updateArea() {

    areaResult.setValue(
        calculateArea(
            radiusModule.value,
            lengthModule.value
        )
    );
}

function updateHoopStress() {

    const stress =
        calculateHoopStress(
            radiusModule.value
        ) / 1e6;

    hoopStressResult.setValue(
        stress
    );

}

function updateWaterPressure() {

    waterPressureResult.setValue(
        calculateWaterPressure() / 1e6
    );

}

function updateSubstratePressure() {

    substratePressureResult.setValue(
        calculateSubstratePressure() / 1e6
    );

}

function updateAirDepth() {

    airDepthResult.setValue(
        calculateAirDepth()
    );

}

function updateAirPressure() {

    airPressureResult.setValue(
        calculateAirPressure() / 1e6
    );

}

function updateTotalStress() {

    totalStressResult.setValue(
        calculateTotalStress() / 1e6
    );

}

function updateSurfaceGravity() {

    surfaceGravityResult.setValue(
        calculateSurfaceGravityG()
    );

}

function updateTrueArea() {

    trueAreaResult.setValue(
        calculateTrueArea()
    );

}