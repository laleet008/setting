import React from "react";
import "./settings.css";
import { EditUserDetail } from "./userForm";

import {
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const settings = () => {
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  return (
    <div className="container">
      <div className="wrapper">
        <div className="profile-container">
          <h3>Profile</h3>
          <div className="profile-image">
            <img
              src="assets/profile.jpg"
              alt=""
            />
          </div>
          <div className="profile-info">
            <div className="profile-personal-details">
              <h3>Sumit Bhattarai</h3>
              <EditUserDetail
                onChange={(item) => {
                  console.log(item);
                }}
              />
            </div>
            <p>Backend Developer</p>
            <div className="active-status">Active</div>
            <div className="profile-time">
              <ClockCircleOutlined /> <div>{showTime}</div>
              <span>Local Time</span>
            </div>
            <div className="status">
              <button>Set status</button>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="contact">
          <div className="contact-box">
            <div className="contact-icon">
              <MailOutlined />
            </div>
            <div>
              <h4>Email Address</h4>
              <p>johndoe@gmail.com</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon">
              <PhoneOutlined />
            </div>
            <div>
              <h4> Phone </h4>
              <p>+922 454 443 3322</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default settings;
