---
title: "一套简单的博客部署方案"
date: 2023-02-22T20:33:11+08:00
draft: false
tags: ["hugo", "github-pages", "blog"]
categories: ["articles"]
authors:
- "leehyon"
---

## 前言

一直尝试搭建一个博客用来写点东西，确实在读大学时了解过像 WordPress 这样的博客平台，无奈对我这种新手来说有点复杂，而且博客的更新和维护也不够优雅。直到去年无意间看到了 Pseudoyu 的一篇使用 Hugo 和 GitHub Pages 的全流程博客搭建教程，感觉简单又炫酷，便照着也建一个自己的。

本文主要内容参考 Pseudoyu 的[教程](https://www.pseudoyu.com/en/2022/05/29/deploy_your_blog_using_hugo_and_github_action/)，并对自己的搭建流程做一个记录。

### 需求及目标

- 找到一套简单易用的博客部署方案，降低博客更新和维护成本，让自己能专注内容，提高输出。
- 记录流程，避免踩坑，希望对后来者有所帮助。

### 环境准备

- 安装 git，并知道一些简单的 git 指令
- 熟悉命令行操作和使用
- 申请一个 GitHub 账号

## 使用 Hugo 搭建

开始之前先安利一下 Hugo 这个静态网站生成器，感觉挺适合个人博客和小型网站的。基于它可以使用简单的 Markdown 来写文章，如果之前熟悉 Markdown 语法能省去不少排版时间。

另外补充一点关于静态网站的知识：

>静态网站是由预先准备好的 HTML、CSS 和 JavaScript 等静态文件组成的网站，它们在服务器上保存，并在请求时直接发送给访问者的浏览器。这些文件是在构建网站时创建的，不需要服务器端代码来处理请求或生成页面内容。相比之下，动态网站需要服务器端代码来处理请求并生成页面内容。

好了，那让我们开始。

### 安装 Hugo

我用的是 Windows 的 [Scoop](https://scoop.sh/) 包管理工具来安装 Hugo，这里非常推荐 Scoop 这款工具，以后有机会可以详细聊聊。不过你也可以下载二进制文件安装，不影响。其他操作系统请参考[官方安装教程](https://gohugo.io/installation/)。

```powershell
scoop install hugo-extended
```

安装完成后，可以输入 `hugo version` 命令来验证是否安装成功。

### 创建网站

操作之前，可以先输入 `hugo help` 来查看 Hugo 的帮助文档，提前熟悉一番。

这里推荐基于主题创建，效果立竿见影，去 [Hugo Themes](https://themes.gohugo.io/) 找一款喜欢的主题，然后按教程拉取别人的模板到本地。下面以 [Den](https://themes.gohugo.io/themes/hugo-theme-den/) 主题为例，在命令行窗口逐行输入以下内容：

```shell
hugo new site my-blog 
cd my-blog 
git init 
git submodule add https://github.com/shaform/hugo-theme-den.git themes/den
echo "theme = 'den'" >> config.toml 
hugo server
```

这里会在本地建一个 `my-blog` 的文件夹，并初始化为 git 仓库，点进去会发现一些默认的文件和文件夹：

```shell
my-blog/
├── archetypes/ #包含默认的文章模板
├── content/    #包含所有网站内容，如文章、页面等
├── data/       #包含数据文件，如JSON、YAML等
├── layouts/    #包含网站的所有布局文件，如主页、文章页等
├── static/     #包含所有的静态文件，如图像、样式表等
├── themes/     #包含所有主题文件，如样式表、脚本等
└── config.toml #包含网站的配置信息，如网站名称、作者等
```

运行 `hugo server` 后，就可以在浏览器输入 `http://localhost:1313` 地址访问我们的本地预览网页了。

当然目前网页内容是空的，只包含主题样式，但你可以通过 `hugo new` 来添加新的网页文件：

```powershell
hugo new posts/my-first-post.md
```

新建的文件会在 `content/posts` 目录下，找到并使用编辑器打开，就可以使用 Markdown 语法编写文章内容了，可以添加标题、段落、列表、图像等元素。

```md
---
title: "My First Post"
date: 2023-02-19T12:08:43+08:00
draft: true
---

## Introduction 

This is **bold** text, and this is *emphasized* text. 

Visit the [Hugo](https://gohugo.io) website!

```

编辑完保存后，使用 `hugo server -D` 命令生成一遍看看效果。

> `-D` 选项表示草稿也会生成，如果文件元数据的 `draft: true` 是开着的话。

### 配置网站

开根目录下的 `config.toml` 可以对网站进行配置。一般主题会自带一个配置文件，建议在主题的配置文件上进行修改和补充。比如：

```md
# ------------------------------------- #
# ---- General Settings --------------- #
# ------------------------------------- #
baseURL = "https://example.com"
title = "Den"
theme = "hugo-theme-den"
#enableRobotsTXT = true       # generate robots.txt
enableEmoji = true           # use emoji support
hasCJKLanguage = true        # detect CJK languages for word count etc.
preserveTaxonomyNames = true # do not make tag names lowercase
# uglyURLs = true            # more info: https://gohugo.io/content-management/urls/#ugly-urls

rssLimit = 20                # limit number of entries in RSS feeds

# Copyright, appears in the footer
# copyright = ""             # default: author.name
```

到这里，一个简单的静态网站就可以生成了。但由于我们还没有配置 Github Pages 和购买域名，目前还无法部署和对外发布。

执行 `hugo` 指令，生成的静态网站文件会在根目录下的 `public/` 文件夹中。

## 使用 GitHub Pages 部署

使用 GitHub Pages 前需要一个 GitHub 账号，官网可以免费注册一个。

>GitHub Pages 是 GitHub 提供的一项服务，允许用户将静态网页托管在 GitHub 上。通过 GitHub Pages，用户可以在 GitHub 上创建一个新的代码仓库，并将其作为一个静态网站托管在互联网上。

GitHub Pages 需要新建一个 `<username>.github.io` 特殊命名格式的仓库（当然基于已有仓库的新分支也可以，后面说），其中 `<username>` 是注册的 GitHub 用户名，这样命名的仓库将被认为是我们的主页，并且 GitHub Pages 将自动使用它来托管我们的静态网站。

我们通过将 `public/` 目录初始化为 git 仓库并关联我们的 `<username>.github.io` 远程仓库来推送我们的网页静态文件。

```shell
cd public/
git init
git remote add origin git@github.com:leehyon/leehyon.github.io
git add .
git commit -m "init site"
```

仓库建立完成后，可以在设置中配置自己注册的自定义域名来指向 GitHub Pages 生成的网址。此外，需要将博客站点配置文件 `config.toml` 中的 `baseURL` 改为自己的自定义域名，这样博客站点才能正常访问 GitHub Pages 生成的网站服务。

最后通过 `git push origin master` 推送到远程仓库，稍等几分钟就可以在浏览器中输入 `https://<username>.github.io` 来查看网站了。

## 自动部署





