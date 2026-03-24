import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
const InstagramEmbed = dynamic(() => import("@/components/InstagramEmbed"), {
  ssr: false,
});
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";

// IMAGES
import socialm from "public/images/photos/7.jpeg";
import cameraman from "public/images/photos/11.jpeg";
import editing from "public/images/photos/12.jpeg";
import process from "public/images/photos/17.jpeg";
import like from "public/images/icff/icff1.png";
import grp from "public/images/photos/16.jpeg";
import blog from "public/images/icff/ihff5.jpeg";

type VideoItem = {
  id: string;
  desc: string;
  hashtags: string;
  title: string; // ✅ optional
};

type PortfolioItem = {
  slug: string;
  tag: string;
  img: any;
  title: string;
  videos: VideoItem[];
  images?: string[];
};
// ✅ SYNCED WITH PortfolioMain.tsx
const portfolioData: PortfolioItem[] = [
  {
    slug: "viren",
    title: "VIREN | MEMORIAL CUP 2025",
    tag: "Videography",
    img: socialm,
    videos: [
    {
      id: "Pi92_fmvEvA",
      title: "Viren Memorial Cup 2025 | Day 1 Full Highlights | Best Moments & Match Coverage",
desc: "Watch the complete Day 1 coverage of the Viren Memorial Cup 2025 — one of the most anticipated sporting tournaments of the year. Named in honor of a true champion whose legacy continues to inspire generations of athletes, the Viren Memorial Cup brings together competitors from across the region to battle it out at the highest level. Day 1 featured electrifying performances, tactical brilliance, and moments of pure sporting excellence that set the tone for the entire tournament. Whether you are a die-hard fan or discovering this event for the first time, this full coverage gives you the best seat in the house. Our professional videography team captured every crucial match, every standout performance, and every emotional moment across the full day of competition. From the opening ceremony to the final contest of the evening, Day 1 delivered everything fans had been hoping for and more. The level of competition on display was exceptional, with athletes pushing each other to their absolute limits in every single encounter. Watch now to relive the passion, the pride, and the sporting excellence that made Day 1 of the Viren Memorial Cup 2025 truly unforgettable. Produced by Thy Sigma — Mumbai's leading sports videography and live streaming production company. Subscribe for more professional event coverage, live streams, tournament highlights, and sports videography from across India.",
hashtags: "#VirenMemorialCup2025 #Day1Highlights #SportsTournament #MemorialCup2025 #SportsVideography #ThySigma #TournamentHighlights #IndianSports2025 #SportsIndia #EventCoverage #FullHighlights #LiveSports #MumbaiSports #SportsProduction #MatchHighlights"
    },
    {
      id: "QWukc8vTlJQ",
     title: "Viren Memorial Cup 2025 | Day 2 Full Highlights | Finals & Championship Moments",
desc: "The Viren Memorial Cup 2025 reaches its defining moments in Day 2 — where champions are made and legacies are written. If Day 1 set the stage, Day 2 delivered everything the tournament had been building toward. Higher stakes, sharper competition, and performances that will be remembered long after the final whistle. As the tournament moved into its decisive phases, every match carried greater weight and the athletes responded with some of the most compelling sport seen at this event in years. Our professional videography team captured every angle, every celebration, and every decisive moment with full production quality. Day 2 saw standout performers emerge on a bigger stage, leaving lasting impressions on everyone in attendance. The atmosphere inside the venue was electric from the first contest to the last, with supporters and competitors alike giving everything they had until the very end. The Viren Memorial Cup 2025 Day 2 is a fitting tribute to the legacy this tournament carries — a reminder of why sport has the power to move, inspire, and unite people from all walks of life. Produced by Thy Sigma — Mumbai's leading sports videography and live streaming production company. Subscribe for more professional event coverage, live streams, tournament highlights, and sports videography from across India.",
hashtags: "#VirenMemorialCup2025 #Day2Highlights #SportsTournament #MemorialCupFinals #SportsVideography #ThySigma #TournamentHighlights #IndianSports2025 #ChampionshipMoments #FullHighlights #LiveSports #MumbaiSports #SportsProduction #FinalDay #MatchHighlights"  }],
  },
  {
    slug: "fight club",
    title: "FIGHT CLUB | WAR OF THE CLUBS",
    tag: "Live Streaming",
    img: cameraman,
    videos: [
      {
        id: "csz4phDCppQ",
       title: "Fight Club | War of the Clubs 2025 Part 1 | Live MMA & Combat Sports Event",
desc: "War of the Clubs is not your average fight night — and Part 1 proves it from the very first bell. This is where months of rivalry, training, and determination finally get settled inside the cage. Fight Club brings together the best fighters from competing clubs across the region for an all-out battle where honor, reputation, and bragging rights are on the line. Part 1 covers the explosive opening bouts of the evening — sharp striking, intelligent grappling, and the kind of composed aggression that only comes from serious training and real competitive hunger. Our professional live streaming team delivered full real-time coverage with broadcast-quality production, putting fans ringside no matter where they were watching from. New fighters announced themselves to the world, experienced veterans showed their class, and every bout added another chapter to one of the most exciting combat sports events in the region. If you follow MMA, kickboxing, or any form of combat sports, Fight Club War of the Clubs is unmissable. Produced by Thy Sigma — Mumbai's leading sports live streaming and event production company. Subscribe for more combat sports coverage, live streams, and fight night highlights from across India.",
hashtags: "#FightClub2025 #WarOfTheClubs #MMAIndia #CombatSports #LiveMMA #FightNight #MartialArts #KnockoutHighlights #ThySigma #LiveStreaming #SportsVideography #IndianMMA #FightHighlights #CageFighting #MumbaiMMA" },
      {
        id: "5qw7tzLSiAg",
       title: "Fight Club | War of the Clubs 2025 Part 2 | Knockouts Finals & Best Fights",
desc: "Part 2 of Fight Club War of the Clubs 2025 took the intensity to a completely different level — and delivered the knockouts, comebacks, and defining moments the entire night had been building toward. With the stakes at their highest and the crowd at its loudest, the fighters inside the cage gave everything they had in front of a roaring audience. This is combat sports at its most raw and most exciting — no filters, no breaks, just pure heart, grit, and glory. Our live streaming team captured every second in real time, ensuring fans worldwide could witness every highlight as it happened. From grudge matches to surprise upsets, Part 2 had moments that will be replayed and talked about for weeks. The club rivalry format raises the stakes beyond a standard fight card — every fighter carries the pride of their team, and that pressure brings out performances that standard events simply cannot replicate. If you missed it live, watch the full replay now and experience every unforgettable moment of Fight Club War of the Clubs 2025 Part 2. Produced by Thy Sigma — Mumbai's leading combat sports live streaming and production company. Subscribe for more fight nights, live MMA coverage, and combat sports highlights.",
hashtags: "#FightClub2025 #WarOfTheClubs #MMAKnockouts #CombatSportsFinals #LiveMMA #FightNight #BestFights #ThySigma #LiveStreaming #SportsVideography #IndianMMA #KnockoutHighlights #CageFighting #MumbaiMMA #FightClubPart2" }
    ],
  },
  {
    slug: "amain_event",
    title: "ALPHA MAIN EVENT | MMA 2025",
    tag: "Live Streaming",
    img: editing,
    videos: [
      {
        id: "GxVyx4TEgyc",
       title: "International Combat Sports Championship 2025 | Alpha Main Event MMA | Full Live Coverage",
desc: "The International Combat Sports Championship 2025 is the most anticipated MMA event of the year — and the Alpha Main Event delivered on every single promise. Elite fighters from across the globe came together to compete at the highest level, bringing world-class technique, power, and heart to every round. This is where careers are defined and champions are crowned. Our professional live streaming team provided full broadcast-quality coverage of the entire event, giving fans a real-time ringside experience no matter where they were watching from. The card featured explosive knockouts, tactical ground battles, and submission finishes that had the crowd on its feet throughout the night. Every fighter on the card brought their absolute best, knowing that a performance at an event of this caliber can change the trajectory of an entire career. The International Combat Sports Championship 2025 raised the bar for MMA events in India and showcased the incredible talent that the country's combat sports scene has produced. Whether you are a longtime MMA follower or new to the sport, this event is the perfect showcase of what modern mixed martial arts looks like at its very best. Produced by Thy Sigma — Mumbai's premier combat sports live streaming and event production company. Subscribe for more MMA coverage, fight night highlights, and live sports events.",
hashtags: "#InternationalCombatSportsChampionship2025 #AlphaMainEvent #MMA2025 #LiveMMA #CombatSports #MMAIndia #FightNight #ThySigma #LiveStreaming #SportsVideography #IndianMMA #MMAHighlights #CageFighting #MumbaiMMA #MMAChampionship"  },
      {
        id: "OGKsguUwaqk",
       title: "International Combat Sports Championship 2025 | Grand Finale | Alpha Main Event MMA",
desc: "The grand finale of the International Combat Sports Championship 2025 brought everything to a head — title bouts, championship fights, and the crowning of champions who earned every second of their glory through months of dedication and sacrifice. The closing segment of the Alpha Main Event was nothing short of spectacular, delivering the kind of high-stakes drama that only the biggest events in combat sports can produce. Our live streaming team was there for every moment of the final fights, capturing the full emotional arc of the evening from the tension of the walkouts to the euphoria of the final bell. The athletes who competed in the main event fights left everything inside the cage, giving performances that will stand as benchmarks for Indian MMA in 2025. The crowd energy during the finale was unlike anything else — thousands of fans united by their love of combat sports, witnessing history being made in real time. This is the footage that defines the year in Indian MMA. Watch the complete finale of Alpha Main Event 2025 and be part of the moment that crowned new champions and cemented the International Combat Sports Championship as the premier MMA event in the country. Produced by Thy Sigma — subscribe for more.",
hashtags: "#AlphaMainEventFinale #InternationalCombatSportsChampionship2025 #MMAChampionship #MMAFinale #CombatSports2025 #LiveMMA #ThySigma #IndianMMA #MMAHighlights #FightNight #CageFighting #MumbaiMMA #MMAIndia #LiveStreaming #SportsVideography" }],
  },
  {
    slug: "shiv",
    title: "SHIVMUDRA PRATISHTHAN CHASHAK 2025",
    tag: "Videography",
    img: process,
    videos: [
      {
        id: "Ps5VUiQDCGA",
       title: "Shivmudra Pratishthan Chashak 2025 | Full Event Coverage | Sports Tournament Highlights",
desc: "The Shivmudra Pratishthan Chashak 2025 is more than a sporting event — it is a celebration of culture, community, and competitive excellence that has grown into one of the most respected and beloved tournaments in the region. Rooted in tradition and driven by a passion for sport, this annual Chashak brings together athletes who embody the values of discipline, respect, and relentless dedication. This year's edition was particularly special, attracting a strong field of competitors determined to honor the occasion with their best performances. From the opening matches to the grand finale, every contest was played with intensity and pride. Our videography team was on the ground throughout, documenting every highlight, every emotional moment, and every victory that made the Shivmudra Pratishthan Chashak 2025 a truly landmark edition. We believe events like this deserve to be captured and preserved with the same care and commitment that the athletes bring to their sport. The tournament also served as a platform for young and emerging talent to showcase their abilities alongside experienced competitors, creating a rich and varied program that kept spectators engaged from start to finish. Beyond the competition, the Chashak is a celebration of the community bonds that sport can forge — bringing families, coaches, supporters, and officials together in shared purpose. Watch the complete coverage of the Shivmudra Pratishthan Chashak 2025 and experience the tradition, passion, and sporting excellence that makes this event one of a kind. Produced by Thy Sigma — subscribe for more event coverage and sports videography.",
hashtags: "#ShivmudraPratishthanChashak2025 #Chashak2025 #SportsTournament #IndianSports #SportsVideography #ThySigma #TournamentHighlights #EventCoverage #MumbaiSports #SportsIndia #TraditionalSports #CommunityEvent #SportingExcellence #FullCoverage #ChashakHighlights"    }],
  },
  {
    slug: "icff",
    title: "ICFF",
    tag: "Live Streaming",
    img: like,
    videos: [
      {       
        id: "GxVyx4TEgyc",
       title: "ICFF 2025 | International Combat Fighting Federation | Full Live Stream Coverage",
desc: "The International Combat Fighting Federation event was a landmark moment for combat sports in India and a powerful statement about the future of the sport in this country. Featuring some of the most talented and technically gifted fighters currently competing in the circuit, the ICFF brought together athletes who are actively shaping the direction of combat sports across the region. The matchups were carefully constructed to showcase the very best the sport has to offer — explosive stand-up exchanges, high-level grappling sequences, and the kind of finishing ability that separates elite competitors from the rest. Our live streaming team delivered full real-time coverage of the entire event, ensuring that fans across India and around the world could watch every round unfold with the same excitement as those inside the arena. The production quality was designed to match the caliber of the fighters on the card — because events of this standard deserve nothing less than professional broadcast-quality coverage. The ICFF is more than a fight card. It is a vision for what Indian combat sports can become — organized, professional, and capable of producing fighters who can compete and win on the international stage. Every athlete who stepped inside the cage at this event carried that vision with them, and the performances delivered on the promise. Do not miss a single moment of the International Combat Fighting Federation 2025. Watch the full live stream replay now and witness the future of fighting. Produced by Thy Sigma — Mumbai's premier combat sports live streaming and production company. Subscribe for more.",
hashtags: "#ICFF2025 #InternationalCombatFightingFederation #LiveMMA #CombatSports2025 #MMAIndia #FightNight #ThySigma #LiveStreaming #SportsVideography #IndianMMA #CageFighting #MumbaiMMA #FutureOfFighting #MMAHighlights #CombatSportsIndia"  }],
  },
  {
    slug: "creative-journey",
    title: "SAFETECH AWARDS & CONFERENCE 2025",
    tag: "Photography",
    img: grp,
    videos: [
      {
        id: "4fPtqI8XoJ8",
      title: "National MMA Championship 2025 | IHFF | Full Live Stream | Best Fights & Highlights",
desc: "The National MMA Championship 2025 at IHFF was the biggest combat sports event India has hosted this year — a full-scale professional production that brought together the finest MMA talent from across the country for the ultimate test of skill, fitness, and mental fortitude. This was not just another fight card. This was a defining moment for Indian MMA — proof that the sport has arrived at a level of organization, talent depth, and production quality that can stand alongside international standards. Our team was there from start to finish, streaming every bout live with broadcast-quality coverage that gave fans a true ringside experience no matter where they were watching from. The championship featured fighters who had spent months preparing for this exact moment — sharpening their striking, refining their grappling, and building the kind of conditioning that allows them to perform at full intensity for the full duration of every fight. The matchups delivered on every level, with technical brilliance matched by genuine heart and a refusal to take a backward step. IHFF provided the perfect stage for a tournament of this magnitude, and the atmosphere inside the venue was electric throughout the evening. Every fighter who competed at the National MMA Championship 2025 represented the very best that Indian combat sports has to offer today. For fans of MMA, this is essential viewing — a complete picture of where Indian combat sports stands right now and a preview of where it is headed. Watch the full live stream replay, relive every highlight, and be part of the moment that defined Indian MMA in 2025. Produced by Thy Sigma — subscribe for more.",
hashtags: "#NationalMMAChampionship2025 #IHFF2025 #MMAIndia #LiveMMA #CombatSports2025 #IndianMMA #FightNight #ThySigma #LiveStreaming #SportsVideography #MMAHighlights #CageFighting #MumbaiMMA #NationalChampionship #MMAFinals"  }],
    images:[
        "/images/safetech/safetech1.jpeg",
        "/images/safetech/safetech2.jpeg",
        "/images/safetech/safetech3.jpeg",
        "/images/safetech/safetech4.jpeg",
        "/images/safetech/safetech5.jpeg",
        "/images/safetech/safetech6.jpeg",
        "/images/safetech/safetech7.jpeg",
        "/images/safetech/safetech8.jpeg",
        "/images/safetech/safetech9.jpeg",
        "/images/safetech/safetech10.jpeg",
        "/images/safetech/safetech11.jpeg",
        "/images/safetech/safetech12.jpeg",
        "/images/safetech/safetech13.jpeg",
        "/images/safetech/safetech14.jpeg",
        "/images/safetech/safetech15.jpeg",
        "/images/safetech/safetech16.jpeg",
        "/images/safetech/safetech17.jpeg",
        "/images/safetech/safetech18.jpeg",
        "/images/safetech/safetech19.jpeg",
        "/images/safetech/safetech20.jpeg",
        "/images/safetech/safetech21.jpeg",
        "/images/safetech/safetech22.jpeg",
        "/images/safetech/safetech23.jpeg",
        "/images/safetech/safetech24.jpeg",
        "/images/safetech/safetech25.jpeg",
        "/images/safetech/safetech26.jpeg",
        "/images/safetech/safetech27.jpeg",
        "/images/safetech/safetech28.jpeg",
        "/images/safetech/safetech29.jpeg",
        "/images/safetech/safetech30.jpeg",
        "/images/safetech/safetech31.jpeg",
        "/images/safetech/safetech39.jpeg",
        "/images/safetech/safetech40.jpeg",
        "/images/safetech/safetech41.jpeg",
        "/images/safetech/safetech42.jpeg",
        "/images/safetech/safetech43.jpeg",
        "/images/safetech/safetech44.jpeg",
        "/images/safetech/safetech45.jpeg",
        "/images/safetech/safetech46.jpeg",
        "/images/safetech/safetech47.jpeg",
      ]
  },
  {
    slug: "digital-media-sports-blog",
    title: "THE RISE OF DIGITAL MEDIA IN SPORTS",
    tag: "Editing",
    img: blog,
    videos: [
      {
        id: "GxVyx4TEgyc",
        title:"Live Streaming of National MMA Championship 2025",
        desc: "We are about to witness epic talent from across the globe hash it out....Remember! The cage favours those who fears none. Catch the live action of the best fighters in the most anticipated International combat Sport Championship. Ending  the year with a banggggg...... cheer for your fighter in the live comments section.",
        hashtags: "#NationalMMAChampionship2025 #LiveStreaming #SportsVideography #ThySigma"
      },
      {
        id: "https://www.instagram.com/reel/DS4zKRPkbEi/",
        title:"National Event MMA Championship 2025",
        desc: "A big shoutout to Zandu Fast Relief for supporting our athletes during the National MMA Championship 2025",
        hashtags: "#NationalMMAChampionship2025 #Shoutout #SupportOurAthletes #ThySigma"
      },
      {
        id: "https://www.instagram.com/reel/DRzIEU6EQBa/",
        title:"#MMAFI #RiteBite #MaxProtein",
        desc: "We truly appreciate your support toward India’s combat sports community",
        hashtags: "#MMAFI #RiteBite #MaxProtein"
      },
      {
        id: "https://www.instagram.com/reel/DRycJYQEWBO/",
        title:"#EnergyPartner #NationalMMAChampionship2025 #IHFF2025",
        desc:"A huge shoutout to Campa Energy for powering the athletes of the National MMA Championship 2025 at IHFF!",
        hashtags: "#EnergyPartner #NationalMMAChampionship2025 #IHFF2025"
      },
      {
        id:"https://www.instagram.com/reel/DRn6KdXiHq0/",
        title:"Athlete recovery = Stronger performance",
        desc:"We truly appreciate your partnership and commitment to the combat sports community.",
        hashtags: "#AthleteRecovery #StrongerPerformance #ThySigma"
      }
    ],
  },
];

