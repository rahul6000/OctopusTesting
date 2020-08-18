package stepDefinitions;

import TestBase.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

public class CareerPageTest extends BaseClass {
    @Test
    @When("^user click on Careers in header menu$")  // calling all stepdef
    public void userClickOnCareersInHeaderMenu() {
        careerPage.clickOnCareerIcon();

    }

    @Test
    @Then("^user clicks on Search Job link$")
    public void userClicksOnSearchJobLink() {
        careerPage.clickOnSearchJobIcon();
    }

    @Test
    @Then("^user is on Careers page$")
    public void userIsOnCareersPage() {
        String careerPageTitle = getPageTitle();
        System.out.println();
        Assert.assertEquals("Careers Archive | Octopus Group", careerPageTitle);
    }

    @Test
    @Then("^user enters \"([^\"]*)\" in the search$")
    public void userEntersInTheSearch(String Keyword) {
        careerPage.inputInJobSearch(Keyword);

    }

    @And("^user clicks on filter by location drop down$")
    public void userClicksOnFilterByLocationDropDown() {
        careerPage.setFilterByLoc();
        teardown(); //closing browser
    }


}
