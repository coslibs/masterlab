<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title><?php echo $html_title;?></title>
<link href="css/install.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery.js"></script>
<link href="css/perfect-scrollbar.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/perfect-scrollbar.min.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
<script type="text/javascript">
var scroll_height = 0;
function showmessage(message) {
    document.getElementById('license').innerHTML += message+"<br/>";
    document.getElementById("text-box").scrollTop = 500+scroll_height;
    scroll_height += 40;
}
$(document).ready(function(){
    //自定义滚定条
    $('#text-box').perfectScrollbar();
});
</script>
</head>

<body>
<?php echo $html_header;?>
<div class="main">
  <div class="step-box" id="step4">
    <div class="text-nav">
      <h1>Step.4</h1>
      <h2>安装数据库</h2>
      <h5>正在执行数据库安装</h5>
    </div>
      <?php include 'include/procedure-nav.php'?>
  </div>
  <div class="text-box" id="text-box">
    <div class="license" id="license"></div>
  </div>
  <div class="btn-box"><a href="javascript:void(0);" id="install_process" class="btn btn-primary">正在安装 ...</a></div>
</div>
<?php echo $html_footer;?>
</body>
</html>
