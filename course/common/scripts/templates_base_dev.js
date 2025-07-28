/*

Common names for Variables
	preload	-	preloadJS object
	sCanvas	-	Slide canvas tag id
	pCanvas	-	Popup canvas tag id
	mStage	-	Stage element for main Media
	//sStage	-	Stage element for Slide media
	pStage	-	Stage element for Popup media
	p 		-	Parent
	t 		-	this
	cx 		-	Canvas XML
	mx 		-	media XML	
	x		-	XML node parameter
	mout	-	Mouse out event function
	mover	-	Mouse over event function
	mclick	-	Mouse click event function	
	i		- 	For loop initial variable
	l		- 	length
	o		-	object
	w 		- 	width
	h		- 	height
	
Common Public functions to load assets like buttons, popups

//Function to show Purple Popup
var popUpObject = {}
popUpObject.x = 10;
popUpObject.y = 10;
popUpObject.width = 100;
popUpObject.height = 100;
popUpObject.titleTextId = "ID_title";
popUpObject.bodyTextId = "ID_body";
popUpObject.closeBtn = true;

showFeedback(popUpObject);
		(or)
showFeedback({x:10,y:10,width:100,height:100,titleTextId:"ID_title",bodyTextId:"ID_body",closeBtn:true});

//end to show purple popup


*/

//Public variables
var canvas, mStage, sStage, pStage,root,mDOM;
var sWidth = 470;
var sHeight = 400;
var update = false;
/*
	Root Container
*/
(rootC = function(){
	this.initialize();
	
	var t = this;
	
	//Draw hidden background to occupy the stage size
	var b = new createjs.Shape();
	b.graphics.beginFill("#FFF").drawRect(0,0,sWidth,sHeight);
	//b.alpha = 0.2;
	t.addChild(b);
		
	t.resizer = function()
	{			
		canvas.width = $("#flashContent").width();
		canvas.height = $("#flashContent").height();	
		mDOM.x = 1.2;
		var r = Math.min(canvas.width/sWidth,canvas.height/sHeight);			
		if(r > 1.3)
		{	
			r = 1.3;			
		}else if(r < 0.9)
		{			
			r = 0.9;				
		}	
		t.scaleX = t.scaleY = r;	
		t.x = ((canvas.width - (sWidth * r))/2);
		t.y = ((canvas.height - (sHeight * r))/2);
		
		
		if(t.x == 0)
		{		
			mDOM.x = 2.5;
			canvas.width = canvas.width+7;			
		}		
		mStage.update();				
	}	
	
	t.tick = function()
	{				
		if(update)
		{			
			update = false;
			mStage.update();			
		}
	}		
	
	$(window).resize(function(){
		t.resizer();
	});
	t.resizer();		
		
}).prototype = new createjs.Container();
/*
	Multiple Slides with Button Bar Container
*/
(MBar = function(x){
	this.initialize();
	
	var t = this;
	var sa = [];
	var a;
			
	//Roll over event
	t.f = function(e)
	{
		if(e.target == a) return;
		document.body.style.cursor='pointer';
		e.target.r.visible = false;
		e.target.n.visible = true;
		update = true;
	}	
	//Roll out event
	t.g = function(e)
	{
		document.body.style.cursor='default';
		if(e.target == a) return;		
		e.target.n.visible = false;
		e.target.r.visible = true;
		update = true;
	}	
	//Click event
	t.h = function(e)
	{		
		if(e.target == a) return;
		a.n.visible = false;
		a.r.visible = true;	
		if(sa[a.a].hide) sa[a.a].hide();	
		sa[a.a].visible = false;
		a = e.target;		
		t.k();		
	}		
	//Handle slide Events	
	t.k = function()
	{		
		a.r.visible = false;
		a.n.visible = true;	
			
		sa[a.a].visible = true;
		if(sa[a.a].show) sa[a.a].show();
		update = true;
	}		
	//For loading Slide Assets	
	$(x).children().each(function(index, element) {		
		//Find elements
		el = $(this).find("element")[0];
		if(el)
		{
			//Slide content	
			ty = $(this).attr("type") ? $(this).attr("type") : "SINGLE";
			$("#commonMediaText").append("<div id='slide_"+index+"'></div>");
			sl = getCJSElement(ty,element,"slide_"+index);
			//sl = getCJSElement(ty,element,"commonMediaText");
			t.addChild(sl);		
			if(sl.hide) sl.hide();		
			sl.visible = false;				
			sa[sa.length] = sl;			
		}
		else
		{
			//Element content
			o = {};				
			$.each(this.attributes,function(i, at)
			{
				o[at.name] = at.value;		
			});				
			t.addChild(getCJSElement($(this).attr("type"),o));			
		}
	});	
			
	//Loading Button Assets	 
	var q,s,r,u,v,w,n,ty,sl,o,el;		
	n = new IComp({src:"../../../common/images/btn_bar.png",x:sWidth-30,y:1})
	t.addChild(n);	
	for(var i = 0;i<$(x).find("slide").length;i++)
	{
		u = i < 10 ? "0"+(i+1) : i;
		r = "../../../common/images/btn"+u+".png";
		s = "../../../common/images/btn"+u+"_sel.png";		
		q = new createjs.Container();				
		v = new IComp({src:r,x:0,y:0});	
		q.addChild(v);	
		q.n = v;	
		v = new IComp({src:s,x:0,y:0});
		q.addChild(v);	
		q.r = v;			
		w = new createjs.Shape()
		w.graphics.beginFill().drawRect(0,0,26,36);			
		q.addChild(w);			
		q.a = i;
		q.onMouseOver = t.f;
		q.onMouseOut = t.g;
		q.onClick = t.h;
		t.addChild(q);		
		q.x = sWidth-28;
		q.y = 3+(i*36);		
		if(i==0 ) a = q;		
	}		
	//Load first slide assets
	t.k();
			
}).prototype = new createjs.Container();

