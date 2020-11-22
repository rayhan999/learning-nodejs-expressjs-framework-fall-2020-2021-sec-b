$(document).ready(function(){
    $("#unamecreate").focus(function(){
        
        $('#alert').html("");
    });
    
    
    $('#unamecreate').focusout(function(){
		var username = $("#unamecreate").val();
       

		$.ajax({
			url: '/supAdmin/uname',
			method: 'post',
			datatype : 'json',
			data : {'search':username},
			success:function(response){
				if(response.flag){
                   
                    var alert =" <div class='alert alert-warning alert-dismissible fade show' role='alert'>"
                    alert+="<strong>Warning!</strong> Username already taken"
                    alert+="<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
                    alert+= " <span aria-hidden='true'>&times;</span>"
                    alert+=" </button>"
                    alert+="</div>"
					
                    $('#alert').html(alert);
                    $("#unamecreate").val("");
				}
			},
			error:function(response){
				alert('server error');
			}
		});
	});
	$("#cmname").focus(function(){
        
        $('#payment').html("");
    });
    
	$('#cmname').focusout(function(){
		var username = $("#cmname").val();
       
console.log("ajax e aschi");
		$.ajax({
			url: '/subscriber/uname',
			method: 'post',
			datatype : 'json',
			data : {'search':username},
			success:function(response){
				if(response.flag){
                   
                    var alert =" <div class='alert alert-warning alert-dismissible fade show' role='alert'>"
                    alert+="<strong>Warning!</strong>Get your payment done to register"
                    alert+="<button type='button' class='close' data-dismiss='alert' aria-label='Close'>"
                    alert+= " <span aria-hidden='true'>&times;</span>"
                    alert+=" </button>"
                    alert+="</div>"
					
                    $('#payment').html(alert);
                    $("#cmname").val("");
				}
			},
			error:function(response){
				alert('server error');
			}
		});
	});
});