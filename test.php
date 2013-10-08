<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<style type="text/css">
#link {
	width: 200px;
	height: 50px;
	background-color: #999999;
	border-style: solid;
	border-width: 1px;
	display:inline-block
}
</style>
<script>
$(document).ready(function() {
  $("a[href!=#test1]").click(function(e){
		console.log(this.href); 
    //console.log(this.href);
    //e.stopPropagation(); // Prevent bubbling
  });
}); 
</script>
</head>

<body>
<div id="link"><a href="#test1">this</a> is a <a href="#test2">link</a></div>
</body>
</html> 