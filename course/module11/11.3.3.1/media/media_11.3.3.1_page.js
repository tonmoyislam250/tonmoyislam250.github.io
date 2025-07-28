loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [];
							
	var commonImages = [{name:"11_3_3_1.png",
							x:0,
							y:38.1-5, 
							width:430,
							height:380.7,
							type:""}];
							
	var graphics_slide = [];
	
	var slide_1_type = "IMAGE";
	
	var slide_1_images = [];
															
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"static_s1_txt01", /*Table 1: Slide 1*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>R1#<b>show running-config</b></td></tr><tr><td>&lt;Output omitted&gt;</td></tr><tr><td>Building configuration...</td></tr><tr><td>Current configuration : 1063 bytes</td></tr><tr><td>!</td></tr><tr><td>version 12.4</td></tr><tr><td>service timestamps debug datetime msec</td></tr><tr><td>service timestamps log datetime msec</td></tr><tr><td>no service password-encryption</td></tr><tr><td>hostname R1</td></tr><tr><td>enable secret 5 $1$i6w9$dvdpVM6zV10E6tSyLdkR5/</td></tr><tr><td>no ip domain lookup</td></tr><tr><td>!</td></tr><tr><td>interface FastEthernet0/0</td></tr><tr><td>&nbsp;description LAN 192.168.1.0 default gateway</td></tr><tr><td>&nbsp;ip address 192.168.1.1 255.255.255.0</td></tr><tr><td>&nbsp;duplex auto</td></tr><tr><td>&nbsp;speed auto</td></tr><tr><td>!</td></tr><tr><td>interface FastEthernet0/1</td></tr><tr><td>&nbsp;no ip address</td></tr><tr><td>&nbsp;shutdown</td></tr><tr><td>&nbsp;duplex auto</td></tr><tr><td>&nbsp;speed auto</td></tr><tr><td>!</td></tr><tr><td>interface Serial0/0/0</td></tr><tr><td>&nbsp;description WAN link to R2</td></tr><tr><td>&nbsp;ip address 192.168.2.1 255.255.255.0</td></tr><tr><td>&nbsp;encapsulation ppp</td></tr><tr><td>&nbsp;clock rate 64000</td></tr><tr><td>&nbsp;no fair-queue</td></tr><tr><td>!</td></tr><tr><td>interface Serial0/0/1</td></tr><tr><td>&nbsp;no ip address</td></tr><tr><td>&nbsp;shutdown</td></tr><tr><td>!</td></tr><tr><td>interface Vlan1</td></tr><tr><td>&nbsp;no ip address</td></tr><tr><td>!</td></tr><tr><td>router rip</td></tr><tr><td>&nbsp;version 2</td></tr><tr><td>&nbsp;network 192.168.1.0</td></tr><tr><td>&nbsp;network 192.168.2.0</td></tr><tr><td>!</td></tr><tr><td>banner motd ^CUnauthorized Access Prohibited^C</td></tr><tr><td>!</td></tr><tr><td>ip http server</td></tr><tr><td>!</td></tr><tr><td>line con 0</td></tr><tr><td>&nbsp;password cisco</td></tr><tr><td>&nbsp;login</td></tr><tr><td>line aux 0</td></tr><tr><td>line vty 0 4</td></tr><tr><td>&nbsp;password cisco</td></tr><tr><td>&nbsp;login</td></tr></table>",
							x:39-15,
							y:57-11, 
							width:398.95,
							height:258,
							size:10,
							textAlign:"left"}];
														
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};							
	
	/*Slide : 02 */
	
	var slide_2_type = "IMAGE";
	
	var slide_2_images = [];
															
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
						
						{compId:"static_s2_txt01", /*Table 1: Slide 2*/
							bodyText:'<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td>R1#<b>show interfaces</b></td></tr><tr><td>&lt;Output omitted&gt;</td></tr><tr><td>FastEthernet0/0 is up, line protocol is up</td></tr><tr><td>&nbsp;&nbsp;Hardware is Gt96k FE, address is 001b.5325.256e</td></tr><tr><td>&nbsp;&nbsp;(bia 001b.5325.256e)</td></tr><tr><td>&nbsp;&nbsp;Internet address is 192.168.1.1/24</td></tr><tr><td>&nbsp;&nbsp;MTU 1500 bytes, BW 100000 Kbit, DLY 100 usec,</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;reliability 255/255, txload 1/255, rxload 1/255</td></tr><tr><td>&nbsp;&nbsp;Encapsulation ARPA, loopback not set</td></tr><tr><td>&nbsp;&nbsp;Keepalive set (10 sec)</td></tr><tr><td>&nbsp;&nbsp;Full-duplex, 100Mb/s, 100BaseTX/FX</td></tr><tr><td>&nbsp;&nbsp;ARP type: ARPA, ARP Timeout 04:00:00</td></tr><tr><td>&nbsp;&nbsp;Last input 00:00:17, output 00:00:01, output hang never</td></tr><tr><td>&nbsp;&nbsp;Last clearing of "show interface" counters never</td></tr><tr><td>&nbsp;&nbsp;Input queue: 0/75/0/0 (size/max/drops/flushes);</td></tr><tr><td>&nbsp;&nbsp;Total output drops: 0</td></tr><tr><td>&nbsp;&nbsp;Queueing strategy: fifo</td></tr><tr><td>&nbsp;&nbsp;Output queue: 0/40 (size/max)</td></tr><tr><td>&nbsp;&nbsp;5 minute input rate 0 bits/sec, 0 packets/sec</td></tr><tr><td>&nbsp;&nbsp;5 minute output rate 0 bits/sec, 0 packets/sec</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;196 packets input, 31850 bytes</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Received 181 broadcasts, 0 runts, 0 giants, 0 throttles</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 watchdog</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 input packets with dribble condition detected</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;392 packets output, 35239 bytes, 0 underruns</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 output errors, 0 collisions, 3 interface resets</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 babbles, 0 late collision, 0 deferred</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 lost carrier, 0 no carrier</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 output buffer failures, 0 output buffers swapped out</td></tr><tr><td>&nbsp;</td></tr><tr><td>FastEthernet0/1 is administratively down,</td></tr><tr><td>line protocol is down</td></tr><tr><td>&nbsp;</td></tr><tr><td>Serial0/0/0 is up, line protocol is up</td></tr><tr><td>&nbsp;&nbsp;Hardware is GT96K Serial</td></tr><tr><td>&nbsp;&nbsp;Internet address is 192.168.2.1/24</td></tr><tr><td>&nbsp;&nbsp;MTU 1500 bytes, BW 1544 Kbit, DLY 20000 usec,</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;reliability 255/255, txload 1/255, rxload 1/255</td></tr><tr><td>&nbsp;&nbsp;Encapsulation PPP, LCP Listen, loopback not set</td></tr><tr><td>&nbsp;&nbsp;Keepalive set (10 sec)</td></tr><tr><td>&nbsp;&nbsp;Last input 00:00:02, output 00:00:03, output hang never</td></tr><tr><td>&nbsp;&nbsp;Last clearing of "show interface" counters 00:51:52</td></tr><tr><td>&nbsp;&nbsp;Input queue: 0/75/0/0 (size/max/drops/flushes);</td></tr><tr><td>&nbsp;&nbsp;Total output drops: 0</td></tr><tr><td>&nbsp;&nbsp;Queueing strategy: fifo</td></tr><tr><td>&nbsp;&nbsp;Output queue: 0/40 (size/max)</td></tr><tr><td>&nbsp;&nbsp;5 minute input rate 0 bits/sec, 0 packets/sec</td></tr><tr><td>&nbsp;&nbsp;5 minute output rate 0 bits/sec, 0 packets/sec</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;401 packets input, 27437 bytes, 0 no buffer</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Received 293 broadcasts, 0 runts, 0 giants, 0 throttles</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored, 0 abort</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;389 packets output, 26940 bytes, 0 underruns</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 output errors, 0 collisions, 2 interface resets</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;0 output buffer failures, 0 output buffers swapped out</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;6 carrier transitions</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;DCD=up  DSR=up  DTR=up  RTS=up  CTS=up</td></tr><tr><td>&nbsp;</td></tr><tr><td>Serial0/0/1 is administratively down, line protocol is down</td></tr></table>',
							x:39-15,
							y:57-11, 
							width:398.95,
							height:258,
							size:10,
							textAlign:"left"}];
														
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
/*Slide : 03 */
	
	var slide_3_type = "IMAGE";
	
	var slide_3_images = [];
															
	var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
						
						{compId:"static_s3_txt01", /*Table 1: Slide 3*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>R1#<b>show arp</b></td></tr><tr><td>Protocol</td><td>Address</td><td align='right'>Age (min)&nbsp;</td><td>Hardware Addr</td><td>Type</td><td>Interface</td></tr><tr><td>Internet</td><td>172.17.0.1</td><td align='right'>-&nbsp;</td><td>001b.5325.256e</td><td>ARPA</td><td>&nbsp;</td></tr><tr><td colspan='6'>FastEthernet0/0</td></tr><tr><td>Internet</td><td>172.17.0.2</td><td align='right'>12&nbsp;</td><td>000b.db04.a5cd</td><td>ARPA</td><td>&nbsp;</td></tr><tr><td colspan='6'>FastEthernet0/0</td></tr></table>",
							x:39-15,
							y:57-11, 
							width:398.95,
							height:258,
							size:10,
							textAlign:"left"}];
														
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};

/*Slide : 04 */
	
	var slide_4_type = "IMAGE";
	
	var slide_4_images = [];
															
	var slide_4_texts = [{compId:"ID_s4_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"static_s4_txt01", /*Table 1: Slide 3*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td colspan='2'>R1#<b>show ip route</b></td></tr><tr><td width='40'>Codes:</td><td>C - connected, S - static, R - RIP, M - mobile, B - BGP</td></tr><tr><td>&nbsp;</td><td>D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area</td></tr><tr><td>&nbsp;</td><td>N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2</td></tr><tr><td>&nbsp;</td><td>E1 - OSPF external type 1, E2 - OSPF external type 2</td></tr><tr><td>&nbsp;</td><td>i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2</td></tr><tr><td>&nbsp;</td><td>ia - IS-IS inter area, * - candidate default, U - per-user static route</td></tr><tr><td>&nbsp;</td><td>o - ODR, P - periodic downloaded static route</td></tr><tr><td>&nbsp;</td></tr><tr><td colspan='2'>Gateway of last resort is not set</td></tr><tr><td>C</td><td>192.168.1.0/24 is directly connected, FastEthernet0/0</td></tr><tr><td>C</td><td>192.168.2.0/24 is directly connected, Serial0/0/0</td></tr><tr><td>R</td><td>192.168.3.0/24 [120/1] via 192.168.2.2, 00:00:24, Serial0/0/0</td></tr></table>",
							x:39-15,
							y:57-11, 
							width:398.95,
							height:258,
							size:10,
							textAlign:"left"}
						];
														
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
	/*Slide : 05 */
	
	var slide_5_type = "IMAGE";
	
	var slide_5_images = [];
															
	var slide_5_texts = [{compId:"ID_s5_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"static_s5_txt01", /*Table 1: Slide 5*/
							bodyText:"<table border='0' cellpadding='0' cellspacing='0' width='100%'><tr><td>R1#<b>show protocols</b></td></tr><tr><td>Global values:</td></tr><tr><td>&nbsp;&nbsp;Internet Protocol routing is enabled</td></tr><tr><td>FastEthernet0/0 is up, line protocol is up</td></tr><tr><td>&nbsp;&nbsp;Internet address is 192.168.1.1/24</td></tr><tr><td>FastEthernet0/1 is administratively down, line protocol is down</td></tr><tr><td>FastEthernet0/1/0 is up, line protocol is down</td></tr><tr><td>FastEthernet0/1/1 is up, line protocol is down</td></tr><tr><td>FastEthernet0/1/2 is up, line protocol is down</td></tr><tr><td>FastEthernet0/1/3 is up, line protocol is down</td></tr><tr><td>Serial0/0/0 is up, line protocol is up</td></tr><tr><td>&nbsp;&nbsp;Internet address is 192.168.2.1/24</td></tr><tr><td>Serial0/0/1 is administratively down, line protocol is down</td></tr><tr><td>Vlan1 is up, line protocol is down</td></tr></table>",
							x:39-15,
							y:57-11, 
							width:398.95,
							height:258,
							size:10,
							textAlign:"left"}];
														
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
	/*Slide : 06 */
	
	var slide_6_type = "IMAGE";
	
	var slide_6_images = [];
															
	var slide_6_texts = [{compId:"ID_s6_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:14,
							textAlign:"center"},
							
						{compId:"static_s6_txt01", /*Table 1: Slide 5*/
							bodyText:'<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td>R1#<b>show version</b></td></tr><tr><td>&lt;Output omitted&gt;</td></tr><tr><td>Cisco IOS Software, 1841 Software (C1841-ADVIPSERVICESK9-M),</td></tr><tr><td>Version 12.4(10b),</td></tr><tr><td>RELEASE SOFTWARE (fc3)</td></tr><tr><td>Technical Support: http://www.cisco.com/techsupport</td></tr><tr><td>Copyright (c) 1986-2007 by Cisco Systems, Inc.</td></tr><tr><td>Compiled Fri 19-Jan-07 15:15 by prod_rel_team</td></tr><tr><td>&nbsp;</td></tr><tr><td>ROM: System Bootstrap, Version 12.4(13r)T, RELEASE SOFTWARE (fc1)</td></tr><tr><td>R1 uptime is 43 minutes</td></tr><tr><td>System returned to ROM by reload at 22:05:12 UTC Sat Jan 5 2008</td></tr><tr><td>System image file is "flash:c1841-advipservicesk9-mz.124-10b.bin"</td></tr><tr><td>&nbsp;</td></tr><tr><td>Cisco 1841 (revision 6.0) with 174080K/22528K bytes of memory.</td></tr><tr><td>Processor board ID FTX1111W0QF</td></tr><tr><td>6 FastEthernet interfaces</td></tr><tr><td>2 Serial(sync/async) interfaces</td></tr><tr><td>1 Virtual Private Network (VPN) Module</td></tr><tr><td>DRAM configuration is 64 bits wide with parity disabled.</td></tr><tr><td>191K bytes of NVRAM.</td></tr><tr><td>62720K bytes of ATA CompactFlash (Read/Write)</td></tr><tr><td>&nbsp;</td></tr><tr><td>Configuration register is 0x2102</td></tr></table>',
							x:39-15,
							y:57-11, 
							width:398.95,
							height:258,
							size:10,
							textAlign:"left"}];
														
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							texts:slide_6_texts};
								
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			images:commonImages,
			graphics:graphics_slide,
			slideObject:slides};
	
}
