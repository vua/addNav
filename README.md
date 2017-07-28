# addNav
Hi guys!

一个简单二级导航插件
 

调用方式 ：

	var json={
		'nav1name$nav1href':'nav11name$nav11href+nav12name$nav12href+...+nav1Nname$nav1Nhref',
		'nav2name$nav2href':'nav21name$nav21href+nav22name$nav22href+...+nav2Nname$nav2Nhref',
			  ....,
		'navNname$navNhref':'navN1name$navN1href+navN2name$navN2href+...+navNNname$navNNhref',  
		 }

jQurey：

 	 $('div').addNav(json)
 
简单说明：

1、json 对象属性为一级导航,属性值为二级导航

2、'$'分隔导航名称和导航链接

3、'+'分隔同级导航（二级）
