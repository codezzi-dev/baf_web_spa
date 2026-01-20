import EmployeeDetailsCard from '@/components/Card/EmployeeDetailsCard'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/Separator'
import { Award, Globe, Heart, Quote, Target, TrendingUp, User, Users } from 'lucide-react'
import { president } from '@/components/data/introduction'
import MessageContentCard from '@/components/Card/MessageContentCard'

const page = () => {
  return (
    <div className='pt-40 bg-white '>
      <section className='mb-10 items-center justify-center flex flex-col'>
        <Badge variant="outline" className='bg-green-100 text-green-600 hover:bg-green-600 hover:text-white rounded-3xl px-4 py-2 text-sm border-0'>Leadership</Badge>
        <h1 className='text-green-900 pt-16 pb-4 text-7xl text-center font-bold'>
          Message From President
        </h1>
        <Separator className='mx-auto w-1/2 h-1 mb-20 bg-linear-to-r from-red-500 to-green-500 rounded-md' />
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* President Card */}
            <EmployeeDetailsCard {...president} />

            {/* Message Content */}
            <MessageContentCard {...president} />
          </div>
        </div>
      </section>

    </div>
  )
}

export default page