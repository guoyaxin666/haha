$(function () {
	 // 图片
        var imgs = ["images/1.jfif","images/2.jfif","images/3.jfif","images/4.jfif","images/5.jfif"];
        //z-index的值
        var z = 999999;
        //显示第几张图片
        var num = 0;
        var box = document.getElementById('box')
        function boom() {
            var now=num+1
            if (now>imgs.length-1) {
            	now=0
            }
            $(".lunbo .lunbo-2").css("backgroundImage","url("+imgs[now]+")")
            //创建一个新的div
            var oParentNode = document.createElement("div");
            oParentNode.className="box"
            //设置z-index的值
            z--;
            oParentNode.style.zIndex = z;
            box.appendChild(oParentNode);
            var str=""
            for (var i = 0; i < 100; i++) {
                str+="<div class='haha'></div>"
            }
            $(".box").html(str)
            $(".box div").each(function (index) {
                $(this).css({"left":index%10*122,"top":parseInt(index/10)*40,"backgroundImage":"url("+imgs[num]+")","backgroundPosition":-index%10*122+"px "+(-parseInt(index/10)*40)+"px"})
            })
            setTimeout(function (){
                $(".box div").each(function (index) {
                $(this).css({"transform":'rotateX('+ (Math.random()*500-250)+'deg) rotateY('+(Math.random()*500-250)+'deg) translateX('+(Math.random()*500-250)+'px) translateY('+(Math.random()*500-250)+'px) translateZ('+(Math.random()*1000-500)+'px)',"opacity":0})
                })
                num++;
                if (num > imgs.length-1) {
                    num=0
                }
            },1000);
            setTimeout(function (){
                // oParentNode.removeChild("div")
                $(".box").remove()
            },2000)
        }
        boom()
        setInterval(function () {
            boom()
        },2500)
	$(".gushi-ul li").click(function () {
		if ($(this).attr("class")=="ll1") {
			show(30,1310,2590)
		} else if ($(this).attr("class")=="ll2") {
			show(-1310,30,1310)
		} else if ($(this).attr("class")=="ll3") {
			show(-2590,-1310,30)
		}
		$(this).css("backgroundColor","#ea7716").siblings().css("backgroundColor","#d1d1d1")
	})
	function show (number1,number2,number3) {
		$(".gushi-div2-1").css("left",number1+"px")
		$(".gushi-div2-2").css("left",number2+"px")
		$(".gushi-div2-3").css("left",number3+"px")
	}
})