#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)
from pelicanconf import *

# If your site is available via HTTPS, make sure SITEURL begins with https://
SITEURL = 'https://vuquangtrong.github.io/simplify-theme'
RELATIVE_URLS = False

# Enable feeds
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'

# Publish
OUTPUT_PATH = '../docs'
OUTPUT_RETENTION = [".git"]
DELETE_OUTPUT_DIRECTORY = True