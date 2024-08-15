import { createStore } from "zustand/vanilla";

type ModalState = {
  isOpen: boolean;
  children: React.ReactNode | null;
};

type ModalActions = {
  openModal: (children: React.ReactNode) => void;
  closeModal: () => void;
};

export type ModalStore = ModalState & ModalActions;

export const defaultInitState: ModalState = {
  isOpen: false,
  children: null,
};

export const createModalStore = (initState: ModalState = defaultInitState) => {
  return createStore<ModalStore>()((set) => ({
    ...initState,
    openModal: (children) => set({ children: children, isOpen: true }),
    closeModal: () => set({ isOpen: false }),
  }));
};
