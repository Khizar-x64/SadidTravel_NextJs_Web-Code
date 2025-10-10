
"use client";

import { BedDouble, Bus, FileText, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { UmrahPackageDetail } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface UmrahPackageDetailsProps {
  details: UmrahPackageDetail;
}

const DetailItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row mb-4 pb-2 border-b border-border/20 last:border-b-0">
        <p className="w-full sm:w-1/4 font-semibold text-foreground/90">{title}:</p>
        <div className="w-full sm:w-3/4 text-muted-foreground">{children}</div>
    </div>
);

export function UmrahPackageDetails({ details }: UmrahPackageDetailsProps) {
  if (!details) return null;

  return (
    <div className="w-full">
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">
                    Package Inclusions & Details
                </CardTitle>
            </CardHeader>
            <CardContent>
                 <Tabs defaultValue="expect" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-secondary">
                        <TabsTrigger value="expect"><Star className="mr-2 h-4 w-4" />What to Expect</TabsTrigger>
                        <TabsTrigger value="hotel"><BedDouble className="mr-2 h-4 w-4" />Accommodation</TabsTrigger>
                        <TabsTrigger value="transportation"><Bus className="mr-2 h-4 w-4" />Transport</TabsTrigger>
                        <TabsTrigger value="visa"><FileText className="mr-2 h-4 w-4" />Visa</TabsTrigger>
                    </TabsList>
                    <div className="pt-6">
                        <TabsContent value="expect">
                            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base">
                                {details.whatToExpect.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="hotel">
                            <DetailItem title="Makkah Hotel">{details.makkahHotel}</DetailItem>
                            <DetailItem title="Madinah Hotel">{details.madinahHotel}</DetailItem>
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
            </CardContent>
        </Card>
    </div>
  );
}
