// -------------------- ТОВАРЫ С РЕАЛЬНЫМИ ФОТО (32 шт) --------------------
const products = [
    { id: 1, name: "Цемент М500 50кг", category: "Стройматериалы", price: 850, image: "https://images.pexels.com/photos/374705/pexels-photo-374705.jpeg?w=300&h=200&fit=crop" },
    { id: 2, name: "Кирпич керамический", category: "Стройматериалы", price: 14, image: "https://images.pexels.com/photos/209297/pexels-photo-209297.jpeg?w=300&h=200&fit=crop" },
    { id: 3, name: "Песок речной 50кг", category: "Стройматериалы", price: 420, image: "https://images.pexels.com/photos/374691/pexels-photo-374691.jpeg?w=300&h=200&fit=crop" },
    { id: 4, name: "Щебень гранитный 50кг", category: "Стройматериалы", price: 580, image: "https://images.pexels.com/photos/209255/pexels-photo-209255.jpeg?w=300&h=200&fit=crop" },
    { id: 5, name: "Доска обрезная 50х150", category: "Пиломатериалы", price: 890, image: "https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?w=300&h=200&fit=crop" },
    { id: 6, name: "Брус 100х100 6м", category: "Пиломатериалы", price: 1250, image: "https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg?w=300&h=200&fit=crop" },
    { id: 7, name: "Фанера ФК 10мм", category: "Пиломатериалы", price: 990, image: "https://images.pexels.com/photos/128618/pexels-photo-128618.jpeg?w=300&h=200&fit=crop" },
    { id: 8, name: "Профнастил С-8 2м", category: "Кровля", price: 1320, image: "https://images.pexels.com/photos/209275/pexels-photo-209275.jpeg?w=300&h=200&fit=crop" },
    { id: 9, name: "Металлочерепица Монтеррей", category: "Кровля", price: 1950, image: "https://images.pexels.com/photos/209275/pexels-photo-209275.jpeg?w=300&h=200&fit=crop" },
    { id: 10, name: "Минвата 50мм", category: "Утеплитель", price: 2250, image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?w=300&h=200&fit=crop" },
    { id: 11, name: "Пеноплекс 50мм", category: "Утеплитель", price: 920, image: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?w=300&h=200&fit=crop" },
    { id: 12, name: "Саморезы 3.5х25 (1000шт)", category: "Крепеж", price: 480, image: "https://images.pexels.com/photos/1421977/pexels-photo-1421977.jpeg?w=300&h=200&fit=crop" },
    { id: 13, name: "Анкер-клин 10х100 (10шт)", category: "Крепеж", price: 190, image: "https://images.pexels.com/photos/1421977/pexels-photo-1421977.jpeg?w=300&h=200&fit=crop" },
    { id: 14, name: "Штукатурка цементная 25кг", category: "Смеси", price: 380, image: "https://images.pexels.com/photos/374705/pexels-photo-374705.jpeg?w=300&h=200&fit=crop" },
    { id: 15, name: "Клей для плитки 25кг", category: "Смеси", price: 460, image: "https://images.pexels.com/photos/374705/pexels-photo-374705.jpeg?w=300&h=200&fit=crop" },
    { id: 16, name: "Наливной пол 20кг", category: "Смеси", price: 590, image: "https://images.pexels.com/photos/374705/pexels-photo-374705.jpeg?w=300&h=200&fit=crop" },
    { id: 17, name: "Перфоратор Makita HR2470", category: "Инструменты", price: 13200, image: "https://images.pexels.com/photos/159263/tool-workshop-drill-holes-159263.jpeg?w=300&h=200&fit=crop" },
    { id: 18, name: "Дрель Bosch GSB 13", category: "Инструменты", price: 9400, image: "https://images.pexels.com/photos/159263/tool-workshop-drill-holes-159263.jpeg?w=300&h=200&fit=crop" },
    { id: 19, name: "Молоток 500г", category: "Инструменты", price: 490, image: "https://images.pexels.com/photos/209297/pexels-photo-209297.jpeg?w=300&h=200&fit=crop" },
    { id: 20, name: "Отвертки набор 6шт", category: "Инструменты", price: 390, image: "https://images.pexels.com/photos/1421977/pexels-photo-1421977.jpeg?w=300&h=200&fit=crop" },
    { id: 21, name: "Уровень строительный 80см", category: "Инструменты", price: 580, image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?w=300&h=200&fit=crop" },
    { id: 22, name: "Рулетка 5м", category: "Инструменты", price: 280, image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?w=300&h=200&fit=crop" },
    { id: 23, name: "Труба ПВХ 50мм 2м", category: "Сантехника", price: 290, image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?w=300&h=200&fit=crop" },
    { id: 24, name: "Смеситель для раковины", category: "Сантехника", price: 2450, image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?w=300&h=200&fit=crop" },
    { id: 25, name: "Гибкая подводка 50см", category: "Сантехника", price: 210, image: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?w=300&h=200&fit=crop" },
    { id: 26, name: "Лампочка LED 10Вт", category: "Электрика", price: 190, image: "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg?w=300&h=200&fit=crop" },
    { id: 27, name: "Розетка двойная Legrand", category: "Электрика", price: 390, image: "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg?w=300&h=200&fit=crop" },
    { id: 28, name: "Выключатель одноклавишный", category: "Электрика", price: 140, image: "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg?w=300&h=200&fit=crop" },
    { id: 29, name: "Кабель ВВГ 3х1.5 (100м)", category: "Электрика", price: 2950, image: "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg?w=300&h=200&fit=crop" },
    { id: 30, name: "Автомат 16А", category: "Электрика", price: 350, image: "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg?w=300&h=200&fit=crop" },
    { id: 31, name: "Краска акриловая 10л", category: "Стройматериалы", price: 1350, image: "https://images.pexels.com/photos/374705/pexels-photo-374705.jpeg?w=300&h=200&fit=crop" },
    { id: 32, name: "Электроды 3мм (5кг)", category: "Электрика", price: 850, image: "https://images.pexels.com/photos/207929/pexels-photo-207929.jpeg?w=300&h=200&fit=crop" }
];

// -------------------- ГЛОБАЛЬНЫЕ ДАННЫЕ --------------------
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let currentPage = 1;
const perPage = 12;

// -------------------- DOM ЭЛЕМЕНТЫ --------------------
const productsGrid = document.getElementById("productsGrid");
const categoriesGrid = document.getElementById("categoriesGrid");
const filterButtonsDiv = document.getElementById("filterButtons");
const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const sortSelect = document.getElementById("sortSelect");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const favModal = document.getElementById("favModal");
const cartItemsDiv = document.getElementById("cartItems");
const cartTotalSpan = document.getElementById("cartTotal");
const cartCountSpan = document.getElementById("cartCount");
const favCountSpan = document.getElementById("favCount");
const favItemsDiv = document.getElementById("favItems");
const submitOrder = document.getElementById("submitOrder");
const orderName = document.getElementById("orderName");
const orderPhone = document.getElementById("orderPhone");
const contactMethod = document.getElementById("contactMethod");
const paginationDiv = document.getElementById("pagination");
const closeModalBtns = document.querySelectorAll(".close-modal, .close-fav");

// -------------------- СОХРАНЕНИЕ --------------------
function saveData() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateCounters();
}

function updateCounters() {
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
    cartCountSpan.innerText = totalItems;
    favCountSpan.innerText = favorites.length;
}

// -------------------- ФИЛЬТРАЦИЯ И СОРТИРОВКА --------------------
function getFilteredProducts() {
    let filtered = products.filter(p => {
        if (currentCategory !== "all" && p.category !== currentCategory) return false;
        if (currentSearch && !p.name.toLowerCase().includes(currentSearch.toLowerCase())) return false;
        return true;
    });
    if (currentSort === "price_asc") filtered.sort((a,b) => a.price - b.price);
    else if (currentSort === "price_desc") filtered.sort((a,b) => b.price - a.price);
    return filtered;
}

// -------------------- ОТРИСОВКА ТОВАРОВ --------------------
function renderProducts() {
    let filtered = getFilteredProducts();
    const totalPages = Math.ceil(filtered.length / perPage);
    const start = (currentPage - 1) * perPage;
    const pageProducts = filtered.slice(start, start + perPage);
    
    if (pageProducts.length === 0) {
        productsGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px;">Товары не найдены</div>`;
        paginationDiv.innerHTML = "";
        return;
    }
    
    productsGrid.innerHTML = pageProducts.map(p => `
        <div class="product-card">
            <img class="product-img" src="${p.image}" onerror="this.src='https://placehold.co/300x200?text=StroyMaster'">
            <div class="product-info">
                <div class="product-title">${p.name}</div>
                <div class="product-category">${p.category}</div>
                <div class="product-price">${p.price} сом</div>
                <div class="product-buttons">
                    <button class="add-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> В корзину</button>
                    <button class="add-fav" data-id="${p.id}"><i class="fas fa-heart"></i> ${favorites.some(f => f.id === p.id) ? "✓" : ""}</button>
                </div>
            </div>
        </div>
    `).join("");
    
    document.querySelectorAll(".add-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            const existing = cart.find(i => i.id === id);
            if (existing) existing.quantity++;
            else cart.push({ ...product, quantity: 1 });
            saveData();
            renderCart();
            showToast("Товар добавлен в корзину");
        });
    });
    
    document.querySelectorAll(".add-fav").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id);
            const exists = favorites.some(f => f.id === id);
            if (exists) favorites = favorites.filter(f => f.id !== id);
            else favorites.push(products.find(p => p.id === id));
            saveData();
            renderProducts();
            renderFavorites();
        });
    });
    
    // Пагинация
    paginationDiv.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
            window.scrollTo({ top: document.getElementById("productsSection").offsetTop - 80, behavior: "smooth" });
        });
        paginationDiv.appendChild(btn);
    }
}

