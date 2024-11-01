const alimentos = {
  "Cereais e Pseudo-Cereais": {
    "Arroz integral cru": 71.6,
    "Arroz integral cozido": 33.3,
    "Arroz agulha cru": 78.1,
    "Arroz solto cozido": 28,
    "Arroz de cenoura/tomate": 20,
    "Arroz de ervilhas": 18,
    "Arroz de feijão": 20.8,
    "Arroz de tomate malandrinho": 16.8,
    "Massa crua": 71.1,
    "Massa cozida al dente": 34.3,
    "Massa bem cozida": 19.9,
    "Bulgur/Couscous cru": 67.5,
    "Couscous cozido": 22.2,
    "Milho doce em conserva": 18.4,
    "Millet cru": 72.9,
    "Trigo Sarraceno grão cru": 61.5,
    "Quinoa crua": 62
  },
  "Batata": {
    "Batata crua com pele": 16.7,
    "Batata crua": 19.2,
    "Batata cozida": 18.5,
    "Batata assada no forno": 24.8,
    "Puré de batata": 16.8,
    "Batata-doce crua com pele": 21.8,
    "Batata-doce crua ou assada": 28.3
  },
  "Leguminosas": {
    "Ervilhas congeladas cozidas": 7.5,
    "Ervilhas estufadas": 9.6,
    "Favas cozidas": 7.4,
    "Feijão branco cozido": 14.6,
    "Feijão frade cozido": 18.1,
    "Feijão manteiga cozido": 14,
    "Grão-de-bico cozido": 16.7,
    "Lentilhas secas cozidas": 16.7,
    "Soja grão seco cru": 18.3,
    "Tremoço cozido": 7.2
  },
  "Pão": {
    "Pão de trigo branco": 57.3,
    "Pão de trigo integral": 39.9,
    "Pão de trigo integral com sementes": 43.2,
    "Pão de centeio": 56.4,
    "Pão de centeio integral": 41.3,
    "Pão de mistura": 53.8,
    "Pão de milho": 37.2,
    "Pão ralado": 71.6,
    "Gressino": 67,
    "Tosta de trigo": 69.7,
    "Tosta de trigo integral": 62.6
  },
  "Bolachas": {
    "Bolacha água e sal redonda": 61,
    "Bolacha tipo Cream craker": 61.6,
    "Bolacha integral": 65.5,
    "Bolacha tipo Maria": 72
  },
  "Farinhas": {
    "Amido de milho": 90.2,
    "Farinha de milho": 75.3,
    "Farinha de trigo tipo 55": 74.3,
    "Farinha de trigo integral": 65.2,
    "Farinha de alfarroba": 85.6,
    "Farinha de amêndoa": 4.9,
    "Farinha de aveia": 57,
    "Farinha de espelta": 69.8,
    "Farinha de mandioca": 84.6,
    "Flocos de aveia": 61.7,
    "Tapioca": 87.5
  },
  "Sopas": {
    "De vegetais s/batata/feijão/massa": 1.2,
    "Puré de vegetais com batata": 5.5,
    "De agrião com batata": 4.2,
    "Caldo verde com batata": 5.3,
    "De ervilhas com batata": 6.4,
    "De peixe com massa": 5.8,
    "Canja de galinha com arroz": 5.8
  },
  "Fruta Fresca": {
    "Abacate": 2.3,
    "Alperce/Damasco": 8.5,
    "Ameixa branca": 7.8,
    "Ameixa encarnada": 7.4,
    "Ameixa rainha cláudia": 11.8,
    "Amora": 4.5,
    "Ananás": 9.5,
    "Anona": 16.8,
    "Banana": 21.8,
    "Carambola": 7.1,
    "Cereja": 13.3,
    "Clementina": 11.1,
    "Diospiro": 14.8,
    "Figo": 16.3,
    "Framboesa": 5.1,
    "Kiwi": 10.9,
    "Laranja": 8.9,
    "Lichia fresca": 14.8,
    "Maçã ingerida com casca": 13.4,
    "Maçã ingerida sem casca": 12.7,
    "Maçã cozida sem açúcar": 10.5,
    "Maçã assada sem açúcar": 15.7,
    "Manga": 11.7,
    "Marmelo": 9.3,
    "Melancia": 5.5,
    "Melão": 5.7,
    "Meloa": 4.2,
    "Mirtilo": 6.4,
    "Morango": 5.3,
    "Nectarina": 8.7,
    "Nêspera": 10.2,
    "Papaia": 9.1,
    "Pêra": 9.4,
    "Pêra cozida sem açúcar": 7.8,
    "Pêssego": 8.1,
    "Romã": 12,
    "Tangerina": 8.7,
    "Uva branca": 17.3,
    "Uva tinta": 18.6,
    "Salada de fruta sem calda": 9.2
  },
  "Laticínios e Bebidas Vegetais": {
    "Leite de vaca": 4.9,
    "Iogurte sólido natural 0% açúcar": 5,
    "Iogurte líquido 0% açúcar": 4.4,
    "Queijo creme de barrar": 3.7,
    "Queijo fresco": 3.2,
    "Queijo quark natural": 4,
    "Requeijão": 4.6,
    "Bebida de amêndoa": 5.3,
    "Bebida de arroz": 11.8,
    "Bebida de aveia": 8.2,
    "Bebida de soja natural s/ açúcar": 0.4
  },
  "Pratos Mistos e Cozinhados": {
    "Açorda": 13.1,
    "Açorda à alentejana": 12.3,
    "Açorda de marisco": 5.4,
    "Arroz à valenciana": 7.7,
    "Arroz de cabidela": 12.2,
    "Arroz de frango": 25.2,
    "Arroz de gambas": 8.8,
    "Arroz de lulas": 6.7,
    "Arroz de marisco/de pato": 8.3,
    "Arroz de peixe": 15.5,
    "Arroz de polvo": 10.9,
    "Bacalhau à brás": 8.3,
    "Bacalhau à gomes de sá": 7.4,
    "Bacalhau com natas e queijo ralado": 7.6,
    "Douradinhos": 17.5,
    "Caldeirada de peixe": 4.4,
    "Empadão de carne com batata": 10.7,
    "Feijoada com carne de porco": 13.3,
    "Jardineira de carne com ervilhas": 5.6,
    "Lasanha à bolonhesa": 9.2,
    "Panados": 8.5,
    "Pizza queijo, tomate, fiambre": 29.2,
    "Quiche lorraine c/leite": 23.5,
    "Quiche vegetais": 12.9,
    "Salada Russa": 5.6
  },
  "Frutos Secos e Sementes": {
    "Ameixa seca": 37.8,
    "Figo seco": 58.3,
    "Tâmara": 67.3,
    "Uva passa": 67,
    "Sementes de abóbora": 13.9,
    "Sementes de cânhamo": 2.4,
    "Sementes de chia": 7.7,
    "Sementes de girassol": 17,
    "Sementes de linhaça": 18.1,
    "Sementes de papoila": 13.7,
    "Sementes de sésamo": 6.4
  }
};

