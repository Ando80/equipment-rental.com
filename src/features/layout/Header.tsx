import Image from "next/image";
import { LoggedInButton } from "../auth/LoggedInButton";
import { Layout } from "@/components/layout";
import { ModeToggle } from "../theme/ModeToggle";

export const Header = async () => {
  return (
    <header className="w-full border-b border-border py-1">
      <Layout className="flex flex-row items-center justify-between py-0">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "10px" }}>
            <Image src="/icon.png" width={50} height={50} alt="icon" />
          </div>
          <div>
            <Image src="/ProTender.png" width={100} height={30} alt="name" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <LoggedInButton />
        </div>
      </Layout>
    </header>
  );
};
