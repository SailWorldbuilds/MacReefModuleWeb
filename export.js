function exportConfiguration() {

    let packed = 0n;
    let shift = 0n;

    for (const module of modules) {

        const index =
            module.values.indexOf(
                module.value
            );

        packed |=
            BigInt(index)
            << shift;

        shift += BigInt(
            bitsNeeded(module)
        );

    }

    const bytes = [];

    while (packed > 0n) {

        bytes.push(
            Number(
                packed & 255n
            )
        );

        packed >>= 8n;

    }

    const encoded =
        btoa(
            String.fromCharCode(
                ...bytes
            )
        );

    return "MR2-" + encoded;

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