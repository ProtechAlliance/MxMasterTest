 //Use 'Record/Learn' button to begin test recording

function Test(params)
{

//========== Recorded at Sunday, December 13, 2020 11:52:37 AM: ======
	//Click on Get Involved
	SeS('Get_Involved').DoClick();
	//Click on Our Chapters
	SeS('Our_Chapters').DoClick();

	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["%g_browserLibrary%"]

