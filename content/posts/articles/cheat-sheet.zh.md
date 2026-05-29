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