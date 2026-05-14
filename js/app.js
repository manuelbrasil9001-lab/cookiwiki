// ============================================
//  COOKIWIKI — Main Application (clean)
// ============================================

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  initData();
  STATE.language = detectLanguage();
  STATE.theme = localStorage.getItem('cookiwiki_theme') || 'light';
  applyTheme();
  populateSelects();
  populateEmojiGrid();
  buildLangMenu();
  applyTranslations();
  applyLiveConfig();

  document.getElementById('currentFlag').textContent = LANG_FLAGS[STATE.language] || '🌐';
  document.getElementById('currentLang').textContent = STATE.language.toUpperCase();

  if (STATE.currentUser) showUserArea();
  showPage('home');

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#langSelector')) document.getElementById('langMenu').classList.remove('open');
    if (!e.target.closest('.avatar-menu')) document.getElementById('userDropdown')?.classList.remove('open');
    if (!e.target.closest('.hero-search') && !e.target.closest('#searchSuggestions'))
      document.getElementById('searchSuggestions').classList.add('hidden');
  });
});

// ---- THEME ----
function toggleTheme() {
  STATE.theme = STATE.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('cookiwiki_theme', STATE.theme);
  applyTheme();
}
function applyTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme);
  document.getElementById('themeIcon').textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
}

// ---- PAGE ROUTING ----
let currentPage = 'home';

function showPage(page, extra) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.add('active'); currentPage = page; }
  window.scrollTo(0, 0);
  renderPage(page, extra);
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
}

function renderPage(page, extra) {
  switch (page) {
    case 'home':       renderHome(); break;
    case 'explore':    renderExplore(); break;
    case 'countries':  renderCountries(); break;
    case 'categories': renderCategories(); break;
    case 'recipe':     renderRecipeDetail(extra); break;
    case 'profile':    renderProfile(); break;
    case 'myRecipes':  renderMyRecipes(); break;
    case 'favorites':  renderFavorites(); break;
    case 'admin':      renderAdminPage(); break;
    case 'about':
    case 'privacy':
    case 'terms':
    case 'contact':
      applyTranslations(); break;
  }
}

function renderCurrentPage() { renderPage(currentPage); applyTranslations(); }

// ---- HOME ----
function renderHome() {
  renderFeaturedGrid();
  renderCountriesStrip();
  renderCategoriesGrid();
  renderTrending();
  updateStats();
}

function renderFeaturedGrid() {
  const grid = document.getElementById('featuredGrid');
  const recipes = [...STATE.recipes].filter(r => !r.hidden).sort((a, b) => b.views - a.views).slice(0, 8);
  grid.innerHTML = recipes.map(r => recipeCard(r)).join('');
}

function renderCountriesStrip() {
  const strip = document.getElementById('countriesStrip');
  strip.innerHTML = COUNTRIES.filter(c => !c.hidden).slice(0, 16).map(c => `
    <div class="country-pill" onclick="filterByCountry('${c.id}')">
      <span class="flag">${c.flag}</span>
      <span>${getCountryName(c.id)}</span>
    </div>`).join('');
}

