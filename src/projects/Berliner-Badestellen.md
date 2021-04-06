---
layout: layouts/project.liquid
tags: ["Wasser", "Baden", "Wasserqualität"]
id: badestellen
title: Berliner Badestellen
abstract: Übersicht über Berliner Badestellen mit aktuellen Informationen zur Wasserqualität
languages: ["Typescript"]
license: MIT
link: https://badegewaesser-berlin.de/
repository: https://github.com/technologiestiftung/flusshygiene
has-hero: true
has-thumb: true
date: 2021-02-16
---

## Zusammenfassung

Mit dieser Anwendung haben die Berliner Bürger\*innen die Möglichkeit sich tagesaktuell über die Badegewässerqualität der Berliner Badestellen zu informieren. Zusätzlich zu den Messewerten gibt es von Barrierefreiheit über Würstchenbuden weitere Informationen rund um die Badestelle. Eine Weiterleitung zur BVG und Routing Services ist ebenfalls integriert, sodass dem nächsten Badeausflug nichts mehr im Wege steht.

## Beschreibung des Projekts

Die Anwendung wurde vom Ideation & Prototyping Lab der Technologiestiftung Berlin in Zusammenarbeit mit dem Kompetenzzentrum Wasser, den Berliner Wasserbetrieben und dem LaGeSo entwickelt.

![Berliner Badestellen](/assets/images/projects/badestellen_overview.jpg)

Hervorgegangen ist das Projekt aus dem Forschungsprojekt Flusshygiene. In dem seit 2015 laufenden Projekt haben Wissenschaftler\*innen die von Starkregen beeinflussten Badestellen modelliert. Vorhersagen über die Gewässerqualität bei derartigen Ereignissen werden so möglich. 
Bisher wurden die Werte der Beprobung der Badestellen durch das LaGeSo alle zwei Wochen bereit gestellt. Durch das konzipierte Modellierungsverfahren stehen nun tagesaktuelle Werte zur Verfügung. 
Das Modell betrifft spezifisch die kleine Badewiese und den Grunewaldturm, da die Einflüsse bei Starkregenereignissen dort am stärksten sind. Die meisten anderen Badestellen, speziell Seen, bleiben davon unbeeinflusst.

![Architektur](/assets/images/projects/badestellen_arc.jpg)

Aus technischer Sicht ist dieses Projekt in der Berliner Datenlandschaft einzigartig. Die der Webanwendung zugrunde liegenden Daten werden von verschiedenen Anbietern geliefert. Zum Teil sind dies offene Daten, beispielsweise die aktuellen Messwerte des LaGeSos, zum anderen aber auch sicherheitsrelevante Daten der Berliner Wasserbetriebe. Alle Daten werden schlussendlich miteinander verschnitten und in Form der Webanwendung den Berliner Bürger\*innen zur Verfügung gestellt. Darüber hinaus werden die veredelten Daten auch an das LaGeSo zurückgeleitet, welches diese neuen Daten nutzt um die eigene Website zu aktualisieren und ihre offenen Daten zu erweitern.
