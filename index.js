$(document).ready(function() {
    hideAllTabs();
    var tabIds = ["inProcess","toDo", "done"];
    tabIds.forEach(id => registerTabClick(id));
    showTab(tabIds[0]);
});

function registerTabClick(id) {
    var menuId = '#tab-'+id;
    $(menuId).click(function() {
        $(".menu > div").removeClass();
        $(menuId).addClass("clicked");
        hideAllTabs();
        $("#"+id).show();
    });
}

function hideAllTabs() {
    $(".tab").hide();
}

function showTab(tab) {
    $("#tab-"+tab).click();
}
