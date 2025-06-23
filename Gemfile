# frozen_string_literal: true

source "https://rubygems.org"
gemspec

# gem "github-pages", "~> 232", group: :jekyll_plugins

# Ruby 3.4+ 兼容性
gem "logger"
gem "bigdecimal"
gem "tzinfo"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw]  # Windows 专用

# 主题
gem "jekyll-theme-yat"

# 插件
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "wdm", ">= 0.1.0", platforms: [:mingw, :mswin, :x64_mingw]  # Windows 专用
end

# 开发环境
group :development do
  gem "webrick"
  gem "jekyll", "~> 4.4"
end