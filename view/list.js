pdfMake.fonts  = {
  msyh: {
     normal: 'msyh.ttf'
  }
};
$(function() {
	var table = $('#dataTable').dataTable({
		"columns": [{
				"data": "proId",
				"title": "操作",
				"width": "20",
				"align": 'center',
				"className": "text-center",
				"render": function(a, b, c, d) {
					var html = '<a href="javascript:;" class="table-link"><i class="fa fa-search-plus"></i></a>';
					html += '<a href="javascript:;" class="table-link"><i class="fa fa-edit"></i></a>';
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
		"data": dataTableData,
		//"scrollY": 200,
        "scrollX": true,
        "scrollCollapse": true,
		"oLanguage": {
			"sProcessing": "处理中...",
			"sLengthMenu": "&nbsp;&nbsp;&nbsp;&nbsp;显示 _MENU_ 项结果",
			"sZeroRecords": "没有匹配结果",
			"sInfo": "显示第 _START_ 至 _END_ 条记录，共 _TOTAL_ 条记录",
			"sInfoEmpty": "显示第 0 至 0 条记录，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 条记录结果过滤)",
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
			},
			"buttons":{
				"copy":"<i title='复制到剪切板' class='fa fa-copy'></i>",
				"excel":"<i title='导出表格' class='fa fa-table'></i>",
				"pdf":"<i title='导出PDF' class='fa fa-file-pdf-o'></i>",
				"colvis":"<i title='列' class='glyphicon glyphicon-th'></i>",
				"copyTitle":"复制到剪切板",
				"copySuccess":{1:"已经复制当前记录到剪贴板",_:"已经复制 %d 条记录到剪切板"}
			}
		},
		"dom": '<"clearfix"<"#table-btns.pull-left"><"pull-right" B><"pull-right mr-10" f>>t<"clearfix" <"pull-left" <"inline-block" i><"inline-block"l>><"pull-right" p>>', //生成样式
		"scrollCollapse": true,
		"paging":true,
		"fixedColumns": {
			'leftColumns': 2
		},
		"language": {
			"emptyTable": "没有关联的需求信息!",
			"thousands": ","
		},
		"pageLength": 10,
		"columnDefs": [{ // 所有列默认值
			"targets": "_all",
			"defaultContent": ''
		}],
		"buttons":  [ 'copy', 'excel', 'pdf', 'colvis' ],
		"initComplete": function(settings, json) {
		    var html = $('#toolbars').html();
		    $('#table-btns').append(html);
		}
	});
	
    
	$("#datetime").datepicker({
		format: "yyyy-mm-dd"
	});
	$('select').select2({
		theme: "bootstrap"
	});
	$('#datepickerRange').datepicker({
		format: "yyyy-mm-dd"
	});
	
	

})

function addItem(){
	//alert(11);
}
