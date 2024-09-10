// 2024-09
var ua = $request.headers['User-Agent'];

// 判断是否包含关键字 'Amap'
if (ua.includes('Amap')) {
    // 返回404状态码
    $done({ response: { status: 404, body: 'Not Found' } });
} else {
    // 继续请求
    $done({});
}
