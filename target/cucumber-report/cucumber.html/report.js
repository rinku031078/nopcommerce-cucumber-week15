$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerPage.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPageTest",
  "description": "As a User I want to order computer",
  "id": "computerpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20025614500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I Verify \"Computers\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 877135000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 852539400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 10
    }
  ],
  "location": "ComputerPageTest.iVerifyText(String)"
});
formatter.result({
  "duration": 129726000,
  "status": "passed"
});
formatter.after({
  "duration": 887036800,
  "status": "passed"
});
formatter.before({
  "duration": 14707579500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computerpagetest;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify \"Desktops\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 131300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1312113600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1176339700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 10
    }
  ],
  "location": "DesktopPageTest.iVerifyPage(String)"
});
formatter.result({
  "duration": 45646800,
  "status": "passed"
});
formatter.after({
  "duration": 796652000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5925847300,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 763200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1287804800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1118917500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 2043367800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 469058100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 93549700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 76711800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 82884600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 75546200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 61987300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 876031000,
  "status": "passed"
});
formatter.after({
  "duration": 789197200,
  "status": "passed"
});
formatter.before({
  "duration": 5132930000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 124900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1293610000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1240423100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1735568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 93480100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 89761300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 91446300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 94920000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 90958900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 62465900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 303941400,
  "status": "passed"
});
formatter.after({
  "duration": 778640500,
  "status": "passed"
});
formatter.before({
  "duration": 5245514100,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify That User Should Build Your Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computerpagetest;verify-that-user-should-build-your-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoke"
    },
    {
      "line": 17,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I Click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify message \"The product has been added to your shopping cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1114042000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 1053641100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 25
    }
  ],
  "location": "DesktopPageTest.iClickOnProductName(String)"
});
formatter.result({
  "duration": 1636239500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 18
    }
  ],
  "location": "DesktopPageTest.selectProcessor(String)"
});
formatter.result({
  "duration": 69218100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectRAM(String)"
});
formatter.result({
  "duration": 85727900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 12
    }
  ],
  "location": "DesktopPageTest.selectHDD(String)"
});
formatter.result({
  "duration": 77649400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 11
    }
  ],
  "location": "DesktopPageTest.selectOS(String)"
});
formatter.result({
  "duration": 74426600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 17
    }
  ],
  "location": "DesktopPageTest.selectSoftware(String)"
});
formatter.result({
  "duration": 102221700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageTest.clickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 61916100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 16
    }
  ],
  "location": "DesktopPageTest.verifyMessage(String)"
});
formatter.result({
  "duration": 300001300,
  "status": "passed"
});
formatter.after({
  "duration": 777235300,
  "status": "passed"
});
formatter.uri("loginPage.feature");
formatter.feature({
  "line": 1,
  "name": "LoginPageTest",
  "description": "As a user I want to login on website",
  "id": "loginpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5045285400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate To LoginPage SuccessFully.",
  "description": "",
  "id": "loginpagetest;user-should-navigate-to-loginpage-successfully.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I verify that \"Welcome, Please Sign In!\" message display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 68600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1275048400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iVerifyThatMessageDisplay(String)"
});
formatter.result({
  "duration": 33946400,
  "status": "passed"
});
formatter.after({
  "duration": 746245000,
  "status": "passed"
});
formatter.before({
  "duration": 4560724300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify The Error Message With  InValidCredentials.",
  "description": "",
  "id": "loginpagetest;verify-the-error-message-with--invalidcredentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter EmailId \"Testmail@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Password \"password1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify that Error message displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 54300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1135669700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testmail@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginPageTest.iEnterEmailId(String)"
});
formatter.result({
  "duration": 332951500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1234",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 102200800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 454742700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iVerifyThatErrorMessageDisplayed()"
});
formatter.result({
  "duration": 3036926700,
  "status": "passed"
});
formatter.after({
  "duration": 794986900,
  "status": "passed"
});
formatter.before({
  "duration": 4350485000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User Should LogIn SuccessFully With ValidCredentials.",
  "description": "",
  "id": "loginpagetest;verify-that-user-should-login-successfully-with-validcredentials.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Sanity"
    },
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I enter valid EmailId \"anand12@google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter valid Password \"abcd12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Verify that LogOut link is display.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 53300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1139047900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand12@google.com",
      "offset": 23
    }
  ],
  "location": "LoginPageTest.iEnterValidEmailId(String)"
});
formatter.result({
  "duration": 97007500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd12345",
      "offset": 24
    }
  ],
  "location": "LoginPageTest.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 95979200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1447458900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iVerifyThatLogOutLinkIsDisplay()"
});
formatter.result({
  "duration": 20146655000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5f5a0f471d2ba6c624860319d37bc7ff, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:63026}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63026/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5f5a0f471d2ba6c624860319d37bc7ff\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.nopcommerce.demo.pages.LoginPage.verifyLogoutLinkIsDisplayedAfterLogin(LoginPage.java:82)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginPageTest.iVerifyThatLogOutLinkIsDisplay(LoginPageTest.java:58)\r\n\tat ???.Then I Verify that LogOut link is display.(loginPage.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1189836000,
  "status": "passed"
});
formatter.before({
  "duration": 5059723000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify That User Should LogOut SuccessFully()",
  "description": "",
  "id": "loginpagetest;verify-that-user-should-logout-successfully()",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Smoke"
    },
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I Click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I enter valid EmailId \"anand12@google.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter valid Password \"abcd12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on LogOut Link",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify that LogIn Link Display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1143727900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand12@google.com",
      "offset": 23
    }
  ],
  "location": "LoginPageTest.iEnterValidEmailId(String)"
});
formatter.result({
  "duration": 94632000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd12345",
      "offset": 24
    }
  ],
  "location": "LoginPageTest.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 93586700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1048199800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 20050001800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027MAHISHA\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9695ecbfe4fd96408e3255d23c62085f, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\KAUSHA~1.MAH\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:63053}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:63053/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9695ecbfe4fd96408e3255d23c62085f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.nopcommerce.demo.pages.LoginPage.clickOnLogOutLink(LoginPage.java:78)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginPageTest.iClickOnLogOutLink(LoginPageTest.java:75)\r\n\tat ???.And I click on LogOut Link(loginPage.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageTest.verifyThatLogInLinkDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 905251200,
  "status": "passed"
});
formatter.uri("registerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "As a user I want to register an account and verify process.",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5176713600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register-page-test;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register Link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Register\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1599618400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 8
    }
  ],
  "location": "RegisterPageTest.verifyText(String)"
});
formatter.result({
  "duration": 42481500,
  "status": "passed"
});
formatter.after({
  "duration": 836868500,
  "status": "passed"
});
formatter.before({
  "duration": 5009930800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify That First Name Last Name Email Password And ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page-test;verify-that-first-name-last-name-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Link",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on REGISTER button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the First Name error message \"First name is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify the Last Name error message \"Last name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify the eMail error message \"Email is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify the Password error message \"Password is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Confirm Password error message \"Password is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1276698500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnREGISTERButton()"
});
formatter.result({
  "duration": 99510800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 37
    }
  ],
  "location": "RegisterPageTest.verifyTheFirstNameErrorMessage(String)"
});
formatter.result({
  "duration": 38587100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 36
    }
  ],
  "location": "RegisterPageTest.verifyTheLastNameErrorMessage(String)"
});
formatter.result({
  "duration": 35371000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.verifyTheEMailErrorMessage(String)"
});
formatter.result({
  "duration": 31096500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 35
    }
  ],
  "location": "RegisterPageTest.verifyThePasswordErrorMessage(String)"
});
formatter.result({
  "duration": 33408600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 43
    }
  ],
  "location": "RegisterPageTest.verifyTheConfirmPasswordErrorMessage(String)"
});
formatter.result({
  "duration": 33988400,
  "status": "passed"
});
formatter.after({
  "duration": 728998900,
  "status": "passed"
});
formatter.before({
  "duration": 5198605600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Smoke"
    },
    {
      "line": 21,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on Register Link",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Enter firstname\"Anand\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Enter lastname \"Tripathi\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Select birthday \"12\"\"March\"\"1978\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter email",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter password \"Anand1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter Confirm Password \"Anand1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on REGISTER button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I Verify message \"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 59400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1386636000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iSelectGenderFemale()"
});
formatter.result({
  "duration": 76205800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anand",
      "offset": 16
    }
  ],
  "location": "RegisterPageTest.enterFirstname(String)"
});
formatter.result({
  "duration": 109727500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tripathi",
      "offset": 16
    }
  ],
  "location": "RegisterPageTest.enterLastname(String)"
});
formatter.result({
  "duration": 90644900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 17
    },
    {
      "val": "March",
      "offset": 21
    },
    {
      "val": "1978",
      "offset": 28
    }
  ],
  "location": "RegisterPageTest.selectBirthday(String,String,String)"
});
formatter.result({
  "duration": 235872400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.enterEmail()"
});
formatter.result({
  "duration": 150052100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anand1234",
      "offset": 16
    }
  ],
  "location": "RegisterPageTest.enterPassword(String)"
});
formatter.result({
  "duration": 94395500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anand1234",
      "offset": 24
    }
  ],
  "location": "RegisterPageTest.enterConfirmPassword(String)"
});
formatter.result({
  "duration": 93134000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnREGISTERButton()"
});
formatter.result({
  "duration": 1318322300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iVerifyMessage(String)"
});
formatter.result({
  "duration": 51014900,
  "status": "passed"
});
formatter.after({
  "duration": 761405900,
  "status": "passed"
});
});