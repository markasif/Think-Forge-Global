// import React from "react";
// // import test from "../Assets/test.webp";
// // import p from "../Assets/prof3.webp";
// // import grid from '../Assets/grid.webp'
// // const testimonials = Array(6).fill({
// //   name: "Jake Harrison",
// //   feedback:
// //     "Working with this team has truly pushed our company to improve. Their tailored solutions have made a significant difference in our operations!",
// //   // avatar: p,
// // });

// export default function Testimonials() {
//   return (
//     <div
//       className="min-h-screen px-4 py-10 bg-cover bg-center relative font-sh-ad-grotesk"
//     >
//       {/* Optional overlay for better contrast */}
//       {/* <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div> */}

//       <div className="relative z-10">
//         {/* Top Banner Section */}
//         <div className="relative bg-black text-white rounded-3xl overflow-hidden max-w-6xl mx-auto h-[500px]">
//           <img
//             src={test}
//             alt="Team"
//             className="absolute inset-0 w-full h-full object-cover opacity-50"
//           />
//           <div className="relative z-10 px-6 py-16 md:py-24 text-start font-cal-sans">
//             <h1 className="text-3xl md:text-5xl">
//               Trusted by <br /> companies and Brands
//             </h1>
//             <p className="mt-4 max-w-lg text-sm md:text-base text-gray-200">
//               Real Feedback from companies we've built smarter, faster, and better.
//             </p>
//             {/* <div className="flex justify-center mt-6 gap-4">
//               <img src="/logo1.png" className="h-6 md:h-8" />
//               <img src="/logo2.png" className="h-6 md:h-8" />
//             </div> */}
//           </div>
//         </div>

//         {/* Testimonials Section */}
//         <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 font-sh-ad-grotesk text-black">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#F7F8FC] border rounded-xl p-6 border-gray-400 text-center flex flex-col items-center"
//             >
//               <p className="text-sm text-gray-700 mb-4">
//                 "{item.feedback}"
//               </p>
//               {/* <img
//                 src={item.avatar}
//                 alt={item.name}
//                 className="w-10 h-10 rounded-full mb-2"
//               /> */}
//               <h3 className="text-sm">{item.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
