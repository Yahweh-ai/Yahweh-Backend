"use client"; // Ensure this is at the top

import { useState } from "react";
import Dashboard from "../components/ui/Dashboard"; // ✅ Ensure correct import
import Card from "@/components/ui/card"; // ✅ Ensure default import
import Sidebar from "@/components/ui/sidebar"; // ✅ Ensure default import
import Button from "@/components/ui/button"; // ✅ Ensure default import
import { PieChart, BarChart, LineChart } from "@/components/ui/charts"; // ✅ Named import
import { Search } from "lucide-react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome to Dashboard</h1>
      <Sidebar /> {/* ✅ Sidebar component added */}
      <Dashboard /> {/* ✅ Ensure Dashboard is added */}
      <Card>
        <PieChart />
        <BarChart />
        <LineChart />
      </Card>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
    </div>
  );
}


