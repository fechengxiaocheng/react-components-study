* 设计思路

    

    自定义hover事件，需要同时监听三个事件，onMouseEnter，onMouseMove, onMouseLeave。其中onMouseMove需要做节流处理，判断move是在同一个dom的时候，return。

* 加transition: all .4s linear 使hover不那么生硬；transform: scale(2) 使hover的dom放大。

* 每个元素之间因为有margin，需要把mouse事件监听在ul上而不是li上(判断如果e.target是空时，return不作任何处理)，否则hover元素移动的时候中间margin会断层，导致视觉上的闪动；

* 思考

    现在是用js实现的，思考用css实现方案