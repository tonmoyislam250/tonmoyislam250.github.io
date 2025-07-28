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

    var slide_images = [{name:"7_2_4_3.png",
						x:2.05,
						y:64.75,
						width:450,
						height:166.2,
						type:""},
						{name:"box.png",
						x:4.55,
						y:245.85,
						width:459,
						height:175,
						type:""}
						];

    var slide_texts = [{compId:"ID_title",
							x:25,
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
							x:21,
							y:146.85+70-30, 
							width:290.5,
							height:232.3,
							size:11,
							textAlign:"left",
							expand:"down"},
							{compId:"txt1",
						bodyText:"1",
							x:111.05,
							y:68.75, 
							width:10.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"txt2",
						bodyText:"2",
							x:343.05-3,
							y:199.8-2, 
							width:10.3,
							height:17,
							size:11,
							color:"#ffffff",
							textAlign:"center"},
							{compId:"ID_titleTxt01",
							x:4.85+15,
							y:271.05-19-5, 
							width:400,
							height:124,
							size:11,
							color:"#3E1E53",
							textAlign:"left",
							expand:"down"},
							{compId:"ID_bodyTxt01",
							x:4.85+17,
							y:275.05, 
							width:430,
							height:124,
							size:11,
							textAlign:"left",
							expand:"down"}
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}