import { Outlet } from "react-router-dom";
import Header from "~/components/header";
export default function WebLayout() {
  return (
    <div className="min-h-full bg-gray-900 text-white">
      <Header />
      <Outlet />
    </div>
  );
}
