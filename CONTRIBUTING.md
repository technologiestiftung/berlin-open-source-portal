# Leitlinien für die Projekt-Einreichung

Das Berlin Open-Source Portal will Open-Source Projekte aus Berliner Verwaltungen und anderen öffentlichen Stellen sichtbarer machen. In diesem Dokument fassen wir zusammen, welche Arten von Projekten wir suchen und welche Informationen für eine Einreichung erforderlich oder empfehlenswert sind.

## Welche Arten von Projekten suchen wir?

Das Berlin Open-Source Portal sammelt **Open-Source Projekte, die von öffentlichen Verwaltungen im Land Berlin (mit)entwickelt, beauftragt oder gefördert wurden.**

Falls Sie Open-Source-Projekte vorschlagen möchten, die von Behörden außerhalb Berlins genutzt werden, sollten sie [diese Liste](https://github.com/okfde/awesome-behoerden-floss) der Open Knowledge Foundation Deutschland ergänzen.

## Wie können Sie ein Projekt einreichen?

Einreichungen können entweder als Pull Request über GitHub gestellt oder per Mail an uns geschickt werden (schreiben Sie uns einfach kurz und wir schicken gerne ein Template zum Ausfüllen). Bei Pull Requests sollten Sie die Struktur eines existierenden Projekts als Template nutzen ([z.B. dieses Projekt](https://github.com/technologiestiftung/berlin-open-source-portal/blob/main/src/projects/breitband.md))

## Welche Informationen zu einem Projekt sollen eingereicht werden?

### Metadaten

Die Metadaten werden benutzt, um Projekte zu filtern und Nutzer:innen einen schnellen Überblick über Projekte anzubieten. Falls Sie ein Projekt über ein Pull Request einreichen, werden die Metadaten alle im "Front Matter" des Projekt-Markdowns angegeben. Das sieht beispielhaft so aus:

```yaml
layout: layouts/project.liquid
tags: ["Umwelt"]
id: giessdenkiez
title: Gieß den Kiez
abstract: Alle Berliner Stadtbäume in einer Anwendung
languages: ["Typescript"]
license: MIT
link: https://www.giessdenkiez.de
repository: https://github.com/technologiestiftung/giessdenkiez-de
developers: ["Technologiestiftung Berlin"]
backers: ["Senatskanzlei Berlin"]
has-hero: true
has-thumb: true
date: 2021-02-16
```

Folgende Daten können angegeben werden (Pflichtfelder sind gekennzeichnet):

| Feld                    | Beschreibung                                                                                                                                                                                                                                                                                                                                                                 | Pflichtfeld? | Kann aus GitHub automatisch ausgelesen werden? |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------- |
| `title`                 | Ein aussagekräftiger Titel für das Projekt oder die Software                                                                                                                                                                                                                                                                                                                 | Ja           | Nein                                           |
| `id`                    | Eine möglichst kurze Buchstabenfolge, mit der das Projekt identifiziert werden kann.                                                                                                                                                                                                                                                                                         | Ja           | Nein                                           |
| `abstract`              | Eine kurze Zusammenfassung des Projekts (ca. 50-80 Zeichen – z.B. "Tool zur Bedarfsmeldung für den Breitbandausbau")                                                                                                                                                                                                                                                         | Ja           | Nein                                           |
| `repository`            | Eine Verlinkung zu einem Repository auf GitHub, GitLab oder einer ähnlichen Plattform, in welcher der Quellcode freiverfügbar ist. _Anmerkung: Dieses Feld ist eigentlich ein Pflichtfeld. Falls es nicht sinnvoll ausgefüllt werden kann, weil bspw. mehrere Repositories gebündelt hinzugefügt werden sollen, schauen Sie sich bitte das Feld `repository_collection` an._ | Ja           | Nein                                           |
| `link`                  | Eine Verlinkung zu einer Projektseite, falls eine solche Seite separat zum Repository existiert                                                                                                                                                                                                                                                                              | Nein         | Nein                                           |
| `license`               | Die Lizenz, unter der das Projekt veröffentlicht wurde                                                                                                                                                                                                                                                                                                                       | Nein         | Ja                                             |
| `tags`                  | Mindestens ein aussagekräftiger Tag oder ein Schlüsselwort damit das Projekt einfach zu finden ist (z.B. "Mobilität" oder "Beteiligung"). Schauen Sie am besten die schon existierenden Tags an und übernehmen Sie diese, insofern sie zum Projekt passen. Maximal 5 Tags.                                                                                                   | Ja           | Nein                                           |
| `languages`             | Eine Auflistung der (primären) Programmiersprachen, die im Quellcode benutzt werden. Falls mehrere Sprachen benutzt werden, sollten maximal 3 aufgelistet werden.                                                                                                                                                                                                            | Nein         | Ja                                             |
| `developers`            | Auflistung der Institutionen, die das Projekt entwickelt haben (kann in bestimmten Fällen auch eine Person sein)                                                                                                                                                                                                                                                             | Ja           | Nein                                           |
| `backers`               | Auflistung der öffentlichen Verwaltungen des Landes Berlin, die das Projekt beauftragt, finanziert oder anderweitig unterstützt haben                                                                                                                                                                                                                                        | Ja           | Nein                                           |
| `date`                  | Das Datum, an dem Sie dieses Projekt einstellen. Format: JJJJ-MM-TT                                                                                                                                                                                                                                                                                                          | Ja           | Nein                                           |
| `has-hero`              | Falls ein Hero-Bild auf der Detail-Seite angezeigt werden soll, sollte hier `true` gesetzt werden. Anderenfalls kann das Feld weggelassen werden.                                                                                                                                                                                                                            | Nein         | Nein                                           |
| `has-thumb`             | Falls ein Thumbnail-Bild in der Projektübersicht angezeigt werden soll, sollte hier `true` gesetzt werden. Anderenfalls kann das Feld weggelassen werden.                                                                                                                                                                                                                    | Nein         | Nein                                           |
| `repository_collection` | Eine Verlinkung zu einer mit dem Projekt verbundenen Sammlung von Repositories, in der der Quellcode frei verfügbar ist. _Anmerkung: Dieses Feld sollte lediglich genutzt werden, wenn das Feld `repository` nicht sinnvoll ausgefüllt werden kann._                                                                                                                         | Nein         | Nein                                           |
| `layout`                | Muss immer `layouts/project.liquid` sein                                                                                                                                                                                                                                                                                                                                     | Ja           | Nein                                           |

Wenn Sie bei `repository` eine URL von GitHub angeben, werden zusätzlich Daten von GitHub erfasst und mit Ihren Angaben im Front Matter zusammengeführt. Was Sie im Front Matter angeben, hat dabei Priorität und wird immer auf Ihrer Projekt-Seite angezeigt.

> Sollte Ihr Quellcode auf einem anderen Source Code-Hoster als GitHub liegen (z.B GitLab oder Bitbucket), können die Daten noch nicht automatisch erfasst werden und Sie sollten diese selbst eintragen.

### Beschreibung des Projekts

Zusätzlich zu den Metadaten braucht jedes Projekt eine Beschreibung. Diese Beschreibung sollte nicht besonders lang sein; Ziel ist es, dass potenzielle Nutzer:innen genug über das Projekt, dessen Hintergrund und Kontext erfahren, um zu verstehen, was das Projekt bzw. die Anwendung kann und ob es zu ihren Bedarfen passt.

Die Beschreibung sollte aus 3 Teilen bestehen:

#### 1 Zusammenfassung:

Eine Kurzbeschreibung des Projektzwecks in 1 oder 2 Sätzen. Eine Art "Elevator Pitch" für das Projekt.

#### 2 Beschreibung des Projekts:

5-8 Sätze die erklären, was das Projekt ist, von wem und in welchem Kontext es entwickelt wurde, für welche Zielgruppe das Projekt gedacht ist, usw. Hier können gerne auch Stichpunkte benutzt werden. Wenn Sie **Screenshots** vom Projekt haben, können diese hier eingefügt werden.

#### 3 Weitere Informationen:

Falls Sie noch etwas zum Projekt sagen wollen – zum Beispiel, ob das Projekt voraussichtlich weiterentwickelt wird oder ob aktiv Mitentwickler:innen gesucht werden, kann das hier ergänzt werden.

### Projektbilder

Falls Sie Bilder Ihres Projekts zeigen möchten, können Sie diese im Verzeichnis `src/images/assets/images/projects/` ablegen. Die Bilder sollten nach folgendem Muster benannt werden: `{ID}_{Beschreibung}.{Format}`, z.B.:

- `giessdenkiez_hero.jpg`
- `giessdenkiez_thumb.png`
- `giessdenkiez_weather.png`

Die ID ist dabei das `id`-Feld im Front Matter.

#### Hero-Bilder

| Format | Farbe      | Ideale Maße |
| ------ | ---------- | ----------- |
| JPG    | Graustufen | 3200x800px  |

#### Thumb-Bilder

| Format | Farbe  | Ideale Maße |
| ------ | ------ | ----------- |
| PNG    | Farbig | 500x500px   |

#### Andere Bilder

| Format     | Farbe                | Ideale Maße |
| ---------- | -------------------- | ----------- |
| JPG o. PNG | Farbig o. Graustufen | 1000x620px  |

Alle Bilder sollten, wenn möglich, komprimiert sein.
