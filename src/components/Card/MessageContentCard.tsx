import React, { FC } from 'react'
import { Card } from '../ui/card'
import { Globe, Heart, Quote, TrendingUp } from 'lucide-react'
import { Employee } from '../data/introduction'
import { MessageFromPresident } from '@/api/types/the-federation/message-from-president.type'

interface EmployeeDetailsCardProps {
  pageMessageFromPresident: MessageFromPresident;
}
const MessageContentCard: FC<EmployeeDetailsCardProps> = ({ pageMessageFromPresident }) => {
  return (
    <Card className="lg:col-span-2 p-6">
      <div className="space-y-6">
        {/* Quote Icon */}
        <Quote className="h-10 w-10 text-green-200" />

        {/* Opening */}
        <p className="font-playfair text-lg italic text-foreground">
          {pageMessageFromPresident.messageFromPresidentDescription},
        </p>
        {/* Message Body */}
        {/* Part 1 */}
        <div
          dangerouslySetInnerHTML={{
            __html: pageMessageFromPresident.messageFromPresidentSection1,
          }}
        />


        {/* Vision Box */}
        <Card className="border-l-4 border-success bg-secondary/5 p-6">
          <h3 className="mb-3 font-playfair text-lg font-bold text-foreground">
            {pageMessageFromPresident.messageFromPresidentContentTitle}
          </h3>
          <p className="text-muted-foreground">
            {pageMessageFromPresident.messageFromPresidentContentDescription}
          </p>
        </Card>

        {/* Part 2 */}
        <div
          dangerouslySetInnerHTML={{
            __html: pageMessageFromPresident.messageFromPresidentSection2,
          }}
        />

        {/* Value Cards */}
        <div className="grid gap-4 py-4 sm:grid-cols-3">
          <Card className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-success/80">
              <Globe className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="font-playfair font-bold text-foreground">Excellence</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Striving for world-class performance
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/80">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="font-playfair font-bold text-foreground">Dedication</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Commitment to athlete development
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-warning/80">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <h4 className="font-playfair font-bold text-foreground">Growth</h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Building sustainable pathways
            </p>
          </Card>
        </div>

        {/* Part 3 */}
        <div
          dangerouslySetInnerHTML={{
            __html: pageMessageFromPresident.messageFromPresidentSection3,
          }}
        />

        {/* Signature */}
        <div className="pt-6">
          <p className="text-muted-foreground">With warm regards and best wishes,</p>
          <p className="mt-2 font-playfair text-xl font-bold text-primary">
            {pageMessageFromPresident.messageFromPresidentName}
          </p>
          {/* <p className="text-sm text-muted-foreground">{pageMessageFromPresident.}</p>
          <p className="text-sm text-muted-foreground">{president.organization}</p> */}
          President, Bangladesh Athletics Fedaration
        </div>
      </div>
    </Card>
  )
}

export default MessageContentCard