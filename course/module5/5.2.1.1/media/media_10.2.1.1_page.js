//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_2_1_1.jpg",
							x:10,
							y:129.5,
							width:430,
							height:303,
							type:""}];

    var slide_texts = [ {compId:"ID_txt01",
							x:12,
							y:54.35-6,
							size:11}, 
						{compId:"staticTxt1",
							bodyText:'<span>192.168.1.5</span>',
							x:40.55-25+3,
							y:180.65+9,
							width:62.1,
							height:17,
                        	textAlign:"center"},
							
						{compId:"staticTxt2",
							bodyText:'<span>192.168.1.8</span>',
							x:369.9+11,
							y:180.65+9,
							width:62.1,
							height:17,
                        	textAlign:"center"},
							
						{compId:"staticTxt3",
							bodyText:'<span>192.168.1.6</span>',
							x:40.55-25+3,
							y:323.65+23,
							width:62.1,
							height:17,
                        	textAlign:"center"},
							
						{compId:"staticTxt4",
							bodyText:'<span>192.168.1.7</span>',
							x:369.9+11,
							y:323.65+23,
							width:62.1,
							height:17,
                        	textAlign:"center"},
							
						{compId:"staticTxt5",
							bodyText:'<span>H1</span>',
							x:59.95+15-40+5,
							y:139.3+4-1,
							width:20,
							height:20,
                        	textAlign:"center"},
							
						{compId:"staticTxt6",
							bodyText:'<span>H3</span>',
							x:370.85+94-71+8,
							y:139.3+4-1,
							width:20,
							height:20,
                        	textAlign:"center"},
							
						{compId:"staticTxt7",
							bodyText:'<span>H2</span>',
							x:59.95+15-40+5,
							y:272.1+26,
							width:20,
							height:20,
                        	textAlign:"center"},
							
						{compId:"staticTxt8",
							bodyText:'<span>H4</span>',
							x:370.85+94-71+8,
							y:272.1+26,
							width:20,
							height:20,
                        	textAlign:"center"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
