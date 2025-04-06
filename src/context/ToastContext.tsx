"use client";

import React, { createContext, useContext, useState } from "react";
import Toast from "@/components/Common/Toast";

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const showToast = (message: string) => {
    setMessage(message);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </ToastContext.Provider>
  );
};

export default ToastProvider; 