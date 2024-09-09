// 2024-09
console.log("User-Agent:", ua);
// console.log($request.headers);
// 获取 User-Agent
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

// 检查 User-Agent 中是否包含特定关键词
if (/(AMap|Cainiao|%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C|%E5%96%B5%E8%A1%97|%E5%A4%A9%E7%8C%AB|Hema4iPhone|Moon|DMPortal)/.test(ua)) {
  // 阻止请求，不返回内容
  $done({status: "HTTP/1.1 404 Not Found"});
} else {
  // 允许其他请求通过
  $done({});
}
