// Data
const lengthModule = new Module(
    "length",
    "Habitat Length",
    "km",
    "slider",
    [
        { value: 250 },
        { value: 400 },
        { value: 500 },
        { value: 800 },
        { value: 1000 }
    ],
    500
);

const radiusModule = new Module(
    "radius",
    "Habitat Radius",
    "km",
    "slider",
    [
        { value: 8 },
        { value: 10 },
        { value: 16 },
        { value: 20 },
        { value: 32 }
    ],
    16
);

const thicknessModule = new Module(
    "thickness",
    "Wall Thickness",
    "m",
    "slider",
    [
        { value: 10, rp: 20 },
        { value: 20, rp: 15 },
        { value: 30, rp: 10 },
        { value: 40, rp: 5 },
        { value: 50, rp: 0 },
        { value: 100, rp: -5 },
        { value: 150, rp: -10 },
        { value: 200, rp: -15 },
        { value: 250, rp: -20 },
        { value: 300, rp: -25 }
    ],
    50
);

const waterDepthModule = new Module(
    "waterDepth",
    "Water Depth",
    "m",
    "slider",
    [
        { value: 1,    rp: 8 },
        { value: 2,    rp: 4 },
        { value: 5,    rp: 2 },
        { value: 10,   rp: 0 },
        { value: 25,   rp: -2 },
        { value: 50,   rp: -4 },
        { value: 100,  rp: -6 },
        { value: 250,  rp: -8 },
        { value: 500,  rp: -10 },
        { value: 1000, rp: -12 },
        { value: 2000, rp: -16 },
        { value: 3000, rp: -20 }
    ],
    10
);

const substrateDepthModule = new Module(
    "substrateDepth",
    "Substrate Depth",
    "m",
    "slider",
    [
        { value: 0,    rp: 8 },
        { value: 0.25, rp: 4 },
        { value: 0.5,  rp: 2 },
        { value: 1,    rp: 0 },
        { value: 2,    rp: -2 },
        { value: 3,    rp: -4 },
        { value: 5,    rp: -6 },
        { value: 10,   rp: -8 },
        { value: 25,   rp: -10 },
        { value: 50,   rp: -12 },
        { value: 100,  rp: -15 }
    ],
    1
);

const elevationModule = new Module(
    "elevation",
    "Elevation",
    "m",
    "slider",
    [
        { value: 1,    rp: 8 },
        { value: 2,    rp: 4 },
        { value: 5,    rp: 2 },
        { value: 10,   rp: 0 },
        { value: 25,   rp: -1 },
        { value: 50,   rp: -2 },
        { value: 100,  rp: -3 },
        { value: 250,  rp: -4 },
        { value: 500,  rp: -5 },
        { value: 1000, rp: -6 },
        { value: 2000, rp: -8 },
        { value: 3000, rp: -10 }
    ],
    10
);

const stabilityModule = new Module(
    "stability",
    "Stability",
    "%",
    "slider",
    [
        { value: 0,   rp: 100 },
        { value: 5,   rp: 95 },
        { value: 10,  rp: 90 },
        { value: 15,  rp: 85 },
        { value: 20,  rp: 80 },
        { value: 25,  rp: 75 },
        { value: 30,  rp: 70 },
        { value: 35,  rp: 65 },
        { value: 40,  rp: 60 },
        { value: 45,  rp: 55 },
        { value: 50,  rp: 50 },
        { value: 55,  rp: 45 },
        { value: 60,  rp: 40 },
        { value: 65,  rp: 35 },
        { value: 70,  rp: 30 },
        { value: 75,  rp: 25 },
        { value: 80,  rp: 20 },
        { value: 85,  rp: 15 },
        { value: 90,  rp: 10 },
        { value: 95,  rp: 5 },
        { value: 100, rp: 0 }
    ],
    100
);

