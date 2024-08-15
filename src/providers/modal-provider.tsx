"use client";

import { useStore } from "zustand";
import { createModalStore, ModalStore } from "@/stores/modal-store";
import { createContext, useContext, useRef } from "react";
import { Dialog } from "@/components/ui/dialog";

export type ModalStoreApi = ReturnType<typeof createModalStore>;

export interface ModalStoreProviderProps {
  children: React.ReactNode;
}

export const ModalContext = createContext<ModalStoreApi | undefined>(undefined);

export const ModalProvider = ({ children }: ModalStoreProviderProps) => {
  const storeRef = useRef<ModalStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createModalStore();
  }

  return (
    <ModalContext.Provider value={storeRef.current}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = <T,>(selector: (store: ModalStore) => T): T => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("context provider need to be place at parent layout");
  }

  return useStore(modalContext, selector);
};

export default function GlobalModal() {
  const isOpen = useModal((state) => state.isOpen);
  const closeModal = useModal((state) => state.closeModal);
  const children = useModal((state) => state.children);

  return (
    <Dialog open={isOpen} onOpenChange={() => closeModal()}>
      {children}
    </Dialog>
  );
}
