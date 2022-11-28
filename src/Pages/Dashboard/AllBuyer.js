import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://purana-phone-server.vercel.app/users/buyer"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you want to sure to Delete ${user.name}`);
    if (agree) {
      fetch(`https://purana-phone-server.vercel.app/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast.success(" User Deleted Successfully");
        });
    }
  };

  // console.log(users);
  return (
    <div className="mt-6">
      <h2 className="text-3xl mb-4">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Admin</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-xs btn-danger "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
