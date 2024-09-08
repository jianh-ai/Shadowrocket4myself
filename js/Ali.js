// 获取请求的 URL 和 body
const url = $request.url;
const body = $request.body;
const isQuanX = typeof $task !== "undefined";

// 检查是否是特定的 URL（根据你的描述）
if (url.includes("/amdc/mobileDispatch")) {
  // 解析请求体内容
  const params = new URLSearchParams(body);

  // 检查 appName 是否为 AMapiPhone
  if (params.get("appName") === "AMapiPhone") {
      $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    // 如果 appName 不是 AMapiPhone，允许继续访问
    $done({});
  }
} else {
  // 如果 URL 不匹配特定路径，允许继续访问
  $done({});
}
