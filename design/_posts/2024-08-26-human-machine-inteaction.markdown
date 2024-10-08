---
layout: post
title: "Thinking of Human Machine Interaction"
date: 2024-08-26 09:24:16 +0800
author: NoVarYe
categories: Design HMI
# tags: tag01 tag02
# comments: true
---

# HMI

Author: {{ page.author }} | Date: {{ page.date |  date: "%a, %B  %d, %Y" }}

人机界面 (Human Machine Interaction, HMI)

## 概述

人机界面（Human Machine Interaction, HMI）是研究人类与机器之间的交互的领域。它不仅包括人与机器之间的互动，还包括机器与机器之间的互动，以及人与人之间的互动。

## 课程记录

### 交互设计

交互不仅仅局限于人和机器之间，也可以是机器与机器之间的交互，或是人和人之间的交互。

### 隐藏在表面之下的逻辑

UI（用户界面）重在交互，包括输入（Input）和输出（Output）。

### 指令

基础指令：如开关指令。
功能指令：包括单一功能和组合功能。
组合指令
着重于电路设计、效率和成本，可能会忽视用户体验。组合按键需要用户记忆，并有一定的学习成本。组合指令可能导致不易使用、难记、难学的问题。

### 界面

硬件界面和软件界面。

如何判断软硬件：

观察指令去向
确定如何调用硬件
查看哪些硬件可以受到控制
案例：车载系统的控制器

产生干扰，对主驾驶

指令集的优先级的控制

驾驶的核心功能
车机系统
U3D（Unity 3D）

数据的真实性



### U3D 的技术考量

强制帧同步
技术路线的不稳定性
机械面板
网站界面
跳转：不要超过三级跳转。
功能的组合
界面底层隐藏的逻辑：
基础功能
拓展功能

### 系统的类别

通用性系统：环境复杂
专用性系统：系统冗余性低，缓存低

### 编译器和解释器

信号：模拟电路和数字电路
通信原理：信号的边界是什么

## Terms

运行环境
差分：提供选择

## Thinking

运行效率和学习成本的平衡：

运行效率通常与生产成本相关。
学习成本受用户群体和用户承载能力的影响。
先验判断和后验判断：

差额剩余价值。

## 总结

### 如何设计界面
明确指令集：

明确指令的范围和功能
划分边界，如车门控制、电梯控制
风险评估
指令的层级：

环境、基础、拓展（增效）
结合实际经历
交互性能：

用户性能（较易解决）
运行效率（难以触及）

### 项目组的考量

项目组的组成
项目组的工作
使用神经网络判定竹子的质量。
评估上下游。
划定范围和产业链。
回本周期：如果使用神经网络提高效率但成本高，则需要评估回本周期。

### 华为系统

导入U3D模型，先塌缩为三角面，自动解算。

## Reference


