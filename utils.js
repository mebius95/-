
// 获取点击项的value
function onClickHander(id){
    var thing = document.getElementById(id);
    var thingvalue=thing.getAttribute("value");
    // div不存在value值，无法通过js直接获取，需要使用getAttribute
    console.log("selected"+thingvalue);
    return thingvalue
}


// 绑定button（id="Send"）进行div监听显示
function Get_srcElement(a){
    var srcElement="";
    srcElement = event.srcElement.getAttribute("value") || event.target.getAttribute("value");
    document.getElementById(a).value = srcElement
}


$(function(){
    // 绑定button（id="submit2"）进行img显示
    $('#submit2').click(function(){
        $("#fd").attr('src',"幅度响应.jpg");
        $("#xw").attr('src',"相位响应.jpg");
        $("#dwcj").attr('src',"单位冲激响应.jpg");
        $("#fd1").attr('src',"幅度响应.jpg");
        $("#xw1").attr('src',"相位响应.jpg");
        $("#dwcj1").attr('src',"单位冲激响应.jpg");})
})

$(document).ready(function() {
  // 给所有单选按钮的变化绑定事件
  $('input[name="sendTime"]').change(function() {
    // 调用onClickHander函数，并传入被选中的单选按钮的id
    var selectedValue = onClickHander(this.id);

    // do something with selectedValue

  });
});



// 下拉框选择
$(function(){
$('.ui.selection.dropdown').dropdown();});

// 单选定时任务
$('.ui.radio.checkbox').checkbox();


