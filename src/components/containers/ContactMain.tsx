// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import phone from "public/images/phone.png";
// import mail from "public/images/mail.png";
// import location from "public/images/location.png";
// import time from "public/images/time.png";

// const ContactMain = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <>
//       {/* ===== SECTION 1: TOP 4 CONTACT BOXES ===== */}
//       <section className="section contact-boxes fade-wrapper">
//         <div className="container">
//           <div className="row gaper contact-grid">
//             <div className="col-6 col-xl-3">
//               <div className="contact-m__single">
//                 <div className="thumb">
//                   <Image src={phone} alt="Phone" />
//                 </div>
//                 <div className="content">
//                   <h4>Phone</h4>
//                   <p>
//                     <Link href="tel:919082083273">Mobile : +91 9082083273</Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-6 col-xl-3">
//               <div className="contact-m__single">
//                 <div className="thumb">
//                   <Image src={mail} alt="Mail" />
//                 </div>
//                 <div className="content">
//                   <h4>Mail Address</h4>
//                   <p>
//                     <Link href="mailto:kd@thysigma.com">
//                       kd@thysigma.com
//                     </Link>
//                   </p>
//                   <p>
//                     <Link href="https://www.thysigma.com" target="_blank">
//                       www.thysigma.com
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-6 col-xl-3">
//               <div className="contact-m__single">
//                 <div className="thumb">
//                   <Image src={location} alt="Location" />
//                 </div>
//                 <div className="content">
//                   <h4>Our Location</h4>
//                   <p>
//                     <Link
//                       href="https://maps.app.goo.gl/HLh44sEA4SG5eg5c6"
//                       target="_blank"
//                     >
//                       116, Shah Heritage, Seawoods West,
//                       Navi Mumbai, India
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-6 col-xl-3">
//               <div className="contact-m__single">
//                 <div className="thumb">
//                   <Image src={time} alt="Office Time" />
//                 </div>
//                 <div className="content">
//                   <h4>Office Hour</h4>
//                   <p>Mon - Sat 09 am - 06pm</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @media (max-width: 767px) {
//             .contact-boxes {
//               position: relative;
//               z-index: 0;
//               padding: 40px 0;
//             }

//             .contact-boxes::before,
//             .contact-boxes::after,
//             .fade-wrapper::before,
//             .fade-wrapper::after {
//               z-index: -1 !important;
//             }

//             .contact-boxes .container,
//             .contact-boxes .row,
//             .contact-m__single {
//               position: relative;
//               z-index: 2;
//             }

//             .contact-m__single {
//               padding: 8px;
//             }

//             .contact-m__single .thumb img {
//               max-width: 40px;
//             }

//             .contact-m__single h4 {
//               font-size: 14px;
//               margin-bottom: 2px;
//             }

//             .contact-m__single p {
//               font-size: 12px;
//               line-height: 1.25;
//               margin-bottom: 2px;
//             }
//           }

//           @media (min-width: 768px) {
//             .contact-boxes {
//               position: relative;
//               z-index: 0;
//               padding: 60px 0;
//             }

//             .contact-boxes::before,
//             .contact-boxes::after,
//             .fade-wrapper::before,
//             .fade-wrapper::after {
//               z-index: -1 !important;
//             }

//             .contact-boxes .container,
//             .contact-boxes .row,
//             .contact-m__single {
//               position: relative;
//               z-index: 2;
//             }
//           }
//         `}</style>
//       </section>

//       {/* ===== SECTION 2: MAP + FORM ===== */}
//       <section className="section contact-map-form">
//         <div className="container">
//           <div className="row gaper">
            
//             {/* MAP */}
//             <div className="col-12 col-lg-6">
//               <div className="contact__map">
//                 <iframe
//                   src="https://www.google.com/maps?q=Shah+Heritage+Seawoods+Navi+Mumbai&output=embed"
//                   width="100%"
//                   height="800"
//                   style={{ border: 0 }}
//                   loading="lazy"
//                 />
//               </div>
//             </div>

