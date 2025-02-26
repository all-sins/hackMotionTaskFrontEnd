import type { MetaFunction } from "@remix-run/node";
import { Links, Meta } from "@remix-run/react";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is the main content of your app.</p>
      </div>
    </Layout>
  );
}
