import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";

export default function Layout() {
  return (
    <>
      <AppHeader />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
