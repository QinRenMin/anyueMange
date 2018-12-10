(function () {
    let button = document.getElementsByTagName("button")[0];
    let inputs = document.getElementsByTagName("input");
    let a = document.getElementsByTagName("a")[0];
    // let url = "/api/user/login";
    function createAjax(url) {
        let xmlHttp = new XMLHttpRequest(); //创建ajax对象
        let name = inputs[0].value;
        let password = inputs[1].value;
        let data = {
            name:name,
            password:password
        };

        if(data.name.length===0 || data.password.length===0) {
                    alert("用户名或者密码不能为空");
                    return;
                }
        console.log(data);
        // xmlHttp.open("POST",url,true);
        //
        //  xmlHttp.send(data);
        let flag = 1;
        if(flag){
            a.setAttribute("href","/admin");
        }

    }
   button.onclick = function(){
       let url = "/api/user?action=login&username="+inputs[0].value+"&password="+inputs[1].value;
       createAjax(url);
   }
})();