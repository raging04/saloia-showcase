export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface DownloadMenu {
  title: string;
  description: string;
  filename: string;
}

export const menuCategories: MenuCategory[] = [
  {
    title: "Couvert",
    items: [
      { name: "Salpicão Porco Preto Misto", price: "5,50€" },
      { name: "Queijo de Ovelha Amanteigado", price: "6,00€" },
      { name: "Queijo de Ovelha", price: "5,00€" },
      { name: "Presunto", price: "6,00€" },
      { name: "Paté Caseiro", price: "3,90€" },
      { name: "Queijo Seco", price: "3,50€" },
      { name: "Requeijão com Doce de Abóbora", price: "6,50€" },
      { name: "Queijo Fresco", price: "1,50€" },
      { name: "Cesto de Pão", price: "1,20€" },
      { name: "Azeitonas", price: "1,00€" },
      { name: "Manteiga", price: "1,00€" },
    ],
  },
  {
    title: "Petiscos",
    items: [
      { name: "Amêijoa à Bulhão Pato", price: "13,00€" },
      { name: "Pica-Pau de Novilho", price: "13,00€" },
      { name: "Gambas à Guilho", price: "11,00€" },
      { name: "Cogumelos Frescos c/ Mel e Vinho do Porto", price: "5,50€" },
      { name: "Linguiça c/ Cogumelos", price: "5,00€" },
      { name: "Morcela com Bacon", price: "5,00€" },
      { name: "Ovos Mexidos c/ Farinheira", price: "5,00€" },
    ],
  },
  {
    title: "Peixe",
    items: [
      { name: "Cataplana de Peixe e Marisco (2px)", description: "A nossa seleção de peixes e marisco cozinhados lentamente na tradicional Cataplana", price: "38,00€" },
      { name: "Broa de Bacalhau (2px)", description: "Broa de Milho recheada com Bacalhau confitado em azeite e alho com Grelos e o miolo da Broa", price: "32,00€" },
      { name: "Bacalhau à Lagareiro", description: "Posta de Bacalhau Assada regada com Azeite quente e Alho acompanha Batata a Murro e Legumes", price: "17,50€" },
      { name: "Arroz de Tamboril c/ Gambas", price: "15,00€ (1Px) | 30,00€ (2Px)" },
      { name: "Garoupa Cozida ou Grelhada", description: "Posta de Garoupa acompanhada de Batata Cozida e Legumes", price: "16,00€" },
      { name: "Polvo à Lagareiro", description: "Acompanhado com Batata a Murro e Legumes", price: "17,50€" },
      { name: "Caril de Gambas", price: "15,00€" },
      { name: "Risotto de Gambas e Cogumelos Selvagens", price: "15,00€" },
      { name: "Salmão", price: "14,00€" },
    ],
  },
  {
    title: "Carne",
    items: [
      { name: "Tornedó do Lombo", description: "A carne mais nobre! Bife frito e mal passado. Com Molho de Mostarda", price: "18,00€" },
      { name: "Costeleta de Novilho", price: "18,00€" },
      { name: "Espetada de Vitela", description: "Com nacos de Vitela e Ananás, Recomenda-se Médio ou Mal Passada", price: "15,00€" },
      { name: "Bife à Portuguesa", description: "O Clássico! Bife da Vazia com molho tradicional, Presunto e Ovo Estrelado acompanhado de Batata Frita às rodelas", price: "14,50€" },
      { name: "Bife à Taberneiro", description: "Bife da Vazia frito com Molho de Natas e Ketchup e Ovo Estrelado. Acompanhado de Batata Frita", price: "14,50€" },
      { name: "Bife Grelhado", description: "Bife da Vazia Grelhado acompanhado de Batata Frita e Arroz", price: "14,00€" },
      { name: "Bife 3 Pimentas", description: "Bife da Vazia Frito com Molho de 3 Pimentas acompanhado de Batata Frita", price: "14,00€" },
      { name: "Bife Mostarda", description: "Bife da Vazia Frito com Molho de Mostarda acompanhado de Batata Frita", price: "14,00€" },
      { name: "Lombinhos Mel e Alecrim", description: "Lombinhos de Porco c/ Molho de Mel e Alecrim acompanhado de Batata Frita", price: "13,50€" },
      { name: "Lagartos de Porco Ibérico", description: "Tirinhas de Porco Ibérico Grelhadas c/ Batata Frita", price: "13,50€" },
      { name: "Francesinha", price: "13,50€" },
      { name: "Bitoque de Vitela", description: "Bife Frito, Ovo a Cavalo, Arroz e Batata Frita", price: "10,00€" },
      { name: "Bifinhos de Frango", description: "Grelhados ou Com Natas e Cogumelos", price: "9,50€/10,50€" },
    ],
  },
  {
    title: "Sugestões Vegetarianas",
    items: [
      { name: "Risotto", price: "12,50€" },
      { name: "Omelete de Legumes", price: "9,00€" },
    ],
  },
  {
    title: "Guarnições",
    items: [
      { name: "Dose de Legumes", price: "2,50€" },
      { name: "Salada Mista", price: "2,50€" },
      { name: "Dose de Arroz", price: "2,50€" },
      { name: "Dose de Batata Frita", price: "2,50€" },
      { name: "Sopa do Dia", price: "1,50€" },
      { name: "Ovo Estrelado", price: "1,00€" },
    ],
  },
];

export const downloadMenus: DownloadMenu[] = [
  { title: "Menu Normal", description: "Carta completa com todos os pratos disponíveis", filename: "menu-normal.pdf" },
  { title: "Menu de Grupo", description: "Opções especiais para grupos e eventos", filename: "menu-grupo.pdf" },
  { title: "Carta de Vinhos", description: "Seleção especial de vinhos portugueses", filename: "_Carta de Vinhos 2024 Final.pdf" },
  { title: "Carta de Sobremesas", description: "Doces tradicionais e sobremesas da casa", filename: "Carta de Sobremesas.pdf" },
];
