// begin first table
$('#dataTable').dataTable({
	"oLanguage": {
		"sProcessing": "处理中...",
		"sLengthMenu": "显示 _MENU_ 项结果",
		"sZeroRecords": "没有匹配结果",
		"sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
		"sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
		"sInfoFiltered": "(由 _MAX_ 项结果过滤)",
		"sInfoPostFix": "",
		"sSearch": "搜索:",
		"sSearchPlaceholder": "",
		"sUrl": "",
		"sDecimal": "",
		"sThousands": ",",
		"sEmptyTable": "表中数据为空",
		"sLoadingRecords": "载入中...",
		"sInfoThousands": ",",
		"oPaginate": {
			"sFirst": "首页",
			"sPrevious": "上页",
			"sNext": "下页",
			"sLast": "末页"
		},
		"oAria": {
			"sSortAscending": ": 以升序排列此列",
			"sSortDescending": ": 以降序排列此列"
		}
	},
	"ordering": false, // 排序
	"serverSide": false, // 开启服务器模式
	"paging": true,
	"bAutoWidth": false,
	"scrollCollapse": true,
	'scrollX': true,
//	'fixedColumns': {
//		'leftColumns': 2
//	},
	"language": {
		"emptyTable": "没有关联的需求信息!",
		"thousands": ","
	},
	"data": dataTableData,
	"pageLength": 10,
	"pagingType": "bootstrap_full_number",
	"columns": [{
			"data": "proId",
			"title": "操作",
			"width": "20",
			"align": 'center',
			"className": "text-center",
			"render": function(a, b, c, d) {
				var html = '<div class="btn-group btn-group-xs" style="width:130px">';
					html += '<button type="button" class="btn btn-success">查看</button>';
					html += '<button type="button" class="btn btn-info">编辑</button>';
					html += '<button type="button" class="btn btn-warning">删除</button>';
				html += '</div>';
				return html;
			}
		},
		{
			"data": "proName",
			"title": "工单名称",
			"width": '160',
			"align": 'left'
		},
		{
			"data": "busiCode",
			"title": "工单编码",
			"width": '120',
			"align": 'left'
		},
		{
			"data": "proCode",
			"title": "项目编码",
			"width": '190',
			"align": 'left'
		},
		{
			"data": "cityName",
			"title": "地市",
			"width": '120',
			"align": 'left'
		},
		{
			"data": "disName",
			"title": "区县",
			"width": '120',
			"align": 'left'
		},
		{
			"data": "providerName",
			"title": "工程服务商",
			"width": '100',
			"align": 'left'
		},
		{
			"data": "providerUserName",
			"title": "工单接收人",
			"width": '100',
			"align": 'left'
		},
		{
			"data": "buildSceneName",
			"title": "建设性质",
			"width": '100',
			"align": 'left'
		},
		{
			"data": "buildTypeName",
			"title": "建设时限",
			"width": '100',
			"align": 'left'
		},
		{
			"data": "proDate",
			"title": "归属工期（天）",
			"width": '100',
			"align": 'left'
		}
	],
	"columnDefs": [{ // 所有列默认值
		"targets": "_all",
		"defaultContent": ''
	}],
	"dom": 'rt<"floatl mt5"i><"floatr mt5"p><"clear">' //生成样式
});