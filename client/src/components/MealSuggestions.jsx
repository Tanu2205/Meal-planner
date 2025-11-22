const mealSuggestions = {
  breakfast: [
    {
      id: "b1",
      name: "Masala Dosa",
      image: "https://images.pexels.com/photos/4611984/pexels-photo-4611984.jpeg",
      time: 20,
      calories: 380,
      carbs: 55,
      protein: 8,
      fat: 12,
      recipe: {
        ingredients: [
          "1 cup rice",
          "½ cup urad dal",
          "2 medium potatoes, boiled and mashed",
          "1 onion, finely chopped",
          "1 green chili, chopped",
          "½ tsp mustard seeds",
          "½ tsp turmeric powder",
          "2 tbsp oil",
          "Salt to taste",
          "Coriander leaves for garnish"
        ],
        steps: [
          "Soak rice and urad dal separately for 4–5 hours and grind into a smooth batter.",
          "Ferment the batter overnight.",
          "For the potato filling: heat oil, add mustard seeds, onion, chili, turmeric; sauté until onions are soft.",
          "Add mashed potatoes, mix well, and season with salt and coriander.",
          "Heat a non-stick tawa, pour a ladle of batter, spread into a thin circle.",
          "Drizzle a little oil around edges and cook until crisp.",
          "Place potato filling inside, fold dosa, and serve hot with chutney or sambar."
        ]
      }
    },
    {
      id: "b2",
      name: "Upma",
      image: "https://images.pexels.com/photos/1582621/pexels-photo-1582621.jpeg",
      time: 15,
      calories: 230,
      carbs: 38,
      protein: 6,
      fat: 6,
      recipe: {
        ingredients: [
          "1 cup semolina (rava)",
          "2 cups water",
          "1 onion, chopped",
          "1-2 green chilies, chopped",
          "½ tsp mustard seeds",
          "½ tsp cumin seeds",
          "10 curry leaves",
          "2 tbsp oil",
          "Salt to taste",
          "Chopped coriander leaves for garnish"
        ],
        steps: [
          "Dry roast semolina until lightly golden, set aside.",
          "Heat oil in a pan, add mustard seeds, cumin seeds, and curry leaves.",
          "Add onions and green chilies, sauté until onions are soft.",
          "Pour in water, add salt, and bring to a boil.",
          "Slowly add roasted semolina, stirring continuously to avoid lumps.",
          "Cook until water is absorbed and upma is soft.",
          "Garnish with coriander leaves and serve hot."
        ]
      }
    },
    {
      id: "b3",
      name: "Poha",
      image: "https://images.pexels.com/photos/158329/pexels-photo-158329.jpeg",
      time: 12,
      calories: 290,
      carbs: 42,
      protein: 5,
      fat: 8,
      recipe: {
        ingredients: [
          "1.5 cups flattened rice (poha)",
          "1 onion, chopped",
          "1 green chili, chopped",
          "½ tsp mustard seeds",
          "½ tsp turmeric powder",
          "10 curry leaves",
          "2 tbsp peanuts",
          "2 tbsp oil",
          "Salt to taste",
          "Juice of half lemon",
          "Coriander leaves for garnish"
        ],
        steps: [
          "Rinse poha in water and drain, keep aside.",
          "Heat oil in a pan, add mustard seeds and curry leaves.",
          "Add peanuts and fry until golden.",
          "Add onions and green chilies, sauté until soft.",
          "Add turmeric powder, salt, and cooked poha. Mix well.",
          "Cook for 2–3 minutes, garnish with lemon juice and coriander leaves.",
          "Serve immediately."
        ]
      }
    },

    // Add remaining breakfast dishes (b4–b10) with similar structure...
  ],

  lunch: [
    {
      id: "l1",
      name: "Rajma Chawal",
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      time: 35,
      calories: 420,
      carbs: 65,
      protein: 15,
      fat: 8,
      recipe: {
        ingredients: [
          "1 cup rajma (kidney beans), soaked overnight",
          "2 cups cooked rice",
          "1 onion, chopped",
          "2 tomatoes, pureed",
          "1 tsp ginger-garlic paste",
          "1 tsp cumin seeds",
          "1 tsp coriander powder",
          "½ tsp turmeric powder",
          "½ tsp garam masala",
          "2 tbsp oil",
          "Salt to taste",
          "Fresh coriander leaves for garnish"
        ],
        steps: [
          "Pressure cook soaked rajma until soft.",
          "Heat oil, add cumin seeds and onions; sauté until golden.",
          "Add ginger-garlic paste and tomato puree, cook until oil separates.",
          "Add turmeric, coriander powder, salt, and cooked rajma. Simmer for 10 minutes.",
          "Add garam masala and cook 2 more minutes.",
          "Serve hot with steamed rice and garnish with coriander leaves."
        ]
      }
    },

    // Add remaining lunch dishes (l2–l10) with similar structure...
  ],

  dinner: [
    {
      id: "d1",
      name: "Paneer Tikka",
      image: "https://images.pexels.com/photos/4611986/pexels-photo-4611986.jpeg",
      time: 20,
      calories: 320,
      carbs: 10,
      protein: 20,
      fat: 22,
      recipe: {
        ingredients: [
          "200g paneer, cut into cubes",
          "2 tbsp yogurt",
          "1 tsp red chili powder",
          "1 tsp turmeric powder",
          "1 tsp garam masala",
          "1 tbsp lemon juice",
          "1 tsp ginger-garlic paste",
          "Salt to taste",
          "1 tbsp oil"
        ],
        steps: [
          "Mix yogurt, spices, lemon juice, and ginger-garlic paste to make a marinade.",
          "Add paneer cubes and coat well, marinate for at least 30 minutes.",
          "Heat a grill pan, drizzle oil, and grill paneer until golden brown on all sides.",
          "Serve hot with green chutney and salad."
        ]
      }
    },

    // Add remaining dinner dishes (d2–d10) with similar structure...
  ]
};

export default mealSuggestions;
