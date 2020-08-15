package Pages;

import TestBase.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class CareerPage extends BaseClass {

WebDriver driver;

    @FindBy(xpath ="//li[@id='menu-item-128']")  //locating elements on the page
    public WebElement careerIcon;

    @FindBy(xpath ="//a[@href='https://octopusgroup.com/careers/listings/']")
    public WebElement searchJobIcon;

    @FindBy(xpath ="//input[contains(@placeholder,'Search')]")
    public WebElement searchBar;

    @FindBy(xpath ="//select[@id='location-filter']")
    public WebElement filterByLoc;


  public CareerPage(WebDriver driver)  //Creating constructor of the page
    {
        this.driver = driver;
        PageFactory.initElements(driver,this);

    }

public void clickOnCareerIcon(){
      careerIcon.click();

}
public void clickOnSearchJobIcon(){

      searchJobIcon.click();
}

public void inputInJobSearch(String searchText){
      searchBar.sendKeys(searchText);

}
public void setFilterByLoc(){
    Select s = new Select(filterByLoc);
    s.selectByValue("london-uk");

  }



}
