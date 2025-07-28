loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"2.2.2.5.png",
        x:123,
        y:170,
        width:315,
        height:228,
        type:""},
		{name:"2.2.2.5A.png",
        x:65,
        y:65,
        width:73,
        height:178,
        type:""},
		
		{name:"2.2.2.5D.png",
        x:177.1,
        y:68,
        width:45.6,
        height:55.75,
        type:""},
		{name:"2.2.2.5C.png",
        x:420,
        y:68,
        width:45.6,
        height:55.75,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:0,
        y:2,
        width:470,
        height:17,
        size:14,
        textAlign:"center"},
		{compId:"ID_txt01",
            x:5,
            y:98,
            width:120.05,
            height:29,
            size:11,
            textAlign:"left"},
			{compId:"ID_txt02",
            x:153+30,
            y:98,
            width:255,
            height:24,
            size:11,
            textAlign:"left"},
			{compId:"staticTxt",
			 bodyText:"Sw1-Floor-1(config)#banner motd # This is a secure system. Authorized Access ONLY!!! #",
							x:5,
							y:53, 
							width:469,
							height:232,
							size:10.25,
							color:"#000000",
							textAlign:"left",
							},
			{compId:"staticTxt1",
			 bodyText:"Sw1-Floor-1 con0 is now available<br/>Press RETURN to get started.<br/><div style='color:#F68026;line-height:15px;'><b>This is a secure system. Authorized Access ONLY!!!</b></div>User Access Verification<br/>password:<br/>Sw1-Floor-1>enable<br/>Password:<br/>Sw1-Floor-1#",					 
							 x:149,
							 y:180,
							 width:280,
							 height:100,
							 size:11,
							 color:"#000000",
							textAlign:"left",
							}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

