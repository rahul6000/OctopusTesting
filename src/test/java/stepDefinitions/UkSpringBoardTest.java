package stepDefinitions;

import TestBase.BaseClass;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class UkSpringBoardTest extends BaseClass {
    @Test
    @When("^user click on UK Springboard link in footer$") // calling all stepDef
    public void userClickOnUkSpringboardLinkInFooter() {
        ukSpringBoard.clickOnUkSpringBoard();

    }

    @Test
    @Then("^user verifies the page title$")
    public void userVerifiesThePageTitle() {
        String ukbPageTitle = getPageTitle();
        System.out.println();
        Assert.assertEquals("UK Springboard - a nation of entrepreneurs | Octopus Group", ukbPageTitle);
    }

    @Test
    @Then("^user enter \"([^\"]*)\", \"([^\"]*)\" & \"([^\"]*)\" on UK Springboard page$")
    public void userEnterOnUKSpringboardPage(String email, String firstname, String lastname) {
        WebElement iframe= driver.findElement(By.className("hs-form-iframe"));
        driver.switchTo().frame(iframe);
        ukSpringBoard.inputEmailId(email);
        ukSpringBoard.inputFirstName(firstname);
        ukSpringBoard.inputlasName(lastname);
    }

    @Test
    @Then("^user clicks on any checkbox\\.$")
    public void userClicksOnAnyCheckbox() {
        ukSpringBoard.setChkBox1();

    }

    @Test
    @Then("^user click on submit button\\.$")
    public void userClickOnSubmitButton() {
        ukSpringBoard.setSubmitBtn();
        teardown(); // closing Browser
    }
}