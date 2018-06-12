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
    
    给span设置:bofore样式作为内部切换的开发；
    
    最外层设置一个display:inline-block的行内元素label（!!!不能是块状元素，否则，无法点击到input）；
    
    点击到span上，实际点击的是input，来切换input的:checked属性，同时设置:checked时css样式变化。（开关切换时bg变色、左右滑动）

* 利用css以下两个属性，来设置在0.4s内在x轴平移半个switch的长度，来达到切换switch的开关的视觉效果
    
        transform: translateX(30px)
        transition: 0.4s







