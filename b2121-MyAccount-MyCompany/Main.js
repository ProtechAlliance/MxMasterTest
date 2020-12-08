//Use 'Record/Learn' button to begin test recording

function Test(params)
{

RVL.DoPlayScript("%WORKDIR%\\2121-MyAccount-MyCompany\\Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
	
}

g_load_libraries=["%g_browserLibrary%"]

