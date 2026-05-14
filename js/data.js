// ============================================
//  COOKIWIKI — Data Layer (80+ recetas)
// ============================================

const COUNTRIES = [
  { id: 'it', name: 'Italia',          flag: '🇮🇹', count: 0 },
  { id: 'mx', name: 'México',          flag: '🇲🇽', count: 0 },
  { id: 'jp', name: 'Japón',           flag: '🇯🇵', count: 0 },
  { id: 'fr', name: 'Francia',         flag: '🇫🇷', count: 0 },
  { id: 'in', name: 'India',           flag: '🇮🇳', count: 0 },
  { id: 'br', name: 'Brasil',          flag: '🇧🇷', count: 0 },
  { id: 'es', name: 'España',          flag: '🇪🇸', count: 0 },
  { id: 'cn', name: 'China',           flag: '🇨🇳', count: 0 },
  { id: 'gr', name: 'Grecia',          flag: '🇬🇷', count: 0 },
  { id: 'th', name: 'Tailandia',       flag: '🇹🇭', count: 0 },
  { id: 'pe', name: 'Perú',            flag: '🇵🇪', count: 0 },
  { id: 'ma', name: 'Marruecos',       flag: '🇲🇦', count: 0 },
  { id: 'us', name: 'Estados Unidos',  flag: '🇺🇸', count: 0 },
  { id: 'ar', name: 'Argentina',       flag: '🇦🇷', count: 0 },
  { id: 'de', name: 'Alemania',        flag: '🇩🇪', count: 0 },
  { id: 'tr', name: 'Turquía',         flag: '🇹🇷', count: 0 },
  { id: 'vn', name: 'Vietnam',         flag: '🇻🇳', count: 0 },
  { id: 'kr', name: 'Corea del Sur',   flag: '🇰🇷', count: 0 },
  { id: 'lb', name: 'Líbano',          flag: '🇱🇧', count: 0 },
  { id: 'pt', name: 'Portugal',        flag: '🇵🇹', count: 0 },
  { id: 'co', name: 'Colombia',        flag: '🇨🇴', count: 0 },
  { id: 'eg', name: 'Egipto',          flag: '🇪🇬', count: 0 },
  { id: 'gh', name: 'Ghana',           flag: '🇬🇭', count: 0 },
  { id: 'et', name: 'Etiopía',         flag: '🇪🇹', count: 0 },
  { id: 'ng', name: 'Nigeria',         flag: '🇳🇬', count: 0 },
  { id: 'ru', name: 'Rusia',           flag: '🇷🇺', count: 0 },
];

const CATEGORIES = [
  { id: 'main',      name: 'Plato Principal', emoji: '🍽️', count: 0 },
  { id: 'soup',      name: 'Sopas & Caldos',  emoji: '🍜', count: 0 },
  { id: 'appetizer', name: 'Entrantes',        emoji: '🥗', count: 0 },
  { id: 'dessert',   name: 'Postres',          emoji: '🍮', count: 0 },
  { id: 'bread',     name: 'Panes & Masas',   emoji: '🍞', count: 0 },
  { id: 'breakfast', name: 'Desayunos',        emoji: '🥞', count: 0 },
  { id: 'snack',     name: 'Snacks',           emoji: '🫙', count: 0 },
  { id: 'drink',     name: 'Bebidas',          emoji: '🧃', count: 0 },
  { id: 'sauce',     name: 'Salsas',           emoji: '🫕', count: 0 },
  { id: 'rice',      name: 'Arroces',          emoji: '🍚', count: 0 },
  { id: 'pasta',     name: 'Pastas',           emoji: '🍝', count: 0 },
  { id: 'seafood',   name: 'Mariscos',         emoji: '🦞', count: 0 },
];

const DIET_EMOJIS = {
  vegetarian: '🌿',
  vegan:      '🌱',
  glutenfree: '🌾',
  spicy:      '🌶️',
};

const FOOD_EMOJIS = [
  '🍕','🍜','🥘','🍣','🥗','🍲','🥙','🫕','🍛','🍱',
  '🥩','🍖','🥞','🧆','🥚','🥑','🌮','🫔','🍤','🥟',
  '🍝','🍚','🦐','🫙','🧄','🫛','🥦','🍆','🌽','🥕',
];