//             {/* FORM */}
//             <div className="col-12 col-lg-6">
//               <div className="contact-main__form">
//                 <h3>Leave A Message</h3>

//                 <div className="section__content-cta">
//                   <div className="group-wrapper">
//                     <div className="group-input">
//                       <input type="text" placeholder="Name" />
//                     </div>
//                     <div className="group-input">
//                       <input type="email" placeholder="Email" />
//                     </div>
//                   </div>

//                   <div className="group-input">
//                     <input type="text" placeholder="Subject" />
//                   </div>

//                   <div className="group-input" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
//                     <textarea placeholder="Message" style={{ flex: 1 }}></textarea>
//                   </div>

//                   <div className="form-cta">
//                     <button type="button" className="btn btn--primary" onClick={handleSubmit}>
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//         <style jsx>{`
//           .contact-map-form {
//             position: relative;
//             z-index: 0;
//             padding: 60px 0;
//           }

//           .contact__map {
//             position: relative;
//             z-index: 2;
//             border-radius: 12px;
//             overflow: hidden;
//             box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
//             height: 100%;
//           }

//           .contact__map iframe {
//             display: block;
//             height: 100%;
//           }

//           .contact-main__form {
//             position: relative;
//             z-index: 2;
//             background: rgba(255, 255, 255, 0.05);
//             padding: 40px;
//             border-radius: 12px;
//             box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//           }

//           .contact-main__form h3 {
//             margin-bottom: 30px;
//             font-size: 28px;
//             font-weight: 600;
//           }

//           .section__content-cta {
//             flex: 1;
//             display: flex;
//             flex-direction: column;
//           }

//           .group-wrapper {
//             display: grid;
//             grid-template-columns: 1fr 1fr;
//             gap: 20px;
//             margin-bottom: 20px;
//           }

//           .group-input {
//             margin-bottom: 20px;
//           }

//           .contact-main__form input,
//           .contact-main__form textarea {
//             padding: 15px;
//             font-size: 16px;
//             width: 100%;
//             border: 1px solid rgba(255, 255, 255, 0.1);
//             background: rgba(255, 255, 255, 0.05);
//             color: #fff;
//             border-radius: 8px;
//             font-family: inherit;
//           }

//           .contact-main__form textarea {
//             min-height: 150px;
//             resize: vertical;
//             flex: 1;
//           }

//           .btn--primary {
//             padding: 15px 40px;
//             font-size: 16px;
//             border: none;
//             border-radius: 8px;
//             background: #007bff;
//             color: #fff;
//             cursor: pointer;
//             transition: all 0.3s ease;
//           }

//           .btn--primary:hover {
//             background: #0056b3;
//             transform: translateY(-2px);
//           }

//           .form-cta {
//             display: flex;
//             margin-top: 20px;
//             margin-bottom: 0;
//           }

//           @media (max-width: 991px) {
//             .contact-map-form {
//               padding: 40px 0;
//             }

//             .contact__map {
//               margin-bottom: 30px;
//             }

//             .contact__map iframe {
//               height: 400px;
//             }

//             .contact-main__form {
//               padding: 30px;
//             }
//           }

//           @media (max-width: 767px) {
//             .contact-main__form {
//               padding: 20px;
//             }

//             .contact-main__form h3 {
//               font-size: 20px;
//               margin-bottom: 20px;
//             }

//             .group-wrapper {
//               grid-template-columns: 1fr;
//               gap: 10px;
//             }

//             .group-input {
//               margin-bottom: 10px;
//             }

//             .contact-main__form input,
//             .contact-main__form textarea {
//               padding: 12px;
//               font-size: 14px;
//             }

//             .contact-main__form textarea {
//               min-height: 100px;
//             }

//             .form-cta {
//               margin-top: 15px;
//             }

//             .btn--primary {
//               padding: 12px 24px;
//               font-size: 14px;
//               width: 100%;
//             }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default ContactMain;