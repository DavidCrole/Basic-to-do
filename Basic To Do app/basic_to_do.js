$(document).ready(function(){
    $("#button").click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        if (toAdd.length > 0) {
            $(".list").append('<li class="item">'  + toAdd + '</li>');
            $('#form').trigger("reset")
        }
    });
    
    $(document).keypress(function(key) {
    	if (key.which === 13) {
    		key.preventDefault();
    		$("#button").click()
            
    }
    });
  
    $(document).on("click", ".item", function() {
    $(this).addClass("strikethrough")
    });
});
