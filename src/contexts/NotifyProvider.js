import React, { useState } from "react";
import NotifyContext from "./notify-context";

const defaultSeverity = "success";

const NotifyProvider = (props) => {
  const [isNotifying, setIsNotifying] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [severity, setSeverity] = useState(defaultSeverity);

  const handleDoNotification = (alertText, severity) => {
    setIsNotifying(true);
    if (severity) setSeverity(severity);
    setNotificationText(alertText);
    setTimeout(() => {
      setIsNotifying(false);
      setNotificationText("");
    }, 1200);
  };

  const handleResetNotification = () => {
    // test temporary disabled
    // setIsNotifying(false);
    setSeverity(defaultSeverity);
  };

  const notifyContext = {
    isNotifying: isNotifying,
    severity: severity,
    notificationText: notificationText,
    notifyNow: handleDoNotification,
    resetNotification: handleResetNotification,
  };

  return (
    <NotifyContext.Provider value={notifyContext}>
      {props.children}
    </NotifyContext.Provider>
  );
};

export default NotifyProvider;
