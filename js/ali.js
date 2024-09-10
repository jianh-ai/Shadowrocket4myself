// 获取请求的 URL 和 User-Agent
var ua = $request.headers['User-Agent'];
var url = $request.url;

// 打印调试日志
console.log("URL:", url);
console.log("User-Agent:", ua);

// 判断是否是指定的 URL 并且 UA 包含 "AMapiPhone"
if (url.includes("http://amdc.m.taobao.com/amdc/mobileDispatch") && ua.includes("AMapiPhone")) {
    console.log("UA 包含 AMapiPhone，返回 200 OK");

    // 返回 200 OK 状态码，模拟成功响应
    $done({ response: { status: 200 } });
} else {
    console.log("继续正常请求");
    $done({});
}
