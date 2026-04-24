---
title: "[译] AI 学习法典"
date: 2024-08-25T13:35:08+08:00
draft: false
tags: ["transformer", "reading", "llm", "translation"]
categories: ["notes"]
authors:
- "leehyon"
---

本文档为一份详尽的 AI 学习资源指南，原英文由 a16z 整理。

> Original: https://a16z.com/ai-canon/

---

人工智能研究正以指数级速度增长。对于 AI 专家而言，跟上所有新发表的内容已非易事，而初学者更是难以知晓从何着手。

因此，在本文中，我们分享一份精选的资源清单，这些资源帮助我们更深入地了解现代 AI。我们称之为"AI 法典"，因为这些论文、博文、课程和指南在过去几年对领域产生了巨大的影响。

我们首先介绍 *transformer* 和 *latent diffusion* 模型（它们是当前 AI 浪潮的推动力）的入门知识。然后，我们将深入探讨技术学习资源；使用大型语言模型（LLM）构建的实践指南；以及 AI 市场分析。最后，我们提供一份里程碑研究成果的参考列表，从 "Attention is All You Need" 开始——这是 Google 2017 年发表的论文，它向世界介绍了 transformer 模型，开启了生成式 AI 时代。

## 入门介绍……

这些文章不需要任何专业背景知识，可以帮助你快速了解现代 AI 浪潮中最重要的部分。

