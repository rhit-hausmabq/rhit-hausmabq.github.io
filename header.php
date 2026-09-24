<!-- Found the general idea to use php to limit code replication from a variety of sources, then had to guess and check to make sure it all worked correctly -->
function handleHeader(){
    <!--Found this way of adding a link to a button from https://www.geeksforgeeks.org/html/how-to-create-an-html-button-that-acts-like-a-link/-->
    echo "<h1>Brody Hausman</h1><div class="buttons"><button class="nav-button" onclick="window.location.href = 'https://rhit-hausmabq.github.io/resume.html'">Resume</button><button class="nav-button" onclick="window.location.href = 'https://rhit-hausmabq.github.io/'">Main</button><button class="nav-button" onclick="window.location.href = 'https://rhit-hausmabq.github.io/portfolio.html'">Portfolio</button></div>";
};

handleHeader();