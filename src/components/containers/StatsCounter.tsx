// "use client";

// import React, { useEffect, useRef, useState } from "react";

// const StatsCounter = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   const [projects, setProjects] = useState(0);
//   const [clients, setClients] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//           animateCount(10, setProjects, 1200);
//           animateCount(20, setClients, 1200);
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, [hasAnimated]);

//   const animateCount = (
//     target: number,
//     setValue: React.Dispatch<React.SetStateAction<number>>,
//     duration: number
//   ) => {
//     let start = 0;
//     const increment = target / (duration / 16);

//     const counter = () => {
//       start += increment;
//       if (start < target) {
//         setValue(Math.ceil(start));
//         requestAnimationFrame(counter);
//       } else {
//         setValue(target);
//       }
//     };
//     counter();
//   };

//   return (
//     <section
//       ref={sectionRef}
//       style={{
//         backgroundColor: "#000",
//         padding: "80px 0",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#111",
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "50px 40px",
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr 1fr",
//             gap: "40px",
//             alignItems: "center",
//           }}
//         >
//           {/* LEFT TEXT */}
//           <div>
//             <h3
//               style={{
//                 color: "#fff",
//                 fontSize: "26px",
//                 lineHeight: "1.4",
//                 fontWeight: 600,
//               }}
//             >
//               Preferred by Professionals,<br />
//               Loved by Clients<br />
             
//             </h3>
//           </div>

//           {/* PROJECTS */}
//           <div
//             style={{
//               paddingLeft: "40px",
//               borderLeft: "1px solid #333",
//               textAlign: "center",
//             }}
//           >
//             <div
//               style={{
//                 color: "#ff4d5a",
//                  fontSize: "52px",
//                 fontWeight: 700,
//               }}
//             >
//               {projects}+
//             </div>
//             <p style={{ color: "#aaa", marginTop: "30px" , fontSize: "18px",      // ✅ bigger label
//       fontWeight: 500,}}>
//               Projects Done
//             </p>
//           </div>

//           {/* CLIENTS */}
//           <div
//             style={{
//               paddingLeft: "40px",
//               borderLeft: "1px solid #333",textAlign: "center", 
//             }}
//           >
//             <div
//               style={{
//                 color: "#ff4d5a",
//                 fontSize: "52px", 
//                 fontWeight: 700,
//               }}
//             >
//               {clients}+
//             </div>
//             <p style={{ color: "#aaa", marginTop: "30px",fontSize: "18px",      // ✅ bigger label
//       fontWeight: 500,}}>
//               Happy Clients
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsCounter;