// ============================================================
//  SEED RECIPES — 80 recetas de 20+ países
// ============================================================
const SEED_RECIPES = [

  // ============================
  //  🇮🇹 ITALIA (8)
  // ============================
  {
    id:'r01', name:'Pasta Carbonara', country:'it', category:'pasta', emoji:'🍝',
    difficulty:'medium', servings:4, prepTime:10, cookTime:20, rating:4.9, views:8420,
    author:'Marco Vitali', authorId:'demo', tags:[],
    description:'La auténtica carbonara romana sin crema. Cremosa, sedosa y lista en 30 minutos.',
    ingredients:[
      {qty:400,unit:'g',name:'Spaghetti',note:''},
      {qty:200,unit:'g',name:'Guanciale o panceta',note:'en cubos'},
      {qty:4,unit:'pieza',name:'Yemas de huevo',note:''},
      {qty:1,unit:'pieza',name:'Huevo entero',note:''},
      {qty:100,unit:'g',name:'Pecorino romano rallado',note:''},
      {qty:1,unit:'al gusto',name:'Pimienta negra',note:'abundante'},
      {qty:1,unit:'al gusto',name:'Sal',note:''},
    ],
    steps:[
      {text:'Cocina la pasta en agua con sal. Reserva 200 ml del agua de cocción.',tip:'Retira la pasta 2 min antes del tiempo indicado'},
      {text:'Fríe el guanciale en cubos a fuego medio hasta que esté crujiente. Retira del fuego.',tip:''},
      {text:'Mezcla yemas, huevo, pecorino y pimienta hasta obtener una crema.',tip:''},
      {text:'Añade la pasta caliente al guanciale. Fuera del fuego, agrega la crema de huevo y mezcla añadiendo agua de cocción poco a poco.',tip:'El calor de la pasta cocina el huevo sin cuajarlo'},
      {text:'Sirve inmediatamente con más pecorino y pimienta recién molida.',tip:''},
    ],
    tips:'Nunca uses crema. El secreto está en el agua de la pasta para emulsionar.',
    reviews:[{user:'Ana L.',rating:5,comment:'¡Perfecta! La mejor que he hecho.',date:'2025-11-12'}],
    createdAt:'2025-10-01'
  },
  {
    id:'r02', name:'Pizza Margherita Napolitana', country:'it', category:'main', emoji:'🍕',
    difficulty:'medium', servings:4, prepTime:30, cookTime:15, rating:4.8, views:6100,
    author:'Sofia Romano', authorId:'demo', tags:['vegetarian'],
    description:'La reina de las pizzas. Masa fina y aireada, tomate San Marzano, mozzarella fresca y albahaca.',
    ingredients:[
      {qty:500,unit:'g',name:'Harina 00',note:''},
      {qty:320,unit:'ml',name:'Agua tibia',note:''},
      {qty:7,unit:'g',name:'Levadura seca',note:''},
      {qty:10,unit:'g',name:'Sal',note:''},
      {qty:400,unit:'g',name:'Tomate San Marzano triturado',note:''},
      {qty:250,unit:'g',name:'Mozzarella fresca',note:''},
      {qty:1,unit:'pieza',name:'Manojo de albahaca fresca',note:''},
      {qty:3,unit:'tbsp',name:'Aceite de oliva virgen extra',note:''},
    ],
    steps:[
      {text:'Disuelve la levadura en agua tibia. Mezcla con harina y sal hasta obtener una masa homogénea.',tip:''},
      {text:'Amasa 10 min hasta que la masa sea elástica. Deja reposar 2 horas tapada.',tip:'La masa debe doblar su tamaño'},
      {text:'Estira la masa con las manos (no usar rodillo). Cubre con tomate y un hilo de aceite.',tip:''},
      {text:'Hornea a máxima temperatura (250°C+) 10 min. Añade mozzarella y hornea 5 min más.',tip:'Cuanto más caliente el horno, mejor'},
      {text:'Retira del horno, añade albahaca fresca y un chorrito de aceite crudo.',tip:''},
    ],
    tips:'La clave es el horno muy caliente. Si tienes piedra para pizza, úsala.',
    reviews:[],
    createdAt:'2025-10-10'
  },
  {
    id:'r03', name:'Risotto ai Funghi Porcini', country:'it', category:'rice', emoji:'🍄',
    difficulty:'medium', servings:4, prepTime:15, cookTime:30, rating:4.7, views:3200,
    author:'Marco Vitali', authorId:'demo', tags:['vegetarian', 'glutenfree'],
    description:'Risotto cremoso con porcini secos y frescos. Un clásico otoñal del norte de Italia.',
    ingredients:[
      {qty:320,unit:'g',name:'Arroz Arborio o Carnaroli',note:''},
      {qty:30,unit:'g',name:'Porcini secos',note:'remojados en agua caliente'},
      {qty:200,unit:'g',name:'Champiñones frescos',note:''},
      {qty:1,unit:'l',name:'Caldo de verduras caliente',note:''},
      {qty:1,unit:'pieza',name:'Cebolla pequeña',note:'picada'},
      {qty:80,unit:'ml',name:'Vino blanco seco',note:''},
      {qty:60,unit:'g',name:'Mantequilla',note:''},
      {qty:60,unit:'g',name:'Parmesano rallado',note:''},
    ],
    steps:[
      {text:'Sofríe la cebolla en mantequilla hasta transparente. Añade el arroz y tuesta 2 min.',tip:''},
      {text:'Agrega el vino y mezcla hasta que se evapore.',tip:''},
      {text:'Añade el caldo caliente cucharón a cucharón, mezclando constantemente.',tip:'Nunca agregues caldo frío'},
      {text:'A mitad de cocción incorpora los porcini escurridos y los champiñones salteados.',tip:''},
      {text:'Fuera del fuego, añade mantequilla fría y parmesano. Mezcla vigorosamente (mantecatura).',tip:'Este paso da la cremosidad característica'},
    ],
    tips:'El risotto te espera a ti, no tú al risotto. Nunca pares de mezclar.',
    reviews:[],
    createdAt:'2025-10-20'
  },
  {
    id:'r04', name:'Tiramisù Clásico', country:'it', category:'dessert', emoji:'☕',
    difficulty:'easy', servings:8, prepTime:30, cookTime:0, rating:4.9, views:5500,
    author:'Sofia Romano', authorId:'demo', tags:['vegetarian'],
    description:'El postre italiano más famoso del mundo. Suave, cremoso y con ese sabor a café que lo hace único.',
    ingredients:[
      {qty:500,unit:'g',name:'Mascarpone',note:'temperatura ambiente'},
      {qty:5,unit:'pieza',name:'Huevos',note:'separados'},
      {qty:150,unit:'g',name:'Azúcar',note:''},
      {qty:300,unit:'ml',name:'Café espresso frío',note:''},
      {qty:30,unit:'ml',name:'Amaretto o ron',note:'opcional'},
      {qty:300,unit:'g',name:'Savoiardi (bizcochos)',note:''},
      {qty:2,unit:'tbsp',name:'Cacao en polvo',note:''},
    ],
    steps:[
      {text:'Bate las yemas con azúcar hasta blanquear. Incorpora el mascarpone.',tip:''},
      {text:'Bate las claras a punto de nieve firme. Incorpora con movimientos envolventes.',tip:''},
      {text:'Moja los bizcochos brevemente en café con amaretto.',tip:'Solo 1 segundo por lado, que no se deshagan'},
      {text:'Alterna capas de bizcochos y crema. Termina con crema.',tip:''},
      {text:'Refrigera mínimo 4 horas. Espolvorea cacao justo antes de servir.',tip:''},
    ],
    tips:'Mejor prepararlo el día anterior. El reposo mejora el sabor notablemente.',
    reviews:[],
    createdAt:'2025-11-01'
  },
  {
    id:'r05', name:'Ossobuco alla Milanese', country:'it', category:'main', emoji:'🥩',
    difficulty:'hard', servings:4, prepTime:20, cookTime:90, rating:4.8, views:2100,
    author:'Marco Vitali', authorId:'demo', tags:['glutenfree'],
    description:'El plato emblemático de Milán. Jarrete de ternera estofado con gremolata y servido con risotto amarillo.',
    ingredients:[
      {qty:4,unit:'pieza',name:'Rodajas de jarrete de ternera',note:'4 cm de grosor'},
      {qty:200,unit:'ml',name:'Vino blanco seco',note:''},
      {qty:400,unit:'g',name:'Tomate triturado',note:''},
      {qty:500,unit:'ml',name:'Caldo de carne',note:''},
      {qty:1,unit:'pieza',name:'Zanahoria',note:'picada'},
      {qty:1,unit:'pieza',name:'Cebolla',note:'picada'},
      {qty:2,unit:'pieza',name:'Ramas de apio',note:'picadas'},
      {qty:1,unit:'pieza',name:'Limón (ralladura)',note:'para la gremolata'},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:'para la gremolata'},
      {qty:1,unit:'pieza',name:'Manojo de perejil',note:'para la gremolata'},
    ],
    steps:[
      {text:'Enharina las rodajas y dóralas bien por ambos lados en aceite caliente.',tip:''},
      {text:'Sofríe las verduras, añade el vino y deja evaporar.',tip:''},
      {text:'Incorpora el tomate y el caldo. Añade la carne.',tip:''},
      {text:'Cocina tapado a fuego bajo 90 minutos hasta que la carne esté tierna.',tip:'La médula del hueso debe quedar cremosa'},
      {text:'Prepara la gremolata picando ajo, perejil y ralladura de limón. Espolvorea al servir.',tip:''},
    ],
    tips:'Sirve sobre risotto azafranado (risotto alla milanese) para la combinación perfecta.',
    reviews:[],
    createdAt:'2025-11-15'
  },
  {
    id:'r06', name:'Focaccia Genovese', country:'it', category:'bread', emoji:'🍞',
    difficulty:'easy', servings:8, prepTime:20, cookTime:25, rating:4.6, views:2800,
    author:'Sofia Romano', authorId:'demo', tags:['vegetarian', 'vegan'],
    description:'Pan plano esponjoso de Génova con aceite de oliva y sal gruesa. El bocado más adictivo de Liguria.',
    ingredients:[
      {qty:500,unit:'g',name:'Harina de trigo',note:''},
      {qty:300,unit:'ml',name:'Agua tibia',note:''},
      {qty:7,unit:'g',name:'Levadura seca',note:''},
      {qty:10,unit:'g',name:'Sal',note:''},
      {qty:100,unit:'ml',name:'Aceite de oliva virgen extra',note:'generoso'},
      {qty:1,unit:'tbsp',name:'Sal gruesa marina',note:'para decorar'},
      {qty:1,unit:'tbsp',name:'Romero fresco',note:'opcional'},
    ],
    steps:[
      {text:'Disuelve la levadura en agua tibia con una pizca de azúcar. Mezcla con harina y sal.',tip:''},
      {text:'Amasa 8 min. Forma una bola, cubre y deja reposar 1 hora.',tip:''},
      {text:'Extiende en bandeja engrasada. Haz hoyuelos con los dedos presionando bien.',tip:'Los hoyuelos son fundamentales para retener el aceite'},
      {text:'Emulsiona agua y aceite (mezcla 50/50) y vierte por encima. Reposa 30 min más.',tip:''},
      {text:'Espolvorea sal gruesa y romero. Hornea a 220°C unos 20-25 min.',tip:''},
    ],
    tips:'Cuanto más aceite, mejor. La focaccia genovesa es generosa.',
    reviews:[],
    createdAt:'2025-12-01'
  },
  {
    id:'r07', name:'Panna Cotta di Vaniglia', country:'it', category:'dessert', emoji:'🍮',
    difficulty:'easy', servings:6, prepTime:15, cookTime:5, rating:4.5, views:1900,
    author:'Marco Vitali', authorId:'demo', tags:['vegetarian', 'glutenfree'],
    description:'Cremosa, sedosa y con solo 4 ingredientes. La panna cotta perfecta con coulis de frutos rojos.',
    ingredients:[
      {qty:600,unit:'ml',name:'Nata para montar (35% grasa)',note:''},
      {qty:80,unit:'g',name:'Azúcar',note:''},
      {qty:6,unit:'g',name:'Gelatina en hojas',note:'3 hojas'},
      {qty:1,unit:'pieza',name:'Vaina de vainilla',note:''},
      {qty:200,unit:'g',name:'Frutos rojos mezclados',note:'para el coulis'},
      {qty:2,unit:'tbsp',name:'Azúcar glas',note:'para el coulis'},
    ],
    steps:[
      {text:'Hidrata la gelatina en agua fría 5 min.',tip:''},
      {text:'Calienta la nata con azúcar y vainilla hasta casi hervir. Retira del fuego.',tip:''},
      {text:'Escurre la gelatina e incorpora a la nata caliente. Mezcla hasta disolver.',tip:''},
      {text:'Vierte en moldes y refrigera mínimo 4 horas.',tip:''},
      {text:'Prepara el coulis triturando frutos rojos con azúcar glas. Desmolda y sirve.',tip:''},
    ],
    tips:'Para desmoldar fácilmente, pasa un cuchillo por el borde y sumerge el molde en agua caliente 3 segundos.',
    reviews:[],
    createdAt:'2025-12-10'
  },
  {
    id:'r08', name:'Minestrone di Verdure', country:'it', category:'soup', emoji:'🥣',
    difficulty:'easy', servings:6, prepTime:20, cookTime:40, rating:4.4, views:1600,
    author:'Sofia Romano', authorId:'demo', tags:['vegetarian','vegan','glutenfree'],
    description:'La sopa de verduras italiana por excelencia. Reconfortante, nutritiva y diferente según la región.',
    ingredients:[
      {qty:2,unit:'pieza',name:'Zanahorias',note:'en cubos'},
      {qty:2,unit:'pieza',name:'Ramas de apio',note:'en cubos'},
      {qty:1,unit:'pieza',name:'Calabacín',note:'en cubos'},
      {qty:200,unit:'g',name:'Judías verdes',note:'en trozos'},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:200,unit:'g',name:'Alubias blancas cocidas',note:''},
      {qty:100,unit:'g',name:'Pasta pequeña (ditalini)',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:'picada'},
      {qty:1,unit:'l',name:'Caldo de verduras',note:''},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:''},
    ],
    steps:[
      {text:'Sofríe cebolla y ajo en aceite hasta transparente.',tip:''},
      {text:'Añade zanahoria y apio. Cocina 5 min.',tip:''},
      {text:'Incorpora tomate, caldo y el resto de verduras. Lleva a ebullición.',tip:''},
      {text:'Cocina a fuego medio 25 min. Añade la pasta y las alubias.',tip:''},
      {text:'Cocina hasta que la pasta esté al dente. Sirve con parmesano y aceite crudo.',tip:''},
    ],
    tips:'El minestrone mejora al día siguiente. Congela perfectamente sin la pasta.',
    reviews:[],
    createdAt:'2025-12-20'
  },

  // ============================
  //  🇲🇽 MÉXICO (6)
  // ============================
  {
    id:'r09', name:'Tacos al Pastor', country:'mx', category:'main', emoji:'🌮',
    difficulty:'medium', servings:6, prepTime:40, cookTime:30, rating:4.7, views:4100,
    author:'Lucía Mendoza', authorId:'demo', tags:['spicy'],
    description:'El sabor de la Ciudad de México. Cerdo marinado con chiles, achiote y piña fresca. Puro México.',
    ingredients:[
      {qty:1,unit:'kg',name:'Lomo de cerdo',note:'en filetes delgados'},
      {qty:3,unit:'pieza',name:'Chiles guajillo',note:'desvenados'},
      {qty:1,unit:'pieza',name:'Chile ancho',note:''},
      {qty:50,unit:'g',name:'Achiote en pasta',note:''},
      {qty:1,unit:'pieza',name:'Piña madura',note:''},
      {qty:1,unit:'pieza',name:'Cebolla blanca',note:''},
      {qty:24,unit:'pieza',name:'Tortillas de maíz',note:''},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
      {qty:2,unit:'pieza',name:'Limones',note:''},
    ],
    steps:[
      {text:'Hidrata los chiles en agua caliente 20 min. Licúa con achiote, vinagre, ajo, sal y comino.',tip:''},
      {text:'Marina el cerdo en la salsa mínimo 2 horas (toda la noche es mejor).',tip:''},
      {text:'Cocina la carne en comal o sartén bien caliente hasta dorar.',tip:''},
      {text:'Añade piña en los últimos minutos para que se caramelice.',tip:''},
      {text:'Sirve en tortillas calientes con cebolla, cilantro, piña y limón.',tip:''},
    ],
    tips:'El achiote es fundamental para el color y sabor característico del pastor.',
    reviews:[{user:'Carlos B.',rating:5,comment:'¡Me transporté a México!',date:'2025-12-01'}],
    createdAt:'2025-11-05'
  },
  {
    id:'r10', name:'Mole Negro Oaxaqueño', country:'mx', category:'sauce', emoji:'🫕',
    difficulty:'hard', servings:8, prepTime:60, cookTime:120, rating:4.9, views:2200,
    author:'Lucía Mendoza', authorId:'demo', tags:['glutenfree'],
    description:'El rey de los moles. Más de 30 ingredientes, chocolate negro, chiles y especias. Una obra maestra culinaria.',
    ingredients:[
      {qty:5,unit:'pieza',name:'Chiles mulato secos',note:''},
      {qty:3,unit:'pieza',name:'Chiles negro seco',note:''},
      {qty:3,unit:'pieza',name:'Chiles chihuacle',note:''},
      {qty:100,unit:'g',name:'Chocolate negro 70%',note:''},
      {qty:50,unit:'g',name:'Semillas de chiles tostadas',note:''},
      {qty:2,unit:'pieza',name:'Tortillas quemadas',note:'da color'},
      {qty:2,unit:'pieza',name:'Tomates asados',note:''},
      {qty:1,unit:'pieza',name:'Cebolla asada',note:''},
      {qty:5,unit:'pieza',name:'Dientes de ajo asados',note:''},
      {qty:1,unit:'pieza',name:'Plátano macho maduro',note:'frito'},
    ],
    steps:[
      {text:'Tuesta los chiles secos con cuidado, sin quemar. Hidrata en agua caliente.',tip:'Los chiles quemados amargan'},
      {text:'Fríe el plátano en aceite hasta dorar. Asa tomates, cebolla y ajo.',tip:''},
      {text:'Licúa todos los ingredientes en tandas hasta obtener una pasta.',tip:''},
      {text:'Fríe la pasta en aceite caliente, moviendo constantemente, 30 min.',tip:'Esta etapa es la más importante'},
      {text:'Añade caldo de pavo o pollo poco a poco. Cocina 90 min a fuego bajo. Añade chocolate al final.',tip:''},
    ],
    tips:'El mole mejora enormemente al día siguiente. Prepáralo con anticipación.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r11', name:'Chiles en Nogada', country:'mx', category:'main', emoji:'🌶️',
    difficulty:'hard', servings:6, prepTime:90, cookTime:30, rating:4.8, views:1800,
    author:'Lucía Mendoza', authorId:'demo', tags:['glutenfree'],
    description:'El plato más patriótico de México. Con los colores de la bandera: chile verde, nogada blanca y granada roja.',
    ingredients:[
      {qty:6,unit:'pieza',name:'Chiles poblanos grandes',note:''},
      {qty:400,unit:'g',name:'Carne de cerdo molida',note:''},
      {qty:200,unit:'g',name:'Durazno',note:'en cubos'},
      {qty:100,unit:'g',name:'Pera en cubos',note:''},
      {qty:100,unit:'g',name:'Manzana en cubos',note:''},
      {qty:50,unit:'g',name:'Almendras peladas',note:''},
      {qty:50,unit:'g',name:'Pasas',note:''},
      {qty:200,unit:'g',name:'Nuez de Castilla',note:'para la nogada'},
      {qty:200,unit:'ml',name:'Crema ácida',note:'para la nogada'},
      {qty:1,unit:'pieza',name:'Granada roja',note:'para decorar'},
    ],
    steps:[
      {text:'Asa los chiles directamente en el fuego. Pela, desvena y reserva.',tip:''},
      {text:'Sofríe la carne. Añade frutas, almendras y pasas. Sazona.',tip:'El picadillo debe ser dulce-salado'},
      {text:'Rellena los chiles con el picadillo.',tip:''},
      {text:'Prepara la nogada licuando nuez, crema y queso de cabra.',tip:'Debe quedar cremosa'},
      {text:'Baña los chiles con nogada, espolvorea granada y perejil picado.',tip:''},
    ],
    tips:'Los chiles en nogada son un plato de temporada: agosto-septiembre en México.',
    reviews:[],
    createdAt:'2026-01-15'
  },
  {
    id:'r12', name:'Pozole Rojo', country:'mx', category:'soup', emoji:'🍲',
    difficulty:'medium', servings:8, prepTime:30, cookTime:120, rating:4.7, views:3100,
    author:'Lucía Mendoza', authorId:'demo', tags:['glutenfree'],
    description:'La sopa ceremonial mexicana con maíz cacahuazintle, carne de cerdo y un caldo rojo intenso lleno de sabor.',
    ingredients:[
      {qty:800,unit:'g',name:'Carne de cerdo (espaldilla)',note:'en trozos'},
      {qty:500,unit:'g',name:'Maíz cacahuazintle precocido',note:''},
      {qty:6,unit:'pieza',name:'Chiles guajillo',note:''},
      {qty:3,unit:'pieza',name:'Chiles ancho',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:4,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:1,unit:'pieza',name:'Cabeza de lechuga',note:'para acompañar'},
      {qty:4,unit:'pieza',name:'Limones',note:''},
      {qty:1,unit:'tbsp',name:'Orégano seco',note:''},
    ],
    steps:[
      {text:'Cocina la carne con cebolla y ajo hasta que esté tierna. Reserva el caldo.',tip:''},
      {text:'Hidrata los chiles y licúa con ajo. Fríe la salsa en aceite caliente.',tip:''},
      {text:'Añade la salsa al caldo con la carne y el maíz.',tip:''},
      {text:'Cocina 30 min más a fuego bajo para integrar sabores.',tip:''},
      {text:'Sirve con lechuga, orégano, cebolla cruda y limón.',tip:''},
    ],
    tips:'Se sirve con tostadas, orégano, chile piquín y rábanos en la mesa.',
    reviews:[],
    createdAt:'2026-01-20'
  },
  {
    id:'r13', name:'Tamales de Rajas con Queso', country:'mx', category:'main', emoji:'🌽',
    difficulty:'hard', servings:20, prepTime:90, cookTime:60, rating:4.8, views:2400,
    author:'Lucía Mendoza', authorId:'demo', tags:['vegetarian'],
    description:'Tamales esponjosos rellenos de chiles poblanos asados y queso Oaxaca. Tradición en cada hoja de maíz.',
    ingredients:[
      {qty:1,unit:'kg',name:'Masa de maíz para tamal',note:''},
      {qty:250,unit:'g',name:'Manteca de cerdo',note:'o vegetal'},
      {qty:500,unit:'ml',name:'Caldo de pollo',note:'o agua'},
      {qty:6,unit:'pieza',name:'Chiles poblanos asados',note:'en rajas'},
      {qty:400,unit:'g',name:'Queso Oaxaca deshebrado',note:''},
      {qty:20,unit:'pieza',name:'Hojas de maíz',note:'remojadas'},
      {qty:1,unit:'tsp',name:'Sal',note:''},
      {qty:1,unit:'tsp',name:'Royal (levadura)',note:''},
    ],
    steps:[
      {text:'Bate la manteca hasta acremar. Incorpora masa, caldo y sal poco a poco.',tip:'La masa está lista cuando flota en agua'},
      {text:'Extiende la masa en hojas de maíz dejando espacio en los bordes.',tip:''},
      {text:'Coloca rajas de chile y queso en el centro.',tip:''},
      {text:'Dobla las hojas y cierra los tamales.',tip:''},
      {text:'Cocina al vapor 60-70 min hasta que se despeguen de la hoja.',tip:''},
    ],
    tips:'El secreto de los tamales esponjosos es batir muy bien la masa con la manteca.',
    reviews:[],
    createdAt:'2026-01-25'
  },
  {
    id:'r14', name:'Guacamole Auténtico', country:'mx', category:'appetizer', emoji:'🥑',
    difficulty:'easy', servings:4, prepTime:10, cookTime:0, rating:4.6, views:5500,
    author:'Lucía Mendoza', authorId:'demo', tags:['vegetarian','vegan','glutenfree'],
    description:'El verdadero guacamole no lleva mayonesa ni crema. Solo aguacate, limón, tomate, cebolla y cilantro.',
    ingredients:[
      {qty:3,unit:'pieza',name:'Aguacates maduros',note:''},
      {qty:2,unit:'pieza',name:'Limones (jugo)',note:''},
      {qty:1,unit:'pieza',name:'Jitomate',note:'sin semillas, picado'},
      {qty:0.5,unit:'pieza',name:'Cebolla blanca',note:'finamente picada'},
      {qty:1,unit:'pieza',name:'Chile serrano',note:'al gusto'},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:'picado'},
      {qty:1,unit:'al gusto',name:'Sal',note:''},
    ],
    steps:[
      {text:'Machaca el aguacate con un tenedor. Conserva algunos trozos para textura.',tip:'No lo muelas demasiado'},
      {text:'Añade limón, sal, cebolla, chile y cilantro.',tip:''},
      {text:'Incorpora el jitomate al final para que no suelte agua.',tip:''},
      {text:'Prueba y ajusta sal y limón.',tip:'El limón también evita la oxidación'},
    ],
    tips:'Guarda el hueso del aguacate en el bowl para que no se oxide.',
    reviews:[],
    createdAt:'2026-02-01'
  },

  // ============================
  //  🇯🇵 JAPÓN (6)
  // ============================
  {
    id:'r15', name:'Ramen Tonkotsu', country:'jp', category:'soup', emoji:'🍜',
    difficulty:'hard', servings:4, prepTime:30, cookTime:240, rating:4.9, views:6200,
    author:'Yuki Tanaka', authorId:'demo', tags:['spicy'],
    description:'Caldo de huesos de cerdo cremoso y opaco, con fideos elásticos y toppings perfectos. Fukuoka en tu bowl.',
    ingredients:[
      {qty:1,unit:'kg',name:'Huesos de cerdo',note:'blanqueados'},
      {qty:400,unit:'g',name:'Fideos ramen',note:''},
      {qty:4,unit:'pieza',name:'Huevos ramen marinados',note:''},
      {qty:200,unit:'g',name:'Chashu de cerdo',note:'panceta enrollada'},
      {qty:8,unit:'pieza',name:'Láminas de nori',note:''},
      {qty:4,unit:'tbsp',name:'Tare de soja',note:''},
      {qty:2,unit:'pieza',name:'Cebolletas',note:'picadas'},
      {qty:1,unit:'tbsp',name:'Aceite de ajo negro',note:'mayu'},
    ],
    steps:[
      {text:'Blanquea los huesos 10 min, tira el agua y limpia bien.',tip:'Elimina impurezas que enturbiarían el caldo'},
      {text:'Cocina los huesos en agua fresca a hervor fuerte 4 horas. El caldo debe quedar opaco y cremoso.',tip:''},
      {text:'Prepara el chashu: enrolla panceta con piel, ata con hilo, séllala y cocina en soja, mirin y sake.',tip:''},
      {text:'Marina los huevos en una mezcla de soja, mirin y azúcar por 6 horas.',tip:''},
      {text:'Cocina los fideos. Pon tare en el bowl, agrega caldo caliente, fideos y toppings.',tip:''},
    ],
    tips:'El caldo puede prepararse días antes. Congela bien y mejora con el tiempo.',
    reviews:[],
    createdAt:'2025-10-15'
  },
  {
    id:'r16', name:'Sushi Temaki', country:'jp', category:'appetizer', emoji:'🍣',
    difficulty:'medium', servings:4, prepTime:45, cookTime:30, rating:4.6, views:3800,
    author:'Yuki Tanaka', authorId:'demo', tags:['glutenfree'],
    description:'Los cucuruchos de sushi que puedes hacer en casa. Con arroz avinagrado, nori crujiente y rellenos frescos.',
    ingredients:[
      {qty:400,unit:'g',name:'Arroz para sushi',note:''},
      {qty:80,unit:'ml',name:'Vinagre de arroz',note:''},
      {qty:20,unit:'g',name:'Azúcar',note:''},
      {qty:10,unit:'g',name:'Sal',note:''},
      {qty:8,unit:'pieza',name:'Hojas de nori (alga)',note:'cortadas a la mitad'},
      {qty:200,unit:'g',name:'Salmón fresco',note:'en tiras'},
      {qty:1,unit:'pieza',name:'Aguacate',note:'en tiras'},
      {qty:1,unit:'pieza',name:'Pepino',note:'en bastones'},
      {qty:2,unit:'tbsp',name:'Salsa de soja',note:''},
    ],
    steps:[
      {text:'Lava el arroz hasta que el agua salga clara. Cocina con la misma cantidad de agua.',tip:''},
      {text:'Mezcla vinagre, azúcar y sal. Incorpora al arroz caliente con movimientos suaves.',tip:'Abanica mientras mezclas para enfriar'},
      {text:'Prepara todos los ingredientes de relleno.',tip:''},
      {text:'Pon arroz en el centro de la hoja de nori, añade relleno y enrolla en forma de cono.',tip:'Sirve inmediatamente para que el nori esté crujiente'},
    ],
    tips:'El arroz de sushi no debe estar en la nevera. Tapa con un paño húmedo a temperatura ambiente.',
    reviews:[],
    createdAt:'2025-11-05'
  },
  {
    id:'r17', name:'Gyoza Japonesas', country:'jp', category:'appetizer', emoji:'🥟',
    difficulty:'medium', servings:4, prepTime:40, cookTime:15, rating:4.7, views:4100,
    author:'Yuki Tanaka', authorId:'demo', tags:[],
    description:'Empanadillas crujientes y jugosas por dentro. El secreto está en la técnica yaki-mushi: fríe y cuece al vapor.',
    ingredients:[
      {qty:300,unit:'g',name:'Carne de cerdo molida',note:''},
      {qty:200,unit:'g',name:'Col napa (repollo chino)',note:'finamente picada'},
      {qty:2,unit:'pieza',name:'Cebolletas',note:'picadas'},
      {qty:1,unit:'tbsp',name:'Jengibre fresco rallado',note:''},
      {qty:2,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:1,unit:'tbsp',name:'Aceite de sésamo',note:''},
      {qty:1,unit:'tsp',name:'Azúcar',note:''},
      {qty:25,unit:'pieza',name:'Obleas de gyoza',note:''},
    ],
    steps:[
      {text:'Mezcla carne, col, cebolleta, jengibre, soja, sésamo y azúcar.',tip:''},
      {text:'Pon una cucharada de relleno en cada oblea. Humedece el borde y pliega haciendo pliegues.',tip:'El plegado japonés es la firma de la gyoza'},
      {text:'Calienta aceite en sartén antiadherente. Pon las gyozas y dora la base 2 min.',tip:''},
      {text:'Añade 60 ml de agua, tapa y cocina al vapor 5 min.',tip:''},
      {text:'Destapa y deja que se evapore el agua hasta que la base quede crujiente.',tip:''},
    ],
    tips:'Sirve con salsa de soja, vinagre de arroz y aceite de chile.',
    reviews:[],
    createdAt:'2025-11-20'
  },
  {
    id:'r18', name:'Miso Shiru (Sopa de Miso)', country:'jp', category:'soup', emoji:'🍵',
    difficulty:'easy', servings:4, prepTime:5, cookTime:10, rating:4.5, views:2900,
    author:'Yuki Tanaka', authorId:'demo', tags:['vegetarian','vegan'],
    description:'La sopa japonesa cotidiana. Reconfortante, umami y lista en 10 minutos. Desayuno tradicional en Japón.',
    ingredients:[
      {qty:1,unit:'l',name:'Dashi (caldo japonés)',note:'o agua con kombu'},
      {qty:4,unit:'tbsp',name:'Pasta de miso blanco o rojo',note:''},
      {qty:200,unit:'g',name:'Tofu firme',note:'en cubos pequeños'},
      {qty:10,unit:'g',name:'Alga wakame seca',note:'remojada'},
      {qty:2,unit:'pieza',name:'Cebolletas',note:'picadas'},
    ],
    steps:[
      {text:'Calienta el dashi a fuego medio. Añade el wakame hidratado.',tip:''},
      {text:'Incorpora el tofu y calienta 2 min.',tip:''},
      {text:'Disuelve el miso en un poco de caldo antes de añadirlo.',tip:'Nunca hiervas el miso, pierde sus enzimas beneficiosas'},
      {text:'Sirve inmediatamente con cebolleta.',tip:''},
    ],
    tips:'El miso rojo es más intenso, el blanco más suave. Combínalos para equilibrio perfecto.',
    reviews:[],
    createdAt:'2025-12-01'
  },
  {
    id:'r19', name:'Katsu Curry', country:'jp', category:'main', emoji:'🍛',
    difficulty:'medium', servings:4, prepTime:20, cookTime:30, rating:4.8, views:3500,
    author:'Yuki Tanaka', authorId:'demo', tags:[],
    description:'El curry japonés con chuleta empanizada. Dulce, suave y reconfortante. El comfort food definitivo de Japón.',
    ingredients:[
      {qty:4,unit:'pieza',name:'Chuletas de cerdo',note:'sin hueso'},
      {qty:100,unit:'g',name:'Pan rallado panko',note:''},
      {qty:2,unit:'pieza',name:'Huevos',note:''},
      {qty:100,unit:'g',name:'Harina',note:''},
      {qty:4,unit:'pieza',name:'Cubitos de curry japonés (Vermont)',note:''},
      {qty:2,unit:'pieza',name:'Zanahorias',note:'en trozos'},
      {qty:2,unit:'pieza',name:'Papas',note:'en trozos'},
      {qty:1,unit:'pieza',name:'Cebolla',note:'en tiras'},
      {qty:400,unit:'g',name:'Arroz japonés cocido',note:''},
    ],
    steps:[
      {text:'Sofríe cebolla, zanahoria y papa. Añade agua y cocina 15 min.',tip:''},
      {text:'Retira del fuego, incorpora los cubitos de curry y mezcla hasta disolver.',tip:''},
      {text:'Enharina las chuletas, pasa por huevo y empaniza con panko.',tip:'El panko da una textura más crujiente que el pan rallado normal'},
      {text:'Fríe las chuletas en aceite abundante a 170°C hasta dorar.',tip:''},
      {text:'Sirve el arroz, vierte el curry y coloca el katsu cortado en tiras.',tip:''},
    ],
    tips:'El curry japonés en cubitos lo encuentras en tiendas asiáticas. Marcas: Vermont, Golden Curry.',
    reviews:[],
    createdAt:'2025-12-15'
  },
  {
    id:'r20', name:'Dorayaki de Anko', country:'jp', category:'dessert', emoji:'🥞',
    difficulty:'easy', servings:8, prepTime:15, cookTime:20, rating:4.5, views:1800,
    author:'Yuki Tanaka', authorId:'demo', tags:['vegetarian'],
    description:'Los pancakes japoneses rellenos de pasta de azuki roja. El postre favorito de Doraemon y de toda Japan.',
    ingredients:[
      {qty:150,unit:'g',name:'Harina',note:''},
      {qty:100,unit:'g',name:'Azúcar',note:''},
      {qty:3,unit:'pieza',name:'Huevos',note:''},
      {qty:1,unit:'tbsp',name:'Miel',note:''},
      {qty:1,unit:'tsp',name:'Levadura química',note:''},
      {qty:2,unit:'tbsp',name:'Agua',note:''},
      {qty:300,unit:'g',name:'Pasta de azuki (anko)',note:'comprada o casera'},
    ],
    steps:[
      {text:'Bate huevos con azúcar y miel. Añade harina y levadura tamizadas.',tip:''},
      {text:'Agrega agua hasta obtener una masa fluida. Reposa 15 min.',tip:''},
      {text:'Cocina pequeños círculos en sartén antiadherente sin aceite a fuego bajo.',tip:'Cuando aparezcan burbujas, voltea'},
      {text:'Rellena dos pancakes con pasta de anko y junta.',tip:''},
    ],
    tips:'La pasta de anko lista se vende en tiendas asiáticas. Busca "tsubu-an" (con trozos) o "koshi-an" (lisa).',
    reviews:[],
    createdAt:'2026-01-05'
  },

  // ============================
  //  🇫🇷 FRANCIA (5)
  // ============================
  {
    id:'r21', name:'Crème Brûlée', country:'fr', category:'dessert', emoji:'🍮',
    difficulty:'medium', servings:4, prepTime:20, cookTime:50, rating:4.8, views:4200,
    author:'Pierre Dupont', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'El clásico postre francés con su capa de caramelo crujiente que se rompe con la cuchara. Pure elegance.',
    ingredients:[
      {qty:500,unit:'ml',name:'Crema para batir (35% grasa)',note:''},
      {qty:6,unit:'pieza',name:'Yemas de huevo',note:''},
      {qty:100,unit:'g',name:'Azúcar',note:''},
      {qty:1,unit:'pieza',name:'Vaina de vainilla',note:''},
      {qty:4,unit:'tbsp',name:'Azúcar morena',note:'para caramelizar'},
    ],
    steps:[
      {text:'Precalienta el horno a 150°C. Calienta la crema con vainilla sin hervir.',tip:''},
      {text:'Bate las yemas con azúcar hasta blanquear. Incorpora la crema caliente poco a poco.',tip:'Cuela para eliminar grumos'},
      {text:'Vierte en ramequines. Hornea a baño maría 40-50 min.',tip:'Deben quedar con ligero temblor en el centro'},
      {text:'Enfría 4 horas en nevera. Espolvorea azúcar morena y carameliza con soplete.',tip:''},
    ],
    tips:'La crema está lista cuando tiembla ligeramente como una gelatina al mover el molde.',
    reviews:[],
    createdAt:'2025-11-20'
  },
  {
    id:'r22', name:'Boeuf Bourguignon', country:'fr', category:'main', emoji:'🥩',
    difficulty:'hard', servings:6, prepTime:30, cookTime:180, rating:4.9, views:2800,
    author:'Pierre Dupont', authorId:'demo', tags:['glutenfree'],
    description:'El estofado de vacuno más famoso de Francia. Cocido lentamente en vino tinto de Borgoña con verduras.',
    ingredients:[
      {qty:1.5,unit:'kg',name:'Vacuno para estofar (morcillo)',note:'en cubos grandes'},
      {qty:750,unit:'ml',name:'Vino tinto Borgoña o Pinot Noir',note:''},
      {qty:200,unit:'g',name:'Panceta',note:'en cubos'},
      {qty:300,unit:'g',name:'Champiñones',note:''},
      {qty:20,unit:'pieza',name:'Cebollas perla',note:''},
      {qty:3,unit:'pieza',name:'Zanahorias',note:'en rodajas'},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:1,unit:'pieza',name:'Ramo de hierbas (bouquet garni)',note:''},
      {qty:2,unit:'tbsp',name:'Harina',note:''},
      {qty:500,unit:'ml',name:'Caldo de carne',note:''},
    ],
    steps:[
      {text:'Marina la carne en vino con verduras 12 horas. Escurre y seca bien.',tip:'La marinada profundiza el sabor'},
      {text:'Dora la panceta, retira. Dora la carne en tandas hasta sellar.',tip:'No amontones, que suelte agua en vez de dorarse'},
      {text:'Sofríe las verduras, añade harina y cocina 2 min.',tip:''},
      {text:'Añade el vino de la marinada, el caldo y el bouquet garni. Regresa la carne.',tip:''},
      {text:'Cocina tapado 2.5-3 horas a 160°C en horno. Añade champiñones y cebollas en la última hora.',tip:''},
    ],
    tips:'Este plato es mucho mejor al día siguiente. Es el estofado que justifica hacer de más.',
    reviews:[],
    createdAt:'2025-12-01'
  },
  {
    id:'r23', name:'Croissants Caseros', country:'fr', category:'breakfast', emoji:'🥐',
    difficulty:'hard', servings:12, prepTime:90, cookTime:20, rating:4.7, views:3100,
    author:'Pierre Dupont', authorId:'demo', tags:['vegetarian'],
    description:'El proceso largo que vale cada minuto. Croissants hojaldrados con 27 capas de mantequilla. Perfección parisina.',
    ingredients:[
      {qty:500,unit:'g',name:'Harina de fuerza',note:''},
      {qty:10,unit:'g',name:'Levadura seca',note:''},
      {qty:60,unit:'g',name:'Azúcar',note:''},
      {qty:10,unit:'g',name:'Sal',note:''},
      {qty:280,unit:'ml',name:'Leche entera',note:'tibia'},
      {qty:280,unit:'g',name:'Mantequilla europea (84% grasa)',note:'fría para laminar'},
      {qty:1,unit:'pieza',name:'Huevo',note:'para pintar'},
    ],
    steps:[
      {text:'Mezcla harina, levadura, azúcar, sal y leche. Amasa hasta masa lisa. Refrigera 1 hora.',tip:''},
      {text:'Aplana la mantequilla fría en forma de cuadrado entre papel film.',tip:''},
      {text:'Envuelve la mantequilla en la masa. Haz 3 pliegues dobles, refrigerando 30 min entre cada uno.',tip:'En total son 27 capas'},
      {text:'Estira y corta triángulos. Enrolla desde la base hacia la punta. Forma el croissant.',tip:''},
      {text:'Deja fermentar 2-3 horas. Pinta con huevo y hornea 18-22 min a 200°C.',tip:''},
    ],
    tips:'El laminage (laminado) requiere paciencia. La mantequilla fría es clave para las capas perfectas.',
    reviews:[],
    createdAt:'2026-01-01'
  },
  {
    id:'r24', name:'Soupe à l\'Oignon', country:'fr', category:'soup', emoji:'🧅',
    difficulty:'medium', servings:4, prepTime:15, cookTime:60, rating:4.6, views:2200,
    author:'Pierre Dupont', authorId:'demo', tags:['vegetarian'],
    description:'La sopa de cebolla gratinada de los bistros parisinos. Dulce, profunda y coronada con queso Gruyère fundido.',
    ingredients:[
      {qty:1,unit:'kg',name:'Cebollas',note:'en juliana fina'},
      {qty:50,unit:'g',name:'Mantequilla',note:''},
      {qty:200,unit:'ml',name:'Vino blanco seco',note:''},
      {qty:1,unit:'l',name:'Caldo de carne o vegetal',note:'caliente'},
      {qty:1,unit:'tbsp',name:'Harina',note:''},
      {qty:4,unit:'pieza',name:'Rebanadas de pan baguette',note:''},
      {qty:200,unit:'g',name:'Queso Gruyère rallado',note:''},
      {qty:1,unit:'tbsp',name:'Aceite de oliva',note:''},
    ],
    steps:[
      {text:'Cocina las cebollas en mantequilla y aceite a fuego muy bajo 45 min hasta caramelizar.',tip:'La paciencia es la clave: no apresures este paso'},
      {text:'Añade harina, mezcla 2 min. Agrega vino y deja evaporar.',tip:''},
      {text:'Añade el caldo caliente y cocina 15 min.',tip:''},
      {text:'Vierte en cazuelas aptas para horno. Pon el pan y cubre con Gruyère generosamente.',tip:''},
      {text:'Gratina bajo el grill del horno hasta que el queso burbujee y dore.',tip:''},
    ],
    tips:'Las cebollas caramelizadas toman su tiempo. No las apresures con fuego alto o amargarán.',
    reviews:[],
    createdAt:'2026-01-20'
  },
  {
    id:'r25', name:'Tarte Tatin', country:'fr', category:'dessert', emoji:'🍎',
    difficulty:'medium', servings:6, prepTime:20, cookTime:35, rating:4.7, views:1900,
    author:'Pierre Dupont', authorId:'demo', tags:['vegetarian'],
    description:'La tarta al revés más famosa del mundo. Manzanas caramelizadas cubiertas de hojaldre crujiente. Un accidente delicioso.',
    ingredients:[
      {qty:6,unit:'pieza',name:'Manzanas Golden o Granny Smith',note:''},
      {qty:120,unit:'g',name:'Azúcar',note:''},
      {qty:60,unit:'g',name:'Mantequilla',note:''},
      {qty:1,unit:'pieza',name:'Masa de hojaldre',note:'redonda'},
      {qty:1,unit:'tsp',name:'Extracto de vainilla',note:''},
      {qty:1,unit:'pieza',name:'Limón (jugo)',note:''},
    ],
    steps:[
      {text:'Pela y corta las manzanas en cuartos. Rocía con jugo de limón.',tip:''},
      {text:'En sartén apta para horno, derrite mantequilla con azúcar hasta caramelo dorado.',tip:'Ojo: no mezcles el caramelo una vez formado'},
      {text:'Coloca las manzanas ordenadamente en el caramelo, curvadas hacia arriba.',tip:'Apriétalas, se reducen al cocinar'},
      {text:'Cubre con la masa de hojaldre, metiendo los bordes alrededor de las manzanas.',tip:''},
      {text:'Hornea a 190°C 25-30 min. Invierte la tarta caliente sobre un plato.',tip:'Hazlo rápido para que no se pegue'},
    ],
    tips:'Sirve tibia con crème fraîche o helado de vainilla.',
    reviews:[],
    createdAt:'2026-02-05'
  },

  // ============================
  //  🇮🇳 INDIA (5)
  // ============================
  {
    id:'r26', name:'Butter Chicken (Murgh Makhani)', country:'in', category:'main', emoji:'🍛',
    difficulty:'medium', servings:4, prepTime:30, cookTime:40, rating:4.9, views:7200,
    author:'Priya Sharma', authorId:'demo', tags:['spicy','glutenfree'],
    description:'El curry de pollo más amado del mundo. Suave, cremoso y con las especias perfectamente equilibradas.',
    ingredients:[
      {qty:800,unit:'g',name:'Pechuga de pollo',note:'en trozos'},
      {qty:200,unit:'ml',name:'Yogur natural',note:''},
      {qty:2,unit:'tbsp',name:'Garam masala',note:''},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:150,unit:'ml',name:'Crema de leche',note:''},
      {qty:60,unit:'g',name:'Mantequilla',note:''},
      {qty:1,unit:'tbsp',name:'Jengibre fresco rallado',note:''},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:'rallados'},
      {qty:2,unit:'tsp',name:'Pimentón ahumado',note:''},
      {qty:1,unit:'tsp',name:'Cúrcuma',note:''},
    ],
    steps:[
      {text:'Marina el pollo en yogur, garam masala, jengibre, ajo, pimentón y sal. Mínimo 2 horas.',tip:'Toda la noche en nevera es mejor'},
      {text:'Asa el pollo en horno a 220°C o en sartén hasta dorar.',tip:''},
      {text:'En otra sartén, derrite mantequilla, añade tomates y especias. Cocina 20 min.',tip:''},
      {text:'Tritura la salsa. Incorpora el pollo y la crema.',tip:''},
      {text:'Cocina 10 min más a fuego bajo. Ajusta sal.',tip:''},
    ],
    tips:'Añade azúcar si la salsa es muy ácida. Sirve con arroz basmati y naan.',
    reviews:[],
    createdAt:'2025-12-01'
  },
  {
    id:'r27', name:'Dal Makhani', country:'in', category:'main', emoji:'🫘',
    difficulty:'medium', servings:6, prepTime:20, cookTime:180, rating:4.7, views:3100,
    author:'Priya Sharma', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'Las lentejas negras más cremosas del mundo. Cocinadas lentamente toda la noche con mantequilla y especias.',
    ingredients:[
      {qty:300,unit:'g',name:'Lentejas negras (urad dal)',note:'remojadas 12h'},
      {qty:100,unit:'g',name:'Alubias rojas',note:'remojadas'},
      {qty:100,unit:'g',name:'Mantequilla',note:''},
      {qty:200,unit:'ml',name:'Crema de leche',note:''},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:1,unit:'pieza',name:'Cebolla grande',note:'picada'},
      {qty:1,unit:'tbsp',name:'Jengibre-ajo en pasta',note:''},
      {qty:2,unit:'tsp',name:'Garam masala',note:''},
      {qty:1,unit:'tsp',name:'Chile en polvo',note:''},
    ],
    steps:[
      {text:'Cocina las lentejas y alubias con agua y sal en olla a presión 30 min.',tip:'Deben quedar completamente tiernas'},
      {text:'Sofríe cebolla en mantequilla hasta dorar. Añade pasta de jengibre-ajo.',tip:''},
      {text:'Añade tomates y especias. Cocina 15 min.',tip:''},
      {text:'Incorpora las lentejas cocidas. Mezcla bien y cocina a fuego muy bajo 2 horas.',tip:'Cuanto más tiempo, mejor el sabor'},
      {text:'Añade crema y mantequilla extra al final. Ajusta sal.',tip:''},
    ],
    tips:'En los restaurantes lo cocinan 8-12 horas. En casa con 3 horas está excelente.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r28', name:'Naan de Ajo y Mantequilla', country:'in', category:'bread', emoji:'🫓',
    difficulty:'easy', servings:6, prepTime:90, cookTime:15, rating:4.6, views:3800,
    author:'Priya Sharma', authorId:'demo', tags:['vegetarian'],
    description:'El pan indio esponjoso y ligeramente tostado. Con mantequilla de ajo aromatizada. Adictivo.',
    ingredients:[
      {qty:300,unit:'g',name:'Harina',note:''},
      {qty:150,unit:'ml',name:'Yogur natural',note:''},
      {qty:7,unit:'g',name:'Levadura seca',note:''},
      {qty:1,unit:'tsp',name:'Azúcar',note:''},
      {qty:0.5,unit:'tsp',name:'Sal',note:''},
      {qty:60,unit:'g',name:'Mantequilla',note:'derretida'},
      {qty:4,unit:'pieza',name:'Dientes de ajo',note:'picados'},
      {qty:2,unit:'tbsp',name:'Cilantro fresco picado',note:''},
    ],
    steps:[
      {text:'Disuelve la levadura con azúcar en agua tibia. Mezcla con harina, yogur y sal.',tip:''},
      {text:'Amasa 8 min. Tapa y deja reposar 1 hora.',tip:''},
      {text:'Divide en 6 bolas. Estira en forma ovalada.',tip:''},
      {text:'Cocina en sartén muy caliente sin aceite 2-3 min por lado.',tip:'Deben aparecer manchas negras como en el tandoor'},
      {text:'Pinta con mantequilla de ajo y espolvorea cilantro.',tip:''},
    ],
    tips:'Si tienes sartén de hierro fundido, obtendrás el mejor resultado.',
    reviews:[],
    createdAt:'2026-01-20'
  },
  {
    id:'r29', name:'Biryani de Cordero', country:'in', category:'rice', emoji:'🍚',
    difficulty:'hard', servings:6, prepTime:60, cookTime:90, rating:4.9, views:2800,
    author:'Priya Sharma', authorId:'demo', tags:['glutenfree'],
    description:'El arroz más aromático del mundo. Capas de cordero marinado, arroz basmati y azafrán. Un festín real.',
    ingredients:[
      {qty:800,unit:'g',name:'Cordero en trozos',note:''},
      {qty:400,unit:'g',name:'Arroz basmati',note:'remojado 30 min'},
      {qty:200,unit:'ml',name:'Yogur',note:''},
      {qty:2,unit:'pieza',name:'Cebollas',note:'en juliana dorada'},
      {qty:0.5,unit:'g',name:'Azafrán',note:'en agua tibia'},
      {qty:2,unit:'tbsp',name:'Biryani masala',note:'o garam masala'},
      {qty:1,unit:'tbsp',name:'Jengibre-ajo pasta',note:''},
      {qty:4,unit:'tbsp',name:'Ghee (mantequilla clarificada)',note:''},
      {qty:1,unit:'pieza',name:'Menta fresca',note:''},
    ],
    steps:[
      {text:'Marina el cordero en yogur, especias, jengibre-ajo y sal 4 horas.',tip:''},
      {text:'Cocina el cordero marinado hasta que esté casi hecho.',tip:''},
      {text:'Cocina el arroz hasta que esté 70% cocido. Escurre.',tip:''},
      {text:'En olla grande, alterna capas de cordero y arroz. Añade cebollas fritas, menta y azafrán.',tip:''},
      {text:'Sella la olla con masa o papel de aluminio. Cocina a fuego muy bajo 30 min (dum).',tip:'La cocción al vapor dum es lo que distingue el biryani'},
    ],
    tips:'El biryani es una celebración. Cada familia india tiene su versión secreta.',
    reviews:[],
    createdAt:'2026-02-01'
  },
  {
    id:'r30', name:'Masala Chai', country:'in', category:'drink', emoji:'🧄',
    difficulty:'easy', servings:4, prepTime:5, cookTime:10, rating:4.7, views:4500,
    author:'Priya Sharma', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'El té con especias indio que caliente el alma. Cardamomo, canela, jengibre y clavo. Chai time.',
    ingredients:[
      {qty:500,unit:'ml',name:'Agua',note:''},
      {qty:250,unit:'ml',name:'Leche entera',note:''},
      {qty:3,unit:'tbsp',name:'Té negro a granel (Assam)',note:''},
      {qty:4,unit:'pieza',name:'Vainas de cardamomo',note:'machacadas'},
      {qty:1,unit:'pieza',name:'Rama de canela',note:''},
      {qty:4,unit:'pieza',name:'Clavos de olor',note:''},
      {qty:1,unit:'cm',name:'Jengibre fresco',note:'rallado'},
      {qty:2,unit:'tbsp',name:'Azúcar',note:'o al gusto'},
    ],
    steps:[
      {text:'Lleva el agua a hervir con todas las especias. Hierve 3 min.',tip:'Cuanto más machacadas las especias, más sabor'},
      {text:'Añade el té y hierve 2 min.',tip:''},
      {text:'Añade la leche y el azúcar. Lleva a ebullición una vez.',tip:''},
      {text:'Cuela y sirve inmediatamente.',tip:''},
    ],
    tips:'El chai auténtico se hierve, no se infusiona. Eso lo hace cremoso y con sabor intenso.',
    reviews:[],
    createdAt:'2026-02-10'
  },

  // ============================
  //  🇧🇷 BRASIL (4)
  // ============================
  {
    id:'r31', name:'Feijoada', country:'br', category:'main', emoji:'🥘',
    difficulty:'hard', servings:8, prepTime:60, cookTime:180, rating:4.8, views:2900,
    author:'Ana Costa', authorId:'demo', tags:['glutenfree'],
    description:'El plato nacional de Brasil. Frijoles negros con carnes ahumadas, servido con farofa y naranja.',
    ingredients:[
      {qty:500,unit:'g',name:'Frijoles negros',note:'en remojo 12h'},
      {qty:300,unit:'g',name:'Carne seca (charque)',note:'desalada 24h'},
      {qty:200,unit:'g',name:'Linguiça defumada',note:'chorizo ahumado'},
      {qty:200,unit:'g',name:'Costillas ahumadas',note:''},
      {qty:150,unit:'g',name:'Panceta',note:''},
      {qty:2,unit:'pieza',name:'Cebollas',note:'picadas'},
      {qty:4,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:2,unit:'pieza',name:'Hojas de laurel',note:''},
      {qty:1,unit:'pieza',name:'Naranja',note:'en rodajas, para acompañar'},
    ],
    steps:[
      {text:'Remoja las carnes saladas en agua 24h, cambiando el agua 2-3 veces.',tip:'Fundamental para eliminar el exceso de sal'},
      {text:'Cocina los frijoles hasta tiernos (1h en olla normal, 30 min en olla a presión).',tip:''},
      {text:'Fríe cebolla y ajo. Añade las carnes y dora.',tip:''},
      {text:'Incorpora todo a los frijoles con el laurel. Cocina 1 hora más.',tip:''},
      {text:'Sirve con arroz blanco, farofa (mandioca tostada), couve y naranja.',tip:''},
    ],
    tips:'La feijoada mejora enormemente al día siguiente. Prepara siempre de más.',
    reviews:[],
    createdAt:'2025-12-10'
  },
  {
    id:'r32', name:'Brigadeiro', country:'br', category:'dessert', emoji:'🍫',
    difficulty:'easy', servings:20, prepTime:5, cookTime:15, rating:4.9, views:5100,
    author:'Ana Costa', authorId:'demo', tags:['vegetarian'],
    description:'El dulce más querido de Brasil. Solo 3 ingredientes: leche condensada, mantequilla y chocolate. Magia pura.',
    ingredients:[
      {qty:1,unit:'pieza',name:'Lata de leche condensada (395g)',note:''},
      {qty:2,unit:'tbsp',name:'Mantequilla',note:''},
      {qty:4,unit:'tbsp',name:'Cacao en polvo sin azúcar',note:'o chocolate rallado'},
      {qty:100,unit:'g',name:'Granillo de chocolate',note:'para rebozar'},
    ],
    steps:[
      {text:'Mezcla la leche condensada, mantequilla y cacao en una cacerola.',tip:''},
      {text:'Cocina a fuego medio revolviendo constantemente hasta que se desprenda del fondo.',tip:'Unos 10-12 min. Pasa el dedo: debe cerrarse lentamente'},
      {text:'Vierte en plato engrasado. Enfría 1 hora en nevera.',tip:''},
      {text:'Forma bolitas con las manos engrasadas. Reboza en granillo de chocolate.',tip:''},
    ],
    tips:'El punto exacto del brigadeiro es cuando al pasar una cuchara por el fondo, el surco tarde en cerrarse.',
    reviews:[],
    createdAt:'2026-01-05'
  },
  {
    id:'r33', name:'Coxinha de Frango', country:'br', category:'snack', emoji:'🍗',
    difficulty:'medium', servings:20, prepTime:60, cookTime:20, rating:4.7, views:2200,
    author:'Ana Costa', authorId:'demo', tags:[],
    description:'El snack más famoso de Brasil. Masa de papa con relleno de pollo y queso catupiry en forma de muslo.',
    ingredients:[
      {qty:500,unit:'g',name:'Papa cocida y aplastada',note:''},
      {qty:200,unit:'g',name:'Harina de trigo',note:''},
      {qty:300,unit:'g',name:'Pechuga de pollo deshebrada',note:'cocida'},
      {qty:200,unit:'g',name:'Queso catupiry o crema',note:''},
      {qty:1,unit:'pieza',name:'Cebolla picada',note:''},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
      {qty:2,unit:'pieza',name:'Huevos',note:'para empanizar'},
      {qty:200,unit:'g',name:'Pan rallado',note:''},
    ],
    steps:[
      {text:'Mezcla papa aplastada con harina y sal hasta obtener una masa.',tip:''},
      {text:'Sofríe cebolla, añade el pollo deshebrado y catupiry. Sazona.',tip:''},
      {text:'Toma porciones de masa, aplana, pon relleno y forma la coxinha (forma de pera/muslo).',tip:''},
      {text:'Pasa por huevo batido y pan rallado.',tip:''},
      {text:'Fríe en aceite abundante a 170°C hasta dorar.',tip:''},
    ],
    tips:'La coxinha perfecta tiene la punta del muslo simulada. Es un arte brasileño.',
    reviews:[],
    createdAt:'2026-01-20'
  },
  {
    id:'r34', name:'Açaí na Tigela', country:'br', category:'breakfast', emoji:'🫐',
    difficulty:'easy', servings:2, prepTime:10, cookTime:0, rating:4.6, views:3400,
    author:'Ana Costa', authorId:'demo', tags:['vegetarian','vegan','glutenfree'],
    description:'El bowl de açaí brasileño. Energizante, lleno de antioxidantes y delicioso. Del Amazonas al mundo.',
    ingredients:[
      {qty:300,unit:'g',name:'Pulpa de açaí congelada',note:''},
      {qty:1,unit:'pieza',name:'Banana',note:''},
      {qty:100,unit:'ml',name:'Jugo de guaraná o agua',note:''},
      {qty:50,unit:'g',name:'Granola',note:''},
      {qty:1,unit:'pieza',name:'Banana en rodajas',note:'para decorar'},
      {qty:2,unit:'tbsp',name:'Miel',note:''},
      {qty:50,unit:'g',name:'Fresas',note:''},
    ],
    steps:[
      {text:'Licúa la pulpa de açaí congelada con banana y un poco de guaraná.',tip:'No añadas mucho líquido, debe quedar espeso como helado'},
      {text:'Vierte en bowl.',tip:''},
      {text:'Decora con granola, banana en rodajas, fresas y miel.',tip:''},
    ],
    tips:'El açaí auténtico amazónico no es dulce. El guaraná le da energía extra.',
    reviews:[],
    createdAt:'2026-02-01'
  },

  // ============================
  //  🇪🇸 ESPAÑA (4)
  // ============================
  {
    id:'r35', name:'Gazpacho Andaluz', country:'es', category:'soup', emoji:'🍅',
    difficulty:'easy', servings:6, prepTime:20, cookTime:0, rating:4.6, views:3200,
    author:'Carmen Rodríguez', authorId:'demo', tags:['vegetarian','vegan','glutenfree'],
    description:'La sopa fría española que conquista el mundo cada verano. Fresca, nutritiva y lista en 20 minutos.',
    ingredients:[
      {qty:1,unit:'kg',name:'Tomates maduros',note:''},
      {qty:1,unit:'pieza',name:'Pepino',note:''},
      {qty:1,unit:'pieza',name:'Pimiento rojo',note:''},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:100,unit:'ml',name:'Aceite de oliva virgen extra',note:''},
      {qty:2,unit:'tbsp',name:'Vinagre de Jerez',note:''},
      {qty:50,unit:'g',name:'Pan del día anterior',note:'sin corteza'},
      {qty:1,unit:'al gusto',name:'Sal',note:''},
    ],
    steps:[
      {text:'Remoja el pan en agua. Pela y trocea todos los ingredientes.',tip:''},
      {text:'Tritura todo junto en batidora de vaso potente.',tip:'Tritura varios minutos para que quede sedoso'},
      {text:'Cuela por colador fino para textura perfecta.',tip:''},
      {text:'Ajusta sal, vinagre y aceite. Enfría mínimo 2 horas.',tip:''},
      {text:'Sirve con guarnición de verduras picadas y un hilo de aceite.',tip:''},
    ],
    tips:'La calidad del aceite de oliva y del vinagre de Jerez marca la diferencia total.',
    reviews:[],
    createdAt:'2025-12-15'
  },
  {
    id:'r36', name:'Paella Valenciana', country:'es', category:'rice', emoji:'🥘',
    difficulty:'hard', servings:6, prepTime:30, cookTime:30, rating:4.8, views:4800,
    author:'Carmen Rodríguez', authorId:'demo', tags:['glutenfree'],
    description:'La paella auténtica de Valencia: con pollo, conejo, judías verdes y garrofó. Sin mariscos, ese es el original.',
    ingredients:[
      {qty:400,unit:'g',name:'Arroz bomba',note:''},
      {qty:500,unit:'g',name:'Pollo en trozos',note:''},
      {qty:300,unit:'g',name:'Conejo en trozos',note:''},
      {qty:200,unit:'g',name:'Judías verdes planas (ferradura)',note:''},
      {qty:100,unit:'g',name:'Garrofó (alubia blanca grande)',note:'o lima beans'},
      {qty:4,unit:'pieza',name:'Tomates',note:'rallados'},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:0.5,unit:'g',name:'Azafrán en hebras',note:''},
      {qty:100,unit:'ml',name:'Aceite de oliva',note:''},
      {qty:1.2,unit:'l',name:'Agua o caldo',note:'caliente'},
    ],
    steps:[
      {text:'Dora el pollo y el conejo en aceite en la paellera a fuego alto.',tip:'Que cojan buen color'},
      {text:'Añade las verduras y sofríe. Agrega el ajo y el tomate rallado.',tip:''},
      {text:'Disuelve el azafrán en un poco de agua caliente. Añade junto con el caldo.',tip:''},
      {text:'Cuando hierva, añade el arroz distribuyéndolo uniformemente. No mezcles más.',tip:''},
      {text:'Cocina a fuego alto 8 min, luego bajo 10 min. Deja reposar 5 min con papel de periódico.',tip:'El socarrat (capa tostada del fondo) es lo más preciado'},
    ],
    tips:'La paella se cocina al aire libre en Valencia. El fuego de leña de naranjo da el sabor único.',
    reviews:[],
    createdAt:'2026-01-01'
  },
  {
    id:'r37', name:'Tortilla de Patatas', country:'es', category:'appetizer', emoji:'🥚',
    difficulty:'medium', servings:6, prepTime:20, cookTime:30, rating:4.9, views:5600,
    author:'Carmen Rodríguez', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'La tortilla española que divide al país: ¿con o sin cebolla? Esta lleva cebolla, y está de escándalo.',
    ingredients:[
      {qty:600,unit:'g',name:'Patatas',note:'en láminas finas'},
      {qty:1,unit:'pieza',name:'Cebolla grande',note:'en juliana'},
      {qty:6,unit:'pieza',name:'Huevos grandes',note:''},
      {qty:200,unit:'ml',name:'Aceite de oliva',note:'para confitar'},
      {qty:1,unit:'al gusto',name:'Sal',note:''},
    ],
    steps:[
      {text:'Confita las patatas y cebolla en aceite a fuego bajo 20 min sin que se doren.',tip:'Deben quedar tiernas, no fritas'},
      {text:'Escurre bien el aceite. Mezcla con huevos batidos y sal.',tip:''},
      {text:'En sartén antiadherente con un poco de aceite, vierte la mezcla.',tip:''},
      {text:'Cuaja a fuego medio-bajo. Cuando el borde esté hecho, gira con un plato.',tip:'El centro debe quedar jugoso'},
      {text:'Cocina 2 min más. Sirve tibia o a temperatura ambiente.',tip:''},
    ],
    tips:'La tortilla perfecta queda jugosa por dentro. Si está seca, está pasada.',
    reviews:[],
    createdAt:'2026-01-15'
  },
  {
    id:'r38', name:'Churros con Chocolate', country:'es', category:'breakfast', emoji:'🍩',
    difficulty:'easy', servings:4, prepTime:10, cookTime:15, rating:4.7, views:4100,
    author:'Carmen Rodríguez', authorId:'demo', tags:['vegetarian'],
    description:'El desayuno de los madrugadores españoles. Churros crujientes bañados en chocolate espeso para mojar.',
    ingredients:[
      {qty:250,unit:'ml',name:'Agua hirviendo',note:''},
      {qty:150,unit:'g',name:'Harina de trigo',note:''},
      {qty:0.5,unit:'tsp',name:'Sal',note:''},
      {qty:400,unit:'ml',name:'Aceite para freír',note:''},
      {qty:2,unit:'tbsp',name:'Azúcar y canela',note:'para espolvorear'},
      {qty:200,unit:'g',name:'Chocolate negro',note:'para la salsa'},
      {qty:400,unit:'ml',name:'Leche',note:'para el chocolate'},
      {qty:2,unit:'tbsp',name:'Maicena',note:'para espesar el chocolate'},
    ],
    steps:[
      {text:'Mezcla el agua hirviendo con harina y sal hasta obtener masa sin grumos.',tip:''},
      {text:'Pon la masa en manga pastelera con boquilla estrellada.',tip:''},
      {text:'Fríe en aceite a 180°C formando tiras. Escurre sobre papel.',tip:''},
      {text:'Espolvorea con azúcar y canela.',tip:''},
      {text:'Para el chocolate: calienta leche con chocolate derretido y maicena hasta espesar.',tip:''},
    ],
    tips:'El chocolate para churros debe quedar muy espeso, casi como una crema para mojar.',
    reviews:[],
    createdAt:'2026-01-25'
  },

  // ============================
  //  🇨🇳 CHINA (4)
  // ============================
  {
    id:'r39', name:'Mapo Tofu', country:'cn', category:'main', emoji:'🫕',
    difficulty:'medium', servings:4, prepTime:10, cookTime:20, rating:4.7, views:3800,
    author:'Wei Chen', authorId:'demo', tags:['vegan','spicy','glutenfree'],
    description:'Tofu suave en una salsa picante y entumecedora de Sichuan. Con pimienta de Sichuan que hace cosquillas en la lengua.',
    ingredients:[
      {qty:400,unit:'g',name:'Tofu suave (silk)',note:'en cubos'},
      {qty:200,unit:'g',name:'Carne de cerdo molida',note:'opcional, omitir para vegano'},
      {qty:3,unit:'tbsp',name:'Pasta de chili doubanjiang',note:''},
      {qty:1,unit:'tbsp',name:'Pimienta de Sichuan',note:'tostada y molida'},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:'picados'},
      {qty:1,unit:'tbsp',name:'Jengibre fresco',note:'picado'},
      {qty:200,unit:'ml',name:'Caldo de pollo o verduras',note:''},
      {qty:1,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:2,unit:'tsp',name:'Maicena',note:'disuelta en agua'},
    ],
    steps:[
      {text:'Escalda el tofu en agua salada 2 min. Escurre con cuidado.',tip:'Esto firma el tofu y elimina exceso de agua'},
      {text:'Fríe la carne (si usas) hasta dorar. Añade ajo y jengibre.',tip:''},
      {text:'Añade el doubanjiang y cocina 2 min hasta que el aceite se torne rojo.',tip:'Este paso es el corazón del mapo tofu'},
      {text:'Añade el caldo y el tofu. Cocina 5 min a fuego medio.',tip:''},
      {text:'Espesa con maicena. Añade pimienta de Sichuan molida y aceite de chili.',tip:''},
    ],
    tips:'La pimienta de Sichuan produce el efecto ma (entumecimiento) característico. No lo substituyas.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r40', name:'Dim Sum: Har Gow', country:'cn', category:'appetizer', emoji:'🥟',
    difficulty:'hard', servings:4, prepTime:60, cookTime:10, rating:4.8, views:2100,
    author:'Wei Chen', authorId:'demo', tags:['glutenfree'],
    description:'Las empanadillas de gambas al vapor de Cantonés. Con su masa translúcida y el relleno jugoso. El dim sum más elegante.',
    ingredients:[
      {qty:300,unit:'g',name:'Gambas peladas',note:'picadas y enteras'},
      {qty:100,unit:'g',name:'Bambú en conserva',note:'picado fino'},
      {qty:150,unit:'g',name:'Almidón de trigo (wheat starch)',note:''},
      {qty:50,unit:'g',name:'Almidón de tapioca',note:''},
      {qty:150,unit:'ml',name:'Agua hirviendo',note:''},
      {qty:1,unit:'tbsp',name:'Aceite de sésamo',note:''},
      {qty:1,unit:'tbsp',name:'Salsa de soja ligera',note:''},
      {qty:1,unit:'tsp',name:'Azúcar',note:''},
    ],
    steps:[
      {text:'Mezcla las gambas, bambú, salsa de soja, sésamo y azúcar. Refrigera.',tip:''},
      {text:'Mezcla los almidones. Vierte el agua hirviendo de golpe y mezcla rápido.',tip:'La masa debe quedar translúcida y elástica'},
      {text:'Amasa hasta masa suave. Estira muy fina.',tip:''},
      {text:'Corta círculos, rellena y plisa con los dedos formando el pliegue clásico.',tip:'El har gow tiene entre 7 y 10 pliegues'},
      {text:'Cocina al vapor 8-10 min.',tip:''},
    ],
    tips:'El almidón de trigo (wheat starch) es diferente a la harina. Da la masa translúcida característica.',
    reviews:[],
    createdAt:'2026-01-25'
  },
  {
    id:'r41', name:'Pollo Kung Pao', country:'cn', category:'main', emoji:'🍗',
    difficulty:'medium', servings:4, prepTime:20, cookTime:15, rating:4.6, views:5200,
    author:'Wei Chen', authorId:'demo', tags:['spicy'],
    description:'Pollo salteado con maní, chiles secos y la famosa salsa kung pao. Un clásico de Sichuan.',
    ingredients:[
      {qty:600,unit:'g',name:'Pechuga de pollo',note:'en cubos'},
      {qty:80,unit:'g',name:'Maní tostado',note:'sin sal'},
      {qty:8,unit:'pieza',name:'Chiles secos de Sichuan',note:''},
      {qty:2,unit:'pieza',name:'Cebolletas',note:''},
      {qty:2,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:1,unit:'tbsp',name:'Vinagre de arroz',note:''},
      {qty:1,unit:'tbsp',name:'Azúcar',note:''},
      {qty:1,unit:'tbsp',name:'Pasta de chili',note:''},
      {qty:1,unit:'tsp',name:'Pimienta de Sichuan',note:''},
      {qty:2,unit:'tsp',name:'Maicena',note:''},
    ],
    steps:[
      {text:'Marina el pollo en soja, maicena y un poco de aceite.',tip:''},
      {text:'Prepara la salsa: soja, vinagre, azúcar, pasta de chili mezclados.',tip:''},
      {text:'En wok muy caliente, saltea los chiles y pimienta de Sichuan 30 seg.',tip:''},
      {text:'Añade el pollo y saltea a fuego alto hasta dorar.',tip:''},
      {text:'Añade la salsa, mezcla y termina con maní y cebolleta.',tip:''},
    ],
    tips:'El wok a fuego muy alto es esencial para el sabor ahumado "wok hei".',
    reviews:[],
    createdAt:'2026-02-01'
  },
  {
    id:'r42', name:'Dumplings de Cerdo al Vapor (Baozi)', country:'cn', category:'bread', emoji:'🥟',
    difficulty:'medium', servings:4, prepTime:60, cookTime:20, rating:4.7, views:2800,
    author:'Wei Chen', authorId:'demo', tags:[],
    description:'Los bollos esponjosos al vapor rellenos de cerdo. El desayuno más vendido en las calles de Shanghai.',
    ingredients:[
      {qty:300,unit:'g',name:'Harina',note:''},
      {qty:5,unit:'g',name:'Levadura seca',note:''},
      {qty:10,unit:'g',name:'Azúcar',note:''},
      {qty:150,unit:'ml',name:'Agua tibia',note:''},
      {qty:400,unit:'g',name:'Carne de cerdo molida',note:''},
      {qty:2,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:1,unit:'tbsp',name:'Aceite de sésamo',note:''},
      {qty:3,unit:'pieza',name:'Cebolletas',note:'picadas'},
      {qty:1,unit:'tbsp',name:'Jengibre rallado',note:''},
    ],
    steps:[
      {text:'Mezcla harina, levadura y azúcar. Añade agua tibia y amasa hasta masa elástica. Reposa 1h.',tip:''},
      {text:'Mezcla el relleno de cerdo con soja, sésamo, jengibre y cebolleta.',tip:''},
      {text:'Divide la masa en 16 porciones. Aplana cada una y rellena.',tip:''},
      {text:'Cierra juntando y plegando el borde hacia el centro formando el pliegue de baozi.',tip:''},
      {text:'Deja reposar 20 min más. Cocina al vapor 15-18 min.',tip:''},
    ],
    tips:'Los baozi necesitan reposar antes de cocinarse para que la masa fermente más.',
    reviews:[],
    createdAt:'2026-02-10'
  },

  // ============================
  //  🇬🇷 GRECIA (3)
  // ============================
  {
    id:'r43', name:'Moussaka', country:'gr', category:'main', emoji:'🍆',
    difficulty:'hard', servings:8, prepTime:40, cookTime:60, rating:4.8, views:3100,
    author:'Nikos Papadopoulos', authorId:'demo', tags:[],
    description:'La lasaña griega. Capas de berenjena, carne de cordero y bechamel gratinada. Un abrazo en cada porción.',
    ingredients:[
      {qty:3,unit:'pieza',name:'Berenjenas grandes',note:'en rodajas'},
      {qty:600,unit:'g',name:'Carne de cordero molida',note:'o vacuno'},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:1,unit:'tsp',name:'Canela molida',note:''},
      {qty:500,unit:'ml',name:'Leche entera',note:'para la bechamel'},
      {qty:50,unit:'g',name:'Mantequilla',note:'para la bechamel'},
      {qty:50,unit:'g',name:'Harina',note:'para la bechamel'},
      {qty:100,unit:'g',name:'Kefalotyri o Parmesano',note:''},
    ],
    steps:[
      {text:'Sala las berenjenas y deja reposar 30 min. Enjuaga, seca y asa en horno.',tip:''},
      {text:'Sofríe carne con cebolla, ajo, tomate y canela. Sazona.',tip:'La canela es el secreto de la moussaka griega'},
      {text:'Prepara bechamel clásica. Añade queso rallado y un huevo.',tip:''},
      {text:'En fuente: capa de berenjena, carne, berenjena y bechamel.',tip:''},
      {text:'Espolvorea queso y hornea a 180°C 40-45 min hasta dorar.',tip:''},
    ],
    tips:'La moussaka se debe comer 20 min después de sacarla del horno, cuando se asienta.',
    reviews:[],
    createdAt:'2025-12-01'
  },
  {
    id:'r44', name:'Tzatziki', country:'gr', category:'appetizer', emoji:'🥒',
    difficulty:'easy', servings:6, prepTime:15, cookTime:0, rating:4.7, views:4500,
    author:'Nikos Papadopoulos', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'La salsa-dip griega refrescante por excelencia. Yogur, pepino, ajo y eneldo. Perfecto con pita.',
    ingredients:[
      {qty:500,unit:'g',name:'Yogur griego entero',note:''},
      {qty:1,unit:'pieza',name:'Pepino grande',note:'rallado y escurrido'},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:'prensados'},
      {qty:2,unit:'tbsp',name:'Aceite de oliva virgen',note:''},
      {qty:1,unit:'tbsp',name:'Eneldo fresco picado',note:''},
      {qty:1,unit:'tbsp',name:'Menta fresca',note:'opcional'},
      {qty:1,unit:'tbsp',name:'Vinagre de vino blanco',note:''},
      {qty:1,unit:'al gusto',name:'Sal y pimienta',note:''},
    ],
    steps:[
      {text:'Ralla el pepino y exprime toda el agua con tus manos o un paño.',tip:'El pepino sin escurrir arruina el tzatziki'},
      {text:'Mezcla yogur, pepino, ajo, eneldo, aceite y vinagre.',tip:''},
      {text:'Sazona y refrigera 1 hora antes de servir.',tip:'El reposo mezcla los sabores'},
    ],
    tips:'Usa yogur griego entero, nunca desnatado. La grasa hace que sea cremoso.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r45', name:'Spanakopita', country:'gr', category:'appetizer', emoji:'🥬',
    difficulty:'medium', servings:8, prepTime:30, cookTime:40, rating:4.6, views:2200,
    author:'Nikos Papadopoulos', authorId:'demo', tags:['vegetarian'],
    description:'Pastel crujiente de espinacas y queso feta envuelto en hojas de pasta filo. La receta griega más exportada.',
    ingredients:[
      {qty:500,unit:'g',name:'Espinacas frescas',note:''},
      {qty:300,unit:'g',name:'Queso feta',note:'desmenuzado'},
      {qty:3,unit:'pieza',name:'Huevos',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:'picada'},
      {qty:1,unit:'pieza',name:'Manojo de eneldo',note:'picado'},
      {qty:10,unit:'pieza',name:'Hojas de pasta filo',note:''},
      {qty:100,unit:'g',name:'Mantequilla derretida',note:'para pintar'},
      {qty:1,unit:'al gusto',name:'Nuez moscada',note:''},
    ],
    steps:[
      {text:'Escurre las espinacas y pica. Sofríe la cebolla.',tip:''},
      {text:'Mezcla espinacas, feta, huevos, eneldo, cebolla y nuez moscada.',tip:''},
      {text:'Unta cada hoja de filo con mantequilla. Alterna capas en la bandeja.',tip:'El filo se seca rapidísimo, trabaja con agilidad'},
      {text:'Añade el relleno. Cubre con el resto del filo pintado con mantequilla.',tip:''},
      {text:'Corta en porciones antes de hornear. Hornea a 180°C 35-40 min.',tip:''},
    ],
    tips:'Trabaja rápido con el filo y mantenlo cubierto con un paño húmedo cuando no lo uses.',
    reviews:[],
    createdAt:'2026-01-20'
  },

  // ============================
  //  🇹🇭 TAILANDIA (3)
  // ============================
  {
    id:'r46', name:'Pad Thai', country:'th', category:'main', emoji:'🍜',
    difficulty:'medium', servings:2, prepTime:15, cookTime:15, rating:4.7, views:5100,
    author:'Nong Pattaya', authorId:'demo', tags:[],
    description:'El wok más famoso del sudeste asiático. Fideos de arroz, gambas, tofu y la irresistible salsa de tamarindo.',
    ingredients:[
      {qty:200,unit:'g',name:'Fideos de arroz planos',note:'remojados 30 min'},
      {qty:150,unit:'g',name:'Gambas peladas',note:''},
      {qty:100,unit:'g',name:'Tofu firme',note:'en cubos'},
      {qty:2,unit:'pieza',name:'Huevos',note:''},
      {qty:3,unit:'tbsp',name:'Salsa de tamarindo',note:''},
      {qty:2,unit:'tbsp',name:'Salsa de pescado',note:''},
      {qty:1,unit:'tbsp',name:'Azúcar de palma',note:''},
      {qty:50,unit:'g',name:'Cacahuetes tostados',note:'picados'},
      {qty:2,unit:'pieza',name:'Cebolletas',note:''},
      {qty:1,unit:'pieza',name:'Lima',note:''},
    ],
    steps:[
      {text:'Mezcla tamarindo, salsa de pescado y azúcar de palma. Reserva.',tip:''},
      {text:'Wok a fuego muy alto. Saltea gambas y tofu hasta dorar. Retira.',tip:''},
      {text:'Añade fideos y la salsa. Mezcla rápidamente.',tip:''},
      {text:'Haz un hueco, cuece los huevos revueltos e incorpora.',tip:''},
      {text:'Añade gambas y tofu. Sirve con cacahuetes, cebolleta, lima y chile.',tip:''},
    ],
    tips:'El fuego muy alto es obligatorio para el sabor ahumado del wok.',
    reviews:[],
    createdAt:'2026-01-05'
  },
  {
    id:'r47', name:'Tom Kha Gai', country:'th', category:'soup', emoji:'🍲',
    difficulty:'easy', servings:4, prepTime:10, cookTime:20, rating:4.8, views:3200,
    author:'Nong Pattaya', authorId:'demo', tags:['glutenfree'],
    description:'Sopa thai de pollo con leche de coco, galanga y hierba limón. Reconfortante, aromática y perfectamente equilibrada.',
    ingredients:[
      {qty:400,unit:'ml',name:'Leche de coco',note:''},
      {qty:300,unit:'ml',name:'Caldo de pollo',note:''},
      {qty:400,unit:'g',name:'Pechuga de pollo',note:'en rodajas finas'},
      {qty:200,unit:'g',name:'Champiñones',note:'en láminas'},
      {qty:3,unit:'pieza',name:'Ramas de hierba limón (lemongrass)',note:'machacadas'},
      {qty:5,unit:'pieza',name:'Rodajas de galanga (o jengibre)',note:''},
      {qty:5,unit:'pieza',name:'Hojas de lima kaffir',note:''},
      {qty:3,unit:'tbsp',name:'Salsa de pescado',note:''},
      {qty:2,unit:'tbsp',name:'Jugo de lima',note:''},
      {qty:3,unit:'pieza',name:'Chiles rojos',note:'al gusto'},
    ],
    steps:[
      {text:'Lleva la leche de coco y el caldo a ebullición con la hierba limón, galanga y hojas de lima.',tip:''},
      {text:'Añade el pollo y los champiñones. Cocina 8-10 min.',tip:''},
      {text:'Sazona con salsa de pescado. Retira del fuego y añade jugo de lima.',tip:'La lima siempre fuera del fuego para conservar su aroma'},
      {text:'Sirve con cilantro fresco y chiles.',tip:''},
    ],
    tips:'La galanga, hierba limón y hojas de lima no se comen. Son solo para aromatizar.',
    reviews:[],
    createdAt:'2026-01-20'
  },
  {
    id:'r48', name:'Mango Sticky Rice', country:'th', category:'dessert', emoji:'🥭',
    difficulty:'easy', servings:4, prepTime:15, cookTime:20, rating:4.9, views:4800,
    author:'Nong Pattaya', authorId:'demo', tags:['vegetarian','vegan','glutenfree'],
    description:'El postre tailandés más famoso del mundo. Arroz glutinoso con leche de coco y mango fresco. Pura felicidad.',
    ingredients:[
      {qty:300,unit:'g',name:'Arroz glutinoso',note:'remojado 4 horas'},
      {qty:400,unit:'ml',name:'Leche de coco',note:''},
      {qty:60,unit:'g',name:'Azúcar',note:''},
      {qty:0.5,unit:'tsp',name:'Sal',note:''},
      {qty:2,unit:'pieza',name:'Mangos maduros Nam Dok Mai',note:''},
      {qty:2,unit:'tbsp',name:'Semillas de sésamo tostadas',note:''},
    ],
    steps:[
      {text:'Cocina el arroz glutinoso al vapor 20 min.',tip:''},
      {text:'Calienta la leche de coco con azúcar y sal hasta disolver.',tip:''},
      {text:'Mezcla el arroz caliente con 2/3 de la leche de coco. Deja absorber 20 min.',tip:''},
      {text:'Calienta el resto de leche de coco (no hiervas). Es la salsa.',tip:''},
      {text:'Sirve el arroz con rodajas de mango, salsa de coco y sésamo.',tip:''},
    ],
    tips:'El mango tailandés Nam Dok Mai es el ideal. Usa el más maduro y dulce que encuentres.',
    reviews:[],
    createdAt:'2026-02-01'
  },

  // ============================
  //  🇵🇪 PERÚ (3)
  // ============================
  {
    id:'r49', name:'Ceviche Clásico Peruano', country:'pe', category:'seafood', emoji:'🦐',
    difficulty:'easy', servings:4, prepTime:20, cookTime:0, rating:4.9, views:5800,
    author:'Ricardo Lima', authorId:'demo', tags:['glutenfree'],
    description:'El rey de la cocina peruana. Pescado "cocido" en leche de tigre, con ají y cebolla morada. Fresco y vibrante.',
    ingredients:[
      {qty:600,unit:'g',name:'Corvina o lenguado fresco',note:'en cubos de 2cm'},
      {qty:200,unit:'ml',name:'Jugo de limón peruano',note:'unos 15 limones'},
      {qty:2,unit:'pieza',name:'Ajíes amarillos',note:'sin semillas'},
      {qty:1,unit:'pieza',name:'Cebolla morada',note:'en juliana fina'},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
      {qty:1,unit:'pieza',name:'Diente de ajo',note:''},
      {qty:1,unit:'al gusto',name:'Sal',note:''},
      {qty:1,unit:'pieza',name:'Camote cocido',note:'para acompañar'},
      {qty:1,unit:'pieza',name:'Choclo cocido',note:'para acompañar'},
    ],
    steps:[
      {text:'Sala el pescado generosamente y deja reposar 2 min.',tip:'La sal inicia la "cocción"'},
      {text:'Licúa la mitad del jugo de limón con ají, ajo, sal y un trozo de pescado. Es la leche de tigre.',tip:''},
      {text:'Mezcla el pescado con la leche de tigre y el resto del limón.',tip:''},
      {text:'Marina máximo 3 minutos. El pescado debe quedar "crudo por dentro".',tip:'Ceviche marinado de más pierde textura'},
      {text:'Añade cebolla morada y cilantro. Sirve inmediatamente con camote y choclo.',tip:''},
    ],
    tips:'El ceviche peruano auténtico no se marina horas. Solo minutos. La acidez hace el trabajo al instante.',
    reviews:[],
    createdAt:'2025-11-10'
  },
  {
    id:'r50', name:'Lomo Saltado', country:'pe', category:'main', emoji:'🥩',
    difficulty:'medium', servings:4, prepTime:20, cookTime:15, rating:4.7, views:3500,
    author:'Ricardo Lima', authorId:'demo', tags:[],
    description:'La fusión chino-peruana más sabrosa. Carne salteada con tomate, cebolla y papas fritas. Chifa clásico.',
    ingredients:[
      {qty:600,unit:'g',name:'Lomo de vacuno',note:'en tiras'},
      {qty:2,unit:'pieza',name:'Tomates',note:'en gajos'},
      {qty:2,unit:'pieza',name:'Cebollas moradas',note:'en gajos'},
      {qty:2,unit:'pieza',name:'Ajíes amarillos',note:'en tiras'},
      {qty:3,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:2,unit:'tbsp',name:'Vinagre tinto',note:''},
      {qty:1,unit:'tbsp',name:'Salsa de ostras',note:''},
      {qty:400,unit:'g',name:'Papas fritas',note:''},
      {qty:400,unit:'g',name:'Arroz blanco',note:'cocido'},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
    ],
    steps:[
      {text:'Sazona y sella la carne en wok muy caliente en porciones. Retira.',tip:'El fuego altísimo es esencial'},
      {text:'Saltea la cebolla y ají en el mismo wok.',tip:''},
      {text:'Añade la carne, soja, vinagre y salsa de ostras. Saltea 1 min.',tip:''},
      {text:'Añade los tomates y mezcla rápidamente.',tip:'Los tomates deben quedar enteros, no deshacerse'},
      {text:'Incorpora las papas fritas y el cilantro. Sirve con arroz.',tip:''},
    ],
    tips:'El secreto del lomo saltado es el "wok hei": el fuego tan alto que casi llama.',
    reviews:[],
    createdAt:'2025-11-25'
  },
  {
    id:'r51', name:'Ají de Gallina', country:'pe', category:'main', emoji:'🍗',
    difficulty:'medium', servings:6, prepTime:30, cookTime:40, rating:4.8, views:2900,
    author:'Ricardo Lima', authorId:'demo', tags:[],
    description:'Pollo desmenuzado en una crema amarilla de ají mirasol con pan remojado y nueces. Un abrazo peruano.',
    ingredients:[
      {qty:1,unit:'pieza',name:'Pollo entero',note:'cocido y deshebrado'},
      {qty:4,unit:'pieza',name:'Ajíes mirasol secos',note:'sin semillas y remojados'},
      {qty:4,unit:'pieza',name:'Rebanadas de pan blanco',note:'remojadas en leche'},
      {qty:100,unit:'g',name:'Nueces pecanas',note:'molidas'},
      {qty:100,unit:'g',name:'Queso parmesano',note:''},
      {qty:200,unit:'ml',name:'Leche evaporada',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:1,unit:'tsp',name:'Cúrcuma',note:'para el color'},
    ],
    steps:[
      {text:'Licúa los ajíes remojados. Sofríe cebolla y ajo en aceite.',tip:''},
      {text:'Añade el ají licuado y cocina 10 min a fuego medio.',tip:''},
      {text:'Licúa el pan remojado en leche y añade a la sartén junto con las nueces.',tip:''},
      {text:'Agrega la leche evaporada y el queso. Cocina hasta espesar.',tip:''},
      {text:'Incorpora el pollo. Sirve sobre arroz blanco y papas sancochadas.',tip:''},
    ],
    tips:'Acompaña con aceitunas botija, huevo duro y arroz blanco. Clásico peruano.',
    reviews:[],
    createdAt:'2026-01-10'
  },

  // ============================
  //  🇰🇷 COREA (3)
  // ============================
  {
    id:'r52', name:'Bibimbap', country:'kr', category:'rice', emoji:'🍚',
    difficulty:'medium', servings:2, prepTime:30, cookTime:20, rating:4.8, views:4200,
    author:'Ji-Young Kim', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'El bowl de arroz coreano con verduras coloridas, huevo frito y gochujang. Mezcla todo y disfruta.',
    ingredients:[
      {qty:400,unit:'g',name:'Arroz blanco cocido',note:''},
      {qty:150,unit:'g',name:'Espinacas blanqueadas',note:''},
      {qty:150,unit:'g',name:'Zanahoria en juliana',note:'salteada'},
      {qty:150,unit:'g',name:'Champiñones shiitake',note:'salteados'},
      {qty:150,unit:'g',name:'Brotes de soja',note:'blanqueados'},
      {qty:150,unit:'g',name:'Calabacín en juliana',note:'salteado'},
      {qty:2,unit:'pieza',name:'Huevos fritos',note:'yema blanda'},
      {qty:2,unit:'tbsp',name:'Gochujang (pasta de chile coreana)',note:''},
      {qty:2,unit:'tbsp',name:'Aceite de sésamo',note:''},
      {qty:1,unit:'tbsp',name:'Semillas de sésamo',note:''},
    ],
    steps:[
      {text:'Prepara cada verdura por separado: saltea o blanquea y sazona con soja y sésamo.',tip:'Cada ingrediente se prepara individualmente'},
      {text:'Calienta el bowl de piedra (dolsot) o usa bowl normal.',tip:''},
      {text:'Pon el arroz en el bowl. Coloca las verduras ordenadamente por colores.',tip:'La presentación es fundamental en el bibimbap'},
      {text:'Añade el huevo frito en el centro y el gochujang.',tip:''},
      {text:'Mezcla todo vigorosamente antes de comer.',tip:'Aquí está el placer del bibimbap'},
    ],
    tips:'El bibimbap en dolsot de piedra caliente crea el nurungji (arroz tostado crujiente del fondo). Es lo mejor.',
    reviews:[],
    createdAt:'2025-12-10'
  },
  {
    id:'r53', name:'Kimchi Jjigae (Estofado de Kimchi)', country:'kr', category:'soup', emoji:'🌶️',
    difficulty:'easy', servings:4, prepTime:10, cookTime:25, rating:4.7, views:3100,
    author:'Ji-Young Kim', authorId:'demo', tags:['spicy'],
    description:'El estofado de kimchi fermentado con cerdo y tofu. Reconfortante, picante y profundamente umami.',
    ingredients:[
      {qty:300,unit:'g',name:'Kimchi maduro (fermentado)',note:'con su líquido'},
      {qty:200,unit:'g',name:'Panceta de cerdo en trozos',note:''},
      {qty:200,unit:'g',name:'Tofu firme',note:'en cubos'},
      {qty:1,unit:'tbsp',name:'Gochugaru (chile coreano)',note:''},
      {qty:1,unit:'tbsp',name:'Gochujang',note:''},
      {qty:500,unit:'ml',name:'Agua o caldo ligero',note:''},
      {qty:1,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:2,unit:'pieza',name:'Cebolletas',note:''},
    ],
    steps:[
      {text:'Sofríe la panceta hasta dorar.',tip:''},
      {text:'Añade el kimchi y su líquido. Cocina 5 min.',tip:'El kimchi más fermentado, mejor sabor'},
      {text:'Añade el agua, gochugaru y gochujang. Lleva a ebullición.',tip:''},
      {text:'Incorpora el tofu y cocina 15 min a fuego medio.',tip:''},
      {text:'Sirve en cazuela, con cebolleta y arroz blanco aparte.',tip:''},
    ],
    tips:'El kimchi muy fermentado (meses) da el mejor resultado. El sabor agrio es fundamental.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r54', name:'Tteokbokki', country:'kr', category:'snack', emoji:'🌶️',
    difficulty:'easy', servings:2, prepTime:5, cookTime:15, rating:4.6, views:4800,
    author:'Ji-Young Kim', authorId:'demo', tags:['vegetarian','spicy'],
    description:'Los pasteles de arroz picantes que conquistan las calles de Seúl. Pegajosos, picantes y absolutamente adictivos.',
    ingredients:[
      {qty:300,unit:'g',name:'Tteok (pasteles de arroz coreanos)',note:'cilíndricos'},
      {qty:3,unit:'tbsp',name:'Gochujang',note:''},
      {qty:1,unit:'tbsp',name:'Gochugaru',note:''},
      {qty:1,unit:'tbsp',name:'Azúcar',note:''},
      {qty:1,unit:'tbsp',name:'Salsa de soja',note:''},
      {qty:300,unit:'ml',name:'Dashi o caldo de anchoas',note:''},
      {qty:2,unit:'pieza',name:'Huevos duros',note:''},
      {qty:2,unit:'pieza',name:'Pasteles de pescado (eomuk)',note:''},
    ],
    steps:[
      {text:'Calienta el caldo. Añade gochujang, gochugaru, azúcar y soja.',tip:''},
      {text:'Añade los tteok y los pasteles de pescado.',tip:''},
      {text:'Cocina a fuego medio 10 min hasta que la salsa espese y los tteok estén blandos.',tip:''},
      {text:'Añade los huevos duros al final.',tip:''},
    ],
    tips:'Los tteok frescos o refrigerados necesitan menos tiempo de cocción que los congelados.',
    reviews:[],
    createdAt:'2026-01-25'
  },

  // ============================
  //  🇲🇦 MARRUECOS (3)
  // ============================
  {
    id:'r55', name:'Tagine de Cordero con Ciruelas', country:'ma', category:'main', emoji:'🫕',
    difficulty:'medium', servings:6, prepTime:20, cookTime:120, rating:4.8, views:2500,
    author:'Fatima Zahara', authorId:'demo', tags:['glutenfree'],
    description:'El estofado marroquí en tajine. Cordero tierno con ciruelas, miel y almendras en una mezcla dulce-salada única.',
    ingredients:[
      {qty:1,unit:'kg',name:'Cordero en trozos',note:''},
      {qty:200,unit:'g',name:'Ciruelas pasas',note:''},
      {qty:50,unit:'g',name:'Almendras tostadas',note:''},
      {qty:2,unit:'tbsp',name:'Miel',note:''},
      {qty:1,unit:'tsp',name:'Ras el hanout',note:'mezcla de especias marroquí'},
      {qty:1,unit:'tsp',name:'Canela molida',note:''},
      {qty:0.5,unit:'tsp',name:'Jengibre molido',note:''},
      {qty:1,unit:'pieza',name:'Cebolla grande',note:''},
      {qty:500,unit:'ml',name:'Caldo de carne',note:''},
      {qty:3,unit:'tbsp',name:'Aceite de argán o oliva',note:''},
    ],
    steps:[
      {text:'Dora el cordero en aceite caliente. Retira.',tip:''},
      {text:'Sofríe la cebolla hasta transparente. Añade especias y tuesta 1 min.',tip:''},
      {text:'Regresa el cordero, añade el caldo. Tapa y cocina a fuego bajo 1.5 horas.',tip:''},
      {text:'Añade las ciruelas y miel. Cocina 30 min más.',tip:''},
      {text:'Sirve decorado con almendras tostadas y semillas de sésamo.',tip:''},
    ],
    tips:'El ras el hanout auténtico tiene más de 30 especias. Es la esencia de la cocina marroquí.',
    reviews:[],
    createdAt:'2025-12-05'
  },
  {
    id:'r56', name:'Harira', country:'ma', category:'soup', emoji:'🍲',
    difficulty:'medium', servings:8, prepTime:20, cookTime:60, rating:4.7, views:1900,
    author:'Fatima Zahara', authorId:'demo', tags:['vegan'],
    description:'La sopa marroquí del Ramadán. Con lentejas, garbanzos, tomate y especias. La sopa que rompe el ayuno.',
    ingredients:[
      {qty:200,unit:'g',name:'Lentejas rojas',note:''},
      {qty:200,unit:'g',name:'Garbanzos cocidos',note:''},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
      {qty:1,unit:'pieza',name:'Manojo de perejil',note:''},
      {qty:1,unit:'tsp',name:'Cúrcuma',note:''},
      {qty:1,unit:'tsp',name:'Canela',note:''},
      {qty:0.5,unit:'tsp',name:'Jengibre molido',note:''},
      {qty:2,unit:'tbsp',name:'Harina',note:'para espesar'},
    ],
    steps:[
      {text:'Sofríe cebolla con especias en aceite.',tip:''},
      {text:'Añade tomate y cocina 10 min.',tip:''},
      {text:'Añade lentejas, garbanzos y 1.5 litros de agua. Hierve.',tip:''},
      {text:'Disuelve la harina en agua fría y añade para espesar la sopa.',tip:''},
      {text:'Cocina 30 min más. Añade cilantro y perejil al final.',tip:''},
    ],
    tips:'Se sirve con dátiles, chebakia (pasteles de miel) y pan khobz. Sopa de bienvenida.',
    reviews:[],
    createdAt:'2026-01-15'
  },
  {
    id:'r57', name:'Couscous Royal', country:'ma', category:'main', emoji:'🌾',
    difficulty:'hard', servings:8, prepTime:30, cookTime:90, rating:4.8, views:2200,
    author:'Fatima Zahara', authorId:'demo', tags:[],
    description:'El couscous de fiesta marroquí. Sémola de trigo esponjosa con siete verduras y carne. El viernes en familia.',
    ingredients:[
      {qty:500,unit:'g',name:'Sémola de cuscús medio',note:''},
      {qty:600,unit:'g',name:'Pollo en trozos',note:''},
      {qty:300,unit:'g',name:'Cordero en trozos',note:''},
      {qty:2,unit:'pieza',name:'Zanahorias',note:''},
      {qty:2,unit:'pieza',name:'Calabacines',note:''},
      {qty:1,unit:'pieza',name:'Nabo',note:''},
      {qty:200,unit:'g',name:'Garbanzos cocidos',note:''},
      {qty:2,unit:'pieza',name:'Cebollas',note:''},
      {qty:1,unit:'tsp',name:'Ras el hanout',note:''},
      {qty:0.5,unit:'g',name:'Azafrán',note:''},
    ],
    steps:[
      {text:'Hidrata el cuscús con agua hirviendo y sal. Tapa y espera 5 min. Desgrána con tenedor.',tip:''},
      {text:'Cocina las carnes con cebolla, especias y azafrán en el caldo base.',tip:''},
      {text:'Añade las verduras más duras primero (zanahoria, nabo), luego las blandas.',tip:''},
      {text:'Cocina el cuscús al vapor sobre el guiso en la couscoussier.',tip:''},
      {text:'Sirve el cuscús montado en cúpula con el guiso y verduras encima.',tip:''},
    ],
    tips:'La couscoussier (olla especial) da el cuscús más esponjoso. Pero una vaporera funciona bien.',
    reviews:[],
    createdAt:'2026-01-30'
  },

  // ============================
  //  🇹🇷 TURQUÍA (3)
  // ============================
  {
    id:'r58', name:'Baklava', country:'tr', category:'dessert', emoji:'🍯',
    difficulty:'medium', servings:20, prepTime:40, cookTime:45, rating:4.9, views:4100,
    author:'Ayşe Yilmaz', authorId:'demo', tags:['vegetarian'],
    description:'El postre del Imperio Otomano. Capas crujientes de pasta filo con nueces y bañadas en jarabe de miel. Opulencia pura.',
    ingredients:[
      {qty:450,unit:'g',name:'Pasta filo (40 hojas)',note:''},
      {qty:300,unit:'g',name:'Nueces o pistachos picados',note:''},
      {qty:200,unit:'g',name:'Mantequilla clarificada',note:''},
      {qty:300,unit:'g',name:'Azúcar',note:'para el jarabe'},
      {qty:200,unit:'ml',name:'Agua',note:'para el jarabe'},
      {qty:100,unit:'g',name:'Miel',note:''},
      {qty:1,unit:'pieza',name:'Limón (jugo)',note:'para el jarabe'},
    ],
    steps:[
      {text:'Prepara el jarabe: hierve agua con azúcar 10 min, añade miel y limón. Enfría.',tip:'El jarabe frío sobre el baklava caliente es la clave'},
      {text:'Unta cada hoja de filo con mantequilla. Alterna 20 hojas en bandeja.',tip:''},
      {text:'Distribuye los frutos secos uniformemente.',tip:''},
      {text:'Cubre con 20 hojas más de filo, cada una pintada con mantequilla.',tip:''},
      {text:'Corta en rombos antes de hornear. Hornea a 160°C 45 min. Vierte el jarabe frío al salir.',tip:''},
    ],
    tips:'El contraste jarabe frío-baklava caliente crea la textura crujiente característica.',
    reviews:[],
    createdAt:'2025-12-20'
  },
  {
    id:'r59', name:'Köfte (Albóndigas Turcas a la Parrilla)', country:'tr', category:'main', emoji:'🍖',
    difficulty:'easy', servings:4, prepTime:20, cookTime:15, rating:4.6, views:2800,
    author:'Ayşe Yilmaz', authorId:'demo', tags:['glutenfree'],
    description:'Las albóndigas alargadas turcas con especias aromáticas. A la parrilla con pan pide y salsa de yogur.',
    ingredients:[
      {qty:600,unit:'g',name:'Carne de cordero y vacuno mezcladas',note:''},
      {qty:1,unit:'pieza',name:'Cebolla rallada',note:'escurrida'},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:'prensados'},
      {qty:1,unit:'tsp',name:'Comino molido',note:''},
      {qty:1,unit:'tsp',name:'Pimentón',note:''},
      {qty:0.5,unit:'tsp',name:'Canela molida',note:''},
      {qty:1,unit:'tbsp',name:'Menta seca',note:''},
      {qty:1,unit:'al gusto',name:'Sal y pimienta',note:''},
      {qty:4,unit:'pieza',name:'Panes pide o pita',note:''},
    ],
    steps:[
      {text:'Mezcla la carne con cebolla, ajo, especias y sal. Amasa 5 min.',tip:''},
      {text:'Forma cilindros alargados alrededor de brochetas.',tip:''},
      {text:'Refrigera 30 min para que se asienten.',tip:''},
      {text:'Asa en parrilla o plancha muy caliente, girando para dorar uniformemente.',tip:''},
      {text:'Sirve con pan pide, tomate, cebolla y salsa de yogur.',tip:''},
    ],
    tips:'La mezcla de cordero y vacuno da el sabor turco auténtico. Solo cordero es muy graso.',
    reviews:[],
    createdAt:'2026-01-05'
  },
  {
    id:'r60', name:'Menemen', country:'tr', category:'breakfast', emoji:'🍳',
    difficulty:'easy', servings:2, prepTime:5, cookTime:15, rating:4.5, views:2100,
    author:'Ayşe Yilmaz', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'El desayuno turco de huevos revueltos con tomate y pimiento. Simple, colorido y delicioso. Estambul en un plato.',
    ingredients:[
      {qty:4,unit:'pieza',name:'Huevos',note:''},
      {qty:3,unit:'pieza',name:'Tomates',note:'picados'},
      {qty:2,unit:'pieza',name:'Pimientos verdes o rojos',note:'picados'},
      {qty:1,unit:'pieza',name:'Cebolla',note:'picada'},
      {qty:2,unit:'tbsp',name:'Aceite de oliva',note:''},
      {qty:1,unit:'tsp',name:'Pimentón dulce',note:''},
      {qty:1,unit:'al gusto',name:'Sal, pimienta y chile',note:''},
    ],
    steps:[
      {text:'Sofríe la cebolla y pimiento en aceite a fuego medio.',tip:''},
      {text:'Añade los tomates y cocina hasta que se deshagan.',tip:''},
      {text:'Añade los huevos y mezcla suavemente sin que cuajen del todo.',tip:'El menemen debe quedar cremoso, no seco'},
      {text:'Sirve en la misma sartén con pan turco.',tip:''},
    ],
    tips:'El debate turco eterno: ¿menemen con o sin cebolla? Aquí respetamos ambas escuelas.',
    reviews:[],
    createdAt:'2026-01-20'
  },

  // ============================
  //  🇻🇳 VIETNAM (3)
  // ============================
  {
    id:'r61', name:'Pho Bo (Sopa de Res)', country:'vn', category:'soup', emoji:'🍜',
    difficulty:'hard', servings:6, prepTime:30, cookTime:240, rating:4.9, views:4500,
    author:'Linh Nguyen', authorId:'demo', tags:['glutenfree'],
    description:'La sopa nacional de Vietnam. Un caldo de res perfumado con especias, fideos de arroz y hierbas frescas.',
    ingredients:[
      {qty:1.5,unit:'kg',name:'Huesos de vacuno (tuétano y nudillos)',note:''},
      {qty:300,unit:'g',name:'Pecho de vacuno',note:''},
      {qty:400,unit:'g',name:'Fideos de arroz (banh pho)',note:''},
      {qty:1,unit:'pieza',name:'Cebolla grande',note:'asada'},
      {qty:1,unit:'pieza',name:'Jengibre grande',note:'asado'},
      {qty:3,unit:'pieza',name:'Anís estrellado',note:''},
      {qty:1,unit:'pieza',name:'Rama de canela',note:''},
      {qty:4,unit:'pieza',name:'Clavos de olor',note:''},
      {qty:2,unit:'tbsp',name:'Salsa de pescado',note:''},
      {qty:1,unit:'pieza',name:'Manojo de cilantro, albahaca y menta',note:'para servir'},
    ],
    steps:[
      {text:'Blanquea los huesos 10 min. Limpia y lleva con agua fresca.',tip:''},
      {text:'Asa la cebolla y jengibre directamente en la llama hasta chamuscar.',tip:'El chamusco da el sabor ahumado del pho'},
      {text:'Tuesta las especias en sartén seca. Añade al caldo junto con la cebolla y jengibre.',tip:''},
      {text:'Cocina el caldo 3-4 horas a fuego suave. Cuela y sazona con salsa de pescado.',tip:''},
      {text:'Sirve con fideos cocidos, carne en rodajas finas, hierbas y lima al gusto.',tip:''},
    ],
    tips:'El pho perfecto lleva tiempo. El caldo huele a hogar vietnamita desde la primera hora.',
    reviews:[],
    createdAt:'2025-12-15'
  },
  {
    id:'r62', name:'Bánh Mì', country:'vn', category:'snack', emoji:'🥖',
    difficulty:'easy', servings:4, prepTime:20, cookTime:10, rating:4.8, views:5200,
    author:'Linh Nguyen', authorId:'demo', tags:[],
    description:'El sandwich vietnamita. Pan crujiente estilo baguette con paté, cerdo, encurtidos y hierbas frescas. Fusión perfecta.',
    ingredients:[
      {qty:4,unit:'pieza',name:'Baguettes vietnamitas',note:'o baguettes francesas pequeñas'},
      {qty:200,unit:'g',name:'Paté de cerdo',note:''},
      {qty:200,unit:'g',name:'Chả lụa (salchicha vietnamita)',note:'o jamón'},
      {qty:150,unit:'g',name:'Zanahoria encurtida',note:''},
      {qty:150,unit:'g',name:'Daikon encurtido',note:''},
      {qty:1,unit:'pieza',name:'Pepino en bastones',note:''},
      {qty:2,unit:'pieza',name:'Chiles jalapeños',note:'en rodajas'},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
      {qty:3,unit:'tbsp',name:'Mayonesa',note:''},
      {qty:2,unit:'tbsp',name:'Salsa sriracha',note:''},
    ],
    steps:[
      {text:'Encurte zanahoria y daikon con vinagre, azúcar y sal 1 hora antes.',tip:''},
      {text:'Tosta el pan en horno o plancha para que quede crujiente.',tip:'El pan crujiente es fundamental'},
      {text:'Unta con mayonesa y paté.',tip:''},
      {text:'Rellena con salchicha, encurtidos, pepino, chile y cilantro.',tip:''},
      {text:'Añade sriracha al gusto y sirve inmediatamente.',tip:''},
    ],
    tips:'El bánh mì es la herencia culinaria de la colonización francesa en Vietnam. Un regalo cultural.',
    reviews:[],
    createdAt:'2026-01-05'
  },
  {
    id:'r63', name:'Gỏi Cuốn (Rollitos Frescos)', country:'vn', category:'appetizer', emoji:'🫔',
    difficulty:'easy', servings:4, prepTime:30, cookTime:0, rating:4.6, views:3800,
    author:'Linh Nguyen', authorId:'demo', tags:['glutenfree'],
    description:'Los rollitos de papel de arroz transparentes rellenos de gambas, cerdo y hierbas. Frescos, ligeros y saludables.',
    ingredients:[
      {qty:12,unit:'pieza',name:'Láminas de papel de arroz',note:''},
      {qty:200,unit:'g',name:'Gambas cocidas',note:''},
      {qty:150,unit:'g',name:'Cerdo cocido en rodajas finas',note:''},
      {qty:100,unit:'g',name:'Fideos de vidrio cocidos',note:''},
      {qty:1,unit:'pieza',name:'Lechuga en hojas',note:''},
      {qty:1,unit:'pieza',name:'Manojo de menta fresca',note:''},
      {qty:1,unit:'pieza',name:'Manojo de cilantro',note:''},
      {qty:1,unit:'pieza',name:'Pepino en bastones',note:''},
      {qty:4,unit:'tbsp',name:'Salsa de cacahuate (hoisin + maní)',note:'para mojar'},
    ],
    steps:[
      {text:'Hidrata el papel de arroz en agua tibia 15 segundos.',tip:'Solo hasta que esté flexible, no totalmente blando'},
      {text:'Coloca en superficie limpia. Pon lechuga, fideos, hierbas y pepino.',tip:''},
      {text:'Añade las gambas (que se vean a través del papel) y el cerdo.',tip:''},
      {text:'Dobla los lados y enrolla firmemente.',tip:''},
      {text:'Sirve con salsa de cacahuate o nuoc cham.',tip:''},
    ],
    tips:'Trabaja rápido: el papel de arroz se vuelve pegajoso enseguida. Prepara de uno en uno.',
    reviews:[],
    createdAt:'2026-01-20'
  },

  // ============================
  //  🇦🇷 ARGENTINA (2)
  // ============================
  {
    id:'r64', name:'Asado Argentino', country:'ar', category:'main', emoji:'🥩',
    difficulty:'hard', servings:8, prepTime:30, cookTime:120, rating:4.9, views:4800,
    author:'Diego Fernández', authorId:'demo', tags:['glutenfree'],
    description:'El ritual argentino por excelencia. Cortes de vacuno a la parrilla con chimichurri. Fuego lento y mucha paciencia.',
    ingredients:[
      {qty:2,unit:'kg',name:'Asado de tira (beef ribs)',note:''},
      {qty:1,unit:'kg',name:'Vacío',note:''},
      {qty:500,unit:'g',name:'Chorizo criollo',note:''},
      {qty:500,unit:'g',name:'Morcilla',note:''},
      {qty:1,unit:'pieza',name:'Manojo de perejil',note:'para chimichurri'},
      {qty:4,unit:'pieza',name:'Dientes de ajo',note:'para chimichurri'},
      {qty:100,unit:'ml',name:'Aceite de oliva',note:'para chimichurri'},
      {qty:3,unit:'tbsp',name:'Vinagre de vino tinto',note:'para chimichurri'},
      {qty:1,unit:'tsp',name:'Orégano',note:'para chimichurri'},
      {qty:1,unit:'al gusto',name:'Sal gruesa',note:''},
    ],
    steps:[
      {text:'Prepara las brasas. El fuego de madera o leña es ideal. Espera hasta tener brasas sin llama.',tip:''},
      {text:'Sala la carne con sal gruesa justo antes de poner en la parrilla.',tip:''},
      {text:'Pon primero las carnes más gruesas. El asado de tira necesita 45-60 min.',tip:'Fuego bajo y paciencia'},
      {text:'Añade chorizos y morcillas en los últimos 20 min.',tip:''},
      {text:'Prepara el chimichurri mezclando perejil, ajo, aceite, vinagre y orégano picados.',tip:''},
    ],
    tips:'El asado argentino no se apresura. La prisa es la enemiga de la parrilla. Fuego bajo, tiempo largo.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r65', name:'Empanadas Tucumanas', country:'ar', category:'snack', emoji:'🥟',
    difficulty:'medium', servings:12, prepTime:60, cookTime:20, rating:4.8, views:3200,
    author:'Diego Fernández', authorId:'demo', tags:[],
    description:'Las empanadas de Tucumán son las mejores de Argentina, dicen los tucumanos. Con carne jugosa y huevo duro. El repulgue es arte.',
    ingredients:[
      {qty:500,unit:'g',name:'Harina',note:''},
      {qty:100,unit:'g',name:'Grasa de vaca o manteca',note:''},
      {qty:200,unit:'ml',name:'Agua tibia con sal',note:''},
      {qty:400,unit:'g',name:'Carne de vacuno picada',note:'no muy fina'},
      {qty:2,unit:'pieza',name:'Cebollas de verdeo',note:''},
      {qty:2,unit:'pieza',name:'Huevos duros',note:'picados'},
      {qty:1,unit:'tsp',name:'Comino',note:''},
      {qty:1,unit:'tsp',name:'Pimentón',note:''},
      {qty:50,unit:'g',name:'Aceitunas',note:'picadas'},
      {qty:1,unit:'pieza',name:'Huevo',note:'para pintar'},
    ],
    steps:[
      {text:'Prepara la masa mezclando harina, grasa y agua con sal. Amasa hasta lisa. Reposa 30 min.',tip:''},
      {text:'Sofríe la carne con cebolla de verdeo y especias. Enfría bien.',tip:'El relleno frío no arruina la masa'},
      {text:'Añade huevo duro y aceitunas al relleno.',tip:''},
      {text:'Estira la masa y corta discos de 12 cm. Rellena sin exagerar.',tip:''},
      {text:'Haz el repulgue (borde característico). Pinta con huevo. Hornea a 200°C 20 min.',tip:''},
    ],
    tips:'El repulgue tucumano tiene 13 pliegues. Es la firma de cada familia argentina.',
    reviews:[],
    createdAt:'2026-01-25'
  },

  // ============================
  //  🇵🇹 PORTUGAL (2)
  // ============================
  {
    id:'r66', name:'Bacalhau à Brás', country:'pt', category:'main', emoji:'🐟',
    difficulty:'medium', servings:4, prepTime:30, cookTime:20, rating:4.7, views:2400,
    author:'Manuela Sousa', authorId:'demo', tags:['glutenfree'],
    description:'El bacalao desmenuzado con batatas fritas, huevos revueltos y aceitunas. El plato de las 1001 formas del bacalhau.',
    ingredients:[
      {qty:400,unit:'g',name:'Bacalao desalado y desmigado',note:''},
      {qty:400,unit:'g',name:'Papas paja fritas',note:'muy finas'},
      {qty:6,unit:'pieza',name:'Huevos',note:'batidos'},
      {qty:2,unit:'pieza',name:'Cebollas',note:'en juliana'},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:'laminados'},
      {qty:100,unit:'ml',name:'Aceite de oliva',note:'generoso'},
      {qty:50,unit:'g',name:'Aceitunas negras',note:''},
      {qty:1,unit:'pieza',name:'Manojo de perejil',note:''},
    ],
    steps:[
      {text:'Sofríe la cebolla y ajo en aceite hasta dorar ligeramente.',tip:''},
      {text:'Añade el bacalao desmigado y saltea.',tip:''},
      {text:'Incorpora las papas paja y mezcla rápidamente.',tip:''},
      {text:'Añade los huevos batidos y revuelve a fuego bajo hasta punto cremoso.',tip:'Como un scrambled egg suave'},
      {text:'Sirve con perejil picado y aceitunas.',tip:''},
    ],
    tips:'Portugal tiene más de 365 recetas de bacalhau, una para cada día del año. Esta es la más popular.',
    reviews:[],
    createdAt:'2026-01-05'
  },
  {
    id:'r67', name:'Pastel de Belém', country:'pt', category:'dessert', emoji:'🥧',
    difficulty:'hard', servings:12, prepTime:30, cookTime:20, rating:4.9, views:5800,
    author:'Manuela Sousa', authorId:'demo', tags:['vegetarian'],
    description:'Los pastéis de nata originales de Belém, Lisboa. Con su crema tostada y canela. Un patrimonio de la humanidad gastronómico.',
    ingredients:[
      {qty:1,unit:'pieza',name:'Masa de hojaldre',note:''},
      {qty:500,unit:'ml',name:'Leche entera',note:''},
      {qty:150,unit:'g',name:'Azúcar',note:''},
      {qty:50,unit:'g',name:'Harina',note:''},
      {qty:6,unit:'pieza',name:'Yemas de huevo',note:''},
      {qty:1,unit:'pieza',name:'Rama de canela',note:''},
      {qty:1,unit:'pieza',name:'Piel de limón',note:''},
      {qty:1,unit:'al gusto',name:'Canela en polvo y azúcar glas',note:'para servir'},
    ],
    steps:[
      {text:'Prepara el almíbar: azúcar con agua, canela y limón. Hierve y retira.',tip:''},
      {text:'Mezcla harina con un poco de leche. Añade el resto de leche caliente.',tip:''},
      {text:'Cuece hasta espesar. Retira, añade el almíbar y las yemas batidas.',tip:'Enfría antes de añadir las yemas'},
      {text:'Forra moldes con hojaldre muy fino. Rellena con la crema.',tip:'Solo hasta 2/3, que sube al hornear'},
      {text:'Hornea a máxima temperatura (250°C) 12-15 min hasta que la crema se tuesta.',tip:'Las manchas oscuras son el sello de calidad'},
    ],
    tips:'El secreto de Belém es el horno extremadamente caliente. Las manchas oscuras en la crema son perfectas, no un error.',
    reviews:[],
    createdAt:'2026-02-01'
  },

  // ============================
  //  🇺🇸 ESTADOS UNIDOS (2)
  // ============================
  {
    id:'r68', name:'BBQ Pulled Pork', country:'us', category:'main', emoji:'🐷',
    difficulty:'medium', servings:8, prepTime:20, cookTime:360, rating:4.8, views:3600,
    author:'Jack Williams', authorId:'demo', tags:['glutenfree'],
    description:'Paleta de cerdo ahumada lentamente hasta que se deshaga. El soul food del Sur americano con salsa BBQ casera.',
    ingredients:[
      {qty:2,unit:'kg',name:'Paleta de cerdo (boston butt)',note:''},
      {qty:2,unit:'tbsp',name:'Pimentón ahumado',note:''},
      {qty:1,unit:'tbsp',name:'Comino',note:''},
      {qty:1,unit:'tbsp',name:'Ajo en polvo',note:''},
      {qty:1,unit:'tbsp',name:'Cebolla en polvo',note:''},
      {qty:2,unit:'tbsp',name:'Azúcar morena',note:''},
      {qty:1,unit:'tsp',name:'Cayena',note:''},
      {qty:200,unit:'ml',name:'Salsa BBQ',note:'de bote o casera'},
      {qty:8,unit:'pieza',name:'Panes de brioche',note:'para servir'},
    ],
    steps:[
      {text:'Mezcla todas las especias. Frota generosamente toda la paleta.',tip:''},
      {text:'Refrigera 12 horas para que absorba los sabores.',tip:''},
      {text:'Hornea tapado a 120°C durante 5-6 horas.',tip:'Low and slow: el secreto del pulled pork'},
      {text:'Destapa y hornea 1 hora más hasta que la corteza esté crujiente.',tip:''},
      {text:'Desmenuza con dos tenedores. Mezcla con salsa BBQ. Sirve en brioche.',tip:''},
    ],
    tips:'La temperatura interna debe llegar a 95°C para que se deshebré solo.',
    reviews:[],
    createdAt:'2026-01-05'
  },
  {
    id:'r69', name:'New York Cheesecake', country:'us', category:'dessert', emoji:'🍰',
    difficulty:'medium', servings:12, prepTime:30, cookTime:70, rating:4.8, views:4200,
    author:'Jack Williams', authorId:'demo', tags:['vegetarian'],
    description:'La tarta de queso más famosa del mundo. Densa, cremosa y con base de graham crackers. Nueva York en un tenedor.',
    ingredients:[
      {qty:200,unit:'g',name:'Galletas Graham o digestivas',note:'trituradas'},
      {qty:80,unit:'g',name:'Mantequilla derretida',note:''},
      {qty:900,unit:'g',name:'Queso crema Philadelphia',note:'temperatura ambiente'},
      {qty:250,unit:'g',name:'Azúcar',note:''},
      {qty:4,unit:'pieza',name:'Huevos',note:''},
      {qty:200,unit:'ml',name:'Crema ácida (sour cream)',note:''},
      {qty:1,unit:'tbsp',name:'Extracto de vainilla',note:''},
      {qty:2,unit:'tbsp',name:'Harina',note:''},
    ],
    steps:[
      {text:'Mezcla galletas trituradas con mantequilla. Presiona en molde desmontable. Refrigera.',tip:''},
      {text:'Bate el queso crema con azúcar hasta suave. Añade los huevos uno a uno.',tip:'No sobrebatas, incorporas demasiado aire'},
      {text:'Añade crema ácida, vainilla y harina. Mezcla suavemente.',tip:''},
      {text:'Vierte sobre la base. Hornea a baño maría a 160°C 60-70 min.',tip:''},
      {text:'Apaga el horno y deja la tarta dentro 1 hora con la puerta entreabierta.',tip:'Evita que se agriete'},
    ],
    tips:'Refrigera mínimo 4 horas antes de servir. Mejor si es de un día para otro.',
    reviews:[],
    createdAt:'2026-01-20'
  },

  // ============================
  //  🇩🇪 ALEMANIA (2)
  // ============================
  {
    id:'r70', name:'Sauerbraten', country:'de', category:'main', emoji:'🥩',
    difficulty:'hard', servings:6, prepTime:30, cookTime:180, rating:4.6, views:1800,
    author:'Hans Müller', authorId:'demo', tags:['glutenfree'],
    description:'El asado alemán marinado en vinagre durante días. Agridulce, tierno y con la salsa de jengibre más especiada.',
    ingredients:[
      {qty:1.5,unit:'kg',name:'Redondo de vacuno',note:''},
      {qty:250,unit:'ml',name:'Vinagre de vino tinto',note:''},
      {qty:250,unit:'ml',name:'Vino tinto',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:2,unit:'pieza',name:'Zanahorias',note:''},
      {qty:10,unit:'pieza',name:'Granos de pimienta',note:''},
      {qty:5,unit:'pieza',name:'Clavos de olor',note:''},
      {qty:2,unit:'pieza',name:'Hojas de laurel',note:''},
      {qty:50,unit:'g',name:'Galletas de jengibre (Lebkuchen)',note:'para la salsa'},
      {qty:2,unit:'tbsp',name:'Azúcar morena',note:''},
    ],
    steps:[
      {text:'Marina la carne en vinagre, vino, verduras y especias 3-5 días en nevera.',tip:'Cuanto más tiempo, más intenso el sabor'},
      {text:'Saca la carne, seca bien y dora en aceite por todos lados.',tip:''},
      {text:'Añade la marinada colada y cocina a fuego bajo tapado 2.5 horas.',tip:''},
      {text:'Retira la carne. Añade las galletas de jengibre desmenuzadas a la salsa.',tip:'Las galletas espesanan y dan sabor especiado'},
      {text:'Tritura la salsa. Añade azúcar y ajusta acidez.',tip:''},
    ],
    tips:'El Sauerbraten requiere planificación: la marinada de 3-5 días es imprescindible.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r71', name:'Bretzel (Pretzel) con Mostaza', country:'de', category:'bread', emoji:'🥨',
    difficulty:'medium', servings:8, prepTime:90, cookTime:15, rating:4.7, views:3100,
    author:'Hans Müller', authorId:'demo', tags:['vegetarian'],
    description:'El pan alemán en forma de nudo. Crujiente por fuera, tierno por dentro y con el baño alcalino que le da ese color dorado único.',
    ingredients:[
      {qty:500,unit:'g',name:'Harina',note:''},
      {qty:7,unit:'g',name:'Levadura seca',note:''},
      {qty:30,unit:'g',name:'Mantequilla',note:''},
      {qty:10,unit:'g',name:'Azúcar',note:''},
      {qty:10,unit:'g',name:'Sal',note:''},
      {qty:280,unit:'ml',name:'Agua tibia',note:''},
      {qty:50,unit:'g',name:'Bicarbonato de sodio',note:'para el baño'},
      {qty:1,unit:'l',name:'Agua caliente',note:'para el baño'},
      {qty:1,unit:'tbsp',name:'Sal gruesa',note:'para decorar'},
    ],
    steps:[
      {text:'Mezcla todos los ingredientes de la masa y amasa 10 min. Reposa 1 hora.',tip:''},
      {text:'Forma 8 rollos largos y moldea en forma de nudo de pretzel.',tip:''},
      {text:'Hierve el agua con bicarbonato. Sumerge cada pretzel 30 segundos.',tip:'El baño alcalino es lo que da el color marrón característico'},
      {text:'Coloca en bandeja, espolvorea sal gruesa.',tip:''},
      {text:'Hornea a 220°C 12-15 min hasta marrón dorado.',tip:''},
    ],
    tips:'El baño de bicarbonato (Laugengebäck) es lo que distingue el pretzel de cualquier otro pan.',
    reviews:[],
    createdAt:'2026-01-25'
  },

  // ============================
  //  🇱🇧 LÍBANO (2)
  // ============================
  {
    id:'r72', name:'Hummus Beirutí', country:'lb', category:'appetizer', emoji:'🫘',
    difficulty:'easy', servings:6, prepTime:15, cookTime:0, rating:4.8, views:5100,
    author:'Rima Haddad', authorId:'demo', tags:['vegetarian','vegan','glutenfree'],
    description:'El hummus más cremoso que probarás. Con el secreto de los garbanzos calientes y mucho tahini. Beirut en un plato.',
    ingredients:[
      {qty:400,unit:'g',name:'Garbanzos cocidos (calientes)',note:'reserva el agua de cocción'},
      {qty:80,unit:'ml',name:'Tahini (pasta de sésamo)',note:''},
      {qty:2,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:60,unit:'ml',name:'Jugo de limón',note:''},
      {qty:50,unit:'ml',name:'Agua de cocción de garbanzos',note:''},
      {qty:1,unit:'tsp',name:'Sal',note:''},
      {qty:2,unit:'tbsp',name:'Aceite de oliva',note:'para servir'},
      {qty:1,unit:'tsp',name:'Pimentón',note:''},
    ],
    steps:[
      {text:'Tritura los garbanzos CALIENTES con el tahini hasta que la mezcla esté casi fina.',tip:'Los garbanzos calientes son el secreto de la cremosidad'},
      {text:'Añade el ajo, limón y sal. Tritura añadiendo el agua de cocción poco a poco.',tip:''},
      {text:'Tritura varios minutos hasta obtener textura muy suave.',tip:'En Líbano procesan 10+ minutos'},
      {text:'Refrigera 1 hora.',tip:''},
      {text:'Sirve con aceite de oliva, pimentón y perejil. Con pan pita.',tip:''},
    ],
    tips:'La clave es pelar cada garbanzo individualmente (tedioso pero vale la pena) para que quede sedoso.',
    reviews:[],
    createdAt:'2025-12-01'
  },
  {
    id:'r73', name:'Kibbeh', country:'lb', category:'main', emoji:'🫓',
    difficulty:'hard', servings:8, prepTime:60, cookTime:30, rating:4.7, views:2100,
    author:'Rima Haddad', authorId:'demo', tags:[],
    description:'El plato nacional del Líbano. Croquetas de trigo bulgur y carne de cordero rellenas. El orgullo culinario levantino.',
    ingredients:[
      {qty:500,unit:'g',name:'Trigo bulgur fino',note:'remojado 30 min'},
      {qty:600,unit:'g',name:'Carne de cordero molida',note:''},
      {qty:1,unit:'pieza',name:'Cebolla grande',note:''},
      {qty:1,unit:'tsp',name:'Canela molida',note:''},
      {qty:0.5,unit:'tsp',name:'Pimienta de Jamaica',note:''},
      {qty:0.5,unit:'tsp',name:'Nuez moscada',note:''},
      {qty:100,unit:'g',name:'Piñones',note:''},
      {qty:1,unit:'pieza',name:'Cebolla pequeña',note:'para el relleno'},
      {qty:400,unit:'ml',name:'Aceite',note:'para freír'},
    ],
    steps:[
      {text:'Escurre el bulgur. Mezcla con la mitad de la carne, cebolla rallada y especias. Procesa hasta masa.',tip:''},
      {text:'Sofríe la cebolla y el resto de la carne. Añade piñones y especias.',tip:'Este es el relleno'},
      {text:'Forma óvalos con la masa, haz un hueco con el dedo, rellena y cierra.',tip:'La forma debe parecer un huevo'},
      {text:'Fríe en aceite a 170°C hasta dorar uniformemente.',tip:''},
    ],
    tips:'El kibbeh crudo (kibbeh nayyeh) también es tradicional. Es el steak tartare del Líbano.',
    reviews:[],
    createdAt:'2026-01-15'
  },

  // ============================
  //  🇨🇴 COLOMBIA (2)
  // ============================
  {
    id:'r74', name:'Ajiaco Bogotano', country:'co', category:'soup', emoji:'🍲',
    difficulty:'medium', servings:8, prepTime:20, cookTime:90, rating:4.8, views:2500,
    author:'Carolina Gómez', authorId:'demo', tags:['glutenfree'],
    description:'La sopa insignia de Bogotá. Con tres tipos de papa, pollo, mazorca y guasca. El plato que une a los colombianos.',
    ingredients:[
      {qty:1,unit:'kg',name:'Pollo en presas',note:''},
      {qty:500,unit:'g',name:'Papa criolla',note:''},
      {qty:500,unit:'g',name:'Papa pastusa',note:''},
      {qty:300,unit:'g',name:'Papa sabanera o icor',note:''},
      {qty:3,unit:'pieza',name:'Mazorcas de maíz',note:'en trozos'},
      {qty:3,unit:'tbsp',name:'Guasca seca',note:'hierba colombiana'},
      {qty:200,unit:'ml',name:'Crema de leche',note:''},
      {qty:100,unit:'g',name:'Alcaparras',note:''},
      {qty:1,unit:'pieza',name:'Aguacate',note:'para acompañar'},
    ],
    steps:[
      {text:'Cocina el pollo con la papa sabanera y la mazorca hasta que el pollo esté tierno.',tip:''},
      {text:'Retira el pollo, deshebra y reserva.',tip:''},
      {text:'Añade la papa criolla al caldo. Se deshará y espesará la sopa.',tip:'La papa criolla es la que espesa el ajiaco'},
      {text:'Añade la papa pastusa en trozos y la guasca.',tip:'La guasca es el sabor único del ajiaco'},
      {text:'Cocina 30 min más. Añade el pollo. Sirve con crema, alcaparras y aguacate.',tip:''},
    ],
    tips:'La guasca seca (Galinsoga parviflora) es insustituible. Sin ella, es otra sopa muy buena, pero no es ajiaco.',
    reviews:[],
    createdAt:'2025-12-20'
  },
  {
    id:'r75', name:'Bandeja Paisa', country:'co', category:'main', emoji:'🍽️',
    difficulty:'hard', servings:4, prepTime:60, cookTime:120, rating:4.7, views:2800,
    author:'Carolina Gómez', authorId:'demo', tags:[],
    description:'El plato más generoso de Colombia. Frijoles, chicharrón, carne molida, chorizo, huevo, aguacate, arroz y arepa. Un festín.',
    ingredients:[
      {qty:400,unit:'g',name:'Frijoles rojos',note:'cocinados'},
      {qty:400,unit:'g',name:'Carne molida condimentada',note:''},
      {qty:4,unit:'pieza',name:'Chorizos colombianos',note:''},
      {qty:300,unit:'g',name:'Chicharrón (piel de cerdo)',note:''},
      {qty:4,unit:'pieza',name:'Huevos fritos',note:''},
      {qty:4,unit:'pieza',name:'Arepas',note:''},
      {qty:2,unit:'pieza',name:'Aguacates',note:''},
      {qty:400,unit:'g',name:'Arroz blanco',note:''},
      {qty:4,unit:'pieza',name:'Plátanos maduros fritos',note:''},
    ],
    steps:[
      {text:'Cocina los frijoles con hogao (sofrito de tomate y cebolla).',tip:''},
      {text:'Prepara la carne molida condimentada con comino y cebolla.',tip:''},
      {text:'Fríe los chorizos y el chicharrón hasta crujiente.',tip:''},
      {text:'Fríe los plátanos maduros y prepara los huevos fritos.',tip:''},
      {text:'Calienta las arepas. Monta la bandeja con todo servido por separado.',tip:''},
    ],
    tips:'La bandeja paisa se sirve todo junto en la misma bandeja. Es abundancia que da orgullo.',
    reviews:[],
    createdAt:'2026-01-15'
  },

  // ============================
  //  🇷🇺 RUSIA (2)
  // ============================
  {
    id:'r76', name:'Borsch Ucraniano-Ruso', country:'ru', category:'soup', emoji:'🍵',
    difficulty:'medium', servings:8, prepTime:30, cookTime:60, rating:4.6, views:2300,
    author:'Natasha Volkov', authorId:'demo', tags:['vegetarian','glutenfree'],
    description:'La sopa de remolacha que tiñe el alma de rojo. Dulce, ácida y reconfortante. Con crema agria y pan de centeno.',
    ingredients:[
      {qty:3,unit:'pieza',name:'Remolachas',note:'ralladas'},
      {qty:0.5,unit:'pieza',name:'Repollo',note:'en juliana'},
      {qty:3,unit:'pieza',name:'Papas',note:'en cubos'},
      {qty:2,unit:'pieza',name:'Zanahorias',note:'ralladas'},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:2,unit:'l',name:'Caldo de verduras o carne',note:''},
      {qty:2,unit:'tbsp',name:'Vinagre',note:'para fijar el color'},
      {qty:200,unit:'ml',name:'Crema agria (smetana)',note:''},
      {qty:3,unit:'pieza',name:'Dientes de ajo',note:''},
    ],
    steps:[
      {text:'Sofríe cebolla y zanahoria. Añade la remolacha y el vinagre.',tip:'El vinagre mantiene el color rojo vivo'},
      {text:'Añade el caldo y el tomate. Lleva a ebullición.',tip:''},
      {text:'Incorpora las papas y el repollo. Cocina 30 min.',tip:''},
      {text:'Añade el ajo picado en los últimos 5 min.',tip:''},
      {text:'Sirve con crema agria, eneldo y pan de centeno.',tip:''},
    ],
    tips:'El borscht sabe mejor al día siguiente. Prepara siempre el doble.',
    reviews:[],
    createdAt:'2026-01-10'
  },
  {
    id:'r77', name:'Pelmeni (Dumplings Siberianos)', country:'ru', category:'main', emoji:'🥟',
    difficulty:'medium', servings:4, prepTime:60, cookTime:15, rating:4.7, views:2100,
    author:'Natasha Volkov', authorId:'demo', tags:[],
    description:'Las empanadillas siberianas hervidas con relleno de carne. Comfort food ruso que sobrevivió a los inviernos más crudos.',
    ingredients:[
      {qty:300,unit:'g',name:'Harina',note:''},
      {qty:1,unit:'pieza',name:'Huevo',note:''},
      {qty:100,unit:'ml',name:'Agua tibia',note:''},
      {qty:0.5,unit:'tsp',name:'Sal',note:''},
      {qty:400,unit:'g',name:'Carne mixta (cerdo y vacuno)',note:'molida'},
      {qty:1,unit:'pieza',name:'Cebolla',note:'rallada'},
      {qty:1,unit:'tsp',name:'Pimienta negra',note:''},
      {qty:200,unit:'ml',name:'Crema agria',note:'para servir'},
      {qty:1,unit:'tbsp',name:'Mantequilla',note:'para servir'},
    ],
    steps:[
      {text:'Amasa la harina con huevo, agua y sal hasta masa elástica. Reposa 30 min.',tip:''},
      {text:'Mezcla la carne con cebolla rallada, sal y pimienta.',tip:''},
      {text:'Estira la masa fina. Corta círculos de 6-7 cm.',tip:''},
      {text:'Rellena con una cucharadita de carne y dobla sellando bien los bordes.',tip:''},
      {text:'Hierve en agua salada 8-10 min hasta que floten y estén cocidos.',tip:''},
    ],
    tips:'En Siberia los pelmeni se congelaban al aire libre y se guardaban en sacos para el invierno.',
    reviews:[],
    createdAt:'2026-01-25'
  },

  // ============================
  //  🇳🇬 NIGERIA (2)
  // ============================
  {
    id:'r78', name:'Jollof Rice', country:'ng', category:'rice', emoji:'🍚',
    difficulty:'medium', servings:6, prepTime:20, cookTime:45, rating:4.8, views:3900,
    author:'Chioma Obi', authorId:'demo', tags:['vegan','glutenfree'],
    description:'El arroz más debatido de África Occidental. Nigeria vs Ghana: ¿cuál es el mejor? El nigeriano. Ahumado y especiado.',
    ingredients:[
      {qty:400,unit:'g',name:'Arroz de grano largo',note:''},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:2,unit:'pieza',name:'Pimientos rojos',note:''},
      {qty:1,unit:'pieza',name:'Cebolla grande',note:''},
      {qty:2,unit:'pieza',name:'Chiles scotch bonnet',note:''},
      {qty:500,unit:'ml',name:'Caldo de pollo',note:''},
      {qty:3,unit:'tbsp',name:'Aceite de palma rojo',note:'o aceite vegetal'},
      {qty:1,unit:'tsp',name:'Curry en polvo',note:''},
      {qty:1,unit:'tsp',name:'Tomillo',note:''},
      {qty:2,unit:'pieza',name:'Hojas de laurel',note:''},
    ],
    steps:[
      {text:'Tritura tomates, pimiento, cebolla y chiles. Fríe en aceite 15 min hasta secar.',tip:''},
      {text:'Añade el caldo, especias y laurel. Lleva a ebullición.',tip:''},
      {text:'Añade el arroz lavado. Tapa bien y cocina a fuego bajo.',tip:''},
      {text:'No abras la tapa durante 25 min. El vapor hace el trabajo.',tip:''},
      {text:'El ahumado del fondo es el "party jollof" que todos buscan.',tip:'Ese tostado del fondo es el secreto del jollof nigeriano'},
    ],
    tips:'El jollof en hoguera de madera (party jollof) es el favorito. El ahumado natural lo hace épico.',
    reviews:[],
    createdAt:'2026-01-20'
  },
  {
    id:'r79', name:'Egusi Soup', country:'ng', category:'soup', emoji:'🌿',
    difficulty:'medium', servings:6, prepTime:20, cookTime:45, rating:4.6, views:1800,
    author:'Chioma Obi', authorId:'demo', tags:['glutenfree'],
    description:'La sopa de semillas de calabaza trituradas con hojas verdes y carne ahumada. El corazón de la cocina nigeriana.',
    ingredients:[
      {qty:200,unit:'g',name:'Semillas de egusi (calabaza) molidas',note:''},
      {qty:300,unit:'g',name:'Carne de vacuno ahumada',note:''},
      {qty:200,unit:'g',name:'Pescado ahumado desmenuzado',note:''},
      {qty:400,unit:'g',name:'Hojas de ugu (hojas de calabaza)',note:'o espinacas'},
      {qty:400,unit:'ml',name:'Caldo',note:''},
      {qty:3,unit:'tbsp',name:'Aceite de palma rojo',note:''},
      {qty:1,unit:'pieza',name:'Cebolla',note:''},
      {qty:2,unit:'pieza',name:'Chiles scotch bonnet',note:''},
      {qty:2,unit:'cubitos',name:'Maggi o caldo en cubito',note:''},
    ],
    steps:[
      {text:'Sofríe la cebolla en aceite de palma. Añade el egusi molido.',tip:'El egusi se tuesta y forma gránulos'},
      {text:'Añade el caldo y la carne ahumada. Cocina 20 min.',tip:''},
      {text:'Añade el pescado ahumado y el chile.',tip:''},
      {text:'Incorpora las hojas verdes en los últimos 5 min.',tip:'No sobre-cocines las hojas'},
      {text:'Sirve con eba (gari fermentado) o fufu.',tip:''},
    ],
    tips:'El egusi se disuelve en el caldo creando una textura única. Es uno de los sabores más característicos de Nigeria.',
    reviews:[],
    createdAt:'2026-02-01'
  },

  // ============================
  //  🇪🇬 EGIPTO (1)
  // ============================
  {
    id:'r80', name:'Koshari', country:'eg', category:'main', emoji:'🍚',
    difficulty:'medium', servings:6, prepTime:20, cookTime:40, rating:4.7, views:2400,
    author:'Ahmed Hassan', authorId:'demo', tags:['vegetarian','vegan'],
    description:'El plato nacional de Egipto. Arroz, lentejas, pasta, garbanzos y salsa de tomate picante. El street food más querido del Cairo.',
    ingredients:[
      {qty:300,unit:'g',name:'Arroz',note:''},
      {qty:200,unit:'g',name:'Lentejas negras',note:'cocidas'},
      {qty:200,unit:'g',name:'Macarrones o ditalini',note:'cocidos'},
      {qty:200,unit:'g',name:'Garbanzos cocidos',note:''},
      {qty:2,unit:'pieza',name:'Cebollas',note:'en juliana, muy doradas'},
      {qty:400,unit:'g',name:'Tomates triturados',note:''},
      {qty:4,unit:'pieza',name:'Dientes de ajo',note:''},
      {qty:2,unit:'pieza',name:'Chiles rojos',note:''},
      {qty:3,unit:'tbsp',name:'Vinagre',note:''},
      {qty:1,unit:'tsp',name:'Comino molido',note:''},
    ],
    steps:[
      {text:'Cocina el arroz con comino y sal.',tip:''},
      {text:'Fríe la cebolla en juliana hasta dorado oscuro y crujiente.',tip:'Esta cebolla crujiente es el toque final imprescindible'},
      {text:'Prepara la salsa: fríe ajo y chile, añade tomate, vinagre y especias. Cocina 15 min.',tip:''},
      {text:'Monta los bowls: arroz, lentejas, pasta y garbanzos mezclados.',tip:''},
      {text:'Cubre con salsa de tomate y cebolla crujiente.',tip:''},
    ],
    tips:'El koshari es la fusión de influencias italianas, indias y árabes en un solo plato. La historia de Egipto en un bowl.',
    reviews:[],
    createdAt:'2026-02-05'
  },

];

