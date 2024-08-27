---
title: "在 Shell 中自动提示 Git 信息"
date: 2023-07-21T09:28:26+08:00
draft: false
tags: ["git", "powershell", "bash", "widget", "guide"]
categories: ["Tech"]
authors:
- "leehyon"
---

## 背景

开发过程中，终端和 Git 是唯二两个离不开的工具。个人而言，那些经常使用的东西，总想着有什么地方是可以优化和改进的，要不然即使是一些不痛不痒的点也会在日积月累中被逐渐放大，以待解决。

最开始是觉得 Git Bash 很难用，特别是像 Windows 常用的复制拷贝快捷键无效，而自己的键盘又没 `Insert` 键，导致一度很不优雅的使用鼠标右键菜单，一言难尽的步骤。

> 这里想到一个关于 Linux 命令行操作的笑话两则，实践[^1]出真知哈 😅

```bash
rm ./*
rm -rf /*
^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C
```

```bash
git add .
git commit
^C^C^D^D^X^X^X^Z^Z^Zexit.exitexit()^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C^C
```

[^1]: 不要轻易尝试第一条！

后来即使把 Git Bash 整合进了 Windows Terminal 但还是感觉别捏，毕竟需另起一个窗口，还要定位到当前位置。

到这里，可以看出我的诉求很简单：

- 对于 Git 仓库文件夹，默认一个终端窗口解决
- 进入仓库文件夹后能自动提示一些简单信息，比如分支名等

网上搜了下，其实已经造好轮子了，这里我会对 Windows 的 PowerShell 和 Linux 的 Bash 做一个整理。

## 针对 PowerShell 的方案

该方案是通过 **polish-git** 工具实现的，详细配置过程可前往[官网](http://dahlbyk.github.io/posh-git/)查阅。

### 先决条件

- PowerShell 5.x 或 PowerShell Core 6.0
- 脚本执行策略需设置成 `RemoteSigned` 或 `Unrestricted`
- 已安装了 Git 并加入 PATH 环境变量

```powershell
C:\Users\koh> Get-ExecutionPolicy
RemoteSigned
C:\Users\koh> git --version
git version 2.37.3.windows.1
```

### 安装和使用

1. 打开 PowerShell 并输入以下命令[^2]：全新安装选 A，更新选 B

```powershell
# (A) You've never installed posh-git from the PowerShell Gallery
PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force

# (B) You've already installed a previous version of posh-git
PowerShellGet\Update-Module posh-git
```

[^2]: 当然你也可以选择包管理工具安装，比如 Scoop，具体参考官网教程。

2. 安装完成后，通过以下方式启用：

	- 在每一次 session 中手动输入 `Import-Module posh-git` 命令 
	- 添加 `Import-Module posh-git` 到配置文件[^3]，自动载入（推荐）

[^3]: 用好配置文件能让你的终端如虎添翼，不清楚的配置文件的参考[这里](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.3)。

这样，下一次进入一个 Git 仓库目录时，你的终端就会变成这样子：

```cmd
C:\Users\koh\repos\kohsruhe [main ≡ +4 ~3 -0 !]>
```

方括号内的内容即为自动提示的 Git 信息，表示当前所在的分支为 `main`，同时还提示了分支的一些变更，对应的 `git status` 为：

```bash
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   content/en/posts/newsletter/weekly-review-230716.md
        modified:   content/zh/about.md
        modified:   content/zh/posts/newsletter/weekly-review-230716.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        content/en/posts/productivity/
        content/en/posts/tech/
        content/zh/posts/productivity/
        content/zh/posts/tech/

no changes added to commit (use "git add" and/or "git commit -a")

```

## 针对 Bash 的方案

同样的，针对 Bash 的方案是通过 **bash-git-prompt** 工具实现的，详细配置过程可前往[仓库](https://github.com/magicmonty/bash-git-prompt)查看。

### 安装和使用

首先，使用以下命令克隆仓库到你的用户主目录：

```bash
git clone https://github.com/magicmonty/bash-git-prompt.git ~/.bash-git-prompt --depth=1
```

> 该命令将仓库保存到你用户主目录下的 .bash-git-prompt 文件夹，拉取最新的一次 commit。

然后，添加以下内容到你用户目录下的 `.bashrc` 文件（类比 PowerShell 的 profile 文件）

```bash
if [ -f "$HOME/.bash-git-prompt/gitprompt.sh" ]; then
    GIT_PROMPT_ONLY_IN_REPO=1
    source $HOME/.bash-git-prompt/gitprompt.sh
fi
```

> GIT_PROMPT_ONLY_IN_REPO 变量设置为仅在包含 Git 仓库的文件夹中使用提示。

现在，重新打开 Bash 窗口并切换到一个 Git 仓库目录，即可看到效果。

```bash
koh@aliyunecs:~$ git clone https://github.com/magicmonty/bash-git-prompt.git \
                 ~/.bash-git-prompt --depth=1
Cloning into '/home/koh/.bash-git-prompt'...
remote: Enumerating objects: 63, done.
remote: Counting objects: 100% (63/63), done.
remote: Compressing objects: 100% (55/55), done.
remote: Total 63 (delta 21), reused 22 (delta 7), pack-reused 0
Unpacking objects: 100% (63/63), done.
koh@aliyunecs:~$ nano .bashrc
# restart Bash 
koh@aliyunecs:~/dev/oax4600-linux-sdk/SourceCode$ cd OAX4600_linux/
✔ ~/dev/oax4600-linux-sdk/SourceCode/OAX4600_linux [main|✔]
19:50 $
```

有关其他配置选项，请参考[仓库文档](https://github.com/magicmonty/bash-git-prompt)。