function renderCategoriesGrid() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-card" onclick="filterByCategory('${c.id}')">
      <div class="cat-emoji">${c.emoji}</div>
      <div class="cat-name">${getCatName(c.id)}</div>
      <div class="cat-count">${countRecipesByCategory(c.id)} ${t('stat_recipes')}</div>
    </div>`).join('');
}

function renderTrending() {
  const list = document.getElementById('trendingList');
  const trending = [...STATE.recipes].filter(r => !r.hidden).sort((a, b) => b.views - a.views).slice(0, 5);
  list.innerHTML = trending.map((r, i) => `
    <div class="trending-item" onclick="openRecipe('${r.id}')">
      <div class="trending-rank r${i + 1}">${i + 1}</div>
      <div class="trending-emoji">${r.emoji}</div>
      <div class="trending-info">
        <h4>${r.name}</h4>
        <p>${getCountryById(r.country)?.flag || ''} ${getCountryName(r.country)} · ${getCatName(r.category)}</p>
      </div>
      <div class="trending-views">👁 ${(r.views || 0).toLocaleString()}</div>
    </div>`).join('');
}

function updateStats() {
  document.getElementById('statRecipes').textContent = STATE.recipes.length;
  const uc = STATE.users.length;
  document.getElementById('statUsers').textContent = uc > 1000 ? (uc / 1000).toFixed(1) + 'k' : uc;
}

// ---- EXPLORE ----
function renderExplore() { populateFilters(); applyFilters(); }

function populateFilters() {
  const countryEl = document.getElementById('filterCountry');
  const catEl = document.getElementById('filterCategory');
  if (countryEl.options.length <= 1)
    COUNTRIES.filter(c => !c.hidden).forEach(c => countryEl.add(new Option(`${c.flag} ${getCountryName(c.id)}`, c.id)));
  if (catEl.options.length <= 1)
    CATEGORIES.forEach(c => catEl.add(new Option(`${c.emoji} ${getCatName(c.id)}`, c.id)));
}

function applyFilters() {
  let recipes = [...STATE.recipes].filter(r => !r.hidden);
  const country    = document.getElementById('filterCountry')?.value;
  const category   = document.getElementById('filterCategory')?.value;
  const difficulty = document.getElementById('filterDifficulty')?.value;
  const maxTime    = parseInt(document.getElementById('filterTime')?.value || 240);
  const search     = document.getElementById('exploreSearch')?.value.toLowerCase();
  const sortBy     = document.getElementById('sortBy')?.value || 'newest';
  const diets      = [...document.querySelectorAll('.checkbox-group input:checked')].map(i => i.value);

  if (country)    recipes = recipes.filter(r => r.country === country);
  if (category)   recipes = recipes.filter(r => r.category === category);
  if (difficulty) recipes = recipes.filter(r => r.difficulty === difficulty);
  recipes = recipes.filter(r => (r.prepTime + r.cookTime) <= maxTime);
  if (search) recipes = recipes.filter(r =>
    r.name.toLowerCase().includes(search) ||
    r.description.toLowerCase().includes(search) ||
    (r.ingredients || []).some(i => i.name.toLowerCase().includes(search))
  );
  if (diets.length) recipes = recipes.filter(r => diets.every(d => (r.tags || []).includes(d)));

  switch (sortBy) {
    case 'popular': recipes.sort((a, b) => b.views - a.views); break;
    case 'rating':  recipes.sort((a, b) => b.rating - a.rating); break;
    case 'time':    recipes.sort((a, b) => (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime)); break;
    default:        recipes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const grid  = document.getElementById('exploreGrid');
  const noRes = document.getElementById('noResults');
  if (!recipes.length) { grid.innerHTML = ''; noRes.classList.remove('hidden'); }
  else { noRes.classList.add('hidden'); grid.innerHTML = recipes.map(r => recipeCard(r)).join(''); }
}

function updateTimeLabel(val) { document.getElementById('timeLabel').textContent = val + ' min'; }

function clearFilters() {
  document.getElementById('filterCountry').value = '';
  document.getElementById('filterCategory').value = '';
  document.getElementById('filterDifficulty').value = '';
  document.getElementById('filterTime').value = 240;
  document.getElementById('timeLabel').textContent = '240 min';
  document.getElementById('exploreSearch').value = '';
  document.querySelectorAll('.checkbox-group input').forEach(i => i.checked = false);
  applyFilters();
}

function filterByCountry(id) {
  showPage('explore');
  setTimeout(() => { document.getElementById('filterCountry').value = id; applyFilters(); }, 100);
}

function filterByCategory(id) {
  showPage('explore');
  setTimeout(() => { document.getElementById('filterCategory').value = id; applyFilters(); }, 100);
}

// ---- COUNTRIES & CATEGORIES ----
function renderCountries() {
  document.getElementById('worldCountriesGrid').innerHTML = COUNTRIES.filter(c => !c.hidden).map(c => `
    <div class="country-card" onclick="filterByCountry('${c.id}')">
      <div class="c-flag">${c.flag}</div>
      <div class="c-name">${getCountryName(c.id)}</div>
      <div class="c-count">${countRecipesByCountry(c.id)} ${t('stat_recipes')}</div>
    </div>`).join('');
}

function renderCategories() {
  document.getElementById('bigCategoriesGrid').innerHTML = CATEGORIES.map(c => `
    <div class="category-big-card" onclick="filterByCategory('${c.id}')">
      <div class="cat-emoji">${c.emoji}</div>
      <div class="cat-name">${getCatName(c.id)}</div>
      <div class="cat-count">${countRecipesByCategory(c.id)} ${t('stat_recipes')}</div>
    </div>`).join('');
}

// ---- RECIPE CARD ----
function recipeCard(r) {
  const isFav   = STATE.favorites.includes(r.id);
  const country = getCountryById(r.country);
  const total   = (r.prepTime || 0) + (r.cookTime || 0);
  const tags    = (r.tags || []).map(tag => {
    const key = tag === 'glutenfree' ? 'gf' : tag === 'vegetarian' ? 'veg' : tag;
    return `<span class="recipe-tag ${tag}">${DIET_EMOJIS[tag] || ''} ${t('diet_' + key)}</span>`;
  }).join('');
  return `
    <div class="recipe-card" onclick="openRecipe('${r.id}')">
      <div class="recipe-card-img">
        ${r.photo ? `<img src="${r.photo}" alt="${r.name}">` : r.emoji}
        <span class="recipe-badge diff-${r.difficulty}">${t('diff_' + r.difficulty)}</span>
        <button class="recipe-fav-btn ${isFav ? 'active' : ''}"
          onclick="event.stopPropagation();toggleFavorite('${r.id}')">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="recipe-card-body">
        <div class="recipe-card-meta">
          <span>${country?.flag || '🌍'} ${getCountryName(r.country)}</span>
          <span>·</span><span>⏱ ${total} ${t('min')}</span>
          <span>·</span><span>👤 ${r.servings} ${t('servings_label')}</span>
        </div>
        <h3>${r.name}</h3>
        <p class="recipe-card-desc">${r.description}</p>
        <div class="recipe-card-footer">
          <span class="recipe-rating">★ ${r.rating?.toFixed(1) || '4.5'}</span>
          <div class="recipe-tags">${tags}</div>
        </div>
      </div>
    </div>`;
}

// ---- RECIPE DETAIL ----
function openRecipe(id) {
  STATE.currentRecipeId = id;
  const r = STATE.recipes.find(x => x.id === id);
  if (!r) return;
  r.views = (r.views || 0) + 1;
  saveRecipes();
  showPage('recipe', r);
}

function renderRecipeDetail(r) {
  if (!r && STATE.currentRecipeId) r = STATE.recipes.find(x => x.id === STATE.currentRecipeId);
  if (!r) return;
  const country = getCountryById(r.country);
  const isFav   = STATE.favorites.includes(r.id);
  const total   = (r.prepTime || 0) + (r.cookTime || 0);
  const tags    = (r.tags || []).map(tag => {
    const key = tag === 'glutenfree' ? 'gf' : tag === 'vegetarian' ? 'veg' : tag;
    return `<span class="recipe-tag ${tag}">${DIET_EMOJIS[tag] || ''} ${t('diet_' + key)}</span>`;
  }).join('');
  const ingHtml = (r.ingredients || []).map(ing => `
    <div class="ingredient-item">
      <span class="ing-amount">${ing.qty ? ing.qty + ' ' + (ing.unit !== 'pieza' && ing.unit !== 'al gusto' ? ing.unit : '') : ''}</span>
      <span class="ing-name-d">${ing.name}</span>
      ${ing.note ? `<span class="ing-note-d">(${ing.note})</span>` : ''}
    </div>`).join('');
  const stepsHtml = (r.steps || []).map((s, i) => `
    <div class="instruction-step">
      <div class="step-num-d">${i + 1}</div>
      <div class="step-content-d">
        <p>${s.text}</p>
        ${s.tip ? `<div class="step-tip-d">💡 ${s.tip}</div>` : ''}
      </div>
    </div>`).join('');
  const reviewsHtml = (r.reviews || []).length
    ? r.reviews.map(rv => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-avatar">👤</span>
          <div class="review-meta"><strong>${rv.user}</strong><div class="review-date">${rv.date}</div></div>
          <div class="review-stars">${'★'.repeat(rv.rating)}${'☆'.repeat(5 - rv.rating)}</div>
        </div>
        <p class="review-text">${rv.comment}</p>
      </div>`).join('')
    : `<p style="color:var(--text3)">Aún no hay opiniones. ¡Sé el primero!</p>`;

  document.getElementById('recipeDetailContent').innerHTML = `
    <div class="recipe-detail">
      <div class="recipe-detail-hero">
        <div class="recipe-detail-img">${r.photo ? `<img src="${r.photo}" alt="${r.name}">` : r.emoji}</div>
        <div class="recipe-detail-info">
          <h1>${r.name}</h1>
          <div class="recipe-detail-meta">
            <span class="meta-chip">${country?.flag || '🌍'} ${getCountryName(r.country)}</span>
            <span class="meta-chip">⏱ ${total} ${t('min')}</span>
            <span class="meta-chip">👤 ${t('servings_for')} ${r.servings}</span>
            <span class="meta-chip">📊 ${t('diff_' + r.difficulty)}</span>
            <span class="meta-chip">★ ${r.rating?.toFixed(1) || '4.5'}</span>
            ${tags}
          </div>
          <p class="recipe-detail-desc">${r.description}</p>
          <p style="font-size:0.85rem;color:var(--text3);margin-bottom:1rem">${t('recipe_by')} <strong>${r.author || 'Chef'}</strong></p>
          <div class="recipe-detail-actions">
            <button class="btn-${isFav ? 'ghost' : 'primary'}" onclick="toggleFavorite('${r.id}');renderRecipeDetail()">
              ${isFav ? t('remove_fav') : t('add_to_fav')}
            </button>
            <button class="btn-ghost" onclick="shareRecipe('${r.id}')">${t('share')}</button>
            <button class="btn-ghost" onclick="openRating('${r.id}')">${t('write_review')}</button>
          </div>
        </div>
      </div>
      <div class="recipe-detail-body">
        <aside class="ingredients-panel">
          <h3>${t('ingredients_title')}</h3>
          <div class="servings-adjuster">
            <button onclick="adjustServings('${r.id}',-1)">−</button>
            <span id="servingsCount">${r.servings}</span>
            <span style="color:var(--text3);font-size:0.85rem">${t('servings_label')}</span>
            <button onclick="adjustServings('${r.id}',1)">+</button>
          </div>
          <div id="ingredientsList">${ingHtml}</div>
        </aside>
        <div class="instructions-panel">
          <h3>${t('instructions_title')}</h3>
          ${stepsHtml}
          ${r.tips ? `<div class="step-tip-d" style="margin-top:1.5rem"><h4>${t('tips_title')}</h4>${r.tips}</div>` : ''}
          <div class="reviews-section">
            <h3>${t('reviews_title')}</h3>
            ${reviewsHtml}
          </div>
        </div>
      </div>
    </div>`;
}

let servingsMultiplier = 1;
function adjustServings(id, delta) {
  const r = STATE.recipes.find(x => x.id === id);
  if (!r) return;
  const cur = parseInt(document.getElementById('servingsCount').textContent) + delta;
  if (cur < 1) return;
  servingsMultiplier = cur / r.servings;
  document.getElementById('servingsCount').textContent = cur;
  document.getElementById('ingredientsList').innerHTML = (r.ingredients || []).map(ing => `
    <div class="ingredient-item">
      <span class="ing-amount">${ing.qty ? (Math.round(ing.qty * servingsMultiplier * 10) / 10) + ' ' + (ing.unit !== 'pieza' && ing.unit !== 'al gusto' ? ing.unit : '') : ''}</span>
      <span class="ing-name-d">${ing.name}</span>
      ${ing.note ? `<span class="ing-note-d">(${ing.note})</span>` : ''}
    </div>`).join('');
}

