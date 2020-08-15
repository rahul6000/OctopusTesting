package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class InsightPage extends BaseClass {

    WebDriver driver;

    @FindBy(xpath = "//span[text()='Search']")  //locating elements on the page
    public WebElement searchIcon;

    @FindBy(xpath = "//input[@id='input-focus']")
    public WebElement searchBar;

    @FindBy(xpath = "//p[contains(.,'People (1)')]")
    public WebElement peopleChkBox;


    public InsightPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);


    }


    //Actions or Methods for the elements
    public void clickOnSearchIcon() {
        searchIcon.click();
    }

    public void inputInSearchBar(String searchText) {
        searchBar.sendKeys(searchText);
    }

    public void clickOnChkBox() {
        peopleChkBox.click();
    }


}
