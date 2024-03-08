export const Information = [
    {
      product: "Headphones",
      description: generateDescription(),
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      product: "Nike Shoes",
      description: generateDescription(),
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      product: "apple watch",
      description: generateDescription(),
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      product: "Dove cream",
      description: generateDescription(),
      image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      product: "Fruit juice",
      description: generateDescription(),
      image: "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
    },
    {
      product: "Perfume",
      description: generateDescription(),
      image: "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8bXpaMTZDaUZXYjR8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  function generateDescription() {
  const descriptions = [
    "This is just a sample product that was made for this project only",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Enhance your style with our premium product!",
    "Get the best deal today!",
    "Experience comfort like never before.",
    "Limited edition product - grab it now!",
    // Add more descriptions as needed
  ];

  // Choose a random description from the array
  const randomIndex = Math.floor(Math.random() * descriptions.length);
  return descriptions[randomIndex];
}