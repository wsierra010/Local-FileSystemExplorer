import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";

export function addSidebarListeners(){
    $( ".aside" ).on( "click", function(event) {
        
        let target = event.target;
        
        let id = $(target).parent().attr('id')

        if($(target).hasClass('aside__folder__arrow')){

            toggleShowContent(id);
            
        }else if($(target).hasClass('aside__folder__name')){
            
            showContent(id);
            getFolders($(target).data('path'), [printMainContent]);

        }
      });
}
function toggleShowContent(id){
    
    if($('#div-'+id).css( "display")=='none'){
        showContent(id);
    } else{
        hideContent(id);
    };
}

function showContent(id){
    let container = '#div-'+id;
    let arow = '#' + id + ' .aside__folder__arrow';

    $(container).css( "display", 'block');

    $(arow).removeClass('fa-chevron-right');
    $(arow).addClass('fa-chevron-down');

    
}

function hideContent(id){
    let container = '#div-'+id;
    let arow = '#' + id + ' .aside__folder__arrow';

    $(container).css( "display", 'none');

    $(arow).addClass('fa-chevron-right');
    $(arow).removeClass('fa-chevron-down');
}