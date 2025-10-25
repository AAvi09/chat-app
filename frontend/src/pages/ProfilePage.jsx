import React from "react";
import { useStoreAuth } from "../store/useStoreAuth";

const ProfilePage = () => {
  const { authUser } = useStoreAuth();
  return <div>ProfilePage</div>;
};

export default ProfilePage;
