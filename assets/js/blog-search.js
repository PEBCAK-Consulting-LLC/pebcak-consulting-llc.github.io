document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const clearButton = document.getElementById('clear-search-btn');
  const postList = document.getElementById('post-list');
  const searchResults = document.getElementById('search-results');
  const postItems = document.querySelectorAll('.post-item');

  if (!searchInput || !postList || !searchResults) return;

  let searchTimeout;
  const SEARCH_DELAY = 300;
  const MAX_QUERY_LENGTH = 100;

  function clearSearch() {
    clearTimeout(searchTimeout);
    searchInput.value = '';
    searchResults.replaceChildren();
    postList.classList.remove('hidden');
    postItems.forEach(function(item) {
      item.classList.remove('hidden');
    });
  }

  if (clearButton) {
    clearButton.addEventListener('click', clearSearch);
  }

  searchInput.addEventListener('input', function() {
    let rawQuery = this.value.trim();

    if (rawQuery.length > MAX_QUERY_LENGTH) {
      rawQuery = rawQuery.substring(0, MAX_QUERY_LENGTH);
      this.value = rawQuery;
    }

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(function() {
      const query = rawQuery.toLowerCase();

      if (query === '') {
        clearSearch();
        return;
      }

      let matchCount = 0;
      postItems.forEach(function(item) {
        if (!item || !item.getAttribute) return;

        const title = item.getAttribute('data-title') || '';
        const content = item.getAttribute('data-content') || '';
        const categories = item.getAttribute('data-categories') || '';

        if (title.includes(query) || content.includes(query) || categories.includes(query)) {
          item.classList.remove('hidden');
          matchCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      renderSearchSummary(matchCount, query);
    }, SEARCH_DELAY);
  });

  function renderSearchSummary(matchCount, query) {
    searchResults.replaceChildren();

    const heading = document.createElement('h2');
    if (matchCount === 0) {
      postList.classList.add('hidden');
      heading.textContent = 'Search Results';
      const noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.textContent = 'No posts found matching "' + query + '"';
      searchResults.appendChild(heading);
      searchResults.appendChild(noResults);
    } else {
      postList.classList.remove('hidden');
      heading.textContent = 'Search Results (' + matchCount + ' found)';
      searchResults.appendChild(heading);
    }
  }
});
