function loadDoc() {
        var xmlhttp;
        //兼容处理
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {         //定义在xmlhttp.open前才能确保跨浏览器的兼容性，
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { //xmlhttp.readyState每改变一次触发一次onreadystatechange函数
                        var a = xmlhttp.responseText;   //服务器端返回的信息 建议json
                        a = JSON.parse(a);   //通过JSON.parse() 处理传递回来的json，变成一个对象
                        //................................
                }
        }
        xmlhttp.open("POST", ajax_url, true); // 目前我不知道怎样通过{% url 'name'%}来写路径，所以要写外部js就得提前在内嵌的javascript中提前写一个ajax_url全局变量来获取路径。
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  //不加这句无法通过POST把数据发送到服务器端
        xmlhttp.send("a=1&b=3"); // format    "a=1&b=3"
}

// views.py中要用 a = request.POST  会得到一个字典
// 要调用其中的数据
// a['a']  一定要用中括号不要用点。
