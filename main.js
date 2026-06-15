function initializeModule(module) {

    module.slider =
        document.getElementById(
            `${module.id}Slider`
        );

    module.display =
        document.getElementById(
            `${module.id}Display`
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

}

for (const module of modules) {
    initializeModule(module);
}

for (const result of results) {
    initializeResult(result);
}

const warningMessage =
    document.getElementById(
        "warningMessage"
    );

connectModules();
updateEverything();
