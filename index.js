$(function(){
	//隐藏菜单的设置
	var $hidemenu = $('#hidemenu');
	$hidemenu.click(function() {
	    $('body').removeClass('hideNavbar');
	    $(this).hide();
	})
	
	//初始化话左侧菜单
	menu(menus,"actionUl");
})
function menu(date,pid){
	var menus=date;
	var ulmain= $("#"+pid);
	$.each(menus,function(index,menuinfo){
		if(!jQuery.isEmptyObject(menuinfo.childrens)){
			ulmain.append("<li class='' id="+menuinfo.id+"></li>");
			$("#"+menuinfo.id).append("<a class='dropdown-toggle J_menuItem'  href='"+menuinfo.uri+"'"+"id="+menuinfo.id+"a></a>");
			$("#"+menuinfo.id+"a").append("<span class='menu-icon "+((menuinfo.icon==''||menuinfo.icon==null)?"menu-icon fa fa-desktop":menuinfo.icon)+"'></span>");
			$("#"+menuinfo.id+"a").append("<span class='menu-text'> "+menuinfo.name+" </span>");
			$("#"+menuinfo.id+"a").append("<b class='arrow fa fa-angle-down'></b>");
			$("#"+menuinfo.id).append("<b class='arrow'></b>");
			$("#"+menuinfo.id).append("<ul class='submenu'"+" id="+menuinfo.id+"ul"+"></ul>");
			var parent=menuinfo.id+"ul";
			menu(menuinfo.childrens,parent);
		}else{
			ulmain.append("<li class='' id="+menuinfo.id+"></li>");
			$("#"+menuinfo.id).append("<a class='dropdown-toggle J_menuItem'  href='"+menuinfo.uri+"'"+"id="+menuinfo.id+"a></a>");
			$("#"+menuinfo.id+"a").append("<span class='menu-icon "+((menuinfo.icon==''||menuinfo.icon==null)?"fa fa-caret-right":menuinfo.icon)+"'></span>");
			$("#"+menuinfo.id+"a").append("<span class='menu-text'>"+menuinfo.name+"</span>");
			$("#"+menuinfo.id).append("<b class='arrow'></b>");
		};
		});
}

function hideNavbar() {
    $('body').addClass('hideNavbar');
    $hidemenu.show();
}

