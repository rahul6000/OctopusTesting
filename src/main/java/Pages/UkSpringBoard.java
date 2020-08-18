package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class UkSpringBoard extends BaseClass {
    WebDriver driver;

    @FindBy(xpath = "//li[@id=\"menu-item-3902\"]/a")  //locating elements on the page
    public WebElement springBod;

    @FindBy(xpath = "//input[@id='email-f7384f89-2af8-4c19-8474-b777aaa77667']")
    public WebElement wantToSupportEmail;

    @FindBy(xpath = "//input[@name='firstname']")
    public WebElement firstName;

    @FindBy(xpath = "//input[@name='lastname']")
    public WebElement lastName;

    @FindBy(xpath = "//span[text()=\"A company who’d like to mentor\"]")
    public WebElement chkBox1;

    @FindBy(xpath = "//input[@type='submit']")
    public WebElement submitBtn;

    public UkSpringBoard(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);


    }
    //Actions or Methods for the elements

    public void clickOnUkSpringBoard() {

        springBod.click();
    }

    public void inputEmailId(String email) {
        wantToSupportEmail.sendKeys(email);

    }

    public void inputFirstName(String fname) {
        firstName.sendKeys(fname);
    }

    public void inputlasName(String lname) {
        lastName.sendKeys(lname);
    }

    public void setChkBox1() {
        chkBox1.click();

    }

    public void setSubmitBtn() {
        submitBtn.click();
    }

}
