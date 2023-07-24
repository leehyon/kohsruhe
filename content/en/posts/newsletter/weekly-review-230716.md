---
title: "Newsletter 01 - Getting Started"
date: 2023-07-16T09:48:30+08:00
draft: false
tags: ["review", "life", "start", "edge-ai", "vector-db"]
categories: ["Newsletter"]
authors:
- "leehyon"
---

{{<audio src="audio/life-live.mp3" caption="♪ Life Live - Mayday" >}}

## Motivation

It has been a year since I first thought about using this blog to write my weekly reviews. Today, I am determined to start writing an one and hopefully be able to post it eventually.

How did it take me this long to get started? On one hand, I am a severe procrastinator, struggling with the late stages of the condition. On the other hand, I considered that a weekly review should offer some value, rather than being mere accounts of my daily life. At this moment, I am not entirely sure about the specific format this series should take. While I have subscribed to some great newsletters like [Ali Abdaal](https://aliabdaal.com/)'s, my own life experiences, reading habits, and reflections on the world around me seem rather inadequate in comparison. This, in turn, has silently added to the pressure of writing.

The content, at the beginning, will focus on personal reflections on life. After all, it's a mental exercise, and the act of thinking is quite easy once you decide to do it. Moreover, the real world is constantly filled with events, from small arguments between passengers and drivers on the way to the office, to prominent figures engaging in virtual exchanges on social media. Whether experienced firsthand or observed from a distance, there is much to explore by thinking a bit deeper about these occurrences.

However, the process of "discovering, thinking, and recording" is something I'm still figuring out, and the lack of depth in my current records might be a prominent feature for the time being, LOL.

Apart from reflecting on life, I will also document some of the content I come across, be it from podcasts or articles, with a focus on topics related to technology and business. I see myself as a person strolling along the beach, where life's ocean tides come and go, leaving behind tiny, forgotten treasures. I hope to discover these little gems and allow them to subtly permeate my ordinary life. Of course, if they happen to inspire you as well, that would be even better.

## Facing Choices

When I heard on a [podcast](https://www.xiaoyuzhoufm.com/episode/64b0826fd46b34865fdaf7cd) that an adult makes at least 35,000 decisions[^1] every day, I was a bit surprised. However, upon closer reflection, it didn't seem so unexpected. Most of these decisions are made unconsciously or so quickly that we barely have time to realize it was a choice in the first place. This unconscious or, more precisely, "taken for granted" aspect is what I want to discuss briefly.

Think about how many moments in life make you wonder why you acted or spoke a certain way. Perhaps, in times of uncertainty, most people make choices in haste and end up feeling stuck. Many times, our unhappiness is a result of making choices without fully understanding why we made them.

[^1]: [35,000 Decisions: The Great Choices of Strategic Leaders](https://go.roberts.edu/leadingedge/the-great-choices-of-strategic-leaders)

### How to change?

Currently, I can't say there's a definite solution, but I can realize the moments of those choices. Slow down a bit and let rationality intervene instead of acting on assumptions. I believe this approach will greatly improve things. Taking things for granted is, to some extent, a form of laziness – lazy thinking and decision-making. So, the next time I encounter unhappiness, I'll think about what I just experienced and whether I can slow down to make choices, and if possible, optimize or avoid them in the future.

Also, besides observing myself, I'll also observe the people around me and how they make choices, for example:

- Facing an elderly person taking a seat during the rush hour on the way to work.
- A middle-aged woman who didn't buy a ticket in advance and keeps complaining.
- Mr. Dami, the cashier who doesn't seem to be in a good mood.

## Vector Database

This week, while browsing a certain website, I came across the concept of "Vector Database". I will just briefly introduce the idea here, and the specific details will require further exploration.

Vector databases have gained popularity due to the recent surge in AI large models. Traditional databases, like an Excel sheet, store structured data. However, the explosive growth of modern information technology has generated a vast amount of unstructured data, such as images, audio, and video. Retrieving this data poses a challenge for large AI models.

For instance, a video contains numerous features and attributes, such as its duration, the main topic it covers, target audience, number of likes, and so on. By extracting these attributes and assigning numerical values (ratings) to them, a multi-dimensional vector space is formed. Thus, the video has a coordinate within this space, and this process is known as data vectorization.

Similar data bodies, when vectorized, will be located closer to each other within the vector space, making it highly suitable for recommendation algorithms.

### Why is data vectorized?

Because vector operations are what computers excel at.

### Vectorization and labeling system

Recently, I have been building my own labeling system, such as how to tag notes, emails, and bookmarked web pages, among other things. We might have the opportunity to discuss labels in more detail later. For now, I want to emphasize that the process of labeling is somewhat similar to vectorization, and a labeling system can be considered a weakened form of a vector database. The main goal of both is to achieve better content retrieval and association through the extraction and abstraction of attributes.

## Edge Computing

Recently, I've been working with the TI AM62A EVM board and, in the process, I've also learned about the concept of Edge Computing. I've heard about Edge Computing to some extent on technology-related channels before, and it differs from cloud computing. Edge Computing focuses on the Internet of Things (IoT) devices and the embedded domain, including Edge AI.

![](https://kohsruhe-images.oss-cn-shanghai.aliyuncs.com/images/edge-computing.png)
>Image source: [Edge Intelligence](https://ieeexplore.ieee.org/document/8736011)

The development of this technology is mainly driven by the consideration that data collected from edge devices, especially various sensors, is often redundant. Uploading such data directly to cloud computing would consume a significant amount of bandwidth, and edge devices are typically battery-powered with a priority on power efficiency. Therefore, it is preferable to perform data cleaning and processing at the edge and only send data to the cloud when necessary. This approach also helps to avoid data privacy issues.

As the last mile technology of artificial intelligence, those interested can refer to [this paper](https://ieeexplore.ieee.org/document/8736011) for further study.

## The Inevitable Ramblings

This section will document some progress made in work and studies this week. It will also list books, audiovisual materials, interesting purchases, and more. The content will be more rambly.

### Technical learning

- Prepared an internal sharing session on TI Edge AI by incorporating SK-AM62A EVM board.
- Learned about the general development process of Linux u-Boot.
- Rebuilt the intranet Git server using Gitea + PostgreSQL.
- Set up the department's intranet website using Hugo + IIS.
- Ran some deep learning models using Miniconda.
- Refreshed knowledge on Git and WSL technologies by reading books.

### Books and media[^2]

[^2]: I personally believe that listening to podcasts is an excellent way to gain firsthand knowledge, especially through interviews with industry professionals.

- [Podcast: 来都来了 - No.152 - 嘉宾叶斌：既要又要的人生，真的是你想要的吗？](https://podcasts.apple.com/cn/podcast/no-152-%E5%98%89%E5%AE%BE%E5%8F%B6%E6%96%8C-%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%E7%9A%84%E4%BA%BA%E7%94%9F-%E7%9C%9F%E7%9A%84%E6%98%AF%E4%BD%A0%E6%83%B3%E8%A6%81%E7%9A%84%E5%90%97/id1512932915?i=1000619920004)
- [Podcast: 商业就是这样 - Vol.118 英伟达如何变得“不可替代”？](https://podcasts.apple.com/cn/podcast/vol-118-%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A6%82%E4%BD%95%E5%8F%98%E5%BE%97-%E4%B8%8D%E5%8F%AF%E6%9B%BF%E4%BB%A3/id1552904790?i=1000619426083)
- [Podcast: What's Next｜科技早知道 - S7E19｜一亿人支持 Meta 新产品「像素级拷贝」Twitter](https://podcasts.apple.com/cn/podcast/s7e19-%E4%B8%80%E4%BA%BF%E4%BA%BA%E6%94%AF%E6%8C%81-meta-%E6%96%B0%E4%BA%A7%E5%93%81-%E5%83%8F%E7%B4%A0%E7%BA%A7%E6%8B%B7%E8%B4%9D-twitter-%E5%8F%AA%E5%9B%A0%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%AA%E6%8B%9B%E9%AA%82/id1494812579?i=1000620854237)
- [Movie: 她说 She Said](https://movie.douban.com/subject/35493136/)
- [Video: 向量数据库爆火背后的逻辑](https://www.bilibili.com/video/BV1W94y1B7Vd/?share_source=copy_web)
- [Video: 向量数据库技术鉴赏](https://www.bilibili.com/video/BV11a4y1c7SW/?share_source=copy_web)

### Investment and fitness

- Completed 4 sessions of rowing machine training, totaling 82 minutes.
- Last week's stock return rate was +1.36%, lagging behind the market's +1.92%.