- [Software 2.0](https://karpathy.medium.com/software-2-0-a64152b37c35)：Andrej Karpathy 是最早清晰解释（早在 2017 年！）新一轮 AI 浪潮为何如此重要的人之一。他的观点是，AI 是一种编程计算机的新方式且功能强大。随着 LLM 的快速发展，这一论断已被证明具有先见之明为了解 AI 市场可能如何发展提供了一个很好的心智模型。
- [State of GPT](https://build.microsoft.com/en-US/sessions/db3f4859-cd30-4445-a0cd-553c3304f8e2)：同样来自 Karpathy，这是对 ChatGPT / GPT 模型总体工作原理、如何使用它们以及 R&D 可能走向何方的非常易懂的解释。
- [What is ChatGPT doing … and why does it work?](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)：计算机科学家和企业家 Stephen Wolfram 从基本原理出发，对现代 AI 模型的工作原理进行了深入但极具可读性的解释。他追溯了从早期神经网络到今天的 LLM 和 ChatGPT 的时间线。
- [Transformers, explained](https://daleonai.com/transformers-explained)：Dale Markowitz 的这篇文章更简短、更直接地回答了"什么是 LLM，它是如何工作的？"这个问题。这是逐步了解该主题并培养对技术直觉的好方法。文章写于 GPT-3 时期，但仍适用于更新的模型。
- [How Stable Diffusion works](https://mccormickml.com/2022/12/21/how-stable-diffusion-works/)：这是上一篇文章的计算机视觉类比。Chris McCormick 通俗地解释了 Stable Diffusion 的工作原理，并培养对文本到图像模型的直觉。对于一个更温和的入门介绍，请查看 r/StableDiffusion 的这个[漫画](https://www.reddit.com/r/StableDiffusion/comments/zs5dk5/i_made_an_infographic_to_explain_how_stable/)。

## 基础学习：神经网络、反向传播和嵌入

这些资源提供了对机器学习和 AI 基础概念的基座理解，从深度学习基础知识到 AI 专家的大学课程。

### 解读文章

- [Deep learning in a nutshell: core concepts](https://developer.nvidia.com/blog/deep-learning-nutshell-core-concepts/)：来自 Nvidia 的这个四部分系列文章，介绍了 2015 年实践中的深度学习基础知识，适合任何刚刚开始了解 AI 的人。
- [Practical deep learning for coders](https://course.fast.ai/)：关于 AI 基础知识的综合性免费课程，通过实际示例和代码进行讲解。
- [Word2vec explained](https://towardsdatascience.com/word2vec-explained-49c52b4ccb71)：对嵌入和词元（token）的简单介绍，它们是 LLM（以及所有语言模型）的构建块。
- [Yes you should understand backprop](https://karpathy.medium.com/yes-you-should-understand-backprop-e2f06eab496b)：如果你想了解细节，这是一篇关于反向传播的更深入的文章。如果你想深入学习，可以尝试斯坦福的 [CS231n 课程](https://www.youtube.com/watch?v=i94OvYb6noo)（在 YouTube 上）。

### 课程

- [Stanford CS229](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU)：吴恩达（Andrew Ng）的机器学习导论，涵盖机器学习基础知识。
- [Stanford CS224N](https://www.youtube.com/playlist?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ)：Chris Manning 的深度学习自然语言处理，涵盖从第一代 LLM 到 NLP 基础知识。


## 技术深潜：理解 transformer 和大型模型

有无数资源试图解释 LLM 的工作原理。以下是我们最喜欢的一些，针对广泛的读者/观众。

### 解读文章

- [The illustrated transformer](https://jalammar.github.io/illustrated-transformer/)：Jay Alammar 对 transformer 架构的更技术性的概述。
- [The annotated transformer](http://nlp.seas.harvard.edu/annotated-transformer/)：如果你想从源代码级别理解 transformer，这是一篇深度文章。需要一些 PyTorch 知识。
- [Let's build GPT: from scratch, in code, spelled out](https://www.youtube.com/watch?v=kCc8FmEb1nY)：对于工程师来说，Karpathy 做了视频演练，讲解如何从零开始构建 GPT 模型。
- [The illustrated Stable Diffusion](https://jalammar.github.io/illustrated-stable-diffusion/)：对潜在扩散（latent diffusion）模型的介绍，这是图像生成式 AI 模型中最常见的类型。
- [RLHF: Reinforcement Learning from Human Feedback](https://huyenchip.com/2023/05/02/rlhf.html)：Chip Huyen 解释了 RLHF，它可以使 LLM 的行为更加可预测和人性化。这是 ChatGPT 等系统中最重要但最少被理解的方面之一。
- [Reinforcement learning from human feedback](https://www.youtube.com/watch?v=hhiLw5Q_UFg)：计算机科学家和 OpenAI 联合创始人 John Shulman 在这个精彩的演讲中更深入地探讨了 LLM 与 RLHF 的当前状态、进展和局限性。

### 课程

- [Stanford CS25](https://www.youtube.com/watch?v=P127jhj-8-Y)：Transformers United，一个关于 Transformers 的在线研讨会。
- [Stanford CS324](https://stanford-cs324.github.io/winter2022/)：Percy Liang、Tatsu Hashimoto 和 Chris Re 的大型语言模型，涵盖 LLM 的广泛技术和非技术方面。

### 参考和评论

- [Predictive learning, NIPS 2016](https://www.youtube.com/watch?v=Ount2Y4qxQo&t=1072s)：在这场早期演讲中，Yann LeCun 为无监督学习作为大规模 AI 模型架构的关键元素提出了有力论据。跳转到 [19:20](https://youtu.be/Ount2Y4qxQo?t=1160) 查看著名的蛋糕类比，它仍然是现代 AI 最好的心智模型之一。
- [AI for full-self driving at Tesla](https://www.youtube.com/watch?v=hx7BXih7zx8)：另一个经典的 Karpathy 演讲，这次涵盖特斯拉的数据收集引擎。从 [8:35](https://youtu.be/hx7BXih7zx8?t=515) 开始是一段关于 AI 的伟大演讲，解释了为什么长尾问题（在这种情况下是停车标志检测）如此困难。
- [The scaling hypothesis](https://gwern.net/scaling-hypothesis)：LLM 最令人惊讶的方面之一是扩展（添加更多数据和计算）不断提高准确性。GPT-3 是第一个清晰展示这一点的模型，Gwern 的文章很好地解释了背后的直觉。
- [Chinchilla's wild implications](https://www.lesswrong.com/posts/6Fpvch8RR29qLEWNH/chinchilla-s-wild-implications)：表面上是对重要的 Chinchilla 论文（见下文）的解释，但这篇文章触及了 LLM 扩展的核心问题：我们是否正在耗尽数据？它建立在上述文章的基础上，提供了对扩展定律的刷新视角。
- [A survey of large language models](https://arxiv.org/pdf/2303.18223v4.pdf)：对当前 LLM 的综合分解，包括开发时间线、规模、训练策略、训练数据、硬件等。
- [Sparks of artificial general intelligence: Early experiments with GPT-4](https://arxiv.org/abs/2303.12712)：微软研究院关于 GPT-4（当前最先进的 LLM）能力相对于人类智能的早期分析。
- [The AI revolution: How Auto-GPT unleashes a new era of automation and creativity](https://pub.towardsai.net/the-ai-revolution-how-auto-gpt-unleashes-a-new-era-of-automation-and-creativity-2008aa2ca6ae)：Auto-GPT 和 AI 代理的入门介绍。这项技术还处于早期阶段，但很重要——它使用互联网访问和自生成的子任务来解决特定的复杂问题或目标。
- [The Waluigi Effect](https://www.lesswrong.com/posts/D7PumeYTDPfBTp3i7/the-waluigi-effect-mega-post)：表面上是对 "Waluigi 效应"（即为什么 LLM 行为中会出现"另一个自我"）的解释，但有趣的主要是对 LLM 提示理论的深度探讨。


## 使用 LLM 构建的实践指南

一个新的应用堆栈正在以 LLM 为核心兴起。虽然关于这个主题没有很多正式的教育资源，但我们挑选了一些最有用的资源。

### 参考

- [Build a GitHub support bot with GPT3, LangChain, and Python](https://dagster.io/blog/chatgpt-langchain)：现代 LLM 应用堆栈最早的公开解释之一。其中的一些建议已经过时，但在许多方面，它推动了新 AI 应用的广泛采用和实验。
- [Building LLM applications for production](https://huyenchip.com/2023/04/11/llm-engineering.html)：Chip Huyen 讨论了构建 LLM 应用中的许多关键挑战、如何解决它们，以及什么样的用例最有意义。
- [Prompt Engineering Guide](https://www.promptingguide.ai/)：对于编写 LLM 提示的任何人这是最全面的指南，为一些流行的模型提供了具体示例。对于更轻松、更对话性的处理，请尝试 [Brex 的提示工程指南](https://github.com/brexhq/prompt-engineering)。
- [Prompt injection: What's the worst that can happen?](https://simonwillison.net/2023/Apr/14/worst-that-can-happen/) 提示注入是 LLM 应用中潜伏的一个潜在严重安全漏洞，目前还没有完美的解决方案。Simon Willison 在这篇文章中给出了对这个问题的权威描述。Simon 关于 AI 的几乎所有内容都很出色。
- [OpenAI cookbook](https://github.com/openai/openai-cookbook/tree/main)：对于开发者来说，这是使用 OpenAI API 的权威指南和代码示例集合。它随着新的代码示例不断更新。
- [Pinecone learning center](https://www.pinecone.io/learn/)：许多 LLM 应用基于向量搜索范式。Pinecone 的学习中心（尽管是品牌化的供应商内容）提供了关于如何构建这种模式的一些最有用的指导。
- [LangChain docs](https://python.langchain.com/en/latest/index.html)：作为 LLM 应用的默认编排层，LangChain 连接到堆栈中几乎所有其他部分。因此，他们的文档是整个堆栈及其各部分如何组合在一起的真正参考。

### 课程

- [LLM Bootcamp](https://fullstackdeeplearning.com/llm-bootcamp/)：Charles Frye、Sergey Karayev 和 Josh Tobin 构建基于 LLM 的应用的实践课程。
- [Hugging Face Transformers](https://huggingface.co/learn/nlp-course/chapter1/1)：在 Hugging Face transformers 库中使用开源 LLM 的指南。

### LLM 基准测试

- [Chatbot Arena](https://lmsys.org/blog/2023-05-03-arena/)：由加州大学伯克利分校团队领导的流行 LLM 的 Elo 式排名系统。用户还可以通过头对头比较模型参与。
- [Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)：Hugging Face 的排名，通过一组标准基准和任务比较开源 LLM。

## 市场分析

我们都惊叹于生成式 AI 能产生什么，但关于"这一切意味着什么"仍有很多问题。哪些产品和公司将存活并茁壮成长？艺术家会怎样？公司应该如何使用它？它将如何真正影响就业和社会？以下是一些回答这些问题尝试。

### a16z 思考

- [谁拥有生成式 AI 平台？](https://a16z.com/who-owns-the-generative-ai-platform/)：我们对生成式 AI 基础设施、模型和应用各层价值积累地点和可能积累地点的旗舰评估。
- [Navigating the high cost of AI compute](https://a16z.com/2023/04/27/navigating-the-high-cost-of-ai-compute/)：详细分解了为什么生成式 AI 模型需要这么多计算资源，以及如何在高需求市场中获取这些资源（即，在正确的数量、正确的成本下获得正确的 GPU）。
- [Art isn't dead, it's just machine-generated](https://a16z.com/art-isnt-dead-its-just-machine-generated/)：审视 AI 模型如何能够以比软件开方等领圈更快的速度重塑创意领域——通常被认为是抵御自动化的最后堡垒。
- [The generative AI revolution in games](https://a16z.com/the-generative-ai-revolution-in-games/)：我们的游戏团队深入分析了轻松创建高度详细图形的能力将如何改变游戏设计师、工作室和整个市场的运作方式。我们的游戏团队的这篇[后续文章](https://a16z.com/the-generative-ai-revolution-will-enable-anyone-to-create-games/)专门探讨了 AI 生成内容相对于用户生成内容的作用。
- [对于 B2B 生成式 AI 应用来说，越少就越多吗？](https://a16z.com/for-b2b-generative-ai-apps-is-less-more/)：关于 LLM 在 B2B 企业应用世界中将如何发展的预测，核心观点是汇总信息最终比生成文本更有价值。
- [Financial services will embrace generative AI faster than you think](https://a16z.com/2023/04/19/financial-services-will-embrace-generative-ai-faster-than-you-think/)：认为金融服务行业准备将生成式 AI 用于个性化消费者体验、成本高效运营、更好的合规性、改进的风险管理以及动态预测和报告。
- [Generative AI: The next consumer platform](https://a16z.com/generative-ai-the-next-consumer-platform/)：审视生成式 AI 如何影响消费者市场在从治疗到电子商务的一系列领域的机会。
- [To make a real difference in health care, AI will need to learn like we do](https://time.com/6274752/ai-health-care/)：AI 准备从根本上改变我们看待预防和治疗疾病的方式。然而，要真正将药物发现到护理交付转变，我们应该投资创建一个"专家" AI 生态系统——就像我们今天最好的医生和药物开发人员那样学习。
- [The new industrial revolution: Bio x AI](https://a16z.com/2023/05/17/the-new-industrial-revolution-bio-x-ai/)：人类历史上下一场工业革命将是人工智能驱动生物学。

### 其他观点

- [On the opportunities and risks of foundation models](https://arxiv.org/abs/2108.07258)：斯坦福关于基础模型的概述论文。长且有观点，但它塑造了这个术语。
- [State of AI Report](https://www.stateof.ai/)：每年一度的 AI 领域所有动态总结，包括技术突破、行业发展、政治/监管、经济影响、安全以及对未来的预测。
- [GPTs are GPTs: An early look at the labor market impact potential of large language models](https://arxiv.org/abs/2303.10130)：来自 OpenAI、OpenResearch 和宾夕法尼亚大学研究人员的这篇论文预测，大约 80% 的美国劳动力可能至少有 10% 的工作任务会受到引入 LLM 的影响，而大约 19% 的工人可能看到至少 50% 的任务受到影响。
- [Deep medicine: How artificial intelligence can make healthcare human again](https://www.amazon.com/Deep-Medicine-Eric-Topol-audiobook/dp/B07PJ21V5N/ref=sr_1_1?hvadid=580688888836&hvdev=c&hvlocphy=9031955&hvnetw=g&hvqmt=e&hvrand=13698160037271563598&hvtargid=kwd-646099228782&hydadcr=15524_13517408&keywords=eric+topol+deep+medicine&qid=1684965845&sr=8-1)：Eric Topol 博士揭示人工智能如何有潜力将医生从干扰人际关系的耗时的任务中解放出来。医患关系得到恢复。（[a16z 播客](https://a16z.com/podcast/a16z-podcast-ai-and-your-doctor-today-and-tomorrow/)）


## 里程碑研究成果

我们今天看到的绝大多数出色的 AI 产品都源于同样出色的研究，这些研究来自大型公司和顶尖大学的专家。最近，我们也看到了个人和开源社区令人印象深刻的工作，将流行项目带入新方向，例如创建自动化代理或将模型移植到更小的硬件占用空间。

以下是为那些真正想深入研究生成式 AI 的人收集的许多这些论文和项目。

*对于研究论文和项目，我们还提供了随附博客文章或网站的链接，这些链接往往在更高层次上解释事物。我们还包括了原始发表年份，以便您可以追踪基础研究的时间线。*

### 大型语言模型

#### 新模型

- [Attention is all you need](https://arxiv.org/abs/1706.03762)（2017）：来自 Google Brain 的原始 transformer 工作和研究论文，它开启了一切。（[博客文章](https://ai.googleblog.com/2017/08/transformer-novel-neural-network.html)）
- [BERT: pre-training of deep bidirectional transformers for language understanding](https://arxiv.org/abs/1810.04805)（2018）：最早公开可用的 LLM 之一，至今仍有许多变体在使用。（[博客文章](https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html)）
- [Improving language understanding by generative pre-training](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)（2018）：OpenAI 关于 GPT 架构的第一篇论文，该架构已成为 LLM 的主导发展路径。（[博客文章](https://openai.com/research/language-unsupervised)）
- [Language models are few-shot learners](https://arxiv.org/abs/2005.14165)（2020）：OpenAI 描述 GPT-3 和现代 LLM 的仅解码器架构的论文。
- [Training language models to follow instructions with human feedback](https://arxiv.org/abs/2203.02155)（2022）：OpenAI 的论文，解释 InstructGPT，它利用人类在循环中训练模型，从而更好地遵循提示中的指令。这是使 LLM 对消费者可访问的关键解锁之一（例如，通过 ChatGPT）。（[博客文章](https://openai.com/research/instruction-following)）
- [LaMDA: language models for dialog applications](https://arxiv.org/abs/2201.08239)（2022）：来自 Google 的模型，专门设计用于在广泛的各种主题中实现人与聊天机器人之间自由流动的对话。（[博客文章](https://blog.google/technology/ai/lamda/)）
- [PaLM: Scaling language modeling with pathways](https://arxiv.org/abs/2204.02311)（2022）：来自 Google 的 PaLM，利用跨数千个芯片训练 LLM 的新系统，并展示了随模型规模扩大某些任务的改进超出预期。（[博客文章](https://ai.googleblog.com/2022/04/pathways-language-model-palm-scaling-to.html)）。另见 [PaLM-2 技术报告](https://arxiv.org/abs/2305.10403)。
- [OPT: Open Pre-trained Transformer language models](https://arxiv.org/abs/2205.01068)（2022）：OPT 是表现最好的全开源 LLM 之一。这个 1750 亿参数模型的发布包含代码，并在公开可用的数据集上训练。（[博客文章](https://www.facebook.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/)）
- [Training compute-optimal large language models](https://arxiv.org/abs/2203.15556)（2022）：Chinchilla 论文。它认为大多数模型受数据限制，而不是计算限制，并改变了关于 LLM 扩展的共识。（[博客文章](https://www.deepmind.com/blog/an-empirical-analysis-of-compute-optimal-large-language-model-training)）
- [GPT-4 technical report](https://arxiv.org/abs/2303.08774)（2023）：OpenAI 最新、最伟大的论文，以其揭示的内容之少而闻名！（[博客文章](https://openai.com/research/gpt-4)）。[GPT-4 系统卡片](https://cdn.openai.com/papers/gpt-4-system-card.pdf)揭示了 OpenAI 如何处理幻觉、隐私、安全和其他问题。
- [LLaMA: Open and efficient foundation language models](https://arxiv.org/abs/2302.13971)（2023）：来自 Meta 的模型，（几乎）开启了开源 LLM 革命。与许多最好的闭源模型竞争，但仅以限制性许可证向研究人员开放。（[博客文章](https://ai.facebook.com/blog/large-language-model-llama-meta-ai/)）
- [Alpaca: A strong, replicable instruction-following Model](https://crfm.stanford.edu/2023/03/13/alpaca.html)（2023）：来自斯坦福，这个模型展示了指令调整的力量，特别是在较小的开源模型中，相对于纯规模。

#### 模型改进（例如微调、检索、注意力）

- [Deep reinforcement learning from human preferences](https://proceedings.neurips.cc/paper_files/paper/2017/file/d5e2c0adad503c91f91df240d0cd4e49-Paper.pdf)（2017）：在游戏和机器人环境中强化学习的研究，事实证明这是 LLM 的绝佳工具。
- [Retrieval-augmented generation for knowledge-intensive NLP tasks](https://arxiv.org/abs/2005.11401)（2020）：由 Facebook 开发，RAG 是通过信息检索提高 LLM 准确性的两个主要研究路径之一。（[博客文章](https://ai.facebook.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/)）
- [Improving language models by retrieving from trillions of tokens](https://arxiv.org/abs/2112.04426)（2021）：RETRO，即 "Retrieval Enhanced TRansfOrmers"，这是 DeepMind 的另一种方法，通过访问其训练数据中未包含的信息来提高 LLM 准确性。（[博客文章](https://www.deepmind.com/blog/improving-language-models-by-retrieving-from-trillions-of-tokens)）
- [LoRA: Low-rank adaptation of large language models](https://arxiv.org/abs/2106.09685)（2021）：来自微软的研究，引入了一种比微调更高效的替代方案，用于在新数据上训练 LLM。它现在是社区微调的标准，特别是对于图像模型。
- [Constitutional AI (2022)](https://arxiv.org/abs/2212.08073)：Anthropic 团队引入了从 AI 反馈中进行强化学习（RLAIF）的概念。主要想法是我们可以在其他 AI 的监督下开发一个无害的 AI 助手。
- [FlashAttention: Fast and memory-efficient exact attention with IO-awareness](https://arxiv.org/abs/2205.14135)（2022）：来自斯坦福的这项研究，为最先进的模型打开了理解更长文本序列（以及更高分辨率图像）的大门，而不会产生过高的训练时间和成本。（[博客文章](https://ai.stanford.edu/blog/longer-sequences-next-leap-ai/)）
- [Hungry hungry hippos: Towards language modeling with state space models](https://arxiv.org/abs/2212.14052)（2022）：同样来自斯坦福的这篇论文，描述了语言建模中注意力机制的主要替代方案之一。这是更好扩展和训练效率的有前途的路径。（[博客文章](https://hazyresearch.stanford.edu/blog/2023-01-20-h3)）

### 图像生成模型

- [Learning transferable visual models from natural language supervision](https://arxiv.org/abs/2103.00020)（2021）：介绍将文本描述与图像链接的基础模型 CLIP 的论文。是计算机视觉中基础模型最早的有效大规模应用之一。（[博客文章](https://openai.com/research/clip)）
- [Zero-shot text-to-image generation](https://arxiv.org/abs/2102.12092)（2021）：这是引入 DALL-E 的论文，DALL-E 是一个结合上述 CLIP 和 GPT-3 自动根据文本提示生成图像的模型。它的继任者 DALL-E 2 在 2022 年开启了基于图像的生成式 AI 热潮。（[博客文章](https://openai.com/research/dall-e)）
- [High-resolution image synthesis with latent diffusion models](https://arxiv.org/abs/2112.10752)（2021）：描述 Stable Diffusion 的论文（在其发布和爆炸性开源增长之后）。
- [Photorealistic text-to-image diffusion models with deep language understanding](https://arxiv.org/abs/2205.11487)（2022）：Imagen 是 Google 进入 AI 图像生成领域的产品。在其发布一年多后，截至本文发布日期，该模型尚未公开发布。（[网站](https://imagen.research.google/)）
- [DreamBooth: Fine tuning text-to-image diffusion models for subject-driven generation](https://arxiv.org/abs/2208.12242)（2022）：DreamBooth 是一个由 Google 开发的系统，用于训练模型识别用户提交的主体并将其应用于提示的上下文（例如，[用户]在埃菲尔铁塔前微笑）。（[网站](https://dreambooth.github.io/)）
- [Adding conditional control to text-to-image diffusion models](https://arxiv.org/abs/2302.05543)（2023）：来自斯坦福的这篇论文引入了 ControlNet，这是一个现在非常流行的工具，用于对潜在扩散模型的图像生成进行细粒度控制。

### 代理

- [A path towards autonomous machine intelligence](https://openreview.net/pdf?id=BZ5a1r-kVsf)（2022）：Meta AI 负责人兼纽约大学教授 Yann LeCun 关于如何构建真正理解周围世界的自主智能代理的提案。
- [ReAct: Synergizing reasoning and acting in language models](https://arxiv.org/abs/2210.03629)（2022）：来自普林斯顿和 Google 的项目，测试和提高 LLM 的推理和规划能力。（[博客文章](https://ai.googleblog.com/2022/11/react-synergizing-reasoning-and-acting.html)）
- [Generative agents: Interactive simulacra of human behavior](https://arxiv.org/abs/2304.03442)（2023）：斯坦福和 Google 的研究人员使用 LLM 为代理提供动力，其设置类似于"模拟人生"，其交互是涌现的而非编程的。
- [Reflexion: an autonomous agent with dynamic memory and self-reflection](https://arxiv.org/abs/2303.11366)（2023）：来自东北大学和 MIT 研究人员的工作，关于教导 LLM 通过从错误和过去经验中学习来更可靠地解决问题。
- [Toolformer: Language models can teach themselves to use tools](https://arxiv.org/abs/2302.04761)（2023）：来自 Meta 的这个项目训练 LLM 使用外部工具（本例中是 API，指向搜索引擎和计算器等），以在不增加模型规模的情况下提高准确性。
- [Auto-GPT: An autonomous GPT-4 experiment](https://github.com/Significant-Gravitas/Auto-GPT)：一个开源实验，通过给它一组工具（互联网访问、文件存储等）并选择使用哪些工具来解决特定任务，从而扩展 GPT-4 的能力。
- [BabyAGI](https://github.com/yoheinakajima/babyagi)：这个 Python 脚本利用 GPT-4 和向量数据库（存储上下文）来规划和执行一系列任务，以解决更广泛的目标。

### 其他数据模态

#### 代码生成

- [Evaluating large language models trained on code](https://arxiv.org/abs/2107.03374)（2021）：这是 OpenAI 关于 Codex 的研究论文，GitHub Copilot 产品背后的代码生成模型。（[博客文章](https://openai.com/blog/openai-codex)）
- [Competition-level code generation with AlphaCode](https://www.science.org/stoken/author-tokens/ST-905/full)（2021）：来自 DeepMind 的这项研究表明了一个能够编写比人类程序员更好代码的模型。（[博客文章](https://www.deepmind.com/blog/competitive-programming-with-alphacode)）
- [CodeGen: An open large language model for code with multi-turn program synthesis](https://arxiv.org/abs/2203.13474)（2022）：CodeGen 来自 Salesforce 的 AI 研究部门，目前为 Replit Ghostwriter 代码生成产品提供支持。（[博客文章](https://blog.salesforceairesearch.com/codegen/)）

#### 视频生成

- [Make-A-Video: Text-to-video generation without text-video data](https://arxiv.org/abs/2209.14792)（2022）：来自 Meta 的模型，可以从文本提示创建短视频，但也可以为静态照片输入添加动作或创建现有视频的变体。（[博客文章](https://makeavideo.studio/)）
- [Imagen Video: High definition video generation with diffusion models](https://arxiv.org/abs/2210.02303)（2022）：正如其名：Google 基于图像的 Imagen 模型的版本，专为从文本提示生成短视频而优化。（[网站](https://imagen.research.google/video/)）

#### 人类生物学和医疗数据

- [Strategies for pre-training graph neural networks](https://arxiv.org/pdf/1905.12265.pdf)（2020）：这篇论文为有效的预训练方法奠定了基础，这些方法可用于药物发现等应用，例如分子性质预测和蛋白质功能预测。（[博客文章](https://snap.stanford.edu/gnn-pretrain/)）
- [Improved protein structure prediction using potentials from deep learning](https://www.nature.com/articles/s41586-019-1923-7)（2020）：DeepMind 以蛋白质为中心的 transformer 模型 AlphaFold 使从序列预测蛋白质结构成为可能——一个真正的突破，已经对理解生物过程和开发疾病新疗法产生了深远影响。（[博客文章](https://www.deepmind.com/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology)）（[解释文章](https://www.blopig.com/blog/2021/07/alphafold-2-is-here-whats-behind-the-structure-prediction-miracle/)）
- [Large language models encode clinical knowledge](https://arxiv.org/abs/2212.13138)（2022）：Med-PaLM 是一个能够正确回答美国医学执照考试风格问题的 LLM。该团队随后发表了关于 Med-PaLM2 表现的结果，其得分与"专家"考生相当。其他团队用 [ChatGPT](https://www.medrxiv.org/content/10.1101/2022.12.19.22283643v2) 和 [GPT-4](https://arxiv.org/abs/2303.13375) 进行了类似的实验。（[视频](https://www.youtube.com/watch?v=saWEFDRuNJc)）

#### 音频生成

- [Jukebox: A generative model for music](https://arxiv.org/abs/2005.00341)（2020）：OpenAI 使用 transformers 进行音乐生成的尝试，能够以最少的训练生成音乐、 vocals 和歌词。（[博客文章](https://openai.com/research/jukebox)）
- [AudioLM: a language modeling approach to audio generation](https://arxiv.org/pdf/2209.03143.pdf)（2022）：AudioLM 是 Google 的项目，用于生成多种类型的音频，包括语音和乐器。（[博客文章](https://ai.googleblog.com/2022/10/audiolm-language-modeling-approach-to.html)）
- [MusicLM: Generating music from text](https://arxiv.org/abs/2301.11325)（2023）：基于 AI 的音乐生成的当前最优技术，展示了比先前尝试更高的质量和连贯性。（[博客文章](https://google-research.github.io/seanet/musiclm/examples/)）

#### 多维图像生成

- [NeRF: Representing scenes as neural radiance fields for view synthesis](https://arxiv.org/abs/2003.08934)（2020）：由加州大学伯克利分校领导的团队关于使用 5D 坐标"合成复杂场景的新颖视图"的研究。（[网站](https://www.matthewtancik.com/nerf)）
- [DreamFusion: Text-to-3D using 2D diffusion](https://arxiv.org/pdf/2209.14988.pdf)（2022）：来自 Google 和加州大学伯克利分校研究人员的工作，在 NeRF 基础上从 2D 输入生成 3D 图像。（[网站](https://dreamfusion3d.github.io/)）
