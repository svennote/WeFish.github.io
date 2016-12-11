---
layout  : default
title   : "New Media Design & Development I"
---

<ul class="posts">
{% for post in site.posts %}
    <li><a href="{{ post.url }}" title="">{{ post.title }}</a>{{ post.excerpt }}</li>
{% endfor %}
</ul>