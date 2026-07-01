// Constraints

// Radius/Length Constraint
function constrainStructure(changedModule) {

    if (!changedModule) {
        return;
    }

    if (
        changedModule !== lengthModule &&
        changedModule !== radiusModule
    ) {
        return;
    }

    const adjustedModule =
        changedModule === lengthModule
            ? radiusModule
            : lengthModule;

    let index =
        adjustedModule.states.findIndex(
            state =>
                state.value === adjustedModule.value
        );

    while (index >= 0) {

        const candidate =
            adjustedModule.states[index].value;

        const product =
            changedModule.value *
            candidate;

        if (product <= MAX_AREA) {

            adjustedModule.setValue(
                candidate,
                false
            );

            return;
        }

        index--;
    }

    adjustedModule.setValue(
        adjustedModule.min,
        false
    );
}

function constrainStress(changedModule) {

    warningMessage.textContent = "";

    if (!changedModule) {
        return;
    }

    if (
        calculateTotalStress() <= MAX_STRESS
    ) {
        return;
    }

    changedModule.setValue(
        changedModule.previousValue,
        false
    );

    if (
        changedModule === thicknessModule
    ) {

        warningMessage.innerHTML =
            "Hoop Stress cannot exceed 2,000 MPa.<br>" + 
            "Thinner habitat wall thickness increases hoop stress.";

    }

    else {

        warningMessage.innerHTML =
            "Hoop Stress cannot exceed 2,000 MPa.<br>" +
            "Larger habitat radius, deeper substrate, deeper water, and higher elevation increase hoop stress.";

    }

}