//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"1_3_4_2.png",
        x:15,
        y:40.1,
        width:455.85,
        height:350,
        type:""}];

    var slide_texts = [{compId:"ID_title",
							x:1,
							y:1, 
							width:468,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:31,
							y:130.2, 
							width:120,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:32,
							y:239.2, 
							width:110,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:31,
							y:356.2, 
							width:120,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:157,
							y:71.2, 
							width:96,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:156,
							y:134.7, 
							width:96,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:157,
							y:207.2, 
							width:96,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt07",
							x:158.5,
							y:283.2, 
							width:85,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt08",
							x:157,
							y:340.7, 
							width:96,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt09",
							x:271,
							y:269.9, 
							width:100,
							height:15,
							size:11,
							textAlign:"center"},
							{compId:"ID_txt10",
							x:396.3,
							y:211.5, 
							width:80,
							height:17,
							size:11,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
