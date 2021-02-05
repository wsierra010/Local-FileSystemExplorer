import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";


class Back{

    lastPagesArray=[];

    setLastPage( path ) {
        const last = this.getLastPage();
        if( last != path ) {
            this.lastPagesArray.push( path );
        }
    }

    goBack(){
        if( this.lastPagesArray.length > 1 ){
            this.lastPagesArray.pop();
            const path = this.getLastPage();
            getFolders( path, [ printMainContent ] );
        }
    }

    getLastPage(){
        return this.lastPagesArray[ this.lastPagesArray.length -1 ];
    }

}

export const back = new Back();

