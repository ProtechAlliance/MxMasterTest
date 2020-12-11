//Use 'Record/Learn' button to begin test recording

function Test(params)
{

//========== Recorded at Friday, December 11, 2020 7:38:46 AM: ======
	//Click on Membership
	SeS('Membership').DoClick();
	//Click on Join
	SeS('Join').DoClick();

	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["%g_browserLibrary%"]

