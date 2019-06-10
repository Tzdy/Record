function $(str,...arr){
        var node;
        var s = str;
        var length = arr.length==0?0:arr[0];
        if(str[0] == '.'){
                s = s.replace('.','');
                node = document.getElementsByClassName(s)[length];
        }else if(str[0] == '#'){
                s = s.replace('#','');
                node = document.getElementById(s);
        } else if(str.search(/^\w/) == 0){
                console.log(length);
                node = document.getElementsByTagName(s)[length];
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