function initializeModule(module) {

    module.slider =
        document.getElementById(
            `${module.id}Slider`
        );

    module.display =
        document.getElementById(
            `${module.id}Display`
        );

    module.rpDisplay =
        document.getElementById(
            `${module.id}RPCost`
        );

    module.slider.min = 0;
    module.slider.max =
        module.values.length - 1;

    module.slider.step = 1;

    module.setValue(
        module.value,
        false
    );

}

function initializeResult(result) {

    result.display =
        document.getElementById(
            `${result.id}Display`
        );

    result.rpDisplay =
        document.getElementById(`${result.id}RPCost`);

    if (result.rpDisplay) {
       result.rpDisplay.classList.add("rpCost");
}

}

for (const module of modules) {
    initializeModule(module);
}

for (const result of results) {
    initializeResult(result);
}

const habitatPreview =
    document.getElementById("habitatPreview");

const habitatPreviewContainer =
    document.getElementById("habitatPreviewContainer");

const circumferenceLabel =
    document.getElementById(
        "circumferenceLabel"
    );

const lengthLabel =
    document.getElementById(
        "lengthLabel"
    );

const layerPreview =
    document.getElementById(
        "layerPreview"
    );

const warningMessage =
    document.getElementById(
        "warningMessage"
    );

connectModules();
updateEverything();
