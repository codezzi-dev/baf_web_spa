import EmployeeDetailsCard from '@/components/Card/EmployeeDetailsCard'
import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/Separator'
import { Award, Calendar, Globe, Heart, Quote, Target, TrendingUp, User, Users } from 'lucide-react'
import { president } from '@/components/data/introduction'
import MessageContentCard from '@/components/Card/MessageContentCard'

const page = () => {
  return (
    <div className='bg-accent mx-auto min-h-screen px-4 md:px-8 lg:px-16'>

      {/* Hero Section */}
      <div className="text-center mb-16 pt-48">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00704A]/10 to-[#C1272D]/10 rounded-full mb-6">
          <Calendar className="w-4 h-4 text-[#00704A]" />
          <span className="text-sm font-semibold text-[#00704A]">Leadership</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[#2D3436] mb-6">
          Message From {" "}
          <span className="bg-gradient-to-r from-[#00704A] to-[#005239] bg-clip-text text-transparent">President</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Five decades of dedication to athletics excellence, from humble beginnings to becoming a recognized force in
          South Asian athletics. Our journey reflects the spirit and determination of Bangladesh.
        </p>
      </div>

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