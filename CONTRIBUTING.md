# Leitlinien für die Projekt-Einreichung

Das Berlin Open-Source Portal will Open-Source Projekte aus und für Berlin sichtbarer machen, damit es leichter ist für Verwaltungsbeschäftigte passende Open-Source Lösungen für ihre Bedarfe zu finden. In diesem Dokument fassen wir zusammen, welche Arten von Projekten wir darstellen wollen und welche Informationen für eine Einreichung erforderlich oder empfehlenswert sind.

## Welche Arten von Projekten akzeptieren wir?

Das Berlin Open-Source Portal sammelt **Open-Source Projekte, die entweder direkt vom Land Berlin (mit)entwickelt wurden, oder die durch Finanzierung vom Land Berlin entwickelt wurden.**

Falls Sie ein Open-Source Projekt kennen, das nicht in der Berliner Verwaltung benutzt wird aber in einer anderer öffentlichen Verwaltung, können Sie [diese Liste](https://github.com/okfde/awesome-behoerden-floss) von der Open Knowledge Foundation Deutschland ergänzen.

## Wie können Sie ein Projekt einreichen?

Einreichungen können entweder als Pull Request über GitHub gestellt oder per Mail an uns eingereicht werden (schreiben Sie uns einfach an, und wir schicken gerne ein Template zum Ausfüllen). Bei Pull Requests sollten Sie einfach die Struktur eines existierenden Projekts als Template nutzen ([z.B. dieses Projekt](https://github.com/technologiestiftung/berlin-open-source-portal/blob/main/src/projects/breitband.md))

## Welche Informationen zu einem Projekt sollen eingereicht werden?

### Metadaten

Die Metadaten werden benutzt, um Projekte zu filtern und Nutzer:innen einen schnellen Überblick über Projekte anzubieten. Falls Sie ein Projekt über ein Pull Request einreichen, werden die Metadaten alle im "Front Matter" des Projekt-Markdowns angegeben.

Folgende Daten können angegeben werden (Pflichtfelder sind gekennzeichnet):

| Feld          | Beschreibung                                                                                                                                                                                                                                                               | Pflichtfeld? | Kann aus GitHub automatisch ausgelesen werden? |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------- |
| `title`       | Ein aussagekräftiger Titel für das Projekt oder die Software                                                                                                                                                                                                               | Ja           | Nein                                           |
| `id`          | Eine möglichst kurze Buchstabenfolge, mit der dein Projekt identifiziert werden kann.                                                                                                                                                                                      | Ja           | Nein                                           |
| `abstract`    | Eine kurze Zusammenfassung des Projekts (ca. 50-80 Zeichen – z.B. "Tool zur Bedarfsmeldung für den Breitbandausbau")                                                                                                                                                       | Ja           | Nein                                           |
| `repository`  | Eine Verlinkung zu einem Repository auf GitHub, GitLab oder einer ähnlichen Plattform, in dem der Quellcode freiverfügbar ist                                                                                                                                              | Ja           | nein                                           |
| `link`        | Eine Verlinkung zu einer Projektseite, falls eine solche Seite separat zum Repository existiert                                                                                                                                                                            | Nein         | Nein                                           |
| `license`     | Die Lizenz, unter der das Projekt veröffentlicht wurde                                                                                                                                                                                                                     | Nein         | Ja                                             |
| `tags`        | Mindestens ein aussagekräftiger Tag oder ein Schlüsselwort damit das Projekt einfach zu finden ist (z.B. "Mobilität" oder "Beteiligung"). Schauen Sie am besten die schon existierenden Tags an und übernehmen Sie diese, insofern sie zum Projekt passen. Maximal 5 Tags. | Ja           | Nein                                           |
| `languages`   | Eine Auflistung der (primären) Programmiersprachen, die im Quellcode benutzt werden. Falls mehrere Sprachen benutzt werden, sollten maximal 3 aufgelistet werden.                                                                                                          | Nein         | Ja                                             |
| `institution` | Die Institution, die das Projekt entwickelt hat (kann in bestimmten Fällen auch eine Person sein)                                                                                                                                                                          | Nein         | Nein                                           |
| `has-hero`    | Falls ein Hero-Bild auf der Detail-Seite angezeigt werden soll, sollte hier `true` gesetzt werden. Anderenfalls kann das Feld weggelassen werden.                                                                                                                          | Nein         | Nein                                           |
| `has-thumb`   | Falls ein Thumbnail-Bild in der Projektübersicht angezeigt werden soll, sollte hier `true` gesetzt werden. Anderenfalls kann das Feld weggelassen werden.                                                                                                                  | Nein         | Nein                                           |

Wenn Sie bei `repository` eine URL von GitHub angeben, werden zusätzlich Daten von GitHub erfasst und mit Ihren Angaben im Front Matter vereinigt. Was Sie im Front Matter angeben hat dabei Priorität und wird immer auf Ihrer Projekt-Seite angezeigt.

> Sollte Ihr Quellcode auf einem anderen Source Code Hoster als GitHub liegen (z.B GitLab oder Bitbucket), können die Daten noch nicht automatisch erfasst werden und Sie sollten diese selbst eintragen.

### Beschreibung des Projekts

Zusätzlich zu den Metadaten braucht jedes Projekt eine Beschreibung. Diese Beschreibung sollte nicht besonders lang sein; Ziel ist es, dass potenzielle Nutzer:innen genug über das Projekt, dessen Hintergrund und Kontext erfahren, um zu verstehen, was das Projekt bzw. die Anwendung kann und ob es zu ihren Bedarfen passt.

Die Beschreibung sollte aus 3 Teilen bestehen:

#### 1 Zusammenfassung:

Eine Kurzbeschreibung des Projektzwecks in 1 oder 2 Sätzen. Eine Art "Elevator Pitch" für das Projekt.

#### 2 Beschreibung des Projekts:

5-8 Sätze die erklären, was das Projekt ist, von wem es entwickelt wurde und in welchem Kontext, für welche Zielgruppe das Projekt gedacht ist, usw. Hier können gerne auch Stichpunkte benutzt werden. Wenn Sie **Screenshots** vom Projekt haben, können diese hier eingefügt werden.

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
