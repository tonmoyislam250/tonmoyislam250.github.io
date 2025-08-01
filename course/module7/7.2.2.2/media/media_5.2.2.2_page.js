//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_2_2_2.png",
        x:73.65,
        y:175.25,
        width:343.15,
        height:160.45,
        type:""},
		{name:"drop_arrow.png",
        x:100.65,
        y:156.25,
        width:15,
        height:28,
        type:""},
		{name:"drop_arrow.png",
        x:368.65,
        y:156.25,
       width:15,
        height:28,
        type:""}
		];

    var slide_texts = [{compId:"ID_title",
            x:32,
            y:2,
            width:440,
            height:17,
            size:14,
            textAlign:"center"},	
	{compId:"ID_txt01",
            x:27.75,
            y:42.85,
            width:66.75,
            height:17,
            size:11,
            textAlign:"left"},
        {compId:"ID_txt02",
            x:92.9,
            y:42.85,
            width:100.2,
            height:17,
            size:11,
            textAlign:"center"},
         {compId:"ID_txt03",
            x:193.4,
            y:42.85,
            width:88.9,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt04",
            x:294.25,
            y:42.85,
            width:135.9,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt05",
            x:431.7,
            y:42.85,
            width:35.9,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt06",
            x:176.45,
            y:197,
            width:79.05,
            height:17,
            size:11,
            textAlign:"right"},
			{compId:"ID_txt07",
            x:24.65,
            y:252.5,
            width:53.4,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt08",
            x:79.9,
            y:252.5,
            width:32.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt09",
            x:113.7,
            y:252.5,
            width:32.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt10",
            x:146.85,
            y:252.5,
            width:28.95,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt11",
            x:23.3,
            y:268.5,
            width:52.1,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt12",
            x:74.7,
            y:268.5,
            width:37.95,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt13",
            x:112.35,
            y:268.5,
            width:30.45,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt14",
            x:144.1,
            y:268.5,
            width:29.4,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt15",
            x:173.8,
            y:268.5,
            width:30,
            height:18.25,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt16",
            x:206.2,
            y:254.5,
            width:79.05,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt17",
            x:206.05,
            y:340.4,
            width:82.05,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt07a",
            x:296.8,
            y:274.55,
            width:53.4,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt08a",
            x:352.05,
            y:274.55,
            width:32.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt09a",
            x:385.85,
            y:274.55,
            width:32.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt10a",
            x:419,
            y:274.55,
            width:28.95,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt11a",
            x:350.45,
            y:290.55,
            width:36.95,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt12a",
            x:295.85,
            y:290.55,
            width:54,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt13a",
            x:416.5,
            y:290.55,
            width:32.45,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt14a",
            x:387.25,
            y:290.55,
            width:29.4,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt15a",
            x:448.95,
            y:290.55,
            width:26.05,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt07b",
            x:24.85,
            y:296.8,
            width:53.4,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt08b",
            x:80.1,
            y:296.8,
            width:32.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt09b",
            x:113.9,
            y:296.8,
            width:32.15,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt10b",
            x:147.05,
            y:296.8,
            width:28.95,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt11b",
            x:73.5,
            y:312.8,
            width:37.95,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt12b",
            x:22.9,
            y:312.8,
            width:52.10,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt13b",
            x:144.55,
            y:312.8,
            width:29.45,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt14b",
            x:111.3,
            y:312.8,
            width:32.4,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt15b",
            x:173,
            y:312.8,
            width:29.05,
            height:17,
            size:11,
            textAlign:"center"},
			{compId:"ID_txt18",
			bodyText:"Start with byte #1,<br>I am sending 10 bytes.",    
            x:23.3,
            y:125.65,
            width:158.1,
            height:80,
            size:11,
            textAlign:"left"},
			{compId:"ID_txt19",
			bodyText:"I received 10 bytes<br>Starting with byte #1.<br>I expect byte #11 next.",    
            x:319.15,
            y:110,
            width:150.25,
            height:80,
            size:11,
            textAlign:"left"}
			];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);