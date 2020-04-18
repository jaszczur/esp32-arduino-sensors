#include "Sensors.hpp"

int Sensors::getWaterLevel() {
  return analogRead(pinWaterLevel);
}

int Sensors::getLuminescence() {
  return analogRead(pinLuminescence);
}
