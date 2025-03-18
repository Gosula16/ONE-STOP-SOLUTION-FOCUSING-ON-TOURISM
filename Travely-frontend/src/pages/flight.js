import React, { useState } from 'react';
import { jsPDF } from "jspdf";
import css from './flight.css';

const Flight = () => {
    const [selectedFlight, setSelectedFlight] = useState(null); // Store selected flight
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        startDate: '',
        endDate: '',
    });
    const [ticket, setTicket] = useState(null);

    const cities = [
        "Chennai", "Bangalore", "Hyderabad", "Coimbatore", "Vishakapatnam", "Salem", "Tirunelveli", "Kochi", "OOty", "Kakinada"
    ];

    const flights = [
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110099",
            "startCity": "Chennai",
            "destination": "Bangalore",
            "pricePerSeat": "5000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "ORANGE FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110098",
            "startCity": "Chennai",
            "destination": "Hyderabad",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "ORANGE FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 1100499",
            "startCity": "Chennai",
            "destination": "bangalore",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 1100399",
            "startCity": "Chennai",
            "destination": "Hyderabad",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "ORANGE FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 1100299",
            "startCity": "Chennai",
            "destination": "Hyderabad",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 1100199",
            "startCity": "Chennai",
            "destination": "Coimbatore",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "ORANGE FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 1100899",
            "startCity": "Chennai",
            "destination": "Coimbatore",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110089",
            "startCity": "Chennai",
            "destination": "Vishakapatnam",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110088",
            "startCity": "Chennai",
            "destination": "Salem",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110087",
            "startCity": "Chennai",
            "destination": "Tirunelveli",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110086",
            "startCity": "Bangalore",
            "destination": "Chennai",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110085",
            "startCity": "Bangalore",
            "destination": "Salem",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110084",
            "startCity": "Bangalore",
            "destination": "Hyderabad",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110083",
            "startCity": "Bangalore",
            "destination": "Coimbatore",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110082",
            "startCity": "Bangalore",
            "destination": "Vishakapatnam",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110081",
            "startCity": "Bangalore",
            "destination": "Kochi",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110080",
            "startCity": "Kochi",
            "destination": "Bangalore",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110096",
            "startCity": "Kochi",
            "destination": "Vishakapatnam",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110095",
            "startCity": "Kochi",
            "destination": "Chennai",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110094",
            "startCity": "Kochi",
            "destination": "Salem",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110093",
            "startCity": "Kochi",
            "destination": "Coimbatore",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110092",
            "startCity": "Kochi",
            "destination": "OOty",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "RED FLIGHT",
            "busType": "Multi AXLE AC",
            "busNumber": "TN 27 110091",
            "startCity": "Kochi",
            "destination": "",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/08/2020"
        },
        {
            "CompanyName": "Santhosh Travels bus",
            "busType": "Multi AXLE AC",
            "busNumber": "AP 27 110090",
            "startCity": "Kakinada",
            "destination": "",
            "totalSeats": "36",
            "availableSeats": "20",
            "pricePerSeat": "1000",
            "date": "22/04/2021"
        }
        // Add more flights as necessary
    ];

    const handleFlightSelection = (flight) => {
        setSelectedFlight(flight); // Set selected flight details
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedFlight) {
            alert("Please select a flight first!");
            return;
        }

        // Set the ticket details
        setTicket({
            username: formData.username,
            phone: formData.phone,
            email: formData.email,
            startCity: selectedFlight.startCity,
            destination: selectedFlight.destination,
            price: selectedFlight.pricePerSeat,
            startDate: formData.startDate,
            endDate: formData.endDate,
            flightDate: selectedFlight.date,
        });
    };

    const downloadTicket = () => {
        if (!ticket) return;
        
        const doc = new jsPDF();
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0); // Black text color

        doc.setFontSize(22);
        doc.setTextColor(0, 102, 204); // Blue color for title
        doc.text('Flight Ticket', 20, 20);

        doc.setLineWidth(0.5);
        doc.line(20, 25, 190, 25);

        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0); // Black text for the content

        doc.text(`Full Name: ${ticket.username}`, 20, 40);
        doc.text(`Phone Number: ${ticket.phone}`, 20, 50);
        doc.text(`Email: ${ticket.email}`, 20, 60);
        doc.text(`Start City: ${ticket.startCity}`, 20, 70);
        doc.text(`Destination: ${ticket.destination}`, 20, 80);
        doc.text(`Price: ₹${ticket.price}`, 20, 90);
        doc.text(`Flight Date: ${ticket.flightDate}`, 20, 100);
        doc.text(`Start Date: ${ticket.startDate}`, 20, 110);
        doc.text(`End Date: ${ticket.endDate}`, 20, 120);

        doc.setLineWidth(0.5);
        doc.line(20, 130, 190, 130);

        doc.setFontSize(12);
        doc.setTextColor(150, 150, 150); // Light gray for footer
        doc.text("Thank you for booking with us!", 20, 140);
        doc.text("For any assistance, contact us at support@travel.com", 20, 150);

        doc.save('ticket.pdf');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1>Flight Reservation System</h1>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                    <h2>Available Flights</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {flights.map((flight, index) => (
                            <div
                                key={index}
                                onClick={() => handleFlightSelection(flight)}
                                style={{
                                    padding: '15px',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedFlight?.busNumber === flight.busNumber ? '#f0f0f0' : '#fff'
                                }}
                            >
                                <h3>{flight.CompanyName} ({flight.busNumber})</h3>
                                <p>{flight.startCity} to {flight.destination}</p>
                                <p>Price per seat: ₹{flight.pricePerSeat}</p>
                                <p>Date: {flight.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedFlight && (
                    <div>
                        <h2>Book Your Flight</h2>
                        <form id="bookingForm" style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }} onSubmit={handleSubmit}>
                            <label htmlFor="username">Full Name</label>
                            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} style={{ padding: '10px', marginBottom: '10px' }} required />

                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} style={{ padding: '10px', marginBottom: '10px' }} required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '10px', marginBottom: '10px' }} required />

                            <label htmlFor="startDate">Start Date</label>
                            <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} style={{ padding: '10px', marginBottom: '10px' }} required />

                            <label htmlFor="endDate">End Date</label>
                            <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} style={{ padding: '10px', marginBottom: '10px' }} required />

                            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
                                Book Now
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {ticket && (
                <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                    <h2>Your Ticket</h2>
                    <p>Thank you for booking with us! Here are your ticket details:</p>
                    <div>
                        <p><strong>Full Name:</strong> {ticket.username}</p>
                        <p><strong>Phone Number:</strong> {ticket.phone}</p>
                        <p><strong>Email:</strong> {ticket.email}</p>
                        <p><strong>Start City:</strong> {ticket.startCity}</p>
                        <p><strong>Destination:</strong> {ticket.destination}</p>
                        <p><strong>Price:</strong> ₹{ticket.price}</p>
                        <p><strong>Flight Date:</strong> {ticket.flightDate}</p>
                        <p><strong>Start Date:</strong> {ticket.startDate}</p>
                        <p><strong>End Date:</strong> {ticket.endDate}</p>
                    </div>
                    <button onClick={downloadTicket} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Download Ticket as PDF
                    </button>
                </div>
            )}
        </div>
    );
};

export default Flight;
