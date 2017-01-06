({
    doNext : function(component) {
        var objList = component.get('v.pag_sObjectList');
        var obj = [];
        component.set('v.pag_selectedList',obj);
        var offset = parseInt(component.get('v.pag_lim')) + parseInt(component.get('v.pag_offset'));
        component.set('v.pag_offset', offset);
       
        if((parseInt(component.get('v.pag_offset')) + parseInt(component.get('v.pag_lim'))) > objList.length ){
           
            component.set('v.pag_HasNext',false);
            component.set('v.pag_HasPrevious',true);
            for(var i = parseInt(component.get('v.pag_offset')); i < objList.length ; i++){
                obj.push(objList[i]);
            }
            component.set('v.pag_selectedList',obj);
        }
        else{   
            
            for(var i = parseInt(component.get('v.pag_offset')); i < (parseInt(component.get('v.pag_lim')) + parseInt(component.get('v.pag_offset'))) ; i++){
                obj.push(objList[i]);
            }
            component.set('v.pag_selectedList',obj);
        }
    },
    
    doPrevious : function(component){
        var objList = component.get('v.pag_sObjectList');
        var offset = parseInt(component.get('v.pag_offset'));
        var limit = parseInt(component.get('v.pag_lim'));
       	component.set('v.pag_offset',offset - limit);
        var obj = [];
        component.set('v.pag_selectedList',obj);
        if( parseInt(component.get('v.pag_offset')) == 0){
           	
            component.set('v.pag_HasPrevious',false);
            component.set('v.pag_HasNext',true);
            for(var i = parseInt(component.get('v.pag_offset')); i < parseInt(component.get('v.pag_lim')) ; i++){
                obj.push(objList[i]);
            }
            component.set('v.pag_selectedList',obj);
        }
        else{   
            
            for(var i = parseInt(component.get('v.pag_offset')); i < (parseInt(component.get('v.pag_lim')) + parseInt(component.get('v.pag_offset'))) ; i++){
                obj.push(objList[i]);
            }
            component.set('v.pag_selectedList',obj);
        }
    }
})