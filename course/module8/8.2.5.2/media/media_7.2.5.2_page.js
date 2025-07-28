
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

    var slide_images = [{name:"7_2_5_2.jpg",
						x:19.35,
						y:133.35,
						width:438.7,
						height:161.95,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:29.75,
							y:83.5, 
							width:264.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt03",
							x:48,
							y:109.5, 
							width:115.75,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt04",
							x:193.15,
							y:109.5, 
							width:87.6,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt05",
							x:285.9,
							y:109.5, 
							width:95.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt06",
							x:200,
							y:129.5, 
							width:52.8,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt07",
							x:413.1,
							y:129.5, 
							width:38.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt08",
							x:29.75,
							y:215.05, 
							width:262.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"up"},
							{compId:"ID_txt10",
							x:200,
							y:236.5, 
							width:52.8,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt09",
							x:409.75,
							y:208.8, 
							width:49.65,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							{compId:"ID_txt11",
							x:25.75,
							y:329.05, 
							width:418.4,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
							{compId:"ID_txt12",
							x:105.75,
							y:352.05, 
							width:338.35,
							height:17,
							size:11,
							textAlign:"right",
							expand:"up"},
							];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

