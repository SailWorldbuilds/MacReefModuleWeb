// Event handling
function connectModules() {

    for (const module of modules) {

        if (module.type !== "slider") {
            continue;
        }

        module.slider.addEventListener(
            "input",
            () => {

                const index =
                    Number(
                        module.slider.value
                    );

                module.setValue(
                    module.states[index].value
                );

            }
        );

    }

}