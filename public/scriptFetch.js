const getAllRooms = () => {
    const url = "/api/nasa/getallrooms";
    fetch(url)
      .then(response => {
         //console.log(response.json());
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  // Create Reservation

  const createReservation = () => {
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;
    const numberOfNights = document.getElementById("numberOfNights").value;
    const roomType = document.getElementById("roomType").value;

  
    const postUrl = "/api/nasa/";
  
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: makeJSON({ checkIn, checkOut, numberOfNights, roomType })
    })
      .then(response => {
        return response.json();
      })
      .then(hotelReservation => {
        console.log(hotelReservation);
        return hotelReservation;
      })
      .catch(err => console.log(err));
  };
  