
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_1_1_2A.png",
						x:0,
						y:73,
						width:220.35,
						height:247,
						type:""},
						{name:"6_1_1_2.png",
						x:207,
						y:176,
						width:263,
						height:103,
						type:""},
						];

    var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_bodyTxt01",
							x:225-29+10,
							y:184, 
							width:220,
							height:100,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt07",
							x:24,
							y:86, 
							width:148,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt06",
							x:24,
							y:86+34, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt05",
							x:23,
							y:84+71, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt04",
							x:23,
							y:84+104, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt03",
							x:23,
							y:84+137, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt02",
							x:23,
							y:84+173, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_osi_txt01",
							x:23,
							y:84+206, 
							width:150,
							height:17,
							size:11,
							textAlign:"center"},
							{compId:"ID_OSInum07",
							x:25,
							y:83, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"},
							{compId:"ID_OSInum06",
							x:25,
							y:83+34, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"},
							{compId:"ID_OSInum05",
							x:25,
							y:81+71, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"},
							{compId:"ID_OSInum04",
							x:25,
							y:81+104, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"},
							{compId:"ID_OSInum03",
							x:25,
							y:81+137, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"},
							{compId:"ID_OSInum02",
							x:25,
							y:81+173, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"},
							{compId:"ID_OSInum01",
							x:25,
							y:82+204, 
							width:18.95,
							height:17,
							size:16,
							color:"#00918E",
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}
