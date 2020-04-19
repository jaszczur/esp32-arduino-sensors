#ifndef LIGHT_H
#define LIGHT_H

#include <Arduino.h>
#include <Ticker.h>

enum LightConfig { OFF, ON, SCHEDULE };

class Light {
public:
  Light(int relayPin, int turnOnHour = 8, int turnOffHour = 22)
      : pin(relayPin), turnOnHour(turnOnHour), turnOffHour(turnOffHour),
        config(SCHEDULE) {
    pinMode(pin, OUTPUT);
  }
  void startSchedule();
  void setConfig(LightConfig config);
  LightConfig getConfig();
  bool isTurnedOn();

private:
  int pin;
  bool turnedOn;
  int turnOnHour;
  int turnOffHour;
  LightConfig config;
  Ticker ticker;

  friend void schedule(Light *light);
};

#endif /* LIGHT_H */
