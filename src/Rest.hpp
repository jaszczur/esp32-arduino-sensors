#ifndef REST_H
#define REST_H

#include <ArduinoJson.h>
#include <ESPAsyncWebServer.h>

class Rest {
public:
  void configure(AsyncWebServer &server);
private:
  void getSensors(AsyncWebServerRequest *request);
  void postLights(AsyncWebServerRequest *request, JsonObject json);
};

#endif /* REST_H */
