//You are working in the MxMASTERTEST USER.JS file
//The Path to this file = C:\Spira\MxMasterTest
//04.26.2020
//MAB

//Global variables and settings
	g_recordUrls = false;  //Do NOT Capture URL values when recording.
	g_browserLibrary = "Chrome Framework";
	g_CommandInterval = 1000;  



//Use these functions to navigate nearly everywhere in the MX Online site.  The functions both probe for existence of the element and if found, click it.
//If NOT found then a message is written to the report as a FAIL.  
//
//*************************************************************************************************
//Just becase a navigation element was not found, does not mean that it is automatically a failure.
//Even with a Fail, the test continues past any elements that have failed for non-existence.
//
/*************************************************************************************************/
//
//There are 5 main functions and 1 function that is referenced within each of the 5 functions  *Note that the first 2 functions and the function that is 
//referenced in all of the functions below were mostly created by Ryan C.
//
//	5 Main Functions:
//     1.  m_navLevel1Top: (/**string*/ module) 
//     2.  m_navLevel2VerticalLink:  (/**string*/ secondarylink)   
//     3.  m_navLevel3Horizontalbutton:  (/**string*/ landing)   
//     4.  m_navLevel3Horizontalbutton: (/**string*/ landingbutton)   
//     5.  mx_navLevel3HorizontalLink: (/**string*/ horizontallink)j
//
//	Hierarchy
//		1.  m_nav Level 1 Top:  (Located at the Top of every page in the site.)
//				2.  m_nav Level 2 Vertical Link:  (Vertical Links displayed after clicking a Level1TopNav element.)
//				3.  m_nav Level 2 HorizontalLink: (Horizontal Links displayed after clicking a Level1TopNav element.)
//						4.  m_nav Level 3 Horizontalbutton:  (horizontal buttons displayed in a menu bar after clicking a Level2 navigation element.)
//						5.  m_nav Level 3 HorizontalLink:  (horizontal Links displayed after clicking a Level2 navigation element. i.e., under 'My Settings')
//						
//	Function referenced in all functions above.
//		function CrmFindObject(/**string*/ xpath)  (this is the function that validates if the navigation element exists, or not.)