/*
	Slide Container
*/
(slide = function(x,di){
	this.initialize();
	
	var t = this;
	var d = di;
	var tba = [];
	
	$(x).find("element").each(function(index, element) {
		var o = {};
		$.each(this.attributes,function(i, at)
		{
			o[at.name] = at.value;				
		});	
		var cd = getCJSElement($(this).attr("type"),o,di)
		t.addChild(cd);	
		if($(this).attr("type")	== "TEXTBOX") tba.push(cd);
	});
	//To bring Textboxes to front
	
	for(var i = 0;i<tba.length;i++)
	{
		tba[i].setChildIndex(tba[i],t.getNumChildren-1);
	}
		
	t.hide = function()
	{
		$("#"+d).hide();	
	}
	
	t.show = function()
	{
		
		$("#"+d).show();	
	};
	update = true;
}).prototype = new createjs.Container();
/*
	Blue Button Component
	{x:18,y:o.height-37,width:126.6,height:20,id:"r",text:"Reset",cb:t.cb}
	//cb -- callback
*/
(Button = function(o){
	this.initialize();
	
	var t = this;	
	var n,r,b;
	o.id = o.id ? o.id : "btn";
	o.width = o.width ? parseFloat(o.width) : 100;
	o.height = o.height ? parseFloat(o.height) : 40;
	o.text = o.text ? o.text : "123";
	o.textId = o.compId ? o.compId : "btn_"+o.id;
	o.div = o.div ? o.div : "commonMediaText";
	
	n = new createjs.Container();	
	b = new createjs.Shape();
	b.graphics.beginFill("#038BD1").drawRoundRect(0,0,o.width,o.height,4);
	n.addChild(b);	
	t.addChild(n);
	
	r = new createjs.Container();	
	b = new createjs.Shape();
	b.graphics.beginFill("#CCEAF7").drawRoundRect(0,0,o.width,o.height,4);
	r.addChild(b);	
	t.addChild(r);
	
	t.mover = function()
	{
		document.body.style.cursor='pointer';
		$("#"+o.textId).css("color","black");
		n.visible = false;
		r.visible = true;
		update = true;
	}
	t.mout = function()
	{
		document.body.style.cursor='default';
		$("#"+o.textId).css("color","white");
		n.visible = true;
		r.visible = false;
		update = true;
	}
	t.mclick = function()
	{
		if(o.cb) o.cb(o.id);
	}
	
	t.onMouseOver = t.mover;
	t.onMouseOut = t.mout;
	t.onClick = t.mclick;
	r.visible = false;
	
	var tb = new TComp({x:-11,y:0,width:o.width-2,text:o.text,align:"center",color:"white",div:o.div,textId:o.textId,style:"cursor:pointer"});
	t.addChild(tb);
	
	tb.y = (o.height-$("#"+o.textId).height())/2;
	$("#"+o.textId).mouseover(function(e){t.mover();});
	$("#"+o.textId).mouseout(function(e){t.mout();});
	$("#"+o.textId).click(function(e){t.mclick();});
	
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	
}).prototype = new createjs.Container();
/*
	TextBox(Feedback) Component
	<element type="TEXTBOX" subType="CLOSABLE" titleId="ID_s2_title" bodyId="ID_bubble" x="0" y="0" width="200" height="100" animated="1" visible="0"/>
*/
//          Old format
(TBComp = function(o){
	this.initialize();
		
	var t = this;
	var a,tc,ht,cd,th;
	w = o.width ? parseFloat(o.width) : 50;
	h = o.height ? parseFloat(o.height) : 50;
	o.div = o.div ? o.div :"mediaContainer";
	o.divId = o.divId  ? o.divId : o.div+"_textBoxDiv";
	$("#"+o.div).append(('<div id="'+o.divId+'"></div>'));
	cd = document.createElement("canvas");
	cd.width = w+25;
	cd.height = h+20;
	cd.id = "textBoxCanvas";
	cd.style.cssText = "position:absolute;left:0px;top:0px;";
	$("#"+o.divId).append(cd);
	
	var e = new createjs.DOMElement(cd);
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	t.y = t.y-11;
	t.x = t.x - 9;
	t.addChild(e);
	
	pStage = new createjs.Stage(cd);
		
	var th = new createjs.Container();	
	th.x = 15;
	th.y = 10;
	pStage.addChild(th);
	
	//Background color
	a = new createjs.Shape();
	a.graphics.beginFill("#C1ABD1").drawRoundRect(0,0,w,h,4);	
	a.shadow = new createjs.Shadow("#666263",0,3,7);
	th.addChild(a);
	//Title line
	a = new createjs.Shape();
	a.graphics.beginFill("#462559").drawRect(2,0,w-4,2);	
	a.y = 5;
	th.addChild(a);
	ht = 4;	
	h = h - 4;
	//Title text 
	if(o.titleId)
	{		
		tc = new TComp({compId:o.titleId,x:21,y:13,width:w-30,div:o.divId,color:"#442557"});
		t.addChild(tc);
		ht = $("#"+o.titleId).height()+4;
		a.y = ht;
		h = h-ht+4;
	}
	//Body background
	a = new createjs.Shape();
	a.graphics.beginFill("#fff").drawRect(4,8,w-8,h-13);	
	a.y = ht ? ht :0;
	th.addChild(a);
	//Body text 
	if(o.bodyId)
	{
		o.style = "overflow:auto !important; height:"+(h-14)+"px;";
		tc = new TComp({compId:o.bodyId,x:22.5,y:(a.y+18),width:w-11,style:o.style,div:o.divId});
		t.addChild(tc);
	}		
	//Close Button
	o.subType = o.subType ? o.subType : "ROLLOVER";
	
	if(o.subType == "CLOSABLE")
	{ 
		if (createjs.Touch.isSupported()) createjs.Touch.enable(pStage);
		pStage.enableMouseOver();
		a = new IComp({src:"../../../common/images/closeBtn.jpg",x:w-18,y:3});
		a.scaleX = a.scaleY = 0.9;
		a.onClick = function(ev)
		{
			if(o.animated && o.animated == "1")
			{
				$("#"+o.divId).hide(2000);
			}
			else
			{
				t.visible = false;
			}
			if(t.getStage()) t.getStage().update();	
		}
		th.addChild(a);
	}
	o.visible = o.visible ? o.visible : "1";
	if(o.visible == "0") t.visible = false;
	pStage.update();
	
}).prototype = new createjs.Container();

