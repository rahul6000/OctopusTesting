package TestBase;

import Pages.CareerPage;
import Pages.InsightPage;
import Pages.SimonBlog;
import Pages.UkSpringBoard;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {

    public static WebDriver driver;
    public static InsightPage insightPage;
    public static CareerPage careerPage;
    public static SimonBlog simonBlog;
    public static UkSpringBoard ukSpringBoard;

@BeforeAll
    public static void initialization() {
        By cookies_accept = By.id("ccc-notify-accept");
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        //insightPage = new InsightPage(driver);
        driver.get("https://octopusgroup.com/insights");
        driver.manage().window().maximize();
        insightPage = new InsightPage(driver);
        careerPage = new CareerPage(driver);
        simonBlog = new SimonBlog(driver);
        ukSpringBoard = new UkSpringBoard(driver);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(cookies_accept)).click();
        wait.until(ExpectedConditions.invisibilityOfElementLocated(cookies_accept));

    }
    public String getPageTitle()
    {
        return driver.getTitle();
    }
@AfterAll
    public static void teardown() {
        driver.quit();
    }






}
