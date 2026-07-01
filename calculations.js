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

function updateLayerPreview() {

    layerPreview.innerHTML = "";

    const size = 200;
    const center = size / 2;

    const minRadius = 8;
    const maxRadius = 32;

    const minDisplayRadius = 60;
    const maxDisplayRadius = 100;

    const outerRadius =
        minDisplayRadius
        +
        (
            radiusModule.value
            -
            minRadius
        )
        *
        (
            maxDisplayRadius
            -
            minDisplayRadius
        )
        /
        (
            maxRadius
            -
            minRadius
        );

    // Actual thicknesses (m)
    const wallThickness =
        thicknessModule.value;

    const waterThickness =
        waterDepthModule.value;

    const elevationThickness =
        elevationModule.value;

    const substrateThickness =
        substrateDepthModule.value;

    // Convert to display thicknesses (px)
    const wallDisplay =
    Math.max(
        3,
        thicknessModule.value * 0.025
    );

    const waterDisplay =
        Math.max(
            4,
            waterDepthModule.value * 0.005
        );

    const elevationDisplay =
        Math.max(
            4,
            elevationModule.value * 0.005
        );

    const substrateDisplay =
        Math.max(
            3,
            substrateDepthModule.value * 0.1
        );

    // Build radii from outside inward
    const wallRadius =
        outerRadius;

    const waterRadius =
        wallRadius
        - wallDisplay;

    const elevationRadius =
        waterRadius
        - waterDisplay;

    const substrateRadius =
        elevationRadius
        - elevationDisplay;

    const airRadius =
    Math.max(
        10,
        outerRadius
        - wallDisplay
        - waterDisplay
        - elevationDisplay
        - substrateDisplay
    );

    function drawCircle(radius, color) {

        const circle =
            document.createElementNS(
                "http://www.w3.org/2000/svg",
                "circle"
            );

        circle.setAttribute(
            "cx",
            center
        );

        circle.setAttribute(
            "cy",
            center
        );

        circle.setAttribute(
            "r",
            radius
        );

        circle.setAttribute(
            "fill",
            color
        );

        layerPreview.appendChild(
            circle
        );

    }

    // Largest → smallest
    drawCircle(
        wallRadius,
        "#666666"
    );

    drawCircle(
        waterRadius,
        "#3498db"
    );

    drawCircle(
        elevationRadius,
        "#a67c52"
    );

    drawCircle(
        substrateRadius,
        "#6ab04c"
    );

    drawCircle(
        airRadius,
        "#d6ecff"
    );

    drawCircle(
        3,
        "#ffffff"
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

function updateElevationPressure() {

    elevationPressureResult.setValue(
        calculateElevationPressure() / 1e6
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

function updateSeaLevelGravity() {

    seaLevelGravityResult.setValue(
        calculateSeaLevelGravityG()
    );

}

function updateMountainGravity() {

    mountainGravityResult.setValue(
        calculateMountainGravityG()
    );

}

function updateTrueArea() {

    trueAreaResult.setValue(
        calculateTrueArea()
    );

}

function updateVisibility() {

    visibilityResult.setValue(
        calculateMaximumDepthVisibility()
    );

}

function updateOptionModule(
    module
) {

    if (!module.radios) {
        return;
    }

    let highestValidIndex = 0;

    module.states.forEach(

        (
            state,
            index
        ) => {

            const enabled =
                !state.requirement
                ||
                state.requirement();

            if (enabled) {

                highestValidIndex =
                    index;

            }

            module.radios[index]
                .radio.disabled =
                    !enabled;

            module.radios[index]
                .text.textContent =
                    enabled
                        ? state.label
                        : `🔒 ${state.label} (${state.requirementText})`;

        }

    );

    const currentIndex =
        module.states.findIndex(
            state => state.value === module.value
        );

    if (currentIndex > highestValidIndex) {

        module.setValue(
            module.states[highestValidIndex].value,
            false
        );

        module.radios.forEach(
            entry =>
                entry.radio.checked = false
        );

        module.radios[
            highestValidIndex
        ].radio.checked = true;

       warningMessage.innerHTML =
        `${module.name} was reduced to ${
            module.states[
                highestValidIndex
            ].label
        } because its requirements are no longer met.`;
    }
}

function updateModuleRequirements() {

    for (const module of modules) {

        if (module.type !== "option") {
            continue;
        }

        updateOptionModule(module);

    }

}

function updateRP() {
    rpResult.setValue(
        calculateTotalRP()
    );
}