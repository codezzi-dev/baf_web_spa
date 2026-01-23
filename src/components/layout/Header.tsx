// src/components/layout/Header.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowLeft, User, Home, ChevronRight } from "lucide-react";
import logo from "@/assets/images/logo_title.png";
import Image from "next/image";
import { TiMinus } from "react-icons/ti";
import { Drawer } from "antd";
import { MegamenuContent, MegamenuContentItem, MegamenuLink, MegamenuSection, MenuItem, NavigationLevel } from "@/types/navigation";
import { useLocale, useTranslations } from "next-intl";
export default function Header() {
  // Translations
  const tNav = useTranslations("nav");
  const tFederation = useTranslations("federation");
  const tAthletes = useTranslations("athletes");
  const tEvents = useTranslations("events");
  const tResources = useTranslations("resources");
  const tCoachesAndJudges = useTranslations("coachesAndjudges");

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [activeMegamenu, setActiveMegamenu] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);

  // next-intl hooks
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Navigation state for mobile
  const [navigationLevel, setNavigationLevel] = useState<NavigationLevel>("main");
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<MegamenuSection | null>(null);

  const menus: MenuItem[] = [
    { name: tNav("the_federation"), href: "/gallery", hasMegamenu: true, key: "The Federation" },
    { name: tNav("athletes"), href: "/athletes", hasMegamenu: true, key: "Athletes Hub" },
    { name: tNav("coaches_and_judges"), href: "/athletes", hasMegamenu: true, key: "Coaches And Judges" },
    { name: tNav("events"), href: "/events", hasMegamenu: true, key: "Events Hub" },
    { name: tNav("resources_media"), href: "/news", hasMegamenu: true, key: "Resources & Media" },
  ];

  // Megamenu content with translations
  const megamenuContent: MegamenuContent = {
    ["Athletes Hub"]: {
      sections: [
        {
          title: tAthletes("portal"),
          links: [
            { name: tAthletes("registration"), href: "/athletes/registration" },
          ],
        },
        {
          title: tAthletes("categories"),
          links: [
            { name: tAthletes("allAthletes"), href: "/athletes" },
          ],
        },
        {
          title: tAthletes("rankings"),
          links: [
            { name: tAthletes("nationalRankings"), href: "/ranking" },
            { name: tAthletes("records"), href: "/record" },
            { name: tAthletes("hallOfFame"), href: "/hall-of-fame" },
          ],
        },
      ],
    },
    ["Coaches And Judges"]: {
      sections: [
        {
          title: tCoachesAndJudges("coach-title"),
          links: [
            { name: tCoachesAndJudges("bangladesh-coach-association"), href: "/athletes/registration" },
            { name: tCoachesAndJudges("qualified-coaches"), href: "/athletes/registration" },
          ],
        },
        {
          title: tCoachesAndJudges("judge-title"),
          links: [
            { name: tCoachesAndJudges("bangladesh-judge-association"), href: "/athletes/registration" },
            { name: tCoachesAndJudges("qualified-judges"), href: "/athletes/registration" },
          ],
        },
      ],
    },
    ["Events Hub"]: {
      sections: [
        {
          title: tEvents("competitions"),
          links: [
            { name: tEvents("domestic"), href: "/events/domestic" },
            { name: tEvents("international"), href: "/events/international" },
          ],
        },
        {
          title: tEvents("athletes_training"),
          links: [
            { name: tEvents("junior_camp"), href: "/junior_camp" },
            { name: tEvents("coaches_training"), href: "/coaches-training" },
            { name: tEvents("camp_for_international_event"), href: "/camp-for-international-event" },
          ],
        },
        {
          title: tEvents("coaches-and-judges"),
          links: [
            { name: tEvents("coaches_training"), href: "/junior_camp" },
            { name: tEvents("coaches_refreshers"), href: "/coaches-training" },
            { name: tEvents("judges_training"), href: "/camp-for-international-event" },
            { name: tEvents("judges_refreshers"), href: "/camp-for-international-event" },
          ],
        },
        {
          title: tEvents("others"),
          links: [
            { name: tEvents("awareness_training"), href: "/awareness-training" },
          ],
        },
      ],
    },
    ["Resources & Media"]: {
      sections: [
        {
          title: tResources("rules_and_policies"),  // "RULES AND POLICIES" / "নিয়মাবলী ও নীতিমালা"
          links: [
            { name: tResources("world_athletics"), href: "https://worldathletics.org/" },  // World Athletics (external link)
            { name: tResources("bangladesh_athletics_federation"), href: "/rules/baf" },    // Bangladesh Athletics Federation (internal rules/policies)
            { name: tResources("report_violations"), href: "/report-violations" },          // Report Violations / লঙ্ঘন রিপোর্ট করুন
          ],
        },
        {
          title: tResources("media_and_publications"),  // "MEDIA & PUBLICATIONS" / "মিডিয়া ও প্রকাশনা"
          links: [
            { name: tResources("photo_and_video_gallery"), href: "/media/gallery" },       // Photo & Video Gallery / ছবি ও ভিডিও গ্যালারি
            { name: tResources("press_releases"), href: "/media/press-releases" },         // Press Releases / প্রেস রিলিজ
            { name: tResources("media_accreditation"), href: "/media/accreditation" },     // Media Accreditation / মিডিয়া অ্যাক্রেডিটেশন
            { name: tResources("archives"), href: "/media/archives" },                     // Archives / আর্কাইভস
          ],
        },
        {
          title: tResources("support_and_faqs"),  // "SUPPORT & FAQs" / "সাপোর্ট ও প্রায়শ্চিত্ত প্রশ্ন"
          links: [
            { name: tResources("frequently_asked_questions"), href: "/faqs" },             // Frequently Asked Questions / প্রায়শ্চিত্ত প্রশ্নসমূহ
          ],
        },
      ],
    },
    ["The Federation"]: {
      sections: [
        {
          title: tFederation("about_baf"),  // "About BAF" / "বিএএফ সম্পর্কে"
          links: [
            { name: tFederation("our_history"), href: "/history" },                    // Our History / আমাদের ইতিহাস
            { name: tFederation("mission_vision"), href: "/mission-and-vision" },      // Mission & Vision / মিশন ও ভিশন
            { name: tFederation("president_message"), href: "/message-from-president" },    // Message from President / সভাপতির বার্তা
            { name: tFederation("organizational_structure"), href: "/organizational-structure" },  // Organizational Structure / সাংগঠনিক কাঠামো
          ],
        },
        {
          title: tFederation("partnerships_sponsors"),  // "Partnerships & Sponsors" / "অংশীদারিত্ব ও স্পনসর"
          links: [
            { name: tFederation("affiliated_organizations"), href: "/affiliated-organizations" },  // Affiliated Organizations / সহযোগী সংগঠনসমূহ
            { name: tFederation("our_partners_sponsors"), href: "/our-sponsors" },                 // Our Partners & Sponsors / আমাদের অংশীদার ও স্পনসর
            { name: tFederation("become_sponsor"), href: "/our-sponsors/apply-for-sponsorship" },  // Become a Sponsor / স্পনসর হোন
            { name: tFederation("partnership_programs"), href: "/partnership-program" },           // Partnership Programs / অংশীদারিত্ব প্রোগ্রাম
          ],
        },
        {
          title: tFederation("global_hierarchy"),    // Global Hierarchy / গ্লোবাল হায়ারার্কি (as a section or intro page)
          links: [
            { name: tFederation("world_athletics"), href: "/global/world-athletics" },        // World Athletics
            { name: tFederation("asian_athletics_association"), href: "/global/asian-athletics" },  // Asian Athletics Association
            { name: tFederation("south_asian_athletics_federation"), href: "/global/south-asian" }, // South Asian Athletics Federation
            { name: tFederation("international_olympic_committee"), href: "/global/ioc" },    // International Olympic Committee
          ],
        },
        {
          title: tFederation("governance_contact"),  // "Governance & Contact" / "গভর্ন্যান্স ও যোগাযোগ"
          links: [
            { name: tFederation("contact_information_baf"), href: "/contact" },               // Contact Information BAF / যোগাযোগের তথ্য
            { name: tFederation("safeguarding_officer_baf"), href: "/safeguarding-officer" },         // Safeguarding Officer (SO-BAF)
          ],
        },
      ],
    },
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setShow(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Language change handler - switches URL locale
  const handleLanguageChange = (newLocale: string) => {
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsLangOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    setNavigationLevel("main");
    setSelectedMenu(null);
    setSelectedSection(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setNavigationLevel("main");
      setSelectedMenu(null);
      setSelectedSection(null);
    }, 300);
  };

  const handleMainMenuClick = (menu: MenuItem) => {
    if (menu.hasMegamenu) {
      setSelectedMenu(menu.name);
      setNavigationLevel("sections");
    } else {
      router.push(menu.href);
      closeMenu();
    }
  };

  const handleSectionClick = (section: MegamenuSection) => {
    setSelectedSection(section);
    setNavigationLevel("links");
  };

  const handleBackToMain = () => {
    setNavigationLevel("main");
    setSelectedMenu(null);
    setSelectedSection(null);
  };

  const handleBackToSections = () => {
    setNavigationLevel("sections");
    setSelectedSection(null);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-9 z-50 ${show ? "translate-y-[-39px] duration-500 ease-in mt-3" : "-translate-y-0 duration-500 ease-in shadow-none"
        } `}
    >
      <div className="px-6">
        <div className="main_container bg-white rounded-md relative shadow-sm">
          <div className="flex items-center justify-between px-5 py-0">
            {/* Logo */}
            <Link href="/">
              <Image
                src={logo}
                className="w-auto md:min-w-32 lg:w-48 py-3"
                width={200}
                height={400}
                alt="logo-title"
              />
            </Link>

            {/* Right side container */}
            <div className="flex items-center">
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center w-full text-black">
                {menus.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasMegamenu && item.key) {
                        setActiveMegamenu(item.key);
                      }
                    }}
                  >
                    {item.hasMegamenu ? (
                      <button className="whitespace-nowrap cursor-pointer px-6 py-2 transition-all duration-100 ease-in-out text-[#444444] hover:text-emerald-600 hover:bg-emerald-50 font-semibold text-sm md:text-base uppercase flex items-center gap-1">
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-000 ${activeMegamenu === item.key ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="px-6 py-2 transition-all duration-300 ease-in-out text-[#444444] hover:text-emerald-600 hover:bg-emerald-50 font-semibold text-sm md:text-base uppercase"
                        onMouseEnter={() => setActiveMegamenu(null)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Buttons + Language */}
              <div className="flex items-center gap-4 pl-7">
                {/* Login Button */}
                <button className="bg-gradient-to-r from-[#C1272D] to-[#A01F25] hover:bg-red-700 cursor-pointer text-white px-5 py-2 md:py-[10px] rounded-md text-sm font-medium transition-colors">
                  {tNav("login")}
                </button>

                {/* Language Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangOpen((prev) => !prev)}
                    className="cursor-pointer relative flex items-center justify-center w-8 h-8 p-0.5 rounded-full border border-gray-200 bg-white hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-sm overflow-hidden"
                  >
                    <Image
                      src={locale === "bn" ? "/bd-flag.webp" : "/usa_flag.png"}
                      alt={locale === "bn" ? "Bangladesh Flag" : "US Flag"}
                      height={60}
                      width={60}
                      className="object-cover h-full w-full"
                    />
                  </button>

                  {isLangOpen && (
                    <div
                      className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-fadeIn"
                      onMouseLeave={() => setIsLangOpen(false)}
                    >
                      <button
                        onClick={() => handleLanguageChange("bn")}
                        className={`flex items-center w-full gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${locale === "bn" ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        <Image src="https://flagcdn.com/w40/bd.png" alt="Bangladesh Flag" width={20} height={14} />
                        <span>বাংলা</span>
                      </button>
                      <button
                        onClick={() => handleLanguageChange("en")}
                        className={`flex items-center w-full gap-3 px-4 py-2.5 text-sm transition-colors duration-200 ${locale === "en" ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        <Image src="https://flagcdn.com/w40/us.png" alt="US Flag" width={20} height={14} />
                        <span>English</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded bg-black text-white lg:hidden"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Megamenu */}
          {activeMegamenu && megamenuContent[activeMegamenu] && (
            <div
              className="absolute left-0 right-0 top-full z-40"
              onMouseEnter={() => setActiveMegamenu(activeMegamenu)}
              onMouseLeave={() => setActiveMegamenu(null)}
            >
              <div className="pt-0">
                <div className="bg-white shadow-xl border-t-2 border-emerald-600 rounded-b-xs p-8">
                  <div className="grid grid-cols-4 gap-20">
                    {megamenuContent[activeMegamenu]?.sections?.map((section: MegamenuSection, idx: number) => (
                      <div key={idx}>
                        <h3 className="font-bold text-sm uppercase text-gray-800 mb-4 border-b pb-2 whitespace-nowrap">
                          {section.title}
                        </h3>
                        {section.links ? (
                          <ul className="space-y-2">
                            {section.links.map((link: MegamenuLink, linkIdx: number) => (
                              <li key={linkIdx} onClick={() => setActiveMegamenu(null)}>
                                <Link
                                  href={link.href}
                                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"
                                >
                                  <TiMinus size={10} className="text-emerald-600" />
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          section.content
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu - same as before, just update language buttons */}
        {isMenuOpen && (
          <Drawer title="" closable onClose={onClose} open={isMenuOpen} width={250} styles={{ body: { padding: 0 } }}>
            {/* ... rest of drawer content ... */}

            {/* Update Language buttons in mobile drawer */}
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguageChange("bn")}
                className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all text-sm font-medium ${locale === "bn"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                🇧🇩 বাংলা
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex-1 py-2 px-3 rounded-lg border-2 transition-all text-sm font-medium ${locale === "en"
                  ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                🇺🇸 English
              </button>
            </div>
            {/* ... rest of drawer ... */}
          </Drawer>
        )}
      </div>
    </header>
  );
}