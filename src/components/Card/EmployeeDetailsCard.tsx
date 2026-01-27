import React, { FC } from 'react'
import { Card } from '../ui/card'
import { Award, Target, Users } from 'lucide-react'
import { Employee } from '../data/introduction'
import Image from 'next/image'
import { Separator } from '../ui/Separator'


const EmployeeDetailsCard: FC<Employee> = (president) => {
    return (
        <div className="lg:col-span-1">
            <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="h-80 bg-gradient-to-br from-white-100 to-white-200 relative overflow-hidden">
                    <Image 
                    src={president.image} 
                    alt={president.name} 
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110" />
                </div>
                <div className="p-6 text-center">
                    <h2 className="font-playfair text-xl font-bold text-foreground">
                        {president.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-primary">
                        {president.position}, {president.organization}
                    </p>
                    <Separator className="my-4" />
                    <div className="mt-6 space-y-3 text-left">
                        {president.responsibilities?.map((responsibility, index) => (
                            <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                                {responsibility.icon === "Award" && <Award className="h-4 w-4 text-warning" />}
                                {responsibility.icon === "Target" && <Target className="h-4 w-4 text-success" />}
                                {responsibility.icon === "Users" && <Users className="h-4 w-4 text-destructive" />}
                                <span>{responsibility.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default EmployeeDetailsCard