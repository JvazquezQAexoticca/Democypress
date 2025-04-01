import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.junit.Assert;

public class ZaraAutomation {
    public static void main(String[] args) {
        // Configurar el WebDriver para Chrome
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");

        WebDriver driver = new ChromeDriver(options);

        // This should be in a constants class
        final String acceptCookies = "onetrust-accept-btn-handler";
        final String menSection = "//a[@href='/es/es/hombre-l711.html']";
        final String searchBox = "searchTerm";
        final String firstProduct = ".product-grid-product .product-link";
        final String addToCart = ".add-to-cart-button";
        final String cartButton = "cart-button";
        final String cartTotalAmount = "cart-total-price";
        final String toggleMenu = "[data-qa-id='layout-header-toggle-menu']";

        try {
            // Navegar a la página de Zara
            driver.get("https://www.zara.com/es/");

            // Aceptar cookies
            WebElement acceptCookiesButton = driver.findElement(By.id(acceptCookies));
            acceptCookiesButton.click();

            // Esperar un momento para asegurarse de que las cookies se acepten
            Thread.sleep(2000);

            // Aserción para verificar que el botón de aceptar cookies ya no está visible
            Assert.assertFalse("El botón de aceptar cookies aún está visible", isElementVisible(driver, By.id(acceptCookies)));

            // Navegar a la sección de hombres en el menú
            driver.findElement(By.xpath(menSection)).click();

            // Esperar un momento para asegurarse de que la página cargue
            Thread.sleep(2000);

            // Buscar un producto específico (por ejemplo, una camiseta)
            WebElement searchBoxElement = driver.findElement(By.name(searchBox));
            searchBoxElement.sendKeys("camiseta");
            searchBoxElement.submit();

            // Esperar a que los resultados de búsqueda carguen
            Thread.sleep(2000);

            // Seleccionar el primer producto de la lista
            WebElement firstProductElement = driver.findElement(By.cssSelector(firstProduct));
            firstProductElement.click();

            // Esperar a que la página del producto cargue
            Thread.sleep(2000);

            // Añadir el producto al carrito
            WebElement addToCartButton = driver.findElement(By.cssSelector(addToCart));
            addToCartButton.click();

            // Esperar un momento para asegurarse de que el producto se añada al carrito
            Thread.sleep(2000);

            // Ir al carrito
            WebElement cartButtonElement = driver.findElement(By.cssSelector(cartButton));
            cartButtonElement.click();

            // Esperar a que la página del carrito cargue
            Thread.sleep(2000);

            // Obtener el texto del total del carrito
            WebElement cartTotal = driver.findElement(By.cssSelector(cartTotalAmount));
            String totalText = cartTotal.getText();
            System.out.println("Total del carrito: " + totalText);

            // Aquí puedes agregar más acciones o aserciones según sea necesario

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

    private static boolean isElementVisible(WebDriver driver, By by) {
        try {
            return driver.findElement(by).isDisplayed();
        } catch (org.openqa.selenium.NoSuchElementException e) {
            return false;
        }
    }
}