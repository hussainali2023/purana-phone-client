import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ categoryPhone }) => {
  console.log(categoryPhone);
  const { user } = useContext(AuthContext);

  const date = new Date().toJSON().slice(0, 10);
  console.log(date);
  const navigate = useNavigate();

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const handleBooking = (data) => {
    const booking = {
      bookingDate: date,
      phoneName: categoryPhone.phoneName,
      phonePhoto: categoryPhone.photo,
      name: data.name,
      email: data.email,
      phone: data.phone,
      meetingLocation: data.meetingLocation,
      sellPrice: categoryPhone.salePrice,
    };
    console.log(booking);
    fetch("https://purana-phone-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Booked");
          navigate("/dashboard/my-orders");
        } else {
          toast.error(data.message);
        }
      });

    // console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-base">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{categoryPhone.phoneName}</h3>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="grid grid-cols-1 gap-1 mt-2"
          >
            <p className=" text-base">Name:</p>
            <input
              type="text"
              {...register("name")}
              name="name"
              readOnly
              value={user.displayName}
              className="input w-full input-bordered "
            />
            <p className="text-base"> Email:</p>
            <input
              name="email"
              {...register("email")}
              type="text"
              readOnly
              value={user.email}
              className="input w-full input-bordered"
            />
            Price:
            <input
              name="sellPrice"
              {...register("sellPrice")}
              type="number"
              readOnly
              value={categoryPhone.salePrice}
              className="input w-full input-bordered"
            />
            Phone:
            <input
              name="phone"
              {...register("phone")}
              type="number"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            Meeting Location:
            <input
              name="metting_location"
              {...register("meetingLocation")}
              type="text"
              placeholder="Enter Location"
              className="input w-full input-bordered"
            />
            <input
              className="btn btn-accent w-full mt-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
