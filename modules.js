// Data
const lengthModule = new Module(
    "length",
    "Habitat Length",
    "km",
    500,
    [
        250,
        400,
        500,
        800,
        1000
    ]
);

const radiusModule = new Module(
    "radius",
    "Habitat Radius",
    "km",
    16,
    [
        8,
        10,
        16,
        20,
        32
    ]
);

const thicknessModule = new Module(
    "thickness",
    "Wall Thickness",
    "m",
    50,
    [
        10,     // +20
        20,     // +15
        30,     // +10
        40,     // +5
        50,     // 0
        100,    // -5
        150,    // -10
        200,    // -15
        250,    // -20
        300     // -25
    ],
    [
        20,     // 10 meters
        15,     // 20 meters
        10,     // 30 meters
        5,      // 40 meters
        0,      // 50 meters (default)
        -5,     // 100 meters
        -10,    // 150 meters
        -15,    // 200 meters
        -20,    // 250 meters
        -25     // 300 meters
    ],
    50
);

const waterDepthModule = new Module(
    "waterDepth",
    "Water Depth",
    "m",
    10,
    [
        1,      // +8
        2,      // +4
        5,      // +2
        10,     // 0
        25,     // -2
        50,     // -4
        100,    // -6
        250,    // -8
        500,    // -10
        1000,   // -12
        2000,   // -16
        3000    // -20
    ],
    [
        8,      // 1 meter
        4,      // 2 meters
        2,      // 5 meters
        0,      // 10 meters (default)
        -2,     // 25 meters
        -4,     // 50 meters
        -6,     // 100 meters
        -8,     // 250 meters
        -10,    // 500 meters
        -12,    // 1000 meters
        -16,    // 2000 meters
        -20     // 3000 meters
    ],
    10
);

const substrateDepthModule = new Module(
    "substrateDepth",
    "Substrate Depth",
    "m",
    1,
    [
        0,      // +8
        0.25,   // +4
        0.5,    // +2
        1,      // 0
        2,      // -2
        3,      // -4
        5,      // -6
        10,     // -8
        25,     // -10
        50,     // -12
        100     // -15
    ],
    [
        8,      // 0 meters
        4,      // 0.25 meters
        2,      // 0.5 meters
        0,      // 1 meter (default)
        -2,     // 2 meters
        -4,     // 3 meters
        -6,     // 5 meters
        -8,     // 10 meters
        -10,    // 25 meters
        -12,    // 50 meters
        -15,    // 100 meters
    ],
    1
);

const elevationModule = new Module(
    "elevation",
    "Elevation",
    "m",
    10,
    [
        1,      // +8
        2,      // +4
        5,      // +2
        10,     // 0
        25,     // -2
        50,     // -4
        100,    // -6
        250,    // -8
        500,    // -10
        1000,   // -12
        2000,   // -16
        3000    // -20
    ],
    [
        8,      // 1 meter
        4,      // 2 meters
        2,      // 5 meters
        0,      // 10 meters (default)
        -2,     // 25 meters
        -4,     // 50 meters
        -6,     // 100 meters
        -8,     // 250 meters
        -10,    // 500 meters
        -12,    // 1000 meters
        -16,    // 2000 meters
        -20     // 3000 meters
    ],
    10
);

const stabilityModule = new Module(
    "stability",
    "stability",
    "%",
    100,
    [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
    [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,0],
    100
);

const modules = [
    lengthModule,
    radiusModule,
    thicknessModule,
    waterDepthModule,
    substrateDepthModule,
    elevationModule,
    stabilityModule
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

const surfaceGravityResult =
    new Result(
        "surfaceGravity",
        "Surface Gravity",
        "g"
    );

const trueAreaResult = new Result(
    "trueArea",
    "Actual Surface Area",
    "km²"
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
    airPressureResult,
    airDepthResult,
    totalStressResult,
    trueAreaResult,
    surfaceGravityResult,
    rpResult
];