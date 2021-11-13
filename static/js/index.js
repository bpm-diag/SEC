function selectFunction(){
    var fun = document.getElementById("selectFun").value;
    var activity2 = document.getElementById("act2");
    if(fun == "Existence(a)") deselectAct2(activity2);
}

function applyFunction(){
    var fun = document.getElementById("selectFun").value;
    var act1 = document.getElementById("act1").value;
    var activity2 = document.getElementById("act2");
    if(fun == "Existence(a)") deselectAct2(activity2);
    
    console.log(fun, " ", act1)
    $(document).ready(function(){
        var segments = $('.Divtext').text();
        $.ajax({
            type : "POST",
            url : '/existence',
            data: {act1: act1, segments: segments},
            success: function(response) {
                $(".Divtext").html('<p>'+response.result.toString()+'</p>');}
        });
        
    });

}

function deselectAct2(activity2){
    activity2.disabled = true;
    activity2.style.opacity = "0.5";
    
}
