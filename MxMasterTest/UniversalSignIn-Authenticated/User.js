//Put your custom functions and variables in this file

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


function m_BasicSignIn(/**string*/ g_expectedusername, /**string*/g_expectedpassword)
{
var username = g_expectedusername
var password = g_expectedpassword

	if (SeS('Register').DoEnsureVisible())
	{
		Global.DoSleep(2000);
		SeS('SignIN-START')._DoClick();
		//Tester.Assert("The Sign In button was found.  Let's sign in now", true);
		//Tester.Assert("",true);
			
			if (SeS('Username')._DoEnsureVisible())
			{
				SeS('Username').DoSetText(g_expectedusername);
				Global.DoWaitFor('Password');
				SeS('Password').DoSetText(g_expectedpassword);
			}
			
			if (SeS('Username').Length < 1)
			{
				SeS('Username')._DoEnsureVisible()
				SeS('Username').DoSetText(g_expectedusername);
				Tester.Assert("The value in 'Username' has mysteriously disappeared.  The script just populated it a second time.", false);
			}
			
			if (SeS('SignIN-SUBMIT')._DoEnsureVisible())
			{
				SeS('SignIN-SUBMIT').DoClick();
				SeS('My_Account')._DoEnsureVisible();
				//Tester.Assert("The User should be signed in now.  Let's confirm that", true);
			}
	}
		else
	{
		Tester.Assert("The Sign In button was not visible.  A user must already be signed in", false);
	}
}




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
	//Tester.Message("Xpath: " + xpath);
	
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
		obj._DoClick();
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




    
