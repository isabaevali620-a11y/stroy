// ==================== БАЗА ТОВАРОВ (54 товара) ====================
const products = [
    // Стройматериалы (9)
    { id:1, name:"Цемент М500 50кг", category:"Стройматериалы", price:850, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:2, name:"Кирпич красный полнотелый", category:"Стройматериалы", price:12, image:"https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=300&h=200&fit=crop", rating:4.2, reviews:[] },
    { id:3, name:"Песок строительный 50кг", category:"Стройматериалы", price:450, image:"https://images.unsplash.com/photo-1589979484251-80b6f3ef49a1?w=300&h=200&fit=crop", rating:4.0, reviews:[] },
    { id:4, name:"Щебень фр.20-40 50кг", category:"Стройматериалы", price:600, image:"https://images.unsplash.com/photo-1542407334-7c5b2176d1ec?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    { id:5, name:"Блок газосиликатный 600x300x200", category:"Стройматериалы", price:180, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    { id:6, name:"Краска акриловая 10л", category:"Стройматериалы", price:1250, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    { id:7, name:"Ламинат 32 класс", category:"Стройматериалы", price:890, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:8, name:"Плинтус пластиковый 2м", category:"Стройматериалы", price:120, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.0, reviews:[] },
    { id:9, name:"Обои виниловые (рулон)", category:"Стройматериалы", price:2500, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.7, reviews:[] },
    // Пиломатериалы (3)
    { id:10, name:"Доска обрезная 50x150x6000", category:"Пиломатериалы", price:850, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    { id:11, name:"Брус 100x100x6000", category:"Пиломатериалы", price:1200, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.7, reviews:[] },
    { id:12, name:"Фанера ФК 1525x1525 10мм", category:"Пиломатериалы", price:950, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    // Кровля (3)
    { id:13, name:"Профнастил С-8 2м", category:"Кровля", price:1250, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:14, name:"Металлочерепица Монтеррей", category:"Кровля", price:1850, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.8, reviews:[] },
    { id:15, name:"Рубероид РКП-350 10м", category:"Кровля", price:450, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.0, reviews:[] },
    // Утеплитель (3)
    { id:16, name:"Минвата Rockwool 50мм", category:"Утеплитель", price:2100, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.9, reviews:[] },
    { id:17, name:"Пеноплекс 50мм 1.2x0.6м", category:"Утеплитель", price:890, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    { id:18, name:"Эковата 15кг", category:"Утеплитель", price:1550, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    // Крепеж (4)
    { id:19, name:"Саморезы по дереву 3.5x25 (1000шт)", category:"Крепеж", price:450, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.2, reviews:[] },
    { id:20, name:"Анкер-клин 10x100 (10шт)", category:"Крепеж", price:180, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    { id:21, name:"Гвозди 100мм (1кг)", category:"Крепеж", price:120, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.0, reviews:[] },
    { id:22, name:"Дюбель-гвозди 6x40 (100шт)", category:"Крепеж", price:150, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.1, reviews:[] },
    // Смеси (4)
    { id:23, name:"Штукатурка цементная 25кг", category:"Смеси", price:350, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.1, reviews:[] },
    { id:24, name:"Клей для плитки 25кг", category:"Смеси", price:420, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:25, name:"Наливной пол 20кг", category:"Смеси", price:550, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    { id:26, name:"Грунтовка глубокая 10л", category:"Смеси", price:650, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    // Инструменты (12)
    { id:27, name:"Перфоратор Makita HR2470", category:"Инструменты", price:12500, image:"https://images.unsplash.com/photo-1572981779307-38b6babb4aa6?w=300&h=200&fit=crop", rating:4.9, reviews:[] },
    { id:28, name:"Дрель аккумуляторная Bosch GSR 120-LI", category:"Инструменты", price:8900, image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop", rating:4.8, reviews:[] },
    { id:29, name:"Молоток 500г", category:"Инструменты", price:450, image:"https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    { id:30, name:"Отвертки набор 6шт", category:"Инструменты", price:350, image:"https://images.unsplash.com/photo-1581145492800-af6bc8f4cc0c?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:31, name:"Уровень строительный 80см", category:"Инструменты", price:550, image:"https://images.unsplash.com/photo-1581092336086-1c3d6b5bc4f9?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    { id:32, name:"Рулетка 5м", category:"Инструменты", price:250, image:"https://images.unsplash.com/photo-1581092336086-1c3d6b5bc4f9?w=300&h=200&fit=crop", rating:4.2, reviews:[] },
    { id:33, name:"Шуруповерт DeWalt DCD771", category:"Инструменты", price:10500, image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop", rating:4.9, reviews:[] },
    { id:34, name:"Бетономешалка 150л", category:"Инструменты", price:18500, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.7, reviews:[] },
    { id:35, name:"Лестница алюминиевая 4м", category:"Инструменты", price:4200, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    { id:36, name:"Каска защитная", category:"Инструменты", price:650, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:37, name:"Перчатки строительные", category:"Инструменты", price:150, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.1, reviews:[] },
    { id:38, name:"Лопата штыковая", category:"Инструменты", price:550, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    // Сантехника (4)
    { id:39, name:"Труба ПВХ 50мм 2м", category:"Сантехника", price:250, image:"https://images.unsplash.com/photo-1581092335871-4c8b6d8f3ec6?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    { id:40, name:"Смеситель для раковины", category:"Сантехника", price:2350, image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop", rating:4.7, reviews:[] },
    { id:41, name:"Гибкая подводка 50см", category:"Сантехника", price:180, image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop", rating:4.1, reviews:[] },
    { id:42, name:"Сифон для раковины", category:"Сантехника", price:350, image:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    // Электрика (8)
    { id:43, name:"Лампочки LED 10Вт", category:"Электрика", price:180, image:"https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    { id:44, name:"Розетка двойная Legrand", category:"Электрика", price:350, image:"https://images.unsplash.com/photo-1563089145-599f3b6c577b?w=300&h=200&fit=crop", rating:4.8, reviews:[] },
    { id:45, name:"Выключатель одноклавишный", category:"Электрика", price:120, image:"https://images.unsplash.com/photo-1563089145-599f3b6c577b?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    { id:46, name:"Кабель ВВГ 3x1.5 (100м)", category:"Электрика", price:2850, image:"https://images.unsplash.com/photo-1563089145-599f3b6c577b?w=300&h=200&fit=crop", rating:4.7, reviews:[] },
    { id:47, name:"Автоматический выключатель 16А", category:"Электрика", price:320, image:"https://images.unsplash.com/photo-1563089145-599f3b6c577b?w=300&h=200&fit=crop", rating:4.5, reviews:[] },
    { id:48, name:"Удлинитель 10м", category:"Электрика", price:650, image:"https://images.unsplash.com/photo-1563089145-599f3b6c577b?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    { id:49, name:"Электроды сварочные 3мм", category:"Электрика", price:350, image:"https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=300&h=200&fit=crop", rating:4.2, reviews:[] },
    { id:50, name:"Светильник LED 40Вт", category:"Электрика", price:1250, image:"https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=300&h=200&fit=crop", rating:4.6, reviews:[] },
    // Добавим ещё несколько для полноты
    { id:51, name:"Ведро 20л", category:"Инструменты", price:250, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.0, reviews:[] },
    { id:52, name:"Лак паркетный 5л", category:"Стройматериалы", price:1800, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.4, reviews:[] },
    { id:53, name:"Затирка для швов 2кг", category:"Смеси", price:250, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.3, reviews:[] },
    { id:54, name:"Растворосмеситель", category:"Инструменты", price:7500, image:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=200&fit=crop", rating:4.6, reviews:[] }
];

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = "all";
let currentSearch = "";
let currentSort = "default";
let currentPage = 1;
const itemsPerPage = 12;
let currentRating = 0;

// DOM элементы
const productsGrid = document.getElementById("productsGrid");
const filterButtonsContainer = document.getElementById("filterButtons");
const categoriesGrid = document.getElementById("categoriesGrid");
const globalSearch = document.getElementById("globalSearch");
const cartIcon = document.getElementById("cartIcon");
const cartModal = document.getElementById("cartModal");
const closeCart = document.querySelector(".close-cart");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalPriceSpan = document.getElementById("cartTotalPrice");
const cartCountSpan = document.getElementById("cartCount");
const submitOrderBtn = document.getElementById("submitOrderBtn");
const favoritesBtn = document.getElementById("favoritesBtn");
const favCountSpan = document.getElementById("favCount");
const favoritesModal = document.getElementById("favoritesModal");
const closeFav = document.querySelector(".close-fav");
const favoritesList = document.getElementById("favoritesList");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");
const aiChatButton = document.getElementById("aiChatButton");
const aiChatWindow = document.getElementById("aiChatWindow");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");
const chatMessages = document.getElementById("chatMessages");
const openChatBtn = document.getElementById("openChatBtn");
const reviewModal = document.getElementById("reviewModal");
const closeReview = document.querySelector(".close-review");
const submitReviewBtn = document.getElementById("submitReviewBtn");
const reviewProductId = document.getElementById("reviewProductId");
const reviewAuthor = document.getElementById("reviewAuthor");
const reviewText = document.getElementById("reviewText");
const ratingStars = document.querySelectorAll("#ratingStars span");
const scrollBtn = document.getElementById("scrollToProducts");
const contactLink = document.getElementById("contactLink");

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function init() {
    renderCategories();
    renderFilterButtons();
    renderProducts();
    updateCartUI();
    updateFavUI();
    loadTheme();
    setupEventListeners();
    initAI();
}
init();

// ========== КАТЕГОРИИ ==========
const categoryIcons = {
    "Стройматериалы":"fa-cubes","Пиломатериалы":"fa-tree","Кровля":"fa-home",
    "Утеплитель":"fa-temperature-low","Крепеж":"fa-gripfire","Смеси":"fa-fill-drip",
    "Инструменты":"fa-tools","Сантехника":"fa-faucet","Электрика":"fa-bolt"
};

function renderCategories() {
    const cats = [...new Map(products.map(p => [p.category, p.category])).keys()];
    categoriesGrid.innerHTML = cats.map(cat => `
        <div class="category-card" data-category="${cat}">
            <i class="fas ${categoryIcons[cat] || 'fa-hard-hat'}"></i>
            <h3>${cat}</h3>
        </div>
    `).join("");
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            setActiveFilter(card.dataset.category);
            document.getElementById("productsSection").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function renderFilterButtons() {
    const cats = ["all", ...new Map(products.map(p => [p.category, p.category])).keys()];
    filterButtonsContainer.innerHTML = cats.map(cat => `
        <button class="filter-btn ${currentFilter === cat ? 'active' : ''}" data-filter="${cat}">
            ${cat === 'all' ? 'Все' : cat}
        </button>
    `).join("");
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => setActiveFilter(btn.dataset.filter));
    });
}

function setActiveFilter(filter) {
    currentFilter = filter;
    currentPage = 1;
    renderFilterButtons();
    renderProducts();
}

// ========== СОРТИРОВКА ==========
sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
});

function getSortedProducts(arr) {
    let sorted = [...arr];
    if (currentSort === "price_asc") sorted.sort((a,b) => a.price - b.price);
    else if (currentSort === "price_desc") sorted.sort((a,b) => b.price - a.price);
    else if (currentSort === "name_asc") sorted.sort((a,b) => a.name.localeCompare(b.name));
    else if (currentSort === "rating_desc") sorted.sort((a,b) => b.rating - a.rating);
    return sorted;
}

// ========== ОТРИСОВКА ТОВАРОВ + ПАГИНАЦИЯ ==========
function renderProducts() {
    let filtered = products.filter(p => 
        (currentFilter === "all" || p.category === currentFilter) &&
        p.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
    let sorted = getSortedProducts(filtered);
    const totalPages = Math.ceil(sorted.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = sorted.slice(start, start + itemsPerPage);
    
    if (paginated.length === 0) {
        productsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">Товары не найдены</div>`;
        document.getElementById("pagination").innerHTML = "";
        return;
    }
    
    productsGrid.innerHTML = paginated.map(p => `
        <div class="product-card">
            <img class="product-img" src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/300x200?text=Фото+товара'">
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-category">${p.category}</div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '½' : ''} (${p.reviews.length})
                </div>
                <div class="product-price">${p.price} сом</div>
                <button class="add-to-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> В корзину</button>
                <button class="add-to-fav" data-id="${p.id}">
                    <i class="fas ${favorites.some(f => f.id === p.id) ? 'fa-heart' : 'fa-heart'}"></i> 
                    ${favorites.some(f => f.id === p.id) ? 'В избранном' : 'В избранное'}
                </button>
                <button class="review-btn" data-id="${p.id}"><i class="fas fa-star"></i> Отзыв</button>
            </div>
        </div>
    `).join("");
    
    // Обработчики
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
    });
    document.querySelectorAll(".add-to-fav").forEach(btn => {
        btn.addEventListener("click", () => {
            toggleFavorite(parseInt(btn.dataset.id));
            renderProducts();
            updateFavUI();
        });
    });
    document.querySelectorAll(".review-btn").forEach(btn => {
        btn.addEventListener("click", () => openReviewModal(parseInt(btn.dataset.id)));
    });
    
    renderPagination(totalPages);
}

function renderPagination(total) {
    const pagDiv = document.getElementById("pagination");
    if (total <= 1) { pagDiv.innerHTML = ""; return; }
    let html = `<button ${currentPage === 1 ? 'disabled' : ''} data-page="${currentPage - 1}">←</button>`;
    for (let i = 1; i <= total; i++) {
        html += `<button class="${currentPage === i ? 'active-page' : ''}" data-page="${i}">${i}</button>`;
    }
    html += `<button ${currentPage === total ? 'disabled' : ''} data-page="${currentPage + 1}">→</button>`;
    pagDiv.innerHTML = html;
    document.querySelectorAll("#pagination button").forEach(btn => {
        btn.addEventListener("click", () => {
            if (!btn.disabled) {
                currentPage = parseInt(btn.dataset.page);
                renderProducts();
                window.scrollTo({ top: document.getElementById("productsSection").offsetTop - 100, behavior: "smooth" });
            }
        });
    });
}

// ========== КОРЗИНА ==========
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    updateCartUI();
    saveCart();
    showCartModal();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.innerText = totalItems;
    if (!cartItemsList) return;
    if (cart.length === 0) {
        cartItemsList.innerHTML = "<p style='text-align:center; padding:20px;'>Корзина пуста</p>";
        cartTotalPriceSpan.innerText = "0";
        return;
    }
    let totalSum = 0;
    cartItemsList.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        totalSum += itemTotal;
        return `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price} сом</div>
                    <div class="cart-item-quantity">
                        <button class="decr-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="incr-quantity" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div><strong>${itemTotal} сом</strong></div>
            </div>
        `;
    }).join("");
    cartTotalPriceSpan.innerText = totalSum;
    
    document.querySelectorAll(".decr-quantity").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const idx = cart.findIndex(i => i.id === id);
            if (cart[idx].quantity > 1) cart[idx].quantity--;
            else cart.splice(idx, 1);
            updateCartUI();
            saveCart();
        });
    });
    document.querySelectorAll(".incr-quantity").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            cart.find(i => i.id === id).quantity++;
            updateCartUI();
            saveCart();
        });
    });
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(i => i.id !== id);
            updateCartUI();
            saveCart();
        });
    });
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showCartModal() {
    cartModal.style.display = "flex";
    updateCartUI();
}

function closeCartModal() {
    cartModal.style.display = "none";
}

// ========== ИЗБРАННОЕ ==========
function toggleFavorite(id) {
    const exists = favorites.some(f => f.id === id);
    if (exists) favorites = favorites.filter(f => f.id !== id);
    else favorites.push(products.find(p => p.id === id));
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavUI();
}

function updateFavUI() {
    favCountSpan.innerText = favorites.length;
    if (favoritesList) {
        if (favorites.length === 0) {
            favoritesList.innerHTML = "<p style='text-align:center;'>Нет избранных товаров</p>";
        } else {
            favoritesList.innerHTML = favorites.map(f => `
                <div class="cart-item">
                    <img src="${f.image}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div>${f.name}</div>
                        <div>${f.price} сом</div>
                        <button class="remove-fav" data-id="${f.id}">Удалить</button>
                    </div>
                </div>
            `).join("");
            document.querySelectorAll(".remove-fav").forEach(btn => {
                btn.addEventListener("click", () => {
                    favorites = favorites.filter(f => f.id !== parseInt(btn.dataset.id));
                    updateFavUI();
                    localStorage.setItem("favorites", JSON.stringify(favorites));
                    renderProducts();
                });
            });
        }
    }
}

// ========== ОТЗЫВЫ ==========
function openReviewModal(id) {
    reviewProductId.value = id;
    reviewAuthor.value = "";
    reviewText.value = "";
    currentRating = 0;
    updateRatingStars(0);
    reviewModal.style.display = "flex";
}

function updateRatingStars(rating) {
    ratingStars.forEach((star, idx) => {
        if (idx < rating) star.classList.add("selected");
        else star.classList.remove("selected");
    });
}

ratingStars.forEach(star => {
    star.addEventListener("click", () => {
        currentRating = parseInt(star.dataset.rating);
        updateRatingStars(currentRating);
    });
});

submitReviewBtn.addEventListener("click", () => {
    const id = parseInt(reviewProductId.value);
    const author = reviewAuthor.value.trim();
    const text = reviewText.value.trim();
    if (!author || !text || currentRating === 0) {
        alert("Заполните имя, отзыв и поставьте оценку");
        return;
    }
    const product = products.find(p => p.id === id);
    product.reviews.push({ author, text, rating: currentRating, date: new Date().toLocaleDateString() });
    // пересчёт среднего рейтинга
    const avg = product.reviews.reduce((sum, r) => sum + r.rating, 0) / product.reviews.length;
    product.rating = Math.round(avg * 10) / 10;
    alert("Спасибо за отзыв!");
    reviewModal.style.display = "none";
    renderProducts();
});

// ========== ПОИСК С АВТОДОПОЛНЕНИЕМ ==========
globalSearch.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    currentPage = 1;
    renderProducts();
    showSuggestions(e.target.value);
});

