---
layout: layouts/project.liquid
tags: ["Wasser", "Baden", "Gewässerqualität"]
id: badestellen
title: Berliner Badestellen
abstract: Übersicht über Berliner Badestellen mit aktuellen Informationen zur Wasserqualität
languages: ["Typescript"]
license: MIT
link: https://badegewaesser-berlin.de/
repository: https://github.com/technologiestiftung/flusshygiene
has-hero: true
---

Die Anwendung wurde vom Ideation & Prototyping Lab der Technologiestiftung Berlin in Zusammenarbeit mit dem Kompetenzzentrum Wasser, den Berliner Wasserbetrieben und dem LaGeSo entwickelt. Mit dieser Anwendung haben die Berliner Bürger\*innen die Möglichkeit sich tagesaktuell über die Badegewässerqualität der Berliner Badestellen zu informieren. Neben den Messwerten gibt es Informationen rund um die Badestellen, von Barrierefreiheit bis Würstchenbude. Auch eine Weiterleitung zur BVG und Routing Services ist integriert, sodass dem nächsten Badeausflug nichts mehr im Wege steht.

![Berliner Badestellen](/assets/images/projects/badestellen_overview.jpg)

Hervorgegangen ist das Projekt aus dem Forschungsprojekt Flusshygiene. In dem seit 2015 laufenden Projekt haben Wissenschaftler\*innen die von Starkregen beeinflussten Badestellen modelliert. So können nun Vorhersagen über die Gewässerqualität bei solchen Ereignissen gemacht werden. Das LaGeSo, welches für das Beproben der Badestellen zuständig ist, produziert alle zwei Wochen aktuelle Werte. Durch die neue Modellierungsmethode können wir aber tagesaktuelle Werte zur Verfügung stellen. Das Modell betrifft spezifisch die kleine Badewiese und den Grunewaldturm, denn dort sind die Einflüsse bei Starkregenereignissen am stärksten. Die meisten anderen Badestellen, speziell Seen, bleiben davon unbeeinflusst.

![Architektur](/assets/images/projects/badestellen_arc.jpg)

Aus technischer Sicht ist dieses Projekt in der Berliner Datenlandschaft einzigartig. Die der Webanwendung zugrunde liegenden Daten werden von verschiedenen Anbietern geliefert. Zum Teil sind dies offene Daten, beispielsweise die aktuellen Messwerte des LaGeSos und zum anderen aber auch sicherheitsrelevante Daten der Berliner Wasserbetriebe. Alle Daten werden schlussendlich miteinander verschnitten und in Form der Webanwendung den Berliner Bürger\*innen zur Verfügung gestellt. Darüber hinaus werden die veredelten Daten auch an das Lageso zurückgeleitet, welches diese neuen Daten dann nutzt um die eigene Website zu aktualisieren und ihre offenen Daten zu bereichern.
