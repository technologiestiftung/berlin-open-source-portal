---
layout: layouts/project.liquid
tags: ["Gebäude", "Energiewende","Verbrauch","Klimaschutz" ]
id: energiecheckpoint
title: 'Berliner Energie&shy;Checkpoint'
abstract: Eine Exploration öffentlicher Gebäude nach Energieverbrauch und Sanierungsdaten 
languages: ["Typescript"]
license: MIT
link: https://energiecheckpoint.odis-berlin.de/
repository: https://github.com/technologiestiftung/energiekarte
developers: ["Technologiestiftung Berlin"]
backers: ["Senatsverwaltung für Umwelt, Verkehr und Klimaschutz"]
has-hero: true
has-thumb: true
date: 2023-05-28
---

## Zusammenfassung

Berlin möchte bis spätestens 2045 klimaneutral werden. Dazu ist im Berliner Klimaschutz- und Energiewendegesetz (EWG Bln) als Ziel eine Reduktion der Kohlendioxidemissionen um mindestens 95% im Vergleich zum Jahr 1990 festgelegt. Öffentliche Gebäude wie Schulen und Kultureinrichtungen sollen durch Energieeinsparungen und Sanierungen eine Vorbildrolle einnehmen. Doch welche Gebäude verbrauchen wie viel Energie und welche Einsparpotentiale stecken in der Sanierung einzelner Gebäude?

Die ODIS hat sich die vorhandenen offenen Daten angesehen und bemerkt, dass die Datenlage in diesem Bereich in Bezug auf die Aktualität, Kontinuität und Maschinenlesbarkeit ausbaufähig ist. Mit der interaktiven Webkarte „Berliner EnergieCheckpoint“ haben wir daher eine prototypische Anwendung programmiert, die Aufmerksamkeit für das Energiewendegesetz und das Thema Energieeinsparung erzeugt und gleichzeitig als Gesprächsgrundlage zur Verbesserung der (offenen) Datenlage der behördlichen Stellen in den Bereichen Gebäudedaten und Energiemonitoring dienen kann.

## Beschreibung des Projekts

Der EnergieCheckpoint visualisiert die von der BIM Berliner Immobilienmanagement GmbH regelmäßig veröffentlichten Energieverbrauchsdaten und Einsparmaßnahmen für über 300 Standorte wie Schulen, Feuerwehren oder Kultureinrichtungen. Mit Klick auf einen Standort erhalten Nutzer:innen Informationen zum Gebäudetyp, Wärme- bzw. Stromverbrauch und Art der Wärmeversorgung (Gas, Fernwärme etc.).

![Ausschnitt](/assets/images/projects/energie_opensource.png)

Prinzipiell lassen sich die Verbrauchsinformationen über einen Button zwischen Wärme- und Stromverbrauch jederzeit umschalten. Die Ranking-Funktion erlaubt es, die Karte weiter zu explorieren und die Einrichtungen nacheinander durchzugehen. Es kann zur Liegenschaft mit dem nächsthöheren bzw. nächstniedrigeren Verbrauch gesprungen werden.

Für ein besseres Verständnis wird der Stromverbrauch der einzelnen Standorte mit dem Verbrauch eines durchschnittlichen Fünfpersonenhaushalts verglichen. Je Gebäude oder Gebäudeteil der Liegenschaft werden darüber hinaus Sanierungsdaten angezeigt, die Kosten und Flächen der Sanierungsvorhaben darstellen. Die farbige Fläche markiert die geschätzte Fläche der Liegenschaft, ist aber nur eine Annäherung, da sich Gebäude auch außerhalb der Fläche befinden können.

Mit verschiedenen Filterfunktionen lassen sich die öffentlichen Einrichtungen nach bestimmten Merkmalen eingrenzen und anzeigen, wie zum Beispiel nach dem Gebäudetyp "Schulen", nach Gebäuden, die mit Gas beheizt werden, oder nach Gebäuden mit besonders hohem Einsparpotential. Die Filterauswahl lässt sich als CSV-Datei exportieren.

Für einen leichteren Einstieg in die Anwendung wird bei einem Klick auf "Erkunden" in der Infobox eine neunteilige Tour angeboten, bei der die einzelnen Funktionen genauer erklärt und eingeordnet werden.

![Tour](/assets/images/projects/energiekarte_joyride.png)

Die Anwendung ist so konzipiert, dass in der Ansicht zwischen der 2D-Perspektive und der Liegenschafts-Perspektive gewechselt werden kann. Die Anwendung kann problemlos mit einem Smartphone bedient werden.

## Weitere Informationen
Diese Anwendung basiert komplett auf (eingeschränkt) offenen Daten der BIM Berliner Immobilienmanagement GmbH, die jährlich unter [Berichte und Reports](https://www.bim-berlin.de/presse/publikationen/) die Energieverbrauchsübersicht und den Sanierungsfahrplan als PDF-Dateien veröffentlichen. Die Daten liegen (noch) nicht als maschinenlesbare Daten auf dem Berliner Datenportal bereit, weswegen wir in diesem Fall von eingeschränkt offenen Daten sprechen. Die aktuelle Energieverbrauchsübersicht liegt für 2020 vor, die Daten zum Sanierungsfahrplan haben den Stand 04.05.2022. Um die einzelnen Adresspunkte zu Grundstücken zuordnen zu können, haben wir offene Daten aus dem Amtlichen Liegenschaftskatasterinformationssystem (ALKIS) verwendet. Für drei Adressen (Wallstr. 32, WRD Feuerwehr SILB, Dorfstr. 3) können nur Sanierungsdaten angezeigt werden.

Die verarbeiteten Daten und die Skripte zur Datenprozessierung sind in diesem [Repository](https://github.com/technologiestiftung/energiekarte) zu finden.

# Hinweis zur eingeschränkten Aussagekraft der Sanierungsdaten
Der Sanierungsfahrplan, der eine zielorientierte Abarbeitungsreihenfolge der erforderlichen Gebäudesanierungen aufzeigt, dient den Bezirken und der BIM als strategisches Instrument bei der Sanierungsplanung. Die hierin enthaltene Grobkostenschätzung stellt lediglich eine überschlägige informative Angabe zum Anteil der energetischen Sanierungskostenanteile dar und entspricht dem Stand der Erstellung des Sanierungsfahrplans. Über eine energetische Sanierung hinausgehende Sanierungs- und Modernisierungsbedarfe, die im Rahmen einer Gebäudesanierung mit umgesetzt werden, sind hier kostenseitig nicht enthalten. Gleiches gilt für Planungskosten sowie markt- bzw. inflationsbedingte Kostensteigerungen. Die tatsächlichen Sanierungskosten können somit abhängig vom Beginn und Umfang der konkreten Sanierungsmaßnahmen davon abweichen.
