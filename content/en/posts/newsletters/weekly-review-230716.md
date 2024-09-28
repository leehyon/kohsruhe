---
title: "Newsletter 01 - Study without reflection leads to confusion"
date: 2023-07-16T09:48:30+08:00
draft: false
tags: ["review", "life", "start", "edge-ai", "vectordb"]
categories: ["Newsletter"]
authors:
- "leehyon"
---

{{<audio src="audio/life-live.mp3" caption="♪ Life Live - Mayday" >}}

## Preface

It has been almost a year since I planned to write a weekly report on my blog, and finally, I decided to start writing today. I hope I can publish it in the end.

Why was it delayed until now? I think, on one hand, I have been in the late stage of procrastination, dragging it as long as I could; on the other hand, considering that the weekly report aims to deliver some value rather than merely a life record. Actually, at this moment, I am not sure what specific form this series will take. Although I subscribe to newsletters from some big shots like [Ali Abdaal](https://aliabdaal.com/), compared to their life experiences, reading volume, and reflections on surrounding things, I currently have little to offer, which invisibly increases the pressure of writing.

As for the content, I will initially lean towards some reflections on life, as it is an easy brain activity to do. There are always things happening in the real world, from small conflicts between passengers and drivers on the way to work to big debates among big shots on social media. Whether it's personal experience or observation, if you can reflect more on them, you can still piece together a lot of content. However, I am also exploring this "discover-reflect-record" process, which may be characterized by skimming the surface or general discussions in the near future, so please be lenient.

~~Besides reflecting on life, I will also record some content heard (podcasts) or seen (articles), mainly leaning towards technology and business. I consider myself like a person picking up shells on the beach of life. The sea rises and falls, and some tiny things are always forgotten. I hope these things can be discovered and subtly influence my ordinary life. Of course, if they also happen to inspire you, that would be even better.~~[^ud1]

[^ud1]: Updated on 2024-09-27: This part has been moved to the "Mastodon" for a better presentation

## Facing choices

I was a bit surprised when I learned from a [podcast](https://www.xiaoyuzhoufm.com/episode/64b0826fd46b34865fdaf7cd) that an adult makes at least 35,000[^1] choices a day. But on second thought, it's not surprising because most of them are automatically filtered by our brains, or sometimes choices are made so quickly that we don't even realize it. And this automatic filtering, or more precisely "taking things for granted" is what I want to talk about briefly. Think about how often do we wonder in life, "Why did I do that just now, why did I say that". Maybe most people make choices without knowing how to choose, **hastily but stagnantly**. Many times, our unhappiness is probably because of the absurd choices we made.

[^1]: [35,000 Decisions: The Great Choices of Strategic Leaders](https://go.roberts.edu/leadingedge/the-great-choices-of-strategic-leaders)

### How to change

Currently, I can't say I have a solution, but being aware of those moments of choice, slowing down, and letting rationality intervene instead of taking things for granted, I think would make a significant improvement. "Taking things for granted" is, to some extent, a form of laziness, lazy in thinking, lazy in decision-making. So, when you encounter unhappiness next time, think about what just happened, can you slow down a bit when making a choice, and can you avoid these unhappiness next time.

Moreover, besides myself, I also observe the people around me and see how they make choices, for example:

- Facing an elderly person taking a seat during peak hours on the way to work
- A middle-aged woman complaining about not buying a ticket in advance
- The cashier at Mr. Rice with a bad attitude

## Vector database

This week, when browsing Bilibili, I came across the concept of vector databases. Here is a brief rough discussion, the specific content still needs further research.

Vector databases have become popular due to recent large language models. Traditional databases, such as an Excel table, store structured data, but the explosive growth of modern information technology has generated a lot of unstructured data, common examples being images and videos. How to retrieve this data poses a challenge to large models.

A video contains many features and attributes, such as video duration, related topics, audience, likes, etc. If these attributes are stripped and given values (evaluations), then multiple attributes form a vector space, and the video has a coordinate in this space, a process also known as data vectorization.

Similar data bodies, when vectorized, will be closer in the vector space, which is very suitable for recommendation algorithms.

### Why data should be vectorized

Because vector operations are what computers are best at.

### Vectorization and tagging system

Some time ago, I was studying my tagging system, such as how to tag notes, emails, favorite web pages, etc. Tagging is, to some extent, similar to vectorization. The tagging system can also be seen as a weakened version of a vector database, aiming to achieve better retrieval and association of content through attribute extraction and abstraction.

## Edge computing

Recently, I have been playing with the TI AM62A board and learning about the concept of edge computing. Edge computing has been heard more or less in technology channels before. Unlike cloud computing, edge computing focuses on IoT devices or embedded fields, including edge AI.

> *Edge computing allows devices in remote locations to process data at the "edge" of the network, either by the device or a local server. And when data needs to be processed in the central datacenter, only the most important data is transmitted, thereby minimizing latency.*

![edge-computing-illustration](https://images.kohsruhe.com/2024/edge-computing-illustration.png)
> Image source: [Edge Intelligence](https://ieeexplore.ieee.org/document/8736011)

The development of this technology mainly considers that the data collected by edge devices (especially various sensors) is redundant. If the data is directly uploaded to the data center for cloud computing, it would consume a lot of bandwidth. At the same time, edge devices are generally battery-driven, with power consumption being a priority. So it is best to clean and process the data at the edge end, and only upload it to the cloud when necessary. This also avoids some data privacy issues.

As the last mile technology of artificial intelligence, those interested can refer to [this paper](https://ieeexplore.ieee.org/document/8736011) for further study.

## Performance disclosure

In the past two weeks, the Shenzhen Main Board and the ChiNext Board have welcomed the intensive semi-annual report preview disclosure[^2]. You can look at the pre-increase stocks in the bottom range if you are a short-term speculative player. However, it was only until July 15th, now it's over.

[^2]: [Investment must-have: Performance Disclosure Schedule - Xueqiu](https://xueqiu.com/9752824777/122766349)

## Inescapable daily record

This part will record some work and study progress this week, as well as list books and audio-visual materials, fun things purchased, etc. The content will be relatively trivial.

### Technical learning

- Preparing for the TI Edge AI group presentation with SK-AM62A
- Learned the general development process of Linux u-Boot
- Rebuilt the Git server using Gitea + PostgreSQL
- Set up an internal knowledge network using Hugo + IIS
- Ran some DL models using Miniconda
- Re-studied Git and WSL technologies

### Books and podcasts[^3]

[^3]: Personally, I believe listening to podcasts is a great way to acquire firsthand knowledge, especially interviews with industry insiders

- [来都来了 - No.152 - 嘉宾叶斌：既要又要的人生，真的是你想要的吗？](https://podcasts.apple.com/cn/podcast/no-152-%E5%98%89%E5%AE%BE%E5%8F%B6%E6%96%8C-%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%E7%9A%84%E4%BA%BA%E7%94%9F-%E7%9C%9F%E7%9A%84%E6%98%AF%E4%BD%A0%E6%83%B3%E8%A6%81%E7%9A%84%E5%90%97/id1512932915?i=1000619920004)
- [商业就是这样 - Vol.118 英伟达如何变得“不可替代”？](https://podcasts.apple.com/cn/podcast/vol-118-%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A6%82%E4%BD%95%E5%8F%98%E5%BE%97-%E4%B8%8D%E5%8F%AF%E6%9B%BF%E4%BB%A3/id1552904790?i=1000619426083)
- [What's Next｜科技早知道 - S7E19｜一亿人支持 Meta 新产品「像素级拷贝」Twitter](https://podcasts.apple.com/cn/podcast/s7e19-%E4%B8%80%E4%BA%BF%E4%BA%BA%E6%94%AF%E6%8C%81-meta-%E6%96%B0%E4%BA%A7%E5%93%81-%E5%83%8F%E7%B4%A0%E7%BA%A7%E6%8B%B7%E8%B4%9D-twitter-%E5%8F%AA%E5%9B%A0%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%AA%E6%8B%9B%E9%AA%82/id1494812579?i=1000620854237)
- [She Said](https://movie.douban.com/subject/35493136/)
- [The Logic Behind the Hot Vector Database](https://www.bilibili.com/video/BV1W94y1B7Vd/?share_source=copy_web)
- [Vector Database Technology Appreciation](https://www.bilibili.com/video/BV11a4y1c7SW/?share_source=copy_web)

### Investment and fitness

- Completed 4 rowing machine workouts, totaling 82 minutes
- Stock return last week was +1.36%, underperforming the market +1.92%