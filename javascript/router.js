const routes = {
    '/': '/page/home.php',
    '/login': '/page/login.php',
    '/signup': '/page/signup.php',
    '/main': '/page/main.php',
    '/set': '/page/set.php'
};

const handleLocation = async () => {
    // Get the hash from the URL, remove the '#' character. If empty, default to '/'
    let path = window.location.hash.replace('#', '') || '/';
    
    // Fallback to '/' if route doesn't exist
    const route = routes[path] || routes['/'];
    
    // Fetch the HTML snippet for the route
    const html = await fetch(route).then((data) => data.text());
    
    // Inject it into the app container
    document.getElementById("app").innerHTML = html;
};

// Listen for hash changes
window.addEventListener("hashchange", handleLocation);

// Initialize routing on page load
document.addEventListener('DOMContentLoaded', handleLocation);
