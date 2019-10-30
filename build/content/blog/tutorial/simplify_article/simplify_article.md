Title: Simplify Article
Summary: Show how an article is rendered by Markdown
Author: vuquangtrong
Date: 2019-10-08 10:00
Modified: 2019-10-10 20:00
Category: tutorial
Tags: pelican, markdown
TOC: show

Following content is for testing Markdown-to-HTML generator with various Markdown settings including standard syntax and extended [Markdown Extensions](https://python-markdown.github.io/extensions). To setup Markdown settings in Pelican, please check this article: [Setup blog with Pelican][1].

You should know about **HTML**, **CSS** and probably **Markdown**{: .text-danger}
{: .alert .alert-info}

---
### Markdown Settings
Here are the list of Markdown extensions will be used to generate this article.

```python
MARKDOWN = {
    'extensions': [
        # official extensions
        'markdown.extensions.extra', # include extensions: abbr, attr_list, def_list, fenced_code, footnotes, tables
        'markdown.extensions.codehilite', # to generate code color scheme using pygments
        'markdown.extensions.meta', # to parse key:value pairs at the begining of file
        'markdown.extensions.sane_lists',# for better list 
        'markdown.extensions.toc', # add Table of Content
        'markdown.extensions.nl2br', # easily to add new line, but make attr_list and legacy_attrs hard to control
        #'markdown.extensions.admonition', # to make  alert box
        #'markdown.extensions.legacy_attrs', # insert attribs into element, but markdown already has a built-in function that do the same thing
        #'markdown.extensions.legacy_em', # to use legacy emphasis
        #'markdown.extensions.smarty', # converts ASCII dashes, quotes and ellipses to their HTML entity equivalents
        #'markdown.extensions.wikilinks',

        # 3rd party extensions
        #'markdown_captions', # convert <img> to <figure> and <figcaption>
        #'markdown_checklist.extension', # show checkbox in list
    ],
    'extension_configs': {
        'markdown.extensions.codehilite': {'css_class': 'highlight'},
    },
    'output_format': 'html5',
}
```

---
### Paragraphs
    
    :::md
    Emphasis a word or a phrase: *italic* or **bold** or ***bold and italic*** or `in-line code`.
    Show input keys: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Del</kbd>.

Emphasis a word or a phrase: *italic* or **bold** or ***bold and italic*** or `in-line code`.
Show input keys: <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>Del</kbd>.

As mentioned in [how to comments in markdown](https://stackoverflow.com/questions/4823468/comments-in-markdown) you can (ab)use the link labels syntax to write your comments.
Those lines will not be processed, so they are not included in rendered page nor page's source code.
    
    :::md
    [//]: # (This may be the most platform independent comment)

[//]: # (Viewer will not see this commnent in rendered page or page source code)

---
### Markdown in HTML tags
By default, text in HTML tags is not rendered. To support Markdown syntax in HTML tags, add `markdown="1"` into the tag.

    :::md
    <div markdown="0">
    This text is not **rendered**.
    </div>
    <div markdown="1">
    This text is **rendered** well.
    </div>

<div>
This text is not **rendered**.
</div>
<div markdown="1">
This text is **rendered** well.
</div>

---
### Attribute Lists
#### Official extension
Element can have some attributes by using `markdown.extensions.attr_list` extension.
This provides syntax: `{: #someid .someclass somekey='some value' }` to add attributes to a block or a span element.
To use with a **block** element, the attribute list should be defined *on the last line of the block*. 
To use with a **span** element, the attribute list should be placd *right after the generated span without space*.

    :::md
    A paragraph with dark background and light text, using `attr_list` extension. *Attribute list can be applied to a span element*{: .text-warning} if the attribute list is added right after the span without any space.{: .bg-dark .text-light .p-1}

A paragraph with dark background and light text, using `attr_list` extension. *Attribute list can be applied to a span element*{: .text-warning} if the attribute list is added right after the span without any space.{: .bg-dark .text-light .p-1}

#### Build-in parser
Some Markdown version already has a built-in parser to process attribute lists. For example in Markdown `3.1.1`, below code generate the same HTML block.
    
    :::md
    Use built-in parser
    ![icon]({static}icon.png "icon"){id="icon" class="icon mx-auto" style="display:block"}

    Use attr_list extension
    ![icon]({static}icon.png "icon"){: #icon .icon .mx-auto style=display:block}

![icon]({static}icon.png "icon"){id="icon" class="icon mx-auto" style="display:block"}
    
    :::md
    This is a sample sentence in green.
    {class="text-success text-center"}

This is a sample sentence in green.
{class="text-success text-center"}

#### Deprecated extenstion
Another extension that also adds attribute into block or element is `markdown.extensions.legacy_attrs`. This extension has been deprecated in favor of [Attribute Lists](#attribute-lists).
Attributes are defined by including the syntax `{@key=value}` within the element.

    :::md
    {@class=bg-dark text-warning p-1}A paragraph with dark background and yellow text, using `legacy_attrs` extension.  
    _This text won't be formatter_, but __this text will be formatted__ by the latter directive at the end of this block{@class=text-success}

    if nl2br extenstion is disabled, it will be more readable as below

    {@class=bg-dark text-warning p-1}
    A paragraph with dark background and yellow text, using `legacy_attrs` extension.  
    _This text won't be formatter_, but __this text will be formatted__ by the latter directive at the end of this block{@class=text-success}

---
### Blockquote
Using default directive **`>`** with `legacy_attrs` or `attr_list` to get better result.

    :::md
    > I do love you so much!
    > _Henry_

> I do love you so much!
> _Henry_
    
    :::md
    > I do love you so much!
    > _Henry_{class=blockquote-footer}
    
    or 
    
    > I do love you so much!
    > _Henry_{: .blockquote-footer}

> I do love you so much!
> _Henry_{class=blockquote-footer}

> I do love you so much!
> _Henry_{: .blockquote-footer}

---
### Images
Using `<img>` tag is enough to show image. Some people use [markdown_captions](https://github.com/evidlo/markdown_captions) extension to convert `<img>` to `<figure>` and `<figcaption>` which are new in HTML5.

Adding `<figure>` and `<figcaption>` manually can be done by using [Markdown in HTML tags](#markdown-in-html-tags), but it doesn't look good in markdown file.
    
    :::md
    <figure markdown="1">
    ![my code doesn't work]({static}my-code-doesn_t-work.jpg "my code doesn't work")<figcaption class="img-caption">_my code doesn't work &copy; [nerd4life.studio](https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work)_</figcaption>
    </figure>

There is another way to add caption and credit to image:

    :::md
    ![my code doesn't work]({static}my-code-doesn_t-work.jpg "my code doesn't work")_my code doesn't work &copy; [nerd4life.studio](https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work)_{: .img-caption}

```css
.img-caption {
    display: block;
    color: #6c757d!important;
    text-align: center!important;
    font-size: 80%;
    font-weight: 400;
}
```

![my code doesn't work]({static}my-code-doesn_t-work.jpg "my code doesn't work")_my code doesn't work &copy; [nerd4life.studio](https://nerd4life.studio/blogs/nerd4life-comic/my-code-doesnt-work)_{: .img-caption}

---
### Standard Codeblock
Using *Standard Codeblock* with correct indent, code can be shown as below type of paragraph

**Show line number**
use _Shebang_ `#!` instead of `:::` to render line number.
    
    :::md
    #!python hl_lines="1 3"
    # This line is emphasized
    # This line isn't
    # This line is emphasized too
will be:

    #!python hl_lines="1 3"
    # This line is emphasized
    # This line isn't
    # This line is emphasized too

**In paragraph**

    :::md
    :::python hl_lines="1 3"
    # This line is emphasized
    # This line isn't
    # This line is emphasized too
will be:

    :::python hl_lines="1 3"
    # This line is emphasized
    # This line isn't
    # This line is emphasized too

**In nested list item**

    :::md
    - First item

        :::python hl_lines="1 3"
        # This line is emphasized
        # This line isn't
        # This line is emphasized too

    - Second item
    - Third item
will be:

- First item

        :::python hl_lines="1 3"
        # This line is emphasized
        # This line isn't
        # This line is emphasized too

- Second item
- Third item

**In blockquote**

    :::md
    > This snippet of code
    > 
        #!python
        from __future__ import me
        me.teleportTo(now)
will be:

> This snippet of code
> 
    #!python
    from __future__ import me
    me.teleportTo(now)

---
### Fenced Codeblock
Using *Fenced Codeblock* allow the color highlight scheme to show in Markdown editor,
but this won't support to show codeblock in list item or blockquote, and won't show line number.
    
    :::md
    ````python hl_lines="2"
    # You can highlight a line by adding hl_lines="2"
    # so this line will be highlighted
    ````
will be:

````python hl_lines="2"
# You can highlight a line by adding hl_lines="2"
# so this line will be highlighted
````

This is how codeblok looks line in `SublimeText 3` using `MarkdownExtended` and `MonokaiExtended` packages
*Standard Codeblock*
![standard_codeblock]({static}standard_codeblock.jpg "standard_codeblock")
*Fenced Codenlock*
![fenced_codeblock]({static}fenced_codeblock.jpg "fenced_codeblock")


To add line number, a small `jQuery` code will be used to generate texts and few `CCS` styles will be used to format them

```js
(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < (num - 1); j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();
```

```css
pre .line-number {
    display: block;
    float: left;
    margin: 0 1em 0 -1em;
    border-right: 1px solid #ddd;
    text-align: right;
}

pre .line-number span {
    display: block;
    padding: 0 .5em 0 1em;
    color: #ccc;
}

pre .cl {
    display: block;
    clear: both;
}
```

---
### Table
Table with alignment and format text inside.

There's still no effective method to add class into `<table>` tag in Markdown.
We can use `jQuery` `addClass()` function to do this trick:
    
    :::js
    $("table").addClass("table table-hover table-sm table-bordered");
    $("thead").addClass("thead-light");

Define a table

    :::md
    | Level                      | Description                         | Default                       |
    | :---                       | :---                                |                          ---: |
    | Debug                      | All information                     | _Off_{: .badge .badge-danger} |
    | Info {: .text-info}        | Useful infomation                   | _Off_{: .badge .badge-danger} |
    | Warning {: .text-warning}  | **Error, but system still runs**    | _On_{: .badge .badge-success} |
    | Error {: .text-danger}     | ***Critical error, system halted*** | _On_{: .badge .badge-success} |

will get it rendered as:

| Level                      | Description                         | Default                       |
| :---                       | :---                                |                          ---: |
| Debug                      | All information                     | _Off_{: .badge .badge-danger} |
| Info {: .text-info}        | Useful infomation                   | _Off_{: .badge .badge-danger} |
| Warning {: .text-warning}  | **Error, but system still runs**    | _On_{: .badge .badge-success} |
| Error {: .text-danger}     | ***Critical error, system halted*** | _On_{: .badge .badge-success} |

---
### Admonition
If you use `admonition` extension, the below text will change to a box with title and text

!!! note "How to use Admonition"
    Add `markdown.extensions.admonition` into your [Markdown extension settings](#markdown-settings) 
    Add CCS file for Admonition styles.


---
### Sane List
Lists will not mixed thanks to `markdown.extensions.sane_lists` extension.
Use `legacy_attrs` or `attr_list` to format list items.

    :::md
    1. First item
    {: .text-primary}
    2. Second item
    {class=text-success}

    - a new list
    {: .text-primary}
    - not mixed
    {style=color:red}

1. First item
{: .text-primary}
2. Second item
{class=text-success}

- a new list
{: .text-primary}
- not mixed
{style=color:red}

---
### Dictionary
A definition list can be render using `markdown.extensions.def_list` extension.
    
    :::md
    Apple
    :   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

    Orange
    :   The fruit of an evergreen tree of the genus Citrus.

Apple
:   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

---
### Footnotes

Footnotes[^1] have a label[^xyz] and the footnote's content.

[^1]: This is a footnote content.
[^xyz]: A footnote on the label **xyz**.

---
### New-Line-to-Break
Add `markdown.extensions.nl2br` into your [Markdown extension settings](#markdown-settings).
This causes newlines to be treated as hard breaks, like StackOverflow and GitHub flavored Markdown do.
If this extension is not used, these 3 lines will become one line in HTML.

---
### Checklist
To show a list with checkbox, install [`markdown_checklist`](https://github.com/FND/markdown-checklist) extension and enable it in Markdown extensions list.
The list item indicators still show, so add some `CSS` style to hide them.

```css
ul.checklist {
    list-style-type: none;
    padding-left: inherit;
}
```

Finally, a task list looks like below:

    :::md
    - [ ] foo
    - [x] bar
    - [ ] baz

- [ ] foo
- [x] bar
- [ ] baz

[1]: {filename}../setup_blog_with_bootstrap_and_pelican.md "Setup blog with Pelican"
