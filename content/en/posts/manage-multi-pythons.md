---
title: "Managing Multiple Pythons"
date: 2022-12-30T21:23:55+08:00
draft: false
tags: ["python", "help"]
categories: ["tech"]
authors:
- "leehyon"
---

## Why

I believe that many people may encounter the following problem: their computer has Python3.x installed, but suddenly they need to use Python2.x. How can they make both versions coexist without interfering with each other? If you search on Baidu, most of the answers recommend renaming the `python.exe` file.

I personally do not recommend this approach. Although it may seem like a quick solution, it has the potential to negatively impact other functionalities on the computer. Furthermore, this method is not elegant and can actually damage the program. If this were a valid solution, it would have been officially released by the Python organization.

So, what should you do instead? Let's discuss today.

## From the installation process

I wonder if you've noticed the two options during the initial installation of Python:

- Install launcher for all users (recommended)
- Add Python to PATH

![](https://kohsruhe-images.oss-cn-shanghai.aliyuncs.com/images/python38-installer.png)

If you were paying attention, you might have noticed that the first option is pre-selected by default, and it is even recommended in parentheses. However, 'Add Python to PATH' does not receive the same treatment. What does this design choice by the official team imply? To answer this question, we must first talk about the PATH variable.

### About PATH

In Windows systems, PATH is a special environment variable that is a string containing multiple paths separated by semicolons. When you type the name of an executable file in the command prompt, Windows searches for the file in these paths to locate its location, allowing you to run the file from **anywhere**. Therefore, it is necessary to add Python to PATH during installation to enable the operating system to run Python.

The issue is that we cannot simply install one version of Python, and sometimes we encounter the problem mentioned earlier. So, what can we do about it? In fact, the official team provided a solution a long time ago, which is the default option during installation. For more details, you can refer to [this link](https://docs.python.org/3/using/windows.html#launcher).

## Python launcher

The Python launcher, also known as `py.exe`, is installed by default in the `C:\Windows\` directory if the first option is selected during installation. It allows us to choose and switch between multiple versions of Python. Using the launcher, we can run Python scripts with a specific version of Python without having to worry about the system's default Python version (i.e., the one added to PATH). Additionally, the launcher can automatically detect the shebang line in a Python script, such as `#!/usr/bin/env python`, and select the correct Python version to run it.

Entering `py --list` in the command line will display the Python versions that are installed on the system:

```powershell
PS C:\Users\leehyon> py --list
Installed Pythons found by C:\Windows\py.exe Launcher for Windows
 -3.9-64 *
 -3.9-32
 -2.7-64
```

Assuming you have written a script called `script.py` that you want to run under Python 3.9, you can use the following command:

```powershell
py -3.9 script.py
```

Or if you want to run the script using Python 2.7 instead, you can use the following command:

```powershell
py -2 script.py
```

Of course, if you find the above commands too cumbersome, you can simplify the process by adding an explanation in the shebang line of the `script.py` code. For example, adding `#! python2` at the beginning of the script will allow you to run the script using Python 2 by simply typing `script.py` in the command prompt.

```powershell
py script.py
```

>However, note that the shebang line may not be recognized on Windows systems, so it's generally safer to use the `py` launcher to specify the version of Python to use.

## Last

We'll stop here for today. To learn more about specific usage, I suggest exploring the [official documentation](https://docs.python.org/3/contents.html) on your own.

In addition, it's recommended to familiarize yourself with environment variables, such as system and user environment variables, and their priorities. This knowledge can help you solve many problems in development and debugging.