import React, { useState } from "react";
import NotifyContext from "./notify-context";

const NotifyProvider = (props) => {
  const [isNotifying, setIsNotifying] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const handleDoNotification = (alertText) => {
    console.log(alertText);
    setIsNotifying(true);
    setNotificationText(alertText);
    setTimeout(() => {
      setIsNotifying(false);
      setNotificationText("");
    }, 2500);
  };

  const handleDismissNotification = () => {
    setIsNotifying(false);
    setNotificationText("");
  };

  const notifyContext = {
    isNotifying: isNotifying,
    notificationText: notificationText,
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
