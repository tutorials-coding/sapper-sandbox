import articles from './_articles.js';

const lookup = new Map();
articles.forEach(article => {
  lookup.set(article.id, JSON.stringify(article));
});

export function get(req, res, next) {
  const { id } = req.params;

  if (lookup.has(id)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(lookup.get(id));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: `Not found`
    }));
  }
}
