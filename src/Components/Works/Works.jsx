// import React from "react";
// import ava from '../Assets/prof3.jpg'
// import f5 from '../Assets/f5.webp'

// const cards = [
//   {
//     image: f5,
//     testimonial: "KREE8’s graphic design quality is unmatched...",
//     author: "Rohan Jhaveri",
//     role: "Founder of 505 Coffee",
//     avatar: ava,
//   },
//   {
//     image: f5,
//     testimonial: "KREE8’s graphic design quality is unmatched...",
//     author: "Rohan Jhaveri",
//     role: "Founder of 505 Coffee",
//     avatar: ava,
//   },
//   {
//     image: f5,
//     testimonial: "KREE8’s graphic design quality is unmatched...",
//     author: "Rohan Jhaveri",
//     role: "Founder of 505 Coffee",
//     avatar: ava,
//   },
//   {
//     image: f5,
//     testimonial: "KREE8’s graphic design quality is unmatched...",
//     author: "Rohan Jhaveri",
//     role: "Founder of 505 Coffee",
//     avatar: ava,
//   },
// ];

// export default function Works() {
//   return (
//     <div className="min-h-screen bg-white p-6">
//       <h1 className="text-4xl font-bold text-center mb-10">Our Works</h1>
//       <div className="flex gap-6 overflow-x-auto pb-4">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="min-w-[300px] sm:min-w-[350px] bg-white shadow-lg rounded-2xl p-4 flex-shrink-0 border"
//           >
//             <img
//               src={card.image}
//               alt="Project"
//               className="w-full h-48 object-cover rounded-xl mb-4"
//             />
//             {card.testimonial && (
//               <p className="text-sm text-gray-700 mb-2">{card.testimonial}</p>
//             )}
//             <div className="flex items-center mt-4">
//               <img
//                 src={card.avatar}
//                 alt="Avatar"
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div>
//                 <p className="text-sm font-semibold">{card.author}</p>
//                 <p className="text-xs text-gray-500">{card.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
