#ifndef SENSORS_H
#define SENSORS_H

#include <Arduino.h>
#include <DHTesp.h>

struct TempHum {
  int temperature;
  int humidity;
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
  TempHum getTempHum();

private:
  DHTesp dht;
  int pinWaterLevel;
  int pinLuminescence;
};

#endif /* SENSORS_H */
