---
layout: layouts/project.liquid
tags: ["Geodaten", "Mobilität"]
id: bikesharing-viz
title: Shared Mobility Flows
abstract: Visualisierung von Leihfahrrad-Routen in Berlin
languages: ["Javascript"]
license: MIT
link: http://bikesharing.citylab-berlin.org/
repository: https://github.com/technologiestiftung/bikesharing-vis
developers: ["Technologiestiftung Berlin"]
backers: ["Senatskanzlei Berlin"]
has-hero: true
has-thumb: true
date: 2021-02-16
---

## Zusammenfassung

In dem Projekt "Shared Mobility Flows" hat das CityLAB die Nutzung von Leihfahrrädern in der Stadt visualisiert. Die Daten stammen von zwei Leihfahrradanbietern, Nextbike und LIDL Bike, die Standortdaten für ihre geparkten Fahrräder über eine öffentliche API zur Verfügung stellen. Die in der Visualisierung abgebildeten Routen werden anhand der Start- und Endpunkte der Trips geschätzt.

## Beschreibung des Projekts

Immer mehr Mobilitäts-Sharing-Anbieter (Leihfahrräder, E-Scooter, etc.) sind auf Berlins Straßen unterwegs. Das stellt die Stadt vor neue Herausforderungen, eröffnet aber auch Chancen: Neben einem breiteren Mobilitätsangebot können die Daten der Sharing-Anbieter wertvolle Einsichten für Verwaltung und Stadtplanung liefern und intelligentere Verkehrsplanung ermöglichen.

Um das Potenzial dieser Daten für die Stadt aufzuzeigen, hat das CityLAB "Shared Mobility Flows" entwickelt. Die Visualisierung zeigt, wie über den Verlauf eines Tages Leihfahrräder verwendet werden. Man sieht zu welchen Uhrzeiten und in welchen Stadtteilen die Fahrräder besonders viel genutzt werden.

Als Datenbasis dient eine Datenbank von Standortdaten der Leihfahrräder. Hierfür schrieb das CityLAB ein Skript, das regelmäßig die APIs von zwei Fahrradanbieter nach Standorten von allen geparkten Fahrräder abfragt. Anhand der Unique ID jedes Fahrrads kann festgestellt werden, wann ein Fahrrad aus dem Datensatz verschwindet (da das Fahrrad für einen Trip benutzt wird) und wann das Fahrrad an einem anderen Standort wieder im Datensatz auftaucht. Diese Start- und Endpunkte werden benutzt, um eine wahrscheinliche Route anhand eines Routing-Algorithmus zu generieren, die dann in der Karte abgebildet wird.

Das Skript für die Datenerfassung und -Aufbereitung findet man im dazugehörigen [GitHub Repo.](https://github.com/technologiestiftung/bike-sharing)

![Shared Mobility Flows](/assets/images/projects/bikesharing.png)

## Weitere Informationen

Die CityLAB-Anwendung nutzt Daten aus dem Sommer 2019. Aktuell wird die Visualisierung nicht weiterentwickelt.