/* Textbox component with cjs
(TBComp = function(o){
	this.initialize();
		
	var t = this;
	var a,tc,ht,cd,th;
	w = o.width ? parseFloat(o.width) : 50;
	h = o.height ? parseFloat(o.height) : 50;
	o.div = o.div ? o.div : "commonMediaText";
		
	//Background color
	a = new createjs.Shape();
	a.graphics.beginFill("#C1ABD1").drawRoundRect(0,0,w,h,4);	
	a.shadow = new createjs.Shadow("#666263",0,3,7);
	t.addChild(a);
	//Title line
	a = new createjs.Shape();
	a.graphics.beginFill("#462559").drawRect(2,0,w-6,2);	
	a.y = 5;
	t.addChild(a);
	ht = 4;	
	h = h - 4;
	//Title text 
	if(o.titleId)
	{		
		tc = new TComp({compId:o.titleId,x:15,y:2,width:w-30,div:o.div,color:"#442557"});
		t.addChild(tc);
		ht = $("#"+o.titleId).height()+6;
		a.y = ht;
		h = h-ht+4;
	}
	//Body background
	a = new createjs.Shape();
	a.graphics.beginFill("#fff").drawRect(4,8,w-8,h-13);	
	a.y = ht ? ht :0;
	t.addChild(a);
	//Body text 
	if(o.bodyId)
	{
		o.style = "overflow:auto !important; height:"+(h-14)+"px;";
		tc = new TComp({compId:o.bodyId,x:15,y:(a.y+8),width:w-11,style:o.style,div:o.div});
		t.addChild(tc);
	}		
	//Close Button
	o.subType = o.subType ? o.subType : "ROLLOVER";
	
	if(o.subType == "CLOSABLE")
	{ 		
		a = new IComp({src:"../../../common/images/closeBtn.jpg",x:w-18,y:3});
		a.scaleX = a.scaleY = 0.9;
		a.onClick = function(ev)
		{
			if(o.animated && o.animated == "1")
			{
				$("#"+o.divId).hide(2000);
			}
			else
			{
				t.visible = false;
			}
			if(t.getStage()) t.getStage().update();	
		}
		th.addChild(a);
	}
	o.visible = o.visible ? o.visible : "1";
	if(o.visible == "0") t.visible = false;
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	
}).prototype = new createjs.Container();
*/
/*
	Bubble Component
	<element type="BUBBLE" compId="ID_bubble" x="100" y="70" width="200" height="100" size="11" align="center" tailPosition="2" tailFlip="1"/>
*/
(BComp = function (o) {
	this.initialize();
	
	var t = this;	
	var w,h;
	var a,b,c,d,e,f;
	o.width = o.width ? parseFloat(o.width) : 50;
	o.height = o.height ? parseFloat(o.height) : 50;
	w = o.width;
	h = o.height;
	o.align = o.align ? o.align : "left";
	o.x = o.x ? parseFloat(o.x) : 0;
	o.y = o.y ? parseFloat(o.y) : 0;
	o.size = o.size ? o.size : 11;
	
	if((o.tailPosition == "2") || (o.tailPosition == "3") ||(o.tailPosition == "4") ||(o.tailPosition == "8") ||(o.tailPosition == "9") ||(o.tailPosition == "10")) w = w-20;
	o.w = w;	
	f = new TComp({subType:"BUBBLE",compId:o.compId,x:0,y:0,size:o.size,div:"commonMediaText",width:w-6,height:h-6,align:o.align,bgColor:"#cce9e7",borderColor:"#67bdbc",corner:2,border:3,expand:"down"});
			
	w = $("#"+o.compId).width();
	h = $("#"+o.compId).height() + 10;
	
	var c = new createjs.Container();
	a = new createjs.Shape();
	a.graphics.beginFill("#000").drawRoundRect(0,0,o.w,h-2,4);	
	
	w = w < 30 ? 30 : w;
	h = h < 30 ? 30 : h;
	o.val = (o.tailFlip && o.tailFlip == "1") ? 15 : 0;
	b = new createjs.Shape();
	b.graphics.beginFill("#67bdbc");
	b.graphics.lineTo(0,0).lineTo(15,0).lineTo(o.val,-22).lineTo(0,0);
	b.graphics.endFill();
	c.addChild(b,a);
	c.shadow = new createjs.Shadow("#666263",0,1.5,5);
	c.y = 1;
	t.addChild(c);
	d = new createjs.Shape();
	d.graphics.beginFill("#67bdbc");
	d.graphics.lineTo(0,0).lineTo(15,0).lineTo(o.val,-22).lineTo(0,0);
	d.graphics.endFill();
	t.addChild(d);
	t.addChild(f);	
	
	switch(o.tailPosition)
	{
		case "1"://done
				o.y = o.y + 19;
				b.y = 1;
				b.x = w-13;
				o.x = o.x;
				o.y = o.y + 1;
			break;					
		case "2":
				b.rotation = 90;				
				b.x = w+5;
				b.y = 12;
				o.x = o.x - 3;
			break;								
		case "3":
				b.rotation = 90;	
				b.x = w+5;
				b.y = (h-15)/2;
				o.x = o.x - 3;
			break;							
		case "4"://done
				b.rotation = 90;	
				b.x = w+5;
				b.y = h-20;
				o.x = o.x - 3;	
			break;								
		case "5"://done
				b.rotation = 180;				
				b.x = w;
				b.y = h-1;	
				o.x = o.x - 1;			
				/*o.y = o.y + 30;*/
								
			break;									
		case "6"://done
				b.rotation = 180;				
				b.x = (w+25)/2;
				b.y = h-4;
				//o.y = o.y - 15;
			break;										
		case "7"://done
				b.rotation = 180;				
				b.x = 20;
				b.y = h-4;
				//o.y = o.y - 45;
			break;											
		case "8"://done
				b.rotation = 270;				
				f.x = f.x+5;
				c.x = c.x + 5;
				b.x = b.x + 5;
				b.y = h-7;
				o.x = o.x + 18;
				//o.y = o.y + 8;
			break;											
		case "9"://done
				b.rotation = 270;				
				f.x = f.x+5;
				c.x = c.x + 5;
				b.x = b.x + 5;
				b.y = (h+15)/2;
				o.x = o.x + 18;
			break;												
		case "10":
				b.rotation = 270;
				f.x = f.x+5;
				b.x = b.x;
				b.y = 28;
			break;			
		case "11":
				b.x = 0;
				b.y = 1;
				o.y = o.y + 19;
			break;		
		case "12":
				o.y = o.y + 19;
				b.x = (w-22)/2;
				b.y = 1;
			break;	
		
	}	
	
	if((o.tailPosition == "5") || (o.tailPosition == "6") || (o.tailPosition == "7"))
	{
		if(o.height > (h+12)) 
		{					
			o.y = o.y + (o.height - h) - 19;
		}else
		{					
			o.y = o.y - ((h+ 21) - o.height);						
		}
	}
	if((o.tailPosition == "8") || (o.tailPosition == "9") || (o.tailPosition == "10") || (o.tailPosition == "2") || (o.tailPosition == "3") || (o.tailPosition == "4"))
	{
		if(o.height > h) 
		{					
			o.y = o.y + (o.height - h) + 2;
		}else
		{				
			
			o.y = o.y - (h - o.height);						
		}
	}
	
	d.x = b.x;
	d.y = b.y;
	d.rotation = b.rotation;
	t.x = o.x;
	t.y = o.y;
		
}).prototype = new createjs.Container();
/*
	Router Output Container
	<element type="ROUTER" textId="ID_s1_txt04" x="0" y="250" width="450" height="100"/>
*/
(Router = function(o){
	this.initialize();
	
	var t = this;
	var b;
	o.width = o.width ? (parseFloat(o.width) * 2)-60 : 50;
	o.height = o.height ? (parseFloat(o.height)*2)-60 : 35;
	 
	var im = new Image();
	im.onload = function(e){t.init(e);};
	im.src = "../../../common/images/Router.png";
	
	t.init = function(ev)
	{		
		var b,c,bt;
		c = new createjs.Container();
		bt = new createjs.Bitmap(ev.target);
		bd = new createjs.Bitmap(ev.target);
		bl = new createjs.Bitmap(ev.target);
		br = new createjs.Bitmap(ev.target);
		
		//For background color
		b = new createjs.Shape();
		b.graphics.beginFill("#F2F2F2").drawRect(20,20,o.width+40,o.height+40);	
		c.addChild(b);
		//For top left corner
		var bx = new createjs.Shape();
		bx.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(0,0,40,40);			
		c.addChild(bx);
		//For top middle line
		bt.sourceRect = new createjs.Rectangle(40,0,40,40);
		bt.x = 39.1;
		bt.scaleX = o.width/40;	
		c.addChild(bt);		
		//For top right corner
		b = new createjs.Shape();
		b.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(160,0,40,40);
		b.x = o.width - 122;	
		c.addChild(b);		
		//For down left corner
		b = new createjs.Shape();
		b.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(0,80,40,40);	
		b.y = -41.5+o.height;
		c.addChild(b);	
		//For down middle line
		bd.sourceRect = new createjs.Rectangle(40,80,40,40);
		bd.x = 39.1;
		bd.y = 38.3+o.height;
		bd.scaleX = o.width/40;	
		c.addChild(bd);		
		//For down right corner
		b = new createjs.Shape();
		b.graphics.beginBitmapFill(ev.target,"no-repeat").drawRect(160,80,40,40);
		b.x = o.width - 122;	
		b.y = -41.5+o.height;
		c.addChild(b);
		//For left line
		bl.sourceRect = new createjs.Rectangle(0,40,40,40);
		bl.y = 39.1;
		bl.scaleY = o.height/40;	
		c.addChild(bl);	
		//For right line
		br.sourceRect = new createjs.Rectangle(160,40,40,40);
		br.x = o.width+38;
		br.y = 39.1;
		br.scaleY = o.height/40;	
		c.addChild(br);				
		
		c.scaleX = c.scaleY = 0.5;
		c.x = -5;
		t.addChild(c);
		
		var cc = new createjs.Container();
		cc = c.cache(0,0,o.width/0.5,o.height/0.1,0.5);		
		t.addChild(cc);	
				
		o.x = o.x ? parseFloat(o.x) : 0;
		o.y = o.y ? parseFloat(o.y) : 0;
		
		t.x = o.x;
		t.y = o.y-5;
		
		if(o.textId)
		{						
			o.style = o.style ? o.style : "";	
			o.size = o.size ? o.size : 11;
			o.text = o.text ? o.text : $(cx).find("text#"+o.textId).text();	
			o.div = o.div ? o.div : "commonMediaText";
			o.style = "font-family: courier new;overflow:auto;height:"+((o.height/2)+13)+"px";
	        e = new TComp({textId:o.textId,text:o.text,x:-2,y:12,expand:"down",div:o.div,width:((o.width/2)+13),align:"left",style:o.style,size:o.size});			
			t.addChild(e);	
		}	
		mStage.update();	
	}
	
}).prototype = new createjs.Container();
/*
	Arrow Component Container
	//<element type="SHAPE" subType="ARROW" x="272.45" y="205.4" length="120" thickness="3" color="#F68026" rotation="170"/>
*/
(AComp = function (o) {
	this.initialize();
	
	var t = this;		
	var a,c,e,w,h,l;
	l = o.length ? parseFloat(o.length) : 10;
	c = o.color ? o.color : "#000";
	e = o.thickness ? parseInt(o.thickness) : 2;
	w = e == 2 ? 7 : 10;
	h = e == 2 ? 3 : 4;
	h=h+0.5;
	a = new createjs.Shape();
	a.graphics.setStrokeStyle(e/4);
	a.graphics.beginStroke(c);
	a.graphics.beginFill(c);
	a.graphics.moveTo(0,0);
	a.graphics.lineTo(0,0);
	a.graphics.lineTo(w,h);
	a.graphics.lineTo(w/2,0);
	a.graphics.lineTo(w,-h);
	a.graphics.lineTo(-1.5,0);
	a.graphics.setStrokeStyle(e);
	a.graphics.moveTo(w/2,0);
	a.graphics.lineTo(l,0);
	a.graphics.endFill();
	
	t.addChild(a);
	
	if(o.rotation) t.rotation = o.rotation;
		
	t.x = o.x ? parseFloat(o.x) : 0;
	t.y = o.y ? parseFloat(o.y) : 0;
	
}).prototype = new createjs.Container();

