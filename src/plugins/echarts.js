import echarts from 'echarts'

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $charts:{
            get(){
                return{
                    //方法：提供给外部访问
                    chinaMap:function(id,data){
                        var chartDom = document.getElementById(id);
                        var myChart = echarts.init(chartDom);
                        var option = {
                            //提示框
                           tooltip:{
                            triggerOn:"click",//事件类型
                            enterable:true,//鼠标是否允许划入悬浮框中
                            formatter(data){
                                return data.name + "<br> 病例:" + data.value
                            }
                           },
                           visualMap:[{
                                orient:"vertical",
                                type:"piecewise",
                                pieces:[
                                    { min:0,max:0,color:"#fff" },
                                    { min:1,max:10,color:"#fdfdcf" },
                                    { min:10,max:100,color:"#fe9e83" },
                                    { min:100,max:1000,color:"#e55a4e" },
                                    { min:1000,max:10000,color:"#4f070d" },

                                ]
                           }],
                           series:[{
                            name:"中国地图",
                            type:"map",//选择类型为地图
                            map:"china",//中国地图
                            roam:false,//是否允许缩放
                            zoom:1.2,//放大比例
                            label:{  //配置文本
                                normal:{
                                    show:true,//是否允许地图显示文字
                                    testStyle:{ //配置字体样式
                                        fontSize:8
                                    }
                                }
                            },
                            itemStyle:{
                                //地图的区域颜色，线和区块的颜色
                                normal:{
                                    areaColor:"rgba(0,255,236,0)",
                                    borderColor:"rgba(0,0,0,0.2)"
                                },
                                //区域颜色与阴影
                                emphasis:{
                                    areaColor:"rgba(0,180,0,0.8)",
                                    shadowOffsetX:0,
                                    shadowOffsetY:0,
                                    shadowBlur:20,
                                    borderWidth:0

                                }
                            },
                            // data:[
                            //     { name:"内蒙古",value:130 },
                            //     { name:"新疆",value:12 },
                            //     { name:"西藏",value:8 },
                            //     { name:"青海",value:0 },
                            
                            // ]
                            data
                           }]
                        
                
                        }

                        myChart.setOption(option);

                    }
                }
            }
        }
    })
}
export default install