const waterBalanceModule = new Module(
    "waterBalance",
    "Water Balance",
    "%",
    "slider",
    [
        { value: 0,   rp: 20 },
        { value: 5,   rp: 18 },
        { value: 10,  rp: 16 },
        { value: 15,  rp: 14 },
        { value: 20,  rp: 12 },
        { value: 25,  rp: 10 },
        { value: 30,  rp: 8 },
        { value: 35,  rp: 6 },
        { value: 40,  rp: 4 },
        { value: 45,  rp: 2 },
        { value: 50,  rp: 0 },
        { value: 55,  rp: -2 },
        { value: 60,  rp: -4 },
        { value: 65,  rp: -6 },
        { value: 70,  rp: -8 },
        { value: 75,  rp: -10 },
        { value: 80,  rp: -12 },
        { value: 85,  rp: -14 },
        { value: 90,  rp: -16 },
        { value: 95,  rp: -18 },
        { value: 100, rp: -20 }
    ],
    50
);

const turbidityModule = new Module(
    "turbidity",
    "Turbidity",
    "",
    "slider",
    [
        { value: 10,   rp: 0 },
        { value: 2,    rp: -2 },
        { value: 0.5,  rp: -4 },
        { value: 0.1,  rp: -6 },
        { value: 0.05, rp: -8 },
        { value: 0.02, rp: -10 }
    ],
    10
);

const caveModule = new Module(
    "cave",
    "Subterranean Terraforming",
    "",
    "option",
    [
        {
            value: 0,
            label: "None",
            rp: 0
        },
        {
            value: 1,
            label: "Tier I",
            rp: -5,
            requirement: () =>
                substrateDepthModule.value >= 5,
            requirementText:
                "requires 5 m substrate"
        },
        {
            value: 2,
            label: "Tier II",
            rp: -10,
            requirement: () =>
                substrateDepthModule.value >= 25,
            requirementText:
                "requires 25 m substrate"
        },
        {
            value: 3,
            label: "Tier III",
            rp: -20,
            requirement: () =>
                substrateDepthModule.value >= 100,
            requirementText:
                "requires 100 m substrate"
        }
    ],
    0
);

const lightModule = new Module(
    "light",
    "Light",
    "%",
    "slider",
    [
        { value: 5,   rp: 5 },
        { value: 10,  rp: 4 },
        { value: 20,  rp: 3 },
        { value: 30,  rp: 2 },
        { value: 40,  rp: 1 },
        { value: 50,  rp: 0 },
        { value: 60,  rp: -1 },
        { value: 70,  rp: -2 },
        { value: 80,  rp: -3 },
        { value: 90,  rp: -4 },
        { value: 100, rp: -5 }
    ],
    50
);

const modules = [
    lengthModule,
    radiusModule,
    thicknessModule,
    waterDepthModule,
    substrateDepthModule,
    elevationModule,
    stabilityModule,
    waterBalanceModule,
    caveModule,
    turbidityModule,
    lightModule
];

// Results
const areaResult = new Result(
    "area",
    "Surface Area",
    "km²"
);

const hoopStressResult = new Result(
    "hoopStress",
    "Hoop Stress",
    "MPa"
);

const waterPressureResult =
    new Result(
        "waterPressure",
        "Water Pressure",
        "MPa"
    );

const substratePressureResult =
    new Result(
        "substratePressure",
        "Substrate Pressure",
        "MPa"
    );

const elevationPressureResult =
    new Result(
        "elevationPressure",
        "Elevation Pressure",
        "MPa"
    );

const airDepthResult =
    new Result(
        "airDepth",
        "Atmosphere Height",
        "m"
    );

const airPressureResult =
    new Result(
        "airPressure",
        "Air Pressure",
        "MPa"
    );

const totalStressResult =
    new Result(
        "totalStress",
        "Total Hoop Stress",
        "MPa"
    );

const seaLevelGravityResult =
    new Result(
        "seaLevelGravity",
        "Sea Level Gravity",
        "g"
    );

const mountainGravityResult =
    new Result(
        "mountainGravity",
        "Highest Elevation Gravity",
        "g"
    );

const trueAreaResult = new Result(
    "trueArea",
    "Actual Surface Area",
    "km²"
    );

const visibilityResult =
    new Result(
        "visibility",
        "Maximum Depth Visibility",
        "m"
    );

const rpResult = new Result(
    "rp",
    "Resource Points",
    "RP"
);

const results = [
    areaResult,
    hoopStressResult,
    waterPressureResult,
    substratePressureResult,
    elevationPressureResult,
    airPressureResult,
    airDepthResult,
    totalStressResult,
    trueAreaResult,
    seaLevelGravityResult,
    mountainGravityResult,
    visibilityResult,
    rpResult
];