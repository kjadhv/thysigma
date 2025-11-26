// import React from "react";
// import Image from "next/image";
// import star from "public/images/testimonial/star.png";

// const HomeTwoCta = () => {
//   // Typed submit handler
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.target as HTMLFormElement;
//     const email = (form.subscribeNews as HTMLInputElement).value;

//     // Send email to API
//     const res = await fetch("/api/subscribe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });

//     const data = await res.json();
//     alert(data.message);

//     form.reset(); // clear input
//   };

//   return (
//     <section className="cta-s">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div
//               className="cta__wrapper"
//               data-background="assets/images/cta-bg.png"
//             >
//               <div className="row justify-content-center">
//                 <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
//                   <div className="section__header text-center">
//                     <h2 className="title">
//                       Stay Ahead With Our Top Media Services
//                     </h2>
//                   </div>

//                   <div className="footer__single-form">
//                     {/* Updated form with TypeScript handler */}
//                     <form onSubmit={handleSubmit}>
//                       <div className="input-email">
//                         <input
//                           type="email"
//                           name="subscribeNews"
//                           id="subscribeNews"
//                           placeholder="Enter Your Email"
//                           required
//                         />
//                         <button type="submit" className="subscribe">
//                           <i className="fa-sharp fa-solid fa-paper-plane"></i>
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <Image src={star} alt="Image" className="star" />
//               <Image src={star} alt="Image" className="star-two" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeTwoCta;