// ✅ TELL NEXT.JS WHICH PATHS EXIST
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = portfolioData.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false, // Show 404 for unknown slugs
  };
};

// ✅ GET DATA FOR EACH PAGE
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = portfolioData.find((item) => item.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};

const PortfolioDetails = ({ data }: { data: PortfolioItem }) => {
  const router = useRouter();
const [isDesktop, setIsDesktop] = React.useState(false);
const [lightboxOpen, setLightboxOpen] = React.useState(false);
const [activeImgIndex, setActiveImgIndex] = React.useState(0);

const openLightbox = (index: number) => {
  setActiveImgIndex(index);
  setLightboxOpen(true);
};

const closeLightbox = () => setLightboxOpen(false);

const nextImage = () => {
  if (!data.images) return;
  setActiveImgIndex((prev) => (prev + 1) % data.images!.length);
};
// useEffect(() => {
//   const handleKey = (e: KeyboardEvent) => {
//     if (!lightboxOpen) return;

//     if (e.key === "Escape") closeLightbox();
//     if (e.key === "ArrowRight") nextImage();
//     if (e.key === "ArrowLeft") prevImage();
//   };

//   window.addEventListener("keydown", handleKey);
//   return () => window.removeEventListener("keydown", handleKey);
// }, [lightboxOpen, data.images]);

const prevImage = () => {
  if (!data.images) return;
  setActiveImgIndex((prev) =>
    prev === 0 ? data.images!.length - 1 : prev - 1
  );
};

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Layout header={2} footer={5} video={0}>
      {/* BANNER */}
      <CmnBanner title={data.title} navigation="Portfolio Details" />

      {/* CONTENT */}
      <section style={{ background: "#000", padding: "70px 0" }}>
        <div className="container" style={{ color: "#fff" }}>

{/* VIDEOS SECTION */}
{data.videos && data.videos.length > 0 ? (
  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
    {data.videos
      .filter((v) => v && v.id && v.id.trim() !== "")
      .map((video, index) => {
        const isInstagram = video.id.includes("instagram.com");

  return (
    <div key={video.id + index}>

          {/* VIDEO */}
         {isInstagram ? (
  // Instagram size
  <div
    style={{
      width: isDesktop ? "40%" : "100%",
      margin: "0 auto", 
      borderRadius: "24px",
      overflow: "hidden",
      marginBottom: "20px",
      background: "#111",
      padding: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <InstagramEmbed url={video.id} height={isDesktop ? 700 : 520} />


  </div>
) : (
  // YouTube size
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "420px",
      borderRadius: "24px",
      overflow: "hidden",
      marginBottom: "20px",
    }}
  >
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
      title={`${data.title} video ${index + 1}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
    />
  </div>
)}


          {/* TEXT BELOW EACH VIDEO */}
          <span
            style={{
              display: "inline-block",
              marginBottom: "10px",
              background: "rgba(255,255,255,0.9)",
              color: "#000",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {data.tag}
          </span>
<h2 style={{ marginBottom: "12px" }}>
  {video.title || data.title}
</h2>

          <p
            style={{
              maxWidth: "1400px",
              fontSize: "16px",
              lineHeight: 1.7,
              opacity: 0.9,
              textAlign: "justify",
              whiteSpace: "pre-line",
            }}
          >
            {video.desc}
          </p>
         <p style={{ marginTop: "10px" }}>
  {video.hashtags.split(" ").map((tag, i) => (
    <span key={i} style={{ color: "#00aced", marginRight: "8px" }}>
      {tag}
    </span>
  ))}
</p>
        </div>
  );
      })}
  </div>
) : (
  <>
    {/* IMAGE */}
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        borderRadius: "24px",
        overflow: "hidden",
        marginBottom: "30px",
      }}
    >
      <Image
  src={data.img}
  alt={data.title ?? "Portfolio Image"}
  fill
  style={{ objectFit: "cover" }}
  priority
/>
    </div>

    {/* TEXT */}
    <span
      style={{
        display: "inline-block",
        marginBottom: "10px",
        background: "rgba(255,255,255,0.9)",
        color: "#000",
        padding: "6px 14px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: 500,
      }}
    >
      {data.tag}
    </span>

    <h2 style={{ marginBottom: "12px" }}>{data.title}</h2>
    <p
      style={{
        maxWidth: "850px",
        fontSize: "16px",
        lineHeight: 1.7,
        opacity: 0.9,
      }}
    >
      {data.videos?.[0]?.desc || ""}
    </p>
  </>
)}
{/* ✅ EXTRA IMAGES SECTION (Only for Awards page) */}
{data.images && data.images.length > 0 && (
  <div style={{ marginTop: "40px" }}>
    <h3 style={{ marginBottom: "18px" }}>Event Gallery</h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isDesktop ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
        gap: "14px",
      }}
    >
      {data.images.map((imgSrc, i) => (
        <div
          key={imgSrc + i}
          onClick={() => openLightbox(i)}
          style={{
            position: "relative",
            width: "100%",
            height: isDesktop ? "160px" : "140px",
            borderRadius: "18px",
            overflow: "hidden",
            background: "#111",
          }}
        >
          <Image
            src={imgSrc}
            alt={`${data.title} image ${i + 1}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  </div>
)}

{/* ✅ LIGHTBOX MODAL */}
{lightboxOpen && data.images && (
  <div
    onClick={closeLightbox}  // ✅ outside click close
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.85)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    {/* ✅ modal box */}
    <div
      onClick={(e) => e.stopPropagation()} // ✅ prevent closing on image click
      style={{
        position: "relative",
        width: "100%",
        maxWidth: isDesktop ? "1400px" : "95vw",
        height: isDesktop ? "85vh" : "75vh",
        borderRadius: "24px",
        overflow: "hidden",
        background: "#111",
        cursor: "pointer",
      }}
    >
      <Image
        src={data.images[activeImgIndex]}
        alt={`Gallery image ${activeImgIndex + 1}`}
        fill
        style={{ objectFit: "contain" }}
        priority
      />

      {/* ❌ Close Button */}
      <button
        onClick={closeLightbox}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          borderRadius: "999px",
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        ✕ Close
      </button>

      {/* ◀ Prev */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          borderRadius: "999px",
          padding: "10px 14px",
          cursor: "pointer",
        }}
      >
        ◀
      </button>

      {/* ▶ Next */}
      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.65)",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          borderRadius: "999px",
          padding: "10px 14px",
          cursor: "pointer",
        }}
      >
        ▶
      </button>

      {/* ✅ Counter */}
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.65)",
          padding: "6px 12px",
          borderRadius: "999px",
          fontSize: 13,
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {activeImgIndex + 1} / {data.images.length}
      </div>
    </div>
  </div>
)}

          {/* BACK BUTTON */}
          <div style={{ marginTop: "40px" }}>
            <button
              onClick={() => router.push("/portfolio")}
              style={{
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "10px 22px",
                borderRadius: "999px",
                cursor: "pointer",
              }}
            >
              ← Back to Portfolio
            </button>
          </div>
       </div> 
      </section>
    </Layout>
  );
};

export default PortfolioDetails;