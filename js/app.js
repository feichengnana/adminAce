/*
 * 说明：用于控制面板的折叠隐藏
 * param:el：触犯的对象
 * param:parentEl：父容器
 * param:bodyEl：内容面板的容器
 * param:icon1：展开时的图标
 * param:icon2：折叠时的图标
 * */
function panelAction(el,parentEl,bodyEl,icon1,icon2,times){
	$(el).click(function(){
		var me = $(this);
		var pnode = me.closest(parentEl);
		var pbody = pnode.find(bodyEl);
		var meicon = me.find('.fa');
		if(times!=0){
			times = times?times:200;
		}
		pbody.slideToggle(times);
		meicon.toggleClass(icon1).toggleClass(icon2);
	})
}

$(function(){
	if($('.panel-tools-collapse').length){
		panelAction('.panel-tools-collapse','.panel','.panel-body','fa-chevron-up','fa-chevron-down');
	}
	if($('.panel-search-more').length){
		panelAction('.panel-search-more a','.panel-search-form','.panel-search-moreBody','fa-angle-double-right','fa-angle-double-up',0);
	}
	if($('.dividerBox-tool-angle').length){
		panelAction('.dividerBox-tool-angle','.dividerBox','.dividerBox-body','fa-angle-up','fa-angle-down');
	}
	
	$('.panel-tools-close').click(function(){
		var me = $(this);
		var pnode = me.closest('.panel');
		pnode.slideUp();
	})
	
	//表单校验
	$('form.required-validate').each(function(){
	    var $form = $(this);
	    $form.bootstrapValidator();
	    // 修复bootstrap validator重复向服务端提交bug
	    $form.on('success.form.bv',function(e){
	        e.preventDefault();
	    })
	})
})
