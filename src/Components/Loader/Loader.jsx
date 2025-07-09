import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="h-16 w-16 rounded-full border-4 border-t-black border-r-red-600 border-b-transparent border-l-transparent animate-spin"></div>
    </div>
  );
}