// ---- SEARCH ----
function liveSearch(val) {
  const sug = document.getElementById('searchSuggestions');
  if (!val || val.length < 2) { sug.classList.add('hidden'); return; }
  const results = STATE.recipes.filter(r =>
    r.name.toLowerCase().includes(val.toLowerCase()) || r.description.toLowerCase().includes(val.toLowerCase())
  ).slice(0, 5);
  if (!results.length) { sug.classList.add('hidden'); return; }
  sug.innerHTML = results.map(r => `
    <div class="suggestion-item" onclick="openRecipe('${r.id}');document.getElementById('searchSuggestions').classList.add('hidden')">
      <span class="sug-emoji">${r.emoji}</span>
      <div><strong>${r.name}</strong>
        <div style="font-size:0.8rem;color:var(--text3)">${getCountryById(r.country)?.flag || ''} ${getCountryName(r.country)}</div>
      </div>
    </div>`).join('');
  sug.classList.remove('hidden');
}

function doSearch() {
  const val = document.getElementById('heroSearch').value;
  document.getElementById('searchSuggestions').classList.add('hidden');
  showPage('explore');
  setTimeout(() => { document.getElementById('exploreSearch').value = val; applyFilters(); }, 100);
}

// ---- FAVORITES ----
function toggleFavorite(id) {
  if (!STATE.currentUser) { showToast(t('toast_login_required')); showModal('login'); return; }
  const idx = STATE.favorites.indexOf(id);
  if (idx === -1) { STATE.favorites.push(id); showToast(t('toast_fav_add')); }
  else { STATE.favorites.splice(idx, 1); showToast(t('toast_fav_remove')); }
  saveFavorites();
}

function renderFavorites() {
  const grid = document.getElementById('favoritesGrid');
  const noFav = document.getElementById('noFavorites');
  const recipes = STATE.recipes.filter(r => STATE.favorites.includes(r.id));
  if (!recipes.length) { grid.innerHTML = ''; noFav.classList.remove('hidden'); return; }
  noFav.classList.add('hidden');
  grid.innerHTML = recipes.map(r => recipeCard(r)).join('');
}

// ---- MY RECIPES ----
function renderMyRecipes() {
  if (!STATE.currentUser) { showPage('home'); return; }
  const grid = document.getElementById('myRecipesGrid');
  const noRec = document.getElementById('noMyRecipes');
  const recipes = STATE.recipes.filter(r => r.authorId === STATE.currentUser.id);
  if (!recipes.length) { grid.innerHTML = ''; noRec.classList.remove('hidden'); return; }
  noRec.classList.add('hidden');
  grid.innerHTML = recipes.map(r => recipeCard(r)).join('');
}

