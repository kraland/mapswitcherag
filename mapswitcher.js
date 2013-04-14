chrome.extension.sendMessage({
    type: "getStorage",
    item: "urlmap"
}, function(urlmap) {
    if (!urlmap) {
        urlmap = "http://www.kramages.org/2/map/1/";
    }
    jQuery('#map-content').find('div').each(function(){
        MapTheme(jQuery(this), urlmap);
    });

    jQuery('div[id^=c]').each(function(){
        MapTheme(jQuery(this), urlmap);
    });
});

MapTheme = function(el, urlmap){
    var url = jQuery(el).attr('style');
    var reg = new RegExp("http://www.kramages.org/2/map/[a-z0-9]*/", "g");
        if(jQuery.type(url) != "undefined"){
            url = url.replace(reg, urlmap);
            jQuery(el).attr('style',url);
        }
    
}

