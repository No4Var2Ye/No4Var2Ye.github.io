# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "varatoz"
    spec.version       = "1.0.0"
    spec.authors       = ["NoVarYe"]
    spec.email         = ["jidijam.olk@outlook.com"]
  
    spec.summary       = "A minimal, responsive, and feature-rich Jekyll theme for technical writing."
    spec.homepage      = "https://github.com/No4Var2Ye/VarAtoZ"
    spec.license       = "GNU General Public License v3.0"
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f|
      f.match(%r!^((_(includes|layouts|sass|(data\/(locales|origin)))|assets)\/|README|LICENSE)!i)
    }
  
    spec.metadata = {
      "bug_tracker_uri"   => "https://github.com/No4Var2Ye/VarAtoZ/issues",
      "documentation_uri" => "https://github.com/No4Var2Ye/VarAtoZ/#readme",
      "homepage_uri"      => "https://No4Var2Ye.github.io",
      "source_code_uri"   => "https://github.com/No4Var2Ye/VarAtoZ",
      "wiki_uri"          => "https://github.com/No4Var2Ye/VarAtoZ/wiki",
      "plugin_type"       => "theme"
    }
  
    spec.required_ruby_version = ">= 3.0"
  
    spec.add_runtime_dependency "jekyll", "~> 4.3"
    spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
    spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16"
    spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
    spec.add_runtime_dependency "jekyll-archives", "~> 2.2"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
    spec.add_runtime_dependency "jekyll-include-cache", "~> 0.2"
  
  end