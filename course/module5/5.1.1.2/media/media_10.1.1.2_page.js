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

    var slide_images = [{name:"10_1_1_2.png",
						x:0,
						y:0,
						width:458.75,
						height:151,
						type:""},{name:"10_1_1_2_B.png",
						x:5,
						y:140,
						width:460,
						height:255,
						type:""}];

    var slide_texts = [{compId:"ID_textbox",
							x:20,
							y:19, 
							width:426,
							height:108.80,
							size:11,
							textAlign:"left"},
							
						{compId:"ID_txt01",
							x:17.2+22,
							y:153.55+190-25+42,
							rotation:269.99,
							width:100,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
						{compId:"ID_txt14",
							x:17.2+22,
							y:153.55+190-25-82,
							rotation:269.99,
							width:100,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
						{compId:"ID_txt02",
							x:48.75-10,
							y:167.05-7, 
							width:414,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt03",
							x:48.75-8,
							y:210.7-7, 
							width:414,
							height:17,
							size:11,
							textAlign:"center"},
							
						{compId:"ID_txt04",
							x:48.35+8,
							y:270.75-12, 
							width:96,
							height:17,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt05",
							x:48.35+8,
							y:346.95-11, 
							width:96,
							height:17,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt06",
							x:156.8-1,
							y:372+11, 
							width:154.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt07",
							x:196.55-1,
							y:372+11, 
							width:154.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt08",
							x:236.8-1,
							y:372+18, 
							width:163.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt09",
							x:276.05-1,
							y:372+18, 
							width:163.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt10",
							x:315.8-1,
							y:372+18, 
							width:163.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt11",
							x:354-1,
							y:372+18, 
							width:163.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt12",
							x:395.3-10,
							y:372+18, 
							width:154.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"},
							
						{compId:"ID_txt13",
							x:435.05-13,
							y:372+18, 
							width:154.85,
							height:17,
							rotation:269.99,
							size:10,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
       			 slideObject:slide_object};

}
