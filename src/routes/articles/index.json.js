import articles from './_articles.js'

const articlesContent = JSON.stringify(
  articles.map(a => {
    return {
      title: a.title,
      id: a.id
    }
  })
)

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(articlesContent);
}