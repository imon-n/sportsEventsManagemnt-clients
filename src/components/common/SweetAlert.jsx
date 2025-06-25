import React, { useEffect } from 'react';
import Swal from "sweetalert2";

const SweetAlert = ({alretMessage}) => {
  useEffect(() => {
    Swal.fire({
      title: `${alretMessage}`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      draggable: true,
    });
  });

  return null; 
};

export default SweetAlert;
