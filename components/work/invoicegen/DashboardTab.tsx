import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Figure from "@/components/projects/Figure";

const dashboardData = [
  {
    value: "invoices",
    name: "Invoices",
    url: "/invoicegen/dashboard/invoices.png",
    title: "",
  },
  {
    value: "products",
    name: "Products",
    url: "/invoicegen/dashboard/products.png",
    title: "",
  },
  {
    value: "customers",
    name: "Customers",
    url: "/invoicegen/dashboard/customers.png",
    title: "",
  },
  {
    value: "payment-method",
    name: "Payment",
    url: "/invoicegen/dashboard/payment.png",
    title: "",
  },
  {
    value: "transactions",
    name: "Transactions",
    url: "/invoicegen/dashboard/transactions.png",
    title: "",
  },
  {
    value: "sales",
    name: "Sales",
    url: "/invoicegen/dashboard/sales.png",
    title: "",
  },
  {
    value: "inventory",
    name: "Inventory",
    url: "/invoicegen/dashboard/inventory.png",
    title: "",
  },
  {
    value: "profile",
    name: "Profile",
    url: "/invoicegen/dashboard/profile.png",
    title: "",
  },
];

const DashboardTab = () => {
  return (
    <Tabs defaultValue="invoices" className="w-full transition-all">
      <TabsList className="flex flex-wrap w-full p-1 items-center justify-between  h-full border-[1.5px] border-matchaBase rounded-full bg-transparent mb-6">
        {dashboardData.map((data) => (
          <TabsTrigger
            key={data.value}
            className="px-[11.5px] py-1.5 data-[state=active]:bg-matchaBase data-[state=active]:text-white data-[state=active]:rounded-full text-[18px] text-monochrome90 leading-[100%]"
            value={data.value}
          >
            {data.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {dashboardData.map((data) => (
        <TabsContent key={data.value} value={data.value}>
          <Figure
            url={data.url}
            width={800}
            height={413}
            alt="dashboard-pages"
            title={`Dashboard Page - ${data.name}`}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DashboardTab;
