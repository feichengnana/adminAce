 $(".form_datetime").datetimepicker({
    language: 'zh-CN', 
    minView: "month",
    format: "yyyy-mm-dd",
    autoclose:true,
    todayBtn: true
});
$('#validForm').bootstrapValidator({
    message:'校验未通过',
    fields:{
        limitStr:{
            validators:{
                notEmpty:{
                    message:'您输入的字段不能为空'
                },
                stringLength:{
                    min:6,
                    max:20,
                    message:'请输入6~20个字符'
                },
                different:{
                    field:'password',
                    message:'不能与密码重复'
                }
            }
        },
        password:{
            validators:{
                notEmpty:{
                    message:'请输入密码'
                },
                stringLength:{
                    min:6,
                    max:20,
                    message:'请输入6~20位的密码'
                },
                regexp:{
                    regexp:/^[a-zA-Z0-9_]+$/,
                    message:'密码只能为字母数字或下划线的组合'
                },
                different:{
                    field:'limitStr',
                    message:'不能与用户名相同'
                }
            }
        },
        repassword:{
            validators:{
                notEmpty:{
                    message:'请再次确认密码'
                },
                stringLength:{
                    min:6,
                    max:20,
                    message:'密码限制在6~20位'
                },
                regexp:{
                    regexp:/^[a-zA-Z0-9_]+$/,
                    message:'密码只能为字母数字或下划线的组合'
                },
                identical:{
                    field:'password',
                    message:'两次密码不一致'
                }
            }
        },
        email:{
            validators:{
                notEmpty:{
                    message:'邮箱不能为空'
                },
                emailAddress:{
                    message:'请输入合法的邮箱'
                }
            }
        },
        url:{
            validators:{
                notEmpty:{
                    message:'url不能为空'
                },
                uri:{
                    message:'请输入合法的url'
                }
            }
        },
        regexp:{
            validators:{
                notEmpty:{
                    message:'字段不能为空'
                },
                regexp:{
                    regexp:/^[a-zA-Z0-9_]+$/,
                    message:'只能为字母数字或下划线'
                }
            }
        },
        gender:{
            validators:{
                notEmpty:{
                    message:'请选择性别'
                }
            }
        },
        age:{
            validators:{
                notEmpty:{
                    message:'请输入年龄'
                },
                greaterThan: {
                    value: 18,
                    message:'年龄要大于18周岁'
                },
                lessThan: {
                    value: 100,
                    message:'年龄要小于100周岁'
                }
            }
        },
        likes:{
            validators:{
                notEmpty:{
                    message:'请选择兴趣'
                },
                choice:{
                    min: 2,
                    max: 4,
                    message:'请选择2~4个'
                }
            }
        },
        dateTime:{
            validators:{
                notEmpty:{
                    message:'请填写生日'
                },
                date:{
                    format:'YYYY-MM-DD',
                    message:'请按照YYYY-MM-DD格式输入正确的日期'
                }
            }
        },
        dateTimePicker:{
            validators:{
                notEmpty:{
                    message:'请选择日期'
                },
                date:{
                    format:'YYYY-MM-DD',
                    message:'请按照YYYY-MM-DD格式输入正确的日期'
                }
            }
        },
        fourthFile:{
            validators:{
                notEmpty:{
                    message:'请选择附件'
                },
                file:{
                    extension: 'pdf',
                    type: 'application/pdf',
                    minSize: 1024*1024,
                    maxSize: 10*1024*1024,
                    message:'只能上传1M~10M之间的pdf文件'
                }
            }
        },
        remote:{
            validators:{
                type: 'POST',
                url: 'remote.php',
                message: '名称不可用',
                delay: 1000
            }
        },
        onlyChinese:{
            validators:{
                chinese:{}
            }
        },
        onlyEnglish:{
            validators:{
                chinese:{}
            }
        },
        onlyEnglish:{
            validators:{
                chinese:{}
            }
        },
        phoneNumber:{
            validators:{
                phoneNumber:{}
            }
        },
        telNumber:{
            validators:{
                telNumber:{}
            }
        },
        ip:{
            validators:{
                ip:{}
            }
        }
    }
})

$('.form_datetime').on('changeDate', function(e) {
    $('#validForm').data('bootstrapValidator').revalidateField('dateTimePicker');
});

