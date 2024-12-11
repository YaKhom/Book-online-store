if (document.documentElement.clientWidth <= 600) {
  document.querySelector(".header").innerHTML = `
    
        <a href="#" class="logo">Bookshop</a>
        
        
        <nav class="navigation">
            <ul class="list">
                <li class="item active-item">
                    <a href="#" class="link ">Books</a> 
                </li>
                <li class="item">
                    <a href="#" class="link">Audiobooks</a> 
                </li>
                <li class="item">
                    <a href="#" class="link">Stationery & gifts</a>
                </li>
                <li class="item">
                    <a href="#" class="link">Blog</a> 
                </li>
            </ul>
            <div class="tools">
            <button class="user">
                <img src="../images/icons/user.svg" alt="" class="icon-user icon">
            </button>
            <button class="search">
                <img src="../images/icons/search.svg" alt="" class="icon-search icon">
            </button>
            <button class="shopbag">
                <img src="../images/icons/shopbag.svg" alt="" class="icon-shopbag icon">
                <span class="quantity"></span>
            </button>
            </div>
        </nav>
        <button class="burger"></button>
    `;
}
export {};
