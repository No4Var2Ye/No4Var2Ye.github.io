---
# permalink: /posts/:title/
layout: post
title: "The Introduction to SVG"
date: 2024-09-01 22:03:49 +0800
author: NoVarYe
categories: cv
tags: svg
---

# Template of Blogs

Author: NoVarYe | Date: September 01, 2024

## Introduction

### What is SVG?

SVG is an XML-based markup language for describing two-dimensional based vector graphics. SVG is an open standard developed by the World Wide Web Consortium (W3C) since 1999.

### A Simple Example

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
```

## SYNTAX

### 1. SVG Root Element `<svg>`

All SVG content is contained within the `<svg>` root element. This element specifies the dimensions, viewport, and coordinate system of the graphic.
Common attributes include:\
**width and height:** define the width and height of the SVG.\
**viewBox:** defines the viewport of the graphic, specifying the range of the coordinate system.

所有的 SVG 内容都包含在 `<svg>` 根元素中。这个元素可以指定图形的尺寸、视窗、坐标系等。\
常用属性包括：\
**width 和 height：** 定义 SVG 的宽度和高度。\
**viewBox：** 定义图形的视窗，指定坐标系统的范围。

```xml
<svg width="100" height="100" viewBox="0 0 100 100">
    <!-- Other graphic elements -->
</svg>
```

### 2. Shape Elements

These elements are used to define specific shapes. SVG supports multiple basic shapes:

这些元素用于定义具体的图形，SVG 支持多种基本形状：

- `<rect`>: rectangle.
- `<circle`>: circle.
- `<ellipse`>: ellipse.
- `<line`>: line.
- `<polyline`>: polyline.
- `<polygon`>: polygon.
- `<path`>: complex path.

```xml
<rect x="10" y="10" width="30" height="30" fill="blue"/>
<circle cx="50" cy="50" r="40" fill="green"/>
<line x1="10" y1="10" x2="50" y2="50" stroke="black"/>
```

### 3. Text Element `<text>`

Used to add text to an SVG graphic.
The x and y attributes can be used to specify the text position, while `font-size`,`font-family`, and other attributes specify the text style.

用于在 SVG 图形中添加文本。
可以使用 x、y 属性指定文本位置，`font-size`、`font-family` 等属性指定文本样式

```xml
<text x="50" y="50" font-size="20" text-anchor="middle">Hello, SVG!</text>
```

### 4. Grouping Element `<g>`

The `<g>` element is used to group multiple graphic elements together for collective manipulation, such as applying the same style or transformation.
`<g>` elements can be nested.

`<g>` 元素用于将多个图形元素分组，以便一起进行操作，比如应用相同的样式或变换。
可以嵌套使用 `<g>` 元素。

```xml
<g fill="red">
    <circle cx="30" cy="30" r="20"/>
    <rect x="60" y="60" width="30" height="30"/>
</g>
```

### 5. Styles and Gradients

SVG supports style definitions using the `<style>` element or directly within elements using the style attribute.
Colors, line styles, fill styles, and more can be defined.
The `<defs>` element is used to define reusable elements like gradients, patterns, and filters.
`<linearGradient>` and `<radialGradient>` are used to create gradient effects.

SVG 支持使用 `<style>` 或直接在元素中使用 style 属性进行样式定义。
可以定义颜色、线条样式、填充样式等。
`<defs>` 元素用于定义可重复使用的元素，比如渐变、图案、滤镜等。
`<linearGradient>` 和 `<radialGradient>` 用于创建渐变效果。

```xml
<defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
</defs>
<rect x="10" y="10" width="80" height="80" fill="url(#grad1)" />
```

### 6. Transformations and Animations

SVG supports transformations like rotation, scaling, and translation using the transform attribute.
Animations can be added to SVG graphics through elements like `<animate>` and `<animateTransform>`.

SVG 支持使用 transform 属性对元素进行旋转、缩放、平移等操作。
SVG 还可以通过 `<animate>`、`<animateTransform>` 等元素为图形添加动画效果。

```xml
<rect x="10" y="10" width="50" height="50" fill="blue" transform="rotate(45 35 35)" />
```

### 7. Nesting and References

The `<use>` element allows for referencing already defined elements or graphics, facilitating reuse.
The `<symbol>` element defines reusable graphic parts and is used in conjunction with `<use>`.

`<use>` 元素可以引用已经定义的元素或图形，便于重复使用。
`<symbol>` 元素可以定义可复用的图形部分，与 `<use>` 搭配使用。

```xml
<symbol id="icon-star" viewBox="0 0 24 24">
    <path d="M12 2L15 8l6 .5-4.5 4.5L18 22l-6-3.5L6 22l1.5-9-4.5-4.5L9 8z"/>
</symbol>
<use href="#icon-star" x="10" y="10" width="50" height="50" />
```

## Terms

- SVG - Scalable Vector Graphics\
    SVG is an XML-based markup language for describing two-dimensional based vector graphics.

## Reference

[SVG Tutorial Introduction][]

[SVG Tutorial Introduction]:<https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction>