function showSuggestions(query) {
    if (!query) {
        document.querySelector(".search-suggestions").style.display = "none";
        return;
    }
    const matches = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
    const suggDiv = document.querySelector(".search-suggestions");
    if (matches.length) {
        suggDiv.innerHTML = matches.map(m => `<div>${m.name}</div>`).join("");
        suggDiv.style.display = "block";
        document.querySelectorAll(".search-suggestions div").forEach(div => {
            div.addEventListener("click", () => {
                globalSearch.value = div.innerText;
                currentSearch = div.innerText;
                renderProducts();
                suggDiv.style.display = "none";
            });
        });
    } else {
        suggDiv.style.display = "none";
    }
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box-header")) {
        document.querySelector(".search-suggestions").style.display = "none";
    }
});

// ========== ТЁМНАЯ ТЕМА ==========
function loadTheme() {
    if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-theme");
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// ========== ДОПОЛНИТЕЛЬНЫЕ СОБЫТИЯ ==========
function setupEventListeners() {
    cartIcon.addEventListener("click", showCartModal);
    closeCart.addEventListener("click", closeCartModal);
    favoritesBtn.addEventListener("click", () => { updateFavUI(); favoritesModal.style.display = "flex"; });
    closeFav.addEventListener("click", () => favoritesModal.style.display = "none");
    closeReview.addEventListener("click", () => reviewModal.style.display = "none");
    window.addEventListener("click", (e) => {
        if (e.target === cartModal) closeCartModal();
        if (e.target === favoritesModal) favoritesModal.style.display = "none";
        if (e.target === reviewModal) reviewModal.style.display = "none";
    });
    submitOrderBtn.addEventListener("click", () => {
        const name = document.getElementById("orderName").value.trim();
        const phone = document.getElementById("orderPhone").value.trim();
        if (!name || !phone) return alert("Заполните имя и телефон");
        if (cart.length === 0) return alert("Корзина пуста");
        alert(`✅ Спасибо, ${name}! Ваш заказ принят. Менеджер свяжется с вами по номеру ${phone}.`);
        cart = [];
        updateCartUI();
        saveCart();
        closeCartModal();
        document.getElementById("orderName").value = "";
        document.getElementById("orderPhone").value = "";
    });
    scrollBtn.addEventListener("click", () => {
        document.getElementById("productsSection").scrollIntoView({ behavior: "smooth" });
    });
    contactLink.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("https://wa.me/996550123456?text=Здравствуйте! Интересуют стройматериалы", "_blank");
    });
}

