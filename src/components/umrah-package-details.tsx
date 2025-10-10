
"use client";

import { BedDouble, Bus, FileText, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { UmrahPackageDetail } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface UmrahPackageDetailsProps {
  details: UmrahPackageDetail;
}

const DetailItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-4 pb-2 border-b border-primary-foreground/20 last:border-b-0">
        <p className="font-semibold text-primary-foreground/90 mb-1">{title}</p>
        <div className="text-primary-foreground/80">{children}</div>
    </div>
);

const HotelDetailSection = ({ name, description }: { name: string, description: string }) => (
  <div className="mb-6">
    <h4 className="font-bold text-lg text-accent mb-2">{name}</h4>
    <p className="text-primary-foreground/80 whitespace-pre-wrap">{description}</p>
  </div>
);

export function UmrahPackageDetails({ details }: UmrahPackageDetailsProps) {
  if (!details) return null;

  const renderTextWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  
  return (
    <div className="w-full">
        <Card className="shadow-lg bg-card text-card-foreground">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">
                    Package Inclusions & Details
                </CardTitle>
            </CardHeader>
            <CardContent>
                 <Tabs defaultValue="expect" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 bg-secondary">
                        <TabsTrigger value="expect" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><Star className="mr-2 h-4 w-4" />What to Expect</TabsTrigger>
                        <TabsTrigger value="hotel" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><BedDouble className="mr-2 h-4 w-4" />Accommodation</TabsTrigger>
                        <TabsTrigger value="transportation" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><Bus className="mr-2 h-4 w-4" />Transport</TabsTrigger>
                        <TabsTrigger value="visa" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><FileText className="mr-2 h-4 w-4" />Visa</TabsTrigger>
                    </TabsList>
                    <div className="pt-2">
                        <TabsContent value="expect" className="bg-primary rounded-lg p-6">
                            <ul className="list-disc list-inside space-y-3 text-primary-foreground text-base">
                                {details.whatToExpect.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="hotel" className="bg-primary rounded-lg p-6">
                            <DetailItem title="Makkah Accommodation">{details.packageInclusions.makkahAccommodation}</DetailItem>
                            <DetailItem title="Madinah Accommodation">{details.packageInclusions.madinahAccommodation}</DetailItem>
                            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                                <h3 className="font-headline text-2xl text-white mb-4">Hotel Details</h3>
                                <HotelDetailSection name={details.hotelDetailsMakkah.name} description={details.hotelDetailsMakkah.description} />
                                <HotelDetailSection name={details.hotelDetailsMadinah.name} description={details.hotelDetailsMadinah.description} />
                            </div>
                        </TabsContent>
                        <TabsContent value="transportation" className="bg-primary rounded-lg p-6">
                            <DetailItem title="Ground Transportation">{details.packageInclusions.transportation}</DetailItem>
                            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                                <h3 className="font-headline text-2xl text-white mb-4">Transportation Services</h3>
                                <p className="text-primary-foreground/80">{details.transportationServices}</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="visa" className="bg-primary rounded-lg p-6">
                            <DetailItem title="Visa Services">{details.packageInclusions.visa}</DetailItem>
                             <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                                <h3 className="font-headline text-2xl text-white mb-4">{details.visaInformation.title}</h3>
                                <p className="text-primary-foreground/80">{details.visaInformation.description}</p>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </CardContent>
        </Card>
    </div>
  );
}
