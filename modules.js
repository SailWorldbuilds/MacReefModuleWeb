// Data
const lengthModule = new Module(
    "length",
    "Habitat Length",
    "km",
    500,
    [250,400,500,800,1000]
);

const radiusModule = new Module(
    "radius",
    "Habitat Radius",
    "km",
    16,
    [8,10,16,20,32]
);

const thicknessModule = new Module(
    "thickness",
    "Wall Thickness",
    "m",
    50,
    [10,20,30,40,50,100,150,200,250,300],
    [20,15,10,5,0,-5,-10,-15,-20,-25],
    50
);

const waterDepthModule = new Module(
    "waterDepth",
    "Water Depth",
    "m",
    10,
    [1,2,5,10,25,50,100,250,500,1000,2000,3000],
    [8,4,2,0,-2,-4,-6,-8,-10,-12,-16,-20],
    10
);

const substrateDepthModule = new Module(
    "substrateDepth",
    "Substrate Depth",
    "m",
    1,
    [0,0.25,0.5,1,2,3,5,10,25,50,100],
    [8,4,2,0,-2,-4,-6,-8,-10,-12,-15],
    1
);

const elevationModule = new Module(
    "elevation",
    "Elevation",
    "m",
    10,
    [1,2,5,10,25,50,100,250,500,1000,2000,3000],
    [8,4,2,0,-1,-2,-3,-4,-5,-6,-8,-10],
    10
);

const stabilityModule = new Module(
    "stability",
    "Stability",
    "%",
    100,
    [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
    [100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,25,20,15,10,5,0],
    100
);

const waterBalanceModule = new Module(
    "waterBalance",
    "Water Balance",
    "%",
    50,
    [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
    [20,18,16,14,12,10,8,6,4,2,0,-2,-4,-6,-8,-10,-12,-14,-16,-18,-20],
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
    waterBalanceModule
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
    rpResult
];