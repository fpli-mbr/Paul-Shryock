---
title: Articles
excerpt: This is the Articles archive excerpt.
topics: [ ]

seo_title: Articles by Paul Shryock

content_type: archive
layout: _layouts/articles
body_class: [
	archive,
	articles
]
---

{% for article in collections.articles %}
- [{{ article.data.title }}]({{ article.url }})
{% endfor %}