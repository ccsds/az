// ==UserScript==
// @name         产品预定插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://booking.ltg.cn/login/privateAuthority/mainAction/main
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var logIndent=document.createElement("div");
    logIndent.style.cssText="background:red;position:fixed;left:426px;bottom:56px;z-index:1;height:36px;cursor:pointer;width:100px;text-align:center; border-radius: 7px 7px;font-size: 22px;"
    logIndent.innerHTML="点击开始";
    document.body.append(logIndent);
       var selectIn;

      logIndent.onclick=function(){
                if(this.style.background=="red"){
                    this.style.background="green";

                     selectIn=setInterval(si ,4000);
                    this.innerHTML="正在运行";
                }else{
                    this.style.background="red";
                    this.innerHTML="点击开始";
                    clearInterval(selectIn);
                }

            }

    function si(){
        //console.log("一切正常");
        var mainframe=document.getElementById("mainframe").contentWindow;
       var sub= mainframe.document.getElementsByClassName("btn-danger")[0].click();
       var queding=document.getElementsByClassName("layui-layer-btn0")[0];
queding.click();
    }

})();
