import React from "react";
import DynamicHeading from "./HeadingComponent";
import latest_news_1 from '@/assets/images/home/latest-news/latest-news-1.jpg'
import latest_news_2 from '@/assets/images/home/latest-news/latest-news-2.jpg'
import latest_news_3 from '@/assets/images/home/latest-news/latest-news-3.jpg'
import latest_news_4 from '@/assets/images/home/latest-news/latest-news-4.jpg'
import Image from "next/image";




const LatestNews: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "বাংলাদেশের এন্ডুরেন্স স্পোর্টসের নতুন অধ্যায় 'ঢাকা স্টেডিয়াম রান ২০২৫' সমাপ্তি, ২৩৩ কিলোমিটার দীর্ঘতম দৌড়ের রেকর্ড।",
      excerpt: "২৬-২৭ ডিসেম্বর ২০২৫ তারিখে জাতীয় ক্রীড়াঙ্গনে এক ঐতিহাসিক অধ্যায়ের সূচনা করলো বাংলাদেশ। দেশের এন্ডুরেন্স স্পোর্টসের ইতিহাসে প্রথমবারের মতো ঢাকা জাতীয় স্টেডিয়ামে মঞ্চস্থ হলো স্টেডিয়াম ভিত্তিক আল্ট্রা দৌড় আয়োজন 'ঢাকা স্টেডিয়াম রান ২০২৫'। গত ২৬ ডিসেম্বর ভোর ৬ ঘটিকায় শুরু হয়ে ২৭ ডিসেম্বর সন্ধ্যা ৬ ঘটিকায় পর্দা নামে এই আয়োজনের।",
      date: "December 27, 2025",
      category: "Event",
      gradient: "from-green-600 to-green-400",
      emoji: "📰",
      image: latest_news_1
    },
    {
      id: 2,
      title: "সুনামগঞ্জের জামালগঞ্জে “ক্রীড়া কম্পাস” এর ৩য় প্রকল্প শুরু হয়েছে আজ।",
      excerpt: "ওয়ার্ল্ড অ্যাথলেটিক্সের “Grant for Growth” প্রকল্পের অর্থায়নে বাংলাদেশ সরকারের তারুণ্যের উৎসব এর সাথে সংহতি রেখে বাংলাদেশ অ্যাথলেটিক্স ফেডারেশনের ব্যবস্থাপনায় সঠিক পথে ক্রীড়া শক্তিশালী আগামী” শ্লোগানের মাধ্যমে দেশব্যাপী “ক্রীড়া কম্পাস” (Athletics Compass) নামে প্রশিক্ষন কার্যক্রম এর ৩য় প্রকল্প অদ্য ২৭ ডিসেম্বর সুনামগঞ্জের জামালগঞ্জ উপজেলায় শুরু হয়েছে আজ।",
      date: "December 27, 2025",
      category: "Event",
      gradient: "from-yellow-500 to-yellow-300",
      emoji: "🏆",
      image: latest_news_2
    },
    {
      id: 3,
      title: "ঢাকায় দেশের প্রথম স্টেডিয়াম আল্ট্রা-রান “ঢাকা স্টেডিয়াম রান” শুরু হবে আগামীকাল সকাল ৬টায়।",
      excerpt:"বাংলাদেশ  ক্রীড়াক্ষেত্র একটি ঐতিহাসিক মাইলফলকের সাক্ষী হতে চলছে। প্রথমবারের মতো স্টেডিয়াম-ভিত্তিক আল্ট্রা-রানিং ইভেন্ট, ঢাকা স্টেডিয়াম রান ২০২৫ প্রতিযোগিতা ২৬-২৭ ডিসেম্বর,২০২৫ রাজধানীর আইকনিক জাতীয় স্টেডিয়ামে অনুষ্ঠিত হবে। আগামীকাল ভোর ৬ টায় শুরু ২৭ ডিসেম্বর সন্ধ্যা ৬:৩০টায় সমাপ্তি হবে।",
      date: "December 25, 2025",
      category: "News",
      gradient: "from-blue-500 to-blue-400",
      emoji: "📢",
      image: latest_news_3
    },
    {
      id: 4,
      title: "সিলেটের সুনামগঞ্জ সদরে ক্রীড়া কম্পাস ২য় প্রকল্পের কিডস অ্যাথলেটিক্স প্রতিযোগিতার সমাপ্তি আজ।",
      excerpt: "সঠিক পথে ক্রীড়া শক্তিশালী আগামী শ্লোগানের মাধ্যমে দেশব্যাপী ক্রীড়া কম্পাস” (Athletics Compass) নামে প্রশিক্ষনের সিলেট বিভাগের সুনামগঞ্জ সদরে ২য় প্রকল্পের পিই টিচার প্রশিক্ষণ পরবর্তী আজ কিডস অ্যাথলেটিক্স প্রতিযোগিতার সমাপ্তি হলো। ",
      date: "December 23, 2025",
      category: "News",
      gradient: "from-blue-500 to-blue-400",
      emoji: "📢",
      image: latest_news_4
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="main_container mx-auto px-4 sm:px-6 lg:px-4 xl:px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#00916e] font-semibold text-sm uppercase tracking-wider mb-2">Stay Updated</div>
          {/* <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest News & Announcements</h2> */}
          <DynamicHeading title="Latest News & Announcements" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get the latest updates on events, achievements, and federation activities
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Placeholder */}
              {/* <div
                className={`h-48 bg-gradient-to-br ${news.gradient} flex items-center justify-center text-white text-2xl font-semibold`}
              >
                {news.emoji} News Image
              </div> */}

              <div className="">
                <Image src={news.image} width={500} height={500} alt="latest-news" className="h-64"/>
              </div>



              {/* Content */}
              <div className="p-6  h-[280px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between space-x-4 text-sm text-gray-500 mb-3">
                    <span>📅 {news.date}</span>
                    <div className="px-2 py-0.5 border border-gray-200 rounded-full">
                      <span>🏃 {news.category}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">{news.title}</h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{news.excerpt}</p>
                </div>

                <button className="text-[#00916e] font-semibold flex items-center space-x-1 hover:space-x-2 transition-all duration-200 cursor-pointer">
                  <span>Read More</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
