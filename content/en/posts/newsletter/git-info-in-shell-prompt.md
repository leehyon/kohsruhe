---
title: "Git Information in Shell Prompt"
date: 2023-07-21T09:28:26+08:00
draft: false
tags: ["git", "powershell", "bash", "widget", "guide"]
categories: ["Articles"]
authors:
- "leehyon"
---

## Motivation

During development, the Terminal and Git are the two indispensable tools. Personally, for tools I use frequently, I'm always thinking about how I can optimize and improve the workflow. Otherwise, even minor issues will gradually accumulate over time until they need to be addressed.

At first, I felt the Git Bash was very difficult to use, especially since common copy and paste shortcuts in Windows don't work, and my keyboard doesn't have an `Insert` key. This led to a period of very clumsy use of the right-click menu, which were hard to describe.

> This makes me think of two jokes about Linux command line operations[^1] 😅

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

[^1]: Don't try it!

Later, although I integrated the Git Bash profile into Windows Terminal, it still felt awkward having to open a separate window and navigate to the current location.

From here, my needs are simple:

- For Git repository folders, handle everything in one terminal window by default
- After entering a repo folder, automatically display some basic info like the branch name

I searched online and found there are already existing solutions for this. Here I'll summarize for both Windows PowerShell and Linux Bash.

## Solution for PowerShell

This solution uses the **posh-git** tool, detailed configuration steps can be found on the [official website](http://dahlbyk.github.io/posh-git/).

### Prerequisites

- Windows PowerShell 5.x or PowerShell Core 6.0.
- The script execution policy must be set to either `RemoteSigned` or `Unrestricted`.
- Git is installed and added to PATH environment variable

```powershell
C:\Users\koh> Get-ExecutionPolicy
RemoteSigned
C:\Users\koh> git --version
git version 2.37.3.windows.1
```

### Installation and Usage

1. Open PowerShell and enter the following commands[^2]: select A for a new install, B for update

```powershell
# (A) You've never installed posh-git from the PowerShell Gallery
PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force

# (B) You've already installed a previous version of posh-git
PowerShellGet\Update-Module posh-git
```

[^2]: Of course, you can also choose to install it using a package management tool, such as Scoop. For specific instructions, please refer to the official website tutorial.

2. After installation, enable it through:

	- Manually run `Import-Module posh-git` in each session
	- Add `Import-Module posh-git` to your profile[^3] for auto-loading (recommended)

[^3]: Using a well-configured file can make your terminal more powerful. If you are not familiar with the configuration file, you can refer to it [here](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.3).

The next time you enter a Git repository directory, your terminal will look like this:

```cmd
C:\Users\koh\repos\kohsruhe [main ≡ +4 ~3 -0 !]>
```

The content inside the square brackets is the auto Git information. It indicates that the current branch is `main` and also shows some changes in the branch, corresponding to the `git status`: 

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

## Solution for Bash

Similarly, the solution for Bash is achieved through the **bash-git-prompt** tool, and you can find the detailed configuration process in the [repository](https://github.com/magicmonty/bash-git-prompt).

### Installation and Usage

Firstly, use the following command to clone the repository into your home directory:

```bash
git clone https://github.com/magicmonty/bash-git-prompt.git ~/.bash-git-prompt --depth=1
```

> This git clone command clones the repo into a .bash-git-prompt folder in your user folder and uses --depth=1 to only pull the latest commit.

Next, add the following content to the `.bashrc` file located in your home directory (similar to PowerShell's profile file).

```bash
if [ -f "$HOME/.bash-git-prompt/gitprompt.sh" ]; then
    GIT_PROMPT_ONLY_IN_REPO=1
    source $HOME/.bash-git-prompt/gitprompt.sh
fi
```

> It sets the GIT_PROMPT_ONLY_IN_REPO variable to only use the custom prompt in folders with a Git repository, and then loads the git prompt. 

Now, reopen your Bash and navigate to a Git repository directory to see the effect.

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

For other configuration options, see the documentation [here](https://github.com/magicmonty/bash-git-prompt).