// ========== AI ПОМОЩНИК (ИНТЕЛЛЕКТУАЛЬНЫЙ) ==========
function initAI() {
    aiChatButton.addEventListener("click", () => {
        aiChatWindow.style.display = aiChatWindow.style.display === "flex" ? "none" : "flex";
    });
    closeChatBtn.addEventListener("click", () => aiChatWindow.style.display = "none");
    if (openChatBtn) openChatBtn.addEventListener("click", () => aiChatWindow.style.display = "flex");
    sendChatBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => { if (e.key === "Enter") sendMessage(); });
}

function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    addMessage(msg, "user");
    chatInput.value = "";
    setTimeout(() => {
        const reply = getAIResponse(msg);
        addMessage(reply, "ai");
    }, 400);
}

function addMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = sender === "user" ? "user-message" : "ai-message";
    msgDiv.innerText = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(question) {
    const q = question.toLowerCase();
    // База знаний AI
    if (q.includes("цемент") || q.includes("цена цемент")) {
        const cement = products.find(p => p.name.includes("Цемент"));
        return `Цемент М500 50кг стоит ${cement.price} сом. Также есть цемент М400 - 780 сом. Нужна доставка?`;
    }
    if (q.includes("кирпич")) {
        return "Кирпич красный полнотелый стоит 12 сом/шт. Кирпич силикатный - 10 сом/шт. Для кладки стен рекомендуем также цементный раствор.";
    }
    if (q.includes("перфоратор") || q.includes("дрель")) {
        const perf = products.find(p => p.name.includes("Перфоратор"));
        return `Перфоратор Makita ${perf.price} сом. Дрель Bosch - 8900 сом. Какой инструмент вас интересует?`;
    }
    if (q.includes("смета") || q.includes("ремонт комнаты")) {
        return "Примерная смета на ремонт комнаты 20м²: стяжка пола - 15000 сом, штукатурка стен - 20000 сом, поклейка обоев - 10000 сом, материалы - от 30000 сом. Точный расчёт по запросу.";
    }
    if (q.includes("утеплитель") || q.includes("минвата")) {
        return "Минвата Rockwool 50мм - 2100 сом/м². Пеноплекс - 890 сом. Эковата - 1550 сом. Какой тип утеплителя нужен?";
    }
    if (q.includes("кровля") || q.includes("профнастил")) {
        return "Профнастил С-8 - 1250 сом/м², металлочерепица - 1850 сом, рубероид - 450 сом/рулон. Бесплатный расчёт кровли!";
    }
    if (q.includes("электрика") || q.includes("розетка") || q.includes("кабель")) {
        return "В наличии розетки Legrand от 350 сом, кабель ВВГ 3x1.5 - 2850 сом/100м, автоматы 16А - 320 сом. Нужна консультация электрика?";
    }
    if (q.includes("сантехника") || q.includes("смеситель") || q.includes("труба")) {
        return "Смеситель для раковины от 2350 сом, труба ПВХ 50мм - 250 сом/2м, гибкая подводка - 180 сом. Доставим по Бишкеку.";
    }
    if (q.includes("инструмент") || q.includes("набор инструментов")) {
        return "У нас есть перфораторы, дрели, шуруповерты, молотки, отвертки. Посмотрите раздел 'Инструменты'. Хотите подбор по бюджету?";
    }
    if (q.includes("доставка") || q.includes("доставка в бишкек")) {
        return "Доставка по Бишкеку - 500 сом, при заказе от 5000 сом - бесплатно. Доставка в регионы - по тарифам транспортных компаний.";
    }
    if (q.includes("скидка") || q.includes("акция")) {
        return "Сейчас акция: при покупке перфоратора Makita - скидка 10% на сверла. Также скидка 5% на первый заказ при подписке на новости!";
    }
    if (q.includes("как купить") || q.includes("заказ")) {
        return "Добавьте товары в корзину, затем оформите заказ, указав имя и телефон. Наш менеджер свяжется с вами в течение 15 минут.";
    }
    if (q.includes("привет") || q.includes("здравствуйте")) {
        return "Здравствуйте! Я AI-помощник StroyMaster. Чем могу помочь? Подскажу цены, подберу материалы, рассчитаю смету.";
    }
    return "Спасибо за вопрос! Я ещё учусь, но могу сказать, что вы можете найти все строительные материалы в нашем каталоге. Уточните, пожалуйста, товар или категорию (цемент, кирпич, инструмент, сантехника, электрика, кровля, утеплитель).";
}