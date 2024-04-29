import DefaultLayout from "@/components/default-layout/default-layout";
import MainLayout from "@/components/main-layout/main-layout";

export default function WithHeaderPage() {
  return (
    <DefaultLayout>
      <MainLayout />
    </DefaultLayout>
  );
}
