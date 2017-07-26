$(function(){
	$('#alert1').click(function(){
		swal("您好！欢迎使用sweetAlert.js！")
	})
	$('#alert2').click(function(){
		swal("提示", "您的信息已被录入！")
	})
	$('#alert3').click(function(){
		swal("提示!", "您已操作成功!", "success")
	})
	$('#alert4').click(function(){
		swal("提示!", "您的操作中存在一些问题，请修正!", "warning")
	})
	$('#alert5').click(function(){
		swal("提示!", "当前操作错误!", "error")
	})
	$('#alert6').click(function(){
		swal("提示!", "已完成!", "info")
	})
	$('#alert7').click(function(){
		swal({
			title:'提示',
			text:'您确定要删除当前记录吗？',
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-danger",
			confirmButtonText: "狠心删除！",
			cancelButtonText: "取消",
		    closeOnConfirm: false,
		    closeOnCancel: false
		},
		function(isConfirm){
			if(isConfirm){
				swal("删除操作", "您已成功删除一条记录！", "success");
			} else {
			    swal("删除操作", "您已放弃删除此条记录！", "error");
			}
		  
		})
	})
	$('#alert8').click(function(){
		swal({
			title:'请输入',
			text:'为方便联系，您输入您的联系方式！',
			type: "input",
			inputPlaceholder: "请输入手机号码",
			showCancelButton: true,
			confirmButtonClass: "btn-info",
			confirmButtonText: "确定！",
			cancelButtonText: "取消",
		    closeOnConfirm: false
		},
		function(inputValue){
			if (inputValue === false) return false;
			if (inputValue === "") {
			    swal.showInputError("请输入您的联系方式!");
			    return false
			}
			swal("操作成功！","您输入的联系方式为: " + inputValue, "success");
		})
	})
})
