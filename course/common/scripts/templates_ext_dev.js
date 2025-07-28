// JavaScript Document

/*
	Activity Component Container
*/
(ActComp = function(o){
	this.initialize();
	
	var t = this;	
	t.addChild(getActivityElement(o.subType,o));		
	update = true;
	
}).prototype = new createjs.Container();
/*
	Get Activity type
*/
function getActivityElement(ty,p1)
{
	var el;
	switch(ty)
	{
		case "ANIMATION":
				el = new AControl(p1);		
			break;
		case "SYNTAX":
				el = new SyntaxComp(p1);
			break;		
		default:
				el = new createjs.Shape();
			break;
		
	}
	return el;
}

/*
	Animation Controller Component
		
*/
(AControl = function(o){
	this.initialize();
	var t = this;
	/*
	a	-	animation clip
	c 	-	Controller container
	pb 	-	play button container;
	pab	-	pause button container;
	cf 	-	current frame
	tf	-	total frame
	up	-	update boolean
	ef	-	Enterframe function	
	*/
	var a,c,pb,pab,tf,cf,tb;
	
	var img = [];
	tf = parseInt(o.totalFrame);
	
	//Set Animation clip to the controller
	t.setAnimationClip = function(c)
	{
		t.addChild(c);
		a = c.anim;
		a.stop();	
		cf = 0;
		up = true;
		createjs.Ticker.addListener(t);
	}
	//Initiate controller functionality
	
	t.tick = function()
	{
		cf = a.currentFrame;
		if(up)
		{
			up = false;
			if(cf == tf-1)
			{
				pb.visible = true;
				pab.visible = false;
				a.gotoAndStop(tf-1);
			}
			console.log("currentframe "+cf);
		}
		
		if(cf == tf-2)
		{
			up = true;
		}
		
	}
	
	//Mouse out Events
	t.mout = function(e)
	{
		e.target.r.visible = false;
		update = true;
	}
	
	//Mouse over Events
	t.mover = function(e)
	{
		e.target.r.visible = true;
		update = true;
	}
	
	//Mouse click Events
	t.mclick = function(e)
	{		
		switch(e.target.t)
		{
			case "py":										
					pb.visible = false;
					pab.visible = true;
					a.play();
					up = true;
				break;	
			case "pa":					
					pb.visible = true;
					pab.visible = false;
					a.stop();
					up = false;
				break;	
		}
		
		update = true;
	}
		
	t.init = function()
	{
		//Initiate controller buttons	
		c = new createjs.Container();		
		t.addChild(c);	
		/*definitions		
		r 	-	roll container
		n	-	normal container	
		t	-	button type	
		h	-	button hit area
		*/
		var r,n,h;				
		
		//Play button area
		pb = new createjs.Container();	
		
		n = new createjs.Bitmap(img["pn"]);
		pb.addChild(n);
		pb.n = n;
		r = new createjs.Bitmap(img["pr"],"no-repeat");
		pb.addChild(r);
		pb.r = r;		
		r.visible = false;
		h = new createjs.Shape()
		h.graphics.beginFill().drawRect(0,0,26,36);	
		h.alpha = 0.5;
		pb.addChild(h);
		pb.t = "py";	
		pb.onMouseOver = t.mover;
		pb.onMouseOut = t.mout;
		pb.onClick = t.mclick;		
		c.addChild(pb);
		
		//Pause button area
		pab = new createjs.Container();				
		n = new createjs.Bitmap(img["pan"]);
		pab.addChild(n);
		pab.n = n;
		r = new createjs.Bitmap(img["par"]);
		pab.addChild(r);
		pab.r = r;
		h = new createjs.Shape();
		h.graphics.beginFill().drawRect(0,0,33,27);
		pab.addChild(h);
		r.visible = false;
		pab.onMouseOver = t.mover;
		pab.onMouseOut = t.mout;
		pab.onClick = t.mclick;
		pab.t = "pa";
		pab.visible = false;
		c.addChild(pab);
			
		update = true;
				
		//Call animation function
		Animation(t,o.id);
	}
	
	t.li = function(e)
	{
		if (e.item.type == "image") { img[e.item.id] = e.result; }
	}
	
	var manifest = [{id:"pn", src:"../../../common/images/animation-controller/play.png"},
					{id:"pr", src:"../../../common/images/animation-controller/paly_hover.png"},
					{id:"pan", src:"../../../common/images/animation-controller/pause.png"},
					{id:"par", src:"../../../common/images/animation-controller/pause_over.png"}];	
	
	var pjs = new createjs.LoadQueue(false);
	pjs.addEventListener("fileload", t.li);//li- load images function
	pjs.addEventListener("complete", t.init);
	pjs.loadManifest(manifest);
	
}).prototype = new createjs.Container();

