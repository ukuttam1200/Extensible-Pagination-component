public class AccountContactsController {
	
    @AuraEnabled
    public static List<Account> getAllAccounts() {
    	return [SELECT Id, name, industry, Type, Phone
    			FROM Account ORDER BY createdDate ASC];
    } 
    
    @AuraEnabled
    public static List<User> getUsers() {
    	return [select Id,Name,Email from User];
    } 
    
    @AuraEnabled
    public static List<Account> getAccounts() {
        
        return [select ID,Name from Account limit 10];
    }
    
    @AuraEnabled
    public static List<Account> getSelectedAccounts(ID AccID) {
       	
        return [select ID,Name,AccountNumber,BillingCity,(select ID,lastName,Title,Email from contacts) from Account where ID =:AccID];
    }
    
    @AuraEnabled
    public static List<Account> UpdateAccount(String AccId,String accName,String City) {
        
        Account acc = [select ID,Name,BillingCity from account where ID =: AccId];
        acc.Name = accName;
        acc.BillingCity = City;
        upsert acc;
        
        return [select ID,Name from Account limit 10];
    }
    
    @AuraEnabled
    public static Contact UpdateContact(Contact cnt) {
        
        update cnt;
        return cnt;
    }
    
    @AuraEnabled
    public static Contact saveContactPurpose(Contact cnt) {
        
        update cnt;
        return cnt;
    }
    
    @AuraEnabled
    public static List<String> getContactPurposeFields() {
        
        List<String> options = new List<String>();
        Schema.DescribeFieldResult fieldResult = Contact.Purpose__C.getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
        
        for (Schema.PicklistEntry f: ple) {
            options.add(f.getLabel());
        }
       
        return options;
    }
    
    @AuraEnabled
    public static contact SelectMuliplePurposeContact() {
        
        contact cnn = [select id,Purpose__C from Contact limit 1];
        //String selectedfields = cnn.Purpose__C;
        return cnn;
    }
	    
}