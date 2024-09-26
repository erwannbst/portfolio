import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowCircleRight,
  Camera,
  Star,
  ArrowSquareOut,
  GraduationCap,
} from "phosphor-react";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    date: "Apr 2017 -> Now",
    title: "DroneSpot - Mobile App Owner",
    description:
      "Developed and launched a mobile (and web) app for drone pilots to discover and share flying spots. React Native, Supabase, Expo, Next.js",
    link: "https://dronespot.fr/",
    highlight: true,
  },
  {
    date: "Feb 2022 -> Now",
    title: "Software engineer at Dashdoc",
    description:
      "Development of a web and mobile app for truckers. React Native, CircleCI, Python",
    link: "https://dashdoc.com/",
    highlight: true,
  },
  {
    date: "2020 -> 2022",
    title: "Volunteer firefighter",
    description:
      "Mostly interventions with a crew of 3 rescuers in ambulance. Two years of incredible experience before I had to make a choice with my studies.",
  },
  {
    date: "Apr 2021 -> Feb 2022",
    title: "Software engineering internship at Thales",
    description:
      "Low-level development on ARM processor in a cybersecurity lab. Web development with React.js and TypeScript",
  },
  {
    date: "2020 -> 2022",
    title: "Some freelance projects",
    description:
      "Created FullWeek and DroneSpot you can check out on this website. Working on different web apps and mobile apps",
  },
  {
    date: "June 2020",
    title: "Internship in a 3D printing startup",
    description:
      "I worked at Dagoma, a 3D printing startup in Lille. I discovered the world of 3D printing and the technical challenges of this industry",
    link: "https://www.dagoma.fr/",
  },
];

const FORMATION = [
  {
    date: "2021 - 2024",
    title: "Engineering School Master",
    description:
      "Software engineering, computer science, statistics, cloud computing, machine learning, ...",
    place: "IMT Atlantique (Ex Ecole des Mines), Nantes",
    highlight: true,
  },
  {
    date: "2019 - 2021",
    title: "DUT GEII (Génie électrique et informatique industrielle)",
    description:
      "Low-level development, microcontroller, ARM processor, PCB design, analog electronics, C, C++, Python, Arduino, Raspberry Pi, ...",
    place: "Angers University",
  },
  {
    date: "2019",
    title: "Baccalauréat Scientifique",
    description: "Lycée Naval. Spécialité Sciences de l'ingénieur",
    place: "Lycée Naval, Brest",
  },
];

const IMAGES = [
  {
    src: "/images/work/show/imtoundra-icon.jpg",
    place: "Toundra x IMT Atlantique",
    className: "rotate-[2deg]",
    project: "imtoundra",
  },
  {
    src: "/images/work/show/mistral-icon.png",
    place: "Mistral Chat",
    className: "rotate-[-2deg]",
    project: "mistral",
  },
  {
    src: "/images/work/show/dronespot-landscape.png",
    place: "DroneSpot",
    className: "rotate-[2deg]",
    project: "dronespot",
  },
  {
    src: "/images/work/show/surfreport_side.jpg",
    place: "Surf report",
    className: "rotate-[-2deg]",
    project: "surfreport",
  },
];

const ContentWrapper = ({ children, className, width }) => (
  <div
    style={{ maxWidth: `${width || "100%"}` }}
    className={clsx("w-full px-5 mx-auto relative", className)}
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
              <span className="text-gray-400 dark:text-gray-400">Hi 👋, I'm </span>
              Erwann Bestard
            </h2>
            <div className="post-content">
              <ul className="!mb-0 list-none pl-0">
                <li className="flex items-start mb-2">
                  <span className="mr-2">💻</span>
                  <span>
                    <strong>Passionate software engineer</strong> with a focus on{" "}
                    <strong>web technologies</strong>
                  </span>
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2">🚀</span>
                  <span>
                    Developed various{" "}
                    <Link href="/projects">
                      <strong>personal and freelance projects</strong>
                    </Link>
                    , including{" "}
                    <Link href="/projects/dronespot">
                      <strong>DroneSpot</strong>
                    </Link>
                  </span>
                </li>
                <li className="flex items-start mb-2">
                  <span className="mr-2">🚛</span>
                  <span>
                    Currently enjoying working at{" "}
                    <Link href="https://dashdoc.com/" target="_blank">
                      <strong>Dashdoc</strong>
                    </Link>
                    , contributing to <strong>digitalizing the trucking industry</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🤝</span>
                  <span>
                    Open to <strong>exciting opportunities</strong> and{" "}
                    <strong>collaborations</strong>!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.35, delay: 0.4 },
        }}
      >
        <ContentWrapper width="520px" className="mt-16 mb-4">
          <h2 className="font-bold text-lg flex items-center">
            <GraduationCap size={20} className="mr-2 opacity-40" />
            Education
          </h2>
        </ContentWrapper>

        <ContentWrapper
          width="520px"
          className="border dark:border-gray-800 pt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
        >
          <div className="relative pl-8">
            <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-800 left-[10px] top-[5px] absolute"></div>
            {FORMATION?.map((item, index) => (
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
                <p className="opacity-60 text-sm mt-2 text-end">{item.place}</p>
              </div>
            ))}
          </div>
        </ContentWrapper>
      </motion.div>

      <motion.div
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
            Work experience
          </h2>
        </ContentWrapper>

        <ContentWrapper
          width="520px"
          className="border dark:border-gray-800 pt-6 bg-gray-50 md:rounded-lg dark:bg-gray-900"
        >
          <div className="relative pl-8">
            <div className="h-full w-[1px] bg-gray-200 dark:bg-gray-800 left-[10px] top-[5px] absolute"></div>
            {TIMELINE?.map((item, index) => (
              <div
                key={item.title + index}
                className={`mb-10 relative ${
                  item.highlight ? "bg-blue-100 dark:bg-blue-700/10 p-4 rounded-lg" : ""
                }`}
              >
                <div className="w-3 h-3 rounded-full absolute left-[-30px] top-[16px]">
                  <ArrowCircleRight
                    size={18}
                    className="bg-white text-gray-400 dark:text-gray-400 dark:bg-gray-900 rounded-full"
                  />
                </div>
                <p className="opacity-40 text-xs">{item.date}</p>

                <h3 className="leading-tight mb-1 font-semibold text-sm md:text-base inline-block">
                  <span className={item.highlight ? "text-blue-600 dark:text-blue-300" : ""}>
                    {item.title}
                  </span>
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
      </motion.div>
      <motion.div
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
            Some side projects you can check out
          </h2>
        </ContentWrapper>

        <ContentWrapper className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-6 md:my-12 justify-center gap-5 md:gap-10 !max-w-[960px]">
          {IMAGES?.map((item) => (
            <a key={item.src} href={`/projects/${item.project}`}>
              <div
                key={item.src}
                className={clsx(
                  item?.className,
                  "relative border p-[4px] shadow-[0_0_32px_rgba(0,0,0,0.1)] rounded-[12px] dark:border-gray-700 h-64"
                )}
              >
                <Image
                  src={item?.src}
                  alt={item?.place}
                  className="rounded-[9px] object-cover"
                  loading="lazy"
                  fill
                />
                <div className="font-mono text-xs absolute bottom-[4%] left-[4%] inline-flex bg-white/90 backdrop-blur rounded-[10px] px-2 py-px items-center dark:text-black">
                  <MapPin size={14} className="mr-1" />
                  {item?.place}
                </div>
              </div>
            </a>
          ))}
        </ContentWrapper>
      </motion.div>
    </div>
  );
}
