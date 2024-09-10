// 2024-09
// 获取请求的 URL 和 User-Agent
var ua = $request.headers['User-Agent'];
var url = $request.url;

// 判断是否是指定的 URL 并且 UA 包含 "Amap"
if (url.includes("http://amdc.m.taobao.com/amdc/mobileDispatch") && ua.includes("Amap")) {
    // 返回 404 状态码，拒绝请求
    $done({ response: { status: 404, body: "Request blocked by script" } });
} else {
    // 继续正常处理请求
    $done({});
}
