
MapTheme = function(el){
    var url = jQuery(el).attr('style');
    var reg=new RegExp("http://www.kramages.org/2/map/[a-z0-9]*/", "g");
    if(jQuery.type(url) != "undefined"){
        url = url.replace(reg,'http://ag.leviathanos.com/upload/img/dossier%202/');
        jQuery(el).attr('style',url);
    }
}

jQuery('#map-content').find('div').each(function(){
    MapTheme(jQuery(this));
});

jQuery('div[id^=c]').each(function(){
    MapTheme(jQuery(this));
});