let selectedIngredients = {};
const foodListDiv = document.getElementById("food-list");
const selectedListDiv = document.getElementById("selected-list");
const totalCarbsDiv = document.getElementById("total-carbs");
const searchInput = document.getElementById("search");

function renderFoodList() {
  foodListDiv.innerHTML = "";
  const searchTerm = searchInput.value.toLowerCase();

  for (const [category, items] of Object.entries(alimentos)) {
    const categoryDiv = document.createElement("div");
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);

    for (const [name, carbs] of Object.entries(items)) {
      if (name.toLowerCase().includes(searchTerm)) {
        const foodItem = document.createElement("div");
        foodItem.className = "food-item";
        foodItem.innerHTML = `<span>${name} (${carbs} g HC/100g)</span>`;
        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.onclick = () => addIngredient(name, carbs);
        foodItem.appendChild(addButton);
        categoryDiv.appendChild(foodItem);
      }
    }
    foodListDiv.appendChild(categoryDiv);
  }
}

function renderSelectedList() {
  selectedListDiv.innerHTML = "";
  let totalCarbs = 0;

  for (const [name, { carbs, grams }] of Object.entries(selectedIngredients)) {
    const itemCarbs = (carbs * grams) / 100;
    totalCarbs += itemCarbs;

    const selectedItem = document.createElement("div");
    selectedItem.className = "selected-item";
    selectedItem.innerHTML = `
      <span>${name} (${itemCarbs.toFixed(1)} g HC)</span>
      <input type="number" min="1" value="${grams}" onchange="updateGrams('${name}', this.value)" />
      <button onclick="removeIngredient('${name}')">x</button>
    `;
    selectedListDiv.appendChild(selectedItem);
  }
  totalCarbsDiv.textContent = `Total: ${totalCarbs.toFixed(1)} g HC`;
}

function addIngredient(name, carbs) {
  if (!selectedIngredients[name]) {
    selectedIngredients[name] = { carbs, grams: 100 };
  }
  renderSelectedList();
}

function removeIngredient(name) {
  delete selectedIngredients[name];
  renderSelectedList();
}

function updateGrams(name, grams) {
  selectedIngredients[name].grams = parseInt(grams);
  renderSelectedList();
}

searchInput.addEventListener("input", renderFoodList);
renderFoodList();