loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_1_1_3.jpg",
							x:5,
							y:45,
							width:450,
							height:330,
							type:""}];

    var slide_texts = [{compId:"staticTxt",
							bodyText:"172.16.0.0/16",
							x:156.5-18+21,
							y:104.35-10+3, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"right"},
							
						{compId:"staticTxt1",
							bodyText:"172.16.4.0/22",
							x:78.5+20-5-30+11+6,
							y:153-5-10+15, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"right"},
							
						{compId:"staticTxt2",
							bodyText:"172.16.12.0/22",
							x:313.85+20-5-14,
							y:153-5-10+15, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"right"},
							
						{compId:"staticTxt3",
							bodyText:"172.16.8.0/22",
							x:237.10-2+11,
							y:184.25-18+6, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"staticTxt4",
							bodyText:"172.16.5.0/24",
							x:15,
							y:213, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"staticTxt5",
							bodyText:"172.16.9.0/24",
							x:15+10+160-5-10,
							y:200+23-8, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"staticTxt6",
							bodyText:"172.16.13.0/24",
							x:15+10+160+153-5-16,
							y:200+23-10, 
							width:77,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"left"},
							
						{compId:"ID_tx01",
							x:35,
							y:350.05-25+12, 
							width:105.05,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx02",
							x:157.2+35-6,
							y:350.05-25+12, 
							width:105.05,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"center",
							expand:"down"},
							
						{compId:"ID_tx03",
							x:317.3+15,
							y:350.05-25+12, 
							width:105,
							height:16,
							size:11,
							color:"#000000",
							textAlign:"center",
							expand:"down"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
