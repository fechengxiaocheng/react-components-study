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
