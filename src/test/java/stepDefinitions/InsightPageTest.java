package stepDefinitions;

import TestBase.BaseClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class InsightPageTest extends BaseClass {

    @Test
    @Given("^user is on insights page$") // calling all stepDef
    public void userIsOnInsightsPage() {
        initialization();
    }

    @Test
    @When("^title insights page title is Insights | Octopus Group$")
    public void titleInsightsPageTitleIsInsightsOctopusGroup() {
        String insightPageTitle = getPageTitle();
        System.out.println();
        Assert.assertEquals("Insights | Octopus Group", insightPageTitle);
    }

    @Test
    @Then("^user click on search icon$")
    public void userClickOnSearchIcon() {
        insightPage.clickOnSearchIcon();
    }

    @Test
    @Then("^user inputs \"([^\"]*)\" in search bar$")
    public void userInputsInSearchBar(String keyword) {
        insightPage.inputInSearchBar(keyword);

    }

    @Test
    @Then("^user clicks on people filter$")
    public void userClicksOnPeopleFilter() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(insightPage.peopleChkBox));
        insightPage.clickOnChkBox();
        teardown();  // closing Browser
    }


}
