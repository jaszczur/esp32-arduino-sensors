#ifndef LIGHT_H
#define LIGHT_H

#include <Arduino.h>
#include <Ticker.h>

enum LightConfig { OFF, ON, SCHEDULE };

class Light {
public:
  Light(int relayPin, int turnOnHour = 8, int turnOffHour = 22)
      : pin(relayPin), turnOnHour(turnOnHour), turnOffHour(turnOffHour) {
    pinMode(pin, OUTPUT);
  }
  void startSchedule();
  void setConfig(LightConfig config);
  bool isTurnedOn();

private:
  Ticker ticker;
  int pin;
  LightConfig config;
  bool turnedOn;
  const int turnOnHour;
  const int turnOffHour;

  friend void schedule(Light *light);
};

#endif /* LIGHT_H */
