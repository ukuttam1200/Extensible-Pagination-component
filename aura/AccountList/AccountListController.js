({
    doInit: function(component, event, helper) {  
        
    	//set label of pagination button
        component.set('v.pag_PrevBtnLabel',"Previous Page");
        component.set('v.pag_NextBtnLabel',"Next Page");
        
        // Fetch the account list from the Apex controller
        helper.getAccountList(component);
    }
})