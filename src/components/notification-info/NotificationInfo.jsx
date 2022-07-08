import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase-config";
import { StyledNotificationInfo } from "./NotificationInfo.styled";
import { MdOutlineToday } from "react-icons/md";

function NotificationInfo() {
  const [notifications, setNotifications] = useState([]);
  const usersCollectionRef = collection(db, "notifications");

  useEffect(() => {
    const getNotifications = async () => {
      const data = await getDocs(usersCollectionRef);
      setNotifications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotifications();
  }, []);

  return (
    <StyledNotificationInfo>
      <div className="notification-card row">
        <div className="logo-circle">
          <img src="./assets/logo-2.svg" alt="" className="logo" />
        </div>
        <div className="col">
          <p>
            Congratulations, {localStorage.getItem("username") }❤️. You have
            successfully created your Booksy profile!
          </p>
          <h5>
            Today
            <MdOutlineToday />
          </h5>
        </div>
      </div>
      {notifications.map((notif, index) => {
        return (
          <div className="notification-card row" key={index}>
            <div className="logo-circle">
              <img src="./assets/logo-2.svg" alt="" className="logo" />
            </div>
            <div className="col">
              <p>{notif.newNotification}</p>
              <h5>
                Today
                <MdOutlineToday />
              </h5>
            </div>
          </div>
        );
      })}
    </StyledNotificationInfo>
  );
}

export default NotificationInfo;
