## react组件实践

本项目主要是对于ant-design上面的基础组件，用react自己实现一遍。

目的是对react组件以及组件库的概念进行深入探究。

最终产出一个基础组件库，以及组件学习的经验文档。

### 已完成list（不持续更新。。。

|组件名|开发时间|目前状态|
|--|--|--|
|Switch|6.11|done|
|Carousel|6.12|todo|

### 积累

#### 1、switch组件

* 设计思路：

    先设置一个display:none的隐藏input，type=checkbox；

    再input上面盖一个position:absolute的span，长宽和input相同；
    
    给span设置:bofore样式作为内部切换的开关；
    
    最外层设置一个display:inline-block的行内元素label（!!!不能是块状元素，否则，无法点击到input）；
    
    点击到span上，实际点击的是input，来切换input的:checked属性，同时设置:checked时css样式变化。（开关切换时bg变色、左右滑动）

* 利用css以下两个属性，来设置在0.4s内在x轴平移半个switch的长度，来达到切换switch的开关的视觉效果
    
        transform: translateX(30px)
        transition: 0.4s

* 待优化

    1、autoFocus目前没有效果
    2、loading
    3、size


#### 2、carousel组件

* 设计思路：

    假设轮播一共n页，每一页宽度为m，要实现最后一页到第一页切换or第一页到最后一页切换时候平滑过渡，那就需要在头尾额外多两个dom:**头多clone-n，尾多clone-1，clone-n(123...n)clone-1**

    首先设置一个长宽自适应的屏幕的可视区域div，获取width即为m，其余的overlow:hidden;

    其次在可视区域里面设置一个width为(n*m)div，设置起始left为-m，transition移动时间0.5s；

    然后把里面的每一页设置display：inline-block；

    点击第i页，改变left的值，滑动-i*m。如果是头到尾||尾到头, 在滑动到clone-dom完毕之后，要把transition属性去掉，同时再次设置left值到其对应的dom上。


* dots的li需要设置下 vertical-align: top;把元素的顶端与行中最高元素的顶端对齐

* 一个走马灯可优化的点

    1、从最后一页到第一页平滑过渡，不要刷刷刷从4回到1，会眼花

    2、底部dots切换时除了颜色增强，width变化也可以增强视觉效果

    3、鼠标移出图片时，图片按照一定时间间隔自动轮播，鼠标放入图片时，暂停自动播放

    4、移动端的滑动实现，阈值

    5、随屏幕大小宽度自适应

* 设置transform：translateX(30px)之后，left值不会变。

* 思考：

    1、自动切换时候setInterval会不会有性能问题？如何解决？

    2、antd中的4页为啥会有8页8个dom？

* todo

    1、easing: PropTypes.string
   
    2、effect: PropTypes.string

    3、vertical: PropTypes.bool








