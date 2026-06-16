function exportConfiguration() {

    const json =
        JSON.stringify(
            modules.map(
                module =>
                    module.values.indexOf(
                        module.value
                    )
            )
        );

    return "MR2-" + btoa(json);

}

function updateConfigurationCode() {

    document.getElementById(
        "configurationCode"
    ).textContent =
        exportConfiguration();

}

function copyConfiguration() {

    navigator.clipboard.writeText(
        exportConfiguration()
    );

}