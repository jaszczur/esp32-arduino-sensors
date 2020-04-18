#ifndef CONFIG_H
#define CONFIG_H

#define STRING(s) #s

#ifdef CONFIG_WIFI_SSID
#define WIFI_SSID STRING(CONFIG_WIFI_SSID)
#else
#define WIFI_SSID "wifi-ssid"
#endif

#ifdef CONFIG_WIFI_PASS
#define WIFI_PASS STRING(CONFIG_WIFI_PASS)
#else
#define WIFI_PASS "wifi-pass"
#endif

#define PIN_DHT11 5
#define PIN_WATER_LEVEL 35
#define PIN_LUMINESCENCE 36
#define PIN_RELAY_LIGHTS 32

#endif /* CONFIG_H */
