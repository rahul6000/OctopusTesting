package stepDefinitions;

import Pages.SimonBlog;
import TestBase.BaseClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

public class SimonBlogTest extends BaseClass {

    @Test
    @When("^user click on Simon says link in footer$")   // calling all stepDef
    public void userClickOnSimonSaysLinkInFooter() {
        simonBlog.clickOnSimonSays();
    }

    @Test
    @Then("^user verifies page title$")
    public void userVerifiesPageTitle() {
        String simonBlogTitle = getPageTitle();
        System.out.println();
        Assert.assertEquals("Simon's Blogs Archive | Octopus Group", simonBlogTitle);
    }

    @Test
    @Then("^user enter \"([^\"]*)\" for newsletter$")
    public void userEnterForNewsletter(String emailid) {
        simonBlog.enterEmailId(emailid);

    }

    @Test
    @Then("^user clicks on all checkboxs\\.$")
    public void userClicksOnAllCheckboxs() {
        simonBlog.clickOnAllChkBox();

    }

    @Test
    @Then("^user clicks on submit button\\.$")
    public void userClicksOnSubmitButton() {
        simonBlog.clickOnSubmitBtn();
        teardown(); // Closing Browser here


    }

}
