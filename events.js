// Event handling
function connectModules() {

    for (const module of modules) {

        module.slider.addEventListener(
            "input",
            () => {

                const index =
                    Number(
                        module.slider.value
                    );

                module.setValue(
                    module.values[index]
                );

            }
        );

    }

}