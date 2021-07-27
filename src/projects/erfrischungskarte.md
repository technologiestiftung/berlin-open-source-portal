---
layout: layouts/project.liquid
tags: ["Umwelt", "Geodaten","Open Data"]
id: erfrischungskarte
title: 'Berliner Erfrischungskarte'
abstract: Eine Webkarte um schattige, kühle und erfrischende Orte zu entdecken
languages: ["Typescript"]
license: MIT
link: https://erfrischungskarte.odis-berlin.de
repository: https://github.com/technologiestiftung/erfrischungskarte-frontend
developers: ["Technologiestiftung Berlin"]
backers: ["Senatsverwaltung für Wirtschaft, Energie und Betriebe und Senatskanzlei Berlin"]
has-hero: true
has-thumb: true
date: 2021-07-22
---

## Zusammenfassung
Klimatische Unterschiede in der Stadt besser verstehen und erfrischende Orte finden, dabei hilft die Erfrischungskarte, eine Webkarte vom Berliner Stadtgebiet, die Temperaturverhältnisse, Kaltluftverhältnisse und Schattenbereiche visualisiert. Diese Daten können für jede Stunde des Tages zwischen 10 und 20 Uhr angezeigt werden. Die Karte gibt also Informationen darüber, an welchen Orten vergleichsweise höhere oder niedrigere Temperaturen vorherrschen und zu welchen Uhrzeiten wo Schatten und Sonne zu erwarten sind. Es werden außerdem verschiedene Orte, wie Freibäder, Grünanlagen und Wasserspielplätze angezeigt, an denen sich die Bürger:innen in Berlin an heißen Tagen erfrischen können.

## Beschreibung des Projekts
Berlin liegt bekanntermaßen in einer gemäßigten Klimazone mit launischen, unbeständigen Wetterlagen. Das führt dazu, dass wir an einem Tag auf der Suche nach einem wärmenden Sonnenstrahl sind und uns am nächsten vielleicht schon wieder schwitzend nach einer frischen Brise sehnen. Gerade das Schwitzproblem dürfte in Zukunft aber ein größeres werden: Der Klimawandel sorgt an vielen Orten tendenziell für immer heißeres, trockeneres Wetter.

Die Untersuchung des Stadtklimas ist deshalb ein wichtiger Aspekt in der Stadtentwicklung und -planung, um die Lebensqualität zu erhöhen und Stadtbewohner*innen weniger gesundheitlichem Risiko auszusetzen. Drei wichtige Faktoren, die ein lokales Klima ausmachen sind Beschattung, Lufttemperatur und Kaltluftentstehung. Aufgrund der differenzierten Topographie kann es zum Teil erhebliche Unterschiede innerhalb des Stadtgebietes geben. So sind im Sommer Unterschiede von mehr als 5 °C bei der Tiefsttemperatur zwischen bestimmten Gebieten der Innenstadt und des Stadtrands ohne weiteres möglich.

Die Erfrischungskarte macht diese kleinräumigen klimatischen Unterschiede im urbanen Raum sichtbar und kann genutzt werden, um die Stadt auf neue andere Art und Weise zu entdecken und Abkühlung an besonders heißen Tagen zu finden. Darüber hinaus regt sie dazu an, über das Thema Klimaanpassung zur Sicherstellung von Gesundheit und Lebensqualität in immer heißer werdenden Städten nachzudenken. 

## Weitere Informationen
Die Anwendung basiert auf einer Simulation der Sonneneinstrahlung anhand eines digitalen Geländemodells und der Interpolation von klimatischen Modelldaten der Senatsverwaltung für Stadtentwicklung und Wohnen. Ergänzt wird die Karte durch Points of Interest, also Orten die im Zusammenhang mit den Daten interessant sein könnten. Alle Daten sind Open Data. Mehr über die Daten und die Methodiken zur Datenverarbeitung erfahrt ihr in der [About-Section](https://erfrischungskarte.odis-berlin.de/about?latitude=52.52089570138158&longitude=13.402719915020894&zoom=13.770438659377154) der Erfrischungskarte.

![Points of Interest](/assets/images/projects/erfrischungskarte_pois.png)