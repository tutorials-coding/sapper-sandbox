export function get(req, res, next) {
  const [ year, month, day, id ] = req.params.slug;
 
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    date: `${year}/${month}/${day}`,
    title: `note ${id}`
  }));
}
