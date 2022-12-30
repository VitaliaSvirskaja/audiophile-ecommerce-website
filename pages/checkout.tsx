import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckoutSummary } from "../components/CheckoutSummary";
import { CheckoutForm } from "../components/CheckoutForm";
import { useRouter } from "next/router";
import { PurchaseModal } from "../components/PurchaseModal";
import { useState } from "react";

export const Checkout = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  function handleCloseModal() {
    setIsPurchaseModalOpen(false);
  }

  function handlePurchase() {
    setIsPurchaseModalOpen(true);
  }

  const router = useRouter();
  return (
    <div className="bg-middle-grey">
      <PurchaseModal isOpen={isPurchaseModalOpen} close={handleCloseModal} />
      <Header />
      <main className="my-8 px-6 md:px-10">
        <div className="m-auto flex max-w-screen-xl flex-col gap-10 bg-middle-grey">
          <div>
            <button
              onClick={() => router.back()}
              className="body-font opacity-50 hover:text-sepia"
            >
              Go Back
            </button>
          </div>
          <div className="flex justify-between gap-8 max-lg:flex-col">
            <CheckoutForm />
            <CheckoutSummary onPurchase={handlePurchase} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
