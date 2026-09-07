---
title: "在关于页加了一张旅行地图"
date: 2026-09-01T10:00:00+08:00
draft: false
tags: ["hugo", "amap", "blog", "cloudflare"]
categories: ["notes"]
authors:
- "leehyon"
---

「关于」页之前只有两段自我介绍和一个联系邮箱，总觉得单调。加上这几年走过的地方不少，做个地图应该比一行行列地名更直观。

参考的是 [QP's Blog](https://www.szqp.site/travel) 的旅行地图，看起来很清爽：一堆小绿点散在中国地图上，点开有备注。效果我喜欢。

## 选型

本来想用 Leaflet + OpenStreetMap，零成本、无需 API key，但中国境内的道路和 POI 数据实在粗略，去过的小地方基本查不到。高德的数据最贴近国内出行实际，而且 JS API v2.0 的渲染质量比早年 v1.4 提升明显。代价是要注册开发者账号、申请 Web 端 JS API 的 Key，并且每个 Key 还要绑定域名白名单。

Key 准备好之后，剩下的工作其实不复杂。

## 数据驱动

旅行数据单独放在 `data/travel.yaml`，每条记录包含城市名、经纬度、访问时间、可选备注：

```yaml
- name: Karlsruhe
  lng: 8.403653
  lat: 49.006889
  visited: 2017-09
  note: KIT 求学两年半,Frankstr. 宿舍窗前那棵大栗子树年年开花。
```

新增一个城市就在文件末尾追加一条，`hugo` 重新 build 后地图自动多一个绿点。经纬度用高德的[坐标拾取器](https://lbs.amap.com/console/show/tools)搜地点拿就行。

这样比把坐标硬编码在 HTML 里舒服得多：换主题、改样式、加城市都不用碰 JS。

## Hugo Shortcode

为了让以后别的页面也能复用，写了一个 `{{< amap >}}` shortcode。它从 `data/travel.yaml` 读出城市列表，渲染成一个 map 容器加一份 JSON payload，后面的渲染逻辑交给一个独立 JS 文件。

```go-html-template
<div id="amap-container" class="amap-container"></div>
<script type="application/json" id="amap-travel-data">
  {{- $travel | jsonify -}}
</script>
```

页面正文里只写一行 `{{< amap >}}` 就能拿到完整地图。

## 渲染

地图本身的逻辑用一个 IIFE 包起来，关键几步：

1. 解析 JSON payload。`Hugo jsonify` 模板输出的 JSON 字符串放在 `<script type="application/json">` 里时，`.textContent` 会拿到外层带引号的字符串，需要 `JSON.parse` 两次。
2. 每个城市创建 `AMap.Marker`，`content` 字段直接传一段 HTML 字符串（24px 绿圆点 + 白边）。这比传图片图标更灵活，CSS 全 inline，不依赖外部样式表。
3. 计算所有 markers 的边界，`map.setFitView` 自动框选到合适缩放。
4. 点击 marker 弹 `InfoWindow` 显示城市名、访问时间、备注。

为了避免每个 marker 都重复字符串拼接，加了一个 `visitCount` 字典，同一城市多次访问时显示一个红色小角标。

## 几个踩过的坑

**`marker.getContent()` 的调用时机。** 如果在 `map.add(marker)` 之前调用，AMap 会把这个 DOM 节点从模板容器搬到 marker 的内部状态，等真正 add 的时候反而渲染不出来。必须先 `map.add(marker)`，再 `getContent()` 拿 DOM 绑定 hover 事件。

**AMap.Text 插件不要用。** 文档里推荐用 `Marker.content` 自定义 HTML 标签，但 `AMap.Text` 在 v2.0 里其实是个旧版遗留物，CDN 默认 bundle 不打包，即使在 `plugin=` 列表里声明了也会 silently render blank。换成 `Marker.content` 一次过。

**Cloudflare Pages 部署时 Key 的处理。** 之前把 Key 写死在 `hugo.toml` 里，后来发现不太安全——`toml` 进 git 历史后无法撤回。改成读取 `HUGO_AMAP_KEY` 环境变量，Cloudflare Pages 在 dashboard 里配成 Secret，本地开发用 `hugo.toml` 兜底。两边都能用，key 不进 git。

## 控件

右上角放了四个 36×36 的小按钮：[+]/[−] 缩放、全屏、重置视图。AMap 原生 ToolBar 会渲染一个竖排控件，但我希望四个按钮并排且视觉风格统一（白底圆角卡片），所以自己画了一套。AMap.ToolBar 实例仍然挂在地图上，只是它的 DOM 被 `display:none` 隐藏了，`map.zoomIn()` / `map.zoomOut()` 这些 API 还是照常工作。

高德地图的 logo 和版权信息按官方要求**不能**删除，但位置可以微调。原本两个元素都在左下角，文字基线又对不齐（logo 是 PNG 图，版权是 inline 文字），看着很别扭。改成 logo 在左上角、版权在左下角，干净利落，也不违反协议第 7.7 条的归属要求。

## 结果

地图在 `/zh/about/` 和 `/en/about/` 都能看到。点击绿色圆点会弹一个小窗显示城市名、访问时间、备注。控件在右边缩放 / 全屏 / 重置。

数据写文件，加新城市 re-deploy 就行。如果哪天去一个新的地方，回来加一条 YAML，等几分钟就是一张新图。

这种「写一次配置，自动渲染成可视化的页面」的小工程，是我喜欢 Hugo 的一个具体理由。
