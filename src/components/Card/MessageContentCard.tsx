import React, { FC } from 'react'
import { Card } from '../ui/card'
import { Globe, Heart, Quote, TrendingUp } from 'lucide-react'
import { Employee } from '../data/introduction'
const MessageContentCard: FC<Employee> = (president) => {
  return (
      <Card className="lg:col-span-2 p-6">
              <div className="space-y-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-green-200" />

                {/* Opening */}
                <p className="font-playfair text-lg italic text-foreground">
                    {president.greetings},
                </p>
                {/* Message Body */}
                {/* Part 1 */}
                {president.message.firstPart.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}

                {/* Vision Box */}
                <Card className="border-l-4 border-success bg-secondary/5 p-6">
                  <h3 className="mb-3 font-playfair text-lg font-bold text-foreground">
                    Our Vision for the Future
                  </h3>
                  <p className="text-muted-foreground">
                    {president.vission}
                  </p>
                </Card>

                {/* Part 2 */}
                {president.message.secondPart.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}

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
                {president.message.thirdPart.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}

                {/* Signature */}
                <div className="pt-6">
                  <p className="text-muted-foreground">With warm regards and best wishes,</p>
                  <p className="mt-2 font-playfair text-xl font-bold text-primary">
                    {president.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{president.position}</p>
                  <p className="text-sm text-muted-foreground">{president.organization}</p>
                </div>
              </div>
            </Card>
  )
}

export default MessageContentCard