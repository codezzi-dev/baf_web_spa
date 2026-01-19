import { Badge } from '@/components/ui/Badge'
import { Card, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/Separator'
import { Award, Globe, Heart, Quote, Target, TrendingUp, User, Users } from 'lucide-react'


const page = () => {
    return (
        <div className='pt-40 bg-white '>

            <section className='mb-20 items-center justify-center flex flex-col'>
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
            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <div className="flex h-48 items-center justify-center bg-secondary">
                  <User className="h-24 w-24 text-white/80" />
                </div>
                <div className="p-6 text-center">
                  <h2 className="font-playfair text-xl font-bold text-foreground">
                    Gen. M. A. Matin (Retd.)
                  </h2>
                  <p className="mt-1 text-sm font-medium text-primary">
                    President, Bangladesh Athletics Federation
                  </p>
                  <div className="mt-6 space-y-3 text-left">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-amber-500" />
                      <span>Veteran Administrator</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Target className="h-4 w-4 text-primary" />
                      <span>Sports Development Leader</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 text-destructive" />
                      <span>Youth Empowerment Advocate</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Message Content */}
            <Card className="lg:col-span-2 p">
              <div className="space-y-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary" />

                {/* Opening */}
                <p className="font-playfair text-lg italic text-foreground">
                  Dear Athletes, Coaches, Officials, and Athletics Enthusiasts,
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  It is with immense pride and profound honor that I address you as the President of the
                  Bangladesh Athletics Federation. Athletics is not just a sport; it is a testament to the human
                  spirit, a celebration of determination, and a pathway to national glory.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  Bangladesh has a rich heritage of sporting excellence, and athletics holds a special place in
                  our journey. From the tracks of Dhaka to the international arenas, our athletes have
                  consistently demonstrated courage, resilience, and an unwavering commitment to excellence.
                  Each stride they take carries the hopes and aspirations of millions of Bangladeshis.
                </p>

                {/* Vision Box */}
                <div className="border-l-4 border-primary bg-secondary/5 p-6">
                  <h3 className="mb-3 font-playfair text-lg font-bold text-foreground">
                    Our Vision for the Future
                  </h3>
                  <p className="text-muted-foreground">
                    We are committed to creating a comprehensive ecosystem that identifies talent
                    from the grassroots level, provides world-class training facilities, and ensures our
                    athletes have every opportunity to compete and succeed on the global stage.
                  </p>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  The Bangladesh Athletics Federation is dedicated to fostering a culture of excellence, where
                  every young boy and girl with athletic potential can dream of representing our nation. We are
                  investing in infrastructure, coaching, sports science, and athlete welfare programs to ensure
                  that our athletes have access to the best resources available.
                </p>

                {/* Highlighted Text */}
                <p className="leading-relaxed text-muted-foreground">
                  I firmly believe that sports, particularly athletics, plays a crucial role in nation-building. It
                  teaches discipline, builds character, promotes healthy living, and unites people across all
                  divides.{" "}
                  <span className="bg-primary/20 px-1 font-medium text-foreground">
                    Our mission extends beyond winning medals – we aim to create champions in life
                    who will inspire future generations.
                  </span>
                </p>

                {/* Value Cards */}
                <div className="grid gap-4 py-4 sm:grid-cols-3">
                  <Card className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-playfair font-bold text-foreground">Excellence</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Striving for world-class performance
                    </p>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-playfair font-bold text-foreground">Dedication</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Commitment to athlete development
                    </p>
                  </Card>
                  <Card className="p-6 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-playfair font-bold text-foreground">Growth</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Building sustainable pathways
                    </p>
                  </Card>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  To our athletes: You are the pride of our nation. Every time you step onto the track or field,
                  you carry not just your dreams, but the collective aspirations of Bangladesh. Train hard,
                  compete with honor, and know that the entire nation stands behind you.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  To our coaches and support staff: Your dedication and expertise are the foundation of our
                  success. Thank you for your tireless efforts in nurturing talent and building champions.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  To our stakeholders, sponsors, and partners: Your support is invaluable. Together, we are
                  building a legacy that will benefit generations to come.
                </p>

                <p className="font-medium leading-relaxed text-foreground">
                  Let us work together to make Bangladesh a powerhouse in athletics. The journey
                  may be challenging, but with unity, determination, and unwavering
                  commitment, there is no limit to what we can achieve.
                </p>

                {/* Signature */}
                <div className="pt-6">
                  <p className="text-muted-foreground">With warm regards and best wishes,</p>
                  <p className="mt-2 font-playfair text-xl font-bold text-primary">
                    M. A. Matin
                  </p>
                  <p className="text-sm text-muted-foreground">President</p>
                  <p className="text-sm text-muted-foreground">Bangladesh Athletics Federation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
        </div>
    )
}

export default page