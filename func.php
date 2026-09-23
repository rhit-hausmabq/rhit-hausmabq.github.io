function handleHeader(){
    echo "<h1>Brody Hausman</h1>
        <div class="buttons">
        <!--Found this way of adding a link to a button from https://www.geeksforgeeks.org/html/how-to-create-an-html-button-that-acts-like-a-link/-->
        <button class="nav-button" onclick="window.location.href = 'https://rhit-hausmabq.github.io/resume.html'">Resume</button>
        <button class="nav-button" onclick="window.location.href = 'https://rhit-hausmabq.github.io/'">Main</button>
        <button class="nav-button" onclick="window.location.href = 'https://rhit-hausmabq.github.io/portfolio.html'">Portfolio</button>
        </div>";
};

function handleFooter(){
    echo "Find me on <a class="link" href="https://www.linkedin.com/in/brody-hausman-5388993b6/">LinkedIn</a>";
};