function initializeModule(module) {

    module.display =
        document.getElementById(
            `${module.id}Display`
        );

    module.rpDisplay =
        document.getElementById(
            `${module.id}RPCost`
        );

    module.description =
        document.getElementById(
            `${module.id}Description`
        );

    if (module.type === "option") {

        const container =
            document.getElementById(
                `${module.id}Options`
            );

        if (!container) {
            return;
        }

        module.container =
            container;

        module.radios = [];

        module.states.forEach(

            (
                state,
                index
            ) => {

                const label =
                    document.createElement(
                        "label"
                    );

                const radio =
                    document.createElement(
                        "input"
                    );

                radio.type =
                    "radio";

                radio.name =
                    module.id;

                radio.value =
                    state.value;

                if (
                    state.value ===
                    module.value
                ) {

                    radio.checked =
                        true;

                }

                radio.addEventListener(
                    "change",
                    () =>
                        module.setValue(
                            state.value
                        )
                );

                label.appendChild(
                    radio
                );

                const text =
                    document.createElement(
                        "span"
                    );

                text.textContent =
                    state.label;

                label.appendChild(
                    text
                );

                container.appendChild(
                    label
                );

                container.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                module.radios.push({
                    radio,
                    text
                });

            }

        );

    }

    if (module.type === "slider") {

        module.slider =
            document.getElementById(
                `${module.id}Slider`
            );

        module.slider.min = 0;

        module.slider.max =
            module.states.length - 1;

        module.slider.step = 1;

    }
    
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