/*
	Syntax Checker Component Container
	//Example {x:10,y:10,compId:"ID_s3_SC"}
*/
(SyntaxComp = function (o) {
	this.initialize();
	
	var t = this;
	
	var a,mD,d,cC;
	
	o.width = o.width ? parseFloat(o.width) : 300;
	o.height = o.height ? parseFloat(o.height) : 300;
	o.div = o.div ? o.div : "commonMediaText";
		
	//background design
	var b = new createjs.Shape();
	b.graphics.beginFill("#33A7A4").drawRoundRect(0,0,o.width,o.height,10);
	t.addChild(b);
	b = new createjs.Shape();
	b.graphics.beginFill("#666263").drawRect(0,15,o.width,o.height-28);
	t.addChild(b);
	
	//Router output area
	b = new Router({x:5,y:20,width:o.width-10,height:o.height-60});
	t.addChild(b);
	
	o.size = $(mx).find("component#"+o.compId).attr("fontSize");
	
	//DOM elements
	a = document.createElement("div");			
	a.style.cssText = "top:0px;left:0px;visibility:hidden;overflow:auto;color:#000;white-space:pre-wrap;font-size:"+o.size+"px;width:"+(o.width-30)+"px;height:"+(o.height-78)+"px;";	
	a.id = o.compId;
	
	$("#"+o.div).append(a);
	
	t.init = function()
	{
		mD = new createjs.DOMElement(a);
		mD.x = 23;
		mD.y = 28;
		t.addChild(mD);
		d = $(mx).find("component#"+o.compId);
		if(d.find("existingcommands").length != 0)
		{
			$("#"+o.compId).append("<div>"+d.find("existingcommands").text()+"</div>");		
		}			
		cC = 0;		
		t.cd();
	}
	t.ke = function(e)
	{		
		if(e.keyCode == 13)
		{				
			if(($("#"+o.compId+"_prompt_"+cC).val().replace(/\s+$/,"")) == "")
			{
				t.cl();
				$("#"+o.compId+"_prompt_"+cC).attr("id","");
				t.cd();								
			}
			else if(($("#"+o.compId+"_prompt_"+cC).val().replace(/\s+$/,"")) == ($(d.find("command")[cC]).find("correctresponse").text()))
			{		
				t.cl();		
				t.sm();
			}
			else
			{
				$("#"+o.compId).append("<div>"+d.find("feedback").text()+"</div><br/><br/>");
				t.cl();
				$("#"+o.compId+"_prompt_"+cC).attr("id","");
				t.cd();
			}
		}
	}
	
	t.sm = function()
	{		
		if(cC < d.find("command").length-1)
		{	
			$("#"+o.compId+"_prompt_"+cC).val($(d.find("command")[cC]).find("correctresponse").text());
			t.rt();				
			cC++;
			t.cd();										
		}
	}
	
	t.cd = function()
	{
		if($(d.find("command")[cC]).attr("prompt") == "") return;
		$("#"+o.compId).append("<div style='font-family:Courier New;'><span id="+o.compId+"_syn_"+cC+" style='color:#000;'>"+$(d.find("command")[cC]).attr("prompt")+"</span><input id="+o.compId+"_prompt_"+cC+" type='' style='background-color:transparent;border:none;color:#000;font-size:"+o.size+"px;'></div>");
		$("#"+o.compId+"_prompt_"+cC).focus();
		$("#"+o.compId+"_prompt_"+cC).css("width",(o.width-55)-$("#"+o.compId+"_syn_"+cC).width());
		$("#"+o.compId+"_prompt_"+cC).keydown(function(e) {t.ke(e);});
	}	
	
	t.rt = function()
	{
		$("#"+o.compId).append("<div>"+$(d.find("command")[cC]).find("deviceresponse").text()+"</div>");
		$("#"+o.compId).append("<div>"+$(d.find("command")[cC]).find("instruction").text()+"</div>");
	}
	
	t.cb = function(p1)
	{
		switch(p1)
		{
			case o.compId+"_r":
					$("#"+o.compId).children().remove();
					t.init();
			 	break;	
				
			case o.compId+"_sm":
					t.cl();
					t.sm();
			 	break;	
				
			case o.compId+"_sa":
					for(var i = cC;i<d.find("command").length-1;i++)
					{						
						t.cl();
						t.sm();				
						t.cl();				
					}					
			 	break;	
		}
	}
	t.cl = function()
	{
		$("#"+o.compId+"_prompt_"+cC).val($("#"+o.compId+"_prompt_"+cC).val());
		$("#"+o.compId+"_prompt_"+cC).prop('disabled', true);
		$("#"+o.compId+"_prompt_"+cC).css("color","#000");
		$("#"+o.compId+"_prompt_"+cC).focusout();
		$("#"+o.compId+"_prompt_"+cC).attr("readonly",true);
	}
	
	var btn = new Button({x:18,y:o.height-37,width:126.6,height:20,id:o.compId+"_r",div:o.div,text:"Reset",cb:t.cb});
	t.addChild(btn);
	
	btn = new Button({x:150,y:o.height-37,width:126.6,height:20,id:o.compId+"_sm",div:o.div,text:"Show Me",cb:t.cb});
	t.addChild(btn);
	
	btn = new Button({x:282,y:o.height-37,width:126.6,height:20,id:o.compId+"_sa",div:o.div,text:"Show All",cb:t.cb});
	t.addChild(btn);
	
	t.init();
	
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	
}).prototype = new createjs.Container();