// 2024-09
const url = $request.url;
const body = $request.body;

// 检查是否是特定的 URL
if (url.includes("/amdc/mobileDispatch")) {
  // 解析请求体内容
  const params = new URLSearchParams(body);

  // 检查 appName 是否为 AMapiPhone
  if (params.get("appName") === "AMapiPhone") {
    // 直接结束请求，不返回响应
    $done();  // 结束处理，阻止请求
  } else {
    // 如果 appName 不是 AMapiPhone，允许继续访问
    $done({});
  }
} else {
  // 如果 URL 不匹配特定路径，允许继续访问
  $done({});
}
