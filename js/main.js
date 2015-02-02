$(window).load(function(){

    $('.progressbar').each(function() {
        
        var progressbar = $(this),
            max = progressbar.data('current'),
            time = (1000/100)*1.3, 
            value = progressbar.val();
        
        var loading = function() {  
            value += 1;  
            addValue = progressbar.val(value);  
      
            if (value == max) {  
                clearInterval(animate);                      
            }  
        };  
      
        var animate = setInterval(function() {  
            loading();  
        }, time);
        
    });    
    
});