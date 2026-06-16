function updateEverything(changedModule = null) {
    constrainStructure(changedModule);
    constrainStress(changedModule);
    updateArea();
    updateHoopStress();
    updateWaterPressure();
    updateSubstratePressure();
    updateAirDepth();
    updateAirPressure();
    updateTotalStress();
    updateTrueArea();
    updateSurfaceGravity();

    updateConfigurationCode();
}