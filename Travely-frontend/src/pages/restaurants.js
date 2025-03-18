import React, { useState } from 'react';
import './Restaurants.css'; // Importing the CSS file

const Restaurants = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedFoodItems, setSelectedFoodItems] = useState([]);
    
    // Hardcoded restaurant data
    const restaurants = [
        {
            id: "1",
            name: "Indian Accent",
            cuisine: "Indian",
            rating: 4.8,
            location: "New Delhi",
            priceRange: "$$$",
            contact: "+91 11 1234 5678",
            foodItems: [
                { name: "Butter Chicken", price: 500 },
                { name: "Dal Makhani", price: 300 },
                { name: "Naan", price: 150 },
                { name: "Gulab Jamun", price: 200 },
                { name: "Rogan Josh", price: 600 },
                { name: "Chole Bhature", price: 400 },
                { name: "Aloo Paratha", price: 250 },
                { name: "Paneer Butter Masala", price: 550 },
                { name: "Lassi", price: 180 },
                { name: "Biryani", price: 700 }
            ]
        },
        {
            id: "2",
            name: "Bukhara",
            cuisine: "North Indian",
            rating: 4.7,
            location: "New Delhi",
            priceRange: "$$$$",
            contact: "+91 11 2345 6789",
            foodItems: [
                { name: "Tandoori Roti", price: 180 },
                { name: "Biryani", price: 550 },
                { name: "Seekh Kebab", price: 400 },
                { name: "Raita", price: 150 },
                { name: "Butter Chicken", price: 500 },
                { name: "Dal Makhani", price: 300 },
                { name: "Naan", price: 150 },
                { name: "Gulab Jamun", price: 200 },
                { name: "Shahi Paneer", price: 500 },
                { name: "Pulao", price: 250 }
            ]
        },
        {
            id: "3",
            name: "Saravana Bhavan",
            cuisine: "South Indian",
            rating: 4.5,
            location: "Chennai",
            priceRange: "$$",
            contact: "+91 44 6789 1234",
            foodItems: [
                { name: "Idli", price: 100 },
                { name: "Dosa", price: 150 },
                { name: "Sambar", price: 80 },
                { name: "Vada", price: 120 },
                { name: "Medu Vada", price: 130 },
                { name: "Uthappam", price: 170 },
                { name: "Rava Kesari", price: 180 },
                { name: "Coconut Chutney", price: 50 },
                { name: "Filter Coffee", price: 90 },
                { name: "Pongal", price: 160 }
            ]
        },
        {
            id: "4",
            name: "Indian Spicy Hub",
            cuisine: "Indian",
            rating: 4.8,
            location: "New Delhi",
            priceRange: "$$$",
            contact: "+91 11 1234 5678",
            foodItems: [
                { name: "Butter Chicken", price: 500 },
                { name: "Dal Makhani", price: 300 },
                { name: "Naan", price: 150 },
                { name: "Gulab Jamun", price: 200 },
                { name: "Tandoori Chicken", price: 400 },
                { name: "Kadhai Paneer", price: 550 },
                { name: "Biryani", price: 650 },
                { name: "Lassi", price: 180 },
                { name: "Pulao", price: 250 },
                { name: "Raita", price: 100 }
            ]
        },
        {
            id: "5",
            name: "BBQ",
            cuisine: "Indian",
            rating: 4.8,
            location: "New Delhi",
            priceRange: "$$$",
            contact: "+91 11 1234 5678",
            foodItems: [
                { name: "Butter Chicken", price: 500 },
                { name: "Dal Makhani", price: 300 },
                { name: "Naan", price: 150 },
                { name: "Gulab Jamun", price: 200 },
                { name: "Tandoori Roti", price: 180 },
                { name: "Seekh Kebab", price: 400 },
                { name: "Shahi Paneer", price: 500 },
                { name: "Pulao", price: 250 },
                { name: "Kadhi Pakora", price: 350 },
                { name: "Kachori", price: 100 }
            ]
        },
        {
            id: "6",
            name: "KFC",
            cuisine: "Fast Food",
            rating: 4.6,
            location: "Multiple Locations",
            priceRange: "$$",
            contact: "+91 22 5678 1234",
            foodItems: [
                { name: "Zinger Burger", price: 250 },
                { name: "Hot Wings", price: 200 },
                { name: "Chicken Popcorn", price: 150 },
                { name: "Chicken Bucket", price: 900 },
                { name: "Masala Fries", price: 120 },
                { name: "Mash Potato", price: 100 },
                { name: "Gravy", price: 80 },
                { name: "Twister Wrap", price: 350 },
                { name: "Veg Burger", price: 150 },
                { name: "Pepsi (500ml)", price: 60 },
                { name: "Zinger Burger", price: 250 },
                { name: "Hot Wings", price: 200 },
                { name: "Chicken Popcorn", price: 150 },
                { name: "Chicken Bucket", price: 900 },
                { name: "Masala Fries", price: 120 },
                { name: "Mash Potato", price: 100 },
                { name: "Gravy", price: 80 },
                { name: "Twister Wrap", price: 350 },
                { name: "Veg Burger", price: 150 },
                { name: "Pepsi (500ml)", price: 60 }
            ]
        },
        {
            id: "7",
            name: "Le Cirque",
            cuisine: "French",
            rating: 4.9,
            location: "Mumbai",
            priceRange: "$$$$$",
            contact: "+91 22 2345 6789",
            foodItems: [
                { name: "Foie Gras", price: 1500 },
                { name: "Duck Breast", price: 1200 },
                { name: "Ratatouille", price: 800 },
                { name: "Escargots", price: 650 },
                { name: "Croissant", price: 250 },
                { name: "Coq au Vin", price: 950 },
                { name: "Bouillabaisse", price: 1000 },
                { name: "Crepes Suzette", price: 450 },
                { name: "Moules Marinières", price: 700 },
                { name: "Tarte Tatin", price: 550 }
            ]
        },
        {
            id: "8",
            name: "The Table",
            cuisine: "International",
            rating: 4.6,
            location: "Mumbai",
            priceRange: "$$$$",
            contact: "+91 22 4321 8765",
            foodItems: [
                { name: "Steak", price: 1200 },
                { name: "Pasta Primavera", price: 850 },
                { name: "Sushi Rolls", price: 1000 },
                { name: "Lobster Bisque", price: 650 },
                { name: "Caesar Salad", price: 450 },
                { name: "Cheese Platter", price: 600 },
                { name: "Chocolate Mousse", price: 400 },
                { name: "Tiramisu", price: 350 },
                { name: "Seafood Risotto", price: 950 },
                { name: "Cappuccino", price: 150 }
            ]
        },
        {
            id: "9",
            name: "Peshawri",
            cuisine: "North Indian",
            rating: 4.7,
            location: "Mumbai",
            priceRange: "$$$$",
            contact: "+91 22 9087 6543",
            foodItems: [
                { name: "Lamb Seekh Kebab", price: 600 },
                { name: "Butter Chicken", price: 500 },
                { name: "Dal Makhani", price: 300 },
                { name: "Tandoori Roti", price: 150 },
                { name: "Lassi", price: 180 },
                { name: "Pulao", price: 250 },
                { name: "Kadhi Pakora", price: 350 },
                { name: "Shahi Paneer", price: 450 },
                { name: "Saffron Rice", price: 350 },
                { name: "Gulab Jamun", price: 200 }
            ]
        }
    ];
    

    // Handle restaurant selection
    const handleRestaurantChange = (event) => {
        const selectedId = event.target.value;
        const restaurant = restaurants.find(r => r.id === selectedId);
        setSelectedRestaurant(restaurant);
        setSelectedFoodItems([]);  // Reset selected food items
    };

    // Handle food item selection
    const handleFoodItemChange = (foodItem, isChecked) => {
        if (isChecked) {
            setSelectedFoodItems([...selectedFoodItems, foodItem]);
        } else {
            setSelectedFoodItems(selectedFoodItems.filter(item => item.name !== foodItem.name));
        }
    };

    // Calculate total price of selected food items
    const calculateTotalPrice = () => {
        return selectedFoodItems.reduce((total, item) => total + item.price, 0);
    };

    // Handle booking
    const handleBooking = () => {
        if (selectedFoodItems.length > 0) {
            alert("Your booking is confirmed!");
        } else {
            alert("Please select some food items.");
        }
    };

    return (
        <div className="restaurants-container">
            <h1 className="heading">Restaurant List</h1>
            
            {/* Dropdown for selecting a restaurant */}
            <select className="restaurant-dropdown" onChange={handleRestaurantChange} defaultValue="">
                <option value="" disabled>Select a restaurant</option>
                {restaurants.map(restaurant => (
                    <option key={restaurant.id} value={restaurant.id}>
                        {restaurant.name}
                    </option>
                ))}
            </select>

            {/* Display selected restaurant details */}
            {selectedRestaurant && (
                <div className="restaurant-details">
                    <h2>{selectedRestaurant.name}</h2>
                    <p><strong>Cuisine:</strong> {selectedRestaurant.cuisine}</p>
                    <p><strong>Rating:</strong> {selectedRestaurant.rating} ⭐</p>
                    <p><strong>Location:</strong> {selectedRestaurant.location}</p>
                    <p><strong>Price Range:</strong> {selectedRestaurant.priceRange}</p>
                    <p><strong>Contact:</strong> {selectedRestaurant.contact}</p>

                    <h3>Choose Food Items</h3>
                    <div className="food-items">
                        {selectedRestaurant.foodItems.map((foodItem) => (
                            <div key={foodItem.name} className="food-item">
                                <input
                                    type="checkbox"
                                    id={foodItem.name}
                                    onChange={(e) =>
                                        handleFoodItemChange(foodItem, e.target.checked)
                                    }
                                />
                                <label htmlFor={foodItem.name}>
                                    {foodItem.name} - ₹{foodItem.price}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Display selected food items and total */}
                    <div className="selected-foods">
                        <h3>Selected Food Items:</h3>
                        {selectedFoodItems.length > 0 ? (
                            selectedFoodItems.map(item => (
                                <p key={item.name}>{item.name} - ₹{item.price}</p>
                            ))
                        ) : (
                            <p>No items selected.</p>
                        )}
                        <p><strong>Total Price:</strong> ₹{calculateTotalPrice()}</p>
                    </div>

                    {/* Book Button */}
                    <button onClick={handleBooking} className="book-button">Book Now</button>
                </div>
            )}
        </div>
    );
};

export default Restaurants;
