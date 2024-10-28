---
title: "[译] 什么是 YOLOv8？一份完全指南"
date: 2024-10-24T18:04:58+08:00
draft: false
tags: ["yolo", "reading", "object-detection", "translation"]
categories: ["Articles"]
authors:
- "leehyon"
---

✨ **AI 摘要**

YOLOv8 是计算机视觉领域的一种新型模型，由 Ultralytics 开发，用于对象检测、图像分类和实例分割任务。它是 YOLO 系列模型的迭代版本，继承了 YOLOv5 的许多特点，并在架构和开发者体验方面进行了多项改进。YOLOv8 的特点包括更高的准确度、对开发者更友好的界面以及强大的社区支持。此外，YOLOv8 在 COCO 基准测试中表现出色，且在 Roboflow 100 基准测试中优于先前的模型。YOLOv8 的架构包括无锚点检测、新的卷积方式以及改进的训练流程。此外，YOLOv8 还提供了命令行界面和 Python 包，方便开发者使用。

> Original: [What is YOLOv8? A Complete Guide](https://blog.roboflow.com/what-is-yolov8/) - Jacob Solawetz, Francesco. (Sep 4, 2024). 

![what-is-yolov8](https://images.kohsruhe.com/tech/what-is-yolov8.png)

---

## 前言

计算机视觉领域随着 [YOLOv8](https://github.com/ultralytics/ultralytics?ref=blog.roboflow.com) 的发布而进步，这是一个在 [目标检测](https://blog.roboflow.com/object-detection/)、[实例分割](https://blog.roboflow.com/instance-segmentation-roboflow/) 和 [图像分类](https://blog.roboflow.com/image-classification/) 任务中定义了新的技术状态的模型。除了改进模型架构本身，YOLOv8 通过一个 PIP 包为开发人员引入了一个新的友好界面来使用 YOLO 模型。

在这篇文章中，我们将深入探讨 YOLOv8 在计算机视觉世界中的重要性，将其与类似模型在准确性上的比较，并讨论最近 YOLOv8 GitHub 仓库中发生的变化。

如果你想学习如何训练或使用特定的 YOLOv8 模型，我们有专门的帖子可以帮助你：

- [训练 YOLOv8 物体检测模型](https://blog.roboflow.com/how-to-train-yolov8-on-a-custom-dataset/)
- [训练 YOLOv8 姿态估计（关键点检测）模型](https://blog.roboflow.com/train-a-custom-yolov8-pose-estimation-model/)
- [训练 YOLOv8 定向边界框 (OBB) 模型](https://blog.roboflow.com/train-yolov8-obb-model/)
- [训练 YOLOv8 分类模型](https://blog.roboflow.com/how-to-train-a-yolov8-classification-model/)
- [训练 YOLOv8 分割模型](https://blog.roboflow.com/how-to-train-yolov8-instance-segmentation/)

你可以通过 Roboflow 提供的 [app](https://app.roboflow.com/workflows/embed/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3b3JrZmxvd0lkIjoiT283c3VtVk80UUJjTkxkVjJTQnciLCJ3b3Jrc3BhY2VJZCI6ImtyT1RBYm5jRmhvUU1DZExPbGU0IiwidXNlcklkIjoiVTdBRDJNeGgzOU43alEzQjZjUDh4QXl1ZkxIMyIsImlhdCI6MTcyNjc1MzExOX0.ZFV8F3C_bngfmYGBRVUBRPcYfcrdVvGfFmoe1uZI3wI) 来快速上手 YOLOv8 模型：

![roboflow-yolov8](https://images.kohsruhe.com/tech/roboflow-yolov8.png)

在上面的工作流程中，你可以拖放一个动物的图像，系统将使用 YOLOv8 模型检测动物的存在。你也可以看看该模型与零样本模型 YOLO-World 的比较。

## 什么是 YOLOv8

YOLOv8 是最新的 YOLO 模型，可用于目标检测、图像分类和实例分割任务。YOLOv8 是由 Ultralytics 开发的，他们也创建了有影响力和行业定义性的 [YOLOv5](https://blog.roboflow.com/how-to-train-yolov5-on-a-custom-dataset/) 模型。YOLOv8 在 YOLOv5 基础上进行了许多架构和开发体验上的改进。

截至撰写本文章时，YOLOv8 仍在积极开发中，Ultralytics 正在研究新功能并响应社区反馈。实际上，当 Ultralytics 发布一个模型时，它会享受长期支持，该组织与社区合作，使模型变得尽可能好。

## YOLO 如何发展成 YOLOv8

[YOLO (You Only Look Once)](https://blog.roboflow.com/guide-to-yolo-models/) 系列模型在计算机视觉界变得非常有名。YOLO 的名气归功于其在保持小模型大小的同时具有相当高的准确性。YOLO 模型可以在单个 GPU 上训练，这使其对广泛的开发人员可访问。机器学习从业者可以在边缘硬件或云中以低成本进行部署。

自 2015 年 Joseph Redmond 首次推出以来，YOLO 一直受到计算机视觉社区的关注。在早期（1-4 版），YOLO 保持在由 Redmond 编写的名为 [Darknet](https://blog.roboflow.com/training-yolov4-on-a-custom-dataset/) 的自定义深度学习框架中。

YOLOv8 作者 Glenn Jocher 在 Ultralytics 中，当时在 [YOLOv3 repo in PyTorch](https://blog.roboflow.com/training-a-yolov3-object-detection-model-with-a-custom-dataset/) 中作为影子仓库进行训练。随着影子仓库中的训练越来越好，Ultralytics 最终发布了他们自己的模型：[YOLOv5](https://blog.roboflow.com/how-to-train-yolov5-on-a-custom-dataset/)。YOLOv5 很快成为全球技术状态仓库，得益于其灵活的 Python 结构。该结构允许社区发明新的建模改进并通过类似的 PyTorch 方法快速分享。

除了强大的模型基础，YOLOv5 的维护者致力于支持围绕模型的健康软件生态系统。他们积极修复问题，并根据社区需求推动仓库能力。

在过去两年中，各种模型从 YOLOv5 PyTorch 仓库分支出来，包括 [Scaled-YOLOv4](https://roboflow.com/model/scaled-yolov4?ref=blog.roboflow.com)、[YOLOR](https://blog.roboflow.com/train-yolor-on-a-custom-dataset/) 和 [YOLOv7](https://blog.roboflow.com/yolov7-breakdown/)。其他模型在全世界范围内从他们自己的 PyTorch 实现中出现，如 [YOLOX](https://blog.roboflow.com/how-to-train-yolox-on-a-custom-dataset/) 和 [YOLOv6](https://blog.roboflow.com/how-to-train-yolov6-on-a-custom-dataset/)。在此期间，每个 YOLO 模型都带来了新的技术状态技术，继续推动模型的准确性和效率。

在过去的六个月中，Ultralytics 正在研究 YOLO 的最新技术状态版本 YOLOv8。YOLOv8 于 2023 年 1 月 10 日发布。

## 为什么要使用 YOLOv8

以下是你应考虑在下一个计算机视觉项目中使用 YOLOv8 的几个主要原因：

1. YOLOv8 在 [Microsoft COCO](https://universe.roboflow.com/microsoft/coco?ref=blog.roboflow.com) 和 [Roboflow 100](https://www.rf100.org/?ref=blog.roboflow.com) 上具有很高的准确率。
2. YOLOv8 提供了许多开发人员方便的功能，从易于使用的 CLI 到结构良好的 Python 包。
3. YOLO 和日益增长的 YOLOv8 模型周围有一个庞大的社区，这意味着在你需要指导时计算机视觉圈内有许多人可以帮助你。

YOLOv8 在 COCO 上达到了很高的准确性。例如，中型模型 YOLOv8m 在 COCO 上测量时达到了 50.2% mAP。当与 Roboflow 100 对比时，一个专门评估模型在各种任务特定领域上性能的数据集，YOLOv8 比 YOLOv5 表现得好得多。我们在文章后面提供了更多关于此的详细信息。

此外，YOLOv8 提供的开发人员方便功能意义重大。与其他将任务分布在多个不同 Python 文件中，可以执行的模型不同，YOLOv8 提供了一个使训练模型更直观的 CLI。这是对以前模型中更为无缝编码体验 Python 包的补充。

在考虑要使用的模型时，YOLO 周围的社区是值得注意的。许多计算机视觉专家都知道 YOLO 及其工作原理，并且在线上有很多关于实际使用 YOLO 的指导。尽管 YOLOv8 写这篇文章时还很新，但在线上已有许多指南可以提供帮助。

让我们深入研究架构，了解是什么使 YOLOv8 与以前的 YOLO 模型不同。

## YOLOv8 架构：深入探讨

YOLOv8 目前尚无已发布的论文，因此我们缺乏其创建过程中直接研究方法和消融研究的直接见解。不过，我们分析了关于模型的仓库和可用信息，以开始记录 YOLOv8 的新特性。

如果你想窥见代码本身，请查看 [YOLOv8 仓库](https://github.com/ultralytics/ultralytics?ref=blog.roboflow.com) ，并查看 [这个代码差异](https://github.com/ultralytics/yolov5/compare/master...exp13?ref=blog.roboflow.com) ，以查看一些研究是如何完成的。

在这里我们提供了有影响力的建模更新的简要总结，然后我们将查看模型的评估，这将自我说明。

由 GitHub 用户 RangeKing 制作的下图显示了网络架构的详细可视化。

![yolov8-architecture-visualisation](https://images.kohsruhe.com/tech/yolov8-architecture-visualisation.png)

### 无锚点检测

YOLOv8 是一个无锚点模型。这意味着它直接预测物体的中心，而不是已知 [锚框](https://blog.roboflow.com/what-is-an-anchor-box/) 的偏移。

[锚框](https://blog.roboflow.com/what-is-an-anchor-box/) 在早期的 YOLO 模型中是一个众所周知的棘手部分，因为它们可能代表目标基准的框的分布，但不代表自定义数据集的分布。

![](https://blog.roboflow.com/content/images/2024/04/image-1812.webp)

> YOLOv5 的检测头，在 [netron.app](https://netron.app/?ref=blog.roboflow.com) 中可视化

无锚点检测减少框的预测数量，从而加快 [非极大值抑制](https://blog.roboflow.com/how-to-code-non-maximum-suppression-nms-in-plain-numpy/) (NMS)，一种复杂的后处理步骤，用于推理后的候选检测筛选。

![](https://blog.roboflow.com/content/images/2024/04/image-1816.webp)

> 在 [netron.app](https://netron.app/?ref=blog.roboflow.com) 中可视化的 YOLOv8 检测头

### 新的卷积

茎中的第一个 `6x6` 卷积被一个 `3x3` 所取代，主构建块被改变， [C2f](https://github.com/ultralytics/ultralytics/blob/dba3f178849692a13f3c43e81572255b1ece7da9/ultralytics/nn/modules.py?ref=blog.roboflow.com#L196) 取代了 [C3](https://github.com/ultralytics/yolov5/blob/cdd804d39ff84b413bde36a84006f51769b6043b/models/common.py?ref=blog.roboflow.com#L157)。

该模块在下图中进行了总结，其中 `f` 表示特征数，`e` 表示扩展率，CBS 是一个由 `Conv`、`BatchNorm` 和 `SiLU` 组成的块。

在 `C2f` 中，所有来自 `Bottleneck`（两个具有残差连接的 `3x3` 卷积的别名）的输出被串联起来。而在 `C3` 中，只有最后一个 `Bottleneck` 的输出被使用。

![](https://blog.roboflow.com/content/images/2024/04/image-1822.webp)

> 新的 YOLOv8 `C2f` 模块

`Bottleneck` 与 YOLOv5 中相同，但第一个卷积的内核大小从 `1x1` 改为 `3x3`。从这些信息来看，YOLOv8 开始回归到 2015 年定义的 ResNet 块。

在脖子处，特征直接串联起来，没有强制相同的通道维度。这减少了参数数量和张量的整体大小。

### 关闭 Mosaic 倍增

深度学习研究往往专注于模型架构，但 YOLOv5 和 YOLOv8 中的训练常规是其成功的关键部分。

YOLOv8 在训练过程中实时地增强图像。在每个 epoch 中，模型会看到提供的图像稍有不同的变化。

其中一种增强称为 [拼图增强](https://blog.roboflow.com/advanced-augmentations/)。这涉及到将四张图像拼接在一起，迫使模型在新位置、部分遮挡和不同周围像素下学习物体。

![](https://blog.roboflow.com/content/images/2024/04/image-1831.webp)

> 国际象棋棋盘照片的拼图增强

然而，经验显示如果在整个训练过程中执行拼图增强，会导致性能下降。关闭最后十个训练 epochs 的拼图增强是有利的。

这种变化表明 YOLO 在 YOLOv5 仓库和 YOLOv8 研究中持续受到细致的关注。

## YOLOv8 准确度提升

YOLOv8 的研究主要是通过对 [COCO 基准](https://blog.roboflow.com/coco-dataset/) 的实证评估推动的。随着网络和训练常规的每一部分被调整，新的实验被运行以验证变化对 COCO 模型的影响。

### YOLOv8 COCO 准确度

COCO 是评估目标检测模型的行业标准基准。在 COCO 上比较模型时，我们看 mAP 值和 FPS 测量的推理速度。模型应在相似的推理速度下进行比较。

下图显示了 YOLOv8 在 COCO 上的准确度，数据由 Ultralytics 团队收集并发布在其 [YOLOv8 自述文件](https://github.com/ultralytics/ultralytics?ref=blog.roboflow.com) 中：

![](https://blog.roboflow.com/content/images/2024/04/image-1838.webp)

> YOLOv8 在 COCO 的评估

截至撰写本文章时，在相似的推理延迟下，YOLOv8 COCO 准确度是技术状态中的顶尖水平。

### RF100 准确度

在 Roboflow，我们从 [Roboflow Universe](https://universe.roboflow.com/?ref=blog.roboflow.com)，一个包含超过 10 万个数据集的仓库中抽取了 100 个样本数据集，以评估模型对新域的泛化效果。由英特尔支持开发的我们的基准是一个为计算机视觉从业者设计的基准，旨在更好地回答“这个模型在我的自定义数据集上表现如何？”这一问题。

我们在 [RF100](https://www.rf100.org/?ref=blog.roboflow.com) 基准上评估了 YOLOv8 及其与 YOLOv5 和 YOLOv7 的对比，以下箱线图显示了每个模型的 mAP@.50。

我们对每个模型的小版本运行了 100 次迭代，以单个种子运行一次，因此由于梯度彩票，请对这一结果持有一点怀疑态度。

下图告诉我们 YOLOv8 在 Roboflow 100 基准上拥有较少的异常值和整体更好的 mAP。

![](https://blog.roboflow.com/content/images/2024/04/image-1849.webp)

> YOLOs mAP@.50 对 RF100 的比较

以下条形图显示了每个 RF100 类别的平均 mAP@.50。同样，YOLOv8 表现优于所有之前的模型。

![](https://blog.roboflow.com/content/images/2024/04/image-1859.webp)

> YOLOs 平均 mAP@.50 对 RF100 类别的比较

相对于 YOLOv5 评估，YOLOv8 模型在每个数据集中产生相似的结果，或显著提高结果。

## YOLOv8 仓库和 PIP 包

[YOLOv8 代码仓库](https://github.com/ultralytics/ultralytics?ref=blog.roboflow.com) 旨在成为社区使用和迭代模型的地方。由于我们知道这个模型将持续改进，我们可以将初始 YOLOv8 模型结果作为基线，并在发布新小版本时期待未来的改进。

最佳的结果是研究人员开始在 Ultralytics 仓库上开发他们的网络。研究一直发生在 YOLOv5 的分叉中，但如果这些模型在一个地方制作，并最终合并到主线上，这将是更好的。

### YOLOv8 仓库布局

YOLOv8 模型使用类似于 YOLOv5 的代码，新的结构使分类、实例分割和目标检测任务类型可以通过相同的代码例程支持。

模型仍然使用相同的 [YOLOv5 YAML 格式](https://roboflow.com/formats/yolov8-pytorch-txt?ref=blog.roboflow.com) 初始化，并且数据集格式也保持不变。

### YOLOv8 CLI

`ultralytics` 包分发有一个 CLI。对于许多 YOLOv5 用户来说，这将非常熟悉，其中核心训练、检测和导出交互也是通过 CLI 完成的。

```shell
yolo task=detect mode=val model={HOME}/runs/detect/train/weights/best.pt data={dataset.location}/data.yaml
```

你可以传递一个 `task` 在 `[detect, classify, segment]` 中，一个 `mode` 在 `[train, predict, val, export]` 中，一个 `model` 作为未初始化的 `.yaml` 或作为先前训练的 `.pt` 文件。

### YOLOv8 Python 包

除了可用的 CLI 工具，YOLOv8 现在作为 PIP 包分发。这使本地开发稍有困难，但解锁了将 YOLOv8 织入你的 Python 代码中的所有可能性。

```python
from ultralytics import YOLO

# 加载模型
model = YOLO("yolov8n.yaml")  # 从头构建新模型
model = YOLO("yolov8n.pt")  # 加载预训练模型（推荐用于训练）

# 使用模型
results = model.train(data="coco128.yaml", epochs=3)  # 训练模型
results = model.val()  # 在验证集上评估模型性能
results = model("https://ultralytics.com/images/bus.jpg")  # 预测图像
success = YOLO("yolov8n.pt").export(format="onnx")  # 将模型导出为 ONNX 格式
```

## 开始使用 YOLOv8

要开始将 YOLOv8 应用于您的用例，请查看我们的指南「[如何训练 YOLOv8 自定义数据集](https://blog.roboflow.com/how-to-train-yolov8-on-a-custom-dataset/)」。  

要查看其他人对 YOLOv8 的应用，请浏览 [Roboflow Universe](https://blog.roboflow.com/yolov8-models-apis-datasets/) 中的其他 YOLOv8 模型、数据集以及灵感。  

对于那些将模型投入生产并使用主动学习策略不断更新模型的从业人员，我们添加了一条路径，您可以「[部署 YOLOv8 模型](https://blog.roboflow.com/upload-model-weights-yolov8/)」，在我们的推理引擎中使用，并在您的数据集中进行标签辅助。或者，您可以使用 [Roboflow Inference](https://inference.roboflow.com/?ref=blog.roboflow.com) ，一个开源推理服务器，在设备上部署 YOLOv8。  

## 部署 YOLOv8 模型到 Roboflow

一旦完成 YOLOv8 模型的训练，您将有一组训练权重可用于托管 API 端点。您可以使用 Roboflow pip 包中的 `deploy()` 函数将模型权重上传到 [Roboflow Deploy](https://roboflow.com/deploy?ref=blog.roboflow.com)，以便在云中使用您的训练权重。  

要上传模型权重，首先在 Roboflow 上创建一个新项目，上传您的数据集并创建项目版本。查看我们的完整指南「[如何创建和设置项目](https://blog.roboflow.com/getting-started-with-roboflow/#full-tutorial-20-minutes)」。  

然后，编写一个 Python 脚本：

```python
import roboflow

roboflow.login()
rf = roboflow.Roboflow()
project = rf.workspace().project(PROJECT_ID)
project.version(DATASET_VERSION).deploy(model_type="yolov8", model_path=f"{HOME}/runs/detect/train/")
```

将 `PROJECT_ID` 替换为您的项目号，`DATASET_VERSION` 替换为与您的项目相关联的版本号。

运行上述代码后不久，您的模型将在 Roboflow 项目仪表板上的 Deploy 页面中可用。

## YOLOv8 常见问题

### YOLOv8 的版本有哪些

- YOLOv8 自 2023-01-10 发布，共有五个版本，从 YOLOv8n（最小的模型，在 COCO 上评分为 37.3 mAP）到 YOLOv8x（最大的模型，在 COCO 上评分为 53.9 mAP）。
