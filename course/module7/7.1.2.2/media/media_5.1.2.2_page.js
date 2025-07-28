//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_1_2_2_A.png",
							x:15,
							y:30,
							width:455,
							height:352,
							type:""}];

    var slide_texts = [{compId:"ID_title",
							x:14,
							y:2, 
							width:470,
							height:17,
							size:14,
							textAlign:"center",
							expand:"down"},
							{compId:"ID_txt03",
							x:1.20+20+2,
							y:52.15, 
							width:58.05,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							
							{compId:"ID_txt04",
							x:218.70+20-44-8+20,
							y:52.15, 
							width:41.40,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left"},
							
							{compId:"ID_txt05",
							x:218.70+20-3-3+3+1,
							y:52.15, 
							width:40.40,
							height:17,
							size:11,
							textAlign:"left",
							expand:"right"},
							
							{compId:"ID_txt06",
							x:393+30-8-7,
							y:52.15, 
							width:41.40,
							height:17,
							size:11,
							textAlign:"left",
							expand:"left"},
							
							{compId:"ID_txt07",
							x:4.20+20+10,
							y:87.45+5, 
							width:220.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt08",
							x:224.85+14+18,
							y:87.45+5, 
							width:205.35,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt09",
							x:2+21+12,
							y:134.15, 
							width:426.40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt10",
							x:2+21+12,
							y:175.80+3, 
							width:426.40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt11",
							x:2+19+13+7,
							y:218.95+3, 
							width:42.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},  
							{compId:"ID_txt17",
							x:2+19+13+7+7+69-14,
							y:218.95+3-16+18-3, 
							width:50.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}, 
							{compId:"ID_txt18",
							x:2+19+13+7+14+150-30,
							y:218.95+3-16+19-4, 
							width:60.2,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt12",
							x:220.85+18+18,
							y:218.95+3, 
							width:205.25,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt13",
							x:2+19+3+10,
							y:262.10+2, 
							width:220.25,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt14",
							x:220.85+18+18,
							y:262.10+2, 
							width:205.25,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt15",
							x:2+21+12,
							y:305.45+1, 
							width:426.40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt16",
							x:2+21+12,
							y:345.75+3, 
							width:426.40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"},
							
							{compId:"ID_txt01",
							x:440.30+31-10-4,
							y:198.90-3-18, 
							width:40,
							height:17,
							size:11,
							textAlign:"center",
							expand:"up+down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
