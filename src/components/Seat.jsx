import React, { useState } from "react";
import { PiChairDuotone} from 'react-icons/pi';
import Swal from 'sweetalert2';
import './Seat.css'
import Model from "./Model";
import Showcase from "./Showcase";
const Seat = ({type, ticketQun}) => {
    const layout = [
        [
          0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 7, 8, 0, 9, 10, 0, 11, 12, 0,
          13, 14,
        ],
        [
          0, 0, 0, 0, 0, 15, 16, 0, 17, 18, 0, 19, 20, 0, 21, 22, 0, 23, 24, 0, 25,
          26, 0, 27, 28,
        ],
        [
          0, 0, 0, 0, 0, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 0, 0, 0, 39, 40,
          41, 42, 43, 44, 45,
        ],
        [
          0, 0, 0, 0, 0, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 0, 0, 0, 56, 57,
          58, 59, 60, 61, 62,
        ],
        [
          0, 0, 0, 0, 0, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 0, 0, 0, 74, 75,
          76, 77, 78, 79, 80,
        ],
        [
          0, 0, 0, 0, 0, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 0, 0, 0, 91, 92,
          93, 94, 95, 96, 97,
        ],
        [
          0, 0, 0, 0, 0, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 0, 0, 0,
          108, 109, 110, 111, 112, 113, 114,
        ],
        [
          115, 116, 117, 0, 0, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 0,
          0, 0, 128, 129, 130, 132, 132, 133, 134,
        ],
        [
          135, 136, 137, 0, 0, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 0,
          0, 0, 148, 149, 150, 151, 152, 153, 154,
        ],
        [
          0, 0, 0, 0, 0, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 0, 0, 0,
          165, 166, 167, 168, 169, 170, 171,
        ],
        [
          0, 0, 0, 0, 0, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 0, 0, 0,
          182, 183, 184, 185, 186, 187, 188,
        ],
        [
          0, 0, 0, 0, 0, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 0, 0, 0,
          199, 200, 201, 202, 203, 204, 205,
        ],
      ];
      let ticketNumber=ticketQun;
      let ticketType = type;
      const [showConfetti, setShowConfetti] = useState(false);
      const [seats,setSeats]=useState(
        layout.map((item,index)=>item.map((data)=>({
            id:data,
            isZero:data,
            isSelected:false,
            isBooked:false,
            type:index>1?"Standard":"Premium",
        })))
      );

      const [selectedSeats, setSelectedSeats] = useState(
        seats.flat().filter((item) => item.isSelected).length
      );

      const [isModalOpen, setIsModalOpen] = useState(false);
  function resetSelection(arr) {
    // Iterate through the nested array and set isSelected to false for all objects
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j].isSelected = false;
      }
    }
    return arr;
  }

       function bookHandler(seatId,seat){
        console.log(seat);
        console.log(ticketNumber);
        let unSelectPrev = resetSelection(seats);

        if (ticketNumber === "") {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Please select ticket quantity",
            });
            return;
          }
          if (seat.type !== type) {
            Swal.fire({
              icon: "info",
              title: "Info",
              text: "Please select a ticket of type " + type,
            });
            return;
          }
          Swal.fire({
            title: "Updating...",
            html: "Please wait...",
            allowEscapeKey: false,
            allowOutsideClick: false,
            onOpen: () => {
              Swal.showLoading();
            },
          });
          const updatedSeats = unSelectPrev.map((row) => {
            return row.map((seat) => {
              if (seat.id === seatId && !seat.isBooked) {
                // Get the index of the selected seat in the current row
                const seatIndex = row.indexOf(seat);
      
                let selectedCount = 0;
                // Count the number of selected seats in the current row
                row.forEach((s) => {
                  if (s.isSelected) {
                    selectedCount++;
                  }
                });
      
                if (selectedCount < ticketNumber) {
                  // Select seats in the same row up to ticketNumber
                  for (let i = seatIndex; i < row.length; i++) {
                    if (row[i].id !== 0 && !row[i].isBooked && !row[i].isSelected) {
                      row[i].isSelected = true;
                      selectedCount++;
                    }
                    if (selectedCount >= ticketNumber) {
                      break;
                    }
                  }
                }
              }
              return seat;
            });
          });
          setTimeout(() => {
            setSeats(updatedSeats);
            setSelectedSeats(selectedSeats + 1);
            Swal.close(); // Close the loading popup
          }, 1500); // Simulate a delay for booking
        
          setSeats(updatedSeats);
          setSelectedSeats(selectedSeats + 1);
       }
       const proceedHandler = () => {
        setShowConfetti(true);
    
        console.log("proceedHandler called");
        console.log("ticketNumber:", ticketNumber); 
        if (ticketNumber === '') {
          
          Swal.fire({
            icon: 'error',
            title: 'Please select ticket quantity',
          });
          return;
        }
    
        console.log("Before seat selection update:", seats);
    
        setSeats(
          seats.map((item) =>
            item.map((data) => {
              if (data.isSelected) {
                return { ...data, isBooked: true, isSelected: false };
              } else {
                return data;
              }
            })
          )
        );
    
        // Debug
        console.log("After seat selection update:", seats);
        Swal.fire({
          icon: 'success',
          title: 'Booking successful!',
          showConfirmButton: false,
          timer: 1500, // Auto-close after 1.5 seconds
        });
        setIsModalOpen(true);
        console.log("Modal should open");
    
        setSelectedSeats(0);
        console.log("Selected seats reset");
      }; 
      const closeModal = () => {
        setIsModalOpen(false); 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      };
       
      return (
        <>
         <Showcase/>
        <div className="container">
          {seats.map((row, index1) => {
            return (
             <div key={index1} style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "40px", marginTop: "15px", marginLeft:'10px' }}>
                  {String.fromCharCode(69 + index1)}                 
                </div>
                {row.map((seat, index2) => ( 
                  <React.Fragment key={index2}>
                    {seat.isZero !== 0 ? (
                      <PiChairDuotone
                        onClick={() => bookHandler(seat.id, seat)}
                        className={`${
                          seat.isBooked
                            ? "booked"
                            : seat.isSelected
                            ? "selected"
                            : seat.type === "Premium"
                            ? "premiumcolor"
                            : "available hover seat"
                        }`}
                        style={{ width: "3.5%", height: "40px", color: "black" }}
                      />
                    ) : (
                      <span style={{ marginRight: "3.5%" }}></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
          </div>

          <button className="pay_btn" onClick={proceedHandler}>
            Book Ticket
          </button>
          {ticketNumber > 0 && isModalOpen && (
  <>
     {showConfetti}
    <Model
      isOpen={isModalOpen}
      onClose={closeModal}
      quantity={ticketNumber}
      ticketType={ticketType}
    />
  </>
)}
          </>
      );
      
    }

export default Seat
