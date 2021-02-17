---
layout: layouts/project.liquid
tags: ["Geodaten", "Validierung", "Datenqualität"]
id: validator
title: Prüftool für Geodaten
abstract: Tool zur Schemavalidierung von Geodaten im GML-Format
languages: ["JavaScript", "Python"]
license: MIT License
link: https://odis-berlin.de/projekte/xml-validator/tool
repository: https://github.com/technologiestiftung/xml-schema-validator-for-berlins-geodata
has-thumb: true
date: 2021-02-16
---

## Kurzbeschreibung

Der Online-Validator dient dazu, Geodaten im GML-Format gegen eine festgelegte, dem Tool bekannte Datenstruktur zu prüfen. Abweichungen werden anhand von Fehlermeldungen beschrieben, so dass sie gezielt in der Datei angepasst werden können. GML ist ein offener Standard für räumliche Daten, basierend auf XML.

## Beschreibung des Projekts

Die Berliner Verwaltung stellt Geodaten unter anderem über den FIS-Broker als Open Data bereit. Neben Datensätzen die von einer Verwaltungsstelle direkt berlinweit erfasst und gepflegt werden, also räumlich das gesamte Stadtgebiet abdecken, gibt es eine Vielzahl weiterer Geodaten die dezentral in der Verantwortlichkeit der Bezirke liegen. Diese weisen teilweise eine starke schematische Heterogenität untereinander auf und lassen sich nur mit hohem Arbeitsaufwand für die Bereitstellung als Open Data im FIS-Broker zusammenführen. In einem Projekt zusammen mit der Sentsverwaltung für Stadtentwicklung und Wohnen wurde ein webbasierter Validator entwickelt, mit dem die geodatenverarbeitenden Stellen automatisiert prüfen können, ob ihre Daten den vorgegebenen Anforderungen an das Schema entsprechen.

## Möglichkeiten zur Weiterentwicklung

Das Tool bietet einige Möglichkeiten zur Weiterentwicklung. Es handelt sich bei dieser Anwendung um einen Prototypen, der für 5 verschiedene Musterdatensätze entwickelt wurde. Die Schemata dieser Musterdatensätze sind als XSD-Schemadateien im Sourcecode hinterlegt. Möchte man weitere Datensätze (mit anderen Schemata) prüfen, müssen dementprechend die passenden Schemadateien im Repository hinzugefügt werden.
Neben dem Implementieren weiterer vorgefertiger Schemata, wäre es auch denkbar, den Prototypen so weiterzuentwickeln, so dass jede beliebe XSD-Datei vom Anwendenden über die Weboberfläche in das Tool geladen oder kopiert werden kann, um gegen diese zu validieren.
