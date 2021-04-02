<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`articles/${params.id}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { article: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let article;
</script>

<svelte:head>
  <title>{article.title}</title>
</svelte:head>

<h1>{article.title}</h1>

<div class="content">
  {@html article.html}
</div>
