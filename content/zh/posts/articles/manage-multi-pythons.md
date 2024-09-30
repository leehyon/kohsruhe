---
title: "Python 多版本管理"
date: 2022-12-30T21:23:55+08:00
draft: false
tags: ["python", "help"]
categories: ["Articles"]
authors:
- "leehyon"
---

## 更新

### 2024-08-28

推荐使用 `conda` 来进行多版本管理，之前的方法已不再推荐。

- `conda` 是一个包管理器和环境管理器，可以创建独立的环境，并在每个环境中安装不同版本的 Python 和其他包。
- 通过 `conda` 创建的虚拟环境是完全隔离的，不会影响全局的系统环境变量。
- `conda` 可以同时管理 Python 包和非 Python 包，例如你可能需要的 C 库或其他工具。这比单纯的 `pip` 更加强大和灵活。

## 起因

我相信很多人会遇到这样的问题，电脑装了 Python3.x，突然又要用到 Python2.x，那怎样让两者共存而又不影响各自使用呢？如果你去百度，出来的答案基本上都推荐把 `python.exe` 改个名字。

个人非常不建议这么做，虽然可能看似解决了，但是呢，先不说你这么随便改会不会影响其他功能，这种做法本身非常不优雅，而且它还破坏了程序，如果这是一种解决方案的话，Python 官方也不会 release。

所以该怎么做呢？今天我们来聊聊。

## 从安装开始说起

不知道大家在最开始安装 Python 的时候有没注意到两个选项：

- Install launcher for all users (recommended)
- Add Python to PATH

![python38-installer](https://images.kohsruhe.com/2024/python38-installer.png)

细心的你肯定发现第一个选项是默认勾选的，而且还有括弧推荐，而 “Add Python to PATH” 却没有这种待遇，这么设计官方是几个意思？而这又不得不从 PATH 变量说起。

### 关于 PATH

在 Windows 系统中，PATH 是一个特殊的环境变量，它是一个包含多个路径的字符串，每个路径之间用分号分隔。当你在命令行中输入一个可执行文件的名称时，Windows 会搜索这些路径，以找到该文件的位置，使你可以在**任何位置**运行该文件。因此，为了让操作系统能运行 Python，是有必要在安装的时候将 Python 加入 PATH 的。

但问题是，Python 不能只装一个，有时候我们会遇到开头的困境，那如何是好呢？其实很早以前官方就给出了解决方案，也就是安装界面的那个默认选项，详细介绍可以参考「[这里](https://docs.python.org/3/using/windows.html#launcher)」。

## Python 启动器

Python 启动器（launcher）也就是 `py.exe`，如果勾选第一个选项，默认安装在 `C:\Windows\` 路径下，它允许我们在多个 Python 版本之间进行选择和切换。使用启动器，可以将 Python 脚本与指定的 Python 版本一起运行，而不用考虑系统默认的 Python 版本（即添加在 PATH 中的）。此外，启动器还可以自动检测 Python 脚本中的顶行，即 `#!/usr/bin/env python` 行，并选择正确的 Python 版本来运行它。

在命令行中输入 `py --list` 会显示系统已安装的 Python 版本：

```powershell
PS C:\Users\leehyon> py --list
Installed Pythons found by C:\Windows\py.exe Launcher for Windows
 -3.9-64 *
 -3.9-32
 -2.7-64
```

假设你现在写了一个 `script.py` 脚本， 要在 Python 3.9 下运行，则可以使用以下命令：

```powershell
py -3.9 script.py
```

或者想用 Python 2.7 版本运行：

```powershell
py -2 script.py
```

当然，如果嫌麻烦，就如上面说的，在 `script.py` 代码里的顶行加入说明，比如：`#! python2`，这样就可以简化成：

```powershell
py script.py
```

## 最后

今天先聊到这，具体的用法还需自己探索，建议多看看「[官方文档](https://docs.python.org/3/contents.html)」。

另外，多认识一下环境变量，比如系统环境变量和用户环境变量，它们之间的优先级等等，有时候可以帮你解决很多问题。
