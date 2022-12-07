import { useRouter } from "next/router";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <Header />
      <main>
        <h1>
          {typeof category === "string" ? category.toUpperCase() : category}
        </h1>
      </main>
      <Footer />
    </div>
  );
}
