import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ categoryPhone }) => {
  console.log(categoryPhone);
  const { user } = useContext(AuthContext);

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const handleBooking = (data) => {
    console.log(data);
    // const booking = {
    //   phoneName: categoryPhone.phoneName,
    //   data.name,
    //   data.email,
    //   phone,
    //   meeting_location,
    //   sellPrice,
    // };
    // console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{categoryPhone.phoneName}</h3>
          <form
            onSubmit={handleSubmit(handleBooking)}
            className="grid grid-cols-1 gap-2 mt-4"
          >
            Name:
            <input
              type="text"
              {...register("name")}
              name="name"
              readOnly
              value={user.displayName}
              className="input w-full input-bordered "
            />
            Email:
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
              {...register("meeting_location")}
              type="text"
              placeholder="Enter Location"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
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
