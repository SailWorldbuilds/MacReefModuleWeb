// Calculations
function updateArea() {

    areaResult.setValue(
        calculateArea(
            radiusModule.value,
            lengthModule.value
        )
    );
    const rp = calculateAreaRP();

    if (areaResult.rpDisplay) {

        areaResult.rpDisplay.innerHTML =
            rp > 0
                ? `<span class="rpPositive">
                    +${rp} RP
                </span>`
                : "";
    }
    
}

function updateHabitatPreview() {

    const radius = radiusModule.value;
    const length = lengthModule.value;

    const height = 2 * Math.PI * radius;

    const containerWidth =
        habitatPreviewContainer.clientWidth;

    const scaleX = containerWidth / 1000; // tune factor
    const scaleY = 1; // adjust if needed

    habitatPreview.style.width =
        `${length * scaleX}px`;

    habitatPreview.style.height =
        `${height * scaleY}px`;
    
    const rectHeight =
        height * scaleY;

    const rectTop =
        100 - rectHeight / 2; // container height is 200px

    circumferenceLabel.textContent =
        `${formatNumber(height, 2)} km`;

    circumferenceLabel.style.top =
        `${rectTop + rectHeight / 2}px`;

    circumferenceLabel.style.left =
        "10px";

    circumferenceLabel.style.transform =
        "translateY(-50%)";

    lengthLabel.textContent =
        `${formatNumber(length)} km`;

    lengthLabel.style.left =
        `${(length * scaleX) / 2}px`;

    lengthLabel.style.top =
        `${rectTop + rectHeight * 0.75}px`;

    lengthLabel.style.transform =
        "translateX(-50%)";
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

function updateRP() {
    rpResult.setValue(
        calculateTotalRP()
    );
}