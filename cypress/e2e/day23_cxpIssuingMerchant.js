describe("Issuing Merchant Creating- Test", () => {
  //Login

  beforeEach("Login to connexpay ", () => {
    cy.visit("https://stagecrm.connexpay.com/Merchant/AllMerchant");
    cy.get("#Username").type("abc123");
    cy.get("#Password").type("123abc");
    cy.get(
      "button[class='btn btn-info btn-block text-uppercase waves-effect waves-light login-btn']"
    ).click();
    cy.wait(5000);

    cy.get("#nav-crm").trigger("mouseover", { force: true });

    // Find the DEALS link and click on it

    cy.get("#nav-crm-deals").click({ force: true });
    cy.wait(5000);
  });

  //Prospect Detail

  it("Create merchnat-Prospect Details", () => {
    cy.get("a[title='Create Create Prospect']").click();

    cy.wait(5000);

    cy.get("#DBAName").type("ATIK CXP TEST");
    cy.get("#EncryptedIdCountry").select("United States");
    cy.get("#Address1").type("3615 South Hope Street, Los Angeles, CA, USA");
    cy.get("#Address2").type("6");
    cy.get("#CountryName").type("United States");
    cy.get("#Zip").type("90007");
    cy.get("#City").type("Los Angeles");
    cy.get("#StateDescription").type("CA");
    cy.get("#FirstName").type("Atikur");
    cy.get("#LastName").type("Rahman");
    cy.get("#Phone").type("22224455555");
    cy.get("#Email").type("atikcxp96@gmail.com");

    cy.wait(5000);

    cy.get("#ProjectedVolumeStr").clear().type("1000000");
    cy.wait(3000);
    cy.get("#btnCreateMerchant").click();

    cy.wait(5000);

    //Agents

    cy.get("#ddlOffice_chosen").click({ force: true }); // Click to open the dropdown
    cy.get("ul.chosen-results li").contains("ConnexPay").click(); // Click on the option

    cy.wait(5000);

    cy.get("#ddlAgents_chosen").click(); // Click to open the dropdown
    cy.get("ul.chosen-results li")
      .contains("Test, Test Agent - Test Agent")
      .click(); // Click on the option

    cy.wait(3000);

    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click();

    cy.wait(5000);

    //Services

    cy.get("#IdCurrency").select("US Dollar");

    cy.wait(5000);

    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(49) > form:nth-child(1) > div:nth-child(13) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(36) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > small:nth-child(1)"
    ).click();

    cy.get("#MerchantSetting_IdFundingType").select("Flex");

    cy.wait(5000);

    cy.get("#MerchantSetting_AvailableToIssuePlusStr").type("10000");
    cy.wait(3000);

    cy.get("#MerchantSetting_MinimumCashBalanceStr").click();

    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(49) > form:nth-child(1) > div:nth-child(13) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(36) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)"
    ).click;

    cy.get("input[value='4'][name='Central_4']").click({ force: true });

    cy.get("input[value='4'][name='selectedUSBanks']").click({ force: true });

    cy.get("#Central_4").type("100.00", { force: true });

    cy.wait(5000);

    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click({ force: true });

    cy.wait(5000);

    //DBA Info

    cy.get("#MerchantAlias").type("ATIK CXP TEST", { force: true });
    cy.get(
      "div[class='widget-header'] div[class='col-sm-12'] div[class='row'] span[class='switchery switchery-default'] small"
    ).click({ force: true });

    cy.wait(5000);

    cy.get("#CorporateLegalName").type("ATIK CXP", { force: true });
    cy.wait(3000);

    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click({ force: true });

    cy.wait(5000);

    //Principal

    cy.get("#btnNewAddOwner").click({ force: true });
    cy.wait(3000);

    cy.get("#Owner_Address_EncryptedIdCountry").select("United States", {
      force: true,
    });

    cy.get("#Owner_FirstName").type("ATIK", { force: true });
    cy.get("#Owner_LastName").type("Ariyan", { force: true });

    cy.get("#Owner_SsnExt").type("222223333333", { force: true });
    cy.get("#Owner_PercentageOwnership")
      .clear({ force: true })
      .type("100", { force: true });
    cy.get("#Owner_EncryptedTitle").select("CEO", { force: true });
    cy.wait(3000);
    cy.get("#Owner_Address_Address1").type("309 Middle Street, USA", {
      force: true,
    });

    cy.get("#Owner_Address_CountryName").type("USA", { force: true });
    cy.get("#Owner_Address_Zip").type("263333", { force: true });
    cy.get("#Owner_Address_City").type("NY", { force: true });
    cy.get("#Owner_Address_StateDescription").type("VCSD", { force: true });
    cy.get("#Owner_Email").type("abababab@gmail.com", { force: true });
    cy.get("#Owner_HomePhone").type("523523525235", { force: true });
    cy.get("#Owner_Mobile").type("4547564575", { force: true });

    cy.wait(3000);

    cy.get("div[id='divControlProng'] small").click({ force: true });
    cy.wait(2000);
    cy.get("div[id='divAuthorizedSigner'] small").click({ force: true });
    cy.wait(2000);

    cy.get("#btnAddOwner").click({ force: true });

    cy.wait(2000);

    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click({ force: true });
    cy.wait(6000);

    //Merchant Information

    cy.get("#FederalTaxIdExt").type("53-4535353", { force: true });
    cy.get("#NumberOfLocations").type("11", { force: true });
    cy.get("#YearsInBusiness").type("11", { force: true });
    cy.get("#MonthsInBusiness").type("11", { force: true });

    cy.wait(5000);

    cy.get("#EncryptedIdOwnership").select("Corporation Private", {
      force: true,
    });

    cy.wait(2000);

    // Click on the dropdown to open it
    cy.get("div#EncryptedIdCategory_chosen").click({ force: true });

    // Click on the option "Financial Services"
    cy.get("ul.chosen-results li")
      .contains("Financial Services")
      .click({ force: true });

    cy.wait(3000);

    cy.get("#EncryptedIdMccSic_chosen").click({ force: true });

    cy.get("ul.chosen-results li")
      .contains("6010 - Financial Institutions – Manual Cash Disbursements")
      .click({ force: true });
    cy.wait(5000);

    // Clear the existing value > input value
    cy.get("#AverageMonthlySalesVolumeStr").clear({ force: true });
    cy.get("#AverageMonthlySalesVolumeStr").type("1000000", { force: true });

    cy.get("#AverageTicketSizeStr").clear({ force: true });
    cy.get("#AverageTicketSizeStr").type("1000", { force: true });

    cy.get("#HighestTicketSizeStr").clear({ force: true });
    cy.get("#HighestTicketSizeStr").type("3000", { force: true });

    cy.wait(3000);

    cy.get("#EncryptedIdGoodService").select("E-Commerce", {
      force: true,
    });
    cy.get("#TypeGoodService").type("services", {
      force: true,
    });

    cy.get("#WebSiteAddress").type("www.services.com", { force: true });

    cy.wait(5000);

    // Banking Information

    cy.get("#MerchantBankInformation_Address_EncryptedIdCountry").select(
      "United States",
      { force: true }
    );
    cy.get("#MerchantBankInformation_CreditBankName").type("US BANK", {
      force: true,
    });
    cy.get("#MerchantBankInformation_CreditRoutingNumber").type("042000314", {
      force: true,
    });
    cy.get("#MerchantBankInformation_EncryptedCreditAccountType").select(
      "Checking",
      { force: true }
    );
    cy.get("#MerchantBankInformation_CreditAccountNumberExt").type(
      "4111111111111111",
      { force: true }
    );
    cy.get("#MerchantBankInformation_RepeatCreditAccountNumberExt").type(
      "4111111111111111",
      { force: true }
    );
    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click({ force: true });

    cy.wait(3000);

    //TSYS Agent

    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click({ force: true });

    cy.get("#IdTSYSAgent").type("111111", { force: true });
    cy.get("#IdTSYSChain").type("222222", { force: true });

    cy.get(
      ".btn.btn-primary.button-next.btn-rounded.btn-labeled.fa.fa-angle-right"
    ).click({ force: true });

    cy.wait(3000);

    //Submit for underwriting

    cy.get('a[data-save="SubmitForUW"]').click({ force: true });
    //cy.get('a.btn.btn-success.button-submit.btn-rounded.btn-labeled.fa.fa-angle-right').click({ force: true });

    cy.wait(5000);

    //Underwriting Claim > Full-Approval > confirm

    cy.get("a.btn.btn-success.btn-rounded.btn-labeled.fa.fa-gavel").click({
      force: true,
    });

    cy.wait(3000);
    //cy.get("tbody tr:nth-child(1) td:nth-child(5) a:nth-child(1)").click({force: true});
    cy.get("#btn1DefaultModal1").click({ force: true });
    cy.wait(5000);
    cy.get("#MerchantSetting_AssociationNumber").type("325252", {
      force: true,
    });
    cy.get("img[title='Lock Approval Terms']").click({ force: true });
    cy.get("#btn1DefaultModal1").click({ force: true });
    cy.wait(5000);
    cy.get("#btnFullApproval").click({ force: true });
    cy.get("#btn1DefaultModal3").click({ force: true });
    cy.wait(2000);
    cy.get("#btnConfirmProcessorSetting").click({ force: true });
    cy.wait(5000);

    //Setup/Complaince > claim

    cy.get("tbody tr:nth-child(2) td:nth-child(5) a:nth-child(1)").click({
      force: true,
    });
    cy.wait(3000);
    cy.get("#btn1DefaultModal1").click({ force: true });

    //***Pending Setup***

    // Reporting Name

    cy.get("#ReportingName").type("Atik", { force: true });

    //API Key & Mid

    cy.get("#FraudSetting_ApiKey").type(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI0NjAwMDAiLCJhdWQiOiJLb3VudC4xIiwiaWF0IjoxNTI3MjU4ODI0LCJzY3AiOnsia2EiOm51bGwsImtjIjpudWxsLCJhcGkiOnRydWUsInJpcyI6dHJ1ZX19.9LigMO9fmXZ8HLnDtcQe4g68vRWRSYGUOZ3nP43plrw",
      { force: true }
    );
    cy.wait(3000);

    cy.get("#FraudSetting_Mid").type("460000", { force: true });

    // delayed activation toggle on
    cy.get(
      "body.breakpoint-1200:nth-child(2) div.container:nth-child(1) div.ng-scope:nth-child(8) div.col-sm-12:nth-child(3) form.form-vertical.ng-pristine.ng-valid div.form-body:nth-child(31) div.tab-content:nth-child(1) div.widget.box.prospect-detail:nth-child(5) div.widget-content:nth-child(2) div.row.margin-top-20:nth-child(12) div.col-sm-12 h5:nth-child(1) span.switchery.switchery-default > small:nth-child(1)"
    ).click({ force: true });

    // Bank Issuing Percent
    cy.get("#Central_4").type("100.00", { force: true });
    cy.wait(2000);

    //Show Card Brand and Card Class Options

    cy.get(
      "body.breakpoint-1200:nth-child(2) div.container:nth-child(1) div.ng-scope:nth-child(8) div.col-sm-12:nth-child(3) form.form-vertical.ng-pristine.ng-valid div.form-body:nth-child(31) div.tab-content:nth-child(1) div.widget.box.prospect-detail:nth-child(5) div.widget-content:nth-child(2) div.row.margin-top-20:nth-child(16) div.col-sm-12 h5:nth-child(1) span.switchery.switchery-default > small:nth-child(1)"
    ).click({ force: true });

    //Allow Supplier Code Card Class Selection

    cy.get(
      "body.breakpoint-1200:nth-child(2) div.container:nth-child(1) div.ng-scope:nth-child(8) div.col-sm-12:nth-child(3) form.form-vertical.ng-pristine.ng-valid div.form-body:nth-child(31) div.tab-content:nth-child(1) div.widget.box.prospect-detail:nth-child(5) div.widget-content:nth-child(2) div.row.margin-top-20:nth-child(17) div.col-sm-12 h5:nth-child(1) span.switchery.switchery-default > small:nth-child(1)"
    ).click({ force: true });

    //Allowed Purchase Types

    cy.get("input[name='MerchantPurchaseTypes[0].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[1].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[2].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[3].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[4].IsSelected']").click({
      force: true,
    });

    cy.get("input[name='MerchantPurchaseTypes[6].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[7].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[8].IsSelected']").click({
      force: true,
    });
    cy.get("input[name='MerchantPurchaseTypes[9].IsSelected']").click({
      force: true,
    });

    //ACH Custom Settings

    cy.get("#ProcessingSetting_RiskScoreThreshold").type("270", {
      force: true,
    });
    cy.get("#ProcessingSetting_DaysToDelayBasedOnRiskScore").type("5", {
      force: true,
    });
    cy.get("ProcessingSetting_DaysToDelayExceedRiskScore").type("2", {
      force: true,
    });
    cy.get("#MaxACHSaleTransactionAmount").type("1000", {
      force: true,
    });
    cy.get("#MaxDailyACHSaleAmount").type("10000", { force: true });

    // Set as complete

    cy.get("#btnComplete").click({ force: true });
    cy.wait(5000);
  });
});
