import "@/styles/globals.scss";
import { Toaster } from "sonner";
import Layout from "@/components/layout/layout";
import { ReactNode } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Snaplet</title>
      </head>
      <body>
        <Providers>
          <Layout>
            <Toaster richColors position="bottom-right" />
            <div className="mx-auto">{children}</div>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
