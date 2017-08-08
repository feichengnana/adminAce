var App = function(){
	
	/*
	 * 说明：用于控制面板的折叠隐藏
	 * param:el：触犯的对象
	 * param:parentEl：父容器
	 * param:bodyEl：内容面板的容器
	 * param:icon1：展开时的图标
	 * param:icon2：折叠时的图标
	 * */
	var panelAction = function(el,parentEl,bodyEl,icon1,icon2,times){
		$(el).click(function(){
			var me = $(this);
			var pnode = me.closest(parentEl);
			var pbody = pnode.nextAll(bodyEl).first();
			var meicon = me.find('.fa');
			if(times!=0){
				times = times?times:200;
			}
			pbody.slideToggle(times);
			meicon.toggleClass(icon1).toggleClass(icon2);
			if(el == '.panel-search-more a'){
				var panelSearch = me.closest('.panel-search');
				var resetBtn = panelSearch.find('.panel-search-action').find('button[type=reset]');
				console.log(resetBtn);
				resetBtn.toggleClass('hidden');
			}
		})
	}
	var initPanel = function(){
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
	}
	var initDatePicker = function(){
		//重定义datePicker的默认值
		if($.fn.datepicker){
			$.fn.datepicker.defaults.format = 'yyyy-mm-dd';
			$.fn.datepicker.defaults.language = 'zh-CN';
			$.fn.datepicker.defaults.autoclose = true;
		}
	}
	
	var initValidate = function(){
		//表单校验
		$('form.required-validate').each(function(){
		    var $form = $(this);
		    $form.bootstrapValidator();
		    // 修复bootstrap validator重复向服务端提交bug
		    $form.on('success.form.bv',function(e){
		        e.preventDefault();
		    })
		})
	}
	
	var handleBootstrapSwitch = function() {
        if (!$().bootstrapSwitch) {
            return;
        }
        $('.make-switch').bootstrapSwitch();
    };
    
    var handleScrollers = function() {
        App.initSlimScroll('.scroller');
    };
	
	var handleSelect2 = function() {
        if ($().select2) {
            $.fn.select2.defaults.set("theme", "bootstrap");
            $('.select2me').select2({
                placeholder: "Select",
                width: 'auto', 
                allowClear: true
            });
        }
    };
    
    return {
    	init:function(){
    		initPanel();
    		handleScrollers();
    		initDatePicker(); 
    		initValidate(); 
    		handleSelect2();
    	},
    	scrollTo: function(el, offeset) {
            var pos = (el && el.size() > 0) ? el.offset().top : 0;
            if (el) {
//              if ($('body').hasClass('page-header-fixed')) {
//                  pos = pos - $('.page-header').height();
//              } else if ($('body').hasClass('page-header-top-fixed')) {
//                  pos = pos - $('.page-header-top').height();
//              } else if ($('body').hasClass('page-header-menu-fixed')) {
//                  pos = pos - $('.page-header-menu').height();
//              }
                pos = pos + (offeset ? offeset : -1 * el.height());
            }

            $('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },

        initSlimScroll: function(el) {
            if (!$().slimScroll) {
                return;
            }

            $(el).each(function() {
                if ($(this).attr("data-initialized")) {
                    return; // exit
                }

                var height;

                if ($(this).attr("data-height")) {
                    height = $(this).attr("data-height");
                } else {
                    height = $(this).css('height');
                }

                $(this).slimScroll({
                    allowPageScroll: true, // allow page scroll when the element scroll is ended
                    size: '7px',
                    color: ($(this).attr("data-handle-color") ? $(this).attr("data-handle-color") : '#bbb'),
                    wrapperClass: ($(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : 'slimScrollDiv'),
                    railColor: ($(this).attr("data-rail-color") ? $(this).attr("data-rail-color") : '#eaeaea'),
                    position: 'right',
                    height: height,
                    alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                    railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                    disableFadeOut: true
                });

                $(this).attr("data-initialized", "1");
            });
        },

        destroySlimScroll: function(el) {
            if (!$().slimScroll) {
                return;
            }

            $(el).each(function() {
                if ($(this).attr("data-initialized") === "1") { // destroy existing instance before updating the height
                    $(this).removeAttr("data-initialized");
                    $(this).removeAttr("style");

                    var attrList = {};

                    // store the custom attribures so later we will reassign.
                    if ($(this).attr("data-handle-color")) {
                        attrList["data-handle-color"] = $(this).attr("data-handle-color");
                    }
                    if ($(this).attr("data-wrapper-class")) {
                        attrList["data-wrapper-class"] = $(this).attr("data-wrapper-class");
                    }
                    if ($(this).attr("data-rail-color")) {
                        attrList["data-rail-color"] = $(this).attr("data-rail-color");
                    }
                    if ($(this).attr("data-always-visible")) {
                        attrList["data-always-visible"] = $(this).attr("data-always-visible");
                    }
                    if ($(this).attr("data-rail-visible")) {
                        attrList["data-rail-visible"] = $(this).attr("data-rail-visible");
                    }

                    $(this).slimScroll({
                        wrapperClass: ($(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : 'slimScrollDiv'),
                        destroy: true
                    });

                    var the = $(this);

                    // reassign custom attributes
                    $.each(attrList, function(key, value) {
                        the.attr(key, value);
                    });

                }
            });
        },

        // function to scroll to the top
        scrollTop: function() {
            App.scrollTo();
        },

        // wrApper function to  block element(indicate loading)
        blockUI: function(options) {
            options = $.extend(true, {}, options);
            var html = '';
            if (options.animate) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '">' + '<div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + '</div>';
            } else if (options.iconOnly) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif" align=""></div>';
            } else if (options.textOnly) {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
            } else {
                html = '<div class="loading-message ' + (options.boxed ? 'loading-message-boxed' : '') + '"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;' + (options.message ? options.message : 'LOADING...') + '</span></div>';
            }

            if (options.target) { // element blocking
                var el = $(options.target);
                if (el.height() <= ($(window).height())) {
                    options.cenrerY = true;
                }
                el.block({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    centerY: options.cenrerY !== undefined ? options.cenrerY : false,
                    css: {
                        top: '10%',
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            } else { // page blocking
                $.blockUI({
                    message: html,
                    baseZ: options.zIndex ? options.zIndex : 1000,
                    css: {
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    overlayCSS: {
                        backgroundColor: options.overlayColor ? options.overlayColor : '#555',
                        opacity: options.boxed ? 0.05 : 0.1,
                        cursor: 'wait'
                    }
                });
            }
        },

        // wrApper function to  un-block element(finish loading)
        unblockUI: function(target) {
            if (target) {
                $(target).unblock({
                    onUnblock: function() {
                        $(target).css('position', '');
                        $(target).css('zoom', '');
                    }
                });
            } else {
                $.unblockUI();
            }
        },

        startPageLoading: function(options) {
            if (options && options.animate) {
                $('.page-spinner-bar').remove();
                $('body').append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
            } else {
                $('.page-loading').remove();
                $('body').append('<div class="page-loading"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (options && options.message ? options.message : 'Loading...') + '</span></div>');
            }
        },

        stopPageLoading: function() {
            $('.page-loading, .page-spinner-bar').remove();
        }

    }

}();

jQuery(document).ready(function() {    
    App.init(); // init metronic core componets
    $(window).resize(function(){
    	App.destroySlimScroll('.page-content.scroller');
    	App.initSlimScroll('.page-content.scroller');
    	App.destroySlimScroll('#sidebar .scroller');
    	App.initSlimScroll('#sidebar .scroller');
    })
});