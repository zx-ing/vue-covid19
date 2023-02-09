const base = {
    baseUrl:"http://iwenwiki.com", //网站的入口
    ncov:"/wapicovid19/ncov.php", //病毒信息渲染的接口
    provinceNcov:"/wapicovid19/all.php", //全国各省市疫情数据接口
    worldNcov:"/wapicovid19/foreign.php",//世界疫情数据接口
    cityNcov:"/wapicovid19/guonei.php",//各省市疫情详情数据接口
    swiperImg:"/wapicovid19/ncovimg.php",//曲线图接口
    citys:"/wapicovid19citys.php",//获取所有城市列表清单接口
}
export default base;