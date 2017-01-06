({
	doCallout : function(component,sObjectList){		
        
        component.set('v.pag_sObjectList',sObjectList);
        var obj = [];
        for(var i = 0; i < component.get('v.pag_lim') ; i++){
            obj.push(sObjectList[i]);
        }
        component.set('v.pag_selectedList',obj);
        component.set('v.pag_TotalRecords',sObjectList.length);
        if (sObjectList.length > parseInt(component.get('v.pag_lim'))) {
            component.set('v.pag_HasNext',true);
        }
	}
    
    
})