
"use client";

import { BedDouble, Bus, Calendar, FileText, Utensils } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { UmrahPackageDetail } from "@/lib/types";

interface UmrahPackageDetailsProps {
  details: UmrahPackageDetail;
}

const DetailItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row mb-2">
        <p className="w-full sm:w-1/4 font-bold text-primary-foreground/90">{title}:</p>
        <div className="w-full sm:w-3/4 text-primary-foreground/80">{children}</div>
    </div>
);

export function UmrahPackageDetails({ details }: UmrahPackageDetailsProps) {
  if (!details) return null;

  return (
    <div className="mt-4">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-primary/20">
          <TabsTrigger value="details"><Calendar className="mr-2 h-4 w-4" />Package Details</TabsTrigger>
          <TabsTrigger value="hotel"><BedDouble className="mr-2 h-4 w-4" />Hotel</TabsTrigger>
          <TabsTrigger value="transportation"><Bus className="mr-2 h-4 w-4" />Transportation</TabsTrigger>
          <TabsTrigger value="visa"><FileText className="mr-2 h-4 w-4" />Visa</TabsTrigger>
        </TabsList>
        <div className="bg-primary/5 p-6 rounded-b-md">
            <TabsContent value="details">
                <h3 className="font-bold text-lg mb-3 text-primary-foreground">What to Expect:</h3>
                <ul className="list-disc list-inside space-y-2 text-primary-foreground/80">
                    {details.whatToExpect.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="hotel">
                <DetailItem title="Mecca">{details.makkahHotel}</DetailItem>
                <DetailItem title="Medina">{details.madinahHotel}</DetailItem>
            </TabsContent>
            <TabsContent value="transportation">
                <DetailItem title="Transport">{details.transportation}</DetailItem>
                <DetailItem title="Sightseeing">{details.sightseeing}</DetailItem>
            </TabsContent>
            <TabsContent value="visa">
                <DetailItem title="Visa Info">{details.visa}</DetailItem>
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
