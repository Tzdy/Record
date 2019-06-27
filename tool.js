function $(str,...arr){   // node , 选第几个
        var node = null;
        var s = str;
        if(str[0] == '.'){
                s = s.replace('.','');
                node = arr.length == 0? document.getElementsByClassName(s):document.getElementsByClassName(s)[arr[0]];
        }else if(str[0] == '#'){
                s = s.replace('#','');
                node = document.getElementById(s);
        } else if(str.search(/^\w/) == 0){
                node = arr.length == 0?document.getElementsByTagName(s):document.getElementsByTagName(s)[arr[0]];
        }
        return node;
}

function ajax_get(url,...arrArgs) {    //url,是否异步,成功后执行函数
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function()
	{
		if (xhr.readyState==4 && xhr.status==200)
		{
                        arrArgs[1](this);
		}
        }
        xhr.open('GET',url,arrArgs[0]);
        xhr.send();
}

var Tsdy = window.Tsdy = function () { }
    Tsdy.prototype.ajax = function (msg) {
        
            var xhr = new XMLHttpRequest;
	    if (msg.start ? msg.start() : true) {
            xhr.timeout = msg.timeout&&msg.async === true ? msg.timeout : null;
            xhr.open(msg.method, msg.url, msg.async!==undefined ? msg.async : true);
            msg.loading ? msg.loading() : 0;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    msg.end ? msg.end() : 0;
                    msg.success(this);
                }
                if (xhr.readyState == 4 && xhr.status != 200) {
                    msg.end ? msg.end() : 0;
                    if (msg.failure)
                        msg.failure(this);  
                }
            }
            xhr.addEventListener('timeout', function () {
                msg.ontimeout(this);
            })
            xhr.send();
            return xhr;
        }
    }
    window.ts = new Tsdy;
