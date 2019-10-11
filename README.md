# Simplify Bootstrap Theme
A simple, clean, contentful [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction) theme for Pelican blogger.
Live demo on theme creator's blog: <https://vuquangtrong.github.io>
Source code [simplify-bootstrap-theme](https://github.com/vuquangtrong/simplify-bootstrap-theme)

### Features

- Responsive layout for mobile and desktop
- OpenGraph support
- SEO ready
- Multiple layouts
- Table of Content sidebar
- Realted posts, next/previous article
- Social Sharing 
- Comments
- Rich Snippets (JSON-LD)

### Install

Download the theme from [simplify-bootstrap-theme](https://github.com/vuquangtrong/simplify-bootstrap-theme) or from [pelican-themes](https://github.com/getpelican/pelican-themes).
You may need to check the included example `pelicanconf.py` and `publishconf.py` for more information.

### Integrations

- [AddThis](http://www.addthis.com/): add sharing buttons
- [Disqus](https://disqus.com/): add comments support
- [Google AdSense](https://www.google.com.br/adsense/start/): show ads
- [Google Analytics](https://www.google.com/analytics/web/): track your site
- [Google Tag Manager](https://www.google.com/tagmanager/): new version to track your site
- [Piwik Analytics](http://piwik.org/): another site tracking service

### Plugins Support

- [sitemap](https://github.com/getpelican/pelican-plugins/tree/master/sitemap): generate sitemap document, see <https://www.sitemaps.org>
- [post_stats](https://github.com/getpelican/pelican-plugins/tree/master/post_stats): generate post statistics: words, estimated read time, tag cloud
- [related_posts](https://github.com/getpelican/pelican-plugins/tree/master/related_posts): find relate posts to the reading article
- [neighbors](https://github.com/getpelican/pelican-plugins/tree/master/neighbors): find next/preivious article

### Markdown extensions
By default Pelican enables below extensions to process your markdown files:

- `markdown.extensions.extra` included `abbr`, `attr_list`, `def_list`, `fenced_code`, `footnotes`, and `tables`
- `markdown.extensions.codehilite`
- `markdown.extensions.meta` 

**Simplify** theme has some style configs to work with extra extenstion to render your page better:

- `markdown.extensions.sane_lists`
- `markdown.extensions.toc`
- `markdown.extensions.nl2br`
- `markdown_checklist.extension`.

### Customized styles
The theme also bring to you a clean, simple, but contenful layout.
This [Simplify Article](https://vuquangtrong.github.io/blog/simplify-article.html) will guide you how to write content in markdown and how it will be rendered on your page.

### Preview

![screenshot](screenshot.png)

### License
[MIT License](LICENSE)
