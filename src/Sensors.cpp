#include "Sensors.hpp"

int Sensors::getWaterLevel() { return analogRead(pinWaterLevel); }

int Sensors::getLuminescence() { return analogRead(pinLuminescence); }

const TempHum& Sensors::getTempHum() {
  if (millis() - lastReading < 1000) {
    return tempHumReading;
  }
  lastReading = millis();
  TempAndHumidity tah = dht.getTempAndHumidity();

  tempHumReading = TempHum{
      .temperature = int(tah.temperature),
      .humidity = int(tah.humidity),
      .dewPoint = int(dht.computeDewPoint(tah.temperature, tah.humidity)),
      .absoluteHumidity =
          int(dht.computeAbsoluteHumidity(tah.temperature, tah.humidity)),
      .perception = dht.computePerception(tah.temperature, tah.humidity),
  };

  return tempHumReading;
}
