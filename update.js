function updateEverything(changedModule = null) {
    constrainStructure(changedModule);
    constrainStress(changedModule);
    updateArea();
    updateHoopStress();
    updateWaterPressure();
    updateSoilPressure();
    updateAirDepth();
    updateAirPressure();
    updateTotalStress();
}