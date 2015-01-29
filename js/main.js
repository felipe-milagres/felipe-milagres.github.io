$(window).load(function(){
   /* var progressbar = $('.progressbar'),  
        max = 80,  
        time = (1000/100)*1.5,      
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
    }, time); */
    
    $('.progressbar').each(function() {
        console.log( $(this).data('current') );
        
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