/*
	Image Component Container
	//Example {x:10,y:10,src:"logo.jpg"}
*/
(IComp = function (o) {
	this.initialize();
	
	var t = this;	
	var a,b,w,h;
		
	a = new Image();
	a.onload = function(ev){t.ol(ev)};	
	a.src = o.src;	
	
	t.ol = function(ev)
	{			
		o.width = o.width ? o.width :ev.target.width;
		o.height = o.height ? o.height :ev.target.height;		
		o.r = Math.min((o.width/ev.target.width),(o.height/ev.target.height));		
		o.subType = o.subType ? o.subType : "none"	
		w = ev.target.width * o.r;
		h = ev.target.height * o.r;	
		b = new createjs.Bitmap(ev.target);		
		b.scaleX = b.scaleY = o.r;
		t.addChild(b);
		
		switch(o.subType)
		{
			case "STD":
					this.std();	
				break;
			case "HTML":
					t.removeChild(b);
					
				break;
			case "HOTSPOT":
			
				break;
		}				
		if(o.x) t.x = o.x;
		if(o.y) t.y = o.y;			
		
		update = true;
	}
	t.std = function()
	{
		var _s = new createjs.Shape();
		var _m = new createjs.Shape();		
		_s.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,w,h,8);
		_s.shadow = new createjs.Shadow("#000000",3,3,10);
		_s.x = _s.y = 0.5;
		_s.scaleX = _s.scaleY = 0.99;
		t.addChild(_s);		
		t.swapChildren(b,_s);	
		_m.graphics.beginFill().drawRoundRect(0,0,w,h,8);			
		t.addChild(_m);			
		b.mask = _m;	
	}	
	
}).prototype = new createjs.Container();
/*
	Lazy Text Component Container
	//Example <element type="TEXT" compId="ID_s3_txt05" x="101.7" y="274.60" width="76" expand="down" align="center" bgColor="#FDE6D4" borderColor="#F68026" border="2" corner="5"/>
*/
(TComp = function (o) {
	this.initialize();
	
	if(!o){ alert('Please define Text object like \n {x:10,y:10,text:"Sample Text",compId:"ID_txt"}'); return;}; 
	
	var a,h,w,_w;
	var t = this;	
	o.color = o.color ? o.color : "#393536";
	o.size = o.size ? o.size : 11;
	o.align = o.align ? o.align : "left";
	o.width = o.width ? parseFloat(o.width) : "auto";		
	o.expand = o.expand ? o.expand : "undefined";	
	
	o.style = o.style ? o.style : "";
	o.div = o.div ? o.div : "mediaContainer";
	o.subType = o.subType ? o.subType : "LABEL";
	o.x = o.x ? parseFloat(o.x) : 0;
	o.y = o.y ? parseFloat(o.y) : 0;
		
	if(o.subType == "TITLE")
	{	
		o.align = "center";
		o.size = 13;
		o.x = 0;
		o.y = 1;
		o.expand = "down";
		if($($(cx).find("slide")[0]).attr("type") == "MBAR")
		{		
			o.width = sWidth-30;	
		}
		else
		{
			o.width = sWidth-2;
		}
	}
	//For table
	o.expand = o.subType == "TABLE" ? "undefined" : o.expand;	
	if(o.subType == "TABLE") o.x = o.x + 9;
	_w = o.width == "auto" ? "auto" : o.width+"px";
	if((o.expand == "left") || (o.expand == "right") || (o.expand == "left+right"))
	{
		_w = "auto";
		o.style += ";white-space:nowrap"
	}
	if(o.text)
	{ 
		o.expand = "undefined";
		o.x = o.x + 10;
		_w = o.width+"px";
	}
	if(o.textId)
	{
		o.x = o.x + 11;
		_w = o.width == "auto" ? "auto" : o.width+"px";
	}
	a = document.createElement("div");			
	a.style.cssText = "top:0px;left:0px;width:"+_w+";text-align:"+o.align+";font-size:"+o.size+"px;color:"+o.color+";"+o.style+";visibility:hidden;";	
	if(o.compId) a.id = o.compId;	
	if(o.compId)
	{ 
		o.text = $(mx).find("component#"+o.compId).text();	
	}	
	if(o.textId)
	{
		o.expand = "undefined";
		o.text = o.text ? o.text : $(cx).find("text#"+o.textId).text();	
		a.id = o.textId;
	}
	if(o.bold && (o.bold == "1")){t.x = t.x -1; o.text = "<b>"+o.text+"</b>"};
	a.innerHTML = o.text;	
	$("#"+o.div).append(a);	
		
	var e = new createjs.DOMElement(a);	
		
	h = $(a).height();
	w = $(a).width();
		
	switch(o.expand)
	{
		case "up+down"://done
				o.x = o.x + 10;
				o.y = o.y - (h/2) + 7.5;				
			break;				
		case "down"://done
				o.x = o.x + 12;
				o.y = o.y;
			break;				
		case "up"://done
				o.x = o.x + 10;
				o.y = o.y - h + 15;
			break;				
		case "left"://done
				o.x = o.x + 11;
				o.y = o.y;
			break;			
		case "right"://done
				o.x = o.x + 11;
				o.y = o.y;
			break;			
		case "left+right"://done
				if(w>o.width)
				{
					o.x = o.x - ((w - o.width)/2);
				}
				else
				{
					o.x = o.x + ((o.width - w)/2);
				}
				o.y = o.y;
			break;				
		default:
				o.x = o.x;
				o.y = o.y;
			break;			
	}	
	//background graphics	
	if(o.bgColor || o.borderColor)
	{
		o.bgColor = o.bgColor ? o.bgColor : "";			
		o.corner = o.corner ? parseInt(o.corner) : 0;
		o.border = o.border ? parseInt(o.border) : 1;
		o.borderColor = o.borderColor ? o.borderColor : "";
		
		var bg = new createjs.Shape();	
		bg.graphics.setStrokeStyle(o.border);
		bg.graphics.beginStroke(o.borderColor);		
		if(o.subType == "BUBBLE")
		{	
			bg.graphics.beginFill(o.bgColor).drawRoundRect(1,0,w+6,h+6,o.corner);
			o.x = o.x + 3;
			o.y = o.y + 3;
			bg.y = -2;	
		}
		else
		{
			bg.y = -4;	
			bg.graphics.beginFill(o.bgColor).drawRoundRect(0,0,w+10,h+10,o.corner);			
			o.x = o.x + 5;
			o.y = o.y + 5;
		}
		bg.x = -13;
		
		t.addChild(bg);
	}
	t.x = o.x-2;
	t.y = o.y+1;
	t.addChild(e);
	if(o.rotation) t.rotation = o.rotation;	
}).prototype = new createjs.Container();
/*
	Load image
*/
function loadImages(x,cb)
{
	var t = this;
	var pjs = new createjs.LoadQueue(false);
	var manifest = [];	
	var ext = false;
	$(x).find("element").each(function(index, element) {       
	   if($(this).attr("type") == "IMAGE")
	   {
		  if($(this).attr("src"))
		  {
			  manifest.push({id:"bitmap"+index,src:$(this).attr("src")}); 	
		  }
	   }
	   if($(this).attr("type") == "ACTIVITY")
	   {		  
		   if(ext == false){ext = true; manifest.push({id:"ext_lib",src:"../../../common/scripts/templates_ext_dev.js"})};
	   }
    });
		
	if(manifest.length == 0)
	{		
		if(cb)cb();	 
	}
	else
	{
		pjs.addEventListener("error", function(ev){t.e();});			
		pjs.addEventListener("fileload", function(e){t.z(e);});
		pjs.addEventListener("complete", function(e){if(cb)cb();});
		pjs.loadManifest(manifest);		
	}	
	t.z = function(e)
	{
		if(e.item.type == createjs.LoadQueue.JAVASCRIPT)
		{
			document.body.appendChild(e.result);
		}		
	}
	t.e = function(ev)
	{
		alert("Please check the image src");
	}
}
/*
	Get Graphics Element
*/
function drawGraphics(o)
{
	var s = new createjs.Shape();
	o.x = o.x ? parseFloat(o.x) : 0;
	o.y = o.y ? parseFloat(o.y) : 0;
	
	switch(o.subType)
	{
		case "ARROW":
				s = new AComp(o);
			break;	
		case "LINE":
				o.stroke = o.stroke ? o.stroke : 0;
				o.stokeColor = o.stokeColor ? o.stokeColor : "";
				s.graphics.setStrokeStyle(o.stroke).beginStroke(o.stokeColor).lineTo(o.x,o.y).lineTo(o.x1,o.y1);
				o.x = 0;
				o.y = 0;
			break;	
		case "RECT":
				o.stroke = o.stroke ? o.stroke : 0;
				o.stokeColor = o.stokeColor ? o.stokeColor : "";
				o.color = o.color ? o.color : "";
				o.corner = o.corner ? o.corner : 0;
				s.graphics.setStrokeStyle(o.stroke).beginStroke(o.stokeColor);					
				s.graphics.beginFill(o.color).drawRoundRect(0,0,parseFloat(o.width),parseFloat(o.height),o.corner);	
			break;
		case "CIRCLE":
				var w,h,r;					
				w = parseFloat(o.width);
				h = parseFloat(o.height);
				r = w < h ? h/2 : w/2;
				o.stroke = o.stroke ? o.stroke : 0;
				o.stokeColor = o.stokeColor ? o.stokeColor : "";
				o.color = o.color ? o.color : "";
				s.graphics.setStrokeStyle(o.stroke).beginStroke(o.stokeColor);		
				s.graphics.beginFill(o.color).drawCircle(0,0,r);
				if(w<h)
				{							
					s.scaleX = w/(r*2);	
				}
				else
				{					
					s.scaleY = h/(r*2);
				}		
				o.x = o.x + r + 5;
				o.y = o.y + r -15;
				break;
		default:
			break;
	}	
	if(o.rotation) s.rotation = o.rotation;	
	s.x = o.x;
	s.y = o.y;	
	return s;
	
}
/*
	Get Media Element 
*/
function getCJSElement(type,p1,p2)
{
	var el;
	switch(type)
	{
		case "SINGLE":
				el = new slide(p1,p2);		
			break;
		case "MBAR":
				el = new MBar(p1);
			break; 
		case "MBUTTON":
			//s = new MButton(a);
			break;
		case "IMAGE":
				el = new IComp(p1);						
			break;
		case "TEXT":
				p1.div = p2;
				el = new TComp(p1);						
			break;
		case "SHAPE":
				el = drawGraphics(p1);
			break;		
		case "ROUTER":
				p1.div = p2;
				el = new Router(p1);
			break;				
		case "BUBBLE":
				el = new BComp(p1);
			break;						
		case "TEXTBOX":
				p1.div = p2;
				el = new TBComp(p1);
				
			break;							
		case "BUTTON":
				el = new Button(p1);
			break;	
		case "ACTIVITY":
				p1.div = p2;
				el = new ActComp(p1);
			break;	
		default:
				el = new createjs.Shape();
			break;
		
	}
	return el;
}
/*
	Initiate Slide
*/
function initSlide()
{
	
	canvas = document.getElementById("canvas");
	mStage = new createjs.Stage(canvas);
	
	
	//For media container DOMElement
	$("#canvas").after("<div id='mediaContainer' style='top:0px;left:0px;-moz-user-select: none;-webkit-user-select: none;cursor: default;'></div>");
	$("#mediaContainer").append("<div id='commonMediaText'></div>")
	
	mDOM = new createjs.DOMElement(document.getElementById("mediaContainer"));
	mStage.addChild(mDOM);
	
	
	//Create Root Container for media
	root = new rootC();		
	mStage.addChild(root);
		
	//For touch support
	if (createjs.Touch.isSupported()) { createjs.Touch.enable(mStage); }
	
	//For Mouse event support
	mStage.enableMouseOver();
		
	var a = $(cx).find("slide")[0];	
	//Check stage width and height
	if($(a).attr("width")) sWidth = $(a).attr("width");
	if($(a).attr("height")) sHeight = $(a).attr("height");
	
	//Ticker
	createjs.Ticker.setFPS(30);	
	createjs.Ticker.addListener(mStage);
	//Load slide		
	var ty = $(a).attr("type") ? $(a).attr("type") : "SINGLE";
	root.addChild(getCJSElement(ty,a,"commonMediaText"));
	
	//mStage.update();
	update = true;
	$("#preloader").remove();
}
/*
	Initiate Template
*/
function initiateTemplate()
{
	var a = $(cx).find("slide")[0];	
	//Find and load Image elements
	loadImages(a,initSlide)
	//update = true;
}
