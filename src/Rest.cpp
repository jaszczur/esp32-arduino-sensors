
#include "Rest.hpp"
#include <ArduinoJson.h>
#include <AsyncJson.h>
#include <ESPAsyncWebServer.h>
#include <time.h>

#define REST_HANDLE(REST_METHOD)                                               \
  [this](AsyncWebServerRequest *request) { REST_METHOD(request); }

void Rest::configure(AsyncWebServer &server) {

  AsyncCallbackJsonWebHandler *handler = new AsyncCallbackJsonWebHandler(
      "/api/v1/light",
      [this](AsyncWebServerRequest *request, JsonVariant &json) {
        postLights(request, json.as<JsonObject>());
      });
  server.addHandler(handler);
  server.on("/api/v1/sensors", HTTP_GET, REST_HANDLE(getSensors));
}

void Rest::getSensors(AsyncWebServerRequest *request) {
  AsyncJsonResponse *response = new AsyncJsonResponse();

  const TempHum th = sensors->getTempHum();
  time_t rawtime;
  time(&rawtime);

  JsonObject root = response->getRoot();
  root["ts"] = rawtime;
  root["waterLevel"] = sensors->getWaterLevel();
  root["luminescence"] = sensors->getLuminescence();
  root["light"] = light->isTurnedOn();
  root["lightConfig"] = light->getConfig();
  root["temperature"] = th.temperature;
  root["humidity"] = th.humidity;
  root["absHumidity"] = th.absoluteHumidity;
  root["dewPoint"] = th.dewPoint;
  root["perception"] = th.perception;

  response->setLength();
  request->send(response);
}

void Rest::postLights(AsyncWebServerRequest *request, JsonObject json) {
  int status = json["status"].as<int>();

  light->setConfig(LightConfig(status));

  request->send(200);
}
