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