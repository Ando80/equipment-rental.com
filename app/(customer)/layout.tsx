import { Footer } from "@/features/layout/Footer";
import { Header } from "@/features/layout/Header";
import type { LayoutParams } from "@/types/next";
import "../../app/globals.css";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}
