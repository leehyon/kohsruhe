---
title: "周报 06 - 锻炼、混沌和技术债"
date: 2024-09-16T20:32:22+08:00
draft: false
tags: ["review", "chaos", "fitness", "note-taking", "technical-debt"]
categories: ["Newsletter"]
authors:
- "leehyon"
---

{{<audio src="audio/tropical-rainforest.mp3" caption="♪ 热带雨林 - S.H.E" >}}

## 前言

本篇是对 2024-09-09 到 2024-09-16 这周生活的记录与思考。

时隔两年再次拿起哑铃，这已不是我能承受之重。从统计学到深度学习，看似很远实则很近。公司员工大会“被迫”领了两次奖品，所以说初始投资很重要。中秋看房，台风过境，什么时候能躺平？

## 重启锻炼

超超一直抱怨自从跟她一起后就没见我锻炼了，之前还能看的肌肉已经是如假包换的肥肉了，duang~ 似五花。虽然哑铃一直带着，期间搬过几次家也没想过扔掉，但这两年，确实没有拿起过几次。原因有很多，比如上班远了下班后不像以前有那么多时间，又或者年纪大了只想躺着没那么多精力，再或者消费降级买不起蛋白粉了，各种各样的。这次想重新开始其实也没特别的原因，就跟两年前结束的一样，就突然觉得应该开始锻炼了。

不过如果努力问自己，我想大概是因为之前我是一个一定要做充分准备后才开始的人，以前的我对类似“不打无准备之战”这样的观念深以为然。但是现在，我可能觉得稍微准备下就应该开始了，不然就会错过很多东西。相比没有充分准备带来的不确定性，现在的我更害怕是那些在我徘徊犹豫时悄然消失的时间成本。

## 笔记是一个混沌系统

我是一个比较喜欢做笔记的人，从最开始的 OneNote，到后面的 Obsidian，再到现在的 Logseq，我试图寻找一个完美的笔记系统（我后面应该会写一篇相关的文章）。最开始我想的是有那么一个 all-in-one，能帮我实现这一目标，所以尝试了很多，也在很多笔记软件之间反复横跳，导致最后下来我搭建的笔记系统也没给我带来多大的益处，反而消耗了我不少时间，但实话说 Logseq 确实是我用到现在最满意的笔记软件。不过最近我突然有种感觉，完美的笔记系统可能重点不在工具，而在于我自己。

起因是这几天项目上要弄点算法的东西，所以我回去补了深度学习及相关的课程。然后就疯狂记了很多笔记，结果之前基于 Logseq 搭建的系统不堪一击，一下子又混乱无序了，导致我又没继续记录的动力了。

笔记是一个混沌系统，不整理会越来越乱，混沌程度呈指数级增长，直到最后记录成本骤升无法忍受，逃不掉被弃的命运。其实我再回头看这段时间记录的内容，很多东西是没有必要的，而且我这个小系统不适合这样的笔记场景，我只应该做思路的整理，而不是知识的搬运，慢下来，控制输入，侧重线索和路径，忽略那些容易得到的，不去做廉价的记录。

其实不仅仅是笔记，这让我想起前几天帮同事修 bug，也是这种感觉，为了增加很小的一个点，要动原代码很多东西，一不留神就会越改越乱。项目也是同理，这几天弄的 ASPICE 审核，真的是「如无必要，勿增实体」，加的东西越多错的越多，问题是还加的是一些没用的东西。但这里，我想很多人会质疑，那怎么去兼顾后续的新增？其实，我们往回想，为什么会有新增？是不是在最开始的时候我们没有设定好边界，有了边界，就不会去考虑那些边界外的东西。当然，好的边界是要设计的，要去考虑边界内外的相互影响。系统不是一个孤立的实体，你添加的任何元素都可能会被关联到其他系统上，从而增加混沌。

### 从混沌到技术债

延伸阅读：[All code is technical debt](https://www.tokyodev.com/articles/all-code-is-technical-debt)

该文介绍了技术债务的概念及其对软件开发的影响。作者通过比喻说明，技术债务类似于财务债务，指因采取短期开发策略而忽视长期维护成本所累积的问题。随着代码量的增加，未来开发速度会变慢，因此所有编码都可视为累积的技术债务。文中还提到，新增功能会基于现有假设，从而增加更多的技术债务，并举例说明了如何在保持产品价值的同时减少技术债务。最后强调，作为开发者应重视创造真正有价值的功能，避免无谓的代码编写，以确保项目的可持续发展。

```markmap
# 技术债务
## 技术债务概述
  - 定义：暂时性速度提升的代价，影响未来开发速度
  - 类比：贷款与利息的概念
    - 初始速度提升：借入资金
    - 后期影响：需支付利息（即复杂度增加）
  - 关键点
    - 需慎重使用，避免过多累积
    - 短期内可能获益，长期则会减缓产品发展

## 技术债务积累原因
  - 新功能实现增加假设
    - 例子：门禁系统添加限制参与者数量、预付功能等
      - 新需求导致旧代码修改或扩展
      - 增加了对后续更改的限制
  - 特殊情况下考虑不周全
    - 案例：国际化带来的额外工作量
      - 翻译和多语言支持增加复杂度
      - 如果价值不高，则造成负效果

## 减少技术债务策略
  - 确保所有代码产生正向价值
    - 分析新功能是否为用户所需
    - 推动价值验证和确认过程
  - 不盲目编码
    - 考虑非技术解决方案
    - 根据实际需求选择最佳方案
  - 在现有框架内工作
    - 尽量利用已有功能和逻辑
    - 避免引入新的假设和限制
  - 定期审查和重构
    - 清理过时或低效代码
    - 提升整体代码质量和效率

## 总结
  - 开发中应谨慎考虑每一条代码的必要性
  - 力争减少无谓的技术债务累积
  - 注重产品的长远发展而非短期利益
```

## 逃不掉的流水帐

这个部分会记录本周个人项目的一些进展，同时也罗列看过或听过的书和影音、买过的好玩的东西等，内容会比较流水账。

### 书和影音

- [汤道](https://movie.douban.com/subject/36053033/)：日本人的泡澡文化，有点矫情，但敬畏自然、享受生活的态度值得学习
- [月球](https://movie.douban.com/subject/3073124/)：低成本科幻片，之前看过，克隆人技术需要面临的难题

### 生活剪影

1. 台风过境后的大晴天，云朵很好看
2. 一种玻璃的内部纹理
3. 十几块的充电底座让 iPod touch 起死回生

{{< gallery >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1058.JPG" >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1053.JPG" >}}
  {{< figure src="https://images.kohsruhe.com/2024/IMG_1068.JPG" >}}
{{< /gallery >}}
{{< load-photoswipe >}}
