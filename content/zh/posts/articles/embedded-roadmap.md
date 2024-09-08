---
title: "[译] 嵌入式工程学习指南"
date: 2024-09-08T22:02:50+08:00
draft: false
tags: ["translation", "embedded", "roadmap", "learning"]
categories: ["Articles"]
authors:
- "leehyon"
---

本文档为一份详尽的嵌入式工程学习指南，原英文作者为 [Meysam Parvizi](https://github.com/m3y54m)，为有志于成为嵌入式工程师的人提供了一份全面的路线图，其中包括精选的学习资源列表。

> Original: https://github.com/m3y54m/Embedded-Engineering-Roadmap

---

这份路线图旨在帮助渴望成为嵌入式工程师/开发者的初学者，并帮助现有从业者扩展其技能。

嵌入式工程需要对硬件功能以及软件开发和编程技能有扎实的理解。如果你真的想追求这个职业，你必须有高度的动力和热情。正如著名的谚语所说，“硬件很难！”但不要惊慌，面对这段激动人心的旅程中可能遇到的挑战要有耐心。通过投入足够的时间和努力进行练习和项目，你很快就会发现自己成为了一名真正的嵌入式工程师！😀

## ❓ 什么是嵌入式系统？

[ISO/IEC/IEEE 24765 标准:](https://www.iso.org/obp/ui/en/#iso:std:iso-iec-ieee:24765:ed-2:v1:en)

> 嵌入式系统是一个更大系统的一部分，并执行该系统的一些要求。例如，用于飞机或快速运输系统的计算机系统。\
嵌入式系统的硬件和软件通常被最小化并针对特定功能进行优化。嵌入式系统至少包括一个微控制器、微处理器或数字信号处理器。嵌入式系统旨在为应用优化可靠性、成本、尺寸和节能。

["Making Embedded Systems" 书籍:](https://www.oreilly.com/library/view/making-embedded-systems/9781449308889/)

> 嵌入式系统是一个为其应用特定目的构建的计算机化系统。

["Computer Organization and Embedded Systems" 书籍:](https://a.co/d/2lt4Svf)

> 一个物理系统，使用计算机控制来实现特定目的，而不是用于通用计算，被称为嵌入式系统。

[Analog Devices 术语表:](https://www.analog.com/en/design-center/glossary/embedded-system.html)

> 嵌入式系统是将计算机（通常是微控制器或微处理器）作为系统的一个组成部分的系统。\
通常，计算机对用户是相对不可见的，没有明显的应用程序、文件或操作系统。例如，运行微波炉的控制器或现代汽车的发动机控制系统。

[Embedded Systems 术语表:](https://barrgroup.com/embedded-systems/glossary-e)

> 由计算机硬件和软件以及其他可能的机械部件或其他部分组合而成，设计用于执行专用功能。\
在某些情况下，嵌入式系统是一个更大系统或产品的一部分，如汽车中的防抱死刹车系统。

## 🗺️ 路线图

![embedded-engineering-roadmap](https://images.kohsruhe.com/2024/embedded-engineering-roadmap.png)

嵌入式系统工程路线图分为三个基本领域：软件、硬件和软技能。

虽然嵌入式系统中硬件和软件的交集很常见，但具体的职位名称往往侧重于一个方面。例如，“嵌入式软件工程师/开发者”、“固件工程师/开发者”、“嵌入式 Linux 工程师/开发者”等职位主要关注软件开发。相比之下，“嵌入式硬件工程师”和“硬件设计工程师”等职位主要处理硬件设计和电子学。此外，还有“嵌入式系统工程师”等职位需要对硬件和软件有全面的理解。

重要的是，每个嵌入式行业的公司对某个职位的要求可能各不相同。因此，必须根据你的职业目标调整重点。如果你要找嵌入式软件职位，优先考虑路线图中列出的软件相关技能。相反，如果你对嵌入式硬件职位感兴趣，则侧重于硬件技能，并花更多时间学习电子学。

路线图提供了“嵌入式系统工程师”职位所需的重要主题指南。通过深入了解软件和硬件两个方面，你可以培养在这个动态领域中茁壮成长的必要技能。然而，如果你对软件或硬件有明确的偏好，可以相应地调整你的学习路径。

> 注意：个别软件和硬件技能的重要性会因公司和职位的具体要求而有所不同。

> 提示：为了区分不同类型的学习资源及其内容质量，具体符号用于每个项目之前。

> 资源类型：\
📘 ：书籍 \
🎞️ ：视频 \
📝 ：写作、文章和博客帖子 \
🔗 ：其他不属于上述类别的链接

> 内容质量符号：\
👶 ：易于理解且适合初学者的资源。如果你对某个主题没有先前知识，请参考这些。 \
💎 ：著名参考资料，内容真正无价且全面。如果你想深入理解某个主题，请参考这些。

## 😕 不知道从哪里开始！

如果你看到路线图上冗长的主题列表感到不知所措，你并不孤单。在深入研究之前，让我们通过一些简单的入门项目来轻松开始。学习嵌入式系统工程需要时间和努力。如果你一开始不理解某些东西，不要灰心。继续练习，你最终会成功的。

### 项目

动手项目是学习的最有效方法，而不仅仅依靠书本或文章的理论知识。进行项目可以获得实际的学习经验。即使是看似基本的项目也能教会你比毫无目标的阅读更多的东西。当你在实际项目中遇到问题时，可以参考书籍、文章和课程以帮助理解问题。

不要立即尝试构建复杂的项目。先从小型、可管理的项目开始，逐步提升。

- [🔗 Random Nerd Tutorials | Learn ESP32, ESP8266, Arduino, and Raspberry Pi](https://randomnerdtutorials.com/)
- [🔗 Last Minute Engineers](https://lastminuteengineers.com/)
- [🔗 51 STM32 Projects & Tutorials for Beginners and Up - Hackster.io](https://www.hackster.io/stm32/projects)
- [🔗 STM32 (STM32F103C8) Projects & Tutorials](https://circuitdigest.com/stm32-projects-and-tutorials)
- [🔗 ElectronicWings Projects](https://www.electronicwings.com/projects)
- [🔗 STM32 Firmware - Phil’s Lab (YouTube Playlist)](https://youtube.com/playlist?list=PLXSyc11qLa1a4Tqbz228dPZfMrs-KRpzA)
- [🔗 Raspberry Pi Based Embedded Project Ideas](https://www.rs-online.com/designspark/raspberry-pi-based-embedded-project-ideas)
- [🔗 Embedded Linux On ARM | Projects](https://www.emertxe.com/embedded-systems/embedded-linux-on-arm/elarm-projects/)

### 搜索并提问！

使用搜索引擎找到你的问题答案。

- [🔗 Google](https://www.google.com/)
- [🔗 Bing](https://www.bing.com/)
- [🔗 DuckDuckGo](https://duckduckgo.com/)

如果通过搜索引擎找不到想要的内容，AI 聊天机器人也能提供帮助。请记住，AI 在有些情况下可能会给出错误答案，最好通过更可靠的参考资料确认答案。

- [🔗 DuckDuckGo AI Chat](https://duckduckgo.com/?q=DuckDuckGo&ia=chat)
- [🔗 Microsoft Copilot](https://copilot.microsoft.com/)
- [🔗 Google Gemini](https://gemini.google.com/)
- [🔗 ChatGPT](https://chat.openai.com/)
- [🔗 Claude AI](https://claude.ai/chats)
- [🔗 Poe - Fast, Helpful AI Chat](https://poe.com/)

如果对仅依赖 AI 建议有所保留，你也可以向真实的人提问：

- [🔗 Electrical Engineering Stack Exchange](https://electronics.stackexchange.com/)
- [🔗 Reddit · r/embedded](https://www.reddit.com/r/embedded/)

### 课程和 YouTube 内容

你可能听说过 YouTube 是所大学，这是真的 — YouTube 上有大量关于嵌入式系统的宝贵免费内容。你还可以通过 Coursera 和 EdX 找到一些优秀的免费课程。此外，Udemy 也提供一些高质量的付费课程选项。

- [🎞️ DigiKey (YouTube Channel)](https://www.youtube.com/@digikey)
- [🎞️ Coursera - Introduction to Embedded Systems Software and Development Environments](https://www.coursera.org/learn/introduction-embedded-systems)
- [🎞️ Coursera - Embedded Software and Hardware Architecture](https://www.coursera.org/learn/embedded-software-hardware)
- [🎞️ Fastbit Embedded Brain Academy](https://fastbitlab.com/)
- [🎞️ Modern Embedded Systems Programming Course (YouTube Playlist)](https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM)
- [🎞️ element14 presents (YouTube Channel)](https://www.youtube.com/@element14presents)
- [🎞️ Ben Eater (YouTube Channel)](https://www.youtube.com/@BenEater)
- [🎞️ Phil’s Lab (YouTube Channel)](https://www.youtube.com/@PhilsLab)
- [🎞️ Embedded Systems - Jacob Sorber (YouTube Playlist)](https://www.youtube.com/playlist?list=PL9IEJIKnBJjEcPAz6fss-Hx0TLytCOMVC)
- [🎞️ edX - Embedded Systems - Shape The World: Microcontroller Input/Output](https://learning.edx.org/course/course-v1:UTAustinX+UT.6.10x+3T2022/home)
- [🎞️ edX - Embedded Systems - Shape The World: Multi-Threaded Interfacing](https://www.edx.org/learn/computer-programming/the-university-of-texas-at-austin-embedded-systems-shape-the-world-multi-threaded-in)
- [🎞️ Embedded Systems, in Pyjama!](https://www.youtube.com/@inpyjama)
- [🎞️ Low Byte Productions](https://www.youtube.com/@lowbyteproductions)

### Arduino

如果你没有编程嵌入式系统的背景，Arduino 开发板和库是你入门和学习基础知识的最佳选择。请记住，大多数 Arduino 库是为学习目的开发的，并未优化用于工业。

另外，Arduino Core 负责大多数底层硬件操作，作为嵌入式工程师，你应该能够自己处理这些操作，或者至少清楚地理解它们的原理。如果你想成为专业的嵌入式开发者，你应该能够有效使用微控制器供应商提供和批准的行业标准 API 和 SDK，如 ARM Cortex-M 微控制器的 CMSIS、STM32 的 STM32Cube、Espressif 微控制器的 ESP-IDF 等。

- [🔗 Getting Started with Arduino](https://docs.arduino.cc/learn/starting-guide/getting-started-arduino)
- [🎞️ All New Arduino R4 WiFi LESSONS for Absolute Beginners (YouTube Playlist)](https://www.youtube.com/playlist?list=PLGs0VKk2DiYyn0wN335MXpbi3PRJTMmex)
- [🎞️ New Arduino Tutorials (YouTube Playlist)](https://youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP)
- [🎞️ Arduino in a commercial product?](https://www.youtube.com/watch?v=c5LzsqeSCAc)
- [🎞️ Arduino Project to Product (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEBQazB0HUyQd6Fsf5NQ75M9llbi1_j_8)

### 教育网站

- [🔗 DeepBlueMbedded](https://deepbluembedded.com/)
- [🔗💎 Interrupt Blog by Memfault](https://interrupt.memfault.com/blog/)
- [🔗 Embedded Systems, in Pyjama!](https://inpyjama.com)
- [🔗 ElectronicWings - Hardware Developers Community](https://www.electronicwings.com/)
- [🔗 Microchip University](https://mu.microchip.com/)
- [🔗 Nordic Developer Academy](https://academy.nordicsemi.com/)
- [🔗 Electronics Tutorials](https://www.electronics-tutorials.ws)
- [🔗 SparkFun Learn: Learn at SparkFun Electronics](https://learn.sparkfun.com/)
- [🔗 Adafruit Learning System](https://learn.adafruit.com/)
- [🔗 STM32 World](https://stm32world.com)
- [🔗 ControllersTech](https://controllerstech.com/)

### 其他有用的路线图

- [🔗 Embedded Artistry Beginners Roadmap](https://embeddedartistry.com/beginners/)
- [🔗 Embedded Systems Skill Tree](https://github.com/sjpiper145/MakerSkillTree/tree/main/Embedded%20Systems%20Skill%20Tree)
- [🔗 PCB Design Skill Tree](https://github.com/sjpiper145/MakerSkillTree/tree/main/PCB%20Design%20Skill%20Tree)
- [🔗 FPGA / ASIC Engineering Roadmap](https://github.com/m3y54m/FPGA-ASIC-Roadmap)

### IDEs

- [🔗 Keil MDK & µVision](https://www.keil.com/)
- [🔗 IAR Embedded Workbench](https://www.iar.com)
- [🔗 STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)
- [🔗 Microchip Studio for AVR® and SAM Devices](https://www.microchip.com/en-us/tools-resources/develop/microchip-studio)
- [🔗 MPLAB® X IDE](https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide)
- [🔗 MCUXpresso IDE](https://www.nxp.com/design/software/development-software/mcuxpresso-software-and-tools-/mcuxpresso-integrated-development-environment-ide:MCUXpresso-IDE)

### VS Code 扩展

- [🔗 Cortex-Debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug)
- [🔗 STM32 VS Code Extension](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension)
- [🔗 Espressif IDF](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension)
- [🔗 MCUXpresso for VS Code](https://marketplace.visualstudio.com/items?itemName=NXPSemiconductors.mcuxpresso)

### PlatformIO

PlatformIO 是一个跨平台、跨架构、多框架的专业工具，适用于嵌入式系统工程师和为嵌入式产品编写应用程序的软件开发人员。

- [🔗 PlatformIO - A professional collaborative platform for embedded development](https://platformio.org/)

虽然 PlatformIO 尚未在工业和大规模项目中广泛采用，但对于个人处理小规模项目来说，它是一个优秀的选择。这是因为它极大地减少了安装框架和设置构建与调试工具的需求，使你可以专注于编程。

## 📚 学习资源

> 警告：没有必要阅读所有在这里列出的书籍、文章或观看所有视频。如果你尝试这样做，最终你会感到疲倦和失望。在合理的时间内你无法学习所有可用的内容，因为可能需要数年。重要的是学习足够多的内容以至少对所需主题有基本的理解。当然，投入更多时间学习和做项目，你的知识和专业能力会更加深厚。\
这里提到的一些资源仅供参考。只有在需要时才参考它们。

---

### 软技能

与其他职业类似，嵌入式工程师也需要软技能，而这些技能无法仅通过阅读或观看视频获得。这些技能是在互动和应对各种工作障碍中培养出来的。软技能的提升没有一个统一的方法。它会因个人特点而异，需要对自己优势和成长领域有自我认识。提升这些技能需要时间和努力。

- [📝 Soft Skills For Embedded Systems Software Developers](https://www.embeddedrelated.com/showarticle/1470.php)
- [📝 10 Skills Every Embedded Engineer Should Have](https://medium.com/@lanceharvieruntime/10-skills-every-embedded-engineer-should-have-dcb867095b91)

---

### 电子学

#### 基础数学与微积分

- [🎞️ Khan Academy - Calculus 1](https://www.khanacademy.org/math/calculus-1)
- [📘👶 Calculus For Dummies - Mark Ryan](https://a.co/d/cyvZqE1)
- [📘💎 Thomas' Calculus](https://a.co/d/gFcCC37)

#### 电路原理

- [🔗👶 Lessons in Electric Circuits (All About Circuits)](https://www.allaboutcircuits.com/textbook/)
- [🔗👶💎 Electronics Tutorials](https://www.electronics-tutorials.ws)
- [📘👶💎 Fundamentals of Electric Circuits - Charles K. Alexander, Matthew Sadiku](https://www.amazon.com/dp/1260226409?ref_=cm_sw_r_cp_ud_dp_Q11YHXNY2BK530RQZC4S)
- [📘👶💎 Principles of Electric Circuits: Conventional Current Version -  Thomas L Floyd, David M. Buchla](https://a.co/d/32T2t2X)
- [🎞️💎 Basic Circuit Theory I (By Prof. Razavi) (YouTube Playlist)](https://www.youtube.com/playlist?list=PL9KyzjPFbwH37w22z-UHVEt37pdJHjZ7x)

#### 电子学基础

- [🔗👶💎 Build Electronic Circuits - Øyvind Nydal Dahl](https://www.build-electronic-circuits.com/)
- [🎞️👶 Electronic Basics - GreatScott! (YouTube Playlist)](https://youtube.com/playlist?list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0)
- [📘👶 Make: Electronics: Learning by Discovery - Charles Platt](https://a.co/d/fbRoM1R)
- [📘👶💎 Electronic Devices: Conventional Current Version - Thomas Floyd, David Buchla, Steven Wetterling](https://a.co/d/1dsS0vx)
- [📘👶💎 Electronics Fundamentals: Circuits, Devices & Applications - Thomas L Floyd, David M. Buchla, Gary D. Snyder](https://a.co/d/4Ye5m8h)
- [📘👶 Practical Electronics for Inventors - Paul Scherz, Simon Monk](https://a.co/d/1QfSN8j)
- [📘💎 The Art of Electronics -  Paul Horowitz, Winfield Hill](https://artofelectronics.net/)
- [📝 Here’s a Quick Way to Know about Major Electronic Components](https://www.elprocus.com/major-electronic-components/)
- [📘 Encyclopedia of Electronic Components - Charles Platt](https://a.co/d/83cSiU7)

#### 数字设计

- [🔗👶 Tiny Tapeout > Digital Design Guide](https://tinytapeout.com/digital_design/)
- [📘💎 Digital Design - Morris Mano, Michael Ciletti](https://a.co/d/c3tBaoc)
- [📘👶💎 Digital Design and Computer Architecture: ARM Edition -  Sarah Harris, David Harris](https://a.co/d/4otoVvI)
- [📘👶💎 Digital Design and Computer Architecture: RISC-V Edition -  Sarah Harris, David Harris](https://a.co/d/61l7Jtb)
- [📘👶 Digital Fundamentals - Thomas L. Floyd](https://a.co/d/2lgJKNX)

#### 计算机架构

计算机架构是嵌入式系统的支柱，管理着硬件和软件的交互。嵌入式开发者需要掌握计算机架构，以有效地设计、开发和调试嵌入式软件。对 ARM 和 RISC-V 这两种在嵌入式系统中广泛使用的指令集架构（ISA）的专业知识是嵌入式开发者的必备技能。ARM 是主导的 ISA，而 RISC-V 凭借其开源性质和灵活性正在获得关注。

- [📘👶💎 Computer Organization and Design: ARM Edition -  David A. Patterson, John L. Hennessy](https://a.co/d/8YPUXG7)
- [📘👶💎 Digital Design and Computer Architecture: ARM Edition -  Sarah Harris, David Harris](https://a.co/d/4otoVvI)
- [📘👶💎 Digital Design and Computer Architecture: RISC-V Edition -  Sarah Harris, David Harris](https://a.co/d/61l7Jtb)
- [📘 Computer Organization and Embedded Systems -  Carl Hamacher, Zvonko Vranesic, Safwat Zaky, Naraig Manjikian](https://a.co/d/2lt4Svf)
- [📘 Embedded Systems Architecture - Tammy Noergaard](https://www.oreilly.com/library/view/embedded-systems-architecture/9780123821966/)
- [📘 Embedded Systems Architecture - Daniele Lacamera](https://www.packtpub.com/product/embedded-systems-architecture-second-edition/9781803239545)
- [📘 The Definitive Guide to ARM® Cortex®-M0 and Cortex-M0+ Processors - Joseph Yiu](https://www.oreilly.com/library/view/the-definitive-guide/9780128032787/)
- [📘 The Definitive Guide to ARM® Cortex®-M3 and Cortex®-M4 Processors - Joseph Yiu](https://www.oreilly.com/library/view/the-definitive-guide/9780124080829/)
- [🔗 Build an 8-bit computer from scratch](https://eater.net/8bit/)

---

### 使用测试设备

嵌入式系统通常需要专门的测试设备来验证其功能和性能。这些设备包括万用表、示波器、逻辑分析仪、信号发生器、电源等工具，工程师可以使用它们测量信号、注入刺激并监测嵌入式系统的行为。

#### 万用表

- [🎞️👶 Learn How to Use a Multimeter!](https://youtu.be/4lAyzRxsbDc)
- [📝👶 How to Use a Multimeter ](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter/all)

#### 逻辑 / 协议分析仪

- [🎞️ Instrument Basics: Logic Analyzer](https://youtu.be/u1DYs2I-_lU)

#### 示波器

- [🎞️👶 What’s an OSCILLOSCOPE?](https://youtu.be/DgYGRtkd9Vs)
- [🎞️👶 How to Use an Oscilloscope](https://youtu.be/u4zyptPLlJI)
- [🎞️👶 How to use an oscilloscope / What is an oscilloscope / Oscilloscope tutorial](https://youtu.be/CzY2abWCVTY)
- [🎞️ Understanding EMI Debugging with Oscilloscopes](https://www.youtube.com/watch?v=x1rn5YNLmVw)

---

### 原型设计技能

虽然硬件设计和原型设计主要是电子硬件设计工程师的职责，但嵌入式软件工程师了解这些概念也大有裨益。这方面的知识在嵌入式系统调试过程中，识别和解决与硬件相关的问题时非常重要。掌握硬件原理，嵌入式软件工程师可以有效地定位问题的根本原因，从而更迅速、更高效地进行故障排除。

#### 面包板搭建

面包板搭建是一种动手原型设计电路的方法，提供了一个多功能的平台用于实验和电路设计。嵌入式系统通常使用面包板，因为它们易于使用、灵活且具有成本效益。通过在面包板上连接组件，嵌入式系统开发者可以快速测试和完善他们的设计，无需永久焊接。这使得快速迭代和高效调试成为可能，使面包板成为嵌入式系统开发中的宝贵工具。

- [🎞️👶 Everything You Need to Know about Breadboards](https://www.youtube.com/watch?v=mE33WpRWrXs)
- [🎞️👶 How to Use a Breadboard](https://youtu.be/6WReFkfrUIk)

#### 硬件设计基础

- [🎞️👶💎 Hardware Design - Phil’s Lab (YouTube Playlist)](https://www.youtube.com/playlist?list=PLXSyc11qLa1YhVCZ5xWPuPsE5MkgEy5TF)
- [🎞️ Electronic Circuit Design - IFE - TU Graz (YouTube Playlist)](https://www.youtube.com/playlist?list=PLLpZ1DoEuR9tbV8r8bMSI94znm6pRB905)
- [🎞️ Microcontroller-Based Hardware Design With Altium Designer (YouTube Playlist)](https://www.youtube.com/playlist?list=PL3aaAq2OJU5HcbClqrOhqBDozF7HmxV-s)

#### PCB 设计 / EMC

- [🎞️💎 Altium Academy YouTube Channel](https://www.youtube.com/@AltiumAcademy)
- [🎞️💎 Robert Feranec YouTube Channel](https://www.youtube.com/@RobertFeranec)
- [🎞️👶 Altium Tutorials for Beginners - Robert Feranec (YouTube Playlist)](https://www.youtube.com/playlist?list=PLXvLToQzgzdduBaD4horowdWgcG5uGUW4)
- [🎞️👶 Create PCBs for Rapid Prototyping - DigiKey (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEBQazB0HUyRVK1RpHIjyjuTxn5srz6XM)
- [🎞️👶💎 PCB Design for Beginners - Altium Academy (YouTube Playlist)](https://www.youtube.com/playlist?list=PL3aaAq2OJU5EsYtNwTPHNO3RHNJN34FbO)
- [🎞️ How to Make a Raspberry Pi Compute Module 4 Carrier Board - DigiKey (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEBQazB0HUyRwjr761b-MLNEu8FA8WKSG)
- [🎞️💎 How To Learn PCB Design (My Thoughts, Journey, and Resources) - Phil's Lab #87](https://youtu.be/aODkA2mrimQ)
- [🎞️👶 KiCad 6 STM32 PCB Design Full Tutorial - Phil's Lab #65](https://youtu.be/aVUqaB0IMh4)
- [🎞️👶 Intro to KiCad - DigiKey (YouTube Playlist)](https://www.youtube.com/watch?v=vaCVh2SAZY4&list=PLEBQazB0HUyR24ckSZ5u05TZHV9khgA1O)
- [🎞️💎 PCB Design for EMI & SI - Phil's Lab #64](https://www.youtube.com/watch?v=VtzPL8wQ8-E)
- [🎞️💎 PCB Design for Advanced Users (YouTube Playlist)](https://youtube.com/playlist?list=PL3aaAq2OJU5EWfYT_Z93tc9pBF_Sidba_)
- [🎞️💎 PCB Knowledge [PCB Production Tips By PCBWay] (YouTube Playlist)](https://www.youtube.com/playlist?list=PLzxdr3n97eVtHuh7gnDzMubuO836kvfu7)
- [🎞️💎 9 Simple Tricks to Improve EMC / EMI on Your Boards - Practical examples (with Min Zhang)](https://www.youtube.com/watch?v=Lf51sx6sC0I)
- [🎞️💎 Many EMC Tips to Help You Design Better PCB Boards (with Keith Armstrong)](https://www.youtube.com/watch?v=gHF5JyJF-N4)
- [🔗 LearnEMC - EMC Resources](https://learnemc.com/emc-resources)
- [🔗 A Better Way to Build PCBs - Flux AI](https://www.flux.ai/p/)

#### 焊接 / 返工

- [🎞️👶 How To Solder - Electronics with Becky Stern | Digi-Key Electronics](https://www.youtube.com/watch?v=sS4v2hIFp9I)
- [🎞️👶 HOW TO SOLDER! (Beginner's Guide)](https://www.youtube.com/watch?v=3jAw41LRBxU)
- [🎞️👶 Soldering Crash Course: Basic Techniques, Tips and Advice!](https://www.youtube.com/watch?v=6rmErwU5E-k)
- [🎞️ How to Solder Through-Hole Components - Another Teaching Moment | DigiKey Electronics](https://www.youtube.com/watch?v=DJH7VLGJ4fs)
- [🎞️ How to Solder QFN MLF Package by Hand (Using a Hot Air Rework Station) | Digi-Key Electronics](https://youtu.be/X3Rc1s6EpSI)
- [🎞️ From Solderless Breadboard to Soldered Circuit - Electronics with Becky Stern | Digi-Key Electronics](https://www.youtube.com/watch?v=F9Krq7seV1g)

---

### FPGA 开发

FPGA（现场可编程门阵列）是可以配置以执行各种数字逻辑功能的专用集成电路。它们广泛应用于嵌入式系统，以实现高性能、灵活性和成本效益。FPGA 设计师使用硬件描述语言（HDL）来创建直接映射到 FPGA 架构的定制电路。由于 FPGA 工程和验证与嵌入式软件开发有显著不同，它在嵌入式系统中是一个专门的领域。

- [🔗 FPGA / ASIC Engineering Roadmap](https://github.com/m3y54m/FPGA-ASIC-Roadmap)
- [📝 What are FPGAs?](https://hackaday.io/project/27550-the-hobbyists-guide-to-fpgas/log/68114-what-are-fpgas)
- [📝 FPGA vs. Microcontroller: How to choose the right one for your project](https://www.youtube.com/watch?v=jblpHUCPQYs)
- [🎞️👶 Introduction to FPGA (YouTube Playlist)](https://youtube.com/playlist?list=PLEBQazB0HUyT1WmMONxRZn9NmQ_9CIKhb)
- [🔗👶 FPGA Fundamentals - Nandland](https://nandland.com/fpga-101/)
- [🎞️💎 Coursera – FPGA Design for Embedded Systems Specialization](https://www.coursera.org/specializations/fpga-design)
- [📘💎 A Hands-On Guide to Designing Embedded Systems - Adam Taylor, Dan Binnun, Saket Srivastava](https://www.amazon.com/Hands-Guide-Designing-Embedded-Systems/dp/1630816833)

---

### 编程基础

掌握编程基础和软件开发原则是成功进行嵌入式设计的关键。嵌入式系统需要高效的代码、优化的数据管理、可复用的设计模式以及有效的内存管理，以便在资源受限的环境中正常运行。嵌入式开发人员必须拥有这些核心概念的坚实基础，才能创建可靠且高性能的嵌入式系统。

#### 算法和数据结构

- [📘👶💎 Grokking Algorithms - Aditya Y. Bhargava](https://www.manning.com/books/grokking-algorithms)
- [📘💎 Introduction to Algorithms - Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein](http://mitpress.mit.edu/9780262367509/introduction-to-algorithms/)
- [🔗 Collection of various algorithms in mathematics, machine learning, computer science, physics, etc implemented in C for educational purposes](https://github.com/TheAlgorithms/C)
- [🎞️ Udemy – Embedded Systems State Machines & Data Structures](https://www.udemy.com/course/embedded-systems-state-machines-data-structures-like-a-pro/)
- [🔗 Data Structures in C](https://www.sanfoundry.com/c-programming-examples-data-structures/)
- [🎞️ Data Structures - Full Course Using C and C++](https://www.youtube.com/watch?v=B31LgI4Y4DQ)
- [🔗 Hello Algo](https://www.hello-algo.com/en/)

#### 设计模式

- [📝 Practical Design Patterns: Opaque Pointers and Objects in C](https://interrupt.memfault.com/blog/opaque-pointers)
- [📘💎 Design Patterns for Embedded Systems in C - Bruce Powel Douglass](https://www.oreilly.com/library/view/design-patterns-for/9781856177078/)
- [📘💎 Making Embedded Systems: Design Patterns for Great Software - Elecia White](https://www.oreilly.com/library/view/making-embedded-systems/9781449308889/)

#### 状态机

- [📝 Programming embedded systems the easy way – with state machines](https://www.embedded.com/programming-embedded-systems-the-easy-way-with-state-machines/)
- [🎞️💎 State Machines (YouTube Playlist)](https://www.youtube.com/playlist?list=PLPW8O6W-1chxym7TgIPV9k5E8YJtSBToI)
- [🎞️💎 Event-Driven Programming (YouTube Playlist)](https://www.youtube.com/playlist?list=PLPW8O6W-1chx8Y7Oq2gOE0NUPXmQxu2Wr)
- [🎞️💎 Udemy - Embedded System Design using UML State Machines](https://www.udemy.com/course/embedded-system-design-using-uml-state-machines/)
- [📝 “Input-Driven” vs. Event-Driven State Machines](https://www.state-machine.com/input-driven-vs-event-driven-state-machines)
- [📝 State Machines for Event-Driven Systems](https://barrgroup.com/embedded-systems/how-to/state-machines-event-driven-systems)

#### 内存管理

- [🎞️ Understanding the C runtime memory model](https://www.youtube.com/watch?v=3F3lp_F2YpQ)
- [🎞️ Pointers and dynamic memory - stack vs heap](https://www.youtube.com/watch?v=_8-ht2AKyH4)
- [🎞️ Dynamic Memory Allocation | C Programming Tutorial](https://www.youtube.com/watch?v=R0qIYWo8igs)
- [🎞️ Dynamic memory allocation in C - malloc calloc realloc free](https://www.youtube.com/watch?v=xDVC3wKjS64&t=140s)
- [📝 What is Memory Leak in C/C++? How can we avoid?](https://aticleworld.com/what-is-memory-leak-in-c-c-how-can-we-avoid/)
- [📝 Understanding Memory Management in Rust](https://medium.com/geekculture/understanding-memory-management-in-rust-a341cfce9807)
- [📝 Memory Management in Python](https://realpython.com/python-memory-management/)

---

### 编程语言

低级语言如 C 和汇编语言提供直接的硬件访问，使得资源受限的嵌入式系统能够进行高效的代码优化。系统级语言如 C++ 和 Rust 为复杂的嵌入式应用程序提供了更高的抽象层次，而 Python 则因其简单性常用于测试嵌入式系统。

#### C

- [🎞️👶 Microchip University - Syntax And Structure of C - Simply C](https://mu.microchip.com/syntax-and-structure-of-c)
- [🎞️💎 Microchip University - Advanced C Programming](https://mu.microchip.com/advanced-c-programming)
- [🎞️💎 Microchip University - Advanced Embedded C Tips, Tricks, and Cautions](https://mu.microchip.com/advanced-embedded-c-tips-tricks-and-cautions)
- [🎞️💎 Microchip University - C Programming: Linked List Data Structures](https://mu.microchip.com/c-programming-linked-list-data-structures)
- [🎞️💎 Microchip University - C Programming Callbacks](https://mu.microchip.com/c-programming-callbacks)
- [🎞️👶 C Programming for Beginners | Full Course](https://www.youtube.com/watch?v=ssJY5MDLjlo)
- [🎞️ C Programming Tutorials (YouTube Playlist)](https://www.youtube.com/playlist?list=PLA1FTfKBAEX4hblYoH6mnq0zsie2w6Wif)
- [📘💎 The C Programming Language -  Brian W. Kernighan, Dennis M. Ritchie ](https://www.amazon.com/dp/0131103628?ref_=cm_sw_r_cp_ud_dp_KRZ8M1WTXWVG0HMSRBXA)
- [🔗👶 C by Example](https://www.cbyexample.com/)
- [📘 C How to Program -  Paul Deitel, Harvey Deitel ](https://deitel.com/c-how-to-program-9-e/)
- [📘 Effective C - An Introduction to Professional C Programming - Robert C. Seacord](https://nostarch.com/Effective_C)
- [🔗 Embedded C Coding Standard](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard)
- [🔗 newlib C Library Documentation](https://sourceware.org/newlib/docs.html)
- [🔗 The GNU C Library (glibc)](https://www.gnu.org/software/libc/documentation.html)
- [📝 From Zero to main(): Bare metal C](https://interrupt.memfault.com/blog/zero-to-main-1)
- [📝 From Zero to main(): Bootstrapping libc with Newlib](https://interrupt.memfault.com/blog/boostrapping-libc-with-newlib)

#### C++

- [📝 Modern C++ in Embedded Development: (Don't Fear) The ++](https://www.embeddedrelated.com/showarticle/1532.php)
- [📝 C++ On Embedded Systems](https://blog.mbedded.ninja/programming/languages/c-plus-plus/cpp-on-embedded-systems/)
- [🎞️👶 C++ Tutorial for Beginners - Full Course](https://www.youtube.com/watch?v=vLnPwxZdW4Y)
- [🎞️ C++ by The Cherno (YouTube Playlist)](https://youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb)
- [📘💎 Real-Time C++: Efficient Object-Oriented and Template Microcontroller Programming - Christopher Kormanyos](https://link.springer.com/book/10.1007/978-3-662-62996-3)
- [📘 Effective Modern C++ - Scott Meyers](https://www.oreilly.com/library/view/effective-modern-c/9781491908419/)

#### 汇编

- [📝👶 Introduction to ARM Assembly Basics](https://azeria-labs.com/writing-arm-assembly-part-1/)
- [🎞️ Udemy – ARM GNU Assembly Programming From Ground Up](https://www.udemy.com/course/arm-gnu-assembly-programming-from-ground-uptm/)
- [🎞️ Assembly Language Programming with ARM – Full Tutorial for Beginners](https://www.youtube.com/watch?v=gfmRrPjnEw4)
- [📝 How to Use Inline Assembly Language in C Code](https://gcc.gnu.org/onlinedocs/gcc/extensions-to-the-c-language-family/how-to-use-inline-assembly-language-in-c-code.html)

#### Python

- [📝 Python for embedded systems testing](https://www.elsys-design.com/en/python-embedded-systems-testing/)
- [📝👶 The Python Handbook – Learn Python for Beginners](https://www.freecodecamp.org/news/the-python-handbook/)
- [🔗💎 Real Python: Python Tutorials](https://realpython.com/)
- [📘👶💎 Python Crash Course - Eric Matthes](https://a.co/d/hSMTJwE)

#### 微控制器 Python

- [🔗 MicroPython - Python for microcontrollers](https://micropython.org/)
- [🔗 MicroPython 101 | Arduino Documentation](https://docs.arduino.cc/micropython-course/)
- [🔗 CircuitPython](https://circuitpython.org/)
- [📝 The Pros and Cons of Designing Embedded Systems with MicroPython](https://www.designnews.com/electronics-test/pros-and-cons-designing-embedded-systems-micropython)
- [📝 Programming the ESP32 with MicroPython](https://wolles-elektronikkiste.de/en/programming-the-esp32-with-micropython)

#### Rust

- [📝 5 roadblocks to Rust adoption in embedded systems](https://www.embedded.com/5-roadblocks-to-rust-adoption-in-embedded-systems/)
- [🔗 The Embedded Rust Book](https://docs.rust-embedded.org/book/)
- [🎞️ The Future of Programming: Rust (YouTube Playlist)](https://www.youtube.com/playlist?list=PLc7W4b0WHTAUAEAguiqpNa5H0QqXJIJI6)
- [🔗 Community Rust support projects for STM32 microcontrollers](https://github.com/stm32-rs)
- [🔗 Rust on ESP Community](https://github.com/esp-rs)
- [📝 Rust on STM32: Getting started](https://jonathanklimt.de/electronics/programming/embedded-rust/rust-on-stm32-2/)
- [📝 From Zero to main(): Bare metal Rust](https://interrupt.memfault.com/blog/zero-to-main-rust-1)
- [📝 Writing an OS in Rust - Philipp Oppermann's blog](https://os.phil-opp.com/)
- [📝 Kernel Driver with Rust in 2022](https://not-matthias.github.io/posts/kernel-driver-with-rust/)
- [🔗 Rustlings - Small exercises to get you used to reading and writing Rust code!](https://rustlings.cool/)

#### Zig

- [📝 Testing Zig for embedded development](https://www.kuon.ch/post/2022-06-22-zig-embed/)
- [🔗 Zig Embedded Group](https://github.com/ZigEmbeddedGroup)
- [🔗 MicroZig - Unified abstraction layer and HAL for several microcontrollers](https://github.com/ZigEmbeddedGroup/microzig)
- [📝 Zig Bare Metal Programming on STM32F103 — Booting up](https://maldus512.medium.com/zig-bare-metal-programming-on-stm32f103-booting-up-b0ecdcf0de35)

---

### 微控制器

微控制器是集成电路 (IC)，将微处理器、内存和输入 / 输出 (I/O) 外设集成在单个芯片上。它们设计用于嵌入式应用，用于在各种行业中控制设备，包括汽车、工业、消费电子和医疗保健。

一些流行的微控制器系列包括 AVR、PIC、STM32、MSP430、nRF 和 ESP32。选择合适的微控制器需要评估应用需求、处理能力、内存需求和输入 / 输出能力。此外，还需考虑易用性、成本、可靠性、可用性和未来扩展性。

- [📝 What Is a Microcontroller? The Defining Characteristics and Architecture of a Common Component](https://www.allaboutcircuits.com/technical-articles/what-is-a-microcontroller-introduction-component-characteristics-component/)
- [📝 How to Choose the Right Microcontroller for Your Application ](https://www.allaboutcircuits.com/technical-articles/how-to-choose-the-right-microcontroller-for-your-application/)
- [📝 How to Read a Microcontroller Datasheet: Introduction and First Steps](https://www.allaboutcircuits.com/technical-articles/how-to-read-a-microcontroller-datasheet-introduction-and-first-steps2/)
- [📘👶 Make: AVR Programming - Elliot Williams](https://www.oreilly.com/library/view/make-avr-programming/9781449356484/)
- [🎞️👶💎 NewbieHack - Microcontroller Tutorial - A Beginners Guide (AVR)](https://www.youtube.com/playlist?list=PLE72E4CFE73BD1DE1)
- [🎞️👶 Getting Started with STM32 and Nucleo (YouTube Playlist)](https://youtube.com/playlist?list=PLEBQazB0HUyRYuzfi4clXsKUSgorErmBv)
- [📘💎 Mastering STM32 - Carmine Noviello](https://leanpub.com/mastering-stm32-2nd)
- [📘💎 Developing IoT Projects with ESP32 - Vedat Ozan Oner](https://www.packtpub.com/product/developing-iot-projects-with-esp32-second-edition/9781803237688)
- [🎞️👶 Intro to Raspberry Pi Pico and RP2040 (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEBQazB0HUyQO6rJxKr2umPCgmfAU-cqR)
- [🔗 Getting started with STM32: STM32 step-by-step](https://wiki.st.com/stm32mcu/wiki/Category:Getting_started_with_STM32_:_STM32_step_by_step)
- [🎞️ Getting Started With AVR (YouTube Playlist)](https://www.youtube.com/playlist?list=PLtQdQmNK_0DRhBWYZ32BEILOykXLpJ8tP)
- [🎞️ Fundamentals of Microcontrollers - Arduino bare-metal breakdown (YouTube Playlist)](https://www.youtube.com/playlist?list=PLNyfXcjhOAwOF-7S-ZoW2wuQ6Y-4hfjMR)
- [🎞️ Bare Metal Embedded Programming: Theory and Practice Using STM32 (YouTube Playlist)](https://www.youtube.com/playlist?list=PL4cGeWgaBTe155QQSQ72DksLIjBn5Jn2Z)
- [📘 Beginning STM32: Developing with FreeRTOS, libopencm3 and GCC - Warren Gay](https://link.springer.com/book/10.1007/978-1-4842-3624-6)
- [🎞️ Udemy – Microcontroller Embedded C Programming: Absolute Beginners](https://www.udemy.com/course/microcontroller-embedded-c-programming/)
- [🎞️ Udemy – Embedded Systems STM32 Low-Layer APIs(LL) Driver Development](https://www.udemy.com/course/embedded-systems-stm32-low-level-ll-driver-development/)
- [🎞️ Udemy – Embedded Systems STM32 HAL APIs Driver Development](https://www.udemy.com/course/embedded-systems-stm32-hal-apis-driver-development/)
- [📘 Embedded System Design with ARM Cortex-M Microcontrollers: Applications with C, C++ and MicroPython - Cem Ünsalan, Hüseyin Deniz Gürhan, Mehmet Erkin Yücel](https://link.springer.com/book/10.1007/978-3-030-88439-0)
- [📘💎 Embedded Systems Design using the MSP430FR2355 LaunchPad - Brock J. LaMeres](https://link.springer.com/book/10.1007/978-3-030-40574-8)
- [📘💎 Building Embedded Systems: Programmable Hardware - Changyi Gu](https://link.springer.com/book/10.1007/978-1-4842-1919-5)
- [🔗 Awesome Embedded: A curated list of awesome embedded programming](https://github.com/nhivp/Awesome-Embedded)

#### GPIO

- [🎞️ Tutorial 5: Peripheral 1 - General purpose Input Output (GPIO) Configuration in STM32](https://youtu.be/tjDhmavBGf0)

#### ADC 模数转换

- [🎞️ How Do ADCs Work? - The Learning Circuit](https://www.youtube.com/watch?v=g4BvbAKNQ90)
- [🎞️ Tutorial 13: ADC in STM32F4](https://youtu.be/vIlG_i3GqeU)
- [🎞️ Tutorial 14: ADC by Polling](https://www.youtube.com/watch?v=uUi6JyUuEJA)

#### DAC 数模转换

- [🎞️ How Do DACs Work? - The Learning Circuit](https://www.youtube.com/watch?v=YAxrmoVtEtE)
- [🎞️ DAC in STM32 || Sine wave || HAL || CubeIDE](https://www.youtube.com/watch?v=6Z1L6ox63j0)

#### 定时器 / 计数器

- [📝 Introduction to Microcontroller Timers: Periodic Timers](https://www.allaboutcircuits.com/technical-articles/introduction-to-microcontroller-timers-periodic-timers/)
- [📝 AVR Timer programming](https://exploreembedded.com/wiki/AVR_Timer_programming)
- [🎞️ STM32 TIMERS (YouTube Playlist)](https://www.youtube.com/playlist?list=PLfIJKC1ud8gjLZBzjE3kKBMDEH_lUc428)

#### PWM 脉宽调制

- [🎞️ What is PWM?](https://www.youtube.com/watch?v=B_Ysdv1xRbA)
- [📝 Pulse-width Modulation (PWM) Timers in Microcontrollers](https://www.allaboutcircuits.com/technical-articles/introduction-to-microcontroller-timers-pwm-timers/)
- [🎞️ STM32 Guide #3: PWM + Timers](https://www.youtube.com/watch?v=AjN58ceQaF4)

#### RTC 实时时钟

- [📝 Real Time Clocks (RTCs) in Microcontroller Timers](https://www.allaboutcircuits.com/technical-articles/introduction-to-microcontroller-timers-real-time-clocks/)

#### Watchdog 看门狗

- [📝 A Guide to Watchdog Timers for Embedded Systems](https://interrupt.memfault.com/blog/firmware-watchdog-best-practices)
- [📝 Watchdog Timers in Microcontrollers](https://www.allaboutcircuits.com/technical-articles/watchdog-timers-microcontroller-timers/)
- [🎞️ The Watchdog Timer on Arduino](https://www.youtube.com/watch?v=AzZBgH67mgE)
- [🎞️ WATCHDOGS in STM32 || IWDG and WWDG || CubeIDE](https://www.youtube.com/watch?v=AelNsnpfbcM)

#### Interrupts 中断

- [🎞️ Polling/Interrupt/DMA differences explained easily](https://www.youtube.com/watch?v=LNPBr3WvuNg)
- [🎞️ Level Up Your Arduino Code: External Interrupts](https://www.youtube.com/watch?v=J61_PKyWjxU)
- [🎞️ Tutorial 10: Peripheral 2 - Nested Vector Interrupt controller (NVIC) in STM32](https://www.youtube.com/watch?v=qwebM-YaSU4)
- [🎞️ Tutorial 11: LAB - External Interrupt ( EXTI ) Interfacing in STM32 using STM32CUBEMX](https://www.youtube.com/watch?v=oJc0seuBbzI)
- [🎞️ Tutorial 12: Interrupt Priorities in STM32](https://www.youtube.com/watch?v=aXLJD4qJmtk)

#### DMA 直接内存访问

- [🎞️ Introduction to Direct Memory Access (DMA)](https://www.youtube.com/watch?v=M16l_ymlfcs)
- [🎞️ STM32 DMA PT 1](https://www.youtube.com/watch?v=yvLHtXJ_KSg)
- [🎞️ STM32 DMA PT 2](https://www.youtube.com/watch?v=Kb8dX18xYuo)
- [🎞️ Getting Started With STM32 & Nucleo Part 4: Working with ADC and DMA - Maker.io](https://www.youtube.com/watch?v=EsZLgqhqfO0)
- [🎞️ STM32 UART DMA and IDLE LINE || Receive unknown length DATA](https://www.youtube.com/watch?v=Bo6MC5A8uTE)

#### 时钟管理

- [📝 Clock Configuration in STM32](https://medium.com/@csrohit/clock-configuration-in-stm32-6a058da220e0)
- [🎞️ STM32: Change clock speed via registers](https://www.youtube.com/watch?v=W_9jPMgiqaQ)
- [🎞️ #1. Intro to STM32F4 Register Based Programming || Clock Setup || LED Blinking || NO HAL](https://www.youtube.com/watch?v=GJ_LFAlOlSk)
- [🎞️ Tutorial 8: MCU Clocks configuration in STM32 using STM32CUBEMX](https://www.youtube.com/watch?v=y8yNsWpQiTM)
- [🎞️ Clock sources and PLL in ARM Cortex M4](https://www.youtube.com/watch?v=2ou8FQ_7PdI)

#### 电源管理

- [🎞️ SLEEP Mode in STM32F103 || CubeIDE || Low Power Mode || Current Consumption](https://www.youtube.com/watch?v=2rKcsGkCG0s)
- [🎞️ STOP MODE in STM32 || CubeIDE || Low Power Mode](https://www.youtube.com/watch?v=UtQhc4XV8k4)

#### Bootloader / DFU 设备固件更新

- [📝 Basics to Developing Bootloader for Arduino](https://www.electronicwings.com/arduino/basics-to-developing-bootloader-for-arduino)
- [📝 From Zero to main(): How to Write a Bootloader from Scratch](https://interrupt.memfault.com/blog/how-to-write-a-bootloader-from-scratch)
- [🎞️ How to Create a Super Simple Bootloader](https://www.youtube.com/watch?v=OkUQ3iMmiYQ&list=PLnMKNibPkDnEb1sphpdFJ3bR9dNy7S6mO)
- [🎞️ Blinky To Bootloader: Bare Metal Programming Series (YouTube Playlist)](https://www.youtube.com/playlist?list=PLP29wDx6QmW7HaCrRydOnxcy8QmW0SNdQ)
- [📝 Simple AVR Bootloader tutorial](https://www.pocketmagic.net/simple-avr-bootloader-tutorial/)
- [🎞️💎 Udemy – STM32Fx Microcontroller Custom Bootloader Development](https://www.udemy.com/course/stm32f4-arm-cortex-mx-custom-bootloader-development/)
- [📝💎 Device Firmware Update Cookbook](https://interrupt.memfault.com/blog/device-firmware-update-cookbook)

---

### 接口、协议与通信技术

嵌入式系统通常通过接口和协议与其他设备或外部系统进行通信。接口提供物理连接，协议定义数据交换规则。选择取决于具体应用需求，包括带宽、距离、安全性和功耗。

#### 基础协议

- [🎞️👶 Understanding Serial Protocols](https://www.youtube.com/watch?v=LEz5UCN3aHA)
- [📝👶 Understanding and Selecting in 2024: I2C, SPI, UART Explained](https://www.parlezvoustech.com/en/comparaison-protocoles-communication-i2c-spi-uart/)
- [🎞️ PROTOCOLS: UART - I2C - SPI - Serial communications #001](https://www.youtube.com/watch?v=IyGwvGzrqp8)

##### UART

- [🎞️👶 Understanding UART](https://www.youtube.com/watch?v=sTHckUyxwp8)
- [🎞️ how does UART work??? (explained clearly)](https://www.youtube.com/watch?v=V6m2skVlsQI)
- [🎞️ Basics of UART Communication | UART Frame Structure | RS 232 Basics | Part1](https://www.youtube.com/watch?v=JuvWbRhhpdI)
- [🎞️ Understanding UART Communication Programming | UART Peripherals | Part 2](https://www.youtube.com/watch?v=QmjKRwgddxw)
- [🎞️ The RS-232 protocol](https://www.youtube.com/watch?v=AHYNxpqKqwo)

##### I2C

- [🎞️👶 Understanding I2C](https://www.youtube.com/watch?v=CAvawEcxoPU)
- [📝 I2C in a Nutshell](https://interrupt.memfault.com/blog/i2c-in-a-nutshell)
- [🎞️ STM32 I2C SLAVE (YouTube Playlist)](https://www.youtube.com/playlist?list=PLfIJKC1ud8gj_P7Qb28aTr0t92uk_vwg0)

##### SPI

- [🎞️👶 Understanding SPI](https://www.youtube.com/watch?v=0nVNwozXsIc)
- [🎞️ SPI: The serial peripheral interface](https://www.youtube.com/watch?v=MCi7dCBhVpQ)
- [🎞️ Getting Started with STM32 and Nucleo Part 5: How to Use SPI | Digi-Key Electronics](https://www.youtube.com/watch?v=eFKeNPJq50g)

##### SDIO

- [📝 SDIO Protocol](https://prodigytechno.com/sdio-protocol/)
- [📝 Interface SD CARD with SDIO in STM32](https://controllerstech.com/interface-sd-card-with-sdio-in-stm32/)
- [🔗 SDIO Card Slave Driver - ESP32 - Technical Documents](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/sdio_slave.html)

##### I3C

- [🎞️ What is I3C®?](https://www.youtube.com/watch?v=g3TBNHec5Ec)
- [🔗 MIPI I3C & MIPI I3C Basic](https://www.mipi.org/specifications/i3c-sensor-specification)
- [📝 I3C Protocol: Understanding and Debug](https://prodigytechno.com/mipi-i3c-protocol-debug/)
- [🎞️ MIPI I3C Basic - The next generation sensor interface enabling low-power IoT applications](https://www.youtube.com/watch?v=xWKxZp_9RFQ)

##### 1-Wire

- [🎞️ 1-Wire® Technology Overview](https://www.youtube.com/watch?v=CjH-OztKe00)

#### 数字音频协议

##### I2S

- [📝 Introduction to the I2S Interface](https://www.allaboutcircuits.com/technical-articles/introduction-to-the-i2s-interface/)
- [🎞️ Building a Digital Music Player with I2S?! What is I2S! EB#45](https://www.youtube.com/watch?v=qNLvoSQCx60)
- [🔗 UM11732 - I2S bus specification](https://www.nxp.com/docs/en/user-manual/UM11732.pdf)

##### PCM

- [🔗 HUAWEI LGA Module - PCM Audio Design Guide](https://www.paoli.cz/out/media/HUAWEI%20LGA%20Module%20PCM%20Audio%20Design%20Guide-V100R001_04(1).pdf)
- [📝 PCM Terminology and Concepts](https://larsimmisch.github.io/pyalsaaudio/terminology.html)

#### 显示与相机协议

##### MIPI CSI-2

- [🔗 MIPI Camera Serial Interface 2](https://www.mipi.org/specifications/csi-2)
- [🎞️ Tutorial: MIPI CSI-2](https://www.youtube.com/watch?v=8REu_h7bzHM)
- [🔗 AN13573 - i.MX 8/RT MIPI DSI/CSI-2](https://www.nxp.com/docs/en/application-note/AN13573.pdf)

##### MIPI DSI

- [🔗 MIPI Display Serial Interface](https://www.mipi.org/specifications/dsi)
- [🔗 AN4860 - Introduction to DSI host on STM32 MCUs and MPUs](https://www.st.com/resource/en/application_note/an4860-introduction-to-dsi-host-on-stm32-mcus-and-mpus-stmicroelectronics.pdf)

##### HDMI

- [🎞️ TI Precision Labs - Video Interface: What are HDMI & Dual-Mode DisplayPort?](https://www.youtube.com/watch?v=jCO7Up1rzJc)
- [🎞️ HDMI 2.1 & TMDS Crash Course - ENMU EET 457 - Presentation](https://www.youtube.com/watch?v=5acgSK0kWTE)

#### 无线通信协议

##### Bluetooth / BLE

- [🎞️👶💎 Microchip University - First Steps into Bluetooth Low Energy (BLE)](https://mu.microchip.com/first-steps-into-bluetooth-low-energy-ble)
- [📝 Bluetooth Basics](https://learn.sparkfun.com/tutorials/bluetooth-basics/all)
- [📝 Bluetooth Low Energy: A Primer](https://interrupt.memfault.com/blog/bluetooth-low-energy-a-primer)
- [📝 A Practical Guide to BLE Throughput](https://interrupt.memfault.com/blog/ble-throughput-primer)
- [🎞️ SparkFun According to Pete #49 - How Bluetooth Works](https://www.youtube.com/watch?v=zJqGLWQGyvk)
- [🔗 Bluetooth Low Energy Fundamentals - Nordic Semiconductor](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/)
- [🔗 Bluetooth Overview - ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/bluetooth.html)

##### Wi-Fi

- [🎞️ 802.11 How WiFi Works - Wireless Networks | Computer Networks Ep. 7.3 | Kurose & Ross](https://www.youtube.com/watch?v=vvhEnr52UOU)
- [🎞️ 802.11 Frame Analysis](https://www.youtube.com/watch?v=ITAJb3v5VKQ)
- [🔗 Wi-Fi Driver - ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/wifi.html)
- [📝 ESP32 Set an Access Point (AP) using ESP-IDF](https://esp32tutorials.com/esp32-access-point-ap-esp-idf/)
- [📝 ESP32 ESP-IDF Connect with WiFi – Station Mode Example](https://esp32tutorials.com/esp32-esp-idf-connect-wifi-station-mode-example/)

##### LoRa / LoRaWAN

- [📝 The Arduino Guide to LoRa® and LoRaWAN®](https://docs.arduino.cc/learn/communication/lorawan-101)
- [🔗💎 The Things Fundamentals on LoRaWAN!](https://www.thethingsnetwork.org/docs/lorawan/)
- [📝 What are LoRa® and LoRaWAN®?](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/lora-and-lorawan/)
- [🎞️ #112 LoRa / LoRaWAN De-Mystified / Tutorial](https://www.youtube.com/watch?v=hMOwbNUpDQA)
- [🔗 ESP32 with LoRa using Arduino IDE – Getting Started](https://randomnerdtutorials.com/esp32-lora-rfm95-transceiver-arduino-ide/)

##### Zigbee

- [🎞️ What is ZIGBEE And How It Works?](https://www.youtube.com/watch?v=THtVeaxnd9E)
- [🎞️ How to take advantage of Zigbee and Bluetooth LE 5.2 on STM32WB wireless MCUs - Webinar Replay](https://www.youtube.com/watch?v=2sYEPykOaLQ)

##### Thread

- [🔗 OpenThread - An open-source implementation of Thread®](https://openthread.io/)
- [🎞️ What is Thread? Low-power IoT Networking for Smart Home Devices | Digi-Key Electronics](https://youtu.be/5CauESYB9-A)
- [🔗 OpenThread - ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/openthread.html)

##### Matter

- [🎞️ What is Matter? Unifying IoT Devices for the Smart Home | Digi-Key Electronics](https://youtu.be/vJIEfih9bl0)

#### 工业通信协议

##### Modbus

- [🎞️ What is Modbus and How does it Work?](https://www.youtube.com/watch?v=txi2p5_OjKU)
- [🎞️ How does Modbus Communication Protocol Work?](https://www.youtube.com/watch?v=JBGaInI-TG4)
- [🎞️ MODBUS STM32 (YouTube Playlist)](https://www.youtube.com/playlist?list=PLfIJKC1ud8ggRvaEsMjSEDazoBAnY4MUv)

##### RS485

- [🎞️ What is RS485 and How it's used in Industrial Control Systems?](https://www.youtube.com/watch?v=3wgKcUDlHuM)
- [🎞️ What is RS-485?](https://www.youtube.com/watch?v=bt9Px51eP6s)

##### EtherCAT

- [🎞️ Microchip University - An Introduction to EtherCAT®, EtherCAT P and the Microchip LAN925x family of Slave Controllers](https://mu.microchip.com/an-introduction-to-ethercat-ethercat-p-and-the-microchip-lan925x-family-of-slave-controllers)

##### CoAP & MQTT

- [🎞️ #144 Internet Protocols: CoAP vs MQTT, Network Sniffing, and preparation for IKEA Tradfri Hacking](https://www.youtube.com/watch?v=pfG8uEDZj5g)
- [🎞️ MQTT vs. CoAP | Comparison of IoT Protocols](https://www.youtube.com/watch?v=0CORpVSUQe0)
- [🎞️ Simple ESP32 IoT Sensor Node Tutorial: WiFi Enabled MQTT Sensor Data Node](https://www.youtube.com/watch?v=x5A5S0hoyJ0)
- [🔗 Cellular IoT Fundamentals - Nordic Semiconductor](https://academy.nordicsemi.com/courses/cellular-iot-fundamentals/)

#### 高速协议

##### Ethernet 以太网

- [🎞️👶 Microchip University - Ethernet Fundamentals](https://mu.microchip.com/ethernet-fundamentals)
- [📝 How the Ethernet Protocol Works – A Complete Guide](https://www.freecodecamp.org/news/the-complete-guide-to-the-ethernet-protocol/)
- [🎞️ What is an Ethernet PHY?](https://www.youtube.com/watch?v=JH3cMYErmKI)
- [🎞️ The Data Link Layer, MAC Addressing, and the Ethernet Frame](https://youtu.be/_b4dXKB8Pt8)
- [🎞️ Microchip University - Serializer/Deserializer (SerDes) Basics for Your Next Microchip Ethernet PHY Design](https://mu.microchip.com/serializerdeserializer-serdes-basics-for-your-next-microchip-ethernet-phy-design)
- [🎞️ Microchip University - Ethernet Switch Fundamentals](https://mu.microchip.com/ethernet-switch-fundamentals)

##### USB

- [🎞️👶 Microchip University - Introduction to USB 2.0](https://mu.microchip.com/introduction-to-usb-20)
- [🎞️👶 Microchip University - USB 3 Fundamentals](https://mu.microchip.com/usb-3-fundamentals)
- [🎞️ Training - USB 101 - Introduction to USB](https://www.youtube.com/watch?v=5S6ZPmtPzRA)
- [🔗 USB 101: An Introduction to Universal Serial Bus 2.0](https://www.infineon.com/dgdl/Infineon-AN57294_USB_101_An_Introduction_to_Universal_Serial_Bus_2.0-ApplicationNotes-v09_00-EN.pdf?fileId=8ac78c8c7cdc391c017d072d8e8e5256)
- [🎞️ How does a USB keyboard work?](https://youtu.be/wdgULBpRoXk)
- [🎞️ How does USB device discovery work?](https://www.youtube.com/watch?v=N0O5Uwc3C0o)
- [🎞️ MOOC - STM32 USB training (YouTube Playlist)](https://www.youtube.com/playlist?list=PLnMKNibPkDnFFRBVD206EfnnHhQZI4Hxa)
- [🎞️ Microchip University - USB2 Hub Fundamentals](https://mu.microchip.com/usb2-hub-fundamentals)

##### PCIe

- [🎞️ What is PCIe?](https://www.youtube.com/watch?v=L9qXjmJdQXY)
- [🎞️ PCIe QuickLearn (YouTube Playlist)](https://www.youtube.com/playlist?list=PL9B4edd-p2ajuP4dBHcnhtHKoZKkoR1R4)
- [🎞️ PCIe Protocol (YouTube Playlist)](https://www.youtube.com/playlist?list=PLZe4P0P_9Cosd0i2ha_QRdWlR1iZ0yVG4)

#### 汽车通信协议

##### CAN

- [🎞️👶 Microchip University - CAN and CAN FD Protocol and Physical Layer Basics](https://mu.microchip.com/understanding-the-can-fd-protocol)
- [📝👶 CAN bus in 2024: Operation, Advantages and Recent Developments](https://www.parlezvoustech.com/en/bus-can-2024-technologie-avantages-evolutions/)
- [🎞️👶 CAN Bus: Serial Communication - How It Works?](https://www.youtube.com/watch?v=JZSCzRT9TTo&t=21s)
- [🎞️👶 CAN Bus: A Beginners Guide Part 1](https://www.youtube.com/watch?v=YBrU_eZM110)
- [🎞️👶 CAN Bus: A Beginners Guide Part 2](https://www.youtube.com/watch?v=z5CVljiLhvc)
- [🎞️💎 Microchip University - Designing and Implementing a CAN FD Network](https://mu.microchip.com/designing-and-implementing-a-can-fd-network)
- [🎞️ Improving my electric longboard with a CAN Bus! What can the CAN Bus do? EB#44](https://www.youtube.com/watch?v=PL0TPdrhMuI)
- [🎞️ CAN Bus, OBD2 & J1939 Explained (YouTube Playlist)](https://www.youtube.com/playlist?list=PLpV68vjf4Xo4vZ_SjJ6tTlomYm-k18vDZ)
- [🎞️ J1939 Explained - A Simple Intro [v2.0 | 2021]](https://www.youtube.com/watch?v=vlqxu9ojbHg)
- [🎞️ Unified Diagnostic Services (UDS) Explained - A Simple Intro [2022]](https://www.youtube.com/watch?v=CV_B8tJgI5E)

#### 网络协议 / 套接字编程

- [🎞️ Networking Fundamentals - Practical Networking (YouTube Playlist)](https://www.youtube.com/playlist?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi)
- [🎞️ TCP vs UDP - Explaining Facts and Debunking Myths - TCP Masterclass](https://www.youtube.com/watch?v=jE_FcgpQ7Co)
- [🎞️ TCP - 12 simple ideas to explain the Transmission Control Protocol](https://www.youtube.com/watch?v=JFch3ctY6nE)
- [🎞️ UDP doesn't suck! It's the BEST L4 protocol for THESE types of applications...](https://www.youtube.com/watch?v=LaDRWycC7Iw)
- [🎞️ Networking tutorial - Ben Eater (YouTube Playlist)](https://www.youtube.com/playlist?list=PLowKtXNTBypH19whXTVoG3oKSuOcw_XeW)
- [📘💎 Hands-On Network Programming with C - Lewis Van Winkle](https://www.amazon.com/exec/obidos/ASIN/1789349869/aoeu-20)
- [📘💎 Network Algorithmics - George Varghese, Jun Xu](https://www.oreilly.com/library/view/network-algorithmics-2nd/9780128099865/)
- [🔗 tcpdump & libpcap libraries](https://www.tcpdump.org/)
- [🔗 lwIP - A Lightweight TCP/IP stack](https://savannah.nongnu.org/projects/lwip/)
- [🔗 lwIP (ESP-IDF)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/lwip.html)
- [🔗 Developing applications on STM32Cube with LwIP TCP/IP stack](https://www.st.com/resource/en/user_manual/um1713-developing-applications-on-stm32cube-with-lwip-tcpip-stack-stmicroelectronics.pdf)

#### 蜂窝通信

##### GSM / LTE

- [🎞️ STM32 : Internet Of Things With 4G LTE Modem (YouTube Playlist)](https://www.youtube.com/playlist?list=PL2_RO8p04imYY5JOrCDT7V0hnzkgyExRe)

##### LTE-M & NB-IoT

- [🔗 Cellular IoT Fundamentals - Nordic Semiconductor](https://academy.nordicsemi.com/courses/cellular-iot-fundamentals/)

---

### 存储技术与文件系统

嵌入式系统根据性能、成本、功耗和耐用性等因素，使用易失（SRAM、DRAM、PSRAM）和非易失（闪存、EEPROM、FRAM）存储器来存储和访问数据。

- [📝 Memory Options for Embedded Systems: How to Select the Right Memory Configuration](https://www.qt.io/embedded-development-talk/memory-options-for-embedded-systems-how-to-select-the-right-memory-configuration)

#### Flash Memory

- [📝 NAND and eMMC: All You Need to Know About Flash Memory](https://www.makeuseof.com/tag/nand-emmc-need-know-flash-memory/)

##### NOR / NAND

- [🎞️ QSPI in STM32 || Write and Read || N25Q](https://www.youtube.com/watch?v=xIfh_uYy-OU)
- [🎞️ QSPI in STM32 || Boot from EXT Memory || XIP || N25Q](https://www.youtube.com/watch?v=gAyuF20ok8c)
- [🎞️ Flash Memory in Embedded Linux Systems](https://www.youtube.com/watch?v=hdwMvwJIV-Y)

##### eMMC

- [🎞️ What is a eMMC? Intro, Comparing to Other Storage, and Upgrading. SSD, M.2](https://www.youtube.com/watch?v=vGatKmqYxEA)

##### SD Card

- [🎞️ Interfacing with an SD Card](https://www.youtube.com/watch?v=g40tUdjZ-Sk)

#### EEPROM

- [🎞️ Using EEPROM with Arduino - Internal & External](https://www.youtube.com/watch?v=ShqvATqXA7g)

#### SRAM / DRAM

- [📝 SRAM vs DRAM: Difference Between SRAM & DRAM Explained](https://www.enterprisestorageforum.com/hardware/sram-vs-dram/)
- [🎞️ What is SRAM?](https://www.youtube.com/watch?v=kU2SsUUsftA)
- [🎞️ SDRAM Hardware & Firmware Tutorial (STM32) - Phil's Lab #80](https://www.youtube.com/watch?v=h28D4AaPSjg)
- [🎞️ SDRAM in STM32 || MT48LC4](https://www.youtube.com/watch?v=QnDenqvzwyE)

#### 文件系统

文件系统是在存储设备（如硬盘驱动器、闪存驱动器或固态驱动器）上组织数据的一种方式。它提供了一种存储、访问和管理文件的方法，文件是可以单独访问的数据集合。嵌入式系统中的文件系统通常是轻量级的，并且针对效率进行了优化，考虑到了嵌入式设备的有限资源和特定需求。与桌面或服务器文件系统相比，它们通常使用更简单的文件结构和数据结构。

- [📝 Flash filesystems](https://hugh712.gitbooks.io/embeddedsystem/content/flash_filesystems.html)
- [📝 Block filesystems](https://hugh712.gitbooks.io/embeddedsystem/content/block_filesystems.html)
- [📝 Understanding the UBI File System in Embedded Devices](https://serhack.me/articles/understanding-ubi-file-system-embedded-devices-reolink/)
- [📝 UBI File System](https://docs.kernel.org/filesystems/ubifs.html)
- [📝 JFFS : The Journalling Flash File System](https://sourceware.org/jffs2/jffs2-html/)
- [📝 Preventing Filesystem Corruption In Embedded Linux](https://www.embeddedts.com/assets/preventing-filesystem-corruption-in-embedded-linux)
- [🔗 LittleFS - A high-integrity embedded file system](https://os.mbed.com/blog/entry/littlefs-high-integrity-embedded-fs/)
- [🔗 SPIFS - Wear-leveled SPI flash file system for embedded devices](https://github.com/pellepl/spiffs)
- [🔗 EEPROM File System (EEFS)](opensource.gsfc.nasa.gov/projects/eefs/index.php)

---

### 硬件仿真 / 模拟

嵌入式系统开发通常涉及在实际硬件部署之前模拟或仿真硬件环境，以测试和调试软件。仿真工具创建硬件系统的虚拟模型，而模拟工具则使用真实的硬件组件复制实际的硬件行为。这些工具提供了多种优势，包括减少开发时间、降低硬件成本和提高软件可靠性。

- [🔗👶 Wokwi - Online ESP32, STM32, Arduino Simulator](https://wokwi.com/)
- [🔗👶 SimulIDE Circuit Simulator](https://simulide.com/)

#### QEMU

- [🔗 QEMU’s documentation](https://www.qemu.org/docs/master/index.html)
- [📝 Running AVR code in QEMU - A quick-start guide to accelerate AVR firmware development](https://yeah.nah.nz/embedded/qemu-avr/)
- [📝 QEMU Simulation - Blinky - STM32F767ZI Full Stack](https://longer-vision-robot.gitbook.io/stm32f767zi-full-stack/chapter-2.-programming-for-stm32/2.4-qemu-simulation-blinky)
- [📝 Emulating a Raspberry Pi in QEMU](https://interrupt.memfault.com/blog/emulating-raspberry-pi-in-qemu)

#### Renode

- [🔗 Renode - GitHub Repo](https://github.com/renode/renode)
- [🔗 Renode - Documentation](https://renode.readthedocs.io/en/latest/)
- [🔗 Renode - Official Tutorials](https://renode.io/tutorials/)
- [📝 Cortex-M MCU Emulation with Renode](https://interrupt.memfault.com/blog/intro-to-renode)
- [📝 A simple guide to get started on renode](https://github.com/tarciszera/renode_guide)
- [🎞️ Using CI-based workflow with Renode in bringing TensorFlow Lite to Zephyr](https://www.youtube.com/watch?v=jF94cXPoZZg)

---

### 传感器与执行器

传感器与执行器是嵌入式系统的眼睛和手。它们负责收集环境信息并基于这些信息采取行动。传感器将温度、光或声音等物理现象转换为嵌入式系统可以处理的电信号。而执行器则将电信号转换为物理动作，例如控制电机速度或开关阀门。

- [🎞️💎 Coursera - Embedding Sensors and Motors Specialization](https://www.coursera.org/specializations/embedding-sensors-motors)

#### 传感器

- [📝 Calibrating Sensors](https://learn.adafruit.com/calibrating-sensors)
- [📝 DHT11 vs DHT22 vs LM35 vs DS18B20 vs BME280 vs BMP180](https://randomnerdtutorials.com/dht11-vs-dht22-vs-lm35-vs-ds18b20-vs-bme280-vs-bmp180/)
- [🎞️ Getting Started With STM32 and Nucleo Part 2: How to Use I2C to Read Temperature Sensor TMP102](https://www.youtube.com/watch?v=isOekyygpR8)
- [🎞️ GPS Module and STM32 || NEO 6M || Get coordinates, Date, Time, Speed, etc.](https://www.youtube.com/watch?v=tq_RoaPLahk)
- [🎞️ Interface MPU6050/GY-521 with STM32 || LCD 20x4 || CubeMx || HAL || SW4STM](https://www.youtube.com/watch?v=xxphp9wDnHA)
- [📝 Arduino with PIR Motion Sensor](https://randomnerdtutorials.com/arduino-with-pir-motion-sensor/)
- [📝 Complete Guide for Ultrasonic Sensor HC-SR04 with Arduino](https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/)
- [🎞️ Electronic Basics #15: Temperature Measurement (Part 1) || NTC, PT100, Wheatstone Bridge](https://youtu.be/1U4fep_qAeo?si=Q2FF__EXONN-xN5M)

#### 执行器

- [📝 Adafruit Motor Selection Guide](https://learn.adafruit.com/adafruit-motor-selection-guide)
- [🎞️ DC Motor Speed Controller PWM With Potentiometer Using STM32](https://www.youtube.com/watch?v=8QpegVuV_AQ)
- [📝 All About Stepper Motors](https://learn.adafruit.com/all-about-stepper-motors)
- [📝 Using Servos With CircuitPython and Arduino](https://learn.adafruit.com/using-servos-with-circuitpython)
- [🎞️ Electronic Basics #25: Servos and how to use them](https://youtu.be/J8atdmEqZsc?si=bH_xoIwnAsNU5_lD)
- [🎞️ Electronic Basics #24: Stepper Motors and how to use them](https://youtu.be/bkqoKWP4Oy4?si=kvhwykmFZ0UnLDJ7)
- [🎞️ Electronic Basics #18: DC & Brushless DC Motor + ESC](https://youtu.be/UteZJ_7C4Mg?si=uADPmCaucyWXd8Xe)

---

### DSP 数字信号处理

数字信号处理（DSP）是处理数字信号的工程学分支。它广泛应用于嵌入式系统、通信系统和多媒体系统中。DSP算法通常使用专用集成电路（ASIC）或现场可编程门阵列（FPGA）在硬件中实现。

#### DSP 基础与滤波器设计

- [📘💎 The Scientist and Engineer's Guide to Digital Signal Processing - Steven W. Smith](https://www.dspguide.com/pdfbook.htm)
- [🎞️ FIR Filter Design and Software Implementation - Phil's Lab #17](https://www.youtube.com/watch?v=uNNNj9AZisM)
- [🎞️ IIR Filters - Theory and Implementation (STM32) - Phil's Lab #32](https://www.youtube.com/watch?v=QRMe02kzVkA)
- [🎞️ Digital Signal Processing (ECSE-4530) Lectures, Fall 2014 (YouTube Playlist)](https://youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et)
- [🎞️ Udemy – Digital Signal Processing (DSP) From Ground Up in C](https://www.udemy.com/course/digital-signal-processing-dsp-from-ground-uptm-in-c/)
- [📘 Real-Time Digital Signal Processing: Fundamentals, Implementations and Applications - Sen M. Kuo, Bob H. Lee, Wenshun Tian](https://www.wiley.com/en-us/Real+Time+Digital+Signal+Processing%3A+Fundamentals%2C+Implementations+and+Applications%2C+3rd+Edition-p-9781118414323)
- [📘 Real-Time Digital Signal Processing from MATLAB to C with the TMS320C6x DSPs - Thad B. Welch, Cameron H.G. Wright, Michael G. Morrow](https://www.routledge.com/Real-Time-Digital-Signal-Processing-from-MATLAB-to-C-with-the-TMS320C6x/Welch-Wright-Morrow/p/book/9780367736453)
- [📘 Schaum's Outline of Signals and Systems - Hwei P. Hsu](https://www.mhprofessional.com/schaum-s-outline-of-signals-and-systems-fourth-edition-9781260454246-usa)
- [📘💎 Digital Signal Processing - John G. Proakis, Dimitris K. Manolakis](https://a.co/d/75P5PiE)

#### 离散傅里叶变换 / 快速傅里叶变换 (FFT)

- [🎞️ Discrete Fourier Transform - Simple Step by Step](https://www.youtube.com/watch?v=mkGsMWi_j4Q)
- [🎞️ The Fast Fourier Transform (FFT): Most Ingenious Algorithm Ever?](https://youtu.be/h7apO7q16V0)
- [🎞️ The FFT Algorithm - Simple Step by Step](https://www.youtube.com/watch?v=htCj9exbGo0)
- [🎞️ STM32 Fast Fourier Transform (CMSIS DSP FFT) - Phil's Lab #111](https://youtu.be/d1KvgOwWvkM)

#### 控制理论

- [🎞️ Understanding Control Systems (YouTube Playlist)](https://youtube.com/playlist?list=PLn8PRpmsu08q8CE0pbZ-cSrMm_WYJfVGd)
- [🎞️ Control Systems - CircuitBread (YouTube Playlist)](https://www.youtube.com/playlist?list=PLfYdTiQCV_p4YZNJWExM-5_g0fk9bHDL8)
- [🎞️💎 Brian Douglas' Control Systems Lectures (YouTube Channel)](https://www.youtube.com/@BrianBDouglas)
- [📘💎 Control Systems Engineering - Norman S. Nise](https://www.wiley.com/en-us/Control+Systems+Engineering%2C+8th+Edition-p-9781119474227)
- [📘💎 Modern Control Systems - Richard C. Dorf, Robert H. Bishop](https://www.pearson.com/en-us/subject-catalog/p/modern-control-systems/P200000003484/9780137307098)

#### PID 控制器

- [🎞️👶 What is a PID Controller? | DigiKey](https://www.youtube.com/watch?v=tFVAaUcOm4I)
- [🎞️👶 How to Tune a PID Controller for an Inverted Pendulum | DigiKey](https://www.youtube.com/watch?v=hRnofMxEf3Q)
- [🎞️ PID Controller Explained](https://www.youtube.com/watch?v=fv6dLTEvl74)
- [🎞️ Understanding PID Control (YouTube Playlist)](https://youtube.com/playlist?list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm-y)
- [🎞️ PID Controller Implementation in Software - Phil's Lab #6](https://www.youtube.com/watch?v=zOByx3Izf5U)

#### MATLAB / Simulink

- [🎞️ MATLAB Tutorials: Getting Started with MATLAB (YouTube Playlist)](https://youtube.com/playlist?list=PL7CAABC40B2825C8B)
- [🎞️ Getting Started with Simulink (YouTube Playlist)](https://youtube.com/playlist?list=PL484BA2AD3AE4C2D0)
- [🎞️ Udemy – MATLAB/SIMULINK Bible|Go From Zero to Hero!](https://www.udemy.com/course/matlabsimulink-biblego-from-zero-to-hero/)

---

### 操作系统

嵌入式系统可以使用操作系统（OS）编程，或者直接在硬件上编程，即裸机编程。每种方法都有其优点和缺点。嵌入式操作系统在硬件和应用代码之间提供了一个抽象层，提供资源管理、任务调度、错误处理和通信能力等优势。然而，它们增加了开销，可能不适合内存受限的应用。

#### 操作系统基础

- [📝👶 Putting the “You” in CPU](https://cpu.land/)
- [📘👶 The little book about OS development](https://littleosbook.github.io/)
- [📘👶 Operating Systems: From 0 to 1](https://github.com/tuhdo/os01/blob/master/Operating_Systems_From_0_to_1.pdf)
- [📘💎 Operating Systems: Three Easy Pieces -  Remzi H Arpaci-Dusseau, Andrea C Arpaci-Dusseau](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- [📘💎 Modern Operating Systems - Andrew S. Tanenbaum, Herbert Bos](https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295)
- [📝 Writing an OS in Rust - Philipp Oppermann's blog](https://os.phil-opp.com/)
- [🔗 Operating System development tutorials in Rust on the Raspberry Pi](https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials)

#### 实时操作系统

实时操作系统（RTOS）是为满足严格时间期限而设计的专用操作系统。它们用于对时间要求苛刻的嵌入式系统中，如航空电子设备、机器人和医疗设备。RTOS提供了一个确定性的环境，使任务能够以可预测的时间执行。这确保了关键任务即使在中断和其他干扰的情况下也能按时执行。

##### RTOS 基础

- [📝 Bare-metal and RTOS Based Embedded Systems](https://microcontrollerslab.com/difference-bare-metal-and-rtos-based-embedded-systems/)
- [📝 RTOS vs. Bare Metal: Navigating Performance, Complexity, and Efficiency](https://weston-embedded.com/support/media-articles/119-rtos-vs-bare-metal-navigating-performance-complexity-and-efficiency)
- [📝 The Pros and Cons of RTOS vs Bare Metal: Which Will You Choose?](https://medium.com/@lanceharvieruntime/the-pros-and-cons-of-rtos-vs-bare-metal-which-will-you-choose-756e33ba6df7)
- [📝 FreeRTOS vs Linux for Embedded Systems](https://www.bytesnap.com/news-blog/freertos-vs-linux-embedded-systems/)
- [🔗 Real-Time Systems Concepts](https://micrium.atlassian.net/wiki/spaces/osiidoc/pages/163855/Real-Time+Systems+Concepts)
- [🔗 RTOS Fundamentals](https://www.freertos.org/implementation/a00002.html)
- [📝 A Simple Scheduler via an Interrupt-driven Actor Model](https://interrupt.memfault.com/blog/hardware-actor-scheduler)
- [📝 ARM Cortex-M RTOS Context Switching](https://interrupt.memfault.com/blog/cortex-m-rtos-context-switching)
- [🎞️ RTOS (YouTube Playlist)](https://www.youtube.com/playlist?list=PLPW8O6W-1chyrd_Msnn4LD6LBs2slJITs)
- [🎞️ Beyond the RTOS (YouTube Playlist)](https://www.youtube.com/playlist?list=PLPW8O6W-1chytjkg63-tM7MI0BvGxxPIP)

##### FreeRTOS

- [🔗 FreeRTOS - Market leading RTOS](https://www.freertos.org)
- [🎞️👶 Introduction to RTOS (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEBQazB0HUyQ4hAPU1cJED6t3DU0h34bz)
- [📘💎 Mastering the FreeRTOS Real Time Kernel - a Hands On Tutorial Guide](https://www.freertos.org/Documentation/RTOS_book.html)
- [🎞️👶 Microchip University - FreeRTOS Simplified: A Beginner's Guide to Develop and Debug FreeRTOS Applications](https://mu.microchip.com/freertos-simplified)
- [🎞️ Getting Started With STM32 and Nucleo Part 3: FreeRTOS - How To Run Multiple Threads w/ CMSIS-RTOS](https://www.youtube.com/watch?v=CdpgqpuPSyQ)
- [📘 Hands-On RTOS with Microcontrollers: Building real-time embedded systems using FreeRTOS, STM32 MCUs, and SEGGER debug tools - Brian Amos](https://a.co/d/11MSPlo)
- [📘 Beginning STM32: Developing with FreeRTOS, libopencm3 and GCC - Warren Gay](https://link.springer.com/book/10.1007/978-1-4842-3624-6)
- [🔗 SafeRTOS - Safety Critical Real-Time OS](https://www.freertos.org/FreeRTOS-Plus/Safety_Critical_Certified/SafeRTOS.html)

##### Zephyr

- [🔗 Zephyr® Project](https://www.zephyrproject.org/)
- [🔗 Zephyr: Tutorial for Beginners](https://maksimdrachov.github.io/zephyr-rtos-tutorial/)
- [📝 Why We Moved from FreeRTOS to Zephyr RTOS](https://www.zephyrproject.org/why-we-moved-from-freertos-to-zephyr-rtos/)
- [🔗 nRF Connect SDK](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)
- [🎞️ ESP32 on Zephyr OS (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEQVp_6G_y4iFfemAbFsKw6tsGABarTwp)

##### μC/OS / Micriμm OS

- [🔗 Micriμm OS](https://www.silabs.com/developers/micrium)
- [🔗 µC/OS-III Documentation](https://micrium.atlassian.net/wiki/spaces/osiiidoc/overview)
- [📘 µC/OS-III Books](https://weston-embedded.com/micrium-books)
- [📘💎 µC/OS-II Documentation (Previously published as a book titled "MicroC/OS-II: The Real-Time Kernel")](https://micrium.atlassian.net/wiki/spaces/osiidoc/overview)

##### NuttX

- [🔗 NuttX - The Apache Software Foundation](https://nuttx.apache.org/)
- [🔗 NuttX Documentation](https://nuttx.apache.org/docs/latest/)
- [🎞️ Getting Started to NuttX (YouTube Playlist)](https://www.youtube.com/playlist?list=PLd73yQk5Fd8JEsVD-lhwYRQKVu6glfDa8)

##### RT-Thread

- [🔗 RT-Thread | An Open Source Embedded Real-time Operating System](https://www.rt-thread.io/)
- [🔗 RT-Thread document center](https://www.rt-thread.io/document/site/)
- [🎞️ RT-Thread Beginners Guide (YouTube Playlist)](https://youtube.com/playlist?list=PLXUV89C_M3G5KVw2IerI-pqApdSM_IaZo)

##### Mbed OS

- [🔗 Mbed OS](https://os.mbed.com/mbed-os/)
- [🔗 Mbed OS Documentation](https://os.mbed.com/docs/mbed-os/)

##### QNX

- [🔗 BlackBerry QNX: Embedded OS, Support, and Services](https://blackberry.qnx.com/en)
- [🔗 QNX Product Documentation](https://www.qnx.com/developers/docs/index.html)

##### VxWorks

- [🔗 VxWorks | Industry Leading RTOS for Embedded Systems](https://www.windriver.com/products/vxworks)
- [🔗 VxWorks Documentation](https://docs.windriver.com/category/os_vxworks?labelkey=os_vxworks)
- [🎞️ VxWORKS-RTOS - Kumar M (YouTube Playlist)](https://www.youtube.com/playlist?list=PLyp1I7W35-q34sYWBlBg8xgoqsizZ57P7)

##### Azure RTOS (ThreadX)

- [🔗 Azure RTOS - Making embedded IoT development and connectivity easy](https://azure.microsoft.com/en-us/services/rtos/)
- [🔗 Microsoft Azure RTOS documentation](https://learn.microsoft.com/en-us/azure/rtos/)
- [🔗 Azure RTOS ThreadX](https://github.com/azure-rtos/threadx)

#### 嵌入式 Linux

嵌入式 Linux 是针对嵌入式系统定制的专用 Linux 操作系统。它旨在运行于资源受限的设备上，如内存、处理能力和功耗有限的设备。

- [📝 What Is Embedded Linux?](https://www.windriver.com/solutions/learning/embedded-linux)
- [📝 FreeRTOS vs Linux for Embedded Systems](https://www.bytesnap.com/news-blog/freertos-vs-linux-embedded-systems/)
- [🎞️👶 Introduction to Embedded Linux (YouTube Playlist)](https://youtube.com/playlist?list=PLEBQazB0HUyTpoJoZecRK6PpDG31Y7RPB)
- [📝 Mastering Embedded Linux Series - George Hilliard's blog](https://www.thirtythreeforty.net/series/mastering-embedded-linux/)
- [📘💎 Mastering Embedded Linux Programming - Chris Simmonds](https://www.packtpub.com/product/mastering-embedded-linux-programming-third-edition/9781789530384)
- [🎞️💎 Coursera - Advanced Embedded Linux Development Specialization](https://www.coursera.org/specializations/advanced-embedded-linux-development)
- [🔗 Linux From Scratch - step-by-step instructions for building your own custom Linux system](https://www.linuxfromscratch.org/)
- [🔗 Automotive Grade Linux (AGL)](https://docs.automotivelinux.org/)
- [🔗 Real Time Linux and `PREEMPT_RT` Patch](https://wiki.linuxfoundation.org/realtime/start)
- [🔗 Android Open Source Project](https://source.android.com)
- [🔗 Android Automotive](https://source.android.com/docs/automotive)

##### Linux 内核

- [📘👶 Linux Kernel Development - Robert Love](https://www.oreilly.com/library/view/linux-kernel-development/9780768696974/)
- [📘💎 The Linux Programming Interface - Michael Kerrisk](https://man7.org/tlpi/)
- [📘 How Linux Works - Brian Ward](https://nostarch.com/howlinuxworks3)

##### Linux 设备驱动程序

- [📝👶 Writing a Simple Linux Kernel Module](https://blog.sourcerer.io/writing-a-simple-linux-kernel-module-d9dc3762c234)
- [📘💎 Linux Device Drivers -  Jonathan Corbet, Alessandro Rubini, Greg Kroah-Hartman](https://lwn.net/Kernel/LDD3/)
- [📘 The Linux Kernel Module Programming Guide](https://sysprog21.github.io/lkmpg/)
- [📘 Mastering Linux Device Driver Development - John Madieu](https://www.packtpub.com/product/mastering-linux-device-driver-development/9781789342048)
- [📝 Kernel Driver with Rust in 2022](https://not-matthias.github.io/posts/kernel-driver-with-rust/)

##### U-Boot

- [🔗 The U-Boot Documentation](https://u-boot.readthedocs.io/en/latest/)
- [🔗 Barebox](https://www.barebox.org/doc/latest/index.html)

##### Buildroot

- [🔗 Buildroot Documentation](https://buildroot.org/docs.html)
- [🎞️ Introduction to Embedded Linux Part 1 - Buildroot | Digi-Key Electronics](https://www.youtube.com/watch?v=9vsu67uMcko)
- [📝 Building Tiny Raspberry Pi Linux Images With Buildroot](https://rickcarlino.com/2021/building-tiny-raspberry-pi-linux-images-with-buildroot.html)

##### Yocto

- [🔗 Yocto Project Quick Build](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [🔗💎 Yocto Project Documentation](https://docs.yoctoproject.org/index.html)
- [🎞️ Introduction to Embedded Linux Part 2 - Yocto Project | Digi-Key Electronics](https://www.youtube.com/watch?v=2-PwskQrZac&t=7s)
- [📝 Build Linux Image for Raspberry Pi board using Yocto Project](https://tutorialadda.com/yocto/create-your-own-linux-image-for-the-raspberry-pi-board-using-yocto-project)
- [🎞️ Yocto Project Tutorial Series (Basic to Advance) (YouTube Playlist)](https://www.youtube.com/playlist?list=PLwqS94HTEwpQmgL1UsSwNk_2tQdzq3eVJ)
- [🎞️ Udemy – Embedded Linux using Yocto](https://www.udemy.com/course/embedded-linux-using-yocto/)
- [📘💎 Embedded Linux Systems with the Yocto Project - Rudolf J.Streif](https://www.oreilly.com/library/view/embedded-linux-systems/9780133443301/)
- [📘 Embedded Linux Development using Yocto Project Cookbook - Alex Gonzalez](https://www.oreilly.com/library/view/embedded-linux-development/9781788399210/)
- [📘 Bootlin Embedded Linux, Kernel, drivers, Yocto, Buildroot and Graphics Training](https://bootlin.com/training/)

##### 多线程与并行处理

- [📝 Threading/Concurrency vs Parallelism](http://www.danielmoth.com/Blog/threadingconcurrency-vs-parallelism.aspx)
- [📝 Multi-threading and Parallel Programming](https://dev.to/kwereutosu/multi-threading-and-parallel-programming-1l9m)
- [📝 Multitasking vs Multithreading vs Multiprocessing](https://medium.com/codex/multitasking-vs-multithreading-vs-multiprocessing-2b0087c861ae)
- [📘💎 Programming with POSIX Threads - David Butenhof](https://a.co/d/9R6DswF)
- [📘 C++ Concurrency in Action - Anthony Williams](https://www.manning.com/books/c-plus-plus-concurrency-in-action)

##### HPC 高性能计算

- [🔗 Parallel Programming and Performance Optimization With OpenMP](https://passlab.github.io/OpenMPProgrammingBook/index.html)
- [🎞️ Introduction to OpenMP - Tim Mattson (Intel) (YouTube Playlist)](https://youtube.com/playlist?list=PLLX-Q6B8xqZ8n8bwjGdzBJ25X2utwnoEG)
- [🔗 OpenCL Tutorials](https://www.intel.com/content/www/us/en/developer/articles/training/opencl-tutorials.html)
- [🔗 CUDA C++ Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)

##### IPC 进程间通信

- [📝 Inter Process Communication (IPC)](https://www.scaler.com/topics/operating-system/inter-process-communication-in-os/)
- [📝 What Is Inter-Process Communication In Linux?](https://www.scaler.com/topics/ipc-in-linux/)
- [🎞️ Udemy – Linux Inter Process Communication (IPC) from Scratch in C](https://www.udemy.com/course/linuxipc/)
- [🎞️ Udemy – Multi-Threading and IPC with Qt 5 C++](https://www.udemy.com/course/multi-threading-and-ipc-with-qt-c-plus-plus/)
- [📝 D-Bus Tutorial](https://dbus.freedesktop.org/doc/dbus-tutorial.html)

##### Qt 框架

- [🔗 Qt Documentation](https://doc.qt.io/)

---

### 调试

调试嵌入式系统涉及识别和解决软件缺陷和硬件故障。使用的技术包括静态代码分析、动态分析、仿真和模拟、在电路调试以及硬件调试。

- [📝 Using Asserts in Embedded Systems](https://interrupt.memfault.com/blog/asserts-in-embedded-systems)

#### JTAG / SWD

JTAG 和 SWD（串行线调试）是两种常用的嵌入式系统调试和编程接口协议。JTAG 是一种更通用的协议，适用于调试和编程更多类型的设备，而 SWD 则是专为 ARM 微控制器设计的更简单且紧凑的协议。

- [📝 A Deep Dive into ARM Cortex-M Debug Interfaces](https://interrupt.memfault.com/blog/a-deep-dive-into-arm-cortex-m-debug-interfaces)
- [🔗 Guide: Connecting your debugger](https://stm32-base.org/guides/connecting-your-debugger.html)
- [🎞️ STM32 + SWD + ST-Link + CubeIDE | Debugging on Custom Hardware Tutorial - Phil's Lab #4](https://www.youtube.com/watch?v=qMUzLU636s8)
- [📝 Diving into JTAG protocol. Part 1 — Overview](https://medium.com/@aliaksandr.kavalchuk/diving-into-jtag-protocol-part-1-overview-fbdc428d3a16)
- [📝 Diving into JTAG protocol. Part 2 — Debugging](https://medium.com/@aliaksandr.kavalchuk/diving-into-jtag-protocol-part-2-debugging-56a566db3cf8)
- [📝 Diving into JTAG protocol. Part 3 — Boundary Scan](https://medium.com/@aliaksandr.kavalchuk/diving-into-jtag-part-3-boundary-scan-17f9975ecc59)

#### GDB

GDB（GNU 调试器）是一款功能强大且多用途的调试器，支持源代码级和机器级调试。它支持多种编程语言，包括 C、C++、Objective-C、Java 和 Rust。GDB 是一款被广泛使用的免费开源软件工具。

- [📝 Advanced GDB Usage](https://interrupt.memfault.com/blog/advanced-gdb)
- [📝 How do breakpoints even work?](https://interrupt.memfault.com/blog/cortex-m-breakpoints)
- [🔗 GNU GDB Debugger Command Cheat Sheet](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)
- [🔗 gdbgui - A browser-based frontend to gdb (gnu debugger) ](https://www.gdbgui.com/)
- [🎞️ everyone needs to stop using print debugging (do THIS instead)](https://www.youtube.com/watch?v=3T3ZDquDDVg)
- [🎞️ GDB is REALLY easy! Find Bugs in Your Code with Only A Few Commands](https://www.youtube.com/watch?v=Dq8l1_-QgAc)
- [📝 Introduction to ARM Semihosting](https://interrupt.memfault.com/blog/arm-semihosting)

#### OpenOCD

OpenOCD（开放片上调试器）是一款开源软件工具，为嵌入式系统的调试和编程提供了强大且多功能的平台。它作为硬件调试适配器（HDA）与调试器（如 GDB）之间的接口，使开发人员能够与目标微控制器或微处理器进行交互。OpenOCD 支持多种硬件平台，并提供全面的硬件调试、编程和边界扫描测试功能。

- [🔗 OpenOCD - GitHub repository](https://github.com/openocd-org/openocd)
- [🎞️ This Is 100% How You Should Be Debugging | How to Use OpenOCD to Debug Embedded Software with GDB](https://www.youtube.com/watch?v=_1u7IOnivnM)

---

### 构建系统

构建系统自动化地将源代码编译和链接为可执行程序。它们是软件开发中的重要工具，可以帮助提高构建过程的效率和一致性。常用的构建系统包括 Make 和 CMake。

#### 编译器 / GCC

GCC（GNU 编译器套件）是一个免费开源的编译系统，能够编译多种编程语言的程序，包括 C、C++、Objective-C、Fortran、Ada 和 Go。由于其开源性质、成熟度、稳定性、可移植性、性能和庞大的社区支持，GCC 在嵌入式系统开发中非常受欢迎。另一方面，像 Keil 和 IAR 这样的专有编译器提供工具链支持、目标特定优化和客户支持，可能在特定项目中更受青睐。

- [📝 GCC and Make - Compiling, Linking and Building C/C++ Applications](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html)
- [📝 The Best and Worst GCC Compiler Flags For Embedded](https://interrupt.memfault.com/blog/best-and-worst-gcc-clang-compiler-flags)
- [📝 From Zero to main(): Demystifying Firmware Linker Scripts](https://interrupt.memfault.com/blog/how-to-write-linker-scripts-for-firmware)
- [📝 Bare Metal - From zero to blink](https://www.linuxembedded.fr/2021/02/bare-metal-from-zero-to-blink)
- [🔗 Keil MDK & µVision](https://www.keil.com/)
- [🔗 IAR Embedded Workbench](https://www.iar.com)

#### Make / CMake

CMake 和 Make 都是用于构建软件应用的工具。CMake 是一个生成 Makefile 的元构建系统，这些 Makefile 随后由 Make 用于构建软件。CMake 比 Make 更通用且跨平台，它在现代软件开发中正变得越来越受欢迎。

- [📝 A Shallow Dive into GNU Make](https://interrupt.memfault.com/blog/gnu-make-guidelines)
- [🎞️ Building STM32 projects from scratch with cross platform tools like Make, CMake and arm-gcc compiler toolchain (YouTube Playlist)](https://www.youtube.com/playlist?list=PLEg2mgYz66IOcHRvvUDf9O1ZCGy58M1Bt)
- [🔗 CMake Tutorial](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [🎞️ How to CMake Good (YouTube Playlist)](https://youtube.com/playlist?list=PLK6MXr8gasrGmIiSuVQXpfFuE1uPT615s)
- [📝👶 The most thoroughly commented embedded CMakeLists file](https://dnedic.github.io/blog/the-most-thoroughly-commented-embedded-cmakelists/)

#### Bash 脚本

Bash 脚本在嵌入式系统开发中是一个强大的工具，可以使开发人员自动化重复任务、处理复杂配置以及有效管理嵌入式系统的环境。Bash 脚本是针对 Linux 的工具，未在 Windows 中本机集成，但可以通过 Windows 子系统 Linux（WSL）访问。

- [🔗 Bash scripting cheatsheet](https://devhints.io/bash)
- [🎞️ Bash Scripting Tutorial for Beginners](https://www.youtube.com/watch?v=tK9Oc6AEnR4)

#### Docker

Docker 容器提供了一种一致且隔离的环境来构建软件应用。这有助于提高构建的可重现性并减少错误风险。Docker 还使共享构建环境更加容易，从而为开发人员节省时间和精力。

- [🔗 Docker Docs](https://docs.docker.com/get-started/)
- [🔗 Docker Cheat Sheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)
- [📝👶 Docker for Dummies](https://dev.to/stevenmcgown/docker-for-dummies-2bff)
- [🎞️ Introduction to Docker for the Embedded Developer](https://www.youtube.com/watch?v=Fz7ou-VBk-w)
- [🎞️ Intro to CI/CD Part 1: Getting Started with Docker | Digi-Key Electronics](https://youtu.be/1nxGcfIm-TU)
- [📝 A Modern C Development Environment](https://interrupt.memfault.com/blog/a-modern-c-dev-env)

---

### 软件开发生命周期（SDLC）模型

软件开发生命周期（SDLC）模型为软件开发提供了一种结构化的方法，指导从规划到部署和维护的整个过程。这些模型提供了组织、管理和执行软件项目的框架，确保开发过程的一致性和高效性。

- [📝 What is the software development life cycle?](https://www.coderus.com/the-software-development-lifecycle/)
- [📝 Embedded Product Development Life Cycle: Four Main Steps](https://www.sam-solutions.com/blog/embedded-product-development-life-cycle/)

#### 敏捷 / SCRUM

- [📝 Does agile work with embedded software?](https://www.embedded.com/does-agile-work-with-embedded-software/)
- [📝 Scrum for embedded software: Good – but for reasons other than what your manager thinks](https://www.elektrobit.com/trends/scrum-for-embedded-software/)
- [📝 What Is Scrum: A Guide to the Most Popular Agile Framework](https://www.scrumalliance.org/about-scrum)
- [📝 An agile guide to scrum meetings](https://www.atlassian.com/agile/scrum/ceremonies)
- [📝 What is scaled agile framework? (SAFe)](https://www.atlassian.com/agile/agile-at-scale/what-is-safe)
- [🔗 Jira - Issue & Project Tracking Software](https://confluence.atlassian.com/jira)

#### V-Model

- [📝 What is the V model for software development](https://x-engineer.org/v-model-software-development/)
- [📝 V Model In Software Engineering: Ultimate Guideline](https://biplus.com.vn/v-model-in-software-engineering/)

---

### 版本控制

版本控制系统是管理代码和其他数字资产更改的基本工具。它们跟踪随时间的变化，使开发人员可以恢复到先前版本、有效协作并识别潜在冲突。流行的版本控制系统包括 Git、Mercurial 和 Subversion。

#### Git

- [🎞️👶 Git Tutorial for Beginners: Learn Git in 1 Hour](https://www.youtube.com/watch?v=8JJ101D3knE)
- [🎞️ Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git](https://www.youtube.com/watch?v=Uszj_k0DGsg)

#### SVN (Subversion)

- [🔗 Apache® Subversion®](https://subversion.apache.org/)

---

### 测试

测试是嵌入式系统开发过程的核心部分，确保系统的质量、可靠性和安全性。它涉及从单元测试到系统测试的各种技术，用于验证软件和硬件组件的功能和性能。

#### TDD 测试驱动开发

- [📘💎 Test Driven Development for Embedded C - James Grenning](https://www.amazon.com/Driven-Development-Embedded-Pragmatic-Programmers/dp/193435662X)
- [📝 Testing: Unit VS Integration VS Regression VS Acceptance](https://medium.com/@touseefmurtaza1993/testing-unit-vs-integration-vs-regression-vs-acceptance-a3e190cc54dd)
- [📝 Firmware Testing with Renode and GitHub Actions](https://interrupt.memfault.com/blog/test-automation-renode)
- [📝 Balancing Test Coverage vs. Overhead](https://interrupt.memfault.com/blog/testing-vs-overhead)

##### 单元测试

- [📝 Embedded C/C++ Unit Testing Basics](https://interrupt.memfault.com/blog/unit-testing-basics)
- [📝 Embedded C/C++ Unit Testing with Mocks](https://interrupt.memfault.com/blog/unit-test-mocking)
- [🔗 Unit Testing for C (especially Embedded Software)](http://www.throwtheswitch.org/unity)
- [🔗 GoogleTest - Google Testing and Mocking Framework](https://github.com/google/googletest)
- [🔗 Catch2 - A modern, C++-native, test framework for unit-tests](https://github.com/catchorg/Catch2)
- [🔗 pytest-embedded](https://docs.espressif.com/projects/pytest-embedded/en/latest/)
- [📝 Introduction to testing ESP32 code with Pytest](https://blog.gistre.epita.fr/posts/brice.parent-2023-09-11-introduction_to_testing_esp32_code_with_pytest/)
- [📘 Unit Testing Principles, Practices, and Patterns - Vladimir Khorikov](https://www.manning.com/books/unit-testing)

##### 集成测试

- [📝 Hardware CI Arena](https://electricui.com/blog/hardware-testing)
- [📝 Exclave: Hardware Testing in Mass Production, Made Easier](https://www.bunniestudios.com/blog/?p=5450)
- [📝 Regression Testing of Embedded Systems](https://www.parasoft.com/blog/regression-testing-of-embedded-systems/)

#### CI/CD

持续集成（CI）和持续交付（CD）是自动化构建、测试和部署软件的开发实践。CI/CD 流水线旨在确保软件更改能够快速且可靠地部署。

- [🎞️ Intro to CI/CD Part 1: Getting Started with Docker | Digi-Key Electronics](https://youtu.be/1nxGcfIm-TU)
- [🎞️ Intro to CI/CD Part 2: Getting Started with GitHub Actions | Digi-Key Electronics](https://youtu.be/8pyqbYDYkRs)
- [📝 How to Build a Continuous Integration and Delivery Process for Embedded Software](https://medium.com/jumperiot/how-to-build-a-continuous-integration-and-delivery-flow-for-embedded-software-b0b5bf220a2)
- [📝 A guide to continuous delivery in embedded development](https://www.embedded.com/a-guide-to-continuous-delivery-in-embedded-development/)
- [🎞️ Continuous Delivery for Embedded Systems • Mike Long • GOTO 2015](https://www.youtube.com/watch?v=DcFe6cEvnGQ)
- [📝 Continuous Integration & Continuous Delivery for Embedded Systems (Whitepaper)](https://www.parasoft.com/white-paper/ci-cd-for-embedded-systems/)
- [📝 What is DevOps in an Embedded Device Company?](https://www.linkedin.com/pulse/what-devops-embedded-device-company-john-macdonald/)
- [🎞️💎 CI/CD Tutorials (YouTube Playlist)](https://www.youtube.com/playlist?list=PLy7NrYWoggjzSIlwxeBbcgfAdYoxCIrM2)

#### SIL / HIL 测试

软件在环（SIL）和硬件在环（HIL）测试是嵌入式系统开发中用于验证软件功能和性能的两种关键技术。这些测试方法使用软件模型或硬件仿真器模拟嵌入式系统的真实环境。

- [📝 Hardware-in-Loop and Software-in-Loop Testing](https://roboticsknowledgebase.com/wiki/system-design-development/In-Loop-Testing/)
- [🎞️ Embedded CI/CD with HIL Testing (YouTube Playlist)](https://youtube.com/playlist?list=PL4cGeWgaBTe1uwiqIAc6fwPzPpvgPZI2J)

#### 标准与认证

嵌入式系统开发需要遵循各种标准与认证，这些标准和认证作为确保系统质量、安全性和可靠性的指南和基准。这些标准通常由行业机构制定和维护，例如国际电工委员会（IEC）和汽车工程师学会（SAE）。

- [📝 Intro to Embedded Development: Styles and Standards](https://www.allaboutcircuits.com/technical-articles/embedded-programming-styles-and-standards/)
- [📝 Safety Standards and Certifications for Embedded Systems Development](https://www.linkedin.com/pulse/safety-standards-certifications-embedded-systems-development/)
- [🎞️ Microchip University - An Introduction To The ISA/IEC 62443 Standard](https://mu.microchip.com/an-introduction-to-the-isaiec-62443-standard)
- [🎞️ Exploring EMC Basics & Standards](https://www.youtube.com/watch?v=duhBkhlH-WY)

##### 功能安全

- [🎞️👶 Microchip University - Introduction to Functional Safety](https://mu.microchip.com/introduction-to-functional-safety)
- [🎞️ Udemy – Functional Safety According to ISO 26262 - Crash Course](https://www.udemy.com/course/iso-26262-crash-course/)
- [📝 A Guide to MISRA C Coding Standards - MISRA C and MISRA C++](https://www.perforce.com/resources/qac/misra-c-cpp)
- [📝 A Firmware Development Standard by Jack Ganssle](http://www.ganssle.com/fsm.htm)
- [📝 Safety-critical Embedded systems: How to prepare for software development](https://www.nagarro.com/en/blog/embedded-software-development-safety-critical-systems)
- [📝 DO-178C - Software Considerations in Airborne Systems and Equipment Certification](https://en.wikipedia.org/wiki/DO-178C)

---

### 嵌入式安全

由于资源限制和设备本身的特性，嵌入式系统中的安全性特别具有挑战性。嵌入式系统通常运行在小型、低功耗的微控制器上，内存和处理能力有限。这使得实现与传统计算平台相同级别的安全性变得困难。此外，嵌入式系统通常难以获得更新和补丁，使其更容易受到已知漏洞的攻击。

- [📝 Embedded Systems Security and TrustZone](https://embeddedsecurity.io/)

#### 硬件破解

学习硬件破解有助于安全专业人员了解嵌入式系统如何被攻破，并制定有效的防御措施以防止网络攻击。这些知识增强了嵌入式设备抵御攻击的能力。

- [📘💎 Practical Hardware Pentesting -  Jean-Georges Valle](https://a.co/d/dq4SeNH)
- [🎞️ Hardware Hacking Tutorial (YouTube Playlist)](https://www.youtube.com/playlist?list=PLoFdAHrZtKkhcd9k8ZcR4th8Q8PNOx7iU)
- [📘💎 The Hardware Hacking Handbook: Breaking Embedded Security with Hardware Attacks - Jasper van Woudenberg, Colin O'Flynn](https://a.co/d/gUIytFX)

#### 加密技术

- [🎞️👶 Microchip University - Cryptography Primer](https://mu.microchip.com/cryptography-primer)
- [🎞️ Hashing, Hashing Algorithms, and Collisions - Cryptography - Practical TLS](https://youtu.be/HHQ2QP_upGM)
- [🎞️ Data Integrity - How Hashing is used to ensure data isn't modified - HMAC - Cryptography](https://www.youtube.com/watch?v=doN3lzzNEIM)
- [🎞️ Encryption - Symmetric Encryption vs Asymmetric Encryption - Cryptography - Practical TLS](https://www.youtube.com/watch?v=o_g-M7UBqI8)
- [🎞️ Public and Private Keys - Signatures & Key Exchanges - Cryptography - Practical TLS](https://youtu.be/_zyKvPvh808)
- [🎞️ Understanding AES Encryption Mechanics: BMPS](https://youtu.be/OnhtzFJW_4I)
- [📘💎 Understanding Cryptography: A Textbook for Students and Practitioners -  Christof Paar, Jan Pelzl](https://link.springer.com/book/10.1007/978-3-642-04101-3)
- [📘💎 Handbook of Applied Cryptography -  Alfred J. Menezes, Paul C. van Oorschot, Scott A. Vanstone](https://cacr.uwaterloo.ca/hac/)
- [📘 Serious Cryptography: A Practical Introduction to Modern Encryption - Jean-Philippe Aumasson](https://nostarch.com/seriouscrypto)
- [🎞️ MOOC - Security Part2: Basics of cryptography (YouTube Playlist)](https://youtube.com/playlist?list=PLnMKNibPkDnFSFh57UFTZLpy-7lZiwTHh)
- [🎞️ MOOC - Security Part3 : STM32 security features (YouTube Playlist)](https://youtube.com/playlist?list=PLnMKNibPkDnFzux3PHKUEi14ftDn9Cbm7)  
- [📝 Introduction to encryption for embedded Linux developers](https://sergioprado.blog/introduction-to-encryption-for-embedded-linux-developers/)
- [📝 A hands-on approach to symmetric-key encryption](https://sergioprado.blog/a-hands-on-approach-to-symmetric-key-encryption/)
- [📝 Asymmetric-Key Encryption and Digital Signatures in Practice](https://sergioprado.blog/asymmetric-key-encryption-and-digital-signatures-in-practice/)

#### 安全启动与安全固件更新

- [📝 AVR231: AES Bootloader](https://www.microchip.com/en-us/application-notes/an2462)
- [🎞️ Blinky To Bootloader: Bare Metal Programming Series (YouTube Playlist)](https://www.youtube.com/playlist?list=PLP29wDx6QmW7HaCrRydOnxcy8QmW0SNdQ)
- [🎞️ MOOC - Security Part4 : STM32 security in practice (YouTube Playlist)](https://youtube.com/playlist?list=PLnMKNibPkDnF0wt-ZI74SflnsBV4yKzkO)
- [🎞️ MOOC - Security Part5 : How to define your security needs (YouTube Playlist)](https://youtube.com/playlist?list=PLnMKNibPkDnGqh5OmQWw98ztpf9TeczbC)
- [🎞️ MOOC - Security Part6: STM32 security ecosystem, from theory to practice (YouTube Playlist)](https://youtube.com/playlist?list=PLnMKNibPkDnGd7J7fV7tr-4xIBwkNfD--)
- [🎞️ TPM (Trusted Platform Module) - Computerphile](https://www.youtube.com/watch?v=RW2zHvVO09g)
- [🎞️ Securing Embedded Linux Systems with TPM 2.0 - Philip Tricca, Intel](https://www.youtube.com/watch?v=0qu9R7Tlw9o)
- [📝 TPM: Basic applications to embedded devices](https://witekio.com/blog/tpm-basic-applications-to-embedded-devices/)
- [📝 OTA for Embedded Linux Devices: A practical introduction](https://interrupt.memfault.com/blog/ota-for-embedded-linux-devices)
- [📝 Introduction to Embedded Linux Security - part 1](https://sergioprado.blog/introduction-embedded-linux-security-part-1/)
- [📝 Introduction to Embedded Linux Security - part 2](https://sergioprado.blog/introduction-embedded-linux-security-part-2/)

---

### 嵌入式图形用户界面

图形用户界面（GUI）已成为现代嵌入式系统不可或缺的一部分，提供了一种用户友好且直观的设备交互方式。设计有效的嵌入式系统GUI需要仔细考虑资源限制、用户体验和实时性能等因素。

- [🔗 U8glib library for monochrome displays, version 2](https://github.com/olikraus/u8g2)
- [🔗 LVGL](https://lvgl.io/)
- [🔗 TouchGFX](https://support.touchgfx.com/4.20/docs/introduction/welcome)
- [🎞️ Introduction to Qt / QML (YouTube Playlist)](https://www.youtube.com/playlist?list=PL6CJYn40gN6hdNC1IGQZfVI707dh9DPRc)

---

### 物联网

物联网（IoT）指的是由互联设备组成的网络，这些设备收集并与其他设备或云端交换数据。嵌入式系统通常是 IoT 设备的“大脑”，负责管理数据收集、处理和通信任务。嵌入式系统设计成在有限的功率和资源下运行，非常适合 IoT 应用。

- [🎞️👶💎 Microchip University - Design Considerations For Your First IoT Project](https://mu.microchip.com/design-considerations-for-your-first-iot-project)

#### 增量 OTA 固件更新

- [📝 Saving bandwidth with delta firmware updates](https://interrupt.memfault.com/blog/ota-delta-updates)
- [📝 Delta Over-The-Air Device Firmware Update](https://thinkty.net/projects/2023/05/07/delta_ota.html)
- [📝 FreeRTOS Delta Over-the-Air Updates](https://www.freertos.org/2022/01/delta-over-the-air-updates.html)
- [🔗 ESP Delta OTA](https://components.espressif.com/components/espressif/esp_delta_ota)

---

### 边缘 AI

边缘 AI 指设备能够自行执行机器学习任务，而无需将数据发送到中央服务器。这可以通过将小型、专用的AI模型直接嵌入设备中来实现。TinyML 是边缘 AI 的一个子集，专注于为计算能力非常有限的设备（如微控制器和传感器）开发这些模型。

- [🎞️ Udemy – Getting Started with Embedded AI | Edge AI](https://www.udemy.com/course/getting-started-with-embedded-ai-hands-on-experience/)
- [🎞️ Intro to Edge AI: Machine Learning + IoT – Maker.io Tutorial | Digi-Key Electronics](https://www.youtube.com/watch?v=Ejld8XZmvwE)

#### AI & ML 基础

- [📝 A beginner's guide to artificial intelligence and machine learning](https://developer.ibm.com/articles/cc-beginner-guide-machine-learning-ai-cognitive/)
- [📝👶 Introduction to Machine Learning for Coders!](https://course18.fast.ai/ml)
- [📝 Machine Learning Crash Course with TensorFlow APIs - Google](https://developers.google.com/machine-learning/crash-course/)

#### TensorFlow Lite

- [🎞️ Getting Started with TensorFlow and Keras – Maker.io | Digi-Key Electronics](https://www.youtube.com/watch?v=HCG3hFe1KYY)
- [🎞️ Intro to TensorFlow Lite Part 1: Wake Word Feature Extraction – Maker.io | Digi-Key Electronics](https://www.youtube.com/watch?v=0fn7pj7Dutc)
- [🎞️ Intro to TensorFlow Lite Part 2: Speech Recognition Model Training – Maker.io | Digi-Key Electronics](https://www.youtube.com/watch?v=yv_WVwr6OkI)

#### TinyML

- [🎞️👶 Intro to TinyML Part 1: Training a Neural Network for Arduino in TensorFlow | Digi-Key Electronics](https://www.youtube.com/watch?v=BzzqYNYOcWc)
- [🎞️👶 Intro to TinyML Part 2: Deploying a TensorFlow Lite Model to Arduino | Digi-Key Electronics](https://www.youtube.com/watch?v=dU01M61RW8s)
- [🎞️ Coursera - Introduction to Embedded Machine Learning](https://www.coursera.org/learn/introduction-to-embedded-machine-learning)
- [🎞️ TinyML: Getting Started with TensorFlow Lite for Microcontrollers | Digi-Key Electronics](https://youtu.be/gDFWCxrJruQ)
- [🎞️ TinyML: Getting Started with STM32 X-CUBE-AI | Digi-Key Electronics](https://youtu.be/crJcDqIUbP4)
- [🎞️ edX - Fundamentals of TinyML](https://www.edx.org/learn/machine-learning/harvard-university-fundamentals-of-tinyml)
- [🎞️ edX - Applications of TinyML](https://www.edx.org/learn/tinyml/harvard-university-applications-of-tinyml)
- [🎞️ edX - Deploying TinyML](https://www.edx.org/learn/tinyml/harvard-university-deploying-tinyml)
- [🎞️ edX - MLOps for Scaling TinyML](https://www.edx.org/learn/computer-programming/harvard-university-mlops-for-scaling-tinyml)
- [📘 TinyML: Machine Learning with TensorFlow Lite on Arduino and Ultra-Low-Power Microcontrollers - Pete Warden, Daniel Situnayake](https://tinymlbook.com/)

---

### AUTOSAR 架构

AUTOSAR，即汽车开放系统架构，是全球汽车软件开发的行业标准。这是一种软件架构，为开发和集成车辆电子控制单元（ECU）中的软件组件提供了一个标准化平台。这使来自不同制造商的不同 ECU 够无缝地通信和协同工作。

- [🔗 AUTOSAR Standards](https://www.autosar.org/standards)
- [🎞️ AUTOSAR Basics | AUTOSAR Tutorial | Architecture | Automotive](https://www.youtube.com/watch?v=7b5BY1IAfwY)
- [🎞️ Introduction to AUTOSAR](https://www.youtube.com/watch?v=NfZI8wvgZPo)
- [🎞️ Udemy - Autosar Architecture (Learn from Scratch with Demo)](https://www.udemy.com/course/autosar-architecture/)

## 历史

起初，这只是我的个人阅读清单，但随着清单逐渐变得越来越大，我想为什么不与他人分享呢？于是我对当前嵌入式工程职位的招聘信息进行了研究，选择了最常见的技能并将它们包含在一个路线图中。为了使路线图更全面，我还添加了一些基本技能，最终构成了你现在看到的内容。

创建这个路线图的想法来自 [vazeri / Embedded-Engineering-RoadMap-2018](https://github.com/vazeri/Embedded-Engineering-RoadMap-2018)，它设计得很好但有一些缺陷且多年未更新。我借鉴了这个想法，改变了路线图的结构并尝试改进它。初始成果可以在 [m3y54m / Embedded-Engineering-Roadmap-Archived](https://github.com/m3y54m/Embedded-Engineering-Roadmap-Archived) 访问，该项目现已存档。早期版本的路线图是使用 [Balsamiq Wireframes](https://balsamiq.com) 创建的，这种工具不适合此类图表。因此，我决定改用 Microsoft Visio 并重新绘制了整个图表。

## 版权

本作品采用 [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) 进行许可，这意味着你可以在以下条款下分享或改编本作品：

署名 — 你必须给出适当的署名，提供许可协议链接，并说明是否对作品进行了修改。你可以以合理的方式进行，但不可暗示许可人认可你或你的使用。

相同方式共享 — 如果你再混合、转换或基于本作品进行创作，必须在相同的许可协议下分发你的贡献作品。

## 致谢

特别感谢 Twitter 上伊朗嵌入式工程师社区的朋友们和 [r/embedded](https://www.reddit.com/r/embedded) 子版块的成员们，他们的建议帮助改进了这个路线图。

## 贡献

如果你认为这个路线图可以以任何方式改进，或者你知道一些可以添加的良好学习资源，请提出问题或请求合并（pull request）。我将频繁维护和更新此仓库。

源文件是使用 Microsoft Visio 以 `.vsdx` 格式创建的，并包含在此仓库中以供你贡献。如果你没有 Microsoft Visio 或你想使用免费软件，你可以使用 draw.io ，它能够导入和导出 `.vsdx` 文件。
