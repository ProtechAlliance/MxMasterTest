//Use 'Record/Learn' button to begin test recording

function Test(params)
{


	RVL.DoPlayScript("%WORKDIR%\\c3020-Membership-Apply\\Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["%g_browserLibrary%"]

