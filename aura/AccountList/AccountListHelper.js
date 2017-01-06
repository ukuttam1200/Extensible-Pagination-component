({
    // Fetch the accounts from the Apex controller
    getAccountList: function(component) {
        
        var action = component.get('c.getAllAccounts');
        action.setCallback(this, function(actionResult) {
            this.doCallout(component,actionResult.getReturnValue()); 
        });
        $A.enqueueAction(action);
    }
})