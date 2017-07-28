(function($){
	function nav(json){	
		var nav1=Object.keys(json);
		var nav2=[],nav2Name=[],nav2Href=[];
		var nav1Name=[],nav1Href=[];
		nav1.forEach(function(values,keys){
			nav2.push(json[values]);
			var n=values.split('$');
			nav1Name.push(n[0]);
			if(n[1]==undefined){
				nav1Href.push('#');
			}else{
				nav1Href.push(n[1]);
			}			
		})
		nav2.forEach(function(values,keys){
			var n1=values.split('+');
			var nav2H=[],nav2N=[];			
			n1.forEach(function(v,k){				
				var n2=v.split('$');
				nav2N.push(n2[0]);
				if(n2[1]==undefined){
				nav2H.push('#');
				}else{
				nav2H.push(n2[1]);
				}				
			})	
			nav2Name[keys]=nav2N;
			nav2Href[keys]=nav2H;
		})
		this.nav1Name=nav1Name;
		this.nav1Href=nav1Href;
		this.nav2Name=nav2Name;
		this.nav2Href=nav2Href;
	}
	nav.prototype={
		constructor:nav,
		createHtml(){			
			var nav1Name=this.nav1Name;
			var nav2Name=this.nav2Name;
			var nav1Href=this.nav1Href;
			var nav2Href=this.nav2Href;
			var htmlStr=`<div class="nav-div"><ul class="nav-ul">`;
			nav1Name.forEach(function(v,k){
			
				htmlStr+=`    	<li class="nav-li o">
									<a class="nav-a" href="${nav1Href[k]}">${v}</a>`;
				var key=k;
				if(nav2Name[key][0]!=""){
					htmlStr+=`<ul class="nav-ul">`
				}
				
				nav2Name[key].forEach(function(v,k){
					if(v!=""){
					htmlStr+=`<li class='nav-li'>
								<a class='nav-a' href="${nav2Href[key][k]}">${v}</a>
							  </li>`
					}
				})				
				if(nav2Name[key][0]!=""){
					htmlStr+=`</ul>`;
				}
				htmlStr+=`</li>`;
			})
			htmlStr+=`</ul>
						</div>`;
			return htmlStr;
		}
	}
	$.prototype.addNav=function(json){
			var oNav=new nav(json);
			this.html(oNav.createHtml());
		}
})(jQuery)
