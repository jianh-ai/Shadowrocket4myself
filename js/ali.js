// 2024-09
const url = $request.url;
const header = $request.headers;
const ua = header["User-Agent"] || header["user-agent"];

console.log("URL:", url);
console.log("User-Agent:", ua);

if (url.includes("/amdc/mobileDispatch")) {
  if (
    ua.includes("AMapiPhone") || // 高德地图
    ua.includes("Alibaba") || // 阿里巴巴
    ua.includes("TmallCampus") || // 天猫校园
    ua.includes("Cainiao4iPhone") || // 菜鸟
    ua.includes("%E9%A3%9E%E7%8C%AA%E6%97%85%E8%A1%8C") || // 飞猪旅行
    ua.includes("%E4%BC%98%E9%85%B7") || // 优酷
    ua.includes("%E9%97%B2%E9%B1%BC") // 咸鱼
  ) {
    // 打印调试日志
    console.log("符合条件，返回 404");
    
    // 返回 404 状态码
    $done({ response: { status: 404 } });
  } else {
    console.log("不符合条件，继续正常请求");
    $done({});
  }
} else {
  console.log("URL 不匹配，继续正常请求");
  $done({});
}
