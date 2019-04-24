<!DOCTYPE html>
<html>
    <style>
        #warp{
            position: absolute;
        }
        #inner2{
            position: absolute;
            left: 100px;
            width: 100px;
        }
    </style>
<body id="body">
    <div id="warp">
        <div id="inner1">
            <div id="inner2">

            </div>
        </div>
    </div>
</body>
<script>
    window.onload = function(){
        var inner2 = document.querySelector('#inner2');  //css中warp是inner2的父级 ，但在dom中parentNode是直接父级 inner1为inner2的父级
        console.log(inner2.parentNode.id);  // 这里打印的是直接父级  inner1
    }
</script>
</html>

//在css中父级为最近最近的一个定位的父级元素
//在javascript dom中为直接父级。
