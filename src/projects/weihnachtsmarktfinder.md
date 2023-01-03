---
layout: layouts/project.liquid
tags: ["Wirtschaft", "Märkte","Open Data"]
id: weihnachtsmarktfinder
title: 'Berliner Weihnachts&shy;markt-Finder'
abstract: Eine Webkarte mit den Berliner Weihnachtsmärkten zum Erkunden, Planen und Teilen
languages: ["Typescript"]
license: MIT
link: https://weihnachtsmaerkte.odis-berlin.de/?id=
repository: https://github.com/technologiestiftung/weihnachtsmarktkarte
developers: ["Technologiestiftung Berlin"]
has-hero: true
has-thumb: true
date: 2022-12-22
---

## Zusammenfassung

Weihnachtsmärkte stimmen nicht nur auf das Weihnachtsfest ein. Sie machen Städte auch attraktiv für Besucher:innen und sind damit ein Tourismus- und Wirtschaftsfaktor. Welche Weihnachtsmärkte laden an welchen Tagen zum Besuch ein? Wo kann ich mit meinen Kolleg:innenen noch nach 19 Uhr auf eine Tasse Glühwein? Und wo ist der Eintritt kostenlos? Diese und viele weitere Fragen beantwortet der Berliner Weihnachtsmarkt-Finder, der auf offenen Daten basiert und uns in der Vorweihnachtszeit die Stadt auf neue Art und Weise erkunden lässt. 

## Beschreibung des Projekts

Auf der Webkarte werden zunächst über 60 Weihnachtsmärkte angezeigt, dargestellt mit einem Stern-Symbol. Mit einem Klick auf den Stern gelangen Nutzer:innen auf weiterführende Informationen wie Adresse, Anfahrt, Webseite, Eintrittspreise und Öffnungszeiten und weitere Informationen. Die zentrale Funktion der Anwendung sind verschiedende Filtermöglichkeiten. So können Nutzer:innen sich zum Beispiel nur Weihnachtsmärkte anzeigen lassen, die kostenlos sind, wo es spannende Attraktionen gibt oder die nah an einer U- Bahn oder S-Bahn liegen. Alle Weihnachtsmärkte, die der Filterung nicht entsprechen, werden danach ausgegraut. Zoomt man tiefer in die Karte rein, werden zusätzlich öffentliche Toilettenstandorte und Haltestationen zu öffentlichen Verkehrsmitteln sichtbar. Die Anwendung ist so konzipiert, dass sie problemlos mit einem Smartphone bedient werden kann. Zudem können ausgewählte Weihnachtsmärkte über eine Funktion mit Anderen geteilt werden.

## Weitere Informationen

Diese Anwendung basiert komplett auf offenen Daten. Die gezeigten Weihnachtsmärkte stammen aus dem Datensatz  [Berliner Weihnachtsmärkte 2022](https://daten.berlin.de/datensaetze/berliner-weihnachtsmärkte-2022), der jährlich von der Senatsverwaltung für Wirtschaft, Energie und Betriebe bereitgestellt wird. Dadurch sind nur die der Senatsverwaltung gemeldeten Märkte aufgeführt und es besteht kein Anspruch auf Vollständigkeit. Weiterhin liegen in der Karte [Standorte öffentlicher Toiletten](https://daten.berlin.de/datensaetze/standorte-der-öffentlichen-toiletten) , die sich ebenfalls im Berliner Open Data Portal befinden und regelmäßig durch die Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz aktualisiert werden. Für die Identifizierung der nahelegenen [S-Bahn und U-Bahn-Stationen](https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen) wurde ein weiterer offener Datensatz des VBB herangezogen. Weihnachtsmärkte die unter 400m Luftlinie entfernt zu diesen Haltestellen liegen werden entsprechend bei der Filterung “Kurze Wege” ausgegeben. Die Hintergrundkarte basiert auf der [OpenStreetMap](https://www.openstreetmap.de). Einzelne Weihnachtsmärkte haben lediglich ein Platzhalter-Bild. Dies liegt daran, dass die ODIS auf Bilder zurückgreifen will, die in [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:First_steps/Uploading_files/de) liegen, dem zentralen und offenen Medienarchiv.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in diesem  [Repository](https://github.com/technologiestiftung/weihnachtsmarktkarte) zu finden.

![Points of Interest](/assets/images/projects/weihnachtsmarktfinder_pois.png)