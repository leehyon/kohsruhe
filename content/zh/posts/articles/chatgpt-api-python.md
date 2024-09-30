---
title: "白嫖 ChatGPT API"
date: 2023-03-06T09:47:44+08:00
draft: false
tags: ["chatgpt", "guide"]
categories: ["Articles"]
authors:
- "leehyon"
---

## 前言

近期 OpenAI 开放了 gpt-3.5-turbo，第三方开发者可以使用 API 来把 ChatGPT 整合到自己的软件和业务中去。趁着新鲜劲，把玩一下。

> ChatGPT 是一个基于 OpenAI 的 gpt-3.5-turbo 模型的云端人工智能聊天机器人，它可以进行自然语言处理和语言生成任务。gpt-3.5-turbo 模型是在 GPT-3 模型的基础上升级和改进的，具有更高的准确性和表现力，它可以自动识别语义和情感，并根据上下文生成合适的回答。

## 准备工作

在开始之前，需要进行一些准备工作。

### 账号申请

首先，确保你有 OpenAI 账号，国内用户参考「[这篇文章](https://cloud.tencent.com/developer/article/2190154)」申请一个。

账号申请成功后，去到 [Account API Keys](https://platform.openai.com/account/api-keys) 生成自己的 key。

![chatgpt-api-key](https://images.kohsruhe.com/2024/chatgpt-api-key.jpg)

> 复制保存 key 到本地安全位置，该 key 仅生成的时候出现，避免泄露，谨慎使用！

目前，OpenAI 提供 $18 的免费试用额度，以 $ 0.002 / 1000 tokens 算，大概可以白嫖 900 万个 tokens。不过需要注意的是，免费额度有时间限制，像我就到今年六月过期。

![chatgpt-trial-usage](https://images.kohsruhe.com/2024/chatgpt-trial-usage.jpg)

### 配置环境

本教程使用 Python 调用 ChatGPT-3.5-API，所以需先安装 Python，如果是 Linux 系统，确保再安装 `pip`，Windows 系统包含在 Python 安装包中，无需单独安装 `pip`。

安装好 Python 环境后，使用 `pip` 安装 `openai` 库，在命令行窗口中输入以下命令：

```powershell
pip install openai
```

如果是系统有安装多个 Python 版本，可参考「[之前文章](https://www.kohsruhe.com/zh/2022/12/manage-multi-pythons/)」使用 `py.exe` 指定 `pip` 版本安装：

```powershell
py -3 -m pip install openai
```

等 `openai` 库安装完成后，就可以写 Python 脚本调用 API 了。

## 使用 API

使用文本编辑器如 VS Code 创建一个新的 `.py` 文件，比如 `chat-demo.py`。

先导入 `openai` 模块，然后使用 `openai.Completion.create` 方法来发送请求并获取响应。可参考以下代码示例：

```python
import openai

openai.api_key="<your key>"  # 替换成你自己的 API key
messages = []
system_message = input("What type of chatbot you want me to be?\n")
messages.append({"role":"system","content":system_message})

print("Great! I am ready to be " + system_message + "!\n" + "You can now type your messages.")
message = input("")
messages.append({"role":"user","content": message})

response=openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=messages
)

reply = response["choices"][0]["message"]["content"]
print(reply)
```

最后，保存文件并在命令行中运行代码，看看效果。

```powershell
py -3 .\chat-demo.py
```

![chatgpt-demo-output](https://images.kohsruhe.com/2024/chatgpt-demo-output.png)

## 最后

这只是个简单的小例子，更多有趣的功能还待大家自己去发掘，感兴趣的可移步「[官方文档](https://platform.openai.com/docs/api-reference/making-requests)」查看详细用法。

## 参考

- [API Reference - OpenAI API](https://platform.openai.com/docs/api-reference/introduction)