// ============================================================
//  APP STATE
// ============================================================
let STATE = {
  recipes: [],
  users: [],
  currentUser: null,
  favorites: [],
  currentRecipeId: null,
  currentRatingRecipeId: null,
  currentRating: 0,
  ingredientCount: 1,
  stepCount: 1,
  currentFormStep: 1,
  selectedEmoji: '🍽️',
  language: 'es',
  theme: 'light',
  siteConfig: null,
};

function initData() {
  const saved = localStorage.getItem('cookiwiki_recipes');
  STATE.recipes = saved ? JSON.parse(saved) : [...SEED_RECIPES];

  const savedUsers = localStorage.getItem('cookiwiki_users');
  STATE.users = savedUsers ? JSON.parse(savedUsers) : [
    { id: 'admin', email: 'admin@cookiwiki.com', password: 'admin2026',
      name: 'Admin CookiWiki', username: '@admin', emoji: '🛡️',
      country: 'es', bio: 'Administrador oficial de CookiWiki.',
      role: 'admin', createdAt: '2025-01-01' },
    { id: 'demo', email: 'demo@cookiwiki.com', password: 'demo123',
      name: 'Chef Demo', username: '@chefdemo', emoji: '👨‍🍳',
      country: 'it', bio: 'Apasionado de la cocina italiana y mundial.',
      role: 'user', createdAt: '2025-10-01' }
  ];

  // Garantiza que admin siempre exista
  if (!STATE.users.find(u => u.id === 'admin')) {
    STATE.users.unshift({
      id: 'admin', email: 'admin@cookiwiki.com', password: 'admin2026',
      name: 'Admin CookiWiki', username: '@admin', emoji: '🛡️',
      country: 'es', bio: 'Administrador oficial de CookiWiki.',
      role: 'admin', createdAt: '2025-01-01'
    });
    saveUsers();
  }

  const savedSiteConfig = localStorage.getItem('cookiwiki_siteconfig');
  STATE.siteConfig = savedSiteConfig ? JSON.parse(savedSiteConfig) : {
    siteName: 'CookiWiki',
    tagline: 'La enciclopedia culinaria del mundo',
    heroTitle: 'Sabores de todos los rincones',
    heroDesc: 'Descubre, comparte y aprende recetas auténticas de más de 50 países. Una comunidad apasionada por la gastronomía mundial.',
    accentColor: '#C8401A', accentColor2: '#E8742A', goldColor: '#D4A017',
    fontDisplay: 'Playfair Display',
    allowRegistration: true, allowRecipeUpload: true, maintenanceMode: false,
    footerText: 'Hecho con ❤️ por la comunidad',
    aboutMission: 'CookiWiki nació con una idea simple pero poderosa: reunir las recetas auténticas de cada rincón del mundo.',
    contactEmail: 'hola@cookiwiki.com',
    socialInstagram: '#', socialTwitter: '#', socialYoutube: '#', socialTiktok: '#',
    bannerEnabled: false,
    bannerText: '🎉 ¡Bienvenido a CookiWiki! Regístrate gratis y comparte tus recetas.',
    bannerColor: '#C8401A',
  };

  const savedUser = localStorage.getItem('cookiwiki_user');
  if (savedUser) STATE.currentUser = JSON.parse(savedUser);

  const savedFavs = localStorage.getItem('cookiwiki_favorites');
  STATE.favorites = savedFavs ? JSON.parse(savedFavs) : [];

  const savedLang = localStorage.getItem('cookiwiki_lang');
  if (savedLang) STATE.language = savedLang;

  const savedTheme = localStorage.getItem('cookiwiki_theme');
  if (savedTheme) STATE.theme = savedTheme;
}

