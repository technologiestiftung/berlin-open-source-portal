# Leitlinien für die Projekt-Einreichung 

*Das ist noch ein Entwurf!*

Das Berlin Open-Source Portal will Open-Source Projekte aus und für Berlin sichtbarer machen, damit es leichter ist für Verwaltungsbeschäftigte passende Open-Source Lösungen für ihre Bedarfe zu finden. In diesem Dokument fassen wir zusammen, welche Arten von Projekten wir darstellen wollen und welche Informationen für eine Einreichung erforderlich oder empfehlenswert sind.

## Welche Arten von Projekten akzeptieren wir?

Das Berlin Open-Source Portal sammelt **Open-Source Projekte, die entweder direkt vom Land Berlin (mit)entwickelt wurden, oder die durch Finanzierung vom Land Berlin entwickelt wurden.**

Falls du ein Open-Source Projekt kennst, das nicht in der Berliner Verwaltung benutzt wird aber in einer anderer öffentlichen Verwaltung, kannst du [diese Liste](https://github.com/okfde/awesome-behoerden-floss) von der Open Knowledge Foundation Deutschland ergänzen.

## Wie kann ich ein Projekt einreichen?

Einreichungen können entweder als Pull Request über GitHub gestellt oder per Mail an uns eingereicht werden (schreib uns einfach an, und wir schicken dich gerne ein Template zum Ausfüllen). Bei Pull Requests solltest du einfach die Struktur eines existierenden Projekts als Template nutzen ([z.B. dieses Projekt](https://github.com/technologiestiftung/berlin-open-source-portal/blob/main/src/projects/breitband.md))

## Welche Informationen zu einem Projekt sollen eingereicht werden?

### Metadaten

Die Metadaten werden benutzt, um Projekte zu filtern und Nutzer:innen einen schnellen Überblick über Projekte anzubieten. Falls du ein Projekt über ein Pull Request einreichst, werden die Metadaten alle im Front Matter des Projekt-Markdown angegeben.

Folgende Daten können als Grunddaten angegeben werden (Pflichtfelder müssen angegeben werden). **Wenn dein Projekt schon auf GitHub liegt, werden einige diese Felder automatisch über die GitHub-API erfasst**; das heißt, die müssen nicht angegeben werden. Diese Felder sind in der Tabelle unten entsprechend markiert. 

|Feld|Beschreibung|Pflichtfeld?|Kann aus GitHub automatisch ausgelesen werden?
|---|---|---|---|
|title|Ein aussagekräftiger Titel für das Projekt oder die Software|Ja|Nein|
|abstract|Eine kurze Zusammenfassung des Projekts (ca. 50-80 Zeichen – z.B. "Tool zur Bedarfsmeldung für den Breitbandausbau")|Ja|Nein|
|repository|Eine Verlinkung zu einem Repository auf GitHub, GitLab oder einer ähnlichen Plattform, in dem der Quellcode freiverfügbar ist|Ja|nein|
|link|Eine Verlinkung zu einer Projektseite, falls eine solche Seite separat zum Repository existiert|Nein|Nein|
|license|Die Lizenz, unter der das Projekt veröffentlicht wurde|Ja|Ja|
|tags|Mindestens einen aussagekräftigen Tag oder ein Schlüsselwort (maximal 5), welches es für mögliche Interessierte leichter macht, das Projekt schnell zu finden (z.B. "Mobilität" oder "Beteiligung"). Schau am besten die existierenden Tags auf an und übernimm die, insofern als die zum Projekt passen.|Ja|Nein|
languages|Eine Auflistung der (primären) Programmiersprachen, die im Quellcode benutzt werden. Falls mehrere Sprachen benutzte werden, sollten maximal 3 aufgelistet werden.|Ja|Ja|
|organisation|Die Organisation, die das Projekt entwickelt hat (könnte auch im bestimmten Fälle eine Person sein)|Nein|Nein|

### Beschreibung des Projekts

Zusätzlich zu den Grunddaten, braucht jedes Projekt eine Beschreibung. Diese Beschreibung sollte nicht besonders lang sein; Ziel ist es, dass potenzielle Nutzer:innen genug über das Projekt und sein Hintergrund/Kontext erfahren, um zu verstehen, was das Projekt bzw. die Anwendung kann und ob es zu ihren Bedarfen passt.

Die Beschreibung sollte aus 3 Teile bestehen:

**Zusammenfassung:** Eine Kurzbeschreibung des Projektzwecks in 1 oder 2 Sätzen. Eine Art "Elevator Pitch" für das Projekt.

**Beschreibung des Projekts:** 5-8 Sätze die erklären, was das Projekt ist, von wem es entwickelt wurde und in welchem Kontext, für welche Zielgruppe das Projekt gedacht ist, usw. Hier könnten gerne auch Stichpunkte benutzt werden. Wenn du ein **Screenshot** vom Projekt hast, kannst du das auch gerne hier ergänzen.

**Weitere Informationen:** Falls du noch was zum Projekt sagen willst – zum Beispiel, ob das Projekt voraussichtlich weiterentwickelt wird oder ob aktiv Mitentwickler:innen gesucht werden, kann das hier ergänzt werden.
