---
layout: layouts/project.liquid
tags: ["Fahrrad", "Mobilität"]
id: bikesharing-viz
title: Shared Mobility Flows
abstract: Visualisierung von Leihfahrrad-Routen in Berlin
languages: ["Javascript"]
license: MIT
link: http://bikesharing.citylab-berlin.org/
repository: https://github.com/technologiestiftung/bikesharing-vis
has-hero: true
has-thumb: true
date: 2021-02-16
---

## Zusammenfassung

In dem Projekt "Shared Mobility Flows" hat das CityLAB die Nutzung von Leihfahrräder in der Stadt visualisiert. Die Daten stammen von zwei Leihfahrradanbietern, Nextbike und LIDL Bike, die Standortdaten für ihre geparkte Fahrräder über eine öffentliche API zur Verfügung stellen. Die in der Visualisierung abgebildeten Routen sind nur geschätzt anhand der vermuteten Start- und Endpunkte der Trips.

## Beschreibung des Projekts

Immer mehr Mobilitäts-Sharing-Anbieter (Leihfahrräder, E-Scooter, etc.) sind auf Berlins Straßen präsent. Das stellt die Stadt vor neue Herausforderungen, eröffnet aber auch Chancen: Neben einem breiteren Mobilitätsangebot können die Daten der Sharing-Anbieter wertvolle Einsichten für Verwaltung und Stadtplanung liefern und intelligentere Verkehrsplanung ermöglichen. 

Um das Potenzial dieser Daten für die Stadt aufzuzeigen, hat das CityLAB "Shared Mobility Flows" entwickelt. Die Visualisierung zeigt, wie über des Verlaufs eines Tages Leihfahrräder benutzt werden. Man sieht zu welchen Uhrzeiten die Fahrräder besonders viel genutzt werden, sowie in welchen Stadtteilen.

Die Datenbasis ist eine Datenbank von Standortdaten von Leihfahrräder; das Lab hat ein Skript geschrieben, welches die APIs von 2 Fahrradanbieter nach Standorten von allen geparkten Fahrräder regelmäßig abgefragt hat. Anhand der Unique ID jedes Fahrrad kann bemerkt werden, wann ein Fahrrad aus dem Datensatz plötzlich verschwindet (weil das Fahrrad für einen Trip benutzt wird) und wan das Fahrrad an einem anderen Standort wieder im Datensatz auftaucht. Diese vermuteten Start- und Endpunkte werden benutzt, um eine wahrscheinliche Routen anhand eines Routing-Algorithmus zu generieren, die dann in der Karte abgebildet wird.

Das Skript für die Datenerfassung und -Aufbereitung findet man in diesem [GitHub Repo.](https://github.com/technologiestiftung/bike-sharing) 

![Shared Mobility Flows](/assets/images/projects/bikesharing.png)

## Weitere Informationen

Die CityLAB-Anwendung nutzt Daten aus dem Sommer 2019. Aktuell wird die Visualisierung nicht weiterentwickelt.