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
		var pbody = pnode.nextAll(bodyEl).first();
		var meicon = me.find('.fa');
		console.log(meicon.attr('class'))
		if(times!=0){
			times = times?times:200;
		}
		pbody.slideToggle(times);
		meicon.toggleClass(icon1).toggleClass(icon2);
		console.log(meicon.attr('class'))
	})
}

$(function(){
	if($('.panel-tools-collapse').length){
		panelAction('.panel-tools-collapse','.panel-heading','.panel-body','fa-chevron-up','fa-chevron-down');
	}
	if($('.panel-search-more').length){
		panelAction('.panel-search-more a','.panel-search-more','.panel-search-moreBody','fa-angle-double-right','fa-angle-double-up',0);
	}
	if($('.dividerBox-tool-angle').length){
		panelAction('.dividerBox-tool-angle','.dividerBox-toolbar','.dividerBox-body','fa-angle-up','fa-angle-down');
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

function scrollTo(el, offeset) {
    var pos = (el && el.size() > 0) ? el.offset().top : 0;

    if (el) {
        if ($('body').hasClass('page-header-fixed')) {
            pos = pos - $('.page-header').height();
        } else if ($('body').hasClass('page-header-top-fixed')) {
            pos = pos - $('.page-header-top').height();
        } else if ($('body').hasClass('page-header-menu-fixed')) {
            pos = pos - $('.page-header-menu').height();
        }
        pos = pos + (offeset ? offeset : -1 * el.height());
    }

    $('html,body').animate({
        scrollTop: pos
    }, 'slow');
}
