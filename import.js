function importConfiguration(code) {

    code =
        code.trim();

    if (
        !code.startsWith(
            "MR2-"
        )
    ) {

        throw new Error();

    }

    const indices =
        JSON.parse(
            atob(
                code.slice(4)
            )
        );

    modules.forEach(
        (module, i) => {

            const index =
                indices[i];

            if (
                Number.isInteger(index)
                &&
                index >= 0
                &&
                index < module.values.length
            ) {

                module.setValue(
                    module.values[index],
                    false
                );

            }

        }
    );

    updateEverything();

}

function loadConfiguration() {

    const code =
        document.getElementById(
            "configInput"
        ).value;

    try {

        importConfiguration(
            code
        );

    }

    catch {

        alert(
            "Invalid configuration code."
        );

    }

}