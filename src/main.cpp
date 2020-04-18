/*
 * Blink
 * Turns on an LED on for one second,
 * then off for one second, repeatedly.
 */

#include "Rest.hpp"
#include <Arduino.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <ESPmDNS.h>
#include <FS.h>
#include <SPIFFS.h>
#include <WiFi.h>
#include "Sensors.hpp"
#include "config.h"

AsyncWebServer server(80);
Sensors sensors (PIN_DHT11, PIN_WATER_LEVEL, PIN_LUMINESCENCE);
Rest rest(&sensors);

void notFound(AsyncWebServerRequest *request) {
  request->send(404, "application/json", "{\"error\":\"Not found\"}");
}

void setup() {
  // initialize LED digital pin as an output.
  Serial.begin(115200);

  Serial.println("Connecting to WiFi network: " WIFI_SSID);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.printf("WiFi Failed!\n");
    return;
  }

  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());

  SPIFFS.begin();
  MDNS.begin("esp32-sensors");

  server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");
  rest.configure(server);
  server.onNotFound(notFound);
  server.begin();

  MDNS.addService("http", "tcp", 80);
}

void loop() {}
