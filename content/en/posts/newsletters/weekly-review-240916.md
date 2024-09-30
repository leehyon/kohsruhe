---
title: "Newsletter 06 - Exercise, chaos, and technical debt"
date: 2024-09-16T20:32:22+08:00
draft: false
tags: ["review", "chaos", "fitness", "note-taking", "technical-debt"]
categories: ["Newsletter"]
authors:
- "leehyon"
---

{{<audio src="audio/tropical-rainforest.mp3" caption="♪ Tropical Rainforest - S.H.E" >}}

## Foreword

This is a record and reflection on my life from 2024-09-09 to 2024-09-16.

After two years, I picked up dumbbells again, and it is no longer a weight I can bear. From statistics to deep learning, they seem far apart but are actually quite close. At the company staff meeting, I unexpectedly received two prizes, which goes to show that initial investment is very important. During mid-autumn, house hunting, typhoon passing by, when can I finally "lie flat"?

## Restarting exercise

Cc has always complained that ever since we got together, she hasn’t seen me work out. The muscles that were visible before have turned into real fat, duang... like pork belly. Although I always kept the dumbbells and moved houses a few times without thinking of throwing them away, I indeed rarely picked them up these past two years. There are many reasons, such as the longer commute making me have less time after work, or being older and just wanting to lie down without much energy, or even downgrading consumption and not being able to afford protein powder, among many others. This time, there wasn't a particular reason to restart (it’s just like when I stopped two years ago), it suddenly felt like I should start working out again.

However, if I ask myself earnestly, I guess it’s because previously, I was someone who had to be fully prepared before starting anything. I deeply believed in concepts like "not fighting an unprepared battle". But now, I feel that I should start with some preparation. Otherwise, I will miss out on many things. Compared to the uncertainty brought by inadequate preparation, I now fear the time costs that quietly disappear while I hesitate and waver.

## Notes as a chaotic system

I love taking notes, starting from OneNote, then to [Obsidian](https://obsidian.md/), and now to [Logseq](https://logseq.com/). I’ve been trying to find a perfect note-taking system (I will probably write a related article later). At first, I thought I could find an All-in-One tool to achieve this goal, so I tried many and jumped among different note-taking software repeatedly. In the end, the note-taking system I built didn't benefit me much but consumed a lot of my time. But honestly, Logseq is the most satisfying note-taking software I've used so far. Recently, I had a sudden realization that the key to a perfect note-taking system might not be the tools but myself.

The trigger was a few days ago when I needed to work on some algorithm stuff for a project, so I went back to studying deep learning and related courses. I frantically took many notes, and the system built on Logseq collapsed instantly, becoming chaotic and disorganized, making me lose the motivation to continue. 

Notes are a chaotic system; if not organized, they become increasingly messy, with the degree of chaos growing exponentially until the cost of recording becomes unbearable, leading to abandonment. Looking back at what I recorded during this period, many things were unnecessary. Moreover, this small system of mine is unsuitable for such extensive note-taking scenarios. I should only organize my thoughts and not replicate knowledge, slow down, control what I input, focus on clues and paths, and ignore easily accessible information without making cheap records.

This reminds me of helping a colleague fix a bug a few days ago, it felt the same. To add a tiny point, I had to change many parts of the original code, and if not careful, it would become increasingly messy. The same goes for projects, working on the ASPICE audit these days truly felt like "do not add entities without necessity". The more you add, the more mistakes you make, especially if the additions are unnecessary. Here, many might question how to balance future additions? Actually, if we think back, why are there additional features? Is it because we didn't set boundaries initially? With boundaries, we wouldn't consider things outside those boundaries. Of course, good boundaries must be designed, considering the mutual influence within and outside the boundaries. A system is not an isolated entity, anything you add may connect to other systems, thus increasing chaos.

### From chaos to technical debt

Further reading: [All code is technical debt](https://www.tokyodev.com/articles/all-code-is-technical-debt)

This article introduces the concept of technical debt and its impact on software development. The author uses an analogy to explain that technical debt is similar to financial debt, referring to the problems accumulated from taking short-term development strategies while ignoring long-term maintenance costs. As the codebase grows, future development speed slows down, so all coding can be seen as accumulating technical debt. The article also mentions that new features are based on existing assumptions, adding more technical debt, and gives examples of how to maintain product value while reducing technical debt. Finally, it emphasizes that developers should focus on creating truly valuable features and avoid unnecessary code writing to ensure sustainable project development.

```markmap
# Technical Debt
## Overview of Technical Debt
- Definition: The cost of temporary speed increase affecting future development
- Analogy: The concept of loans and interest
  - Initial speedup: Borrowing funds
  - Later impact: Repaying interest (i.e., increasing complexity)
- Key Points
  - Use cautiously to avoid excessive accumulation
  - May benefit in the short term, but slows down product development in the long term

## Causes of Technical Debt Accumulation
- Implementing new features adds assumptions
  - Example: Adding participant limit and prepayment features to access control system
    - New requirements lead to modifying or extending old codes
    - Increases restrictions on subsequent changes
- Inadequate consideration in special cases
  - Case: The extra workload brought by internationalization
    - Translation and multilingual support increase complexity
    - If the value is not high, it causes a negative impact

## Strategies to Reduce Technical Debt
- Ensure all code generates positive value
  - Analyze whether new features are needed by users
  - Promote value validation and confirmation process
- Avoid blind coding
  - Consider non-technical solutions
  - Choose the best solution based on actual needs
- Work within the existing framework
  - Utilize existing features and logic as much as possible
  - Avoid introducing new assumptions and restrictions
- Regular review and refactoring
  - Clean up outdated or inefficient code
  - Improve overall code quality and efficiency

## Summary
- Carefully consider the necessity of each line of code during development
- Strive to reduce unnecessary technical debt accumulation
- Focus on long-term product development rather than short-term gains
```

## Fun stuff

This section will record some interesting inputs, such as articles read, podcasts listened to, fun items purchased, etc. Although most of the content will be automatically synced in the "Toots" column, some of it will still be selected and listed here.

### Books and media

- [Bathing](https://movie.douban.com/subject/36053033/): Japanese bathing culture, somewhat pretentious, but their attitude of respecting nature and enjoying life is worth learning.
- [Moon](https://movie.douban.com/subject/3073124/): Low-budget sci-fi film watched before, dealing with challenges faced by cloning technology.

### Life snapshots

1. Clear skies after the typhoon, the clouds looked beautiful
2. The internal texture of a type of glass
3. A ten-yuan charging dock brought the iPod touch back to life

{{< gallery >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1058.JPG" >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1053.JPG" >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1068.JPG" >}}
{{< /gallery >}}
{{< load-photoswipe >}}
