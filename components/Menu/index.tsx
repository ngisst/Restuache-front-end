import { MdClose } from "react-icons/md";
import { ExternalLink, Clock, Star } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function RestaurantMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: any;
}) {

  const pathname = usePathname()

  const menuData = {
    appetizers: [
      {
        name: "Hummus Trio",
        description:
          "Traditional, roasted red pepper, and olive hummus with warm pita",
        price: 12,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Spanakopita",
        description:
          "Crispy phyllo triangles filled with spinach and feta cheese",
        price: 10,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Grilled Octopus",
        description: "Tender octopus with olive oil, lemon, and herbs",
        price: 16,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Mezze Platter",
        description: "Selection of olives, cheese, cured meats, and dips",
        price: 18,
        image:'/images/hero/meal-3.jpg'
      },
    ],
    mains: [
      {
        name: "Moussaka",
        description: "Layered eggplant, ground lamb, and béchamel sauce",
        price: 22,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Grilled Branzino",
        description: "Whole Mediterranean sea bass with lemon and herbs",
        price: 28,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Lamb Souvlaki",
        description: "Marinated lamb skewers with tzatziki and Greek salad",
        price: 24,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Seafood Risotto",
        description: "Creamy arborio rice with fresh seafood and saffron",
        price: 26,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Vegetarian Stuffed Peppers",
        description:
          "Bell peppers filled with rice, herbs, and Mediterranean vegetables",
        price: 18,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Grilled Salmon",
        description:
          "Atlantic salmon with lemon herb butter and roasted vegetables",
        price: 25,
        image:'/images/hero/meal-3.jpg'
      },
    ],
    pasta: [
      {
        name: "Linguine alle Vongole",
        description: "Fresh clams in white wine garlic sauce",
        price: 20,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Penne Arrabbiata",
        description: "Spicy tomato sauce with garlic and red peppers",
        price: 16,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Seafood Pasta",
        description: "Mixed seafood with tomato and herb sauce",
        price: 24,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Pesto Gnocchi",
        description: "Homemade potato gnocchi with basil pesto",
        price: 18,
        image:'/images/hero/meal-3.jpg'
      },
    ],
    desserts: [
      {
        name: "Baklava",
        description: "Layers of phyllo with nuts and honey syrup",
        price: 8,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Tiramisu",
        description: "Classic Italian coffee-flavored dessert",
        price: 9,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Greek Yogurt Parfait",
        description: "With honey, nuts, and seasonal fruits",
        price: 7,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Gelato Selection",
        description: "Three scoops of artisan gelato",
        price: 8,
        image:'/images/hero/meal-3.jpg'
      },
    ],
    beverages: [
      {
        name: "Greek Coffee",
        description: "Traditional strong coffee",
        price: 4,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Fresh Juices",
        description: "Orange, apple, or mixed berry",
        price: 5,
        image:'/images/hero/meal-3.jpg'
      },
      {
        name: "Sparkling Water",
        description: "San Pellegrino or Perrier",
        price: 4,
        image:'/images/hero/meal-3.jpg'
      },
    ],
  };

  const MenuSection = ({ title, items }) => (
    <div className="mb-12">
      <h3 className="mb-6 border-b-2 border-blue-200 pb-3 text-2xl font-bold text-gray-900">
        {title}
      </h3>
      <div className="grid gap-4">
        {items.map((item: any, index: string) => (
          <a
            key={index}
            href={pathname + `/${item.name}`}
            className="group block cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            <div className="flex items-start space-x-4">
              {/* Meal Image */}
              <div className="relative shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {item.isPopular && (
                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    <Star className="h-3 w-3 fill-current" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 items-start justify-between">
                <div className="flex-1 pr-4">
                  <div className="flex items-center space-x-2">
                    <h4 className="mb-1 font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                      {item.name}
                    </h4>
                    <ExternalLink className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <p className="mb-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  {/* Additional Info */}
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    {item.prepTime && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.prepTime} min</span>
                      </div>
                    )}
                    {item.category && (
                      <span className="rounded-full bg-gray-100 px-2 py-1">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">
                    ${item.price}
                  </div>
                  {item.originalPrice && item.originalPrice > item.price && (
                    <div className="text-sm text-gray-400 line-through">
                      ${item.originalPrice}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-xl">
            {/* Dialog Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white p-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Our Menu</h2>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 transition-colors hover:text-gray-600"
              >
                <MdClose className="h-6 w-6" />
              </button>
            </div>

            {/* Dialog Content */}
            <div className="h-[450px] overflow-y-auto p-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <MenuSection title="Appetizers" items={menuData.appetizers} />
                  <MenuSection title="Main Courses" items={menuData.mains} />
                </div>
                <div>
                  <MenuSection title="Pasta" items={menuData.pasta} />
                  <MenuSection title="Desserts" items={menuData.desserts} />
                  <MenuSection title="Beverages" items={menuData.beverages} />
                </div>
              </div>
            </div>

            {/* Dialog Footer */}
            <div className="border-t border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Prices are subject to change. Please ask your server about
                  seasonal specials.
                </p>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Close Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
