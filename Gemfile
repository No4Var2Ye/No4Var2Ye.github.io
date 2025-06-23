# frozen_string_literal: true

source "https://rubygems.org"
gemspec

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem 'wdm', '>= 0.1.0' if Gem.win_platform?
end


# 解决 Ruby 3.4.0 兼容性问题
gem "logger"
gem "bigdecimal"

gem "tzinfo"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw]  # Windows 专用

# Jekyll 核心
gem "jekyll", "~> 4.4"
gem "webrick"

# 主题
gem "jekyll-theme-yat"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
end