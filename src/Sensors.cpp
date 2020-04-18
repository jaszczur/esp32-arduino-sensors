#include "Sensors.hpp"

int Sensors::getWaterLevel() { return analogRead(pinWaterLevel); }

int Sensors::getLuminescence() { return analogRead(pinLuminescence); }

TempHum Sensors::getTempHum() {
  TempAndHumidity tah = dht.getTempAndHumidity();
  TempHum result = {.temperature = int(tah.temperature),
                    .humidity = int(tah.humidity)};
  return result;
}
