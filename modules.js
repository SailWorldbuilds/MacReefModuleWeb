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
        10,
        20,
        30,
        40,
        50,
        100,
        150,
        200,
        250,
        300
    ]
);

const waterDepthModule = new Module(
    "waterDepth",
    "Water Depth",
    "m",
    1,
    [
        1,
        2,
        3,
        4,
        5,
        10,
        20,
        30,
        40,
        50,
        75,
        100,
        150,
        200,
        250,
        300,
        400,
        500,
        750,
        1000,
        1250,
        1500,
        2000,
        2500,
        3000
    ]
);

const substrateDepthModule = new Module(
    "substrateDepth",
    "Substrate Depth",
    "m",
    1,
    [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        15,
        20,
        25
    ]
);

const modules = [
    lengthModule,
    radiusModule,
    thicknessModule,
    waterDepthModule,
    substrateDepthModule,
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

const results = [
    areaResult,
    hoopStressResult,
    waterPressureResult,
    substratePressureResult,
    airPressureResult,
    airDepthResult,
    totalStressResult,
    trueAreaResult,
    surfaceGravityResult
];