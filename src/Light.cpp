#include "Light.hpp"
#include <time.h>

void schedule(Light *light) {
  if (light->config != SCHEDULE) {
    return;
  }

  struct tm timeinfo;
  getLocalTime(&timeinfo);

  light->turnedOn = timeinfo.tm_hour >= light->turnOnHour &&
                    timeinfo.tm_hour < light->turnOffHour;
  digitalWrite(light->pin, light->turnedOn);
}

void Light::setConfig(LightConfig config) {
  this->config = config;
  turnedOn = config == ON;
  digitalWrite(pin, turnedOn ? HIGH : LOW);
}

bool Light::isTurnedOn() { return turnedOn; }

void Light::startSchedule() { ticker.attach(30, schedule, this); }
