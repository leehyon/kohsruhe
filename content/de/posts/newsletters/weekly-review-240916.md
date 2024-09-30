---
title: "Newsletter 06 - Bewegung, Chaos und technische Schulden"
date: 2024-09-16T20:32:22+08:00
draft: false
tags: ["review", "chaos", "fitness", "note-taking", "technical-debt"]
categories: ["Newsletter"]
authors:
- "leehyon"
---

{{<audio src="audio/tropical-rainforest.mp3" caption="♪ Tropical Rainforest - S.H.E" >}}

## Vorwort

Dies ist ein Bericht und eine Reflexion über mein Leben vom 2024-09-09 bis 2024-09-16.

Nach zwei Jahren habe ich wieder Hanteln in die Hand genommen, und es ist nicht mehr ein Gewicht, das ich tragen kann. Von Statistik bis Tiefenlernen scheinen sie weit auseinander zu liegen, aber tatsächlich sind sie ziemlich nah. Auf der Mitarbeiterversammlung habe ich unerwartet zweimal einen Preis erhalten, was zeigt, dass die ursprüngliche Investition sehr wichtig ist. Während des Mittherbstfests Häuser besichtigen, Taifun vorbeiziehen, wann kann ich endlich „flach liegen“?

## Wieder mit dem Training beginnen

Cc hat sich immer beschwert, dass sie mich seit unserer Beziehung nicht mehr trainieren gesehen hat. Die früher sichtbaren Muskeln sind jetzt zu echtem Fett geworden, duang... wie Schweinebauch. Obwohl ich die Hanteln immer dabei hatte und bei mehreren Umzügen nicht daran gedacht habe, sie wegzuwerfen, habe ich in den letzten zwei Jahren tatsächlich selten damit trainiert. Es gibt viele Gründe dafür, wie zum Beispiel der längere Arbeitsweg, der mir nach der Arbeit weniger Zeit lässt, oder das Alter, bei dem ich einfach nur liegen und keine Energie habe, oder auch der Konsumabbau, der es mir nicht erlaubt, mir Proteinpulver zu leisten, und viele andere. Dieses Mal gab es keinen besonderen Grund, das Training wieder aufzunehmen (es ist wie vor zwei Jahren), als ich plötzlich das Gefühl hatte, wieder mit dem Training beginnen zu müssen.

Wenn ich mir jedoch ehrlich die Frage stelle, dann denke ich, dass es daran liegt, dass ich früher jemand war, der immer vollständig vorbereitet sein musste, bevor er etwas begann. Ich glaubte fest an Konzepte wie „keinen unvorbereiteten Kampf führen“. Aber jetzt habe ich das Gefühl, dass ich mit etwas Vorbereitung beginnen sollte; andernfalls werde ich viele Dinge verpassen. Im Vergleich zur Unsicherheit, die durch unzureichende Vorbereitung entsteht, fürchte ich jetzt die Zeitkosten, die leise verschwinden, während ich zögere und schwanke.

## Notizen als chaotisches System

