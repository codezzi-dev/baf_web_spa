import { Card } from 'antd'
import React from 'react'
import { CardContent, CardHeader } from '../ui/card'
import { CheckCircle2, Users } from 'lucide-react'
const responsibilities = [
  "Policy development and implementation",
  "Training staff and volunteers",
  "Liaison with external authorities",
  "Risk assessment and management",
  "Investigating safeguarding concerns",
  "Managing disclosure procedures",
  "Record keeping and reporting",
  "Promoting safeguarding awareness",
];

const RolesAndResponsibilities = () => {
  return (
     <Card className="shadow-lg w-full">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-primary">
          <Users className="w-5 h-5" />
          <h3 className="text-xl font-bold">Role & Responsibilities</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">
          The Safeguarding Officer is responsible for ensuring the welfare, safety, and protection of all athletes, 
          particularly children and vulnerable adults, within the Bangladesh Athletics Federation.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {responsibilities.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RolesAndResponsibilities