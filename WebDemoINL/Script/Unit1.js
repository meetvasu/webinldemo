function Test2()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btIExplorer, "", Browsers.pX64).Run("http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx");
  //Maximizes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks at point (78, 14) of the 'textboxUsername' object.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.textboxUsername.Click(78, 14);
  //Sets the text 'Tester' in the 'textboxUsername' text editor.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.textboxUsername.SetText("Tester");
  //Enters '[Tab]' in the 'textboxUsername' object.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.textboxUsername.Keys("[Tab]");
  //Sets the text 'test' in the 'passwordboxPassword' text editor.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.panelLogin.passwordboxPassword.SetText("test");
  //Clicks the 'submitbuttonLogin' control.
  Aliases.browser.pageWebOrdersLogin.formAspnetform.panelLogin.submitbuttonLogin.ClickButton();
  //Navigates to the ''http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx'' address.
  Aliases.browser.ToUrl("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx");
  //Clicks the 'linkOrder' control.
  Aliases.browser.pageWebOrders3.formAspnetform.linkOrder.Click();
  //Navigates to the ''http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Process.aspx'' address.
  Aliases.browser.ToUrl("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Process.aspx");
  //Selects the 'MyMoney' item of the 'selectProduct' select control.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.selectProduct.ClickItem("MyMoney");
  //Selects the 'FamilyAlbum' item of the 'selectProduct' select control.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.selectProduct.ClickItem("FamilyAlbum");
  //Clicks at point (26, 13) of the 'textboxQuantity' object.
  Aliases.browser.pageWebOrders2.formAspnetform.textboxQuantity.Click(26, 13);
  //Sets the text '1' in the 'textboxQuantity' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.textboxQuantity.SetText("1");
  //Enters '[Tab]' in the 'textboxQuantity' object.
  Aliases.browser.pageWebOrders2.formAspnetform.textboxQuantity.Keys("[Tab]");
  //Enters '[Tab]' in the 'textboxPricePerUnit' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxPricePerUnit.Keys("[Tab]");
  //Enters '[Tab]' in the 'textboxDiscount' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxDiscount.Keys("[Tab]");
  //Enters '[Tab]' in the 'textboxTotal' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxTotal.Keys("[Tab]");
  //Enters '[Tab]' in the 'submitbuttonCalculate' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.submitbuttonCalculate.Keys("[Tab]");
  //Sets the text 'Vasudevan' in the 'textboxCustomerName' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxCustomerName.SetText("Vasudevan");
  //Enters '[Tab]' in the 'textboxCustomerName' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxCustomerName.Keys("[Tab]");
  //Sets the text '340 Dragonfly Dr' in the 'textboxStreet' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxStreet.SetText("340 Dragonfly Dr");
  //Enters '[Tab]' in the 'textboxStreet' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxStreet.Keys("[Tab]");
  //Sets the text 'Prosper' in the 'textboxCity' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxCity.SetText("Prosper");
  //Enters '[Tab]' in the 'textboxCity' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxCity.Keys("[Tab]");
  //Sets the text 'TX' in the 'textboxState' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxState.SetText("TX");
  //Enters '[Tab]' in the 'textboxState' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxState.Keys("[Tab]");
  //Sets the text '75078' in the 'textboxZip' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxZip.SetText("75078");
  //Enters '[Tab]' in the 'textboxZip' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textboxZip.Keys("[Tab]");
  //Clicks the 'radiobuttonAmericanExpress' control.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.radiobuttonAmericanExpress.ClickButton();
  //Clicks at point (122, 9) of the 'textboxCardNr' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textnode.textboxCardNr.Click(122, 9);
  //Sets the text '48091853110789' in the 'textboxCardNr' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textnode.textboxCardNr.SetText("48091853110789");
  //Clicks at point (28, 11) of the 'textboxExpireDateMmYy' object.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textnode.textboxExpireDateMmYy.Click(28, 11);
  //Sets the text '08/21' in the 'textboxExpireDateMmYy' text editor.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.textnode.textboxExpireDateMmYy.SetText("08/21");
  //Clicks the 'linkInsertbutton' control.
  Aliases.browser.pageWebOrders2.formAspnetform.tableFmworder.linkInsertbutton.Click();
  //Delays the test execution for the specified time period.
  Delay(5000);
  //Clicks the 'linkViewAllOrders' control.
  Aliases.browser.pageWebOrders2.formAspnetform.linkViewAllOrders.Click();
  //Checks whether the 'innerText' property of the Aliases.browser.pageWebOrders.formAspnetform.tableOrdergrid.cellVasudevan object equals 'Vasudevan'.
  aqObject.CheckProperty(Aliases.browser.pageWebOrders.formAspnetform.tableOrdergrid.cellVasudevan, "innerText", cmpEqual, "Vasudevan");
  //Clicks the 'linkLogout' control.
  Aliases.browser.pageWebOrders.formAspnetform.linkLogout.Click();
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}