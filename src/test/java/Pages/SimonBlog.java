package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SimonBlog extends BaseClass {

    WebDriver driver;

    @FindBy(xpath = "//a[text()='Simon says']")  //locating elements on the page
    public WebElement simonSays;

    @FindBy(xpath = "//input[@name='email']")
    public WebElement newLetterEmail;

    @FindBy(xpath = "//span[.='Sign me up to the newsletter*']")
    public WebElement firstChkBox;

    @FindBy(xpath = "//span[.='Also, send me news and updates from across the Octopus Group']")
    public WebElement secondChkBox;

    @FindBy(xpath = "//input[@class='hs-button primary large']")
    public WebElement submitBtn;


    public SimonBlog(WebDriver driver)  //Creating constructor of the page
    {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickOnSimonSays() {

        simonSays.click();
    }

    public void enterEmailId(String email) {
        newLetterEmail.sendKeys(email);

    }

    public void clickOnAllChkBox() {
        firstChkBox.click();
        secondChkBox.click();
    }

    public void clickOnSubmitBtn() {
        submitBtn.click();

    }

}
