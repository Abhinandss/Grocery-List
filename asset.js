function grcrylist(){
    console.log("yuhuy")
    var obj1=new XMLHttpRequest();
    obj1.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var k=JSON.parse(this.responseText).Grocery
            var n=" "
            for(i=0;i<k.length;i++){
                console.log("sgxsjx")
                n+="<tr><td id='sl'>"+k[i].SLNO+"</td><td id='nm'>"+k[i].Name+"</td><td id='im'><img src="+k[i].Image+"></td><td id='qt'>"+k[i].Quantity+"</td><td id='un'>"+k[i].Unit+"</td><td id='dp'>"+k[i].Departments+"</td><td id='nt'>"+k[i].Notes+"</td></tr>"
            }
            document.getElementById("tb").innerHTML=n
        }
    }
    obj1.open("GET","Asset.JSON",true);
    obj1.send();
}