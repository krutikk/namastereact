import React from "react";
import ReactDOM from "react-dom/client";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/500p/35/43/nerd-burger-flat-minimalist-logo-design-vector-54553543.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cusine, stars, deliveryTime, image } = restData;
  return (
    <div className="resto-card">
      <div className="card">
        <img className="resto-img"
          src={image}
          alt="Logo"
        />
        <h3>{name}</h3>
        <h4>{cusine.join(", ")}</h4>
        <h4>{stars}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};
const resList = [
  {
    name: "Burger King",
    cusine: ["American", "Fast Food", "Burgers", "Mexican"],
    stars: "4.5",
    deliveryTime: "30",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C2AKGJ63KCLERN/hero/1c8af5cf9265413baab5f5bc455dbf8a_1630919276812163262.webp",
  },
  {
    name: "Pizza Hut",
    cusine: ["Italian", "Pizza"],
    stars: "4.2",
    deliveryTime: "25",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C663J35VJ76GET/hero/26b41c783bd84235be9b2d7cf8230682_1739948986023828752.webp",
  },
  {
    name: "Subway",
    cusine: ["Healthy", "Sandwiches"],
    stars: "4.0",
    deliveryTime: "20",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C3VCL36HC7MKWA/hero/f5cc5b82306d4c789e484833647badcb_1740106455082598421.webp",
  },
  {
    name: "Starbucks",
    cusine: ["Coffee", "Beverages"],
    stars: "4.8",
    deliveryTime: "15",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-CZCUEKTAWELZTE/hero/e4a3be5f91004df79b237351ff980bf7_1604027040169223590.webp",
  },
  {
    name: "Domino's Pizza",
    cusine: ["Italian", "Pizza"],
    stars: "4.3",
    deliveryTime: "22",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C2AKGJ63KCLERN/hero/1c8af5cf9265413baab5f5bc455dbf8a_1630919276812163262.webp",
  },
  {
    name: "KFC",
    cusine: ["American", "Fried Chicken"],
    stars: "4.4",
    deliveryTime: "28",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C663J35VJ76GET/hero/26b41c783bd84235be9b2d7cf8230682_1739948986023828752.webp",
  },
  {
    name: "Taco Bell",
    cusine: ["Mexican", "Fast Food"],
    stars: "4.1",
    deliveryTime: "18",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C3VCL36HC7MKWA/hero/f5cc5b82306d4c789e484833647badcb_1740106455082598421.webp",
  },
  {
    name: "Chipotle",
    cusine: ["Mexican", "Healthy"],
    stars: "4.6",
    deliveryTime: "20",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-CZCUEKTAWELZTE/hero/e4a3be5f91004df79b237351ff980bf7_1604027040169223590.webp",
  },
  {
    name: "Panda Express",
    cusine: ["Chinese", "Fast Food"],
    stars: "4.2",
    deliveryTime: "25",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C2AKGJ63KCLERN/hero/1c8af5cf9265413baab5f5bc455dbf8a_1630919276812163262.webp",
  },
  {
    name: "Dunkin' Donuts",
    cusine: ["Coffee", "Desserts"],
    stars: "4.5",
    deliveryTime: "12",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C663J35VJ76GET/hero/26b41c783bd84235be9b2d7cf8230682_1739948986023828752.webp",
  },
  {
    name: "Five Guys",
    cusine: ["American", "Burgers"],
    stars: "4.7",
    deliveryTime: "30",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C3VCL36HC7MKWA/hero/f5cc5b82306d4c789e484833647badcb_1740106455082598421.webp",
  },
  {
    name: "Panera Bread",
    cusine: ["Healthy", "Bakery"],
    stars: "4.3",
    deliveryTime: "22",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-CZCUEKTAWELZTE/hero/e4a3be5f91004df79b237351ff980bf7_1604027040169223590.webp",
  },
  {
    name: "Shake Shack",
    cusine: ["American", "Burgers"],
    stars: "4.6",
    deliveryTime: "18",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C2AKGJ63KCLERN/hero/1c8af5cf9265413baab5f5bc455dbf8a_1630919276812163262.webp",
  },
  {
    name: "Cold Stone Creamery",
    cusine: ["Desserts", "Ice Cream"],
    stars: "4.8",
    deliveryTime: "15",
    image:
      "https://food-cms.grab.com/compressed_webp/merchants/4-C663J35VJ76GET/hero/26b41c783bd84235be9b2d7cf8230682_1739948986023828752.webp",
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div  className="resto-list">
        {
          resList.map((resto) => {
            return <RestaurantCard key={resto.name} restData={resto} />;
          } )
        }
   
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer>
      <p>© 2023 My App</p>
    </footer>
  );
};
const AppLayout = () => {
  return (
    <div className="APP">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
