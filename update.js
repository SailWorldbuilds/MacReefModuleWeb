function updateEverything(changedModule = null) {
    constrainStructure(changedModule);
    constrainStress(changedModule);
    updateArea();
    updateHabitatPreview();
    updateHoopStress();
    updateWaterPressure();
    updateSubstratePressure();
    updateAirDepth();
    updateAirPressure();
    updateTotalStress();
    updateTrueArea();
    updateSurfaceGravity();
    updateRP();
    updateConfigurationCode();
}