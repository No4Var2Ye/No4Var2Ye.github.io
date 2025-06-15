
输出变量

用 {{ }} 输出变量或表达式：
{{ page.title }}      <!-- 输出页面标题 -->
{{ site.description }} <!-- 输出网站描述 -->

逻辑控制

用 {% %} 包裹控制语句：

(1) 条件判断 (if/unless/elsif)

{% if page.title == "About" %}
  显示关于页面内容
{% elsif page.date > site.time %}
  这是未来的文章
{% else %}
  默认内容
{% endif %}

{% unless page.hidden %}  <!-- 相当于 if not -->
  显示非隐藏页面
{% endunless %}

(2) 循环 (for)

{% for post in site.posts limit:3 %}
  <article>
    <h2>{{ post.title }}</h2>
    <p>{{ post.date | date: "%Y-%m-%d" }}</p>
  </article>
{% endfor %}

循环控制：

    {% break %}    <!-- 终止循环 -->
  {% continue %} <!-- 跳过当前迭代 -->
  

(3) 变量赋值 (assign/capture)

{% assign name = "Alice" %}       <!-- 简单赋值 -->
{{ name }}

{% capture intro %}               <!-- 捕获多行内容 -->
  欢迎来到 {{ site.title }}，作者是 {{ page.author }}。
{% endcapture %}
{{ intro }}

过滤器

用 | 对变量进行处理（类似管道操作）：

常用过滤器示例
过滤器 作用 示例

date 格式化日期 {{ page.date date: "%Y年%m月%d日" }}
downcase 转小写 {{ "HELLO" downcase }} → hello
upcase 转大写 {{ "hello" upcase }} → HELLO
strip_html 去除 HTML 标签 {{ "<p>文本</p>" strip_html }} → 文本
truncate 截断字符串 {{ "长文本" truncate: 5 }} → 长...
where 过滤数组 {% assign drafts = site.posts where: "draft", true %}
sort 排序 {% for tag in site.tags sort %}

链式调用

{{ "  HELLO WORLD  " strip downcase
 truncate: 8 }}
<!-- 输出：hello wo... -->

模板继承

(1) 包含片段 (include)

{% include header.html %}  <!-- 插入 _includes/header.html -->

传递参数：

    {% include footer.html color="blue" year=2023 %}
  
  在 footer.html 中通过 {{ include.color }} 访问。

(2) 布局继承 (layout)

在文章 Front Matter 中指定布局：

layout: default
title: 我的文章

模板文件需放在 _layouts/default.html 中，内容用 {{ content }} 填充：

    <!DOCTYPE html>
  <html>
    <body>
      {{ content }} <!-- 子页面内容会插入此处 -->
    </body>
  </html>
  

特殊变量

Jekyll 提供的全局变量：
变量 说明

site 站点配置（_config.yml 中的值）
page 当前页面的 Front Matter 数据
paginator 分页信息（需启用 jekyll-paginate）
content 在布局文件中表示子模板内容

注释

{% comment %} 
  这段内容不会渲染。
  多行注释示例。
{% endcomment %}

{# 单行注释（部分Liquid版本支持） #}

实战示例

(1) 显示最新3篇文章

{% for post in site.posts limit:3 %}
  <div class="post">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.date | date: "%B %d, %Y" }}</p>
  </div>
{% endfor %}

(2) 根据标签分类文章

{% for tag in site.tags %}
  <h2 id="{{ tag[0] }}">{{ tag[0] }}</h2>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

(3) 分页导航

{% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}">上一页</a>
    {% endif %}
    <span>第 {{ paginator.page }} 页 / 共 {{ paginator.total_pages }} 页</span>
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}">下一页</a>
    {% endif %}
  </div>
{% endif %}

调试技巧

打印变量：  

    {{ some_var | inspect }}  <!-- 输出变量结构和内容 -->
  
强制报错：  

    {% if some_var == nil %}
    {% error "some_var 不能为空!" %}  <!-- 终止构建并报错 -->
  {% endif %}
  