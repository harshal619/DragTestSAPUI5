var menuchk = false,notifychk = false;


function menuClick(){
	
//==================== unbinding menu drag ====================
	
	var $pep = $('#content');
	$.pep.unbind( $pep );
	
	var wWidth = 250;
	if(menuchk==true){
		$('#content').animate({ left:0 },
				{
				complete:function(){
					
				}
				});
		menuchk=false;
	}else
	{
		$('#content').animate({ left:wWidth*1.00 },
				{
				complete:function(){
					$('#content').pep({
						debug:true,
					  axis: 'x',
					  stop: function(e){
					    
					    var x = this.$el.position().left;
					    
					    if ( x >= 100 ){
					      this.$el.animate({ left: 200 }, 100);
					    } else {
					      this.$el.animate({ left: 0 }, 100);
					      menuchk=false;
					    }
					    
					  },
					  useCSSTranslation: false,
					  shouldEase: false,
					  constrainTo: [false, false, false, false]
					  
					});
				}
				}); 
		$('#notificationScreen').hide(); 
		$('#menu').show();
		menuchk=true;
		
	}
};

function notificationClick(){
	
	//==================== unbinding menu drag ====================
	
	var $pep = $('#content');
	$.pep.unbind( $pep );
	
	var wWidth = 250;

	if(notifychk==true){
		$('#content').animate({ left:0 }, 'fast');
		notifychk=false;
	}else
	{
		$('#content').animate({ left:-wWidth*1.00 },{
			complete:function(){

				$('#content').pep({
				  axis: 'x',
				  stop: function(e){
				    
				    var x = this.$el.position().left;
				    
				    if ( x < -100){
				      this.$el.animate({ left: -wWidth*1.00 }, 100);
				    } else {
				      this.$el.animate({ left: 0 }, 100);
				      notifychk=false;
				    }
				  },
				  useCSSTranslation: false,
				  shouldEase: false,
				  constrainTo: [false, 0, false, -wWidth*1.00]
				  
				});
			
			}
		});
		$('#menu').hide();
		$('#notificationScreen').show();
		notifychk=true;
	}
}