// ---- PROFILE ----
function renderProfile() {
  if (!STATE.currentUser) { showPage('home'); return; }
  const u = STATE.currentUser;
  const myRecipes  = STATE.recipes.filter(r => r.authorId === u.id);
  const totalViews = myRecipes.reduce((s, r) => s + (r.views || 0), 0);
  document.getElementById('profileContent').innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${u.emoji || '👤'}</div>
      <div class="profile-info">
        <h2>${u.name}</h2>
        <p>${u.username || ''} · ${getCountryById(u.country)?.flag || ''} ${getCountryName(u.country)}</p>
        ${u.bio ? `<p style="margin-top:0.5rem;color:var(--text2)">${u.bio}</p>` : ''}
        <div class="profile-stats">
          <div class="profile-stat"><strong>${myRecipes.length}</strong><span>${t('stat_recipes')}</span></div>
          <div class="profile-stat"><strong>${STATE.favorites.length}</strong><span>${t('menu_favorites')}</span></div>
          <div class="profile-stat"><strong>${totalViews}</strong><span>vistas</span></div>
        </div>
      </div>
    </div>
    <h3 style="font-family:var(--font-display);margin-bottom:1rem">${t('menu_my_recipes')}</h3>
    <div class="recipe-grid">${myRecipes.map(r => recipeCard(r)).join('') || `<p style="color:var(--text3)">${t('no_my_recipes')}</p>`}</div>`;
}

// ---- AUTH ----
function showUserArea() {
  document.getElementById('authArea').classList.add('hidden');
  document.getElementById('userArea').classList.remove('hidden');
  document.getElementById('userAvatar').textContent = STATE.currentUser.emoji || '👤';
  document.getElementById('userName').textContent = STATE.currentUser.name.split(' ')[0];
  const adminLink = document.getElementById('adminMenuLink');
  if (adminLink) adminLink.classList.toggle('hidden', !isMod());
}

function hideUserArea() {
  document.getElementById('authArea').classList.remove('hidden');
  document.getElementById('userArea').classList.add('hidden');
}

function toggleUserMenu() { document.getElementById('userDropdown').classList.toggle('open'); }

function doLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pw    = document.getElementById('loginPassword').value;
  if (!email || !pw) { showFormError('loginError', t('err_fill_fields')); return; }
  const user = STATE.users.find(u => u.email === email && u.password === pw);
  if (!user) { showFormError('loginError', t('err_invalid_login')); return; }
  if (user.role === 'banned') { showFormError('loginError', '🚫 Tu cuenta ha sido suspendida.'); return; }
  STATE.currentUser = user;
  saveUser();
  closeModal('login');
  showUserArea();
  showToast(t('toast_login_ok'));
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function doRegister() {
  if (STATE.siteConfig?.allowRegistration === false) {
    showFormError('regError', '⛔ El registro está desactivado temporalmente.'); return;
  }
  const name     = document.getElementById('regName').value.trim();
  const username = document.getElementById('regUsername').value.trim();
  const email    = document.getElementById('regEmail').value.trim();
  const pw       = document.getElementById('regPassword').value;
  const country  = document.getElementById('regCountry').value;
  const bio      = document.getElementById('regBio').value.trim();
  if (!name || !email || !pw || !country) { showFormError('regError', t('err_fill_fields')); return; }
  if (pw.length < 6) { showFormError('regError', t('err_password_short')); return; }
  if (STATE.users.find(u => u.email === email)) { showFormError('regError', t('err_email_taken')); return; }
  const EMOJIS = ['👨‍🍳','👩‍🍳','🧑‍🍳','👨‍🍽️','👩‍🍽️'];
  const newUser = {
    id: 'u' + Date.now(), email, password: pw, name,
    username: username.startsWith('@') ? username : '@' + username,
    emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    country, bio, role: 'user',
    createdAt: new Date().toISOString().split('T')[0]
  };
  STATE.users.push(newUser);
  saveUsers();
  STATE.currentUser = newUser;
  saveUser();
  closeModal('register');
  showUserArea();
  showToast(t('toast_register_ok'));
}

function logout() {
  STATE.currentUser = null;
  localStorage.removeItem('cookiwiki_user');
  hideUserArea();
  document.getElementById('userDropdown').classList.remove('open');
  showToast(t('toast_logout'));
  showPage('home');
}

// ---- RECIPE FORM ----
function formStep(delta) {
  const newStep = STATE.currentFormStep + delta;
  if (newStep < 1 || newStep > 4) return;
  STATE.currentFormStep = newStep;
  updateFormStep();
}

function updateFormStep() {
  const s = STATE.currentFormStep;
  document.querySelectorAll('.form-step').forEach((el, i) => el.classList.toggle('hidden', i + 1 !== s));
  document.querySelectorAll('.step-dots .dot').forEach((dot, i) => dot.classList.toggle('active', i + 1 === s));
  document.querySelectorAll('.form-steps .step').forEach((step, i) => {
    step.classList.remove('active', 'done');
    if (i + 1 === s) step.classList.add('active');
    if (i + 1 < s)  step.classList.add('done');
  });
  document.getElementById('btnBack').style.display = s > 1 ? '' : 'none';
  document.getElementById('btnNext').classList.toggle('hidden', s === 4);
  document.getElementById('btnSubmit').classList.toggle('hidden', s !== 4);
}

function addIngredient() {
  const list = document.getElementById('ingredientsList');
  const id = STATE.ingredientCount++;
  const row = document.createElement('div');
  row.className = 'ingredient-row'; row.id = `ingRow-${id}`;
  row.innerHTML = `
    <input type="number" placeholder="Cant." class="ing-qty" min="0" step="0.1">
    <select class="ing-unit">
      <option value="g">g</option><option value="kg">kg</option>
      <option value="ml">ml</option><option value="l">l</option>
      <option value="taza">taza</option><option value="tbsp">cda</option>
      <option value="tsp">cdta</option><option value="pieza">pieza</option>
      <option value="al gusto">al gusto</option>
    </select>
    <input type="text" placeholder="Ingrediente" class="ing-name">
    <input type="text" placeholder="Nota (opcional)" class="ing-note">
    <button class="ing-remove" onclick="removeIngredient(${id})">✕</button>`;
  list.appendChild(row);
}

function removeIngredient(id) {
  const row = document.getElementById(`ingRow-${id}`);
  if (row && document.getElementById('ingredientsList').children.length > 1) row.remove();
}

function addStep() {
  const list = document.getElementById('stepsList');
  const id = STATE.stepCount++;
  const num = list.children.length + 1;
  const row = document.createElement('div');
  row.className = 'step-row'; row.id = `stepRow-${id}`;
  row.innerHTML = `
    <div style="display:flex;gap:0.5rem;align-items:center;width:100%">
      <div class="step-num">${num}</div>
      <button class="ing-remove" onclick="removeStep(${id})" style="margin-left:auto">✕</button>
    </div>
    <textarea placeholder="Describe este paso detalladamente..." rows="3" class="step-text"></textarea>
    <input type="text" placeholder="Consejo para este paso (opcional)" class="step-tip">`;
  list.appendChild(row);
}

function removeStep(id) {
  const row = document.getElementById(`stepRow-${id}`);
  if (row && document.getElementById('stepsList').children.length > 1) {
    row.remove();
    document.querySelectorAll('.step-row .step-num').forEach((n, i) => n.textContent = i + 1);
  }
}

function previewPhoto(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById('uploadPlaceholder').classList.add('hidden');
      const prev = document.getElementById('photoPreview');
      prev.src = e.target.result; prev.classList.remove('hidden');
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function populateEmojiGrid() {
  const grid = document.getElementById('emojiGrid');
  grid.innerHTML = FOOD_EMOJIS.map((em, i) =>
    `<span class="emoji-opt ${i === 0 ? 'selected' : ''}" onclick="selectEmoji(this,'${em}')">${em}</span>`
  ).join('');
  STATE.selectedEmoji = FOOD_EMOJIS[0];
}

function selectEmoji(el, emoji) {
  document.querySelectorAll('.emoji-opt').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  STATE.selectedEmoji = emoji;
  document.getElementById('rfPhoto').value = '';
  document.getElementById('photoPreview').classList.add('hidden');
  document.getElementById('uploadPlaceholder').classList.remove('hidden');
}

function submitRecipe() {
  const name        = document.getElementById('rfName').value.trim();
  const country     = document.getElementById('rfCountry').value;
  const category    = document.getElementById('rfCategory').value;
  const difficulty  = document.getElementById('rfDifficulty').value;
  const servings    = parseInt(document.getElementById('rfServings').value);
  const prepTime    = parseInt(document.getElementById('rfPrepTime').value);
  const cookTime    = parseInt(document.getElementById('rfCookTime').value || 0);
  const description = document.getElementById('rfDescription').value.trim();
  if (!name || !country || !category || !description || !prepTime) {
    showFormError('recipeFormError', t('err_fill_fields')); return;
  }
  const ingredients = [...document.querySelectorAll('.ingredient-row')].map(row => ({
    qty: parseFloat(row.querySelector('.ing-qty').value) || 0,
    unit: row.querySelector('.ing-unit').value,
    name: row.querySelector('.ing-name').value,
    note: row.querySelector('.ing-note').value,
  })).filter(i => i.name);
  if (!ingredients.length) { showFormError('recipeFormError', 'Agrega al menos un ingrediente'); return; }
  const steps = [...document.querySelectorAll('.step-row')].map(row => ({
    text: row.querySelector('.step-text').value,
    tip:  row.querySelector('.step-tip').value,
  })).filter(s => s.text);
  const tags = [];
  if (document.getElementById('rfVeg').checked)   tags.push('vegetarian');
  if (document.getElementById('rfVegan').checked) tags.push('vegan');
  if (document.getElementById('rfGF').checked)    tags.push('glutenfree');
  if (document.getElementById('rfSpicy').checked) tags.push('spicy');
  const photoPreview = document.getElementById('photoPreview');
  const photo = !photoPreview.classList.contains('hidden') ? photoPreview.src : null;
  const newRecipe = {
    id: 'r' + Date.now(), name, country, category, difficulty, servings,
    prepTime, cookTime, description, ingredients, steps, tags,
    emoji: STATE.selectedEmoji, photo,
    tips: document.getElementById('rfTips').value,
    rating: 0, views: 0, reviews: [],
    author: STATE.currentUser.name,
    authorEmoji: STATE.currentUser.emoji,
    authorId: STATE.currentUser.id,
    createdAt: new Date().toISOString().split('T')[0],
  };
  STATE.recipes.unshift(newRecipe);
  saveRecipes();
  closeModal('addRecipe');
  showToast(t('toast_recipe_ok'));
  resetRecipeForm();
  showPage('myRecipes');
}

function resetRecipeForm() {
  ['rfName','rfDescription','rfTips','rfPrepTime','rfCookTime'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.getElementById('ingredientsList').innerHTML = `
    <div class="ingredient-row" id="ingRow-0">
      <input type="number" placeholder="Cant." class="ing-qty" min="0" step="0.1">
      <select class="ing-unit">
        <option value="g">g</option><option value="kg">kg</option><option value="ml">ml</option>
        <option value="l">l</option><option value="taza">taza</option><option value="tbsp">cda</option>
        <option value="tsp">cdta</option><option value="pieza">pieza</option><option value="al gusto">al gusto</option>
      </select>
      <input type="text" placeholder="Ingrediente" class="ing-name">
      <input type="text" placeholder="Nota (opcional)" class="ing-note">
      <button class="ing-remove" onclick="removeIngredient(0)">✕</button>
    </div>`;
  document.getElementById('stepsList').innerHTML = `
    <div class="step-row" id="stepRow-0">
      <div style="display:flex;gap:0.5rem;align-items:center;width:100%"><div class="step-num">1</div></div>
      <textarea placeholder="Describe este paso detalladamente..." rows="3" class="step-text"></textarea>
      <input type="text" placeholder="Consejo para este paso (opcional)" class="step-tip">
    </div>`;
  STATE.currentFormStep = 1; STATE.ingredientCount = 1; STATE.stepCount = 1;
  updateFormStep(); populateEmojiGrid();
}

// ---- RATING ----
function openRating(id) {
  if (!STATE.currentUser) { showModal('login'); return; }
  STATE.currentRatingRecipeId = id;
  STATE.currentRating = 0;
  document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
  document.getElementById('ratingComment').value = '';
  showModal('rating');
}

function setRating(val) {
  STATE.currentRating = val;
  document.querySelectorAll('.star').forEach(s =>
    s.classList.toggle('active', parseInt(s.dataset.val) <= val));
}

function submitRating() {
  if (!STATE.currentRating) return;
  const r = STATE.recipes.find(x => x.id === STATE.currentRatingRecipeId);
  if (!r) return;
  if (!r.reviews) r.reviews = [];
  r.reviews.push({
    user: STATE.currentUser.name, rating: STATE.currentRating,
    comment: document.getElementById('ratingComment').value,
    date: new Date().toISOString().split('T')[0],
  });
  const avg = r.reviews.reduce((s, rv) => s + rv.rating, 0) / r.reviews.length;
  r.rating = Math.round(avg * 10) / 10;
  saveRecipes(); closeModal('rating'); showToast(t('toast_rating_ok'));
  if (currentPage === 'recipe') renderRecipeDetail(r);
}

// ---- SHARE ----
function shareRecipe(id) {
  const r = STATE.recipes.find(x => x.id === id);
  if (!r) return;
  if (navigator.share) navigator.share({ title: r.name, text: r.description, url: window.location.href });
  else { navigator.clipboard?.writeText(window.location.href); showToast('🔗 Link copiado!'); }
}

// ---- MODALS ----
function showModal(id) {
  if (id === 'addRecipe' && !STATE.currentUser) { showModal('login'); return; }
  const m = document.getElementById('modal-' + id);
  if (!m) return;
  m.classList.add('open'); document.body.style.overflow = 'hidden';
  if (id === 'addRecipe') updateFormStep();
}

function closeModal(id) {
  const m = document.getElementById('modal-' + id);
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  document.querySelectorAll('.form-error').forEach(e => e.classList.add('hidden'));
}

function switchModal(from, to) { closeModal(from); setTimeout(() => showModal(to), 200); }

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id.replace('modal-', ''));
  });
});

function showFormError(elId, msg) {
  const el = document.getElementById(elId);
  if (el) { el.textContent = msg; el.classList.remove('hidden'); }
}

// ---- TOAST ----
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- STATIC PAGES ----
function toggleFaq(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('hidden');
}

function sendContact() {
  const name  = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const msg   = document.getElementById('contactMessage').value.trim();
  if (!name || !email || !msg) { showToast(t('err_fill_fields')); return; }
  document.getElementById('contactSuccess').classList.remove('hidden');
  ['contactName','contactEmail','contactMessage'].forEach(id => document.getElementById(id).value = '');
  setTimeout(() => document.getElementById('contactSuccess').classList.add('hidden'), 5000);
}

// ---- HELPERS ----
function getCountryById(id) { return COUNTRIES.find(c => c.id === id); }

function getCountryName(id) {
  const names = {
    it:{es:'Italia',en:'Italy',pt:'Itália',fr:'Italie',de:'Italien',ja:'イタリア'},
    mx:{es:'México',en:'Mexico',pt:'México',fr:'Mexique',de:'Mexiko',ja:'メキシコ'},
    jp:{es:'Japón',en:'Japan',pt:'Japão',fr:'Japon',de:'Japan',ja:'日本'},
    fr:{es:'Francia',en:'France',pt:'França',fr:'France',de:'Frankreich',ja:'フランス'},
    in:{es:'India',en:'India',pt:'Índia',fr:'Inde',de:'Indien',ja:'インド'},
    br:{es:'Brasil',en:'Brazil',pt:'Brasil',fr:'Brésil',de:'Brasilien',ja:'ブラジル'},
    es:{es:'España',en:'Spain',pt:'Espanha',fr:'Espagne',de:'Spanien',ja:'スペイン'},
    cn:{es:'China',en:'China',pt:'China',fr:'Chine',de:'China',ja:'中国'},
    gr:{es:'Grecia',en:'Greece',pt:'Grécia',fr:'Grèce',de:'Griechenland',ja:'ギリシャ'},
    th:{es:'Tailandia',en:'Thailand',pt:'Tailândia',fr:'Thaïlande',de:'Thailand',ja:'タイ'},
    pe:{es:'Perú',en:'Peru',pt:'Peru',fr:'Pérou',de:'Peru',ja:'ペルー'},
    ma:{es:'Marruecos',en:'Morocco',pt:'Marrocos',fr:'Maroc',de:'Marokko',ja:'モロッコ'},
    us:{es:'Estados Unidos',en:'United States',pt:'Estados Unidos',fr:'États-Unis',de:'USA',ja:'アメリカ'},
    ar:{es:'Argentina',en:'Argentina',pt:'Argentina',fr:'Argentine',de:'Argentinien',ja:'アルゼンチン'},
    de:{es:'Alemania',en:'Germany',pt:'Alemanha',fr:'Allemagne',de:'Deutschland',ja:'ドイツ'},
    tr:{es:'Turquía',en:'Turkey',pt:'Turquia',fr:'Turquie',de:'Türkei',ja:'トルコ'},
    vn:{es:'Vietnam',en:'Vietnam',pt:'Vietnã',fr:'Viêt Nam',de:'Vietnam',ja:'ベトナム'},
    kr:{es:'Corea del Sur',en:'South Korea',pt:'Coreia do Sul',fr:'Corée du Sud',de:'Südkorea',ja:'韓国'},
    lb:{es:'Líbano',en:'Lebanon',pt:'Líbano',fr:'Liban',de:'Libanon',ja:'レバノン'},
    pt:{es:'Portugal',en:'Portugal',pt:'Portugal',fr:'Portugal',de:'Portugal',ja:'ポルトガル'},
    co:{es:'Colombia',en:'Colombia',pt:'Colômbia',fr:'Colombie',de:'Kolumbien',ja:'コロンビア'},
    eg:{es:'Egipto',en:'Egypt',pt:'Egito',fr:'Égypte',de:'Ägypten',ja:'エジプト'},
    gh:{es:'Ghana',en:'Ghana',pt:'Gana',fr:'Ghana',de:'Ghana',ja:'ガーナ'},
    et:{es:'Etiopía',en:'Ethiopia',pt:'Etiópia',fr:'Éthiopie',de:'Äthiopien',ja:'エチオピア'},
  };
  return names[id]?.[STATE.language] || names[id]?.es || getCountryById(id)?.name || id;
}

function getCatName(id) {
  const names = {
    main:{es:'Plato Principal',en:'Main Course',pt:'Prato Principal',fr:'Plat Principal',de:'Hauptgericht',ja:'メインディッシュ'},
    soup:{es:'Sopas & Caldos',en:'Soups & Broths',pt:'Sopas',fr:'Soupes',de:'Suppen',ja:'スープ'},
    appetizer:{es:'Entrantes',en:'Appetizers',pt:'Entradas',fr:'Entrées',de:'Vorspeisen',ja:'前菜'},
    dessert:{es:'Postres',en:'Desserts',pt:'Sobremesas',fr:'Desserts',de:'Desserts',ja:'デザート'},
    bread:{es:'Panes & Masas',en:'Breads',pt:'Pães',fr:'Pains',de:'Brot',ja:'パン'},
    breakfast:{es:'Desayunos',en:'Breakfasts',pt:'Cafés da Manhã',fr:'Petit-déjeuner',de:'Frühstück',ja:'朝食'},
    snack:{es:'Snacks',en:'Snacks',pt:'Lanches',fr:'Collations',de:'Snacks',ja:'おやつ'},
    drink:{es:'Bebidas',en:'Drinks',pt:'Bebidas',fr:'Boissons',de:'Getränke',ja:'飲み物'},
    sauce:{es:'Salsas',en:'Sauces',pt:'Molhos',fr:'Sauces',de:'Saucen',ja:'ソース'},
    rice:{es:'Arroces',en:'Rice Dishes',pt:'Arroz',fr:'Riz',de:'Reisgerichte',ja:'ご飯'},
    pasta:{es:'Pastas',en:'Pasta',pt:'Massas',fr:'Pâtes',de:'Pasta',ja:'パスタ'},
    seafood:{es:'Mariscos',en:'Seafood',pt:'Frutos do Mar',fr:'Fruits de Mer',de:'Meeresfrüchte',ja:'海鮮'},
  };
  return names[id]?.[STATE.language] || names[id]?.es || id;
}

function countRecipesByCountry(id)  { return STATE.recipes.filter(r => r.country === id && !r.hidden).length; }
function countRecipesByCategory(id) { return STATE.recipes.filter(r => r.category === id && !r.hidden).length; }

function populateSelects() {
  ['regCountry','rfCountry'].forEach(sid => {
    const el = document.getElementById(sid);
    if (!el) return;
    COUNTRIES.forEach(c => el.add(new Option(`${c.flag} ${c.name}`, c.id)));
  });
  const catEl = document.getElementById('rfCategory');
  if (catEl) CATEGORIES.forEach(c => catEl.add(new Option(`${c.emoji} ${c.name}`, c.id)));
}

// ============================================
//  ADMIN PANEL
// ============================================

function isAdmin() { return STATE.currentUser?.role === 'admin'; }
function isMod()   { return STATE.currentUser?.role === 'admin' || STATE.currentUser?.role === 'moderator'; }

function updateAdminLink() {
  const link = document.getElementById('adminMenuLink');
  if (link) link.classList.toggle('hidden', !isMod());
}

function renderAdminPage() {
  if (!isMod()) { showToast(t('admin_access_denied')); showPage('home'); return; }
  adminTab('dashboard');
}

function adminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-nav-btn').forEach(b => b.classList.remove('active'));
  const tabEl = document.getElementById('admin-tab-' + tab);
  const btnEl = document.getElementById('atab-' + tab);
  if (tabEl) tabEl.classList.add('active');
  if (btnEl) btnEl.classList.add('active');
  switch (tab) {
    case 'dashboard':       renderAdminDashboard(); break;
    case 'recipes':         renderAdminRecipes(); populateAdminRecipeFilters(); break;
    case 'users':           renderAdminUsers(); break;
    case 'reviews':         renderAdminReviews(); break;
    case 'site-general':    loadSiteGeneralForm(); break;
    case 'site-design':     loadSiteDesignForm(); break;
    case 'site-content':    loadSiteContentForm(); break;
    case 'site-banner':     loadSiteBannerForm(); break;
    case 'site-categories': renderAdminCategories(); break;
    case 'site-countries':  renderAdminCountries(); break;
  }
}

function renderAdminDashboard() {
  const totalRecipes = STATE.recipes.length;
  const totalUsers   = STATE.users.length;
  const totalViews   = STATE.recipes.reduce((s, r) => s + (r.views || 0), 0);
  const totalReviews = STATE.recipes.reduce((s, r) => s + (r.reviews?.length || 0), 0);
  document.getElementById('adminStatsGrid').innerHTML = `
    <div class="admin-stat-card accent"><span class="admin-stat-icon">🍳</span><div class="admin-stat-info"><strong>${totalRecipes}</strong><span>Recetas</span></div></div>
    <div class="admin-stat-card blue"><span class="admin-stat-icon">👥</span><div class="admin-stat-info"><strong>${totalUsers}</strong><span>Usuarios</span></div></div>
    <div class="admin-stat-card gold"><span class="admin-stat-icon">👁️</span><div class="admin-stat-info"><strong>${totalViews.toLocaleString()}</strong><span>Vistas totales</span></div></div>
    <div class="admin-stat-card green"><span class="admin-stat-icon">⭐</span><div class="admin-stat-info"><strong>${totalReviews}</strong><span>Reseñas</span></div></div>
    <div class="admin-stat-card"><span class="admin-stat-icon">🌍</span><div class="admin-stat-info"><strong>${COUNTRIES.length}</strong><span>Países</span></div></div>
    <div class="admin-stat-card"><span class="admin-stat-icon">🏷️</span><div class="admin-stat-info"><strong>${CATEGORIES.length}</strong><span>Categorías</span></div></div>`;
  const recent = [...STATE.recipes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  document.getElementById('adminRecentRecipes').innerHTML = recent.map(r => `
    <div class="admin-recent-item" onclick="openRecipe('${r.id}')">
      <span class="admin-recent-emoji">${r.emoji}</span>
      <div class="admin-recent-info"><strong>${r.name}</strong><span>${getCountryById(r.country)?.flag || ''} ${getCountryName(r.country)} · ${r.author}</span></div>
      <span class="admin-recent-meta">${r.createdAt}</span>
    </div>`).join('');
  const recentUsers = [...STATE.users].slice(-5).reverse();
  document.getElementById('adminRecentUsers').innerHTML = recentUsers.map(u => `
    <div class="admin-recent-item">
      <span class="admin-recent-emoji">${u.emoji || '👤'}</span>
      <div class="admin-recent-info"><strong>${u.name}</strong><span>${u.email}</span></div>
      <span class="status-badge role-${u.role || 'user'}">${u.role || 'user'}</span>
    </div>`).join('');
  const maxCat = Math.max(...CATEGORIES.map(c => countRecipesByCategory(c.id)), 1);
  document.getElementById('adminCategoryChart').innerHTML = CATEGORIES.map(c => {
    const count = countRecipesByCategory(c.id);
    return `<div class="chart-bar-row">
      <span class="chart-bar-label">${c.emoji} ${getCatName(c.id)}</span>
      <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${Math.round((count/maxCat)*100)}%"></div></div>
      <span class="chart-bar-val">${count}</span>
    </div>`;
  }).join('');
}

function populateAdminRecipeFilters() {
  const sel = document.getElementById('adminRecipeFilter');
  if (sel && sel.options.length <= 1)
    COUNTRIES.forEach(c => sel.add(new Option(`${c.flag} ${getCountryName(c.id)}`, c.id)));
}

function renderAdminRecipes() {
  const search  = document.getElementById('adminRecipeSearch')?.value.toLowerCase() || '';
  const country = document.getElementById('adminRecipeFilter')?.value || '';
  const status  = document.getElementById('adminRecipeStatusFilter')?.value || '';
  const recipes = STATE.recipes.filter(r => {
    if (search && !r.name.toLowerCase().includes(search) && !r.author?.toLowerCase().includes(search)) return false;
    if (country && r.country !== country) return false;
    if (status === 'hidden'  && !r.hidden)  return false;
    if (status === 'flagged' && !r.flagged) return false;
    if (status === 'active'  && (r.hidden || r.flagged)) return false;
    return true;
  });
  document.getElementById('adminRecipesBody').innerHTML = recipes.map(r => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:0.5rem">
        <span style="font-size:1.4rem">${r.emoji}</span>
        <div><strong>${r.name}</strong><br><span style="color:var(--text3);font-size:0.78rem">${r.id}</span></div>
      </div></td>
      <td>${getCountryById(r.country)?.flag || ''} ${getCountryName(r.country)}</td>
      <td>${r.author || '—'}</td>
      <td>★ ${r.rating || 0}</td>
      <td>${(r.views || 0).toLocaleString()}</td>
      <td><span class="status-badge ${r.hidden ? 'status-hidden' : r.flagged ? 'status-flagged' : 'status-active'}">
        ${r.hidden ? t('admin_status_hidden') : r.flagged ? t('admin_status_flagged') : t('admin_status_active')}
      </span></td>
      <td><div class="admin-action-btns">
        <button class="action-btn" onclick="openRecipe('${r.id}');showPage('recipe')">${t('admin_btn_view')}</button>
        <button class="action-btn ${r.hidden ? 'success' : 'danger'}" onclick="adminToggleHide('${r.id}')">
          ${r.hidden ? t('admin_btn_show') : t('admin_btn_hide')}
        </button>
        <button class="action-btn danger" onclick="adminDeleteRecipe('${r.id}')">${t('admin_btn_delete')}</button>
      </div></td>
    </tr>`).join('');
}

