---
title: "Newsletter 01 - Lernen ohne Nachdenken führt zu Verwirrung"
date: 2023-07-16T09:48:30+08:00
draft: false
tags: ["review", "life", "start", "edge-ai", "vectordb"]
categories: ["Newsletter"]
authors:
- "leehyon"
---

{{<audio src="audio/life-live.mp3" caption="♪ Life Live - Mayday" >}}

## Vorwort

Es ist fast ein Jahr her, seit ich geplant habe, einen Wochenbericht auf meinem Blog zu schreiben, und endlich habe ich mich entschieden, heute damit zu beginnen. Ich hoffe, ich kann es am Ende veröffentlichen.

Warum wurde es bis jetzt hinausgezögert? Ich denke, einerseits war ich in der Spätphase der Prokrastination und habe es so lange wie möglich hinausgezögert; andererseits hatte ich erwogen, dass der Wochenbericht einen gewissen Wert liefern soll und nicht nur ein Lebensprotokoll sein soll. Tatsächlich weiß ich in diesem Moment noch nicht genau, welche Form diese Serie haben wird. Obwohl ich Newsletter von einigen großen Namen wie [Ali Abdaal](https://aliabdaal.com/) abonniere, habe ich im Vergleich zu ihren Lebenserfahrungen, ihrer Lesevielfalt und ihren Reflexionen über die Umgebung derzeit wenig zu bieten, was den Druck des Schreibens unsichtbar erhöht.

Was den Inhalt betrifft, so werde ich mich zunächst auf einige Reflexionen über das Leben konzentrieren, da dies eine einfache Kopfarbeit ist. Es gibt immer Dinge, die in der realen Welt passieren, von kleinen Konflikten zwischen Passagieren und Fahrern auf dem Weg zur Arbeit bis hin zu großen Debatten zwischen großen Namen in den sozialen Medien. Ob persönliche Erfahrung oder Beobachtung, wenn man mehr darüber nachdenkt, kann man dennoch viele Inhalte zusammenstellen. Ich erkunde jedoch auch diesen "Erkennen-Reflektieren-aufzeichnen" Prozess, der in naher Zukunft durch oberflächliches oder allgemeines Diskutieren gekennzeichnet sein kann, also bitte nachsichtig sein.

~~Neben den Reflexionen über das Leben werde ich auch einige gehörte (Podcasts) oder gesehene (Artikel) Inhalte aufzeichnen, die hauptsächlich auf Technologie und Geschäft ausgerichtet sind. Ich betrachte mich selbst wie jemanden, der am Strand des Lebens Muscheln sammelt. Das Meer steigt und fällt, und einige winzige Dinge werden immer vergessen. Ich hoffe, diese Dinge können entdeckt werden und subtil mein gewöhnliches Leben beeinflussen. Natürlich wäre es umso besser, wenn sie auch dich inspirieren könnten.~~[^ud1]

[^ud1]: Aktualisiert am 2024-09-27: Dieser Teil wurde in die "Mastodon" Kolumne verschoben, um eine bessere Präsentation zu erzielen

## Entscheidungen treffen

Ich war etwas überrascht, als ich aus einem [podcast](https://www.xiaoyuzhoufm.com/episode/64b0826fd46b34865fdaf7cd) erfuhr, dass ein Erwachsener mindestens 35.000[^1] Entscheidungen am Tag trifft. Aber bei näherem Nachdenken ist es nicht überraschend, denn die meisten davon werden automatisch von unserem Gehirn herausgefiltert oder die Entscheidungen werden so schnell getroffen, dass wir es nicht einmal bemerken. Und dieses automatische Filtern oder genauer gesagt "als selbstverständlich ansehen", ist das, worüber ich kurz sprechen möchte. Überlege, wie oft wir im Leben denken, "Warum habe ich das gerade so gemacht, warum habe ich das gesagt". Vielleicht treffen die meisten Menschen Entscheidungen, ohne zu wissen, wie sie wählen sollen, **hastig, aber stagnierend**. Viele Male ist unser Unglück wahrscheinlich auf die absurden Entscheidungen zurückzuführen, die wir getroffen haben.

[^1]: [35,000 Decisions: The Great Choices of Strategic Leaders](https://go.roberts.edu/leadingedge/the-great-choices-of-strategic-leaders)

### Wie man sich ändert

Derzeit kann ich nicht sagen, dass ich eine Lösung habe, aber sich dieser Momente der Entscheidung bewusst zu sein, langsamer zu werden und die Rationalität eingreifen zu lassen, anstatt Dinge als selbstverständlich zu betrachten, denke ich, würde eine bedeutende Verbesserung bringen. "Als selbstverständlich anzunehmen" ist, bis zu einem gewissen Grad, eine Form von Faulheit, Faulheit im Denken, Faulheit bei der Entscheidungsfindung. Wenn du also das nächste Mal auf Unglück stößt, denke darüber nach, was gerade passiert ist, kannst du bei der Entscheidung ein wenig langsamer werden und kannst du dieses Unglück beim nächsten Mal vermeiden.

Außerdem beobachte ich neben mir auch die Menschen um mich herum und sehe, wie sie Entscheidungen treffen, zum Beispiel:

- Angesichts eines älteren Menschen, der während der Hauptverkehrszeit einen Sitzplatz einnimmt
- Eine mittlere Frau, die sich beschwert, weil sie im Voraus kein Ticket gekauft hat
- Der schlecht gelaunte Kassierer bei Mr. Rice

## Vektordatenbank

Diese Woche bin ich beim Durchstöbern von Bilibili auf das Konzept der Vektordatenbanken gestoßen. Hier ist eine kurze grobe Diskussion, der spezifische Inhalt muss noch weiter erforscht werden.

Vektordatenbanken sind aufgrund der jüngsten großen Sprachmodelle beliebt geworden. Traditionelle Datenbanken, wie eine Excel-Tabelle, speichern strukturierte Daten, aber das explosive Wachstum der modernen Informationstechnologie hat viele unstrukturierte Daten erzeugt, häufige Beispiele sind Bilder und Videos. Wie man diese Daten abruft, stellt eine Herausforderung für große Modelle dar.

Ein Video enthält viele Merkmale und Attribute, wie z. B. die Videodauer, verwandte Themen, Zielgruppe, Likes usw. Wenn diese Attribute entblößt und mit Werten (Bewertungen) versehen werden, dann bilden mehrere Attribute einen Vektorraum und das Video hat in diesem Raum eine Koordinate, ein Prozess, der auch als Datenvektorisierung bekannt ist.

Ähnliche Datenkörper, wenn sie vektorisiert werden, werden im Vektorraum näher zusammenliegen, was sich sehr gut für Empfehlungssysteme eignet.

### Warum Daten vektorisiert werden sollten

Weil Vektoroperationen das sind, was Computer am besten können.

### Vektorisierung und Tagging-System

Vor einiger Zeit habe ich mein Tagging-System untersucht, z. B. wie man Notizen, E-Mails, bevorzugte Webseiten usw. taggt. Das Taggen ist bis zu einem gewissen Grad ähnlich wie die Vektorisierung. Das Tagging-System kann auch als eine abgeschwächte Version einer Vektordatenbank betrachtet werden, die darauf abzielt, den Abruf und die Zuordnung von Inhalten durch Attributextraktion und -abstraktion zu verbessern.

## Edge Computing

Kürzlich habe ich mit dem TI AM62A Board gespielt und das Konzept des Edge Computing kennengelernt. Edge Computing ist mehr oder weniger in Technologiekreisen zuvor gehört worden. Im Gegensatz zum Cloud Computing konzentriert sich Edge Computing auf IoT-Geräte oder eingebettete Bereiche, einschließlich Edge AI.

> *Edge computing allows devices in remote locations to process data at the "edge" of the network, either by the device or a local server. And when data needs to be processed in the central datacenter, only the most important data is transmitted, thereby minimizing latency.*

![edge-computing-illustration](https://images.kohsruhe.com/2024/edge-computing-illustration.png)
> Bildquelle: [Edge Intelligence](https://ieeexplore.ieee.org/document/8736011)

Die Entwicklung dieser Technologie berücksichtigt hauptsächlich, dass die von Edge-Geräten (insbesondere verschiedenen Sensoren) gesammelten Daten redundant sind. Wenn die Daten direkt an das Datenzentrum für Cloud Computing hochgeladen werden, würde dies eine Menge Bandbreite verbrauchen. Gleichzeitig sind Edge-Geräte in der Regel batteriebetrieben, wobei der Stromverbrauch Priorität hat. Daher ist es am besten, die Daten am Edge-Ende zu bereinigen und zu verarbeiten und nur bei Bedarf in die Cloud hochzuladen. Dies vermeidet auch einige Datenschutzprobleme.

Als die letzte Meile der künstlichen Intelligenz können Interessierte in [diesem Papier](https://ieeexplore.ieee.org/document/8736011) nachlesen, um weiter zu lernen.

## Leistungsbericht

In den letzten zwei Wochen hat die Shenzhen Main Board und die ChiNext Board die intensive Halbjahresberichterstattung Vorschau Offenlegung[^2] begrüßt. Sie können die Vorlaufaktien im unteren Bereich sehen, wenn Sie ein kurzfristiger spekulativer Spieler sind. Es war jedoch nur bis zum 15. Juli, jetzt ist es vorbei.

[^2]: [Investment must-have: Performance Disclosure Schedule - Xueqiu](https://xueqiu.com/9752824777/122766349)

## Unvermeidliches tägliches Protokoll

Dieser Teil wird einige Arbeits- und Lernfortschritte dieser Woche aufzeichnen, sowie Bücher und audiovisuelle Materialien, gekaufte unterhaltsame Dinge usw. auflisten. Der Inhalt wird relativ trivial sein.

### Technisches Lernen

- Vorbereitung für die TI Edge AI-Gruppenpräsentation mit SK-AM62A
- Den allgemeinen Entwicklungsprozess von Linux u-Boot erlernt
- Der Git-Server neu aufgebaut mit Gitea + PostgreSQL
- Ein internes Wissensnetzwerk mit Hugo + IIS eingerichtet
- Einige DL-Modelle mit Miniconda ausgeführt
- Git und WSL-Technologien nochmals gelernt

### Bücher und audiovisuelle Materialien[^3]

[^3]: Persönlich glaube ich, dass das Hören von Podcasts eine großartige Möglichkeit ist, um aus erster Hand Wissen zu erwerben, insbesondere Interviews mit Brancheninsidern

- [来都来了 - No.152 - 嘉宾叶斌：既要又要的人生，真的是你想要的吗？](https://podcasts.apple.com/cn/podcast/no-152-%E5%98%89%E5%AE%BE%E5%8F%B6%E6%96%8C-%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%E7%9A%84%E4%BA%BA%E7%94%9F-%E7%9C%9F%E7%9A%84%E6%98%AF%E4%BD%A0%E6%83%B3%E8%A6%81%E7%9A%84%E5%90%97/id1512932915?i=1000619920004)
- [商业就是这样 - Vol.118 英伟达如何变得“不可替代”？](https://podcasts.apple.com/cn/podcast/vol-118-%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A6%82%E4%BD%95%E5%8F%98%E5%BE%97-%E4%B8%8D%E5%8F%AF%E6%9B%BF%E4%BB%A3/id1552904790?i=1000619426083)
- [What's Next｜科技早知道 - S7E19｜一亿人支持 Meta 新产品「像素级拷贝」Twitter](https://podcasts.apple.com/cn/podcast/s7e19-%E4%B8%80%E4%BA%BF%E4%BA%BA%E6%94%AF%E6%8C%81-meta-%E6%96%B0%E4%BA%A7%E5%93%81-%E5%83%8F%E7%B4%A0%E7%BA%A7%E6%8B%B7%E8%B4%9D-twitter-%E5%8F%AA%E5%9B%A0%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%AA%E6%8B%9B%E9%AA%82/id1494812579?i=1000620854237)
- [Sie sagte](https://movie.douban.com/subject/35493136/)
- [Die Logik hinter der heißen Vektordatenbank](https://www.bilibili.com/video/BV1W94y1B7Vd/?share_source=copy_web)
- [Wertschätzung der Vektordatenbanktechnologie](https://www.bilibili.com/video/BV11a4y1c7SW/?share_source=copy_web)

### Investition und Fitness

- 4 Rudergerät-Workouts abgeschlossen, insgesamt 82 Minuten
- Aktienrendite letzte Woche war +1.36%, unterperformte den Markt +1.92%