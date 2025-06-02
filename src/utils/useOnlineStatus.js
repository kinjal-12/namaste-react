import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Check if online status, return online status(boolean)
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
        setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