Ich liebe es, Notizen zu machen, angefangen von OneNote, dann zu [Obsidian](https://obsidian.md/), und jetzt zu [Logseq](https://logseq.com/). Ich habe versucht, ein perfektes Notizsystem zu finden (wahrscheinlich werde ich später einen entsprechenden Artikel schreiben). Anfangs dachte ich, ich könnte ein All-in-One-Tool finden, um dieses Ziel zu erreichen, also habe ich viele ausprobiert und bin ständig zwischen verschiedenen Notizsoftware hin- und hergesprungen. Letztendlich brachte mir das aufgebaute Notizsystem nicht viel Nutzen, sondern verbrauchte viel Zeit. Aber ehrlich gesagt ist Logseq die bisher zufriedenstellendste Notizsoftware für mich. Kürzlich hatte ich plötzlich das Gefühl, dass der Schlüssel zu einem perfekten Notizsystem vielleicht nicht die Werkzeuge selbst sind, sondern ich selbst.

Der Auslöser war vor ein paar Tagen, als ich für ein Projekt an einigen Algorithmensachen arbeiten musste, also ging ich zurück und studierte Tiefenlernen und verwandte Kurse. Ich nahm viele Notizen in einem wahnhaften Tempo auf, und das auf Logseq basierende System brach sofort zusammen und wurde chaotisch und unorganisiert, wodurch ich die Motivation verlor, weiterzumachen.

Notizen sind ein chaotisches System, wenn sie nicht organisiert werden, werden sie immer unordentlicher, wobei der Grad des Chaos exponentiell zunimmt, bis die Kosten für die Aufzeichnung unerträglich werden und zur Aufgabe führen. Wenn ich mir die in dieser Zeit aufgezeichneten Inhalte anschaue, sind viele Dinge unnötig. Außerdem ist mein kleines System für solch umfangreiche Notizszenarien ungeeignet. Ich sollte nur meine Gedanken ordnen und nicht Wissen replizieren, langsamer werden, kontrollieren, was ich eingebe, mich auf Hinweise und Wege konzentrieren und leicht zugängliche Informationen ignorieren, ohne billige Aufzeichnungen zu machen.

Das erinnert mich daran, wie ich vor ein paar Tagen einem Kollegen beim Beheben eines Bugs geholfen habe, es fühlte sich genauso an. Um einen kleinen Punkt hinzuzufügen, musste ich viele Teile des Originalcodes ändern, und wenn man nicht aufpasst, wird es immer unordentlicher. Dasselbe gilt für Projekte, bei der ASPICE-Prüfung in den letzten Tagen fühlte es sich wirklich wie „füge keine Entitäten ohne Notwendigkeit hinzu“ an. Je mehr man hinzufügt, desto mehr Fehler macht man, besonders wenn die Ergänzungen unnötig sind. Hier werden viele wahrscheinlich fragen, wie man zukünftige Ergänzungen ausbalanciert? Tatsächlich, wenn wir zurückdenken, warum gibt es zusätzliche Funktionen? Liegt es daran, dass wir anfangs keine Grenzen gesetzt haben? Mit Grenzen würden wir Dinge außerhalb dieser Grenzen nicht berücksichtigen. Natürlich müssen gute Grenzen gestaltet werden, um die gegenseitigen Einflüsse innerhalb und außerhalb der Grenzen zu berücksichtigen. Ein System ist kein isoliertes Gebilde, alles, was Sie hinzufügen, kann sich mit anderen Systemen verbinden und das Chaos erhöhen.

### Vom Chaos zu technischen Schulden

Weiterführende Literatur: [All code is technical debt](https://www.tokyodev.com/articles/all-code-is-technical-debt)

Dieser Artikel führt das Konzept der technischen Schulden und deren Auswirkungen auf die Softwareentwicklung ein. Der Autor verwendet eine Analogie zum Erklären, dass technische Schulden ähnlich wie finanzielle Schulden sind und sich auf die Probleme beziehen, die durch kurzfristige Entwicklungsstrategien entstehen, wobei langfristige Wartungskosten ignoriert werden. Mit zunehmendem Codebestand wird die zukünftige Entwicklungsgeschwindigkeit langsamer, daher kann jede Codierung als Anhäufen technischer Schulden betrachtet werden. Im Artikel wird auch erwähnt, dass neue Funktionen auf bestehenden Annahmen basieren und mehr technische Schulden hinzufügen, und es werden Beispiele gegeben, wie man den Produktwert aufrechterhält und gleichzeitig die technischen Schulden reduziert. Schließlich wird betont, dass Entwickler sich auf die Erstellung wirklich wertvoller Funktionen konzentrieren und unnötiges Codieren vermeiden sollten, um eine nachhaltige Projektentwicklung sicherzustellen.

```markmap
# Technische Schulden
## Übersicht zu technischen Schulden
- Definition: Die Kosten eines temporären Geschwindigkeitsanstiegs, der die zukünftige Entwicklung beeinflusst
- Analogie: Das Konzept von Krediten und Zinsen
  - Initiale Geschwindigkeitszunahme: Aufnahme von Mitteln
  - Späterer Einfluss: Zinszahlung (d.h. erhöhte Komplexität)
- Wichtige Punkte
  - Cautious use to avoid excessive accumulation
  - May benefit in the short term, but hinders product development in the long term

## Ursachen der Akkumulation technischer Schulden
- Implementierung neuer Funktionen fügt Annahmen hinzu
  - Beispiel: Hinzufügen einer Teilnehmerbegrenzung und Vorauszahlungsfunktion zum Zutrittskontrollsystem
    - Neue Anforderungen führen zur Änderung oder Erweiterung des alten Codes
    - Erhöht die Einschränkungen bei nachfolgenden Änderungen
- Unzureichende Berücksichtigung in speziellen Fällen
  - Fall: Der zusätzliche Arbeitsaufwand durch Internationalisierung
    - Übersetzungs- und mehrsprachige Unterstützung erhöhen die Komplexität
    - Wenn der Wert nicht hoch ist, verursacht es negative Auswirkungen

## Strategien zur Reduzierung technischer Schulden
- Sicherstellen, dass aller Code positiven Wert generiert
  - Analysieren, ob neue Funktionen von den Benutzern benötigt werden
  - Förderung des Validierungs- und Bestätigungsprozesses des Werts
- Vermeiden von blindem Codieren
  - Erwägen von nicht-technischen Lösungen
  - Auswahl der besten Lösung basierend auf tatsächlichen Bedürfnissen
- Arbeiten im bestehenden Rahmen
  - Nutzung vorhandener Funktionalitäten und Logiken so weit wie möglich
  - Vermeiden von neuen Annahmen und Einschränkungen
- Regelmäßige Überprüfung und Refaktorierung
  - Reinigung veralteter oder ineffizienter Codes
  - Verbesserung der allgemeinen Codequalität und Effizienz

## Zusammenfassung
- Jede Codezeile während der Entwicklung sorgfältig auf ihre Notwendigkeit prüfen
- Streben nach einer Reduzierung unnötiger technischer Schulden
- Fokus auf langfristige Produktentwicklung statt kurzfristiger Gewinne
```

## Lustige Sachen

Dieser Abschnitt wird einige interessante Inputs aufzeichnen, wie zum Beispiel gelesene Artikel, gehörte Podcasts, gekaufte lustige Gegenstände usw. Obwohl die meisten Inhalte automatisch in der „Toots“-Spalte synchronisiert werden, wird ein Teil davon hier ausgewählt und aufgelistet.

### Bücher und Medien

- [Baden](https://movie.douban.com/subject/36053033/): Japanische Badekultur, etwas pretentiös, aber ihre Haltung, die Natur zu respektieren und das Leben zu genießen, ist bewundernswert.
- [Mond](https://movie.douban.com/subject/3073124/): Low-Budget-Science-Fiction-Film, schon früher gesehen, behandelt Herausforderungen, denen sich die Klontechnologie stellen muss.

### Lebensschnappschüsse

1. Klarer Himmel nach dem Taifun, die Wolken sahen schön aus.
2. Die innere Textur einer Art von Glas.
3. Ein zehn Yuan teures Ladegerät brachte den iPod touch wieder zum Leben.

{{< gallery >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1058.JPG" >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1053.JPG" >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1068.JPG" >}}
{{< /gallery >}}
{{< load-photoswipe >}}
