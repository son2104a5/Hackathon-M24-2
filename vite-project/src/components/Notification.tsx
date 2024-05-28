import React from 'react';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <div className="alert alert-success" role="alert">{message}</div>;
};

export default Notification;
