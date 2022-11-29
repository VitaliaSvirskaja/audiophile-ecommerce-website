import { Dialog } from "@headlessui/react";
import { PropsWithChildren } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  className: string | undefined;
}

export const DialogComponent = ({
  open,
  onClose,
  children,
  className,
}: PropsWithChildren<Props>) => (
  <Dialog open={open} onClose={onClose} className="relative">
    {/* Backdrop */}
    <div
      className="fixed inset-0 top-20 bg-black/30 transition-transform sm:top-24"
      aria-hidden="true"
    />
    <div className="fixed w-screen px-6 sm:px-10">
      <div className="m-auto flex h-fit w-full max-w-screen-xl justify-end">
        <Dialog.Panel className={`dark:bg-dark-grey bg-white p-6 ${className}`}>
          {children}
        </Dialog.Panel>
      </div>
    </div>
  </Dialog>
);
