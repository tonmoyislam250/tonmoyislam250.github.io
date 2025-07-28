//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"rt_arrow.png",
        x:136.4,
        y:28.5,
        width:66.05,
        height:9.8,
        type:""},
	{name:"bot_arrow.png",
        x:182.55,
        y:106.45,
        width:9.95,
        height:27.95,
        type:""}];

    var slide_texts = [{compId:"ID_s1_title",
            x:2,
            y:2,
            width:430,
            height:13,
            size:14,
            textAlign:"center"},
		{compId:"ID_txt01",
            x:69.95,
            y:138,
            width:238.05,
            height:17,
            size:11,
            textAlign:"center"},
		{compId:"ID_txt02",
            x:69.95,
            y:299+9,
            width:238.05,
            height:17,
            size:11,
            textAlign:"center"},		
		
		{compId:"staticTxt1",
			bodyText:"172.16.0.0/23",
				x:330.85,
				y:187.05, 
				width:127.15,
				height:17,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt2",
			bodyText:"172.16.2.0/23",
				x:330.85,
				y:227.8, 
				width:127.15,
				height:17,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt3",
			bodyText:"172.16.4.0/23",
				x:330.85,
				y:268.15, 
				width:127.15,
				height:17,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt4",
			bodyText:"172.16.254.0/23",
				x:330.85,
				y:338.15, 
				width:127.15,
				height:17,
				size:11,				
				textAlign:"left"},
		{compId:"staticTxt5",
			bodyText:'<div class="ipaddress"><div class="tab"><span class="col1">172.</span><span class="col2">&nbsp;16.</span><span class="col3">0000</span><span class="col4">000</span><span class="col5">0.</span><span class="col6">0000</span><span class="col7">0000</span></div><br/><br/><div class="tab"><span class="col1">255.</span><span class="col2">255.</span><span class="col3">1111</span><span class="col4">111</span><span class="col5">0.</span><span class="col6">0000</span><span class="col7">0000</span></div></div>',
			    x:66.55,
				y:42.5, 
				width:250,
				height:29,
				size:11,						
				textAlign:"center"},
			{compId:"staticTxt5",
			bodyText:'<div class="ipaddress"><div class="tab"><span class="col1">172.</span><span class="col2">&nbsp;16.</span><span class="col3">0000</span><span class="col4">000</span><span class="col5">0.</span><span class="col6">0000</span><span class="col7">0000</span></div><br/><br/><br/><div class="tab"><span class="col1">172.</span><span class="col2">&nbsp;16.</span><span class="col3">0000</span><span class="col4">000</span><span class="col5">0.</span><span class="col6">0000</span><span class="col7">0000</span></div><br/><br/><br/><div class="tab"><span class="col1">172.</span><span class="col2">&nbsp;16.</span><span class="col3">0000</span><span class="col4">010</span><span class="col5">0.</span><span class="col6">0000</span><span class="col7">0000</span></div><br/><br/><br/><br/><br/><div class="tab"><span class="col1">172.</span><span class="col2">&nbsp;16.</span><span class="col3">1111</span><span class="col4">111</span><span class="col5">0.</span><span class="col6">0000</span><span class="col7">0000</span></div></div>',
			    x:66.55,
				y:177.5, 
				width:250,
				height:29,
				size:11,						
				textAlign:"center"},
	];
		
				

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