// -------------------- КОРЗИНА --------------------
function renderCart() {
    if (!cartItemsDiv) return;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p style='text-align:center;padding:20px;'>Корзина пуста</p>";
        cartTotalSpan.innerText = "0";
        return;
    }
    let total = 0;
    cartItemsDiv.innerHTML = cart.map(item => {
        const sum = item.price * item.quantity;
        total += sum;
        return `
            <div class="cart-item">
                <img src="${item.image}" onerror="this.src='https://placehold.co/70x70'">
                <div class="cart-item-info">
                    <div><strong>${item.name}</strong></div>
                    <div>${item.price} сом x ${item.quantity} = ${sum} сом</div>
                    <div class="cart-item-buttons">
                        <button class="cart-dec" data-id="${item.id}">-</button>
                        <button class="cart-inc" data-id="${item.id}">+</button>
                        <button class="cart-remove" data-id="${item.id}">Удалить</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    cartTotalSpan.innerText = total;
    
    document.querySelectorAll(".cart-dec").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const idx = cart.findIndex(i => i.id === id);
            if (cart[idx].quantity > 1) cart[idx].quantity--;
            else cart.splice(idx, 1);
            saveData();
            renderCart();
            updateCounters();
        });
    });
    document.querySelectorAll(".cart-inc").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            item.quantity++;
            saveData();
            renderCart();
            updateCounters();
        });
    });
    document.querySelectorAll(".cart-remove").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(i => i.id !== id);
            saveData();
            renderCart();
            updateCounters();
        });
    });
}

// -------------------- ИЗБРАННОЕ --------------------
function renderFavorites() {
    if (!favItemsDiv) return;
    if (favorites.length === 0) {
        favItemsDiv.innerHTML = "<p style='text-align:center;padding:20px;'>Нет избранных товаров</p>";
        return;
    }
    favItemsDiv.innerHTML = favorites.map(f => `
        <div class="cart-item">
            <img src="${f.image}" onerror="this.src='https://placehold.co/70x70'">
            <div class="cart-item-info">
                <div><strong>${f.name}</strong></div>
                <div>${f.price} сом</div>
                <button class="remove-fav-item" data-id="${f.id}">Удалить</button>
            </div>
        </div>
    `).join("");
    document.querySelectorAll(".remove-fav-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = parseInt(btn.dataset.id);
            favorites = favorites.filter(f => f.id !== id);
            saveData();
            renderFavorites();
            renderProducts();
        });
    });
}

// -------------------- КАТЕГОРИИ И ФИЛЬТРЫ --------------------
function renderCategories() {
    const cats = ["all", ...new Set(products.map(p => p.category))];
    categoriesGrid.innerHTML = cats.map(cat => `
        <div class="category-card" data-cat="${cat}">
            <i class="fas ${getCategoryIcon(cat)}"></i>
            <h3>${cat === "all" ? "Все" : cat}</h3>
        </div>
    `).join("");
    document.querySelectorAll(".category-card").forEach(el => {
        el.addEventListener("click", () => {
            currentCategory = el.dataset.cat;
            currentPage = 1;
            renderFilterButtons();
            renderProducts();
        });
    });
}

function getCategoryIcon(cat) {
    const icons = {
        "all": "fa-th-large",
        "Стройматериалы": "fa-cubes",
        "Пиломатериалы": "fa-tree",
        "Кровля": "fa-home",
        "Утеплитель": "fa-temperature-low",
        "Крепеж": "fa-gripfire",
        "Смеси": "fa-fill-drip",
        "Инструменты": "fa-tools",
        "Сантехника": "fa-faucet",
        "Электрика": "fa-bolt"
    };
    return icons[cat] || "fa-hard-hat";
}

function renderFilterButtons() {
    const cats = ["all", ...new Set(products.map(p => p.category))];
    filterButtonsDiv.innerHTML = cats.map(cat => `<button class="filter-btn ${currentCategory === cat ? 'active' : ''}" data-cat="${cat}">${cat === "all" ? "Все" : cat}</button>`).join("");
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentCategory = btn.dataset.cat;
            currentPage = 1;
            renderFilterButtons();
            renderProducts();
        });
    });
}

// -------------------- ПОИСК С ПОДСКАЗКАМИ --------------------
searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    currentPage = 1;
    renderProducts();
    const query = e.target.value.toLowerCase();
    if (!query) {
        searchSuggestions.style.display = "none";
        return;
    }
    const matches = products.filter(p => p.name.toLowerCase().includes(query)).slice(0, 5);
    if (matches.length) {
        searchSuggestions.innerHTML = matches.map(m => `<div>${m.name}</div>`).join("");
        searchSuggestions.style.display = "block";
        document.querySelectorAll(".search-suggestions div").forEach(div => {
            div.addEventListener("click", () => {
                searchInput.value = div.innerText;
                currentSearch = div.innerText;
                renderProducts();
                searchSuggestions.style.display = "none";
            });
        });
    } else {
        searchSuggestions.style.display = "none";
    }
});
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) searchSuggestions.style.display = "none";
});

// -------------------- СОРТИРОВКА --------------------
sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
});

// -------------------- МОДАЛКИ --------------------
cartBtn.addEventListener("click", () => {
    renderCart();
    cartModal.style.display = "flex";
});
document.getElementById("favoritesBtn").addEventListener("click", () => {
    renderFavorites();
    favModal.style.display = "flex";
});
closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        cartModal.style.display = "none";
        favModal.style.display = "none";
    });
});
window.addEventListener("click", (e) => {
    if (e.target === cartModal) cartModal.style.display = "none";
    if (e.target === favModal) favModal.style.display = "none";
});

// -------------------- ОФОРМЛЕНИЕ ЗАКАЗА С ВЫБОРОМ МЕССЕНДЖЕРА --------------------
submitOrder.addEventListener("click", () => {
    const name = orderName.value.trim();
    const phone = orderPhone.value.trim();
    const method = contactMethod.value;
    if (!name || !phone) {
        alert("Пожалуйста, укажите имя и номер телефона");
        return;
    }
    if (cart.length === 0) {
        alert("Корзина пуста");
        return;
    }
    
    const orderItems = cart.map(i => `${i.name} x${i.quantity} = ${i.price * i.quantity} сом`).join("\n");
    const total = cart.reduce((s,i) => s + i.price * i.quantity, 0);
    const message = `Новый заказ от ${name} (${phone}) через ${method}:\n${orderItems}\nИТОГО: ${total} сом`;
    
    // Отправка в зависимости от выбранного метода
    if (method === "whatsapp") {
        window.open(`https://wa.me/996706765088?text=${encodeURIComponent(message)}`, "_blank");
    } else if (method === "telegram") {
        window.open(`https://t.me/stroymaster_bot?start=${encodeURIComponent(message)}`, "_blank");
        // Альтернатива: tg://resolve?domain=stroymaster&text=...
    } else if (method === "instagram") {
        window.open(`https://instagram.com/stroymaster.kg`, "_blank");
        alert("Перейдите в Instagram и отправьте сообщение @stroymaster.kg с текстом заказа");
    }
    
    alert(`Спасибо, ${name}! Ваш заказ отправлен. Мы свяжемся с вами в ${method === "whatsapp" ? "WhatsApp" : method === "telegram" ? "Telegram" : "Instagram DM"}.`);
    cart = [];
    saveData();
    renderCart();
    updateCounters();
    cartModal.style.display = "none";
    orderName.value = "";
    orderPhone.value = "";
});

