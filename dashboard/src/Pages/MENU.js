import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import "./MENU.css";

function MENU() {
  const navigate = useNavigate();
  const [allImage, setAllImage] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null); // State to store the selected dish

  useEffect(() => {
    const storedAdmin = localStorage.getItem('adminID');
    const currentPath = window.location.pathname;

    // If there's an adminID and not on the admin page, redirect to admin
    if (storedAdmin && window.location.pathname !== '/admin') {
      navigate('/admin');
    }
    getImage();
  }, [navigate]);

  const getImage = async () => {
    try {
      const response = await fetch("http://localhost:1337/get-image");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllImage(data.data);
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  const handleViewDetails = (dish) => {
    setSelectedDish(dish); // Set the selected dish when the button is clicked
  };

  const handleCloseDialog = () => {
    setSelectedDish(null); // Reset the selected dish when the dialog is closed
  };

  return (
    <div className="main">
      <h3>Menu</h3>
      <div className="image-container">
        {allImage.map((data, index) => {
          const imageUrl = `data:image/jpeg;base64,${data.image}`;
          return (
            <div key={index} className="image-item">
              <img src={imageUrl} alt={`Image ${index}`} />
              <div className="image-text">{data.Name}</div>
              <div className="image-text">₱&nbsp;{data.Price}</div>
              <Button variant="contained" onClick={() => handleViewDetails(data)}>
                View Dish Details
              </Button>
            </div>
          );
        })}
      </div>
      <Dialog open={!!selectedDish} onClose={handleCloseDialog}>
  <DialogTitle>{selectedDish && selectedDish.Name}</DialogTitle>
  <DialogContent>
    {selectedDish && (
      <>
        <img 
          src={`data:image/jpeg;base64,${selectedDish.image}`} 
          alt={selectedDish.Name} 
          style={{ width: '200px', height: '200px' }} 
        />
        <div>{selectedDish.Description}</div>
      </>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseDialog} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>
    </div>
  );
}

export default MENU;
