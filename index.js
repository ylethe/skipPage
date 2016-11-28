/**
 * Created by yjf on 16-11-28.
 */

window.onload = function () {
    var count= 5;
    var url = 'http://10.17.0.147:9000';
    var time=document.getElementById('time');
    var timer=setInterval(function(){
        time.innerText=count--;
        if(count===0){
            clearInterval(timer);
            window.location=url+"/auth/revisePass";
        }
    },1000);
    var goBack= document.getElementById('goBack');
    goBack.onclick=function () {
        clearInterval(timer);
        window.location=url+"/auth/revisePass";
    }

};

