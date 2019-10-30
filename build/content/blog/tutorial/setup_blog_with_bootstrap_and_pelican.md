Title: Setup blog with Bootstrap and Pelican
Summary: How to create a blog with a simple Bootstrap theme and configure Pelican to generate your own site
Author: vuquangtrong
Date: 2019-10-01 10:00
Modified: 2019-10-10 20:00
Category: tutorial
Tags: pelican, bootstrap, markdown

### Install Pelican
It's very simple to install Pelican and write your first post:

1. [Install Pelican](https://docs.getpelican.com/en/stable/install.html)
2. [Write content](https://docs.getpelican.com/en/stable/content.html)

You may need to read the manual of [Pelican Settings](https://docs.getpelican.com/en/stable/settings.html).
There are many settings to configure how Pelican will render your article. You can use `plugin`, `theme`, `extension` too. Read more in:

- [Pelican Plugins](https://github.com/getpelican/pelican-plugins)
- [Pelican Themes](https://github.com/getpelican/pelican-themes)
- [jinja2 Extensions](https://jinja.palletsprojects.com/en/master/extensions)
- [Markdown Extensions](https://python-markdown.github.io/extensions) 

### Apply theme
You will need to apply a theme or create a new theme.
By default, Pelican provides `simple` as a base theme, but you probaly want to change your blog appearance.

1. [Theme folder structure](https://docs.getpelican.com/en/stable/themes.html)
2. [Pelican Themes](https://github.com/getpelican/pelican-themes)

### Create a theme
This a the main purpose of this article. If there is no theme that's fit to your need, you probably will **do it yourself!**{: .badge .badge-danger}

Start to create a simple page with [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction). <a class="small text-info" data-toggle="collapse" data-target="#codeTemplate" aria-controls="codeTemplate" aria-expanded="false" aria-label="Toggle code tmeplate" href="#">toggle code template</a>

<div markdown="1" id="codeTemplate" class="collapse">
	
	<!doctype html>
	<html lang="en">
	  <head>
	    <!-- Required meta tags -->
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	    <!-- Bootstrap CSS -->
	    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	    <title>Hello, world!</title>
	  </head>
	  <body>
	    <h1>Hello, world!</h1>

	    <!-- Optional JavaScript -->
	    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
	    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	  </body>
	</html>

</div>

