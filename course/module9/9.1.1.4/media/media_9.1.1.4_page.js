loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_1_1_4.jpg",
							x:1,
							y:7.4,
							width:467.15,
							height:365.2,
							type:""}];

    var slide_texts = [{compId:"staticTxt",
							bodyText:"172.16.0.0/16",
							x:157.5+9,
							y:63.35, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"right"},
							
						{compId:"staticTxt1",
							bodyText:"172.16.4.0/22",
							x:79.05+9,
							y:112.05, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"right"},
							
						{compId:"staticTxt2",
							bodyText:"172.16.12.0/22",
							x:314.85+9,
							y:112.05, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"right"},
							
						{compId:"staticTxt3",
							bodyText:"172.16.5.0/24",
							x:1+11,
							y:183.25, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"staticTxt4",
							bodyText:"172.16.9.0/24",
							x:158.5+11,
							y:183.05, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"staticTxt5",
							bodyText:"172.16.13.0/24",
							x:315.3+11,
							y:183.05, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"staticTxt6",
							bodyText:"172.16.8.0/22",
							x:238.1+9,
							y:143.25, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"ID_tx01",
							x:260.45+5,
							y:12.35+35, 
							width:151,
							height:16,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_tx02",
							x:1+9+25,
							y:331-25, 
							width:105.05,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx03",
							x:161.6+9+22,
							y:331-25, 
							width:105.05,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx04",
							x:320.85+9+20,
							y:331-25, 
							width:105,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx05",
							x:303.1,
							y:320.9, 
							width:168,
							height:80,
							size:11,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
