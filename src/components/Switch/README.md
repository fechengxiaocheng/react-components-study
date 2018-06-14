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