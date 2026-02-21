"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isAdmissionModalOpen: boolean;
  openAdmissionModal: () => void;
  closeAdmissionModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);

  const openAdmissionModal = () => setIsAdmissionModalOpen(true);
  const closeAdmissionModal = () => setIsAdmissionModalOpen(false);

  return (
    <ModalContext.Provider value={{ isAdmissionModalOpen, openAdmissionModal, closeAdmissionModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
