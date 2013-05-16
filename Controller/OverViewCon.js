$(document).ready(function(){
	
	
	$(".ceo").click(function(){
		
		var id = this.id;
		id =id.substring(3);
		//alert(this.id);
		//alert(id);
		
		$.ajax({
			url:'../View/overviewCbu.jsp',
			type:'get',
			dataType:'html',
			success:function(data){
				//alert(id);
				$(".cbu"+id).html(data);
				
			}
		});
		
	});
	

$(".cbu").live("click",function(){
		//alert("hello");
		var id = this.id;
		id =id.substring(3);
		//alert(this.id);
		//alert(id);
		
		$.ajax({
			url:'../View/overviewSbu.jsp',
			type:'get',
			dataType:'html',
			success:function(data){
				//alert(id);
				$(".sbu"+id).html(data);
				//$(".cbu").die("click");	
			}
		});
		
		
	});



});