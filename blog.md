---
layout: page
title: Blog
permalink: /blog/
---

<div class="search-container">
  <input type="text" id="search-input" placeholder="Search blog posts..." maxlength="100" aria-label="Search blog posts" />
  <button type="button" id="clear-search-btn">Clear</button>
</div>

<div id="search-results" aria-live="polite"></div>
<div id="post-list">
  <h2>All Posts</h2>
  {% for post in site.posts %}
    <div class="post-item" data-title="{{ post.title | downcase | escape }}" data-content="{{ post.content | strip_html | downcase | escape }}" data-categories="{{ post.categories | join: ' ' | downcase | escape }}">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
        {% if post.categories.size > 0 %}
          • {{ post.categories | join: ", " | escape }}
        {% endif %}
      </p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 | escape }}</p>
    </div>
  {% endfor %}
</div>

<style>
.search-container {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 5px;
}

#search-input {
  width: 70%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 1rem;
}

#search-input:focus {
  outline: none;
  border-color: #007cfa;
  box-shadow: 0 0 0 2px rgba(0, 124, 250, 0.2);
}

.search-container button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.search-container button:hover {
  background-color: #5a6268;
}

.post-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e9ecef;
  border-radius: 5px;
}

.post-item h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.post-item h3 a {
  text-decoration: none;
  color: #007cfa;
}

.post-item h3 a:hover {
  text-decoration: underline;
}

.post-meta {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.post-excerpt {
  color: #495057;
  line-height: 1.6;
}

.hidden {
  display: none;
}

#search-results h2 {
  color: #007cfa;
}

.no-results {
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 2rem;
}

@media (prefers-color-scheme: dark) {
  .search-container {
    background-color: #161b22;
    border: 1px solid #30363d;
  }
  #search-input {
    background-color: #0d1117;
    color: #e6edf3;
    border-color: #30363d;
  }
  .post-item {
    border-color: #30363d;
    background-color: #161b22;
  }
  .post-item h3 a,
  #search-results h2 {
    color: #79b8ff;
  }
  .post-meta,
  .no-results {
    color: #959da5;
  }
  .post-excerpt {
    color: #e6edf3;
  }
}
</style>

<script src="{{ '/assets/js/blog-search.js' | relative_url }}" defer></script>
