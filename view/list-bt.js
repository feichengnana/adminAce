$(function() {
	$("#datetime").datepicker({
		format: "yyyy-mm-dd"
	});
	$('select').select2({
		theme: "bootstrap"
	});
	$('#datepickerRange').datepicker({
		format: "yyyy-mm-dd"
	});
	$('#dataTable').bootstrapTable({
		//url: 'xx.action', 
		//method: 'get',
		data: dataTableData, //演示使用data的方式获取数据
		striped: true,
		cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		toolbar:'#toolbar',
		queryParams: function (params) {
            return params;
        },
		pagination: true, 
		pageNumber: 1,
		pageSize: 10,
		pageList: [10, 25, 50, 100], 
		sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
		//当server分页的时候，下面的是不起作用的--start
		sortable: true, 
		sortOrder: "asc", 
		search: false,
		strictSearch: false,//true为全匹配搜索，否则模糊搜索
		//当server分页的时候，下面的是不起作用的--end
		showColumns: true, //是否显示所有的列
		showRefresh: true, //是否显示刷新按钮
		minimumCountColumns: 2, //最少允许的列数
		clickToSelect: true, //是否启用点击选中行
		uniqueId: "ID", //每一行的唯一标识，一般为主键列
		showToggle: true, //是否显示详细视图和列表视图的切换按钮
		cardView: false, //是否显示详细视图
		detailView: false, //是否显示父子表
//		fixedColumns: true,
//		fixedNumber:2,
		columns: [{
                "checkbox": true,
                "align": 'center',
                "valign":"middle"
            },
			{
				"field": "proId",
				"title": "操作",
				"width": "100",
				"align": 'center',
				"valign":"middle",
				"formatter": function(value,row,index) {
					var html = '<div class="btn-group btn-group-sm" style="width:70px;">';
					html += '<button type="button" title="查看" class="btn btn-info"><i class="fa fa-search-plus"></i></button>';
					html += '<button type="button" title="编辑" class="btn btn-warning"><i class="fa fa-edit"></i></button>';
					html += '</div>';
					return html;
				}
			},
			{
				"field": "proName",
				"title": "工单名称",
				"width": '160',
				"align": 'left',
				"valign":"middle"
			},
			{
				"field": "busiCode",
				"title": "工单编码",
				"width": '120',
				"align": 'center',
				"valign":"middle"
			},
			{
				"field": "proCode",
				"title": "项目编码",
				"width": '120',
				"align": 'center',
				"valign":"middle"
			},
			{
				"field": "cityName",
				"title": "地市",
				"width": '90',
				"align": 'left',
				"valign":"middle"
			},
			{
				"field": "disName",
				"title": "区县",
				"width": '90',
				"align": 'left',
				"valign":"middle"
			},
			{
				"field": "providerName",
				"title": "工程服务商",
				"width": '150',
				"align": 'left',
				"valign":"middle"
			},
			{
				"field": "providerUserName",
				"title": "工单接收人",
				"width": '100',
				"align": 'left',
				"valign":"middle"
			},
			{
				"field": "buildSceneName",
				"title": "建设性质",
				"width": '100',
				"align": 'center',
				"valign":"middle"
			},
			{
				"field": "buildTypeName",
				"title": "建设时限",
				"width": '100',
				"align": 'center',
				"valign":"middle"
			},
			{
				"field": "proDate",
				"title": "归属工期（天）",
				"width": '100',
				"align": 'center',
				"valign":"middle"
			}
		]
	})

})