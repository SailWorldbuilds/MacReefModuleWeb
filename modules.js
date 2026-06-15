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

const soilDepthModule = new Module(
    "soilDepth",
    "Soil Depth",
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
    soilDepthModule,
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

const soilPressureResult =
    new Result(
        "soilPressure",
        "Soil Pressure",
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

const results = [
    areaResult,
    hoopStressResult,
    waterPressureResult,
    soilPressureResult,
    airPressureResult,
    airDepthResult,
    totalStressResult
];