function adminToggleHide(id) {
  const r = STATE.recipes.find(x => x.id === id);
  if (!r) return;
  r.hidden = !r.hidden; saveRecipes(); renderAdminRecipes();
  showToast(r.hidden ? t('admin_toast_hidden') : t('admin_toast_visible'));
}

function adminDeleteRecipe(id) {
  if (!confirm(t('admin_delete_recipe_confirm'))) return;
  STATE.recipes = STATE.recipes.filter(r => r.id !== id);
  saveRecipes(); renderAdminRecipes(); showToast(t('admin_toast_recipe_deleted'));
}

function renderAdminUsers() {
  const search     = document.getElementById('adminUserSearch')?.value.toLowerCase() || '';
  const roleFilter = document.getElementById('adminUserRoleFilter')?.value || '';
  const users = STATE.users.filter(u => {
    if (search && !u.name.toLowerCase().includes(search) && !u.email.toLowerCase().includes(search)) return false;
    if (roleFilter && (u.role || 'user') !== roleFilter) return false;
    return true;
  });
  document.getElementById('adminUsersBody').innerHTML = users.map(u => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:0.6rem">
        <span style="font-size:1.5rem">${u.emoji || '👤'}</span>
        <div><strong>${u.name}</strong><br><span style="color:var(--text3);font-size:0.78rem">${u.username || ''}</span></div>
      </div></td>
      <td>${u.email}</td>
      <td>${getCountryById(u.country)?.flag || ''} ${getCountryName(u.country)}</td>
      <td><span class="status-badge role-${u.role || 'user'}">${u.role || 'user'}</span></td>
      <td>${u.createdAt || '—'}</td>
      <td>${STATE.recipes.filter(r => r.authorId === u.id).length}</td>
      <td><div class="admin-action-btns">
        ${u.id !== 'admin' ? `
          <select class="action-btn" onchange="adminChangeRole('${u.id}',this.value)">
            <option value="user"      ${(u.role||'user')==='user'      ?'selected':''}>user</option>
            <option value="moderator" ${u.role==='moderator'           ?'selected':''}>moderator</option>
            <option value="admin"     ${u.role==='admin'               ?'selected':''}>admin</option>
            <option value="banned"    ${u.role==='banned'              ?'selected':''}>banned</option>
          </select>
          <button class="action-btn danger" onclick="adminDeleteUser('${u.id}')">🗑</button>
        ` : `<span style="color:var(--text3);font-size:0.8rem">${t('admin_protected')}</span>`}
      </div></td>
    </tr>`).join('');
}

function adminChangeRole(userId, newRole) {
  if (userId === 'admin') { showToast(t('admin_protected_admin')); return; }
  const u = STATE.users.find(x => x.id === userId);
  if (!u) return;
  u.role = newRole; saveUsers();
  if (STATE.currentUser?.id === userId) { STATE.currentUser.role = newRole; saveUser(); updateAdminLink(); }
  showToast(t('admin_role_changed') + ': ' + u.name + ' → ' + newRole);
}

function adminDeleteUser(userId) {
  if (userId === 'admin') { showToast(t('admin_protected_delete')); return; }
  if (!confirm(t('admin_delete_user_confirm'))) return;
  STATE.users = STATE.users.filter(u => u.id !== userId);
  saveUsers(); renderAdminUsers(); showToast(t('admin_toast_user_deleted'));
}

function renderAdminReviews() {
  let html = '';
  STATE.recipes.forEach(r => {
    (r.reviews || []).forEach((rv, idx) => {
      html += `
        <div class="admin-review-item">
          <span style="font-size:1.5rem">👤</span>
          <div class="admin-review-body">
            <div class="admin-review-meta">
              <strong>${rv.user}</strong> en <strong>${r.name}</strong> · ${'★'.repeat(rv.rating)} · ${rv.date}
            </div>
            <p class="admin-review-text">${rv.comment || '(sin comentario)'}</p>
          </div>
          <div class="admin-review-actions">
            <button class="action-btn danger" onclick="adminDeleteReview('${r.id}',${idx})">${t('admin_btn_delete')}</button>
          </div>
        </div>`;
    });
  });
  document.getElementById('adminReviewsList').innerHTML = html || `<p style="color:var(--text3);padding:1rem">${t('admin_no_reviews')}</p>`;
}

function adminDeleteReview(recipeId, idx) {
  if (!confirm(t('admin_delete_review_confirm'))) return;
  const r = STATE.recipes.find(x => x.id === recipeId);
  if (!r || !r.reviews) return;
  r.reviews.splice(idx, 1);
  const avg = r.reviews.length ? r.reviews.reduce((s, rv) => s + rv.rating, 0) / r.reviews.length : 0;
  r.rating = Math.round(avg * 10) / 10;
  saveRecipes(); renderAdminReviews(); showToast(t('admin_toast_review_deleted'));
}

function loadSiteGeneralForm() {
  const c = STATE.siteConfig;
  document.getElementById('cfg-siteName').value       = c.siteName || '';
  document.getElementById('cfg-tagline').value        = c.tagline || '';
  document.getElementById('cfg-contactEmail').value   = c.contactEmail || '';
  document.getElementById('cfg-allowRegistration').checked = c.allowRegistration !== false;
  document.getElementById('cfg-allowRecipeUpload').checked = c.allowRecipeUpload !== false;
  document.getElementById('cfg-maintenanceMode').checked   = !!c.maintenanceMode;
}

function saveSiteGeneral() {
  STATE.siteConfig.siteName          = document.getElementById('cfg-siteName').value;
  STATE.siteConfig.tagline           = document.getElementById('cfg-tagline').value;
  STATE.siteConfig.contactEmail      = document.getElementById('cfg-contactEmail').value;
  STATE.siteConfig.allowRegistration = document.getElementById('cfg-allowRegistration').checked;
  STATE.siteConfig.allowRecipeUpload = document.getElementById('cfg-allowRecipeUpload').checked;
  STATE.siteConfig.maintenanceMode   = document.getElementById('cfg-maintenanceMode').checked;
  saveSiteConfig(); showToast(t('admin_config_saved'));
}

function loadSiteDesignForm() {
  const c = STATE.siteConfig;
  setColorField('accentColor',  c.accentColor  || '#C8401A');
  setColorField('accentColor2', c.accentColor2 || '#E8742A');
  setColorField('goldColor',    c.goldColor    || '#D4A017');
}

function setColorField(key, val) {
  const picker   = document.getElementById('cfg-' + key);
  const hexInput = document.getElementById('cfg-' + key + 'Hex');
  if (picker)   picker.value   = val;
  if (hexInput) hexInput.value = val;
}

function syncColorHex(key) {
  const hexInput = document.getElementById('cfg-' + key + 'Hex');
  const picker   = document.getElementById('cfg-' + key);
  if (!hexInput || !picker) return;
  if (/^#[0-9A-Fa-f]{6}$/.test(hexInput.value.trim())) { picker.value = hexInput.value.trim(); previewColor(); }
}

function previewColor() {
  const a  = document.getElementById('cfg-accentColor')?.value  || '#C8401A';
  const a2 = document.getElementById('cfg-accentColor2')?.value || '#E8742A';
  const g  = document.getElementById('cfg-goldColor')?.value    || '#D4A017';
  document.getElementById('cfg-accentColorHex').value  = a;
  document.getElementById('cfg-accentColor2Hex').value = a2;
  document.getElementById('cfg-goldColorHex').value    = g;
  document.querySelectorAll('.dp-btn-primary').forEach(el => el.style.background = a);
  document.querySelectorAll('.dp-eyebrow').forEach(el => { el.style.color = a; el.style.background = a + '18'; });
  document.querySelectorAll('#dp-em').forEach(el => el.style.color = a);
  document.querySelectorAll('.dp-card-rating').forEach(el => el.style.color = g);
}

function applyColorPreset(name) {
  const presets = {
    tomato:    { accentColor:'#C8401A', accentColor2:'#E8742A', goldColor:'#D4A017' },
    olive:     { accentColor:'#5C7A2A', accentColor2:'#7CA03A', goldColor:'#B89A10' },
    ocean:     { accentColor:'#1A5C8C', accentColor2:'#2A7AB8', goldColor:'#D4A017' },
    purple:    { accentColor:'#6B2DA8', accentColor2:'#8B4DC8', goldColor:'#C8A020' },
    chocolate: { accentColor:'#5C2A0A', accentColor2:'#7A3A10', goldColor:'#C8961A' },
  };
  const p = presets[name]; if (!p) return;
  setColorField('accentColor', p.accentColor);
  setColorField('accentColor2', p.accentColor2);
  setColorField('goldColor', p.goldColor);
  previewColor();
}

function saveSiteDesign() {
  STATE.siteConfig.accentColor  = document.getElementById('cfg-accentColor').value;
  STATE.siteConfig.accentColor2 = document.getElementById('cfg-accentColor2').value;
  STATE.siteConfig.goldColor    = document.getElementById('cfg-goldColor').value;
  saveSiteConfig(); showToast(t('admin_design_saved'));
}

function loadSiteContentForm() {
  const c = STATE.siteConfig;
  document.getElementById('cfg-heroTitle').value       = c.heroTitle || '';
  document.getElementById('cfg-heroDesc').value        = c.heroDesc || '';
  document.getElementById('cfg-aboutMission').value    = c.aboutMission || '';
  document.getElementById('cfg-socialInstagram').value = c.socialInstagram || '';
  document.getElementById('cfg-socialTwitter').value   = c.socialTwitter || '';
  document.getElementById('cfg-socialYoutube').value   = c.socialYoutube || '';
  document.getElementById('cfg-socialTiktok').value    = c.socialTiktok || '';
  document.getElementById('cfg-footerText').value      = c.footerText || '';
}

function saveSiteContent() {
  STATE.siteConfig.heroTitle       = document.getElementById('cfg-heroTitle').value;
  STATE.siteConfig.heroDesc        = document.getElementById('cfg-heroDesc').value;
  STATE.siteConfig.aboutMission    = document.getElementById('cfg-aboutMission').value;
  STATE.siteConfig.socialInstagram = document.getElementById('cfg-socialInstagram').value;
  STATE.siteConfig.socialTwitter   = document.getElementById('cfg-socialTwitter').value;
  STATE.siteConfig.socialYoutube   = document.getElementById('cfg-socialYoutube').value;
  STATE.siteConfig.socialTiktok    = document.getElementById('cfg-socialTiktok').value;
  STATE.siteConfig.footerText      = document.getElementById('cfg-footerText').value;
  saveSiteConfig();
  showToast(t('admin_content_saved'));
  const heroTitle = document.querySelector('.hero-title');
  const heroDesc  = document.querySelector('.hero-desc');
  if (heroTitle && STATE.siteConfig.heroTitle) heroTitle.innerHTML = STATE.siteConfig.heroTitle;
  if (heroDesc  && STATE.siteConfig.heroDesc)  heroDesc.textContent = STATE.siteConfig.heroDesc;
}

function loadSiteBannerForm() {
  const c = STATE.siteConfig;
  document.getElementById('cfg-bannerEnabled').checked = !!c.bannerEnabled;
  document.getElementById('cfg-bannerText').value      = c.bannerText || '';
  setColorField('bannerColor', c.bannerColor || '#C8401A');
  previewBanner();
}

function previewBanner() {
  const enabled = document.getElementById('cfg-bannerEnabled')?.checked;
  const text    = document.getElementById('cfg-bannerText')?.value || 'Vista previa del banner';
  const color   = document.getElementById('cfg-bannerColor')?.value || '#C8401A';
  const hexEl   = document.getElementById('cfg-bannerColorHex');
  if (hexEl) hexEl.value = color;
  const box = document.getElementById('bannerPreviewBox');
  if (box) {
    box.textContent = enabled ? text : '(Banner desactivado)';
    box.style.background = enabled ? color : 'var(--border)';
    box.style.color = enabled ? 'white' : 'var(--text3)';
  }
}

function saveSiteBanner() {
  STATE.siteConfig.bannerEnabled = document.getElementById('cfg-bannerEnabled').checked;
  STATE.siteConfig.bannerText    = document.getElementById('cfg-bannerText').value;
  STATE.siteConfig.bannerColor   = document.getElementById('cfg-bannerColor').value;
  saveSiteConfig(); showToast(t('admin_banner_saved'));
}

function renderAdminCategories() {
  document.getElementById('adminCategoryList').innerHTML = CATEGORIES.map((c, i) => `
    <div class="admin-cat-item">
      <span class="admin-cat-emoji">${c.emoji}</span>
      <span class="admin-cat-name">${c.name}</span>
      <span class="admin-cat-count">${countRecipesByCategory(c.id)} recetas</span>
      <div class="admin-cat-actions">
        <button class="action-btn" onclick="adminEditCategory(${i})">✏️ Editar</button>
        <button class="action-btn danger" onclick="adminDeleteCategory(${i})">${t('admin_btn_delete')}</button>
      </div>
    </div>`).join('');
}

function adminEditCategory(idx) {
  const c = CATEGORIES[idx];
  const emoji = prompt('Emoji:', c.emoji);
  const name  = prompt('Nombre:', c.name);
  if (emoji && name) { CATEGORIES[idx].emoji = emoji; CATEGORIES[idx].name = name; renderAdminCategories(); showToast(t('admin_toast_cat_updated')); }
}

function adminDeleteCategory(idx) {
  if (!confirm(t('admin_toast_cat_deleted') + '?')) return;
  CATEGORIES.splice(idx, 1); renderAdminCategories(); showToast(t('admin_toast_cat_deleted'));
}

function addCategory() {
  const emoji = document.getElementById('newCatEmoji').value.trim();
  const name  = document.getElementById('newCatName').value.trim();
  if (!emoji || !name) { showToast(t('admin_fill_emoji_name')); return; }
  const id = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z_]/g, '');
  CATEGORIES.push({ id, name, emoji, count: 0 });
  document.getElementById('newCatEmoji').value = '';
  document.getElementById('newCatName').value  = '';
  renderAdminCategories(); showToast(t('admin_toast_cat_added'));
}

function renderAdminCountries() {
  document.getElementById('adminCountryGrid').innerHTML = COUNTRIES.map((c, i) => `
    <div class="admin-country-item ${c.hidden ? 'disabled' : ''}">
      <span class="admin-country-flag">${c.flag}</span>
      <span class="admin-country-name">${c.name}</span>
      <button class="action-btn ${c.hidden ? 'success' : 'danger'}" onclick="adminToggleCountry(${i})">
        ${c.hidden ? t('admin_btn_show') : t('admin_btn_hide')}
      </button>
    </div>`).join('');
}

function adminToggleCountry(idx) {
  COUNTRIES[idx].hidden = !COUNTRIES[idx].hidden;
  renderAdminCountries();
  showToast(COUNTRIES[idx].hidden ? t('admin_toast_country_hidden') : t('admin_toast_country_visible'));
}

function addCountry() {
  const flag = document.getElementById('newCountryFlag').value.trim();
  const id   = document.getElementById('newCountryId').value.trim().toLowerCase();
  const name = document.getElementById('newCountryName').value.trim();
  if (!flag || !id || !name) { showToast(t('admin_fill_country')); return; }
  if (COUNTRIES.find(c => c.id === id)) { showToast(t('admin_country_exists')); return; }
  COUNTRIES.push({ id, name, flag, count: 0 });
  document.getElementById('newCountryFlag').value = '';
  document.getElementById('newCountryId').value   = '';
  document.getElementById('newCountryName').value = '';
  renderAdminCountries(); showToast(t('admin_toast_country_added'));
}
