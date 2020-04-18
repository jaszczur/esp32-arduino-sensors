#ifndef REST_H
#define REST_H

#include <ArduinoJson.h>
#include <ESPAsyncWebServer.h>
#include "Sensors.hpp"

class Rest {
public:
  Rest(Sensors *sensors) : sensors(sensors) {}
  void configure(AsyncWebServer &server);
private:
  Sensors *sensors;
  void getSensors(AsyncWebServerRequest *request);
  void postLights(AsyncWebServerRequest *request, JsonObject json);
};

#endif /* REST_H */
