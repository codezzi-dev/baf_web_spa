"use client";

import EmployeeDetailsCard from '@/components/Card/EmployeeDetailsCard'
import { Calendar, } from 'lucide-react'
import { president } from '@/components/data/introduction'
import MessageContentCard from '@/components/Card/MessageContentCard'
import { useGetMessageFromPresident } from "@/api/hooks/the-federation/message-from-president.hook"
import Loading from '@/components/common/Loading'
import Error from '@/components/common/Error'
import PageHero from '@/components/common/PageHero';

const page = () => {
  const { data, error, isLoading } = useGetMessageFromPresident();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const pageGenericElements = data?.data?.pageGenericElements;
  const pageMessageFromPresident = data?.data?.pageMessageFromPresidentDto
  return (
    <div className='bg-accent mx-auto min-h-screen px-4 md:px-8 lg:px-16'>

      {/* Hero Section */}
      {pageGenericElements && <PageHero pageGenericElements={pageGenericElements} />}

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* President Card */}
            {pageMessageFromPresident && <EmployeeDetailsCard pageMessageFromPresident={pageMessageFromPresident} />}

            {/* Message Content */}
            {pageMessageFromPresident && <MessageContentCard pageMessageFromPresident={pageMessageFromPresident} />}

            {/* <MessageContentCard {...president} /> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default page