//Use 'Record/Learn' button to begin test recording

function Test(params)
{


	RVL.DoPlayScript("%WORKDIR%\\MxNavigation\\e5010-Directories-BoardOfDirectors\\Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["%g_browserLibrary%"]

