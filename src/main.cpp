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

AsyncWebServer server(80);
Rest rest;

const char *ssid = "KrolestwoJaszczurow";
const char *password = "kW6WRdy2qL3h6g";

const char *PARAM_MESSAGE = "message";

void notFound(AsyncWebServerRequest *request) {
  request->send(404, "application/json", "{\"error\":\"Not found\"}");
}

void setup() {
  // initialize LED digital pin as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.begin(115200);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
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

  digitalWrite(LED_BUILTIN, LOW);
}

void loop() {}
