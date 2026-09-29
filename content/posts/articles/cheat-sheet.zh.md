---
title: "速查表"
date: 2026-05-08T15:16:27+08:00
draft: false
tags: ["cheat", "cli"]
categories: ["notes"]
authors:
- "leehyon"
---

## PowerShell

```powershell
Install-Module PSReadLine -Scope CurrentUser -Force # 安装 PSReadLine
Get-InstalledModule # 显示所有通过 Install-Module 安装的模块
Uninstall-Module -Name PSReadLine # 卸载 PSReadLine
```

## WSL

```powershell
wsl --install                   # 安装 WSL 需要管理员权限
wsl --update                    # 更新 WSL
wsl --status                    # 查看 WSL 状态
wsl --list --online             # 查看可安装的发行版
wsl -l -v                       # 列出已安装的发行版
wsl --shutdown                  # 停止所有发行版
wsl --install -d Ubuntu-24.04   # 安装发行版
wsl --unregister Ubuntu-24.04   # 卸载发行版
```

## Docker

```bash
# 容器
docker ps # 列出运行中的容器
docker ps -a # 列出所有容器（包括已停止）
docker rm container_id # 删除已停止的容器
docker container prune # 清理所有已停止的容器
docker exec -it container_id bash # 进入容器 bash（推荐）
docker logs container_id # 查看容器日志
docker logs -f container_id # 实时跟踪日志
# 镜像
docker images # 列出本地所有镜像
docker rmi image_id # 删除镜像
docker image prune # 清理悬空镜像（未标记的）
# Docker Compose
docker compose up # 启动服务（前台）
docker compose up -d # 后台启动服务
docker compose down # 停止并删除容器、网络
docker compose down -v # 同时删除数据卷
docker compose restart # 重启所有服务
```
> docker compose 是新一代官方推荐用法，docker-compose 是旧的独立工具（已逐步淘汰）

## Homebrew

```bash
brew list             # 查看已安装的软件
brew update           # 更新 Homebrew 本身和软件源
brew upgrade          # 升级所有已安装软件
brew upgrade <pkg>    # 升级指定软件
brew cleanup          # 清理旧版本和缓存
brew uninstall <pkg>  # 卸载软件
brew outdated         # 查看可升级软件
brew pin <pkg>        # 锁定版本，不升级
brew unpin <pkg>      # 取消锁定
```

## Linux

```bash
# find
sudo find / -type d -name ota # 从系统根目录开始，只查找目录，精确搜索
sudo find / -type d -iname ota # 大小写不敏感查找
sudo find / -type d -name "*ota*" # 模糊匹配
find . -type d -name ota # 当前目录查找
find . -type f -name "*ota*" # 查找文件

du -sh * # 查看当前目录下各子目录大小

# tmux
tmux new -s name            # 创建会话
tmux ls                     # 列出会话
tmux attach -t name         # 进入会话
tmux detach                 # 退出
tmux kill-session -t name   # 删除会话

# ttyd 把终端通过 WebSocket 暴露成网页终端的工具
ttyd -p 9000 bash # -p 监听端口

# 查看库架构
file libqcdplatform.so 
# 查看库的导出接口
readelf -s libqcdplatform.so | grep "FUNC" | grep "GLOBAL"
# 查看库的依赖
readelf -d libqcdplatform.so | grep NEEDED
# nm -D 命令提取了 libqcdplatform.so 的非未定义符号（即该库导出的函数 / 变量）
nm -D libqcdplatform.so | grep -v "U"
```

## Hermes

```bash
hermes --continue             # Resume the most recent CLI session (-c)
hermes --resume <session_id>  # Resume a specific session by ID (-r)
hermes --tui -c               # Resume the latest TUI session

hermes sessions list
hermes sessions stats
# 导出会话历史
hermes sessions export history.jsonl
hermes sessions export history.html --format html
```

## Keyboard shortcuts

> 以下按使用场景和记忆顺序整理：先记系统与窗口，再记文件、编辑和截图。

### Windows

```shell
# 系统与窗口：Tab 切换，D 显示桌面，方向键调整窗口
Win + Tab               # 打开任务视图
Win + D                 # 显示或隐藏桌面
Win + E                 # 打开文件资源管理器
Win + A                 # 打开快速设置
Win + N                 # 打开通知中心和日历
Win + X                 # 打开快速链接菜单
Win + L                 # 锁定电脑
Win + R                 # 打开“运行”
Win + I                 # 打开“设置”
Win + ↑                 # 最大化窗口
Win + ↓                 # 还原或最小化窗口
Win + ← / →             # 将窗口贴靠到屏幕左侧或右侧
Win + Ctrl + D          # 新建虚拟桌面
Win + Ctrl + ← / →      # 切换虚拟桌面
Win + Ctrl + F4         # 关闭当前虚拟桌面

# 文件管理：E 打开资源管理器，L 定位路径，N 新建目录
Alt + ↑                 # 返回上一级目录
Alt + ← / →             # 后退或前进
Ctrl + L                # 定位到地址栏
Ctrl + Shift + N        # 新建文件夹
F2                      # 重命名选中项目
F5                      # 刷新
Delete                  # 移入回收站
Shift + Delete          # 永久删除
Ctrl + C / X / V        # 复制 / 剪切 / 粘贴
Ctrl + Z / Y            # 撤销 / 重做

# 文本编辑：Shift 选择，Ctrl 按单词移动
Ctrl + 方向键           # 按单词移动光标
Shift + 方向键          # 连续选择文本
Ctrl + Shift + 方向键   # 按单词选择文本

# 截图与工具：Shift + S 截图，V 访问剪贴板
Win + Shift + S         # 打开截图工具
Win + V                 # 打开剪贴板历史记录
Win + .                 # 打开表情符号和特殊字符面板
Win + Space             # 切换输入法或键盘布局
Win + P                 # 切换投影或多显示器模式
Win + G                 # 打开 Xbox 游戏栏

# 通用操作：Alt 切换窗口，Ctrl 管理当前应用
Alt + Tab               # 切换窗口
Alt + F4                # 关闭当前窗口或应用
Ctrl + Shift + Esc      # 打开任务管理器
Ctrl + W                # 关闭当前标签页或文档
Ctrl + T                # 新建标签页
Ctrl + Shift + T        # 恢复最近关闭的标签页
Ctrl + Tab              # 切换到下一个标签页
```