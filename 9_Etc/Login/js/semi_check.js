$(document).ready(function() {
    $("#all_check").click(function() {
        if($("#all").is(":checked")) $("input[name=normal]").prop("checked", false);
        else $("input[name=normal]").prop("checked", true);
    });
    
    $("input[name=normal]").click(function() {
        var total = $("input[name=normal]").length;
        var checked = $("input[name=normal]:checked").length;
        
        if(total != checked) $("#all").prop("checked", false);
        else $("#all").prop("checked", true); 

    });
});