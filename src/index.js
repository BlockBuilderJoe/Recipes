const basePaths = ["/recipes", "/manuals", "/tools"];

function isStaticAssetPath(path) {
  return path.startsWith("/assets/") || /\.[a-zA-Z0-9]+$/.test(path);
}

async function htmlAsset(env, request, path, status = 200) {
  const response = await env.ASSETS.fetch(new Request(new URL(path, request.url), request));
  return new Response(await response.text(), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/html; charset=utf-8"
    }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }

    const basePath = basePaths.find((path) => url.pathname.startsWith(path));

    if (!basePath) {
      return htmlAsset(env, request, "/404-shell.txt", 404);
    }

    const assetPath = url.pathname.slice(basePath.length);
    if (!assetPath || assetPath === "/" || !isStaticAssetPath(assetPath)) {
      return htmlAsset(env, request, "/app-shell.txt");
    }

    const assetUrl = new URL(request.url);
    assetUrl.pathname = assetPath;

    const assetRequest = new Request(assetUrl, request);
    const assetResponse = await env.ASSETS.fetch(assetRequest);
    const contentType = assetResponse.headers.get("content-type") || "";

    if (assetResponse.status !== 404 && !contentType.includes("text/html")) {
      return assetResponse;
    }

    return htmlAsset(env, request, "/404-shell.txt", 404);
  }
};
