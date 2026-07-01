function importConfiguration(code) {

    code = code.trim();

    if (
        !code.startsWith(
            "MR2-"
        )
    ) {

        throw new Error();

    }

    const bytes =
        Uint8Array.from(
            atob(
                code.slice(4)
            ),
            c => c.charCodeAt(0)
        );

    let packed = 0n;

    for (
        let i = bytes.length - 1;
        i >= 0;
        i--
    ) {

        packed <<= 8n;
        packed |= BigInt(
            bytes[i]
        );

    }

    for (const module of modules) {

        const bits =
            bitsNeeded(
                module
            );

        const mask =
            (1n << BigInt(bits))
            - 1n;

        const index =
            Number(
                packed & mask
            );

        packed >>= BigInt(
            bits
        );

        if (
            index >= 0
            &&
            index < module.states.length
        ) {

            module.setValue(
                module.states[index].value,
                false
            );

        }

    }

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