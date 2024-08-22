import { OverviewForm } from "@/components/organisms/Forms/Settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <>
      <div>
        <h3 className="font-semibold text-2xl mb-5">Settings</h3>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="socialLinks">Social Links</TabsTrigger>
          <TabsTrigger value="teams">Social Links</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewForm />
        </TabsContent>
        <TabsContent value="socialLinks">socialLinks</TabsContent>
        <TabsContent value="teams">teams</TabsContent>
      </Tabs>
    </>
  );
}
