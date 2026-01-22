import EmployeeDetailsCard from '@/components/Card/EmployeeDetailsCard'
import { Calendar,  } from 'lucide-react'
import { safeguardingOfficer } from '@/components/data/introduction'
import MessageContentCard from '@/components/Card/MessageContentCard'
import ProfileSafeguardingOfficer from '@/components/contact/ProfileSafeguardingOfficer'
import RolesAndResponsibilities from '@/components/contact/RolesAndResponsibilities'

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
          <span className="bg-gradient-to-r from-[#00704A] to-[#005239] bg-clip-text text-transparent">Safeguarding Officer</span>
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
            {/* Officer Card */}
             <ProfileSafeguardingOfficer {...safeguardingOfficer} /> 
            <div>

            {/* Role & Responsibilities */}
            <RolesAndResponsibilities/>
            </div>
            
          </div>
        </div>
      </section> 

    </div>
  )
}

export default page