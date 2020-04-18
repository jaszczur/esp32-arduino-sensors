#ifndef REST_H
#define REST_H

#include <ArduinoJson.h>
#include <ESPAsyncWebServer.h>
#include "Sensors.hpp"
#include "Light.hpp"

class Rest {
public:
  Rest(Sensors *sensors, Light *light) : sensors(sensors), light(light) {}
  void configure(AsyncWebServer &server);
private:
  Sensors *sensors;
  Light *light;
  void getSensors(AsyncWebServerRequest *request);
  void postLights(AsyncWebServerRequest *request, JsonObject json);
};

#endif /* REST_H */
