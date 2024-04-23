import { Layout } from "@/components/layout";
import React from "react";

export const Footer = async () => {
  return (
    <footer className="w-full border-t border-border  py-2">
      <Layout className="mx-auto pt-2 xl:container">
        <h2 className="flex items-center justify-center text-base text-black">
          Protender.ch 2024
        </h2>
      </Layout>
    </footer>
  );
};
