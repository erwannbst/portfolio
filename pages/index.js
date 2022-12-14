import clsx from "clsx";
import Link from "next/link";
import {
  MapPin,
  ArrowCircleRight,
  Camera,
  Star,
  ArrowSquareOut,
} from "phosphor-react";
import { motion } from 'framer-motion'

// const TIMELINE = [
//   {
//     date: 'Dec 01, 2022',
//     title: 'Joined Hive.one',
//     description: 'Joined Hive team as frontend engineer to build a new way to explore Twitter',
//     link: 'https://twitter.com/thelifeofrishi/status/1598692245401501696'
//   },
//   {
//     date: 'Nov 12, 2022',
//     title: 'Pika crossed $1K in monthly recurring revenue',
//     description: '9 months into building Pika, it is my first side-project to cross such big milestone'
//   },
//   {
//     date: 'Jan 02, 2022',
//     title: 'Launched Pika.style as an open-source project',
//     description: 'Built this small tool to save my time designing better screenshots'
//   },
// ]

// const IMAGES = [
//   {
//     src: "/images/pages/rishi-goa-yellow.jpg",
//     place: "Goa",
//     className: "rotate-[-2deg]",
//   },
//   {
//     src: "/images/pages/rishi-holi-rishikesh.JPG",
//     place: "Rishikesh",
//     className: "rotate-[2deg]",
//   },
//   {
//     src: "/images/pages/rishi-triund.JPG",
//     place: "Triund",
//     className: "rotate-[-2deg]",
//   },
//   {
//     src: "/images/pages/rishi-goa.JPG",
//     place: "Goa",
//     className: "rotate-[2deg]",
//   }
// ];

const ContentWrapper = ({ children, className, width }) => (
  <div
    style={{ maxWidth: `${width || '100%'}`}}
    className={clsx(
      "w-full px-5 mx-auto relative",
      className
    )}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.2 },
        }}
      >
        <ContentWrapper
          width="520px"
          className="mx-auto relative grid grid-cols-1 gap-10 mt-10 md:mt-20"
        >
          <div className="">
            <h2 className="mb-6 text-3xl font-black md:text-4xl dark:text-white">
              <span className="text-gray-400 dark:text-gray-400">
                Hi ????, I'm{" "}
              </span>
              Erwann Bestard
            </h2>
            <div className="post-content">
              <ul className="!mb-0">
                <li>Software engineer, electronics</li>
                <li>
                  Worked at{" "}
                  <Link href="https://www.thalesgroup.com/fr" target="_blank">
                    Thales{" "}
                  </Link>
                  and on some{" "}
                  <Link href="/projects/dronespot">
                    freelance projects
                  </Link>
                </li>
                <li>Currently enjoying working at{" "}
                  <Link
                    href="https://dashdoc.com/"
                    target="_blank"
                  >
                    Dashdoc
                  </Link>
                </li>
                <li>
                  Looking for an internship abroad !
                </li>
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.3 },
        }}
      >
        <ContentWrapper width="520px" className="mt-10 dark:border-gray-800">
          <h2 className="font-bold text-lg flex items-center">
            <Camera size={20} className="mr-2 opacity-40" />
            Some photos from recent trips
          </h2>
        </ContentWrapper>

        <ContentWrapper className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-6 md:my-12 justify-center gap-5 md:gap-10 !max-w-[960px]">
          {IMAGES?.map((item) => (
            <div
              key={item.src}
              className={clsx(
                item?.className,
                "relative border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700"
              )}
            >
              <img
                src={item?.src}
                alt={item?.place}
                className="rounded-[9px]"
                loading="lazy"
              />
              <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white/90 backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                <MapPin size={14} className="mr-1" />
                {item?.place}
              </div>
            </div>
          ))}
        </ContentWrapper>
      </motion.div> */}

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.4 },
        }}
      >
        <ContentWrapper width="520px" className="mt-16 mb-4">
          <h2 className="font-bold text-lg flex items-center">
            <Star size={20} className="mr-2 opacity-40" />
            Connecting dots backwards
          </h2>
        </ContentWrapper>

        <ContentWrapper
          width="520px"
          className="border dark:border-gray-800 pt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
        >
          <div className="relative pl-8">
            <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-800 left-[10px] top-[5px] absolute"></div>
            {TIMELINE?.map((item, index) => (
              <div key={item.title + index} className="mb-10 relative">
                <div className="w-3 h-3 rounded-full absolute left-[-30px] top-[16px]">
                  <ArrowCircleRight
                    size={18}
                    className="bg-white text-gray-400 dark:text-gray-400 dark:bg-gray-900 rounded-full"
                  />
                </div>
                <p className="opacity-40 text-xs">{item.date}</p>

                <h3 className="leading-tight mb-1 font-semibold text-sm md:text-base inline-block">
                  <span className="">{item.title}</span>
                  {item?.link ? (
                    <Link href={item.link} target="_blank">
                      <span className="inline-block ml-1 opacity-80">
                        <ArrowSquareOut size={12} />
                      </span>
                    </Link>
                  ) : (
                    ""
                  )}
                </h3>

                <p className="opacity-60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </motion.div> */}
    </div>
  );
}
