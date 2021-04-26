---
layout: layouts/project.liquid
tags: ["Open Data"]
id: berlin-open-data
title: Berlin Open Data
abstract: Offene Daten der Berliner Verwaltungen und landeseigenen Betriebe
languages: ["Python", "PHP", "JavaScript"]
license: GPL-2.0, AGPL-3.0, MIT (verschiedene Repositories)
link: https://daten.berlin.de
repository: https://github.com/search?q=org%3Aberlinonline+topic%3Aberlinopendata
has-hero: true
has-thumb: true
date: 2021-04-22
---

## Zusammenfassung


Das zentrale Berliner Datenportal _[Berlin Open Data](https://daten.berlin.de)_ macht die Datenbestände der Berliner Verwaltung und der landeseigenen Betriebe für die Öffentlichkeit auffindbar.
Alle Behörden und Betriebe können hier in Eigentverantwortung Datensätze hinzufügen und pflegen.

## Beschreibung des Projekts

[Berlin Open Data](https://daten.berlin.de) ist seit September 2011 online und damit das dienstälteste Open-Data-Portal Deutschlands.
Seit dem Start des Portals mit 23 Datensätzen ist das Angebot an Verwaltungsdaten um ein Vielfaches gewachsen (April 2021: gut 2700 Datensätze); das Thema Offene Daten ist mit der Verabschiedung des [E-Government-Gesetzes Berlin](http://gesetze.berlin.de/jportal/?quelle=jlink&query=EGovG+BE&psml=bsbeprod.psml&max=true&aiz=true "Gesetz zur Förderung des E-Government (EGovG Bln)") im Juni 2016, und der [Open-Data-Verordnung](https://www.berlin.de/sen/wirtschaft/digitalisierung/open-data/verordnung/ "Verordnung zur Bereitstellung von allgemein zugänglichen Datenbeständen durch die Behörden der Berliner Verwaltung
(OpenDataV)") im Juli 2020 fest auf Landesebene verankert.

Das Datenportal ist ein reines Metadatenportal.
Die Datenbereitsteller veröffentlichen ihre Daten zunächst an einem selbstgewählten, öffentlichen Speicherort.
Die Daten können dann im Datenportal auffindbar gemacht werden, indem sie dort als Datensatz (Metadaten und Link zum Speicherort) eingetragen werden.

Technisch gesehen besteht das Datenportal aus mehreren Teilen.
Dies sind insbesondere ein [Drupal](https://www.drupal.org)-basiertes CMS, welches das eigentliche Portal auf [daten.berlin.de](https://daten.berlin.de "Berlin Open Data") ausspielt, sowie ein [CKAN](https://ckan.org)-basiertes Redaktionssystem (das „Datenregister“), über das die unterschiedlichen Behörden ihre Datensätze ins Portal einbinden können.
Eine detailliertere Übersicht zum Aufbau des Portals findet sich im Berliner [Open-Data-Handbuch](https://berlinonline.github.io/open-data-handbuch/#das-berliner-datenportal "Kapitel 'Das Berliner Datenportal' im Berliner Open-Data-Handbuch").

![Die Grafik zeigt den Weg der Metadaten im Berliner Datenportal. Datenbereitsteller können Datensätze manuell über Imperia und Datenregister bereitstellen, oder automatisch über Harvester und API. Datennutzende können manuell suchen und browsen über das Datenportal, oder für automatische Auswertungen über die APIs gehen.](../assets/images/projects/berlin-open-data_uebersicht.png "Architektur-Übersicht des Berliner Open-Data-Portals")

Dementsprechend ist auch der Quellcode für das Projekt nicht an einem einzelnen Ort zu Hause, sondern verteilt sich auf zahlreiche Repositories.
Dazu zählen etwa verschiedene Plugins für CKAN und Drupal.
Nicht alle Teile des Gesamtportals sind bereits als Open Source öffentlich verfügbar – im Laufe der Zeit sollen aber mehr und mehr dazukommen.
Hier geht es zur [Liste aller aktuell verfügbaren Repositories von _Berlin Open Data_](https://github.com/search?q=org%3Aberlinonline+topic%3Aberlinopendata).

## Weitere Information

Das Thema Open Data liegt in Berlin bei der [Senatsverwaltung für Wirtschaft, Energie und Betriebe](https://www.berlin.de/sen/web/) und wird von dort aus inhaltlich und strategisch gestaltet.
Die technische Betreuung des Datenportals liegt bei dem Dienstleister [BerlinOnline Stadtportal GmbH & Co. KG](https://www.berlinonline.net/).
Weitere Informationen zum Thema Open Data in Berlin gibt es an folgenden Stellen:

* das [Berliner Open-Data-Handbuch](https://berlinonline.github.io/open-data-handbuch/)
* die [Informationsseite zu Open Data](https://www.berlin.de/sen/web/) der Senatsverwaltung
* [@OpenDataBerlin](https://twitter.com/OpenDataBerlin "Berlin Open Data auf Twitter") auf Twitter

---

Grafik „Architektur-Übersicht des Berliner Open-Data-Portals“ von Nadine Wohlfahrt ([BerlinOnline Stadtportal GmbH & Co. KG](https://www.berlinonline.net/)). Veröffentlicht unter [Creative Commons Namensnennung 4.0 International Lizenz](https://creativecommons.org/licenses/by/4.0/deed.de) (CC BY 4.0).

