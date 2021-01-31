# Leitlinien für die Projekt-Einreichung 

*Dieser ist noch ein Entwurf!*

Das Berlin Open-Source Portal will Open Source-Projekte aus und für Berlin sichtbarer machen, damit es leichter ist für Verwaltungsbeschäftigte passende Open Source-Lösungen für ihre Bedarfe zu finden. In diesem Dokument fassen wir zusammen, welche Arten von Projekten wir darstellen wollen, und welche Informationen für eine Einreichung erforderlich oder empfehlenswert sind.

## Welche Arten von Projekten akzeptieren wir?

Das Berlin Open-Source Portal sammelt **Open Source-Projekte, die entweder vom Land Berlin (mit)entwickelt wurden, die in der Berliner Verwaltung aktiv benutzt werden, oder die explizit mit der Zielgruppe Berliner Verwaltung entwickelt wurden.**

Falls du ein Open Source-Projekt kennst, das nicht in der Berliner Verwaltung benutzt wird aber in einer anderer Verwaltung schon, vielleicht magst du [diese Liste](https://github.com/okfde/awesome-behoerden-floss) von der Open Knowledge Foundation Deutschland ergänzen?

## Wie kann ich ein Projekt einreichen?

Neue Einreichungen könnten entweder als Pull Request über GitHub gemacht werden, oder über **dieses Formular**. Bei Pull Requests solltest du einfach die Struktur eines existierenden Projekts als Template nutzen ([z.B.](https://github.com/technologiestiftung/berlin-open-source-portal/blob/main/src/projects/breitband.md))

## Welche Informationen sollen mit einem Projekt eingereicht werden?

### Grunddaten

Die Grunddaten werden benutzt, Projekte zu filtern und Nutzer*innen einen schnellen Überblick über Projekte anzubieten. Falls du ein Projekt über ein Pull Request einreichst, sind die Grunddaten alle im Front Matter des Projekt-Markdown.

 Folgende Daten können als Grunddaten angegeben werden (einige davon sind Pflichtfelder müssen angegeben werden): 

|Feld|Beschreibung|Pflichtfeld?|
|---|---|---|
|title|Ein aussagekräftiger Titel für das Projekt oder die Software|Ja|
|abstract|Eine kurze zusammenfassung des Projekts (ca. 50-80 Zeichen – z.B. "Tool zur Bedarfsmeldung für den Breitbandausbau")|Ja|
|repository|Eine Verlinkung zu einem Repository auf GitHub, GitLab oder eine ähnliche Plattform, wo der Quellcode freiverfügbar ist|Ja|
|link|Eine Verlinkung zu einer Projektseite, falls eine solche Seite separat von dem Repository existiert|Nein|
|license|Die Lizenz, worunter das Projekt veröffentlicht wurde|Ja|
|tags|Mindestens 1 aussagekräftiges Tag oder Schlüsselwort, welches es für mögliche Interessierte leichter macht, das Projekt schnell zu finden (z.B. "Mobilität" oder "Beteiligung")|Ja|
languages|Eine Auflistung der (primären) Programmiersprachen, die im Quellcode benutzt werden|Ja|
|developer|Die Person oder Organisation, die das Projekt entwickelt hat|Nein|

### Beschreibung des Projekts

Zusätzlich zu den Grunddaten, braucht jedes Projekt eine Beschreibung. Diese Beschreibung sollte nicht besonders lang sein; das Ziel ist, dass potenzielle Nutzer*innen genug über das Projekt und sein Hintergrund/Kontext lernen können, um zu verstehen, was das Projekt kann und ob es zu ihren Bedarfen passt.

Die Beschreibung sollte aus 3 Teile bestehen:

**Kurzbeschreibung:** Eine Zusammenfassung des Zwecks des Projekts in 1 oder 2 Sätzen. Eine Art "Elevator Pitch" für das Projekt.

**Beschreibung des Projekts:** 5-8 Sätze die erklären, was das Projekt ist, von wem es entwickelt wurde und in welchem Kontext, für welche Zielgruppe das Projekt gedacht ist, usw. Hier könnten gerne auch Stichpunkte benutzt werden. Wenn du ein **Screenshot** vom Projekt hast, kannst du das auch gerne hier ergänzen.

**Möglichkeiten zur Weiterentwicklung:** 1-3 Sätze dazu, ob das Projekt voraussichtlich weiterentwickelt wird oder ob Mitentwickler:innen aktiv gesucht werden. 