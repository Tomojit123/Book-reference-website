<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magazine - Your Ultimate Source for Insightful Articles</title>
<link rel="canonical" href="https://tomojit123.github.io/Book-reference-website/Components/cart.html">
<meta name="description" content="Welcome to Magazine, your go-to for insightful articles on various topics. Join us for learning and empowerment!">

<!-- Keywords related to your magazine content -->
<meta name="keywords" content="magazine, articles, insights, books, literature, reading, reviews, recommendations, fiction, non-fiction, genres, authors, publishing, bookworm, bibliophile">

<!-- Open Graph Tags -->
<meta property="og:type" content="website">
<meta property="og:title" content="Magazine - Your Ultimate Source for Insightful Articles">
<meta property="og:description" content="Welcome to Magazine, your go-to for insightful articles on various topics. Join us for learning and empowerment!">
<meta property="og:url" content="https://tomojit123.github.io/Book-reference-website/Components/cart.html">
<meta property="og:image" content="https://i.pinimg.com/736x/82/d3/29/82d329c6b8c4141e3172456815ab6621.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Magazine">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="https://i.pinimg.com/736x/82/d3/29/82d329c6b8c4141e3172456815ab6621.jpg">

<!-- Favicon -->
<link rel="icon" type="image/jpg" sizes="32x32" href="https://i.pinimg.com/736x/82/d3/29/82d329c6b8c4141e3172456815ab6621.jpg">
<link rel="icon" type="image/jpg" sizes="16x16" href="https://i.pinimg.com/736x/82/d3/29/82d329c6b8c4141e3172456815ab6621.jpg">
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>



<!-- Theme Color -->
<meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="../Style/styles.css">
</head>
<style>
    body{
        background-color: rgba(64, 148, 223, 0.103);
        margin: 3% 6% 10px 6%;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    #my-cart {
        display: flex;
        flex-direction: row;
        gap: 2em;
        flex-wrap: wrap;
        overflow-x: auto;
        margin-left: 5%;
    }
    .card {
        flex: 0 0 calc(15%);
        margin-bottom: 1em;
    }
    @media screen and (max-width:768px) {
        .nav {
            display: none;
        }

        .app-logo {
            display: none;
        }
    }

    @media screen and (min-width:768px) {
        .mobile-nav {
            display: none;
        }

        .logo {
            display: none;
        }
    }

    .nav-menu li {
        margin-bottom: 3px;
    }
</style>
<body>
    <div class="nav">
        <div class="app-logo">
            <img src="https://i.pinimg.com/736x/82/d3/29/82d329c6b8c4141e3172456815ab6621.jpg" alt="logo/img">
            <h4>Book App</h4>
        </div>
        <div class="nav-item">
            <ul>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/index.html">
                    <li>Home</li>
                </a>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/about.html">
                    <li>About</li>
                </a>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/terms.html">
                    <li>Terms</li>
                </a>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/contactUs.html">
                    <li>Contact Us</li>
                </a>
            </ul>
        </div>
        <div class="user">
            <div class="cart">
                <a style="text-decoration: none;"
                    href="https://tomojit123.github.io/Book-reference-website/Components/cart.html"><i
                        class='bx bx-cart'
                        style="display: flex; align-items:center; justify-content:center; font-size:30px;color:black"></i></a>
            </div>
            <div class="user-box" id="user-box">
                <div onclick="showBox()" class="user-acc">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.cCYOz6thNtGtDnD0BYfkLAHaEK&pid=Api&P=0&h=180"
                        alt="userProfile">
                </div>
                <div class="box" id="box" style="padding:2px; border-radius:3px;display:none;">
                    <ul style="list-style: none;cursor:pointer; padding-left:5px;">
                        <a id="sign-in-a" href="https://tomojit123.github.io/Book-reference-website/Pages/login.html" style="text-decoration: none;">
                            <li>Login</li>
                        </a>
                        <a id="sign-up-a" href="https://tomojit123.github.io/Book-reference-website/Pages/register.html"
                            style="text-decoration: none;">
                            <li>Sign Up</li>
                        </a>
                        <a id="log-out-a" onclick="show()" style="text-decoration: none;">
                            <li>Log Out</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile screen navigation -->
    <div>
        <div style="display: flex; align-items: center; justify-content:space-between">
            <div class="logo">
                <img src="https://i.pinimg.com/736x/82/d3/29/82d329c6b8c4141e3172456815ab6621.jpg" alt="logo/img">
                <h4>Book App</h4>
            </div>
            <div class="mobile-nav" style="justify-content:end;">
                <div class="cart" style="display: flex;align-items:center; gap:1em;">
                    <a style="text-decoration: none;"
                        href="https://tomojit123.github.io/Book-reference-website/Components/cart.html"><i
                            class='bx bx-cart'
                            style="display: flex; align-items:center; justify-content:center; font-size:30px;color:black"></i></a>
                    <button id="menu" style="border:none; cursor:pointer;" onclick="myNavigation()"><i
                            class='bx bx-menu' style="font-size:32px;"></i></button>
                    <button id="cross" style="border:none; cursor:pointer;display:none;" onclick="myCross()"><i
                            class='bx bx-x' style="font-size:32px"></i></button>
                </div>
            </div>
        </div>
        <div id="nav-menu" style="width: 100%; background-color:#aeb0eff4; padding-left:3%;display:none;">
            <ul>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/index.html">
                    <li>Home</li>
                </a>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/about.html">
                    <li>About</li>
                </a>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/terms.html">
                    <li>Terms</li>
                </a>
                <a href="https://tomojit123.github.io/Book-reference-website/Pages/contactUs.html">
                    <li>Contact Us</li>
                </a>
                <a id="sign-in-mob-a" href="https://tomojit123.github.io/Book-reference-website/Pages/login.html"
                    style="text-decoration: none;">
                    <li>Login</li>
                </a>
                <a id="sign-up-mob-a" href="https://tomojit123.github.io/Book-reference-website/Pages/register.html"
                    style="text-decoration: none;">
                    <li>Sign Up</li>
                </a>
                <a id="log-out-mob-a" onclick="show()" style="text-decoration: none;cursor:pointer;">
                    <li>Log Out</li>
                </a>
            </ul>
        </div>
    </div>
    <div id="my-cart"></div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../cart.js"></script>
    <script src="https://tomojit123.github.io/Book-reference-website/logout.js"></script>
</body>
</html>
