---
title: "[译] 嵌入式工程学习路线图"
date: 2024-09-08T22:02:50+08:00
draft: false
tags: ["translation", "embedded", "roadmap", "learning"]
categories: ["notes"]
authors:
- "leehyon"
---

✨ 本文档是一份面向嵌入式工程师的学习路线图，由 [Meysam Parvizi](https://github.com/m3y54m) 编写，系统整理了从入门到进阶的学习方向及优质资源。

> Original: https://github.com/m3y54m/Embedded-Engineering-Roadmap

---

本路线图旨在帮助有志于从事**嵌入式工程师/开发人员**职业的初学者，同时也帮助当前从业者拓展技能。

嵌入式工程需要对硬件功能有扎实的理解，以及软件开发 和编程技能。如果您真的想从事这个职业，您必须具有高度的动力和热情。正如那句名言所说："硬件是很难的！"但不要惊慌，要对您在这个激动人心的旅程中可能遇到的挑战保持耐心。通过投入足够的时间和精力进行实践和项目开发，您很快就会发现自己成为一名真正的嵌入式工程师！😀

## ❓ 什么是嵌入式系统？

▶️ [ISO/IEC/IEEE 24765 标准：](https://www.iso.org/obp/ui/en/#iso:std:iso-iec-ieee:24765:ed-2:v1:en)

> **计算机系统**是更大系统的一部分，并**执行该系统的某些要求**。例如，用于飞机或快速交通系统的计算机系统。
>
> 嵌入式系统的硬件和软件通常是为**特定功能**而**最小化**和**优化**的。嵌入式系统至少包括一个微控制器、微处理器或数字信号处理器。嵌入式系统设计用于**优化可靠性、成本、尺寸和功耗**，以满足应用需求。

▶️ ["Making Embedded Systems" 书籍：](https://www.oreilly.com/library/view/making-embedded-systems/9781449308889/)

> 嵌入式系统是一种**专门为其应用而构建的计算机化系统**。

▶️ ["Computer Organization and Embedded Systems" 书籍：](https://a.co/d/2lt4Svf)

> 使用**计算机控制**来实现**特定目的**的**物理系统**，而不是用于通用计算，这种系统称为嵌入式系统。

▶️ [Analog Devices 词汇表：](https://www.analog.com/en/design-center/glossary/embedded-system.html)

> 嵌入式系统是一种**计算机**（通常是微控制器或微处理器）作为系统**组成部分**而包含在内的系统。
>
> 通常，计算机对用户**相对不可见**，没有明显的应用程序、文件或操作系统。具有不可见嵌入式系统的产品示例包括运行微波炉的控制器或现代汽车的发动机控制系统。

▶️ [嵌入式系统词汇表：](https://barrgroup.com/embedded-systems/glossary-e)

> **计算机硬件和软件**以及可能**附加的机械或其他部件**的组合，设计用于执行**专用功能**。
>
> 在某些情况下，嵌入式系统是更大系统或产品的一部分，例如汽车中的防抱死制动系统。

## 🗺️ 路线图

![嵌入式系统工程路线图](https://github.com/m3y54m/Embedded-Engineering-Roadmap/releases/latest/download/Embedded-Engineering-Roadmap.png)

嵌入式系统工程路线图分为三个基础领域：**软件**、**硬件** 和 **软技能**。

虽然在嵌入式系统中硬件和软件的交叉很普遍，但具体的职位名称往往强调其中一个方面。例如，"嵌入式软件工程师/开发人员"、"固件工程师/开发人员"和"嵌入式 Linux 工程师/开发人员"等角色主要专注于软件开发。相反，"嵌入式硬件工程师"和"硬件设计工程师"等职位主要处理硬件设计和电子。此外，还有"嵌入式系统工程师"这样的角色，需要对硬件和软件都有全面的理解。

重要的是要注意，嵌入式行业中的每个公司对给定职位可能有独特的要求。因此，根据您的职业志向调整您的重点至关重要。如果您寻求嵌入式软件职位，请优先考虑路线图中列出的软件相关技能。相反，如果您对嵌入式硬件工作感兴趣，请专注于硬件技能，并在电子学习上投入更多时间。

本路线图为典型的"嵌入式系统工程师"角色提供了全面的指导。通过深入了解软件和硬件方面，您可以培养在这动态领域发展所需的必要技能。但是，如果您对软件或硬件有明确的偏好，您可以相应地调整学习路径。

🔗 有关此路线图背后历史的更多信息，请阅读这篇文章：[嵌入式系统路线图：弥合差距](https://interrupt.memfault.com/blog/embedded-systems-roadmap-bridging-the-gap)

<!-- markdownlint-disable MD028 -->

> [!NOTE]
> **请记住，个人软件和硬件技能的重要性可能因公司要求和职位角色的具体要求而异。**

> [!TIP]
> 为了区分学习资源的类型及其内容质量，在每个项目前使用了特定符号。
>
> **资源类型：**
>
> - 📘 ：书籍
> - 🎞️ ：视频
> - 📝 ：撰写内容、文章和博客文章
> - 🔗 ：不属于上述类别的其他链接
>
> **内容质量符号：**
>
> - 👶 ：易于理解和适合初学者的资源。如果您对某个主题没有先验知识，请参考这些资源。
> - 💎 ：众所周知的参考资料，具有真正无价的综合内容。如果您想加深对某个主题的理解，请参考这些资源。

<!-- markdownlint-enable MD028 -->

> [!IMPORTANT]
> **本仓库不隶属于任何内容创建者、出版商或组织，也不以任何方式获得其财务支持。我们不认可或推荐任何特定的付费资源。免费和付费资源都已包含在内，以提供一系列选项，让您选择最适合您需求和偏好的内容。**

## 😕 不知道从哪里开始！

如果您被路线图中大量的主题感到不知所措，您并不孤单。在深入之前，让我们通过一些简单的入门项目来轻松入门。学习嵌入式系统工程需要时间和精力。如果您没有立即理解某些内容，请不要气馁。不断练习，您最终会达到目标。

### ⚒️ 项目

从事实践项目是学习最有效的方法。而不是仅仅依赖书籍或文章的理论知识。开展项目可以获得实践学习经验。即使是一个看似简单的项目，也有可能教给您比漫无目的阅读数小时更多的东西。当您在真实项目的理解问题上遇到困难时，您可以参考书籍、文章和课程。

不要试图立即构建一个复杂的项目。从小型、易管理的项目开始，让您熟悉这个领域。

- [🔗 Random Nerd Tutorials | 学习 ESP32、ESP8266、Arduino 和 Raspberry Pi](https://randomnerdtutorials.com/)
- [🔗 Last Minute Engineers](https://lastminuteengineers.com/)
- [🔗 51 个 STM32 项目和教程，适合初学者及进阶者 - Hackster.io](https://www.hackster.io/stm32/projects)
- [🔗 STM32 (STM32F103C8) 项目和教程](https://circuitdigest.com/stm32-projects-and-tutorials)
- [🔗 ElectronicWings 项目](https://www.electronicwings.com/projects)
- [🔗 STM32 固件 - Phil's Lab (YouTube 播放列表)](https://youtube.com/playlist?list=PLXSyc11qLa1a4Tqbz228dPZfMrs-KRpzA)
- [🔗 基于 Raspberry Pi 的嵌入式项目 ideas](https://www.rs-online.com/designspark/raspberry-pi-based-embedded-project-ideas)
- [🔗 ARM 嵌入式 Linux | 项目](https://www.emertxe.com/embedded-systems/embedded-linux-on-arm/elarm-projects/)
- [🔗 嵌入式系统项目系列 - Artful Bytes (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLS_iNJJVTtiRV0DZRDcTHnvAuDrKGPN40)
- [🔗 ESP32 ESP-IDF 教程和 IoT 协议](https://esp32tutorials.com/)
- [🔗 flip-card](https://github.com/Nicholas-L-Johnson/flip-card)

### 🔎 搜索和提问！

使用搜索引擎找到您问题的答案。

- [🔗 Google](https://www.google.com)
- [🔗 Bing](https://www.bing.com/)
- [🔗 DuckDuckGo](https://duckduckgo.com/)

如果您使用搜索引擎找不到您要查找的内容，AI 聊天机器人也可以提供帮助。请注意，AI 在某些情况下可能会提供错误的答案。最好使用更可靠的参考资料来确认任何答案。

- [🔗 DuckDuckGo AI Chat](https://duckduckgo.com/?q=DuckDuckGo&ia=chat)
- [🔗 Microsoft Copilot](https://copilot.microsoft.com)
- [🔗 Google Gemini](https://gemini.google.com)
- [🔗 ChatGPT](https://chat.openai.com)
- [🔗 Claude AI](https://claude.ai/chats)
- [🔗 Poe - 快速、有帮助的 AI 聊天](https://poe.com)

如果您对仅依赖 AI 建议有顾虑，您也可以向真人提问：

- [🔗 电气工程 Stack Exchange](https://electronics.stackexchange.com/)
- [🔗 Reddit · r/embedded](https://www.reddit.com/r/embedded/)

### ✳️ 职业发展

作为嵌入式系统工程师，及时了解行业趋势、最佳实践和新技术以推进您的职业发展至关重要。以下是一些帮助您实现职业目标的资源：

- [🔗 EmbeddedJobs](https://embedded.jobs/jobs) - 专注于嵌入式系统就业市场的招聘板。

### 🎥 课程和 YouTube 内容

您可能听说过 YouTube 是一所大学。确实如此 - YouTube 上有大量关于嵌入式系统的宝贵免费内容。您还可以通过 Coursera 和 EdX 找到一些优秀的免费课程。此外，Udemy 提供一些高质量的付费课程选项。

- [🎞️ DigiKey (YouTube 频道)](https://www.youtube.com/@digikey)
- [🎞️ Coursera - 嵌入式系统软件和开发环境简介](https://www.coursera.org/learn/introduction-embedded-systems)
- [🎞️ Coursera - 嵌入式软件和硬件架构](https://www.coursera.org/learn/embedded-software-hardware)
- [🎞️ Fastbit Embedded Brain Academy](https://fastbitlab.com/)
- [🎞️ 现代嵌入式系统编程课程 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM)
- [🎞️ element14 presents (YouTube 频道)](https://www.youtube.com/@element14presents)
- [🎞️ Ben Eater (YouTube 频道)](https://www.youtube.com/@BenEater)
- [🎞️ Phil's Lab (YouTube 频道)](https://www.youtube.com/@PhilsLab)
- [🎞️ 嵌入式系统 - Jacob Sorber (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL9IEJIKnBJjEcPAz6fss-Hx0TLytCOMVC)
- [🎞️ edX - 嵌入式系统 - 影响世界：微控制器输入/输出](https://learning.edx.org/course/course-v1:UTAustinX+UT.6.10x+3T2022/home)
- [🎞️ edX - 嵌入式系统 - 影响世界：多线程接口](https://www.edx.org/learn/computer-programming/the-university-of-texas-at-austin-embedded-systems-shape-the-world-multi-threaded-in)
- [🎞️ Low Byte Productions](https://www.youtube.com/@lowbyteproductions)

### 🕹️ Arduino

如果您没有任何嵌入式系统编程背景，Arduino 板和库是您开始和学习基础知识的最佳选择。请记住，大多数 Arduino 库是为学习目的而开发的，未针对行业使用进行优化。

此外，[Arduino Core](https://github.com/arduino/ArduinoCore-API) 处理了大部分低级硬件相关操作，作为嵌入式工程师，您应该能够自己处理这些操作，或者至少对其有清晰的了解。如果您想成为专业的嵌入式开发人员，您应该能够有效地使用微控制器供应商提供和批准的行业标准 API 和 SDK，例如用于 ARM Cortex-M 微控制器的 CMSIS、用于 STM32 的 STM32Cube、用于 Espressif 微控制器的 ESP-IDF 等。

- [🔗 Arduino 入门指南](https://docs.arduino.cc/learn/starting-guide/getting-started-arduino)
- [🔗 ArduinoMap（开源 Arduino 课程）](https://arduinomap.me/)
- [🎞️ 全新 Arduino R4 WiFi 零基础教程 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLGs0VKk2DiYyn0wN335MXpbi3PRJTMmex)
- [🎞️ 新 Arduino 教程 (YouTube 播放列表)](https://youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP)
- [🎞️ Arduino 用于商业产品？](https://www.youtube.com/watch?v=c5LzsqeSCAc)
- [🎞️ Arduino 项目到产品 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEBQazB0HUyQd6Fsf5NQ75M9llbi1_j_8)

### 👨‍🏫 教育网站

- [🔗 DeepBlueMbedded](https://deepbluembedded.com/)
- [🔗 Digital Electronics Deeds](https://www.digitalelectronicsdeeds.com/index.html)
- [🔗💎 Interrupt 博客 by Memfault](https://interrupt.memfault.com/blog/)
- [🔗💎 EmbeddedRelated.com](https://www.embeddedrelated.com/)
- [🔗 ElectronicWings - 硬件开发者社区](https://www.electronicwings.com/)
- [🔗 EduTecnica（意大利语）](https://www.edutecnica.it/)
- [🔗 Microchip University](https://mu.microchip.com/)
- [🔗 Nordic Developer Academy](https://academy.nordicsemi.com/)
- [🔗 Electronics Tutorials](https://www.electronics-tutorials.ws)
- [🔗 SparkFun Learn: 在 SparkFun Electronics 学习](https://learn.sparkfun.com/)
- [🔗 Adafruit Learning System](https://learn.adafruit.com/)
- [🔗 STM32 World](https://stm32world.com)
- [🔗 ControllersTech](https://controllerstech.com/)
- [🔗 嵌入式系统新闻 - CNX Software](https://www.cnx-software.com/)
- [🔗 新闻 - PioLabs](https://piolabs.com/)

### 🗺️ 其他有用的路线图

- [🔗 Embedded Artistry 初学者路线图](https://embeddedartistry.com/beginners/)
- [🔗 嵌入式系统技能树](https://github.com/sjpiper145/MakerSkillTree/tree/main/Embedded%20Systems%20Skill%20Tree)
- [🔗 PCB 设计技能树](https://github.com/sjpiper145/MakerSkillTree/tree/main/PCB%20Design%20Skill%20Tree)
- [🔗 FPGA / ASIC 工程路线图](https://github.com/m3y54m/FPGA-ASIC-Roadmap)

### 🛠️ IDE

- [🔗 Keil MDK & µVision](https://www.keil.com/)
- [🔗 IAR Embedded Workbench](https://www.iar.com)
- [🔗 STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html)
- [🔗 Microchip Studio for AVR® and SAM Devices](https://www.microchip.com/en-us/tools-resources/develop/microchip-studio)
- [🔗 MPLAB® X IDE](https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide)
- [🔗 MCUXpresso IDE](https://www.nxp.com/design/software/development-software/mcuxpresso-software-and-tools-/mcuxpresso-integrated-development-environment-ide:MCUXpresso-IDE)

### 👨‍💻 VS Code 扩展

- [🔗 Cortex-Debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug)
- [🔗 STM32 VS Code Extension](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension)
- [🔗 Espressif IDF](https://marketplace.visualstudio.com/items?itemName=espressif.esp-idf-extension)
- [🔗 MCUXpresso for VS Code](https://marketplace.visualstudio.com/items?itemName=NXPSemiconductors.mcuxpresso)

### 🐜 PlatformIO

[PlatformIO](https://platformio.org/) 是一个跨平台、跨架构、多框架的专业工具，面向嵌入式系统工程师和为嵌入式产品编写应用程序的软件开发人员。

PlatformIO 在工业和大型项目中尚未被广泛采用，然而，对于从事小型项目的个人来说，它是一个极好的选择。因为它大大减少了对安装框架和设置构建及调试工具的需求，让您能够专注于编程。

## 📚 学习资源

> [!WARNING]
> 您不需要阅读这里的所有书籍、文章或观看所有视频。如果您尝试这样做，最终会感到疲惫和失望。您无法在合理的时间内学习完这里提供的所有内容，因为这可能需要数年时间。重要的是学习足够的知识以对所需主题至少有一个基本的了解。当然，您投入学习和做项目的时间越多，您的知识和专业知识就会越深厚。
>
> 这里提到的一些资源只会用作参考资料。仅在需要时参考它们。
> 

### ✳️ 软技能

与其他职业一样，嵌入式工程师需要软技能，这些技能不能仅通过阅读或观看视频获得。这些技能通过互动和处理各种工作障碍来培养。提高软技能不是一种一刀切的方法。它会因个人的特质而异，需要自我意识了解自己的优势和成长领域。提高这些技能需要时间和精力。

- [📝 嵌入式系统软件开发人员的软技能](https://www.embeddedrelated.com/showarticle/1470.php)
- [📝 每个嵌入式工程师应具备的 10 项技能](https://medium.com/@lanceharvieruntime/10-skills-every-embedded-engineer-should-have-dcb867095b91)



### ✳️ 电子学

#### 🔵 基础微积分

- [🎞️ Khan Academy - 微积分 1](https://www.khanacademy.org/math/calculus-1)
- [📘👶 微积分傻瓜 - Mark Ryan](https://a.co/d/cyvZqE1)
- [📘💎 Thomas' Calculus](https://a.co/d/gFcCC37)

#### 🔵 电路原理

- [🔗👶 电路课程（All About Circuits）](https://www.allaboutcircuits.com/textbook/)
- [🔗👶💎 电子教程](https://www.electronics-tutorials.ws)
- [📘👶💎 电路基础 - Charles K. Alexander, Matthew Sadiku](https://www.amazon.com/dp/1260226409?ref_=cm_sw_r_cp_ud_dp_Q11YHXNY2BK530RQZC4S)
- [📘👶💎 电路原理：传统电流版 - Thomas L Floyd, David M. Buchla](https://a.co/d/32T2t2X)
- [🎞️💎 基础电路理论 I (By Prof. Razavi) (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL9KyzjPFbwH37w22z-UHVEt37pdJHjZ7x)

#### 🔵 电子学基础

- [🔗👶💎 构建电子电路 - Øyvind Nydal Dahl](https://www.build-electronic-circuits.com/)
- [🎞️👶 电子基础 - GreatScott! (YouTube 播放列表)](https://youtube.com/playlist?list=PLAROrg3NQn7cyu01HpOv5BWo217XWBZu0)
- [📘👶 Make: Electronics: 通过发现学习 - Charles Platt](https://a.co/d/fbRoM1R)
- [📘👶💎 电子设备：传统电流版 - Thomas Floyd, David Buchla, Steven Wetterling](https://a.co/d/1dsS0vx)
- [📘👶💎 电子学基础：电路、设备和应用 - Thomas L Floyd, David M. Buchla, Gary D. Snyder](https://a.co/d/4Ye5m8h)
- [📘👶 发明者实用电子学 - Paul Scherz, Simon Monk](https://a.co/d/1QfSN8j)
- [📘💎 电子学艺术 - Paul Horowitz, Winfield Hill](https://artofelectronics.net/)
- [📝 这是一个快速了解主要电子元件的方法](https://www.elprocus.com/major-electronic-components/)
- [📘 电子元件百科全书 - Charles Platt](https://a.co/d/83cSiU7)

#### 🔵 数字设计

- [🔗👶 Tiny Tapeout > 数字设计指南](https://tinytapeout.com/digital_design/)
- [📘💎 数字设计 - Morris Mano, Michael Ciletti](https://a.co/d/c3tBaoc)
- [📘👶💎 数字设计和计算机架构：ARM 版 - Sarah Harris, David Harris](https://a.co/d/4otoVvI)
- [📘👶💎 数字设计和计算机架构：RISC-V 版 - Sarah Harris, David Harris](https://a.co/d/61l7Jtb)
- [📘👶 数字基础 - Thomas L. Floyd](https://a.co/d/2lgJKNX)

#### 🔵 计算机架构

计算机架构是嵌入式系统的支柱，管理着硬件和软件的交互。嵌入式开发人员需要掌握计算机架构才能有效地设计、开发和调试嵌入式软件。掌握 ARM 和 RISC-V（嵌入式系统中两种流行的指令集架构（ISA））的专业知识对嵌入式开发人员至关重要。ARM 是占主导地位的 ISA，而 RISC-V 的开源性和灵活性正在获得关注。

- [📘👶💎 计算机组成与设计：ARM 版 - David A. Patterson, John L. Hennessy](https://a.co/d/8YPUXG7)
- [📘👶💎 数字设计和计算机架构：ARM 版 - Sarah Harris, David Harris](https://a.co/d/4otoVvI)
- [📘👶💎 数字设计和计算机架构：RISC-V 版 - Sarah Harris, David Harris](https://a.co/d/61l7Jtb)
- [📘👶 计算系统的要素 - Noam Nisan, Shimon Schocken](https://a.co/d/cX6jkLl)
- [📘 计算机组成和嵌入式系统 - Carl Hamacher, Zvonko Vranesic, Safwat Zaky, Naraig Manjikian](https://a.co/d/2lt4Svf)
- [📘 嵌入式系统架构 - Tammy Noergaard](https://www.oreilly.com/library/view/embedded-systems-architecture/9780123821966/)
- [📘 嵌入式系统架构 - Daniele Lacamera](https://www.packtpub.com/product/embedded-systems-architecture-second-edition/9781803239545)
- [📘 ARM® Cortex®-M0 和 Cortex-M0+ 处理器权威指南 - Joseph Yiu](https://www.oreilly.com/library/view/the-definitive-guide/9780128032787/)
- [📘 ARM® Cortex®-M3 和 Cortex®-M4 处理器权威指南 - Joseph Yiu](https://www.oreilly.com/library/view/the-definitive-guide/9780124080829/)
- [🔗 从头开始构建 8 位计算机](https://eater.net/8bit/)



### ✳️ 使用测试设备

嵌入式系统通常需要专用测试设备来验证其功能和性能。这些设备包括万用表、示波器、逻辑分析仪、函数发生器、电源和其他工具，使工程师能够测量信号、注入激励并监控嵌入式系统的行为。

#### 🔵 万用表

- [🎞️👶 学习如何使用万用表！](https://youtu.be/4lAyzRxsbDc)
- [📝👶 如何使用万用表](https://learn.sparkfun.com/tutorials/how-to-use-a-multimeter/all)

#### 🔵 逻辑/协议分析仪

- [🎞️ 仪器基础：逻辑分析仪](https://youtu.be/u1DYs2I-_lU)

#### 🔵 示波器

- [🎞️👶 什么是示波器？](https://youtu.be/DgYGRtkd9Vs)
- [🎞️👶 如何使用示波器](https://youtu.be/u4zyptPLlJI)
- [🎞️👶 如何使用示波器 / 什么是示波器 / 示波器教程](https://youtu.be/CzY2abWCVTY)
- [🎞️ 使用示波器进行 EMI 调试](https://www.youtube.com/watch?v=x1rn5YNLmVw)



### ✳️ 原型制作技能

虽然硬件设计和原型制作主要是电子硬件设计工程师的职责，但嵌入式软件工程师也可以从对这些概念的 基本理解中受益。这些知识在嵌入式系统调试过程中识别和解决硬件相关问题时可以发挥重要作用。通过掌握硬件原理，嵌入式软件工程师可以有效地找出问题的根本原因，从而实现更快、更高效的故障排除。

#### 🔵 面包板

面包板是一种用于原型制作的实践方法，为实验和电路设计提供了多功能平台。嵌入式系统经常使用面包板，因为它们易于使用、灵活且经济高效。通过在面包板上连接元件，嵌入式系统开发人员可以快速测试和完善他们的设计，而无需永久焊接。这允许快速迭代和高效调试，使面包板成为嵌入式系统开发中不可或缺的工具。

- [🎞️👶 关于面包板您需要知道的一切](https://www.youtube.com/watch?v=mE33WpRWrXs)
- [🎞️👶 如何使用面包板](https://youtu.be/6WReFkfrUIk)

#### 🔵 硬件设计基础

- [🎞️👶💎 硬件设计 - Phil's Lab (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLXSyc11qLa1YhVCZ5xWPuPsE5MkgEy5TF)
- [🎞️ 电子电路设计 - IFE - TU Graz (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLLpZ1DoEuR9tbV8r8bMSI94znm6pRB905)
- [🎞️ 使用 Altium Designer 进行基于微控制器的硬件设计 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL3aaAq2OJU5HcbClqrOhqBDozF7HmxV-s)

#### 🔵 PCB 设计 / EMC

- [🎞️💎 Altium Academy YouTube 频道](https://www.youtube.com/@AltiumAcademy)
- [🎞️💎 Robert Feranec YouTube 频道](https://www.youtube.com/@RobertFeranec)
- [🎞️👶 Altium 初学者教程 - Robert Feranec (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLXvLToQzgzdduBaD4horowdWgcG5uGUW4)
- [🎞️👶 为快速原型制作创建 PCB - DigiKey (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEBQazB0HUyRVK1RpHIjyjuTxn5srz6XM)
- [🎞️👶💎 PCB 设计初学者 - Altium Academy (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL3aaAq2OJU5EsYtNwTPHNO3RHNJN34FbO)
- [🎞️ 如何制作 Raspberry Pi Compute Module 4 载板 - DigiKey (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEBQazB0HUyRwjr761b-MLNEu8FA8WKSG)
- [🎞️💎 如何学习 PCB 设计（我的想法、历程和资源）- Phil's Lab #87](https://youtu.be/aODkA2mrimQ)
- [🎞️👶 KiCad 6 STM32 PCB 设计完整教程 - Phil's Lab #65](https://youtu.be/aVUqaB0IMh4)
- [🎞️👶 KiCad 入门 - DigiKey (YouTube 播放列表)](https://www.youtube.com/watch?v=vaCVh2SAZY4&list=PLEBQazB0HUyR24ckSZ5u05TZHV9khgA1O)
- [🎞️💎 PCB 设计的 EMI 和 SI - Phil's Lab #64](https://www.youtube.com/watch?v=VtzPL8wQ8-E)
- [🎞️💎 高级用户的 PCB 设计 (YouTube 播放列表)](https://youtube.com/playlist?list=PL3aaAq2OJU5EWfYT_Z93tc9pBF_Sidba_)
- [🎞️💎 PCB 知识 [PCB 生产技巧 By PCBWay] (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLzxdr3n97eVtHuh7gnDzMubuO836kvfu7)
- [🎞️💎 Udemy – 高速板设计课程系统 On Module -EsteemPCB](https://www.udemy.com/course/highspeed_board_design_course)
- [🎞️💎 Udemy – 高级硬件和 PCB 设计大师班 2022](https://www.udemy.com/course/advanced-hardware-design-course)
- [🎞️💎 9 个简单技巧改善您板子上的 EMC / EMI - 实用示例（与 Min Zhang 合作）](https://www.youtube.com/watch?v=Lf51sx6sC0I)
- [🎞️💎 许多 EMC 技巧帮助您设计更好的 PCB 板（与 Keith Armstrong 合作）](https://www.youtube.com/watch?v=gHF5JyJF-N4)
- [🔗 LearnEMC - EMC 资源](https://learnemc.com/emc-resources)
- [🔗 构建 PCB 的更好方法 - Flux AI](https://www.flux.ai/p/)
- [🔗 Monosketch](https://monosketch.io/)
- [🔗 EasyEDA](https://easyeda.com/it)
- [🔗 Fritzing](https://fritzing.org/)
- [🔗 Cirkit Designer](https://www.cirkitstudio.com/)
- [🔗 withdiode](https://www.withdiode.com/)

#### 🔵 焊接/返修

- [🎞️👶 如何焊接 - 电子产品与 Becky Stern | Digi-Key Electronics](https://www.youtube.com/watch?v=sS4v2hIFp9I)
- [🎞️👶 如何焊接！（初学者指南）](https://www.youtube.com/watch?v=3jAw41LRBxU)
- [🎞️👶 焊接速成课程：基本技术、技巧和建议！](https://www.youtube.com/watch?v=6rmErwU5E-k)
- [🎞️ 如何焊接通孔元件 - 另一个教学时刻 | DigiKey Electronics](https://www.youtube.com/watch?v=DJH7VLGJ4fs)
- [🎞️ 如何手工焊接 QFN MLF 封装（使用热风返修站）| Digi-Key Electronics](https://youtu.be/X3Rc1s6EpSI)
- [🎞️ 从无焊面包板到焊接电路 - 电子产品与 Becky Stern | Digi-Key Electronics](https://www.youtube.com/watch?v=F9Krq7seV1g)



### ✳️ FPGA 开发

FPGA（现场可编程门阵列）是专用集成电路，可配置为执行各种数字逻辑功能。它们广泛用于嵌入式系统中，以实现高性能、灵活性和成本效益。FPGA 设计人员使用硬件描述语言（HDL）创建直接映射到 FPGA 架构的定制电路。由于 FPGA 工程和验证与嵌入式软件开发显著不同，它在嵌入式系统中是一个专业领域。

- [🔗 FPGA / ASIC 工程路线图](https://github.com/m3y54m/FPGA-ASIC-Roadmap)
- [📝 什么是 FPGA？](https://hackaday.io/project/27550-the-hobbyists-guide-to-fpgas/log/68114-what-are-fpgas)
- [📝 FPGA 与微控制器：如何为您的项目选择合适的](https://www.youtube.com/watch?v=jblpHUCPQYs)
- [🎞️👶 FPGA 简介 (YouTube 播放列表)](https://youtube.com/playlist?list=PLEBQazB0HUyT1WmMONxRZn9NmQ_9CIKhb)
- [🔗👶 FPGA 基础 - Nandland](https://nandland.com/fpga-101/)
- [🎞️💎 Coursera – FPGA 设计嵌入式系统专业](https://www.coursera.org/specializations/fpga-design)
- [📘💎 嵌入式系统设计实践指南 - Adam Taylor, Dan Binnun, Saket Srivastava](https://www.amazon.com/Hands-Guide-Designing-Embedded-Systems/dp/1630816833)



### ✳️ 编程基础

掌握编程基础和软件开发原则对于成功的嵌入式设计至关重要。嵌入式系统需要高效代码、优化数据管理、可重用设计模式和有效内存管理，才能在资源受限的环境中有效运行。嵌入式开发人员必须具备这些核心概念的坚实基础，以创建可靠和高性能的嵌入式系统。

#### 🔵 基础离散数学

- [🎞️ Coursera - 计算机科学离散数学入门专业化](https://www.coursera.org/specializations/discrete-mathematics)
- [📘👶 LibreTexts 开放获取离散数学书籍](https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics)
- [📘👶 计算机科学基础离散数学 by Lewis HARRY., Zax R. ACM DL](https://dl.acm.org/doi/book/10.5555/3388468)
- [📘👶 离散数学指南 - Gerard O'Regan, Springer](https://link.springer.com/book/10.1007/978-3-030-81588-2)
- [📘💎 通往抽象数学的桥梁，AMS](https://bookstore.ams.org/view?ProductCode=TEXT/22)

#### 🔵 算法与数据结构

- [📘👶💎 算法图解 - Aditya Y. Bhargava](https://www.manning.com/books/grokking-algorithms)
- [📘💎 算法导论 - Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein](http://mitpress.mit.edu/9780262367509/introduction-to-algorithms/)
- [🔗 数学、机器学习、计算机科学、物理等领域各种算法的集合，用 C 语言实现，用于教育目的](https://github.com/TheAlgorithms/C)
- [🎞️ Udemy – 嵌入式系统状态机与数据结构](https://www.udemy.com/course/embedded-systems-state-machines-data-structures-like-a-pro/)
- [🔗 C 中的数据结构](https://www.sanfoundry.com/c-programming-examples-data-structures/)
- [🎞️ 数据结构 - 使用 C 和 C++ 的完整课程](https://www.youtube.com/watch?v=B31LgI4Y4DQ)
- [🔗 Hello Algo](https://www.hello-algo.com/en/)

#### 🔵 设计模式

- [📝 实用设计模式：C 中的不透明指针和对象](https://interrupt.memfault.com/blog/opaque-pointers)
- [📘💎 C 嵌入式系统设计模式 - Bruce Powel Douglass](https://www.oreilly.com/library/view/design-patterns-for/9781856177078/)
- [📘💎 制作嵌入式系统：伟大软件的设计模式 - Elecia White](https://www.oreilly.com/library/view/making-embedded-systems/9781449308889/)
- [🎧💎 制作嵌入式系统：伟大软件的设计模式 - Elecia White（有声书）](https://www.audiobooks.com/audiobook/making-embedded-systems-design-patterns-for-great-software/814297)
- [🔗 设计模式 - Refactoring Guru](https://refactoring.guru/design-patterns)

#### 🔵 状态机

- [📝 使用状态机轻松编程嵌入式系统](https://www.embedded.com/programming-embedded-systems-the-easy-way-with-state-machines/)
- [🎞️💎 状态机 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLPW8O6W-1chxym7TgIPV9k5E8YJtSBToI)
- [🎞️💎 事件驱动编程 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLPW8O6W-1chx8Y7Oq2gOE0NUPXmQxu2Wr)
- [🎞️💎 Udemy - 使用 UML 状态机的嵌入式系统设计](https://www.udemy.com/course/embedded-system-design-using-uml-state-machines/)
- [📝 "输入驱动"与事件驱动状态机](https://www.state-machine.com/input-driven-vs-event-driven-state-machines)
- [📝 事件驱动系统的状态机](https://barrgroup.com/embedded-systems/how-to/state-machines-event-driven-systems)
- [📘 C/C++ 实用 UML 状态图 by Miro Samek](https://www.amazon.sg/Practical-UML-Statecharts-Event-Driven-Programming/dp/0750687061)

#### 🔵 内存管理

- [🎞️ 理解 C 运行时内存模型](https://www.youtube.com/watch?v=3F3lp_F2YpQ)
- [🎞️ 指针和动态内存 - 栈 vs 堆](https://www.youtube.com/watch?v=_8-ht2AKyH4)
- [🎞️ 动态内存分配 | C 编程教程](https://www.youtube.com/watch?v=R0qIYWo8igs)
- [🎞️ C 中的动态内存分配 - malloc calloc realloc free](https://www.youtube.com/watch?v=xDVC3wKjS64&t=140s)
- [📝 什么是 C/C++ 中的内存泄漏？我们如何避免？](https://aticleworld.com/what-is-memory-leak-in-c-c-how-can-we-avoid/)
- [📝 理解 Rust 中的内存管理](https://medium.com/geekculture/understanding-memory-management-in-rust-a341cfce9807)
- [📝 Python 中的内存管理](https://realpython.com/python-memory-management/)



### ✳️ 编程语言

C 和汇编等低级语言提供直接硬件访问，能够为资源受限的嵌入式系统实现高效代码优化。C++ 和 Rust 等系统级语言为复杂嵌入式应用提供了更高级别的抽象，而 Python 由于其简单性常用于测试嵌入式系统。

#### 🔵 C

- [🎞️👶 Microchip University - C 的语法和结构 - Simply C](https://mu.microchip.com/syntax-and-structure-of-c)
- [🎞️💎 Microchip University - 高级 C 编程](https://mu.microchip.com/advanced-c-programming)
- [🎞️💎 Microchip University - 嵌入式 C 技巧、诀窍和注意事项](https://mu.microchip.com/advanced-embedded-c-tips-tricks-and-cautions)
- [🎞️💎 Microchip University - C 编程：链表数据结构](https://mu.microchip.com/c-programming-linked-list-data-structures)
- [🎞️💎 Microchip University - C 编程回调函数](https://mu.microchip.com/c-programming-callbacks)
- [🎞️👶 C 编程初学者完整课程](https://www.youtube.com/watch?v=ssJY5MDLjlo)
- [🎞️ C 编程教程 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLA1FTfKBAEX4hblYoH6mnq0zsie2w6Wif)
- [📘💎 C 编程语言 - Brian W. Kernighan, Dennis M. Ritchie](https://www.amazon.com/dp/0131103628?ref_=cm_sw_r_cp_ud_dp_KRZ8M1WTXWVG0HMSRBXA)
- [🔗👶 C 示例](https://www.cbyexample.com/)
- [📘👶 C 小书本](https://little-book-of.github.io/c/books/en-US/book.html)
- [📘 C 如何编程 - Paul Deitel, Harvey Deitel](https://deitel.com/c-how-to-program-9-e/)
- [📘 有效 C - 专业 C 编程简介 - Robert C. Seacord](https://nostarch.com/Effective_C)
- [📘 现代 C - Jens Gustedt](https://gustedt.gitlabpages.inria.fr/modern-c/)
- [🔗 嵌入式 C 编码标准](https://barrgroup.com/embedded-systems/books/embedded-c-coding-standard)
- [🔗 newlib C 库文档](https://sourceware.org/newlib/docs.html)
- [🔗 GNU C 库 (glibc)](https://www.gnu.org/software/libc/documentation.html)
- [📝 从零到 main()：裸机 C](https://interrupt.memfault.com/blog/zero-to-main-1)
- [📝 从零到 main()：使用 Newlib 引导 libc](https://interrupt.memfault.com/blog/boostrapping-libc-with-newlib)
- [📝 Nintendo DS 编程简介](https://www.patater.com/files/projects/manual/manual.html)
- [🎞️👶 学习 C 编程和面向对象与 Dr. Chuck](https://www.youtube.com/watch?v=PaPN51Mm5qQ)
- [📘 极限 C - Kamran Amini](https://www.packtpub.com/free-ebook/extreme-c/9781789343625)
- [🎞️👶 Coursera - C 编程与 Linux 专业](https://www.coursera.org/specializations/c-programming-linux)

#### 🔵 C++

- [📝 现代 C++ 在嵌入式开发中的应用：（不要害怕）++](https://www.embeddedrelated.com/showarticle/1532.php)
- [📝 嵌入式系统上的 C++](https://blog.mbedded.ninja/programming/languages/c-plus-plus/cpp-on-embedded-systems/)
- [📝💎 裸机 C++ - Alexey Rybachuk](https://arobenko.github.io/bare_metal_cpp/)
- [🎞️💎 在受限环境中的 C++ - Bjarne Stroustrup - CppCon 2022](https://www.youtube.com/watch?v=2BuJjaGuInI)
- [🎞️👶 C++ 初学者教程完整课程](https://www.youtube.com/watch?v=vLnPwxZdW4Y)
- [🎞️ C++ by The Cherno (YouTube 播放列表)](https://youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb)
- [🎞️👶💎 Udemy - C++ 编程从入门到进阶](https://www.udemy.com/course/beginning-c-plus-plus-programming/)
- [🎞️💎 CppCon 会议 - YouTube](https://www.youtube.com/@CppCon/playlists)
- [📘💎 C++ tour (第三版) - Bjarne Stroustrup](https://www.stroustrup.com/tour3.html)
- [📘💎 C++ 编程语言 (C++11) - Bjarne Stroustrup](https://www.stroustrup.com/4th.html)
- [📘💎 编程——使用 C++ 的原理和实践（第三版） - Bjarne Stroustrup](https://www.stroustrup.com/programming.html)
- [📘💎 实时 C++：高效面向对象和模板微控制器编程 - Christopher Kormanyos](https://link.springer.com/book/10.1007/978-3-662-62996-3)
- [📘 有效现代 C++ - Scott Meyers](https://www.oreilly.com/library/view/effective-modern-c/9781491908419/)

##### 来自 Bjarne Stroustrup（C++ 创建者）的额外资源

- [🎞️👶 C++ 的本质 by Bjarne Stroustrup - YouTube](https://www.youtube.com/watch?v=86xWVb4XIyE)
- [🎞️👶💎 提供安全的 C++ by Bjarne Stroustrup - CppCon 2023](https://www.youtube.com/watch?v=I8UvQKvOSSw)
- [🎞️👶💎 Bjarne Stroustrup 计算机历史 C++ 的设计 - YouTube](https://www.youtube.com/watch?v=69edOm889V4)
- [📘 C++ 的设计和演变 - Bjarne Stroustrup](https://www.stroustrup.com/dne.html)
- [📘💎 Bjarne Stroustrup 关于 C++ 的论文 - Stroustrup 网站](https://www.stroustrup.com/papers.html)
- [🔗 Bjarne Stroustrup 关于 C++ 的论文 - ACM DL](https://dl.acm.org/keyword/C%2B%2B?expand=all&ContribRoleAndId=author%3A10.1145%2Fcontrib-81100106139)

#### 🔵 汇编

- [📝👶 ARM 汇编基础简介](https://azeria-labs.com/writing-arm-assembly-part-1/)
- [🎞️ Udemy – ARM GNU 汇编从零编程](https://www.udemy.com/course/arm-gnu-assembly-programming-from-ground-uptm/)
- [🎞️ ARM 汇编语言编程完整初学者教程](https://www.youtube.com/watch?v=gfmRrPjnEw4)
- [📝 如何在 C 代码中使用内联汇编语言](https://gcc.gnu.org/onlinedocs/gcc/Using-Assembly-Language-with-C.html)
- [📘 Raspberry Pi 汇编语言编程：ARM 处理器编码](https://www.amazon.com/Raspberry-Assembly-Language-Programming-Processor/dp/1484252861)
- [🔗 x86-64 Linux 笔记本电脑电池信息程序，仅用 298 字节机器码](https://github.com/meribold/btry)

#### 🔵 Python

- [📝 嵌入式系统测试的 Python](https://www.elsys-design.com/en/python-embedded-systems-testing/)
- [📝👶 Python 手册 – 为初学者学习 Python](https://www.freecodecamp.org/news/the-python-handbook/)
- [🔗💎 Real Python: Python 教程](https://realpython.com/)
- [📘👶💎 Python 速成课程 - Eric Matthes](https://a.co/d/hSMTJwE)

##### 🔶 Python 用于微控制器

- [🔗 MicroPython - 用于微控制器的 Python](https://micropython.org/)
- [🔗 MicroPython 101 | Arduino 文档](https://docs.arduino.cc/micropython-course/)
- [🔗 CircuitPython](https://circuitpython.org/)
- [📝 使用 MicroPython 设计嵌入式系统的优缺点](https://www.designnews.com/electronics-test/pros-and-cons-designing-embedded-systems-micropython)
- [📝 使用 MicroPython 编程 ESP32](https://wolles-elektronikkiste.de/en/programming-the-esp32-with-micropython)

#### 🔵 Rust

- [📝 Rust 在嵌入式系统中采用的 5 个障碍](https://www.embedded.com/5-roadblocks-to-rust-adoption-in-embedded-systems/)
- [🔗 嵌入式 Rust 书籍](https://docs.rust-embedded.org/book/)
- [🎞️ 编程的未来：Rust (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLc7W4b0WHTAUAEAguiqpNa5H0QqXJIJI6)
- [🔗 STM32 微控制器社区 Rust 支持项目](https://github.com/stm32-rs)
- [🔗 ESP 社区 Rust](https://github.com/esp-rs)
- [🎞️ ESP32 上的嵌入式 Rust（意大利语）- YouTube 播放列表](https://www.youtube.com/playlist?list=PLT--ndZEB54ek5_Zv6x6WCioh5m35zh5i)
- [📝 Rust on STM32: 入门](https://jonathanklimt.de/electronics/programming/embedded-rust/rust-on-stm32-2/)
- [📝 从零到 main()：裸机 Rust](https://interrupt.memfault.com/blog/zero-to-main-rust-1)
- [📝 用 Rust 编写操作系统 - Philipp Oppermann 的博客](https://os.phil-opp.com/)
- [📝 2022 年用 Rust 编写内核驱动程序](https://not-matthias.github.io/posts/kernel-driver-with-rust/)
- [🔗 Rustlings - 小型练习让您习惯阅读和编写 Rust 代码！](https://rustlings.cool/)
- [🔗 有效学习 Rust](https://www.rustfinity.com/)

#### 🔵 Zig

- [📝 测试 Zig 用于嵌入式开发](https://www.kuon.ch/post/2022-06-22-zig-embed/)
- [🔗 Zig 嵌入式组](https://github.com/ZigEmbeddedGroup)
- [🔗 MicroZic - 多种微控制器的统一抽象层和 HAL](https://github.com/ZigEmbeddedGroup/microzig)
- [📝 Zig STM32F103 裸机编程 — 启动](https://maldus512.medium.com/zig-bare-metal-programming-on-stm32f103-booting-up-b0ecdcf0de35)



### ✳️ 微控制器

微控制器是集成电路（IC），将微处理器、存储器和输入/输出（I/O）外设集成在单个芯片上。它们专为嵌入式应用而设计，用于控制各种行业的设备，包括汽车、工业、消费电子和医疗保健。

一些流行的微控制器系列包括 AVR、PIC、STM32、MSP430、nRF 和 ESP32。选择合适的微控制器需要评估应用需求、处理能力、内存需求和输入/输出能力。考虑易用性、成本、可靠性、可用性和未来扩展性。

- [📝 什么是微控制器？常见组件的定义特征和架构](https://www.allaboutcircuits.com/technical-articles/what-is-a-microcontroller-introduction-component-characteristics-component/)
- [📝 如何为您的应用选择合适的微控制器](https://www.allaboutcircuits.com/technical-articles/how-to-choose-the-right-microcontroller-for-your-application/)
- [📝 如何阅读微控制器数据手册：简介和第一步](https://www.allaboutcircuits.com/technical-articles/how-to-read-a-microcontroller-datasheet-introduction-and-first-steps2/)
- [📘👶 Make: AVR 编程 - Elliot Williams](https://www.oreilly.com/library/view/make-avr-programming/9781449356484/)
- [🎞️👶💎 NewbieHack - 微控制器教程 - 初学者指南（AVR）](https://www.youtube.com/playlist?list=PLE72E4CFE73BD1DE1)
- [🎞️👶 STM32 和 Nucleo 入门 (YouTube 播放列表)](https://youtube.com/playlist?list=PLEBQazB0HUyRYuzfi4clXsKUSgorErmBv)
- [📘💎 精通 STM32 - Carmine Noviello](https://leanpub.com/mastering-stm32-2nd)
- [📘💎 使用 ESP32 开发 IoT 项目 - Vedat Ozan Oner](https://www.packtpub.com/product/developing-iot-projects-with-esp32-second-edition/9781803237688)
- [🎞️👶 Raspberry Pi Pico 和 RP2040 入门 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEBQazB0HUyQO6rJxKr2umPCgmfAU-cqR)
- [🔗 STM32 入门：STM32 循序渐进](https://wiki.st.com/stm32mcu/wiki/Category:Getting_started_with_STM32_:_STM32_step_by_step)
- [🎞️ AVR 入门 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLtQdQmNK_0DRhBWYZ32BEILOykXLpJ8tP)
- [🎞️ 微控制器基础 - Arduino 裸机分解 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLNyfXcjhOAwOF-7S-ZoW2wuQ6Y-4hfjMR)
- [🎞️ 裸机嵌入式编程：理论和使用 STM32 的实践 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL4cGeWgaBTe155QQSQ72DksLIjBn5Jn2Z)
- [📘 STM32 入门：使用 FreeRTOS、libopencm3 和 GCC 开发 - Warren Gay](https://link.springer.com/book/10.1007/978-1-4842-3624-6)
- [🎞️ Udemy – 微控制器嵌入式 C 编程：绝对初学者](https://www.udemy.com/course/microcontroller-embedded-c-programming/)
- [🎞️ Udemy – 嵌入式系统 STM32 低层 API(LL) 驱动开发](https://www.udemy.com/course/embedded-systems-stm32-low-level-ll-driver-development/)
- [🎞️ Udemy – 嵌入式系统 STM32 HAL API 驱动开发](https://www.udemy.com/course/embedded-systems-stm32-hal-apis-driver-development/)
- [📘 使用 ARM Cortex-M 微控制器的嵌入式系统设计：使用 C、C++ 和 MicroPython 的应用 - Cem Ünsalan, Hüseyin Deniz Gürhan, Mehmet Erkin Yücel](https://link.springer.com/book/10.1007/978-3-030-88439-0)
- [📘💎 使用 MSP430FR2355 LaunchPad 进行嵌入式系统设计 - Brock J. LaMeres](https://link.springer.com/book/10.1007/978-3-030-40574-8)
- [📘💎 构建嵌入式系统：可编程硬件 - Changyi Gu](https://link.springer.com/book/10.1007/978-1-4842-1919-5)
- [🔗 Awesome Embedded：精选嵌入式编程资源列表](https://github.com/nhivp/Awesome-Embedded)
- [🔗 Awesome Electronics：精选电子资源列表](https://github.com/kitspace/awesome-electronics)

#### 🔵 GPIO

- [🎞️ 教程 5：外设 1 - STM32 中通用输入输出（GPIO）配置](https://youtu.be/tjDhmavBGf0)

#### 🔵 ADC

- [🎞️ ADC 如何工作？- 学习电路](https://www.youtube.com/watch?v=g4BvbAKNQ90)
- [🎞️ 教程 13：STM32F4 中的 ADC](https://youtu.be/vIlG_i3GqeU)
- [🎞️ 教程 14：轮询方式的 ADC](https://www.youtube.com/watch?v=uUi6JyUuEJA)

#### 🔵 DAC

- [🎞️ DAC 如何工作？- 学习电路](https://www.youtube.com/watch?v=YAxrmoVtEtE)
- [🎞️ STM32 中的 DAC || 正弦波 || HAL || CubeIDE](https://www.youtube.com/watch?v=6Z1L6ox63j0)

#### 🔵 定时器/计数器

- [📝 微控制器定时器简介：周期定时器](https://www.allaboutcircuits.com/technical-articles/introduction-to-microcontroller-timers-periodic-timers/)
- [📝 AVR 定时器编程](https://exploreembedded.com/wiki/AVR_Timer_programming)
- [🎞️ STM32 定时器 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLfIJKC1ud8gjLZBzjE3kKBMDEH_lUc428)

#### 🔵 PWM（脉冲宽度调制）

- [🎞️ 什么是 PWM？](https://www.youtube.com/watch?v=B_Ysdv1xRbA)
- [📝 微控制器中的脉冲宽度调制（PWM）定时器](https://www.allaboutcircuits.com/technical-articles/introduction-to-microcontroller-timers-pwm-timers/)
- [🎞️ STM32 指南 #3：PWM + 定时器](https://www.youtube.com/watch?v=AjN58ceQaF4)

#### 🔵 RTC（实时时钟）

- [📝 微控制器定时器中的实时时钟（RTC）](https://www.allaboutcircuits.com/technical-articles/introduction-to-microcontroller-timers-real-time-clocks/)

#### 🔵 看门狗

- [📝 嵌入式系统看门狗定时器指南](https://interrupt.memfault.com/blog/firmware-watchdog-best-practices)
- [📝 微控制器中的看门狗定时器](https://www.allaboutcircuits.com/technical-articles/watchdog-timers-microcontroller-timers/)
- [🎞️ Arduino 上的看门狗定时器](https://www.youtube.com/watch?v=AzZBgH67mgE)
- [🎞️ STM32 中的看门狗 || IWDG 和 WWDG || CubeIDE](https://www.youtube.com/watch?v=AelNsnpfbcM)

#### 🔵 中断

- [🎞️ 轮询/中断/DMA 差异轻松解释](https://www.youtube.com/watch?v=LNPBr3WvuNg)
- [🎞️ 提升您的 Arduino 代码：外部中断](https://www.youtube.com/watch?v=J61_PKyWjxU)
- [🎞️ 教程 10：外设 2 - STM32 中的嵌套向量中断控制器（NVIC）](https://www.youtube.com/watch?v=qwebM-YaSU4)
- [🎞️ 教程 11：实验 - STM32 中使用 STM32CUBEMX 的外部中断（EXTI）接口](https://www.youtube.com/watch?v=oJc0seuBbzI)
- [🎞️ 教程 12：STM32 中的中断优先级](https://www.youtube.com/watch?v=aXLJD4qJmtk)

#### 🔵 DMA

- [🎞️ 直接内存访问（DMA）简介](https://www.youtube.com/watch?v=M16l_ymlfcs)
- [🎞️ STM32 DMA 第一部分](https://www.youtube.com/watch?v=yvLHtXJ_KSg)
- [🎞️ STM32 DMA 第二部分](https://www.youtube.com/watch?v=Kb8dX18xYuo)
- [🎞️ STM32 和 Nucleo 入门第四部分：使用 ADC 和 DMA 工作 - Maker.io](https://www.youtube.com/watch?v=EsZLgqhqfO0)
- [🎞️ STM32 UART DMA 和空闲线 || 接收未知长度数据](https://www.youtube.com/watch?v=Bo6MC5A8uTE)

#### 🔵 时钟管理

- [📝 STM32 中的时钟配置](https://medium.com/@csrohit/clock-configuration-in-stm32-6a058da220e0)
- [🎞️ STM32：通过寄存器更改时钟速度](https://www.youtube.com/watch?v=W_9jPMgiqaQ)
- [🎞️ #1. STM32F4 基于寄存器的编程入门 || 时钟设置 || LED 闪烁 || 无 HAL](https://www.youtube.com/watch?v=GJ_LFAlOlSk)
- [🎞️ 教程 8：使用 STM32CUBEMX 在 STM32 中配置 MCU 时钟](https://www.youtube.com/watch?v=y8yNsWpQiTM)
- [🎞️ ARM Cortex M4 中的时钟源和 PLL](https://www.youtube.com/watch?v=2ou8FQ_7PdI)

#### 🔵 电源管理

- [🎞️ STM32F103 中的睡眠模式 || CubeIDE || 低功耗模式 || 电流消耗](https://www.youtube.com/watch?v=2rKcsGkCG0s)
- [🎞️ STM32 中的停止模式 || CubeIDE || 低功耗模式](https://www.youtube.com/watch?v=UtQhc4XV8k4)

#### 🔵 引导加载程序 / DFU（设备固件更新）

- [📝 开发 Arduino 引导加载程序基础](https://www.electronicwings.com/arduino/basics-to-developing-bootloader-for-arduino)
- [📝 从零到 main()：如何从头编写引导加载程序](https://interrupt.memfault.com/blog/how-to-write-a-bootloader-from-scratch)
- [🎞️ 如何创建一个超级简单的引导加载程序](https://www.youtube.com/watch?v=OkUQ3iMmiYQ&list=PLnMKNibPkDnEb1sphpdFJ3bR9dNy7S6mO)
- [🎞️ 从闪烁到引导加载程序：裸机编程系列 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLP29wDx6QmW7HaCrRydOnxcy8QmW0SNdQ)
- [📝 简单 AVR 引导加载程序教程](https://www.pocketmagic.net/simple-avr-bootloader-tutorial/)
- [🎞️💎 Udemy – STM32Fx 微控制器自定义引导加载程序开发](https://www.udemy.com/course/stm32f4-arm-cortex-mx-custom-bootloader-development/)
- [📝💎 设备固件更新 Cookbook](https://interrupt.memfault.com/blog/device-firmware-update-cookbook)



### ✳️ 接口、协议与通信技术

嵌入式系统通常通过接口和协议与其他设备或外部系统通信。接口提供物理连接，协议定义数据交换规则。选择取决于应用特定需求，包括带宽、距离、安全性和功耗。

#### 🔵 ‌基本协议

- [🎞️👶 理解串行协议](https://www.youtube.com/watch?v=LEz5UCN3aHA)
- [🎞️👶 串行协议基础](https://www.youtube.com/watch?v=yz7h5xd18OE)
- [📝👶 2024 年理解和选择：I2C、SPI、UART 解释](https://www.parlezvoustech.com/en/comparaison-protocoles-communication-i2c-spi-uart/)
- [📝👶 有线嵌入式协议基础](https://piolabs.com/blog/engineering/wired-embedded-protocols-basics.html)
- [🎞️ 协议：UART - I2C - SPI - 串行通信 #001](https://www.youtube.com/watch?v=IyGwvGzrqp8)

##### 🔶 UART

- [🎞️👶 理解 UART](https://www.youtube.com/watch?v=sTHckUyxwp8)
- [🎞️ UART 是如何工作的？？？（清晰解释）](https://www.youtube.com/watch?v=V6m2skVlsQI)
- [🎞️ UART 通信基础 | UART 帧结构 | RS 232 基础 | 第1部分](https://www.youtube.com/watch?v=JuvWbRhhpdI)
- [🎞️ 理解 UART 通信编程 | UART 外设 | 第2部分](https://www.youtube.com/watch?v=QmjKRwgddxw)
- [🎞️ RS-232 协议](https://www.youtube.com/watch?v=AHYNxpqKqwo)

##### 🔶 I2C

- [🎞️👶 理解 I2C](https://www.youtube.com/watch?v=CAvawEcxoPU)
- [📝 I2C 简明指南](https://interrupt.memfault.com/blog/i2c-in-a-nutshell)
- [🎞️ STM32 I2C 从机 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLfIJKC1ud8gj_P7Qb28aTr0t92uk_vwg0)

##### 🔶 SPI

- [🎞️👶 理解 SPI](https://www.youtube.com/watch?v=0nVNwozXsIc)
- [🎞️ SPI：串行外设接口](https://www.youtube.com/watch?v=MCi7dCBhVpQ)
- [🎞️ STM32 和 Nucleo 入门第五部分：如何使用 SPI | Digi-Key Electronics](https://www.youtube.com/watch?v=eFKeNPJq50g)

##### 🔶 SDIO

- [📝 SDIO 协议](https://prodigytechno.com/sdio-protocol/)
- [📝 在 STM32 中使用 SDIO 接口 SD 卡](https://controllerstech.com/interface-sd-card-with-sdio-in-stm32/)
- [🔗 SDIO 卡从机驱动程序 - ESP32 - 技术文档](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/sdio_slave.html)

##### 🔶 I3C

- [🎞️ 什么是 I3C®？](https://www.youtube.com/watch?v=g3TBNHec5Ec)
- [🔗 MIPI I3C & MIPI I3C Basic](https://www.mipi.org/specifications/i3c-sensor-specification)
- [📝 I3C 协议：理解和调试](https://prodigytechno.com/mipi-i3c-protocol-debug/)
- [🎞️ MIPI I3C Basic - 下一代传感器接口，为低功耗物联网应用赋能](https://www.youtube.com/watch?v=xWKxZp_9RFQ)

##### 🔶 1-Wire

- [🎞️ 1-Wire® 技术概述](https://www.youtube.com/watch?v=CjH-OztKe00)

#### 🔵 数字音频协议

##### 🔶 I2S

- [📝 I2S 接口简介](https://www.allaboutcircuits.com/technical-articles/introduction-to-the-i2s-interface/)
- [🎞️ 使用 I2S 构建数字音乐播放器？！什么是 I2S！EB#45](https://www.youtube.com/watch?v=qNLvoSQCx60)
- [🔗 UM11732 - I2S 总线规范](https://www.nxp.com/docs/en/user-manual/UM11732.pdf)

##### 🔶 PCM

- [🔗 HUAWEI LGA 模块 - PCM 音频设计指南](https://www.paoli.cz/out/media/HUAWEI%20LGA%20Module%20PCM%20Audio%20Design%20Guide-V100R001_04(1).pdf)
- [📝 PCM 术语和概念](https://larsimmisch.github.io/pyalsaaudio/terminology.html)

#### 🔵 显示和摄像头协议

##### 🔶 SCCB

- [🔗 SCCB 规范 (PDF)](https://people.ece.cornell.edu/land/courses/ece4760/FinalProjects/f2021/jfw225_aei23_dsb298/jfw225_aei23_dsb298/SCCBSpec_AN.pdf)
- [📝 OmniVision OV5640 软件应用笔记 (PDF)](https://dlscorp.com/wp-content/uploads/2018/04/OmniVision-OV5640-Software-Application-Notes.pdf)

##### 🔶 MIPI CSI-2

- [🔗 MIPI 摄像头串行接口 2](https://www.mipi.org/specifications/csi-2)
- [🎞️ 教程：MIPI CSI-2](https://www.youtube.com/watch?v=8REu_h7bzHM)
- [🔗 AN13573 - i.MX 8/RT MIPI DSI/CSI-2](https://www.nxp.com/docs/en/application-note/AN13573.pdf)

##### 🔶 MIPI DSI

- [🔗 MIPI 显示串行接口](https://www.mipi.org/specifications/dsi)
- [🔗 AN4860 - STM32 MCU 和 MPU 上的 DSI 主机简介](https://www.st.com/resource/en/application_note/an4860-introduction-to-dsi-host-on-stm32-mcus-and-mpus-stmicroelectronics.pdf)

##### 🔶 HDMI

- [🎞️ TI 精密实验室 - 视频接口：什么是 HDMI 和双模 DisplayPort？](https://www.youtube.com/watch?v=jCO7Up1rzJc)
- [🎞️ HDMI 2.1 和 TMDS 速成课程 - ENMU EET 457 - 演示](https://www.youtube.com/watch?v=5acgSK0kWTE)

#### 🔵 无线协议

##### 🔶 蓝牙 / BLE

- [🎞️👶💎 Microchip University - 蓝牙低功耗（BLE）第一步](https://mu.microchip.com/first-steps-into-bluetooth-low-energy-ble)
- [📝 蓝牙基础](https://learn.sparkfun.com/tutorials/bluetooth-basics/all)
- [📝 蓝牙低功耗：入门读物](https://interrupt.memfault.com/blog/bluetooth-low-energy-a-primer)
- [📝 BLE 吞吐量实用指南](https://interrupt.memfault.com/blog/ble-throughput-primer)
- [🎞️ SparkFun 根据 Pete #49 - 蓝牙如何工作](https://www.youtube.com/watch?v=zJqGLWQGyvk)
- [🔗 蓝牙低功耗基础 - Nordic Semiconductor](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/)
- [🔗 蓝牙概述 - ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/bluetooth.html)

##### 🔶 Wi-Fi

- [🎞️ 802.11 WiFi 如何工作 - 无线网络 | 计算机网络 Ep. 7.3 | Kurose & Ross](https://www.youtube.com/watch?v=vvhEnr52UOU)
- [🎞️ 802.11 帧分析](https://www.youtube.com/watch?v=ITAJb3v5VKQ)
- [🔗 Wi-Fi 驱动程序 - ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/wifi.html)
- [📝 ESP32 使用 ESP-IDF 设置接入点（AP）](https://esp32tutorials.com/esp32-access-point-ap-esp-idf/)
- [📝 ESP32 ESP-IDF WiFi 连接 - 基站模式示例](https://esp32tutorials.com/esp32-esp-idf-connect-wifi-station-mode-example/)

##### 🔶 LoRa / LoRaWAN

- [📝 Arduino LoRa® 和 LoRaWAN® 指南](https://docs.arduino.cc/learn/communication/lorawan-101)
- [🔗💎 LoRaWAN 基础知识！](https://www.thethingsnetwork.org/docs/lorawan/)
- [📝 什么是 LoRa® 和 LoRaWAN®？](https://lora-developers.semtech.com/documentation/tech-papers-and-guides/lora-and-lorawan/)
- [🎞️ #112 LoRa / LoRaWAN 揭秘 / 教程](https://www.youtube.com/watch?v=hMOwbNUpDQA)
- [🔗 ESP32 使用 Arduino IDE 连接 LoRa RFM95 - 入门](https://randomnerdtutorials.com/esp32-lora-rfm95-transceiver-arduino-ide/)

##### 🔶 Zigbee

- [🎞️ 什么是 ZIGBEE 及其如何工作？](https://www.youtube.com/watch?v=THtVeaxnd9E)
- [🎞️ 如何利用 STM32WB 无线微控制器的 Zigbee 和蓝牙 LE 5.2 - 网络研讨会回放](https://www.youtube.com/watch?v=2sYEPykOaLQ)

##### 🔶 Thread

- [🔗 OpenThread - Thread® 的开源实现](https://openthread.io/)
- [🎞️ 什么是 Thread？智能家居设备的低功耗物联网网络 | Digi-Key Electronics](https://youtu.be/5CauESYB9-A)
- [🔗 OpenThread - ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/openthread.html)

##### 🔶 Matter

- [🎞️ 什么是 Matter？智能家居设备的统一物联网设备 | Digi-Key Electronics](https://youtu.be/vJIEfih9bl0)

#### 🔵 工业协议

##### 🔶 Modbus

- [🎞️ 什么是 Modbus 及其如何工作？](https://www.youtube.com/watch?v=txi2p5_OjKU)
- [🎞️ Modbus 通信协议如何工作？](https://www.youtube.com/watch?v=JBGaInI-TG4)
- [🎞️ MODBUS STM32 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLfIJKC1ud8ggRvaEsMjSEDazoBAnY4MUv)

##### 🔶 RS485

- [🎞️ 什么是 RS485 及其如何在工业控制系统中使用？](https://www.youtube.com/watch?v=3wgKcUDlHuM)
- [🎞️ 什么是 RS-485？](https://www.youtube.com/watch?v=bt9Px51eP6s)

##### 🔶 EtherCAT

- [🎞️ Microchip University - EtherCAT®、EtherCAT P 和 Microchip LAN925x 从控制器系列简介](https://mu.microchip.com/an-introduction-to-ethercat-ethercat-p-and-the-microchip-lan925x-family-of-slave-controllers)

##### 🔶 CoAP 和 MQTT

- [🎞️ #144 互联网协议：CoAP vs MQTT、网络嗅探，以及为 IKEA Tradfri 黑客攻击做准备](https://www.youtube.com/watch?v=pfG8uEDZj5g)
- [🎞️ MQTT vs. CoAP | 物联网协议比较](https://www.youtube.com/watch?v=0CORpVSUQe0)
- [🎞️ 简单 ESP32 物联网传感器节点教程：启用 WiFi 的 MQTT 传感器数据节点](https://www.youtube.com/watch?v=x5A5S0hoyJ0)
- [🔗 蜂窝物联网基础 - Nordic Semiconductor](https://academy.nordicsemi.com/courses/cellular-iot-fundamentals/)

#### 🔵 高速协议

##### 🔶 以太网

- [🎞️👶 Microchip University - 以太网基础](https://mu.microchip.com/ethernet-fundamentals)
- [📝 以太网协议如何工作 - 完整指南](https://www.freecodecamp.org/news/the-complete-guide-to-the-ethernet-protocol/)
- [🎞️ 什么是以太网 PHY？](https://www.youtube.com/watch?v=JH3cMYErmKI)
- [🎞️ 数据链路层、MAC 地址和以太网帧](https://www.youtube.com/watch?v=_b4dXKB8Pt8)
- [🎞️ Microchip University - 串行器/解串器（SerDes）基础，适用于您下一个 Microchip 以太网 PHY 设计](https://mu.microchip.com/serializerdeserializer-serdes-basics-for-your-next-microchip-ethernet-phy-design)
- [🎞️ Microchip University - 以太网交换机基础](https://mu.microchip.com/ethernet-switch-fundamentals)

##### 🔶 USB

- [🎞️👶 Microchip University - USB 2.0 简介](https://mu.microchip.com/introduction-to-usb-20)
- [🎞️👶 Microchip University - USB 3 基础](https://mu.microchip.com/usb-3-fundamentals)
- [🎞️ 培训 - USB 101 - USB 简介](https://www.youtube.com/watch?v=5S6ZPmtPzRA)
- [🔗 USB 101：通用串行总线 2.0 简介](https://www.infineon.com/dgdl/Infineon-AN57294_USB_101_An_Introduction_to_Universal_Serial_Bus_2.0-ApplicationNotes-v09_00-EN.pdf?fileId=8ac78c8c7cdc391c017d072d8e8e5256)
- [🎞️ USB 键盘是如何工作的？](https://youtu.be/wdgULBpRoXk)
- [🎞️ USB 设备发现是如何工作的？](https://www.youtube.com/watch?v=N0O5Uwc3C0o)
- [🎞️ MOOC - STM32 USB 培训 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLnMKNibPkDnFFRBVD206EfnnHhQZI4Hxa)
- [🎞️ Microchip University - USB2 集线器基础](https://mu.microchip.com/usb2-hub-fundamentals)
- [🔗 Beyond Logic - USB 简明指南](https://www.beyondlogic.org/usbnutshell/usb1.shtml)
- [📝 软件开发人员的 USB：编写用户空间 USB 驱动程序简介](https://werwolv.net/posts/usb_for_sw_devs/)

##### 🔶 PCIe

- [🎞️ 什么是 PCIe？](https://www.youtube.com/watch?v=L9qXjmJdQXY)
- [🎞️ PCIe QuickLearn (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL9B4edd-p2ajuP4dBHcnhtHKoZKkoR1R4)
- [🎞️ PCIe 协议 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLZe4P0P_9Cosd0i2ha_QRdWlR1iZ0yVG4)

#### 🔵 汽车协议

##### 🔶 CAN

- [🎞️👶 Microchip University - CAN 和 CAN FD 协议和物理层基础](https://mu.microchip.com/understanding-the-can-fd-protocol)
- [📝👶 2024 年 CAN 总线：操作、优势和最新发展](https://www.parlezvoustech.com/en/bus-can-2024-technologie-avantages-evolutions/)
- [🎞️👶 CAN 总线：串行通信 - 它是如何工作的？](https://www.youtube.com/watch?v=JZSCzRT9TTo&t=21s)
- [🎞️👶 CAN 总线：初学者指南第一部分](https://www.youtube.com/watch?v=YBrU_eZM110)
- [🎞️👶 CAN 总线：初学者指南第二部分](https://www.youtube.com/watch?v=z5CVljiLhvc)
- [🎞️💎 Microchip University - 设计和实现 CAN FD 网络](https://mu.microchip.com/designing-and-implementing-a-can-fd-network)
- [🎞️ 使用 CAN 总线改进我的电动长板！CAN 总线能做什么？EB#44](https://www.youtube.com/watch?v=PL0TPdrhMuI)
- [🎞️ CAN 总线、OBD2 和 J1939 解释 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLpV68vjf4Xo4vZ_SjJ6tTlomYm-k18vDZ)
- [🎞️ J1939 解释 - 简单入门 [v2.0 | 2021]](https://www.youtube.com/watch?v=vlqxu9ojbHg)
- [🎞️ 统一诊断服务（UDS）解释 - 简单入门 [2022]](https://www.youtube.com/watch?v=CV_B8tJgI5E)

#### 🔵 网络协议 / 套接字编程

- [🎞️ 网络基础 - 实用网络 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi)
- [🎞️ TCP vs UDP - 解释事实和揭穿神话 - TCP 大师课](https://www.youtube.com/watch?v=jE_FcgpQ7Co)
- [🎞️ TCP - 解释传输控制协议的 12 个简单概念](https://www.youtube.com/watch?v=JFch3ctY6nE)
- [🎞️ UDP 不可耻！对于这些类型的应用，它是最好的 L4 协议...](https://www.youtube.com/watch?v=LaDRWycC7Iw)
- [🎞️ 网络教程 - Ben Eater (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLowKtXNTBypH19whXTVoG3oKSuOcw_XeW)
- [📘💎 动手学习网络编程 with C - Lewis Van Winkle](https://www.amazon.com/exec/obidos/ASIN/1789349869/aoeu-20)
- [📘💎 网络算法学 - George Varghese, Jun Xu](https://www.oreilly.com/library/view/network-algorithmics-2nd/9780128099865/)
- [🔗 tcpdump 和 libpcap 库](https://www.tcpdump.org/)
- [🔗 lwIP - 轻量级 TCP/IP 协议栈](https://savannah.nongnu.org/projects/lwip/)
- [🔗 lwIP (ESP-IDF)](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/lwip.html)
- [🔗 使用 STM32Cube 和 LwIP TCP/IP 协议栈开发应用程序](https://www.st.com/resource/en/user_manual/um1713-developing-applications-on-stm32cube-with-lwip-tcpip-stack-stmicroelectronics.pdf)
- [📝 理解 Traceroute](https://tech.stonecharioteer.com/posts/2026/traceroute/)

#### 🔵 蜂窝通信

##### 🔶 GSM / LTE

- [🎞️ STM32 : 使用 4G LTE 调制解调器实现物联网 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL2_RO8p04imYY5JOrCDT7V0hnzkgyExRe)

##### 🔶 LTE-M 和 NB-IoT

- [🔗 蜂窝物联网基础 - Nordic Semiconductor](https://academy.nordicsemi.com/courses/cellular-iot-fundamentals/)



### ✳️ 存储技术与文件系统

嵌入式系统采用易失性（SRAM、DRAM、PSRAM）和非易失性（闪存、EEPROM、FRAM）存储器的组合来存储和访问数据，基于性能、成本、功耗和耐用性等因素。

- [📝 嵌入式系统存储选项：如何选择正确的存储配置](https://www.qt.io/embedded-development-talk/memory-options-for-embedded-systems-how-to-select-the-right-memory-configuration)

#### 🔵 闪存

- [📝 NAND 和 eMMC：关于闪存您需要知道的一切](https://www.makeuseof.com/tag/nand-emmc-need-know-flash-memory/)

##### 🔶 NOR / NAND

- [🎞️ STM32 中的 QSPI || 写入和读取 || N25Q](https://www.youtube.com/watch?v=xIfh_uYy-OU)
- [🎞️ STM32 中的 QSPI || 从外部存储器启动 || XIP || N25Q](https://www.youtube.com/watch?v=gAyuF20ok8c)
- [🎞️ 嵌入式 Linux 系统中的闪存](https://www.youtube.com/watch?v=hdwMvwJIV-Y)

##### 🔶 eMMC

- [🎞️ 什么是 eMMC？简介、与其他存储的比较和升级。SSD、M.2](https://www.youtube.com/watch?v=vGatKmqYxEA)

##### 🔶 SD 卡

- [🎞️ 与 SD 卡接口](https://www.youtube.com/watch?v=g40tUdjZ-Sk)

#### 🔵 EEPROM

- [🎞️ 使用 EEPROM 和 Arduino - 内部和外部](https://www.youtube.com/watch?v=ShqvATqXA7g)

#### 🔵 SRAM / DRAM

- [📝 SRAM vs DRAM：SRAM 和 DRAM 的区别解释](https://www.enterprisestorageforum.com/hardware/sram-vs-dram/)
- [🎞️ 什么是 SRAM？](https://www.youtube.com/watch?v=kU2SsUUsftA)
- [🎞️ SDRAM 硬件和固件教程（STM32）- Phil's Lab #80](https://www.youtube.com/watch?v=h28D4AaPSjg)
- [🎞️ STM32 中的 SDRAM || MT48LC4](https://www.youtube.com/watch?v=QnDenqvzwyE)

#### 🔵 文件系统

文件系统是在存储设备（如硬盘、闪存驱动器或固态驱动器）上组织数据的一种方式。它提供了存储、访问和管理文件的方法，文件是可以单独访问的数据集合。嵌入式系统中的文件系统通常是轻量级的并为效率而优化，考虑到嵌入式设备的有限资源和特定要求。与桌面或服务器文件系统相比，它们通常采用更简单的文件结构和数据结构。

- [📝 闪存文件系统](https://hugh712.gitbooks.io/embeddedsystem/content/flash_filesystems.html)
- [📝 块文件系统](https://hugh712.gitbooks.io/embeddedsystem/content/block_filesystems.html)
- [📝 理解嵌入式设备中的 UBI 文件系统](https://serhack.me/articles/understanding-ubi-file-system-embedded-devices-reolink/)
- [📝 UBI 文件系统](https://docs.kernel.org/filesystems/ubifs.html)
- [📝 JFFS：日志闪存文件系统](https://sourceware.org/jffs2/jffs2-html/)
- [📝 防止嵌入式 Linux 中的文件系统损坏](https://www.embeddedts.com/assets/preventing-filesystem-corruption-in-embedded-linux)
- [🔗 LittleFS - 高完整性嵌入式文件系统](https://os.mbed.com/blog/entry/littlefs-high-integrity-embedded-fs/)
- [🔗 SPIFS - 嵌入式设备的磨损均衡 SPI 闪存文件系统](https://github.com/pellepl/spiffs)
- [🔗 EEPROM 文件系统 (EEFS)](opensource.gsfc.nasa.gov/projects/eefs/index.php)



### ✳️ 硬件仿真 / 模拟

嵌入式系统开发通常涉及在将软件部署到实际硬件之前，仿真或模拟硬件环境来测试和调试软件。仿真工具创建硬件系统的虚拟模型，而仿真工具使用真实硬件组件复制实际硬件行为。这些工具提供了几个优势，包括减少开发时间、最小化硬件成本和提高软件可靠性。

- [🔗👶 Wokwi - 在线 ESP32、STM32、Arduino 仿真器](https://wokwi.com/)
- [🔗👶 SimulIDE 电路仿真器](https://simulide.com/)
- [🔗👶 为教育目的设计的数字逻辑设计和电路仿真器](https://github.com/hneemann/Digital)
- [🔗👶 EveryCircuit](https://everycircuit.com/)
- [🔗👶 电路仿真小程序](https://www.falstad.com/circuit/)
- [🔗👶 Tinkercad](https://www.tinkercad.com/)
- [🔗👶 Voltsim](https://www.voltsimulator.com/)
- [🔗 Velxio - Arduino 和嵌入式板仿真器](https://github.com/davidmonterocrespo24/velxio)
- [🔗 picoZ80](https://eaw.app/picoz80/)

#### 🔵 QEMU

- [🔗 QEMU 文档](https://www.qemu.org/docs/master/index.html)
- [📝 在 QEMU 中运行 AVR 代码 - 加速 AVR 固件开发的快速入门指南](https://yeah.nah.nz/embedded/qemu-avr/)
- [📝 QEMU 仿真 - 闪烁 - STM32F767ZI 全栈](https://longer-vision-robot.gitbook.io/stm32f767zi-full-stack/chapter-2.-programming-for-stm32/2.4-qemu-simulation-blinky)
- [📝 在 QEMU 中仿真 Raspberry Pi](https://interrupt.memfault.com/blog/emulating-raspberry-pi-in-qemu)

#### 🔵 Renode

- [🔗 Renode - GitHub 仓库](https://github.com/renode/renode)
- [🔗 Renode - 文档](https://renode.readthedocs.io/en/latest/)
- [🔗 Renode - 官方教程](https://renode.io/tutorials/)
- [📝 使用 Renode 进行 Cortex-M MCU 仿真](https://interrupt.memfault.com/blog/intro-to-renode)
- [📝 Renode 入门简单指南](https://github.com/tarciszera/renode_guide)
- [🎞️ 在 CI 工作流中使用 Renode 将 TensorFlow Lite 引入 Zephyr](https://www.youtube.com/watch?v=jF94cXPoZZg)



### ✳️ 传感器和执行器

传感器和执行器是嵌入式系统的眼睛和双手。它们负责收集有关环境的信息，并根据这些信息采取行动。传感器将物理现象（如温度，光或声音）转换为嵌入式系统可以处理的电信号。另一方面，执行器将电信号转换为物理动作，如控制电机速度或打开和关闭阀门。

- [🎞️💎 Coursera - 嵌入传感器和电机专业化](https://www.coursera.org/specializations/embedding-sensors-motors)

#### 🔵 传感器

- [📝 校准传感器](https://learn.adafruit.com/calibrating-sensors)
- [📝 DHT11 vs DHT22 vs LM35 vs DS18B20 vs BME280 vs BMP180](https://randomnerdtutorials.com/dht11-vs-dht22-vs-lm35-vs-ds18b20-vs-bme280-vs-bmp180/)
- [🎞️ STM32 和 Nucleo 入门第二部分：如何使用 I2C 读取温度传感器 TMP102](https://www.youtube.com/watch?v=isOekyygpR8)
- [🎞️ GPS 模块和 STM32 || NEO 6M || 获取坐标、日期、时间、速度等](https://www.youtube.com/watch?v=tq_RoaPLahk)
- [🎞️ 接口 MPU6050/GY-521 与 STM32 || LCD 20x4 || CubeMx || HAL || SW4STM](https://www.youtube.com/watch?v=xxphp9wDnHA)
- [📝 Arduino 与 PIR 运动传感器](https://randomnerdtutorials.com/arduino-with-pir-motion-sensor/)
- [📝 超声波传感器 HC-SR04 完整指南，使用 Arduino](https://randomnerdtutorials.com/complete-guide-for-ultrasonic-sensor-hc-sr04/)
- [🎞️ 电子基础 #15：温度测量（第1部分）|| NTC、PT100、惠斯通电桥](https://youtu.be/1U4fep_qAeo?si=Q2FF__EXONN-xN5M)

#### 🔵 执行器

- [📝 Adafruit 电机选择指南](https://learn.adafruit.com/adafruit-motor-selection-guide)
- [🎞️ 使用 STM32 的 PWM 电位器直流电机速度控制器](https://www.youtube.com/watch?v=8QpegVuV_AQ)
- [📝 关于步进电机的一切](https://learn.adafruit.com/all-about-stepper-motors)
- [📝 使用 CircuitPython 和 Arduino 使用舵机](https://learn.adafruit.com/using-servos-with-circuitpython)
- [🎞️ 电子基础 #25：舵机及其使用方法](https://youtu.be/J8atdmEqZsc?si=bH_xoIwnAsNU5_lD)
- [🎞️ 电子基础 #24：步进电机及其使用方法](https://youtu.be/bkqoKWP4Oy4?si=kvhwykmFZ0UnLDJ7)
- [🎞️ 电子基础 #18：直流和无刷直流电机 + ESC](https://youtu.be/UteZJ_7C4Mg?si=uADPmCaucyWXd8Xe)



### ✳️ 数字信号处理

数字信号处理（DSP）是处理数字信号的工程分支。它广泛应用于嵌入式系统、通信系统和多媒体系统等各种应用。DSP 算法通常使用专用集成电路（ASIC）或现场可编程门阵列（FPGA）在硬件中实现。

#### 🔵 DSP 基础和滤波器设计

- [📘💎 科学家和工程师数字信号处理指南 - Steven W. Smith](https://www.dspguide.com/pdfbook.htm)
- [🎞️ FIR 滤波器设计和软件实现 - Phil's Lab #17](https://www.youtube.com/watch?v=uNNNj9AZisM)
- [🎞️ IIR 滤波器 - 理论和实现（STM32）- Phil's Lab #32](https://www.youtube.com/watch?v=QRMe02kzVkA)
- [🎞️ 数字信号处理（ECSE-4530）讲座，2014 年秋季 (YouTube 播放列表)](https://youtube.com/playlist?list=PLuh62Q4Sv7BUSzx5Jr8Wrxxn-U10qG1et)
- [🎞️ Udemy – 数字信号处理（DSP）从零开始用 C 编程](https://www.udemy.com/course/digital-signal-processing-dsp-from-ground-uptm-in-c/)
- [📘 实时数字信号处理：基础、实现和应用 - Sen M. Kuo, Bob H. Lee, Wenshun Tian](https://www.wiley.com/en-us/Real+Time+Digital+Signal+Processing%3A+Fundamentals%2C+Implementations+and+Applications%2C+3rd+Edition-p-9781118414323)
- [📘 从 MATLAB 到 C 的实时数字信号处理，使用 TMS320C6x DSP - Thad B. Welch, Cameron H.G. Wright, Michael G. Morrow](https://www.routledge.com/Real-Time-Digital-Signal-Processing-from-MATLAB-to-C-with-the-TMS320C6x/Welch-Wright-Morrow/p/book/9780367736453)
- [📘 信号与系统大纲 - Hwei P. Hsu](https://www.mhprofessional.com/schaum-s-outline-of-signals-and-systems-fourth-edition-9781260454246-usa)
- [📘💎 数字信号处理 - John G. Proakis, Dimitris K. Manolakis](https://a.co/d/75P5PiE)
- [📘 计算机音乐入门](https://composerprogrammer.com/introductiontocomputermusic.pdf)

#### 🔵 离散傅里叶变换 / FFT

- [🎞️ 离散傅里叶变换 - 简单循序渐进](https://www.youtube.com/watch?v=mkGsMWi_j4Q)
- [🎞️ 快速傅里叶变换（FFT）：有史以来最巧妙的算法？](https://youtu.be/h7apO7q16V0)
- [🎞️ FFT 算法 - 简单循序渐进](https://www.youtube.com/watch?v=htCj9exbGo0)
- [🎞️ STM32 快速傅里叶变换（CMSIS DSP FFT）- Phil's Lab #111](https://youtu.be/d1KvgOwWvkM)

### ✳️ 控制理论

- [🎞️ 理解控制系统 (YouTube 播放列表)](https://youtube.com/playlist?list=PLn8PRpmsu08q8CE0pbZ-cSrMm_WYJfVGd)
- [🎞️ 控制系统 - CircuitBread (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLfYdTiQCV_p4YZNJWExM-5_g0fk9bHDL8)
- [🎞️💎 Brian Douglas 的控制系统讲座 (YouTube 频道)](https://www.youtube.com/@BrianBDouglas)
- [📘💎 控制系统工程 - Norman S. Nise](https://www.wiley.com/en-us/Control+Systems+Engineering%2C+8th+Edition-p-9781119474227)
- [📘💎 现代控制系统 - Richard C. Dorf, Robert H. Bishop](https://www.pearson.com/en-us/subject-catalog/p/modern-control-systems/P200000003484/9780137307098)
- [🔗 卡尔曼滤波器](https://kalmanfilter.net/)

#### 🔵 PID 控制器

- [🎞️👶 什么是 PID 控制器？| DigiKey](https://www.youtube.com/watch?v=tFVAaUcOm4I)
- [🎞️👶 如何为倒立摆调整 PID 控制器 | DigiKey](https://www.youtube.com/watch?v=hRnofMxEf3Q)
- [🎞️ PID 控制器解释](https://www.youtube.com/watch?v=fv6dLTEvl74)
- [🎞️ 理解 PID 控制 (YouTube 播放列表)](https://youtube.com/playlist?list=PLn8PRpmsu08pQBgjxYFXSsODEF3Jqmm-y)
- [🎞️ 软件中的 PID 控制器实现 - Phil's Lab #6](https://www.youtube.com/watch?v=zOByx3Izf5U)

#### 🔵 MATLAB / Simulink

- [🎞️ MATLAB 教程：MATLAB 入门 (YouTube 播放列表)](https://youtube.com/playlist?list=PL7CAABC40B2825C8B)
- [🎞️ Simulink 入门 (YouTube 播放列表)](https://youtube.com/playlist?list=PL484BA2AD3AE4C2D0)
- [🎞️ Udemy – MATLAB/SIMULINK 权威指南|从零到英雄！](https://www.udemy.com/course/matlabsimulink-biblego-from-zero-to-hero/)



### ✳️ 操作系统

嵌入式系统可以使用操作系统（OS）编程，也可以直接在硬件上编程，称为裸机编程。每种方法都有其优缺点。嵌入式操作系统在硬件和应用程序代码之间提供了一层抽象，提供资源管理、任务调度、错误处理和通信能力等好处。然而，它们增加了开销，可能不适合内存受限的应用。

#### 🔵 操作系统基础

- [📝👶 把"你"放入 CPU](https://cpu.land/)
- [📝👶 用 1000 行代码编写操作系统](https://operating-system-in-1000-lines.vercel.app/en/)
- [📘👶 关于 OS 开发的小书](https://littleosbook.github.io/)
- [📘👶 操作系统：从 0 到 1](https://github.com/tuhdo/os01/blob/master/Operating_Systems_From_0_to_1.pdf)
- [🔗 一个操作系统](https://github.com/roscopeco/anos)
- [📝 将 Mac OS X 移植到 Nintendo Wii](https://bryankeller.github.io/2026/04/08/porting-mac-os-x-nintendo-wii.html)
- [📘💎 操作系统：三件容易的事 - Remzi H Arpaci-Dusseau, Andrea C Arpaci-Dusseau](https://pages.cs.wisc.edu/~remzi/OSTEP/)
- [📘💎 现代操作系统 - Andrew S. Tanenbaum, Herbert Bos](https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295)
- [📝 用 Rust 编写操作系统 - Philipp Oppermann 的博客](https://os.phil-opp.com/)
- [🔗 在 Raspberry Pi 上用 Rust 进行操作系统开发教程](https://github.com/rust-embedded/rust-raspberrypi-OS-tutorials)

#### 🔵 实时操作系统

实时操作系统（RTOS）是专为满足严格的时间期限而设计的专用操作系统。它们用于时间关键型的嵌入式系统，如航空电子、机器人和医疗设备。RTOS 提供了一个确定性环境，在该环境中任务可以以可预测的时间执行。这确保了关键任务始终能及时执行，即使在存在中断和其他干扰的情况下。

##### 🔶 RTOS 基础

- [📝 裸机和基于 RTOS 的嵌入式系统](https://microcontrollerslab.com/difference-bare-metal-and-rtos-based-embedded-systems/)
- [📝 RTOS 与裸机：导航性能、复杂性和效率](https://weston-embedded.com/support/media-articles/119-rtos-vs-bare-metal-navigating-performance-complexity-and-efficiency)
- [📝 RTOS 与裸机的优缺点：您会选择哪个？](https://medium.com/@lanceharvieruntime/the-pros-and-cons-of-rtos-vs-bare-metal-which-will-you-choose-756e33ba6df7)
- [📝 嵌入式系统的 FreeRTOS 与 Linux 比较](https://www.bytesnap.com/news-blog/freertos-vs-linux-embedded-systems/)
- [🔗 tinyOS RTOS](https://github.com/cmc-labo/tinyos-rtos)
- [🔗 实时系统概念](https://micrium.atlassian.net/wiki/spaces/osiidoc/pages/163855/Real-Time+Systems+Concepts)
- [🔗 RTOS 基础](https://www.freertos.org/Documentation/01-FreeRTOS-quick-start/01-Beginners-guide/01-RTOS-fundamentals)
- [📝 通过中断驱动的 Actor 模型实现的简单调度器](https://interrupt.memfault.com/blog/hardware-actor-scheduler)
- [📝 ARM Cortex-M RTOS 上下文切换](https://interrupt.memfault.com/blog/cortex-m-rtos-context-switching)
- [🎞️ RTOS (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLPW8O6W-1chyrd_Msnn4LD6LBs2slJITs)
- [🎞️ 超越 RTOS (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLPW8O6W-1chytjkg63tM7MI0BvGxxPIP)

##### 🔶 FreeRTOS

- [🔗 FreeRTOS - 市场领先的 RTOS](https://www.freertos.org)
- [🎞️👶 RTOS 简介 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEBQazB0HUyQ4hAPU1cJED6t3DU0h34bz)
- [📘💎 掌握 FreeRTOS 实时内核 - 实践教程指南](https://www.freertos.org/Documentation/RTOS_book.html)
- [🎞️👶 Microchip University - FreeRTOS 简明化：开发和调试 FreeRTOS 应用程序初学者指南](https://mu.microchip.com/freertos-simplified)
- [🎞️ STM32 和 Nucleo 入门第三部分：FreeRTOS - 如何使用 CMSIS-RTOS 运行多个线程](https://www.youtube.com/watch?v=CdpgqpuPSyQ)
- [📘 使用 FreeRTOS、微控制器和 SEGGER 调试工具构建实时嵌入式系统的动手 RTOS：Brian Amos](https://a.co/d/11MSPlo)
- [📘 STM32 入门：使用 FreeRTOS、libopencm3 和 GCC 开发 - Warren Gay](https://link.springer.com/book/10.1007/978-1-4842-3624-6)
- [🔗 SafeRTOS - 安全关键实时操作系统](https://www.freertos.org/FreeRTOS-Plus/Safety_Critical_Certified/SafeRTOS.html)

##### 🔶 Zephyr

- [🔗 Zephyr® 项目](https://www.zephyrproject.org/)
- [📝💎 Zephyr 入门](https://www.embeddedrelated.com/showarticle/1505.php)
- [🔗 Zephyr：初学者教程](https://maksimdrachov.github.io/zephyr-rtos-tutorial/)
- [📝 为什么我们从 FreeRTOS 迁移到 Zephyr RTOS](https://www.zephyrproject.org/why-we-moved-from-freertos-to-zephyr-rtos/)
- [🔗 nRF Connect SDK](https://academy.nordicsemi.com/courses/nrf-connect-sdk-fundamentals/)
- [🎞️ Zephyr OS 上的 ESP32 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEQVp_6G_y4iFfemAbFsKw6tsGABarTwp)
- [🎞️💎 Zephyr 简介 - Digikey (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEBQazB0HUyTmK2zdwhaf8bLwuEaDH-52)

##### 🔶 μC/OS / Micriμm OS

- [🔗 Micriμm OS](https://www.silabs.com/developers/micrium)
- [🔗 µC/OS-III 文档](https://micrium.atlassian.net/wiki/spaces/osiiidoc/overview)
- [📘 µC/OS-III 书籍](https://weston-embedded.com/micrium-books)
- [📘💎 µC/OS-II 文档（先前出版为《MicroC/OS-II：实时内核》）](https://micrium.atlassian.net/wiki/spaces/osiiidoc/overview)

##### 🔶 NuttX

- [🔗 NuttX - Apache 软件基金会](https://nuttx.apache.org/)
- [🔗 NuttX 文档](https://nuttx.apache.org/docs/latest/)
- [🎞️ NuttX 入门 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLd73yQk5Fd8JEsVD-lhwYRQKVu6glfDa8)

##### 🔶 RT-Thread

- [🔗 RT-Thread | 开源嵌入式实时操作系统](https://www.rt-thread.io/)
- [🔗 RT-Thread 文档中心](https://www.rt-thread.io/document/site/)
- [🎞️ RT-Thread 初学者指南 (YouTube 播放列表)](https://youtube.com/playlist?list=PLXUV89C_M3G5KVw2IerI-pqApdSM_IaZo)

##### 🔶 Mbed OS

- [🔗 Mbed OS](https://os.mbed.com/mbed-os/)
- [🔗 Mbed OS 文档](https://os.mbed.com/docs/mbed-os/)

##### 🔶 QNX

- [🔗 BlackBerry QNX：嵌入式操作系统、支持和服务](https://blackberry.qnx.com/en)
- [🔗 QNX 产品文档](https://www.qnx.com/developers/docs/index.html)

##### 🔶 VxWorks

- [🔗 VxWorks | 嵌入式系统领先 RTOS](https://www.windriver.com/products/vxworks)
- [🔗 VxWorks 文档](https://docs.windriver.com/category/os_vxworks?labelkey=os_vxworks)
- [🎞️ VxWORKS-RTOS - Kumar M (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLyp1I7W35-q34sYWBlBg8xgoqsizZ57P7)

##### 🔶 Azure RTOS (ThreadX)

- [🔗 Azure RTOS - 使嵌入式物联网开发和连接变得简单](https://azure.microsoft.com/en-us/services/rtos/)
- [🔗 Microsoft Azure RTOS 文档](https://learn.microsoft.com/en-us/azure/rtos/)
- [🔗 Azure RTOS ThreadX](https://github.com/azure-rtos/threadx)

#### 🔵 嵌入式 Linux

嵌入式 Linux 是为嵌入式系统量身定制的 Linux 操作系统专用版本。它设计用于在资源受限的设备上运行，如内存、处理能力和功耗受限的设备。

- [📝 什么是嵌入式 Linux？](https://www.windriver.com/solutions/learning/embedded-linux)
- [📝 嵌入式系统的 FreeRTOS 与 Linux 比较](https://www.bytesnap.com/news-blog/freertos-vs-linux-embedded-systems/)
- [🎞️👶 嵌入式 Linux 简介 (YouTube 播放列表)](https://youtube.com/playlist?list=PLEBQazB0HUyTpoJoZecRK6PpDG31Y7RPB)
- [📝 掌握嵌入式 Linux 系列 - George Hilliard 的博客](https://www.thirtythreeforty.net/series/mastering-embedded-linux/)
- [📘💎 掌握嵌入式 Linux 编程 - Chris Simmonds](https://www.packtpub.com/product/mastering-embedded-linux-programming-third-edition/9781789530384)
- [🎞️💎 Coursera - 高级嵌入式 Linux 开发专业化](https://www.coursera.org/specializations/advanced-embedded-linux-development)
- [🔗 Linux From Scratch - 构建您自己的自定义 Linux 系统的循序渐进说明](https://www.linuxfromscratch.org/)
- [🔗 汽车级 Linux (AGL)](https://docs.automotivelinux.org/)
- [🔗 实时 Linux 和 `PREEMPT_RT` 补丁](https://wiki.linuxfoundation.org/realtime/start)
- [🔗 Android 开源项目](https://source.android.com)
- [🔗 Android Automotive](https://source.android.com/docs/automotive)

##### 🔶 Linux 内核

- [📘👶 Linux 内核开发 - Robert Love](https://www.oreilly.com/library/view/linux-kernel-development/9780768696974/)
- [📘💎 Linux 编程接口 - Michael Kerrisk](https://man7.org/tlpi/)
- [📘 Linux 是如何工作的 - Brian Ward](https://nostarch.com/howlinuxworks3)

##### 🔶 Linux 设备驱动程序

- [📝👶 编写简单的 Linux 内核模块](https://blog.sourcerer.io/writing-a-simple-linux-kernel-module-d9dc3762c234)
- [📘💎 Linux 设备驱动程序 - Jonathan Corbet, Alessandro Rubini, Greg Kroah-Hartman](https://lwn.net/Kernel/LDD3/)
- [📘 Linux 内核模块编程指南](https://sysprog21.github.io/lkmpg/)
- [📘 掌握 Linux 设备驱动程序开发 - John Madieu](https://www.packtpub.com/product/mastering-linux-device-driver-development/9781789342048)
- [📝 2022 年用 Rust 编写内核驱动程序](https://not-matthias.github.io/posts/kernel-driver-with-rust/)

##### 🔶 U-Boot

- [🔗 U-Boot 文档](https://u-boot.readthedocs.io/en/latest/)
- [🔗 Barebox](https://www.barebox.org/doc/latest/index.html)

##### 🔶 Buildroot

- [🔗 Buildroot 文档](https://buildroot.org/docs.html)
- [🎞️ 嵌入式 Linux 入门第一部分 - Buildroot | Digi-Key Electronics](https://www.youtube.com/watch?v=9vsu67uMcko)
- [📝 使用 Buildroot 构建小型 Raspberry Pi Linux 镜像](https://rickcarlino.com/2021/building-tiny-raspberry-pi-linux-images-with-buildroot.html)

##### 🔶 Yocto

- [🔗 Yocto 项目快速构建](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [🔗💎 Yocto 项目文档](https://docs.yoctoproject.org/index.html)
- [🎞️ 嵌入式 Linux 入门第二部分 - Yocto 项目 | Digi-Key Electronics](https://www.youtube.com/watch?v=2-PwskQrZac&t=7s)
- [📝 使用 Yocto 项目为 Raspberry Pi 板构建 Linux 镜像](https://tutorialadda.com/yocto/create-your-own-linux-image-for-the-raspberry-pi-board-using-yocto-project)
- [🎞️ Yocto 项目教程系列（基础到高级）(YouTube 播放列表)](https://www.youtube.com/playlist?list=PLwqS94HTEwpQmgL1UsSwNk_2tQdzq3eVJ)
- [🎞️ Udemy – 使用 Yocto 的嵌入式 Linux](https://www.udemy.com/course/embedded-linux-using-yocto/)
- [📘💎 使用 Yocto 项目的嵌入式 Linux 系统 - Rudolf J.Streif](https://www.oreilly.com/library/view/embedded-linux-systems/9780133443301/)
- [📘 使用 Yocto 项目 Cookbook 进行嵌入式 Linux 开发 - Alex Gonzalez](https://www.oreilly.com/library/view/embedded-linux-development/9781788399210/)
- [📘 Bootlin 嵌入式 Linux、内核、驱动程序、Yocto、Buildroot 和图形培训](https://bootlin.com/training/)

##### 🔶 多线程和并行处理

- [📝 线程/并发与并行](http://www.danielmoth.com/Blog/threadingconcurrency-vs-parallelism.aspx)
- [📝 多线程和并行编程](https://dev.to/kwereutosu/multi-threading-and-parallel-programming-1l9m)
- [📝 多任务 vs 多线程 vs 多处理](https://medium.com/codex/multitasking-vs-multithreading-vs-multiprocessing-2b0087c861ae)
- [📘💎 POSIX 线程编程 - David Butenhof](https://a.co/d/9R6DswF)
- [📘 C++ 并发实战 - Anthony Williams](https://www.manning.com/books/c-plus-plus-concurrency-in-action)

##### 🔶 高性能计算 (HPC)

- [🔗 OpenMP 并行编程和性能优化](https://passlab.github.io/OpenMPProgrammingBook/index.html)
- [🎞️ OpenMP 简介 - Tim Mattson (Intel) (YouTube 播放列表)](https://youtube.com/playlist?list=PLLX-Q6B8xqZ8n8bwjGdzBJ25X2utwnoEG)
- [🔗 OpenCL 教程](https://www.intel.com/content/www/us/en/developer/articles/training/opencl-tutorials.html)
- [🔗 CUDA C++ 编程指南](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html)
- [🔗 Mvidia](https://jaso1024.com/mvidia/)
- [🔗 每个重要的 GPU](https://sheets.works/data-viz/every-gpu)

##### 🔶 进程间通信 (IPC)

- [📝 进程间通信 (IPC)](https://www.scaler.com/topics/operating-system/inter-process-communication-in-os/)
- [📝 Linux 中的进程间通信是什么？](https://www.scaler.com/topics/ipc-in-linux/)
- [🎞️ Udemy – Linux 进程间通信 (IPC) 从零开始用 C 编程](https://www.udemy.com/course/linuxipc/)
- [📘 极限 C - Kamran Amini | 第 19 章：单主机 IPC 和套接字](https://www.packtpub.com/free-ebook/extreme-c/9781789343625)
- [🎞️ Udemy – 使用 Qt 5 C++ 的多线程和 IPC](https://www.udemy.com/course/multi-threading-and-ipc-with-qt-c-plus-plus/)
- [📝 D-Bus 教程](https://dbus.freedesktop.org/doc/dbus-tutorial.html)

##### 🔶 Qt 框架

- [🔗 Qt 文档](https://doc.qt.io/)



### ✳️ 调试

调试嵌入式系统包括识别和解决软件缺陷和硬件故障。采用各种技术来查明问题的根本原因，如静态代码分析、动态分析、仿真和模拟、在线调试和硬件调试。

- [📝 在嵌入式系统中使用断言](https://interrupt.memfault.com/blog/asserts-in-embedded-systems)

#### 🔵 JTAG / SWD

JTAG 和 SWD（串行线调试）是两种流行的接口协议，用于调试和编程嵌入式系统。JTAG 是一种更通用的协议，可用于调试和编程更广泛的设备，而 SWD 是一种更简单、更紧凑的协议，专门为 ARM 微控制器设计。

- [📝 深入了解 ARM Cortex-M 调试接口](https://interrupt.memfault.com/blog/a-deep-dive-into-arm-cortex-m-debug-interfaces)
- [🔗 指南：连接您的调试器](https://stm32-base.org/guides/connecting-your-debugger.html)
- [🎞️ STM32 + SWD + ST-Link + CubeIDE | 在自定义硬件上调试教程 - Phil's Lab #4](https://www.youtube.com/watch?v=qMUzLU636s8)
- [📝 深入 JTAG 协议。第 1 部分 — 概述](https://medium.com/@aliaksandr.kavalchuk/diving-into-jtag-protocol-part-1-overview-fbdc428d3a16)
- [📝 深入 JTAG 协议。第 2 部分 — 调试](https://medium.com/@aliaksandr.kavalchuk/diving-into-jtag-protocol-part-2-debugging-56a566db3cf8)
- [📝 深入 JTAG 协议。第 3 部分 — 边界扫描](https://medium.com/@aliaksandr.kavalchuk/diving-into-jtag-part-3-boundary-scan-17f9975ecc59)

#### 🔵 GDB

GDB（GNU 调试器）是一个强大的多功能调试器，用于源代码级和机器级调试。它支持多种编程语言，包括 C、C++、Objective-C、Java 和 Rust。GDB 是一个免费的开源软件工具，被开发人员和研究人员广泛使用。

- [📝 GDB 高级用法](https://interrupt.memfault.com/blog/advanced-gdb)
- [📝 断点是如何工作的？](https://interrupt.memfault.com/blog/cortex-m-breakpoints)
- [🔗 GNU GDB 调试器命令速查表](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)
- [🔗 gdbgui - 基于浏览器的 gdb (gnu 调试器) 前端](https://www.gdbgui.com/)
- [🎞️ 每个人都应该停止使用打印调试（改为这个）](https://www.youtube.com/watch?v=3T3ZDquDDVg)
- [🎞️ GDB 真的很简单！用几个命令在代码中查找错误](https://www.youtube.com/watch?v=Dq8l1_-QgAc)
- [📝 ARM 半主机简介](https://interrupt.memfault.com/blog/arm-semihosting)

#### 🔵 OpenOCD

OpenOCD（开源片上调试器）是一个开源软件工具，为调试和编程嵌入式系统提供了一个强大而通用的平台。它作为硬件调试适配器（HDA）和调试器（如 GNU 调试器（GDB））之间的接口，使开发人员能够与目标微控制器或微处理器交互。OpenOCD 支持广泛的硬件平台，并提供全面的硬件调试、编程和边界扫描测试功能集。

- [🔗 OpenOCD - GitHub 仓库](https://github.com/openocd-org/openocd)
- [🎞️ 这 100% 是您应该使用的调试方式 | 如何使用 OpenOCD 和 GDB 调试嵌入式软件](https://www.youtube.com/watch?v=_1u7IOnivnM)



### ✳️ 构建系统

构建系统自动化将源代码编译和链接为可执行程序的过程。它们是软件开发的重要工具，可以帮助提高构建过程的效率和一致性。流行的构建系统包括 Make 和 CMake。

#### 🔵 编译器 / GCC

GCC（GNU 编译器集合）是一个免费的开源编译器系统，可以为许多不同的编程语言编译程序，包括 C、C++、Objective-C、Fortran、Ada 和 Go。由于其开源性、成熟度、稳定性、可移植性、性能和大型社区，GCC 是嵌入式系统开发的流行选择。另一方面，Keil 和 IAR 等专有编译器提供工具链支持、特定目标优化和客户支持，可能更适合特定项目。

- [📝 GCC 和 Make - 编译、链接和构建 C/C++ 应用程序](https://www3.ntu.edu.sg/home/ehchua/programming/cpp/gcc_make.html)
- [📝 嵌入式最佳和最差的 GCC 编译器标志](https://interrupt.memfault.com/blog/best-and-worst-gcc-clang-compiler-flags)
- [📝 从零到 main()：固件链接脚本揭秘](https://interrupt.memfault.com/blog/how-to-write-linker-scripts-for-firmware)
- [📝 裸机 - 从零到闪烁](https://www.linuxembedded.fr/2021/02/bare-metal-from-zero-to-blink)
- [🔗 Keil MDK & µVision](https://www.keil.com/)
- [🔗 IAR Embedded Workbench](https://www.iar.com)

#### 🔵 Make / CMake

CMake 和 Make 都是用于构建软件应用程序的工具。CMake 是一个元构建系统，生成 Makefile，然后由 Make 用于构建软件。CMake 比 Make 更通用和跨平台，正在成为现代软件开发中更流行的选择。

- [📝 GNU Make 浅析](https://interrupt.memfault.com/blog/gnu-make-guidelines)
- [🎞️ 使用 Make、CMake 和 arm-gcc 编译器工具链从零开始构建 STM32 项目 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLEg2mgYz66IOcHRvvUDf9O1ZCGy58M1Bt)
- [🔗 CMake 教程](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
- [🎞️ 如何 CMake 才好 (YouTube 播放列表)](https://youtube.com/playlist?list=PLK6MXr8gasrGmIiSuVQXpfFuE1uPT615s)
- [📝👶 注释最详细的嵌入式 CMakeLists 文件](https://dnedic.github.io/blog/the-most-thoroughly-commented-embedded-cmakelists/)
- [🔗 轻量级 C/C++ 构建和工作流工具](https://github.com/randerson112/craft)

#### 🔵 Bash 脚本

Bash 脚本在嵌入式系统开发中是一个强大的工具，使开发人员能够自动化重复性任务、处理复杂配置并有效地管理嵌入式系统环境。Bash 脚本是一个特定于 Linux 的工具，原生未集成到 Windows 中。但是，可以通过 Windows Subsystem for Linux (WSL) 访问它。

- [🔗 Bash 脚本速查表](https://devhints.io/bash)
- [🎞️ Bash 脚本初学者教程](https://www.youtube.com/watch?v=tK9Oc6AEnR4)

#### 🔵 Docker

Docker 容器为构建软件应用程序提供了一致和隔离的环境。这可以帮助提高构建的可重复性并降低错误风险。Docker 还使共享构建环境变得更容易，可以为开发人员节省时间和精力。

- [🔗 Docker 文档](https://docs.docker.com/get-started/)
- [🔗 Docker 速查表](https://dockerlabs.collabnix.com/docker/cheatsheet/)
- [📝👶 Docker 傻瓜指南](https://dev.to/stevenmcgown/docker-for-dummies-2bff)
- [🎞️ 嵌入式开发人员 Docker 简介](https://www.youtube.com/watch?v=Fz7ou-VBk-w)
- [🎞️ CI/CD 入门第一部分：Docker 入门 | Digi-Key Electronics](https://youtu.be/1nxGcfIm-TU)
- [📝 现代 C 开发环境](https://interrupt.memfault.com/blog/a-modern-c-dev-env)



### ✳️ 软件开发生命周期 (SDLC) 模型

软件开发生命周期（SDLC）模型为软件开发提供了结构化方法，指导从规划到部署和维护的过程。这些模型为组织、管理和执行软件项目提供了一个框架，确保一致和高效的开发过程。

- [📝 什么是软件开发生命周期？](https://www.coderus.com/the-software-development-lifecycle/)
- [📝 嵌入式产品开发生命周期：四个主要步骤](https://www.sam-solutions.com/blog/embedded-product-development-life-cycle/)

#### 🔵 敏捷 / SCRUM

- [📝 敏捷适用于嵌入式软件吗？](https://www.embedded.com/does-agile-work-with-embedded-software/)
- [📝 嵌入式软件的 Scrum：很好——但原因与您的经理认为的不同](https://www.elektrobit.com/trends/scrum-for-embedded-software/)
- [📝 什么是 Scrum：最流行的敏捷框架指南](https://www.scrumalliance.org/about-scrum)
- [📝 Scrum 会议的敏捷指南](https://www.atlassian.com/agile/scrum/ceremonies)
- [📝 什么是规模化敏捷框架？(SAFe)](https://www.atlassian.com/agile/agile-at-scale/what-is-safe)
- [🔗 Jira - 问题与项目跟踪软件](https://confluence.atlassian.com/jira)

#### 🔵 V 模型（V 周期）

- [📝 什么是软件开发的 V 模型](https://x-engineer.org/v-model-software-development/)
- [📝 软件工程中的 V 模型：终极指南](https://biplus.com.vn/v-model-in-software-engineering/)



### ✳️ 版本控制系统

版本控制系统是管理代码和其他数字资产更改的基本工具。它们跟踪随时间的变化，允许开发人员回滚到以前的版本，有效协作并识别潜在冲突。流行的版本控制系统包括 Git、Mercurial 和 Subversion。

#### 🔵 Git

- [🎞️👶 Git 初学者教程：一小时学会 Git](https://www.youtube.com/watch?v=8JJ101D3knE)
- [🎞️ Git 专业人士教程 - 掌握 Git 版本控制的工具和概念](https://www.youtube.com/watch?v=Uszj_k0DGsg)

#### 🔵 SVN (Subversion)

- [🔗 Apache® Subversion®](https://subversion.apache.org/)

### ✳️ 测试

测试是嵌入式系统开发过程不可或缺的组成部分，确保这些系统的质量、可靠性和安全性。它涉及一系列技术，从单元测试到系统测试，以验证软件和硬件组件的功能和性能。

- [📝 嵌入式测试](https://artoftesting.com/embedded-testing)
- [📝 软件测试中的嵌入式测试是什么？](https://www.guru99.com/embedded-software-testing.html)
- [📝 嵌入式软件中的验证与确认](https://www.parasoft.com/blog/verification-vs-validation-in-embedded-software/)

#### 🔵 测试驱动开发 (TDD)

- [📘💎 嵌入式 C 测试驱动开发 - James Grenning](https://www.amazon.com/Driven-Development-Embedded-Pragmatic-Programmers/dp/193435662X)
- [📝 测试：单元 vs 集成 vs 回归 vs 验收](https://medium.com/@touseefmurtaza1993/testing-unit-vs-integration-vs-regression-vs-acceptance-a3e190cc54dd)
- [📝 使用 Renode 和 GitHub Actions 进行固件测试](https://interrupt.memfault.com/blog/test-automation-renode)
- [📝 测试覆盖率与开销的平衡](https://interrupt.memfault.com/blog/testing-vs-overhead)

##### 🔶 单元测试

- [📝 嵌入式 C/C++ 单元测试基础](https://interrupt.memfault.com/blog/unit-testing-basics)
- [📝 嵌入式 C/C++ 单元测试与模拟](https://interrupt.memfault.com/blog/unit-test-mocking)
- [🔗 C 单元测试（特别是嵌入式软件）](http://www.throwtheswitch.org/unity)
- [📝 如何使用 Ceedling 进行嵌入式测试驱动开发](https://www.electronvector.com/how-to-use-ceedling-for-embedded-test-driven-development)
- [📘 单元测试原则、实践和模式 - Vladimir Khorikov](https://www.manning.com/books/unit-testing)
- [🔗 Catch2 - 一个现代的、C++ 原生的单元测试框架](https://github.com/catchorg/Catch2)
- [🔗 pytest-embedded](https://docs.espressif.com/projects/pytest-embedded/en/latest/)
- [📝 使用 Pytest 测试 ESP32 代码简介](https://blog.gistre.epita.fr/posts/brice.parent-2023-09-11-introduction_to_testing_esp32_code_with_pytest/)
- [🔗 Pigweed](https://pigweed.dev/)

###### [🔸 GoogleTest - Google 测试和模拟框架](https://github.com/google/googletest)

- [🔗 GoogleTest 用户指南](https://google.github.io/googletest/)
- [🎞️ GoogleTest And GoogleMock (GTest and GMock)](https://www.youtube.com/playlist?list=PLn7_PzMqzs5JE58kw4nWiFELEkQek5G0)

##### 🔶 集成测试

- [📝 硬件 CI Arena](https://electricui.com/blog/hardware-testing)
- [📝 Exclave：大规模生产中的硬件测试变得更简单](https://www.bunniestudios.com/blog/?p=5450)
- [📝 嵌入式系统回归测试](https://www.parasoft.com/blog/regression-testing-of-embedded-systems/)

#### 🔵 CI/CD 流水线

持续集成（CI）和持续交付（CD）是自动化构建、测试和部署软件过程的软件开发实践。CI/CD 流水线旨在确保软件更改快速且可靠地部署。

- [🎞️ CI/CD 入门第一部分：Docker 入门 | Digi-Key Electronics](https://youtu.be/1nxGcfIm-TU)
- [🎞️ CI/CD 入门第二部分：GitHub Actions 入门 | Digi-Key Electronics](https://youtu.be/8pyqbYDYkRs)
- [📝 如何为嵌入式软件构建持续集成和交付流程](https://medium.com/jumperiot/how-to-build-a-continuous-integration-and-delivery-flow-for-embedded-software-b0b5bf220a2)
- [📝 嵌入式开发中持续交付指南](https://www.embedded.com/a-guide-to-continuous-delivery-in-embedded-development/)
- [🎞️ 嵌入式系统的持续交付 • Mike Long • GOTO 2015](https://www.youtube.com/watch?v=DcFe6cEvnGQ)
- [📝 嵌入式系统持续集成和持续交付（白皮书）](https://www.parasoft.com/white-paper/ci-cd-for-embedded-systems/)
- [📝 嵌入式设备公司中的 DevOps 是什么？](https://www.linkedin.com/pulse/what-devops-embedded-device-company-john-macdonald/)
- [🎞️💎 CI/CD 教程 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLy7NrYWoggjzSIlwxeBbcgfAdYoxCIrM2)

#### 🔵 SIL / HIL 测试

软件在环（SIL）和硬件在环（HIL）测试是嵌入式系统开发中使用的两种关键技术，用于在将软件部署到真实硬件之前验证其功能和性能。这些测试方法使用软件模型或硬件仿真器模拟嵌入式系统的真实世界环境。

- [📝 硬件在环和软件在环测试](https://roboticsknowledgebase.com/wiki/system-design-development/In-Loop-Testing/)
- [🎞️ 带 HIL 测试的嵌入式 CI/CD (YouTube 播放列表)](https://youtube.com/playlist?list=PL4cGeWgaBTe1uwiqIAc6fwPzPpvgPZI2J)

#### 🔵 标准和认证

嵌入式系统开发受各种标准和认证的约束，这些标准和认证作为指南和基准，确保这些系统的质量、安全性和可靠性。这些标准通常由行业机构制定和维护，如国际电工委员会（IEC）和汽车工程师协会（SAE）。

- [📝 嵌入式开发简介：样式和标准](https://www.allaboutcircuits.com/technical-articles/embedded-programming-styles-and-standards/)
- [📝 嵌入式系统开发的安全标准和认证](https://www.linkedin.com/pulse/safety-standards-certifications-embedded-systems-development/)
- [🎞️ Microchip University - ISA/IEC 62443 标准简介](https://mu.microchip.com/an-introduction-to-the-isaiec-62443-standard)
- [🎞️ 探索 EMC 基础和标准](https://www.youtube.com/watch?v=duhBkhlH-WY)

##### 🔶 功能安全

- [🎞️👶 Microchip University - 功能安全简介](https://mu.microchip.com/introduction-to-functional-safety)
- [🎞️ Udemy – 根据 ISO 26262 的功能安全 - 速成课程](https://www.udemy.com/course/iso-26262-crash-course/)
- [📝 MISRA C 编码标准指南 - MISRA C 和 MISRA C++](https://www.perforce.com/resources/qac/misra-c-cpp)
- [📝 Jack Ganssle 的固件开发标准](http://www.ganssle.com/fsm.htm)
- [📝 安全关键嵌入式系统：如何为软件开发做准备](https://www.nagarro.com/en/blog/embedded-software-development-safety-critical-systems)
- [📝 DO-178C - 航空系统和设备认证中的软件考虑](https://en.wikipedia.org/wiki/DO-178C)

### ✳️ 嵌入式安全

嵌入式系统安全特别具有挑战性，因为资源限制和这些设备的固有性质。嵌入式系统通常在具有有限内存和处理能力的小型低功耗微控制器上运行。这使得实现与传统计算平台相同级别的安全性变得困难。此外，嵌入式系统通常对更新和补丁的访问有限，使它们更容易受到已知漏洞的影响。

- [📝 嵌入式系统安全和 TrustZone](https://embeddedsecurity.io/)

#### 🔵 硬件黑客

学习硬件黑客技术有助于安全专业人员理解嵌入式系统是如何被攻破的，从而能够设计和开发有效的防御措施来抵御网络攻击。这类知识能够显著提升嵌入式设备在面对攻击时的安全性与韧性。

- [📘💎 实用硬件渗透测试 - Jean-Georges Valle](https://a.co/d/dq4SeNH)
- [🎞️ 硬件黑客教程 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLoFdAHrZtKkhcd9k8ZcR4th8Q8PNOx7iU)
- [📘💎 硬件黑客手册：使用硬件攻击破解嵌入式安全 - Jasper van Woudenberg, Colin O'Flynn](https://a.co/d/gUIytFX)
- [🔗 官方 WiFi Pineapple 分页有效载荷仓库](https://github.com/hak5/wifipineapplepager-payloads)

#### 🔵 密码学

- [🎞️👶 Microchip University - 密码学入门](https://mu.microchip.com/cryptography-primer)
- [🎞️ 哈希、哈希算法和冲突 - 密码学 - 实用 TLS](https://youtu.be/HHQ2QP_upGM)
- [🎞️ 数据完整性 - 哈希如何用于确保数据未被修改 - HMAC - 密码学](https://www.youtube.com/watch?v=doN3lzzNEIM)
- [🎞️ 加密 - 对称加密与非对称加密 - 密码学 - 实用 TLS](https://www.youtube.com/watch?v=o_g-M7UBqI8)
- [🎞️ 公钥和私钥 - 签名和密钥交换 - 密码学 - 实用 TLS](https://youtu.be/_zyKvPvh808)
- [🎞️ 理解 AES 加密机制：BMPS](https://youtu.be/OnhtzFJW_4I)
- [📘💎 理解密码学：学生和从业者的教科书 - Christof Paar, Jan Pelzl](https://link.springer.com/book/10.1007/978-3-642-04101-3)
- [📘💎 应用密码学手册 - Alfred J. Menezes, Paul C. van Oorschot, Scott A. Vanstone](https://cacr.uwaterloo.ca/hac/)
- [📘 严肃的密码学：现代加密实用入门 - Jean-Philippe Aumasson](https://nostarch.com/seriouscrypto)
- [🎞️ MOOC - 安全第2部分：密码学基础 (YouTube 播放列表)](https://youtube.com/playlist?list=PLnMKNibPkDnFSFh57UFTZLpy-7lZiwTHh)
- [🎞️ MOOC - 安全第3部分：STM32 安全功能 (YouTube 播放列表)](https://youtube.com/playlist?list=PLnMKNibPkDnFzux3PHKUEi14ftDn9Cbm7)
- [📝 嵌入式 Linux 开发人员的加密入门](https://sergioprado.blog/introduction-to-encryption-for-embedded-linux-developers/)
- [📝 对称密钥加密的实践方法](https://sergioprado.blog/a-hands-on-approach-to-symmetric-key-encryption/)
- [📝 实践中的非对称密钥加密和数字签名](https://sergioprado.blog/asymmetric-key-encryption-and-digital-signatures-in-practice/)

#### 🔵 安全启动和安全固件更新

- [📝 AVR231：AES 引导加载程序](https://www.microchip.com/en-us/application-notes/an2462)
- [🎞️ 从闪烁到引导加载程序：裸机编程系列 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PLP29wDx6QmW7HaCrRydOnxcy8QmW0SNdQ)
- [🎞️ MOOC - 安全第4部分：STM32 安全实践 (YouTube 播放列表)](https://youtube.com/playlist?list=PLnMKNibPkDnGqh5OmQWw98ztpf9TeczbC)
- [🎞️ MOOC - 安全第5部分：如何定义您的安全需求 (YouTube 播放列表)](https://youtube.com/playlist?list=PLnMKNibPkDnGxh5OmQWw98ztpf9TeczbC)
- [🎞️ MOOC - 安全第6部分：STM32 安全生态系统，从理论到实践 (YouTube 播放列表)](https://youtube.com/playlist?list=PLnMKNibPkDnGd7J7fV7tr-4xIBwkNfD--)
- [🎞️ TPM（可信平台模块）- Computerphile](https://www.youtube.com/watch?v=RW2zHvVO09g)
- [🎞️ 使用 TPM 2.0 保护嵌入式 Linux 系统 - Philip Tricca, Intel](https://www.youtube.com/watch?v=0qu9R7Tlw9o)
- [📝 TPM：嵌入式设备的基本应用](https://witekio.com/blog/tpm-basic-applications-to-embedded-devices/)
- [📝 嵌入式 Linux 设备的 OTA：实用入门](https://interrupt.memfault.com/blog/ota-for-embedded-linux-devices)
- [📝 嵌入式 Linux 安全简介 - 第1部分](https://sergioprado.blog/introduction-embedded-linux-security-part-1/)
- [📝 嵌入式 Linux 安全简介 - 第2部分](https://sergioprado.blog/introduction-embedded-linux-security-part-2/)



### ✳️ 嵌入式 GUI

图形用户界面（GUI）已成为现代嵌入式系统不可或缺的组成部分，为与设备交互提供了用户友好和直观的方式。为嵌入式系统设计有效的 GUI 需要仔细考虑资源限制、用户体验和实时性能等因素。

- [🔗 用于单色显示的 U8glib 库，版本 2](https://github.com/olikraus/u8g2)
- [🔗 LVGL](https://lvgl.io/)
- [🔗 TouchGFX](https://support.touchgfx.com/4.20/docs/introduction/welcome)
- [🎞️ Qt / QML 简介 (YouTube 播放列表)](https://www.youtube.com/playlist?list=PL6CJYn40gN6hdNC1IGQZfVI707dh9DPRc)



### ✳️ 物联网 (IoT)

物联网（IoT）指的是互联设备的网络，这些设备收集数据并与其他设备或云交换数据。嵌入式系统通常是物联网设备的"大脑"，管理数据收集、处理和通信任务。嵌入式系统设计用于在有限的电源和资源下运行，使它们非常适合物联网应用。

- [🎞️👶💎 Microchip University - 第一个物联网项目的设计考虑](https://mu.microchip.com/design-considerations-for-your-first-iot-project)

#### 🔵 差分空中固件更新

- [📝 使用差分固件更新节省带宽](https://interrupt.memfault.com/blog/ota-delta-updates)
- [📝 差分空中设备固件更新](https://thinkty.net/projects/2023/05/07/delta_ota.html)
- [📝 FreeRTOS 差分空中更新](https://www.freertos.org/2022/01/delta-over-the-air-updates.html)
- [🔗 ESP Delta OTA](https://components.espressif.com/components/espressif/esp_delta_ota)

### ✳️ 边缘 AI

边缘 AI 指的是设备能够自行执行机器学习任务的能力，无需将数据发送到中央服务器。这可以通过使用直接嵌入设备内的小型专业 AI 模型来完成。TinyML 是边缘 AI 的一个子集，专注于为计算能力非常有限的设备（如微控制器和传感器）开发这些模型。

- [🎞️ 边缘 AI 简介：机器学习 + 物联网 – Maker.io 教程 | Digi-Key Electronics](https://www.youtube.com/watch?v=Ejld8XZmvwE)

#### 🔵 AI 和 ML 基础

- [📝 人工智能和机器学习初学者指南](https://developer.ibm.com/articles/cc-beginner-guide-machine-learning-ai-cognitive/)
- [📝👶 为编码人员提供的机器学习入门！](https://course18.fast.ai/ml)
- [📝 机器学习速成课程与 TensorFlow API - Google](https://developers.google.com/machine-learning/crash-course/)

#### 🔵 TensorFlow Lite

- [🎞️ TensorFlow 和 Keras 入门 – Maker.io | Digi-Key Electronics](https://www.youtube.com/watch?v=HCG3hFe1KYY)
- [🎞️ TensorFlow Lite 第一部分简介：唤醒词特征提取 – Maker.io | Digi-Key Electronics](https://www.youtube.com/watch?v=0fn7pj7Dutc)
- [🎞️ TensorFlow Lite 第二部分简介：语音识别模型训练 – Maker.io | Digi-Key Electronics](https://www.youtube.com/watch?v=yv_WVwr6OkI)

#### 🔵 TinyML

- [🎞️👶 TinyML 第一部分简介：在 TensorFlow 中为 Arduino 训练神经网络 | Digi-Key Electronics](https://www.youtube.com/watch?v=BzzqYNYOcWc)
- [🎞️👶 TinyML 第二部分简介：将 TensorFlow Lite 模型部署到 Arduino | Digi-Key Electronics](https://www.youtube.com/watch?v=dU01M61RW8s)
- [🎞️ Coursera - 嵌入式机器学习简介](https://www.coursera.org/learn/introduction-to-embedded-machine-learning)
- [🎞️ TinyML：TensorFlow Lite for Microcontrollers 入门 | Digi-Key Electronics](https://youtu.be/gDFWCxrJruQ)
- [🎞️ TinyML：STM32 X-CUBE-AI 入门 | Digi-Key Electronics](https://youtu.be/crJcDqIUbP4)
- [🎞️ edX - TinyML 基础](https://www.edx.org/learn/machine-learning/harvard-university-fundamentals-of-tinyml)
- [🎞️ edX - TinyML 应用](https://www.edx.org/learn/tinyml/harvard-university-applications-of-tinyml)
- [🎞️ edX - 部署 TinyML](https://www.edx.org/learn/tinyml/harvard-university-deploying-tinyml)
- [🎞️ edX -规模化 TinyML 的 MLOps](https://www.edx.org/learn/computer-programming/harvard-university-mlops-for-scaling-tinyml)
- [📘 TinyML：TensorFlow Lite 在 Arduino 和超低功耗微控制器上的机器学习 - Pete Warden, Daniel Situnayake](https://tinymlbook.com/)



### ✳️ AUTOSAR 架构

AUTOSAR，即汽车开放系统架构，是一个全球性的汽车工业软件标准。它是一种软件架构，为开发 和集成车辆电子控制单元（ECU）中的软件组件提供了标准化平台。这允许来自不同制造商的不同 ECU 能够无缝通信和协作。

- [🔗 AUTOSAR 标准](https://www.autosar.org/standards)
- [🎞️ AUTOSAR 基础 | AUTOSAR 教程 | 架构 | 汽车](https://www.youtube.com/watch?v=7b5BY1IAfwY)
- [🎞️ AUTOSAR 简介](https://www.youtube.com/watch?v=NfZI8wvgZPo)
- [🎞️ Udemy - Autosar 架构（从零开始学习与演示）](https://www.udemy.com/course/autosar-architecture/)
- [📝 OSEK OS 概述](https://www.autosartoday.com/posts/osek_os_overview)
- [💎 🔗 OSEK/VDX 操作系统规范 2.2.3](https://www.osek-vdx.org/mirror/os223.pdf)
- [💎 🔗 OSEK/VDX OIL（OSEK 实现语言）规范 2.4.1](https://www.osek-vdx.org/mirror/oil241.pdf)



### ✳️ 附录 A：高级主题

#### 🔵 离散数学

一门通用核心课程：这是一门对计算机科学学生以及部分数学和电气工程专业学生都至关重要的公共基础课程，其设置依据是[计算机协会关于 CS/CE 教育的指南](https://www.acm.org/education/curricula-recommendations)。该课程涵盖了抽象数学建模和计算理论中最为核心的内容。此外，它有助于学生建立关键的工程化思维方式，构成所有计算机科学与计算机工程领域的共同基础。然而，对于嵌入式系统工程师而言，逻辑、组合数学理论、编码理论以及计算理论是最为重要的核心科目。

**学习离散数学的目标**：嵌入式系统工程师应当根据自身的专业方向，最终掌握其中的大部分内容；因为离散数学解释了计算机工程的科学与理论基础。例如：用于音频/视频编码与解码以及数据传输的编码理论，用于事件控制和数据传输的自动机理论，用于数字电路设计和开关代数的逻辑理论，以及用于并发建模的 π 演算和自动机理论。

离散数学是一门多学期课程，涉及计算机科学理论数学基础的主题，包括但不限于：

- 逻辑（命题、量词和规范形式）。
- 公理化集合论（集合、集合运算和幂集）。
- 关系集和函数理论（即 λ 演算）。
- 组合学理论。
- 矩阵和图论。
- 计算理论（即计算自动机理论、计算复杂性、计算可判定性）。
- 自动机理论（例如，有限状态机、下推自动机、图灵机和细胞自动机）。
- 过程建模/演算（即 π 演算）。
- 编码理论。
- 除法定理模运算（数论部分）。
- [📘💎 Rosen 的离散数学及其应用](https://dl.acm.org/doi/book/10.5555/579402)
- [📘💎 Susanna S. Epp 的离散数学及其应用](https://dl.acm.org/doi/book/10.5555/1941983)
- [📘💎 开关和有限自动机理论，Cambrdige Press](https://dl.acm.org/doi/10.5555/1708070)
- [📘💎 Bernard Kolman 的离散数学结构](https://www.pearson.com/en-us/subject-catalog/p/discrete-mathematical-structures-classic-version/P200000006227/9780137538782?srsltid=AfmBOooBdohmNtq7Wu42tHwSt7lUma46hBmKjqk8XJ8NNI6sf2-4-1kg)
- [📘💎 离散数学邀请，牛津大学出版社](https://global.oup.com/academic/product/invitation-to-discrete-mathematics-9780198570431?cc=eg&lang=en&)
- [📘💎 元胞自动机的数学 by Jane Hawkins, AMS](https://bookstore.ams.org/stml-108)

## 历史

起初这只是我的个人阅读列表，但随着列表逐渐越来越大，我想为什么不与他人分享。所以我研究了当前嵌入式工程职位的招聘信息，选择了最常见的技能，并将它们包含在路线图中。为了使路线图更全面，我还添加了一些基本技能，最终得到了您现在看到的内容。

创建这个路线图的想法来自 [vazeri / Embedded-Engineering-RoadMap-2018](https://github.com/vazeri/Embedded-Engineering-RoadMap-2018)，它设计得很好但有一些缺陷且多年未更新。我采纳了那个想法，更改了路线图的结构并尝试改进它。最初的结果可以在 [m3y54m / Embedded-Engineering-Roadmap-Archived](https://github.com/m3y54m/Embedded-Engineering-Roadmap-Archived) 访问，现在已归档。路线图的早期版本是使用 [Balsamiq Wireframes](https://balsamiq.com) 创建的，它不适合这类图表。所以我决定改用 Microsoft Visio 并重新绘制了整个图表。

## 版权

本作品采用 [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) 授权，这意味着您可以自由地**共享**或**改编**本作品，但须遵守以下条款：

- **署名** — 您必须给予适当的署名，提供指向许可协议的链接，并注明是否进行了修改。您可以通过任何合理的方式履行这些要求，但不得以任何形式暗示许可方认可您或您的使用方式。

- **相同方式共享** — 如果您再编、转换或基于本作品进行创作，必须在相同的许可协议下分发您的贡献作品。

## 致谢

特别感谢我在 Twitter 上的伊朗嵌入式工程师社区和 [r/embedded](https://www.reddit.com/r/embedded) 子版块的朋友们，他们的建议帮助改进了这个路线图。

## 贡献

如果您认为这个路线图可以以任何方式改进，或者您知道一些可以添加在这里的优秀学习资源，请提出 issue 或 pull request。我将经常维护和更新此仓库。

源文件是使用 [Microsoft Visio](https://office.com/visio) 以 `.vsdx` 格式创建的，并包含在此仓库中供您贡献。如果您没有 Microsoft Visio 或想使用免费软件，可以使用 [draw.io](https://app.diagrams.net/)，它可以导入和导出 `.vsdx` 文件。