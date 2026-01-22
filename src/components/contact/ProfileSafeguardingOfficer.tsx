import React, { FC } from 'react'
import { Officer } from '../data/introduction'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Separator } from '../ui/Separator'
import { Mail, Phone, TriangleAlert } from 'lucide-react'

const ProfileSafeguardingOfficer: FC<Officer> = (officer) => {
    return (
        <div className="lg:col-span-1">
            <Card className="border-none flex flex-col justify-center items-center p-4 gap-4">
                <div>
                    <div className="h-80 pt-8 bg-gradient-to-br from-white-100 to-white-200 relative overflow-hidden">
                        <Image
                            src={officer.image}
                            alt={officer.name}
                            className="w-full h-full object-contain " />
                    </div>
                    <div className="px-6 text-center">
                        <h2 className="font-playfair text-xl font-bold text-foreground">
                            {officer.name}
                        </h2>
                        <p className="mt-1 text-sm font-medium text-primary">
                            {officer.position}
                        </p>
                        <p className="mt-1 px-2 rounded-full text-xs font-medium text-green-950 bg-green-400/10">{officer.organization}</p>
                    </div>

                </div>
                <Separator className='w-full' />
                <Card className='bg-tag-red/10 border border-tag-red/20 p-2 w-full'>
                    {/* Emergency contact */}
                    <div className="p-4 space-y-2">
                        <div className="flex items-center gap-2 text-tag-red font-medium text-xs">
                            <Phone className="w-4 h-4" />
                            <span>Emergency Contact</span>
                        </div>
                        <div className="space-y-1 font-light text-xs ">
                            <a
                                href="tel:+8801711999888"
                                className="flex items-center gap-2 text-tag-green hover:underline"
                            >
                                <Phone className="w-4 h-4" />
                                +880 1711-999888
                            </a>
                            <a
                                href="mailto:safeguarding@bdathletics.gov.bd"
                                className="flex items-center gap-2 text-tag-green hover:underline"
                            >
                                <Mail className="w-4 h-4" />
                                safeguarding@bdathletics.gov.bd
                            </a>
                        </div>
                    </div>
                </Card>
                <Card className='bg-tag-yellow/10 border border-tag-yellow/20 p-2'>
                    {/* Emergency contact */}
                    <div className="p-4">
                        <div className="flex flex-row items-start gap-2 text-tag-red font-light text-xs">
                            <TriangleAlert className="text-amber-600" />
                            <div>
                                <p className="text-amber-800 font-medium">24/7 Support</p>
                                <p className="text-amber-600">Available round-the-clock for urgent safeguarding concerns</p>
                            </div>
                        </div>

                    </div>
                </Card>
            </Card>
        </div>
    )
}

export default ProfileSafeguardingOfficer