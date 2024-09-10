// 获取请求的 URL 和 User-Agent
var ua = $request.headers['User-Agent'];
var url = $request.url;

// 打印调试日志
console.log("URL:", url);
console.log("User-Agent:", ua);

// 判断是否是指定的 URL 并且 UA 包含 "AMapiPhone"
if (url.includes("/amdc/mobileDispatch") && ua.includes("AMapiPhone")) {
    // 打印调试日志，确认条件被触发
    console.log("UA 包含 AMapiPhone，返回 404");

    // 返回 404 状态码，拒绝请求
    $done({ response: { status: 404, body: "Request blocked by script" } });
} else {
    // 打印日志，确认继续正常请求
    console.log("继续正常请求");
    
    // 继续正常处理请求
    $done({});
}
