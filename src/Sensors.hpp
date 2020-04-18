#ifndef SENSORS_H
#define SENSORS_H

#include <Arduino.h>

class Sensors {
public:
  Sensors(int pinDht11, int pinWaterLevel, int pinLuminescence)
      : pinWaterLevel(pinWaterLevel), pinLuminescence(pinLuminescence){
    pinMode(pinWaterLevel, INPUT);
    pinMode(pinLuminescence, INPUT);
  };
  int getWaterLevel();
  int getLuminescence();

private:
  int pinWaterLevel;
  int pinLuminescence;
};

#endif /* SENSORS_H */
