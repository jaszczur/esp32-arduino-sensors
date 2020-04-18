
#include "Rest.hpp"
#include <ArduinoJson.h>
#include <AsyncJson.h>
#include <ESPAsyncWebServer.h>

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

  TempHum th = sensors->getTempHum();
  JsonObject root = response->getRoot();
  root["moisture"] = sensors->getWaterLevel();
  root["luminescence"] = sensors->getLuminescence();
  root["light"] = 30;
  root["temperature"] = th.temperature;
  root["humidity"] = th.humidity;
  response->setLength();
  request->send(response);
}

void Rest::postLights(AsyncWebServerRequest *request, JsonObject json) {
  Serial.println(json["status"].as<int>());

  request->send(200);
}

// Send a POST request to <IP>/post with a form field message set to <message>
// server.on("/api/post", HTTP_POST, [](AsyncWebServerRequest *request) {
//   String message;
//   if (request->hasParam(PARAM_MESSAGE, true)) {
//     message = request->getParam(PARAM_MESSAGE, true)->value();
//   } else {
//     message = "No message sent";
//   }
//   request->send(200, "text/plain", "Hello, POST: " + message);
// });
