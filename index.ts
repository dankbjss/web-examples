const PORT = 3000;
const BASE_PATH = "./public";
const INDEX = "/index.html";

const serveFile = (path: string) => {
  const filePath = BASE_PATH + path;
  const file = Bun.file(filePath);
  return new Response(file);
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    console.log(`Serving on port: ${PORT}`);
    const path = new URL(req.url).pathname;
    if (path === "/") {
      return serveFile(INDEX);
    }
    return serveFile(path);
  },
  error() {
    return new Response(null, { status: 404 });
  },
});