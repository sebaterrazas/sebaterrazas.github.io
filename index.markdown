---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<!-- Tab content -->
{% for tab in site.tabs %}
<div id="{{ tab.title }}" class="tabcontent">
    {% include tabs/{{ tab.html }} %}
</div>
{% endfor %}

<script src="assets/js/openTab.js"></script>