function saveRecipes()   { localStorage.setItem('cookiwiki_recipes',    JSON.stringify(STATE.recipes));    }
function saveUsers()     { localStorage.setItem('cookiwiki_users',      JSON.stringify(STATE.users));      }
function saveUser()      { localStorage.setItem('cookiwiki_user',       JSON.stringify(STATE.currentUser));}
function saveFavorites() { localStorage.setItem('cookiwiki_favorites',  JSON.stringify(STATE.favorites));  }

function saveSiteConfig() {
  localStorage.setItem('cookiwiki_siteconfig', JSON.stringify(STATE.siteConfig));
  applyLiveConfig();
}

function applyLiveConfig() {
  const c = STATE.siteConfig;
  if (!c) return;
  document.documentElement.style.setProperty('--accent',  c.accentColor);
  document.documentElement.style.setProperty('--accent2', c.accentColor2);
  document.documentElement.style.setProperty('--gold',    c.goldColor);
  const banner = document.getElementById('siteBanner');
  if (banner) {
    if (c.bannerEnabled && c.bannerText) {
      banner.style.background = c.bannerColor || 'var(--accent)';
      const bt = banner.querySelector('#bannerText');
      if (bt) bt.textContent = c.bannerText;
      banner.classList.remove('hidden');
    } else {
      banner.classList.add('hidden');
    }
  }
  const logoText = document.querySelector('.logo-text');
  if (logoText && c.siteName) {
    logoText.innerHTML = c.siteName.replace('Wiki', '<em>Wiki</em>');
  }
}