// -------------------- УЛУЧШЕННЫЙ AI ПОМОЩНИК --------------------
const chatToggle = document.getElementById("chatToggle");
const aiChat = document.getElementById("aiChat");
const closeChatBtn = document.getElementById("closeChatBtn");
const sendChatBtn = document.getElementById("sendChatBtn");
const chatInput = document.getElementById("chatInput");
const chatMessagesDiv = document.getElementById("chatMessages");

chatToggle.addEventListener("click", () => {
    aiChat.style.display = aiChat.style.display === "flex" ? "none" : "flex";
});
closeChatBtn.addEventListener("click", () => aiChat.style.display = "none");
sendChatBtn.addEventListener("click", sendAIMessage);
chatInput.addEventListener("keypress", (e) => { if (e.key === "Enter") sendAIMessage(); });

function sendAIMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;
    addChatMessage(msg, "user");
    chatInput.value = "";
    setTimeout(() => {
        const reply = getAIResponse(msg);
        addChatMessage(reply, "ai");
    }, 400);
}

function addChatMessage(text, sender) {
    const div = document.createElement("div");
    div.className = sender === "user" ? "user-message" : "ai-message";
    div.innerText = text;
    chatMessagesDiv.appendChild(div);
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

function getAIResponse(question) {
    const q = question.toLowerCase();
    // Цены на товары
    if (q.includes("сколько стоит") || q.includes("цена")) {
        for (let p of products) {
            if (q.includes(p.name.toLowerCase())) {
                return `${p.name} стоит ${p.price} сом. Хотите добавить в корзину?`;
            }
        }
        return "Уточните товар: цемент, кирпич, перфоратор, дрель, краска и т.д.";
    }
    if (q.includes("цемент")) return "Цемент М500 50кг — 850 сом. Подходит для фундамента и стяжки.";
    if (q.includes("кирпич")) return "Кирпич керамический — 14 сом/шт. Есть также силикатный — 11 сом/шт.";
    if (q.includes("перфоратор")) return "Перфоратор Makita HR2470 — 13 200 сом. Мощный, для бетона и кирпича.";
    if (q.includes("дрель")) return "Дрель Bosch GSB 13 — 9400 сом. Отличный выбор для дома.";
    if (q.includes("краска")) return "Краска акриловая 10л — 1350 сом. Для стен и потолков.";
    if (q.includes("доставка")) return "Доставка по Бишкеку — 300 сом. При заказе от 5000 сом — бесплатно.";
    if (q.includes("скидка") || q.includes("акция")) return "Сейчас акция: при заказе от 7000 сом — бесплатная доставка + подарок!";
    if (q.includes("как купить")) return "Выберите товары, добавьте в корзину, оформите заказ — мы свяжемся с вами в WhatsApp, Telegram или Instagram.";
    if (q.includes("график") || q.includes("режим")) return "Мы работаем Пн-Пт 9:00–19:00, Сб 10:00–17:00, Вс — выходной.";
    if (q.includes("контакты")) return "Наш телефон: +996706765088 (WhatsApp, Telegram), Instagram: @stroymaster.kg";
    if (q.includes("привет") || q.includes("здравствуй")) return "Здравствуйте! Я AI-консультант StroyMaster. Спросите о ценах, инструментах, доставке или акциях.";
    if (q.includes("совет") || q.includes("что лучше")) {
        return "Для стен лучше газосиликатные блоки или кирпич. Для отделки — акриловая краска. Для сверления бетона нужен перфоратор. Уточните ваш вопрос.";
    }
    return "Я AI-помощник. Могу подсказать цены на товары (цемент, кирпич, перфоратор), условия доставки, акции. Что именно вас интересует?";
}

// -------------------- ДОПОЛНИТЕЛЬНО --------------------
function showToast(msg) {
    // простая заглушка
    alert(msg);
}
document.getElementById("scrollBtn").addEventListener("click", () => {
    document.getElementById("productsSection").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("openAIBtn").addEventListener("click", () => {
    aiChat.style.display = "flex";
});
document.getElementById("contactBtn").addEventListener("click", () => {
    window.open("https://wa.me/996706765088?text=Здравствуйте! Интересуют стройматериалы", "_blank");
});

// -------------------- ЗАПУСК --------------------
function init() {
    renderCategories();
    renderFilterButtons();
    renderProducts();
    updateCounters();
    renderCart();
}
init();
