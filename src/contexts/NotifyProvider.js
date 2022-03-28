import React, { useState } from "react";
import NotifyContext from "./notify-context";

const NotifyProvider = (props) => {
  const [isNotifying, setIsNotifying] = useState(false);
  const [notificationType, setNotificationType] = useState("");

  const handleDoNotification = (alertType) => {
    console.log(alertType);
    setIsNotifying(true);
    setNotificationType(alertType);
  };

  const handleDismissNotification = () => {
    setIsNotifying(false);
    setNotificationType("");
  };

  const notifyContext = {
    isNotifying: isNotifying,
    notificationType: notificationType,
    notifyNow: handleDoNotification,
    dismissNotification: handleDismissNotification,
  };

  return (
    <NotifyContext.Provider value={notifyContext}>
      {props.children}
    </NotifyContext.Provider>
  );
};

export default NotifyProvider;