//1.  m_nav Level 1 Top:  (Menu item - located at the Top of every page in the site.)
function m_navLevel1Top(/**string*/ module)
{
	var modulestart = module
	Tester.Message("Level 1 : " +module);
	
	var xpath = "//a[contains(., '" + module +"') and @class='nav-link']"
	//Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)	
    {
		obj.object_name = module;
		obj._DoEnsureVisible();
		Global.DoSleep(500);
		obj._DoClick();

	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}



//2.  m_nav Level 2 Vertical Link:  (Menu item - Vertical Links displayed after clicking a Level 1 TopNav element.)
function m_navLevel2VericalLink(/**string*/ verticallink)
{
	var modulestart = verticallink
	Tester.Message("Level 2  Vertical Link: " +verticallink);
	
	var xpath = "(//h4[contains(@class, 'd-block') and contains(., '" + verticallink + "')])[1]"
	Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)
	{
		obj.object_name = verticallink;
		obj._DoEnsureVisible();
		Global.DoSleep(500);
		obj._DoClick();
	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}



//3.  m-nav Level 2 Horizontal Link: (Menu item - Horizontal Links displayed after clicking a Level 1 TopNav element.)
function m_navLevel2HorizontalLink(/**string*/ horizontallink)
{
	var modulestart = horizontallink
	Tester.Message("Level 2 Horizontal Link: " +horizontallink);
	
	var xpath = ("//i[contains(@class, 'fas fa-3x icon') and contains(@class, '" + horizontallink + "')]")
	Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)
	{
		obj.object_name = horizontallink;
		obj._DoEnsureVisible();
		Global.DoSleep(500);
		obj._DoClick();
	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}



//4.  m_nav Level 3 Horizontalbutton:  (Menu item - horizontal buttons displayed in a menu bar after clicking a Level 2 navigation element.)
function m_navLevel3HorizontalButton(/**string*/ horizontalbutton)
{
	var modulestart = horizontalbutton
	Tester.Message("Level 3 Horizontal Button: " +horizontalbutton);
	
	var xpath = ("//i[contains(@class, 'fas fa-lg icon icon-') and contains(@class, '" + horizontalbutton + "')]")
	//Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)
	{
		obj.object_name = horizontalbutton;
		obj._DoEnsureVisible();
		Global.DoSleep(500);
		obj._DoClick();
	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}



//5.  m_nav Level 3 HorizontalLink:  (Menu item - horizontal Links displayed after clicking a Level 2 navigation element. i.e., under 'My Settings')
function m_navLevel3HorizontalLink(/**string*/horizontallink)
{
	var modulestart = horizontallink
	Tester.Message("Level3 Horizontal Link: " +horizontallink);
	
	var xpath = ("//i[contains(@class, 'fas fa-2x text-secondary') and contains(@class, '" + horizontallink + "')]")
	Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)	
	{
		obj.object_name = horizontallink;
		obj._DoEnsureVisible();
		Global.DoSleep(500);
		obj._DoClick();
	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}



//6.  m_navProbe Level 3 Horizontalbutton:  (Menu item - horizontal buttons displayed in a menu bar after clicking a Level 2 navigation element.)
	//05.11.2020 MAB:  This script does not click on any of the Level 3 horizontal Buttons, it just ensures that they exist and are visible.
	
function m_navProbeLevel3Horizontalbutton(/**string*/ probehorizontalbutton)
{
	var modulestart = probehorizontalbutton
	Tester.Message("Level3 Horizontal Button: " +probehorizontalbutton);
	
		var xpath = ("//i[contains(@class, 'fas fa-lg icon icon-') and contains(@class, '" + probehorizontalbutton + "')]")
	//Tester.Message("Xpath: " + xpath)
	
	var obj = CrmFindObject(xpath);
	if (obj)
	{
		obj._object_name = probehorizontalbutton;
		obj._DoEnsureVisible();
	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}

 

function CrmFindObject(/**string*/ xpath)
{
	for(var i = 0; i < g_objectLookupAttempts; i++)
	{
		var obj = Navigator.Find(xpath);
		if (obj)
		{
		return obj;
		}
		Global.DoSleep(g_objectLookupAttemptInterval);
	}
	return null;
}



function SignInifNotAuthenticated(/**string*/ module, /**string*/ secondary)
{
	var modulestart = module
	Tester.Message("Level 1 : " +module);
	
	var xpath = "(//a[contains(@class, '" + module + "')])[2]"
	//Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)	
    {
		obj.object_name = module;
		obj.DoEnsureVisible();
		obj.DoClick();
	}
		else
	{
	var NextButton = CrmFindObject("//input[contains(@class, '" + secondary + "')]")
	
	if (NextButton)
	 	{
		NextButton.DoEnsureVisible();
		NextButton.DoClick();
		}
	}
}


function ExpressCheckoutOption(/**string*/ module, /**string*/ secondary)
{
	var modulestart = module
	Tester.Message("Level 1 : " +module);
	
	var xpath = "(//a[contains(@class, '" + module + "')])[2]"
	//Tester.Message("Xpath: " + xpath);
	
	var obj = CrmFindObject(xpath);
	if (obj)	
    {
		obj.object_name = module;
		obj.DoEnsureVisible();
		obj.DoClick();
	}
		else
	{
	var NextButton = CrmFindObject("//input[contains(@class, '" + secondary + "')]")
	
	if (NextButton)
	 	{
		NextButton.DoEnsureVisible();
		NextButton.DoClick();
		}
	}
}



function CheckShoppingCartNumber (/** string*/cart) {
	if(cart.length !=17) {
	 	return false
	}
	for (var i = 0; i<cart.length; i++) {
		var s = cart.charAt(i);
		if ( i==2 || i==4 || i== 11) {
			if (s != '-'){
				return false
			}
		} else {
			if(!CheckSymbolsAreInRange(s, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')){
			return false 
			}
		}
	}
	return true
}




//****************************************************************************************************************************

										//******UX FUNCTIONS*****

//****************************************************************************************************************************





function ux_SearchContact(/**string*/ contact){
	m_AppParamSearch(contact)

	Global.DoSleep(3000)

	var modulestart = contact
	var xpathcontact = "//a[contains(., '" + contact + "')]"
	var objcontact = CrmFindObject(xpathcontact);

	if (objcontact)
	{
		objcontact._object_name = contact;
		objcontact._DoEnsureVisible();
		objcontact.DoLDClick(15, 30);
		Global.DoSleep(3000);
		}
Global.DoSleep(2000)
}


function MX_SaveInvoice () {
	var xpath = "//div[contains(@class, 'col-md-2')]";
	var obj = CrmFindObject (xpath);
	var number = obj.GetInnerText();

	var finalnumber = number.substring(12,28); 

		SeS('Batch_Number').DoAddRow();
		SeS('Batch_Number').GetRowCount();
		SeS('Batch_Number').SetCell(finalnumber, 'Invoicenumber', 1)
		SeS('Batch_Number').DoSave();
}


function UX_InvoiceSearch (/**string*/ Invoicenumber) {
	var searchvalue = SeS('Batch_Number').GetCell('Invoicenumber', 1);
	m_AppParamSearch(searchvalue)
	Global.DoSleep(3000)

	var UXInvoiceNumberPath = "//div[contains(@title, '" + searchvalue + "')]";
	var InvObj = CrmFindObject(UXInvoiceNumberPath);
	InvObj.DoLDClick();
	Global.DoSleep(2000)

}



function m_AppParameters(/**string*/ param, /**string*/ value){
	Tester.Message("Parameter: '" + param + "'. New Value: '" + value + "'")
	m_AppParamSearch(param)
	Global.DoSleep(3000)

	var modulestart = param
	var xpathparam = "//label[contains(., '" + param + "')]"
	var objparam = CrmFindObject(xpathparam);

	if (objparam)
	{
		objparam._object_name = param;
		objparam._DoEnsureVisible();
		objparam.DoLDClick(15, 30);
		Global.DoSleep(3000);
		}
	Global.DoSleep(2000)



ParameterValue(value)
	var Searchbutton = "//button[contains(@id, 'quickFind')]";
	var SearchXpath = CrmFindObject(Searchbutton);
	Global.DoSleep(3000)
	SearchXpath._DoClick();
	Global.DoSleep(1000)
}


function ParameterValue(/**string*/ value) {
	var modulestart = value
	var xpathvalue = "//input[contains(@id, 'configvalue')]"
	var objvalue = CrmFindObject(xpathvalue);

	if (objvalue) {
	
		objvalue._object_name = value;
		objvalue._DoEnsureVisible();
		objvalue._DoClick();	
		objvalue._DoSetText(value);
		Global.DoSleep(2000);
	}
	var SaveAndClose = "(//span[contains(., 'Save & Close')])[1]"
	var SaveXpath = CrmFindObject(SaveAndClose);
	SaveXpath._DoClick();
}

function m_AppParamSearch (/**string*/ param) {
	var modulestart = param
	var xpathparam = "//input[contains(@id, 'quickFind')]";
	var objparam = CrmFindObject(xpathparam);

	if (objparam)
	{
		objparam._object_name = param;
		objparam._DoEnsureVisible();
		objparam._DoClick();
		objparam._DoSetText(param);
		Global.DoSleep(3000);
	}
	
	var Searchbutton = "//button[contains(@id, 'quickFind')]";
	var SearchXpath = CrmFindObject(Searchbutton);
	SearchXpath._DoClick();
}

function ux_ChangeArea(/**string*/ name)
{
    SeS('G_OpenAreaList').DoEnsureVisible();
    Global.DoSleep(1000);
    SeS('G_OpenAreaList').DoClick();
    Global.DoSleep(1000);
    var xpath = "//li[@role='menuitemcheckbox' and normalize-space(.)='" + name + "']";
    var obj = CrmFindObject(xpath);
    if (obj)    
    {
        obj.object_name = name;
        obj._DoEnsureVisible();
        Global.DoSleep(1000);
        obj._DoClick();
    }
    else
    {
        LogAssert("ux_ChangeArea: area element is not found: " + name, false);
    }
}


function ux_OpenEntity(/**string*/ entity)
{
	var xpath = "//li[@aria-label='" + entity + "' and contains(@id,'sitemap-entity')]";
	var obj = CrmFindObject(xpath);
	if (obj)	
	{
		obj.object_name = entity;
		obj._DoEnsureVisible();
		obj._DoClick();
	}
	else
	{
		LogAssert("ux_OpenEntity: entity element is not found: " + entity, false);
	}	
}

function mx365_Navigation(/**string*/ invoice){

	SeS('Logout1').DoClick()
	Navigator.Navigate('https://mx365qav90.crm.dynamics.com/main.aspx');
	Global.DoWaitFor(SeS('Switch_to_another_app'))
	SeS('Switch_to_another_app').DoClick();
	SeS('UX_365_Online').DoClick();
	Global.DoWaitFor(SeS('Invoices'))
	SeS('Invoices').DoClick()


}


function ux_GridCancelAll ()
{
	var xpathselectall = "//button[@title='Select All']";
	var obj = CrmFindObject(xpathselectall);
		if (obj)
		{
			obj.DoClick();
		}
		
				var xpathcancel = "//span[@aria-label='Cancel']";
				var obj = CrmFindObject(xpathcancel);
					if (obj)
					{
						Global.DoSleep(1000);
						obj.DoClick();
						Global.DoSleep(2000);
					}
					
					var xpathOK = "//button[normalize-space(.)='OK']";
					var obj = CrmFindObject(xpathOK);
					if (obj)
					{
						obj.DoClick();
					}
					
		
		else
		{
			LogAssert("Grid element not found", false);
		}

}


function ux_OpenRelatedRecord (/**string*/ record)
{
	var xpathrelated = "//li[contains(., 'Related')]"
	var xpathobj = CrmFindObject(xpathrelated);
	if (xpathobj) {
			xpathobj._DoClick();
		}
	
	
	var xpath = "//div[contains(@id, '" + record + "')]"
	var obj = CrmFindObject(xpath);
	if (obj)	
	{
		obj._DoClick();
	}
	else
	{
		LogAssert("Record not found", false);
	}	
}

function ux_OpenAssociatedView (/**string*/ record)
{
	var xpath = "//div[@role='grid']//label[normalize-space(.)='" + record + "']";
	var obj = CrmFindObject(xpath);
	if (obj)	
	{
		obj.DoLDClick();
	}
	else
	{
		LogAssert("Record not found", false);
	}	
}

function Ux_SelectPayment (/**string*/ type) {

	var xpath = "//button[contains(., 'Transactions')]";
	var obj = CRMFindObject(xpath);
	if (obj) {
		
		obj._DoClick();
		}
		
}

function UX_ChooseBatch (/**string*/ BatchType) {

	var xpath = "//button[contains(@aria-label, 'Select Batch')]";
	var obj = CrmFindObject(xpath);
	if(obj)
	{
		obj._DoClick();
		Global.DoSleep(2000);
	}
	
	var xpathsearch = "//span[contains(@data-id, 'searchButton')]"
	var objsearch = CrmFindObject(xpathsearch);
	if(objsearch)
	{
		objsearch._DoClick();
		Global.DoSleep(2000);
	}
	var xpathtype = "//li[contains(@aria-label, '" + BatchType + "')]";
	var objtype = CrmFindObject(xpathtype);
	if(objtype)
	{
		objtype._DoClick();
	}
	
	Global.DoSleep(2000);
	
	var xpathadd = "//button[contains(@id, 'SaveBtn')]";
	var objadd = CrmFindObject(xpathadd);
	if(objadd)
	{
		objadd._DoClick();
	}
}

function ux_CheckFieldValue (/**objectId*/ field, /**string*/ FieldName, /**string*/ ExpectedValue)
{	

	var ActualValue = SeS(field).GetTitle();
	
	Tester.Message('Checking '+FieldName);
	
    if( ExpectedValue == ActualValue )
    {
   		Tester.Message('Value is correct: '+ActualValue);
    }
    else
    {
        Tester.Message('Expected Value: '+ExpectedValue);
        LogAssert('Value is incorrect: '+ActualValue, false);
    }
}

function ux_CheckDateValue (/**objectId*/ field, /**string*/ FieldName, /**string*/ ExpectedValue)
{	

	var ActualValue = SeS(field).GetValue();
	
	Tester.Message('Checking '+FieldName);
	
    if( ExpectedValue == ActualValue )
    {
   		Tester.Message('Value is correct: '+ActualValue);
    }
    else
    {
        Tester.Message('Expected Value: '+ExpectedValue);
        LogAssert('Value is incorrect: '+ActualValue, false);
    }
}

function ux_ScrollTo(/**string*/ dataId)
{
	var xpath = "//div[@data-id='" + dataId + "']";
	var obj = CrmFindObject(xpath);
	if (obj)	
	{
		obj.object_name = dataId;
		Global.DoSleep(1000);
		obj.DoEnsureVisible()
	}
	else
	{
		LogAssert("ux_ScrollTo: element is not found: " + dataId, false);
	}
}

function ux_ClickButton(/**string*/ name)
{
	var xpath = "//button[@aria-label='" + name + "']";
	var obj = CrmFindObject(xpath);
	if (obj)	
	{
		obj.object_name = name;
		Global.DoSleep(500);
		obj.DoClick();
	}
	else
	{
		LogAssert("ux_ClickButton: button element is not found: " + name, false);
	}
}

function ux_GridDeleteAll ()
{
	var xpathselectall = "//button[@title='Select All']";
	var obj = CrmFindObject(xpathselectall);
		if (obj)
		{
			obj.DoClick();
			Global.DoSleep(1000);
		}
		
				var xpathdelete = "//span[contains(@aria-label, 'Delete')]";
				var obj = CrmFindObject(xpathdelete);
					if (obj)
					{
						obj.DoClick();
						Global.DoSleep(1000);
					}
					
					var xpathOK = "//span[@id='confirmButtonText']";
					var obj = CrmFindObject(xpathOK);
					if (obj)
					{
						obj.DoClick();
					}
					
		
		else
		{
			LogAssert("Grid element not found", false);
		}

}

function GetBatch (/** string */ Batch) {
	var batchxpath = "//input[contains(@aria-label, 'Batch Number')]";
	var obj = CrmFindObject (batchxpath);
	var actualnumber = obj.GetTitle()

	if(actualnumber)
	{

	Tester.Message('dfsd', SeS('Batch_Number1').GetTitle())

		SeS('Batch_Number').DoAddRow();
		SeS('Batch_Number').GetRowCount();
		SeS('Batch_Number').SetCell(actualnumber, 'Thebatch', 1)
		SeS('Batch_Number').DoSave();
	}
}


function SelectReadyForGL(/**string*/ batch)
{
	var modulestart = batch
	var xpath = "//iframe@@@//td[contains(@title, '100763')]/..//input[contains(@class, 'readyforgl')]"
	var obj = CrmFindObject(xpath);
	if (obj)
	{
		obj._object_name = batch;
		obj._DoEnsureVisible();
		obj.DoClick();
	}
		else
	{
		Tester.Assert("The Ojbect was NOT found.  Please REVIEW: " + modulestart, false);
	}
}
