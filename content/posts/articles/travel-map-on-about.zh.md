---
title: "给博客加了一张旅行地图"
date: 2026-09-07T17:10:50+08:00
draft: false
tags: ["amap", "blog", "setup"]
categories: ["notes"]
authors:
- "leehyon"
---

「关于」页之前只有干巴巴的文字介绍，总觉得单调，便补了一张旅行地图，标记一下自己去过的地方。

> 本功能是 Vibe 出来的，用的是 MiniMax M3 模型。

## 准备工作

去年在做婚礼请帖时，也就是「[👩‍❤️‍👨 我们结婚啦](https://wedding.kohsruhe.com/)」这个站点，有用过高德地图的 API，所以这次还是用它。如果你是第一次接入，要先去 [高德开放平台](lbs.amap.com) 注册开发者账号、申请 Web 端 JS API 的 Key。

Key 准备好之后，剩下的工作就交给 AI 了。

## 数据驱动

旅行数据单独放在 `data/travel.yaml`，每条记录包含城市名、经纬度、访问时间、可选备注：

```yaml
- name: Karlsruhe
  lng: 8.403653
  lat: 49.006889
  visited: 2016-04
  note: KIT 求学岁月
```

新增一个城市就在文件末尾追加一条，`hugo` 重新 build 后地图自动多一个绿点。

## Hugo Shortcode

为了让以后别的页面也能复用，写了一个 `amap` shortcode。它从 `data/travel.yaml` 读出城市列表，渲染成一个 map 容器加一份 JSON payload，后面的渲染逻辑交给一个独立 JS 文件。

```html
<div id="amap-container" class="amap-container"></div>
<script type="application/json" id="amap-travel-data">
  {{- $travel | jsonify -}}
</script>
```

## 渲染

地图本身的逻辑用一个 IIFE 包起来，关键几步：

1. 解析 JSON payload。`Hugo jsonify` 模板输出的 JSON 字符串放在 `<script type="application/json">` 里时，`.textContent` 会拿到外层带引号的字符串，需要 `JSON.parse` 两次
2. 每个城市创建 `AMap.Marker`。`content` 字段直接传一段 HTML 字符串（24px 绿圆点 + 白边）
3. 计算所有 markers 的边界，`map.setFitView` 自动框选到合适缩放
4. 点击 marker 弹 `InfoWindow` 显示城市名、访问时间、备注

为了避免每个 marker 都重复字符串拼接，加了一个 `visitCount` 字典，同一城市多次访问时显示一个红色小角标。

## 结论

之前把 Key 写死在 `hugo.toml` 里，后来发现不太安全，改成读取 `HUGO_AMAP_KEY` 环境变量，同时在 Cloudflare Pages 里配成 Secret，本地开发用 `hugo.toml` 测试。

地图在「[关于](https://www.kohsruhe.com/zh/about/)」页都能看到。点击绿色圆点会弹一个小窗显示城市名、访问时间、备注。

目前只是实现了功能，实际去过的地方还要再整理，有些地方确实年代久远，一时半会儿想不起来。