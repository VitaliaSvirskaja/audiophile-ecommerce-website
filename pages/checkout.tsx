import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Link from "next/link";
import { CheckoutSummary } from "../components/CheckoutSummary";
import { CheckoutForm } from "../components/CheckoutForm";

export const Checkout = () => {
  return (
    <div className="bg-middle-grey">
      <Header />
      <main className="my-8 px-6 md:px-10">
        <div className="m-auto flex max-w-screen-xl flex-col gap-10 bg-middle-grey">
          <div>
            <Link href={`/`} className="body-font opacity-50">
              GO BACK
            </Link>
          </div>
          <div className="flex justify-between gap-8 max-lg:flex-col">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
