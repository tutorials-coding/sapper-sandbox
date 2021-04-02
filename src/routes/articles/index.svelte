<script context="module">
  export function preload() {
    return this.fetch(`articles.json`)
      .then(r => r.json()).then(articles => {
        return {
          articles
        };
      });
  }
</script>

<script>
  export let articles;
</script>

<svelte:head>
  <title>Articles</title>
</svelte:head>

<h1>Articles</h1>

<ul>
  {#each articles as article}
    <li><a rel="prefetch" href="articles/{article.id}">{article.title}</a></li>
  {/each}
</ul>
