import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Portfolio />
      <Toaster theme="dark" position="bottom-right" />
    </>
  );
}
