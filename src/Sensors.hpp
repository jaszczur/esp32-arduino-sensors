#ifndef SENSORS_H
#define SENSORS_H

#include <Arduino.h>
#include <DHTesp.h>
#include <memory>

struct TempHum {
  int temperature;
  int humidity;
  int dewPoint;
  int absoluteHumidity;

  /*
    0 -> Dry
    1 -> Very comfortable
    2 -> Comfortable
    3 -> Ok
    4 -> Uncomfortable
    5 -> Quite uncomfortable
    6 -> Very uncomfortable
    7 -> Severe uncomfortable
   */
  byte perception;
};

class Sensors {
public:
  Sensors(int pinDht11, int pinWaterLevel, int pinLuminescence)
      : pinWaterLevel(pinWaterLevel), pinLuminescence(pinLuminescence){
    pinMode(pinWaterLevel, INPUT);
    pinMode(pinLuminescence, INPUT);
    dht.setup(pinDht11, DHTesp::DHT11);
  };
  int getWaterLevel();
  int getLuminescence();
  const TempHum& getTempHum();

private:
  DHTesp dht;
  TempHum tempHumReading;
  unsigned long lastReading;
  int pinWaterLevel;
  int pinLuminescence;
};

#endif /* SENSORS_H */
