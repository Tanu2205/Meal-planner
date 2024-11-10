import React from "react";
const recipeData = [
    {
      title: "Palak Paneer",
      image: "https://via.placeholder.com/150",
      shortDescription: "A nutritious spinach-based curry with cottage cheese.",
      fullRecipe: {
        description: "Palak Paneer is a North Indian dish made with spinach and paneer, rich in iron, calcium, and protein.",
        ingredients: [
          "2 cups spinach, blanched",
          "200g paneer, cubed",
          "1 onion, chopped",
          "1 tomato, chopped",
          "1 tsp ginger-garlic paste",
          "Spices: cumin, turmeric, garam masala",
          "Salt to taste"
        ],
        steps: [
          "Blend blanched spinach into a smooth paste.",
          "Sauté onions with ginger-garlic paste. Add tomatoes and spices, cook until soft.",
          "Add spinach puree and paneer cubes. Simmer for 5 minutes.",
          "Serve hot with whole-grain roti."
        ]
      }
    },
    {
      title: "Quinoa Khichdi",
      image: "https://via.placeholder.com/150",
      shortDescription: "A protein-packed, nutritious take on traditional khichdi.",
      fullRecipe: {
        description: "Quinoa Khichdi is a healthy, high-protein version of the classic Indian khichdi made with quinoa and vegetables.",
        ingredients: [
          "1/2 cup quinoa, rinsed",
          "1/4 cup yellow moong dal",
          "1/2 cup mixed vegetables (carrots, peas, beans)",
          "1/2 tsp cumin seeds",
          "1/2 tsp turmeric powder",
          "Salt to taste"
        ],
        steps: [
          "Cook quinoa and moong dal with turmeric and salt until soft.",
          "In a pan, add cumin seeds and sauté vegetables until tender.",
          "Mix in cooked quinoa-dal mixture and stir well.",
          "Serve warm with yogurt."
        ]
      }
    },
    {
      title: "Sprout Salad",
      image: "https://via.placeholder.com/150",
      shortDescription: "A protein-rich salad with sprouts, veggies, and tangy dressing.",
      fullRecipe: {
        description: "Sprout Salad is a nutritious, high-protein salad with mixed sprouts and fresh vegetables, perfect for a healthy snack.",
        ingredients: [
          "1 cup mixed sprouts (mung, chickpeas)",
          "1/2 cucumber, chopped",
          "1/2 tomato, chopped",
          "1/4 onion, chopped",
          "1 tbsp lemon juice",
          "Salt and pepper to taste",
          "Chaat masala (optional)"
        ],
        steps: [
          "Combine sprouts, cucumber, tomato, and onion in a bowl.",
          "Add lemon juice, salt, pepper, and chaat masala.",
          "Mix well and serve fresh."
        ]
      }
    },
    {
      title: "Oats Upma",
      image: "https://via.placeholder.com/150",
      shortDescription: "A wholesome upma made with oats and vegetables.",
      fullRecipe: {
        description: "Oats Upma is a healthy twist on the traditional South Indian upma, using oats and vegetables.",
        ingredients: [
          "1 cup rolled oats",
          "1/4 cup mixed vegetables (carrots, beans, peas)",
          "1/2 tsp mustard seeds",
          "1/2 tsp cumin seeds",
          "1 green chili, chopped",
          "Salt to taste"
        ],
        steps: [
          "Dry roast oats until lightly golden and set aside.",
          "In a pan, add mustard and cumin seeds, then sauté vegetables and chili until soft.",
          "Add roasted oats and water, cook until oats are soft.",
          "Serve warm, garnished with coriander."
        ]
      }
    },
    {
      title: "Vegetable Stir-Fry",
      image: "https://via.placeholder.com/150",
      shortDescription: "A quick and healthy vegetable stir-fry with minimal oil.",
      fullRecipe: {
        description: "A simple stir-fry of assorted vegetables with spices for a quick, nutritious meal.",
        ingredients: [
          "1/2 cup bell peppers, sliced",
          "1/2 cup broccoli florets",
          "1/2 cup carrots, sliced",
          "1 tbsp olive oil",
          "1 tsp sesame seeds",
          "Salt and pepper to taste"
        ],
        steps: [
          "Heat olive oil in a pan and add vegetables.",
          "Stir-fry on high heat until vegetables are slightly tender.",
          "Season with salt, pepper, and sprinkle with sesame seeds.",
          "Serve hot as a side or light meal."
        ]
      }
    },
    {
      title: "Masoor Dal Soup",
      image: "https://via.placeholder.com/150",
      shortDescription: "A hearty lentil soup loaded with fiber and protein.",
      fullRecipe: {
        description: "Masoor Dal Soup is a nourishing soup made from red lentils, rich in fiber and protein.",
        ingredients: [
          "1/2 cup red lentils (masoor dal), rinsed",
          "1/2 onion, chopped",
          "1 tomato, chopped",
          "1/2 tsp cumin powder",
          "1/2 tsp turmeric powder",
          "Salt and pepper to taste"
        ],
        steps: [
          "Boil lentils with turmeric, salt, and water until soft.",
          "In a pan, sauté onions and tomatoes, then add cumin powder.",
          "Add cooked lentils and blend until smooth.",
          "Serve warm with a sprinkle of pepper."
        ]
      }
    },
    {
      title: "Methi Thepla",
      image: "https://via.placeholder.com/150",
      shortDescription: "A light, fiber-rich flatbread made with fenugreek leaves.",
      fullRecipe: {
        description: "Methi Thepla is a nutritious Gujarati flatbread made with whole wheat flour and fresh fenugreek leaves.",
        ingredients: [
          "1 cup whole wheat flour",
          "1/2 cup fenugreek leaves (methi), chopped",
          "1/2 tsp turmeric powder",
          "Salt to taste",
          "1 tbsp yogurt"
        ],
        steps: [
          "Mix flour, fenugreek leaves, turmeric, salt, and yogurt to form a dough.",
          "Roll out into thin circles and cook on a hot pan until golden brown.",
          "Serve warm with yogurt or pickle."
        ]
      }
    },
    {
      title: "Vegetable Raita",
      image: "https://via.placeholder.com/150",
      shortDescription: "A cooling yogurt-based side dish with mixed veggies.",
      fullRecipe: {
        description: "Vegetable Raita is a refreshing and healthy side dish made with yogurt and mixed vegetables.",
        ingredients: [
          "1 cup yogurt",
          "1/4 cucumber, grated",
          "1/4 carrot, grated",
          "1/4 tomato, chopped",
          "Salt and pepper to taste",
          "Cumin powder (optional)"
        ],
        steps: [
          "Mix yogurt with cucumber, carrot, and tomato.",
          "Add salt, pepper, and cumin powder for flavor.",
          "Serve chilled as a side."
        ]
      }
    },
    {
      title: "Ragi Dosa",
      image: "https://via.placeholder.com/150",
      shortDescription: "A fiber-rich dosa made with ragi (finger millet) flour.",
      fullRecipe: {
        description: "Ragi Dosa is a South Indian dosa made with ragi flour, a high-fiber and gluten-free option.",
        ingredients: [
          "1 cup ragi flour",
          "1/4 cup rice flour",
          "1/4 cup yogurt",
          "Salt to taste",
          "Water as needed"
        ],
        steps: [
          "Mix ragi flour, rice flour, yogurt, and salt to form a batter.",
          "Spread batter on a hot pan to make a thin dosa.",
          "Cook until crispy and serve with chutney."
        ]
      }
    },
    {
      title: "Baingan Bharta",
      image: "https://via.placeholder.com/150",
      shortDescription: "A smoky, spiced mashed eggplant curry.",
      fullRecipe: {
        description: "Baingan Bharta is a healthy, smoky-flavored North Indian dish made from roasted and mashed eggplant.",
        ingredients: [
          "1 large eggplant",
          "1 onion, chopped",
          "1 tomato, chopped",
          "1 green chili, chopped",
          "1/2 tsp cumin seeds",
          "Salt and spices to taste"
        ],
        steps: [
          "Roast the eggplant over an open flame until soft. Peel and mash.",
          "In a pan, sauté onions, tomatoes, green chili, and spices.",
          "Add mashed eggplant and cook for a few minutes.",
          "Serve hot with whole-grain roti."
        ]
      }
    }
  ];
export default recipeData;