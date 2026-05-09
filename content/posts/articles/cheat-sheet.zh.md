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