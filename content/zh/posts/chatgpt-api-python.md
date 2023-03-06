---
title: "使用 Python 调用 ChatGPT API"
date: 2023-03-06T09:47:44+08:00
draft: false
tags: ["chatgpt", "guide"]
categories: ["tech"]
authors:
- "leehyon"
---

⭕ 以下部分内容基于必应生成。

>ChatGPT 是一个基于 OpenAI 的 gpt-3.5-turbo 模型的云端人工智能聊天机器人，它可以进行自然语言处理和语言生成任务。gpt-3.5-turbo 模型是在 GPT-3 模型的基础上升级和改进的，具有更高的准确性和表现力，它可以自动识别语义和情感，并根据上下文生成合适的回答。

近期 OpenAI 开放了 gpt-3.5-turbo，注册用户可以随意调用 API。

## 准备工作

在开始之前，需要进行一些准备工作。

确保你有 OpenAI 账号，国内用户参考[这篇文章](https://cloud.tencent.com/developer/article/2190154)申请一个。

账号申请成功后，去到 [Account API Keys](https://platform.openai.com/account/api-keys) 生成自己的 API Key。

![](https://kohsruhe-images.oss-cn-shanghai.aliyuncs.com/images/gpt-api-key.jpg)

>复制保存 key 到本地安全的地方，仅生成的时候出现一次，避免泄露，谨慎使用。

## 配置环境

本教程使用 Python 调用 ChatGPT-3.5-API，所以需先安装 Python，如果是 Linux 系统，确保有安装 pip。

然后安装 OpenAI 的 Python 库，在终端中输入以下命令：

```powershell
pip install openai
```

接下来就可以使用 Python 写代码了。

## 使用 API

创建新的 `.py` 文件，比如 `openai-demo.py`，先导入 openai 模块，然后使用 `openai.Completion.create` 方法来发送请求并获取响应。可参考以下代码示例：

```python
import openai
openai.api_key = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" # 替换成你自己的 API key
response = openai.Completion.create(
  engine="gpt-3.5-turbo",
  prompt="你好，我是一个聊天机器人。",
  max_tokens=50,
  temperature=0.9,
  frequency_penalty=0,
  presence_penalty=0.6,
  stop=["\n"]
)
print(response["choices"][0]["text"])
```

最后，使用 IDE 或直接在命令行中运行代码：

```powershell
python openai-demo.py
```

## 模型优势

gpt-3.5-turbo 模型有以下几个优势：

- 它在 GPT-3 的基础上增加了额外的功能和参数，因此它比 GPT-3 更为强大，在各种 NLP 任务中都能获得更高的精度和更好的表现。
- 它具备更高的效率和更快的处理速度，这使得它在实际应用场景中更为实用。
- 它可以自动识别语义和情感，并根据上下文生成合适的回答。
- 它还可以用于一些需要深度学习模型支持的领域，如计算机视觉、语音识别等。
- 它的价格比现有的 GPT-3.5 模型便宜 10 倍，每 1000 个 tokens 只需 0.002 美元。

