import React from "react";
import { useStoreAuth } from "../store/useStoreAuth";

const Navbar = () => {
  const { authUser } = useStoreAuth();
  return <div>Navbar</div>;
};

export default Navbar;
