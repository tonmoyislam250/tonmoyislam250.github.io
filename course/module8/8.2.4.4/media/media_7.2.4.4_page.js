//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";
	
    var slide_images = [{name:"7_2_4_4.png",
        x:3.05,
        y:64.75,
        width:461.95,
        height:196.2,
        type:""}];

    var slide_texts = [
			{compId:"ID_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt01",
							x:400-2,
							y:149.85+56-24, 
							width:81,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left"},
							{compId:"ID_txt02",
							x:170.3-31-6,
							y:135.85-70, 
							width:234,
							height:65.5,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt03",
							x:178-157-25,
							y:146.85+70-30-19, 
							width:186.5,
							height:232.3,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt04",
							x:238.45,
							y:220.85-8, 
							width:176.85,
							height:52.55,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"ID_txt05",
							x:5.55,
							y:362.85, 
							width:457.85,
							height:32.6,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"txt1",
						bodyText:"1",
							x:111.05+2,
							y:68.75, 
							width:10.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"txt2",
						bodyText:"2",
							x:200.4+7,
							y:176.8+3-1, 
							width:15.6,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"txt3",
						bodyText:"3",
							x:432.4+3,
							y:228.8+3-1, 
							width:15.6,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
			
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
