// We create one "source of truth" for all blog data.
// Import your images here.
import blog1 from "@/Components/Assets/blog1.webp";
import blog2 from "@/Components/Assets/blog2.webp";
import bp1 from "@/Components/Assets/bp1.webp";
import bp2 from "@/Components/Assets/bp2.webp";
import bp3 from "@/Components/Assets/bp3.webp";
import bp4 from "@/Components/Assets/bp4.webp";
import bp5 from "@/Components/Assets/bp5.webp";
import bp6 from "@/Components/Assets/bp6.webp";


const iotHeroImage = blog1
export const allBlogPosts = [
  {
    slug: "ai-in-marketing-and-its-impacts",
    title: "AI in marketing and its impacts",
    cardImageUrl: blog1,
    detailImageUrl: iotHeroImage,
    date: "June 4th 2025",
    categories: ["Marketing", "AI"],
    content: `
      <p>The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity. However, the deployment and management of 5G networks bring significant challenges.</p>
      <p>Telecom operators must address increased complexity, massive data volumes, and heightened customer expectations. Cutting-edge Operational Support Systems (OSS) and Business Support Systems (BSS) are the keys to overcoming these hurdles, enabling faster rollouts, efficient operations, and innovative services.</p>
      <h2>Title for subtopics</h2>
      <p>This article explores the pivotal role of advanced OSS/BSS systems in accelerating 5G deployment and highlights the strategies, technologies, and benefits they offer. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
    `
  },
  {
    slug: "future-of-digital-transformation",
    title: "The Future of Digital Transformation",
    cardImageUrl: blog2,
    detailImageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "July 1st 2025",
    categories: ["Technology", "Business"],
    content: `
      <p>Digital transformation is an ongoing journey, not a destination. As new technologies emerge, businesses must adapt to stay competitive. This article explores the future trends shaping this landscape.</p>
      <h2>The Role of Cloud-Native</h2>
      <p>Cloud-native architectures are becoming the standard for new applications. They offer scalability, resilience, and flexibility that monolithic applications cannot match. We will dive into what it means to be truly cloud-native.</p>
    `
  },
  // --- Add your other 4 posts here in the same format ---
  {
    slug: "iot-focused-mvnos",
    title: "The Rise of IoT-Focused MVNOs: How smart connectivity is reshaping industries",
    cardImageUrl: bp1, // Use the correct card image
    detailImageUrl: iotHeroImage,
    date: "June 4th 2025",
    categories: ["Marketing", "AI"],
    content: `
      <p>This is the content for the IoT-Focused MVNOs post. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
      <h2>Another Subtopic</h2>
      <p>Telecom operators must address increased complexity, massive data volumes, and heightened customer expectations.</p>
    `
  },
  {
    slug: "smart-connectivity-explained",
    title: "Smart Connectivity Explained",
    cardImageUrl: bp2, // Use the correct card image
    detailImageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 4th 2025",
    categories: ["Technology", "Business"],
    content: `
      <p>This is the content for the Smart Connectivity Explained post. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
    `
  },
  {
    slug: "reshaping-industries-with-5g",
    title: "Reshaping Industries with 5G",
    cardImageUrl: bp3, // Use the correct card image
    detailImageUrl: iotHeroImage,
    date: "June 4th 2025",
    categories: ["Marketing", "AI"],
    content: `
      <p>This is the content for the Reshaping Industries post. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
    `
  },
  {
    slug: "the-impact-of-low-latency",
    title: "The Impact of Low-Latency Networks",
    cardImageUrl: bp4,
    detailImageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 4th 2025",
    categories: ["Technology", "Business"],
    content: `
      <p>This is the content for the Low-Latency Networks post. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
    `
  },
   {
    slug: "why-low-latency-matters",
    title: "The Impact of Low-Latency Networks",
    cardImageUrl: bp5,
    detailImageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 4th 2025",
    categories: ["Technology", "Business"],
    content: `
      <p>This is the content for the Low-Latency Networks post. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
    `
  },
   {
    slug: "exploring-network-speeds",
    title: "The Impact of Low-Latency Networks",
    cardImageUrl: bp6,
    detailImageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "June 4th 2025",
    categories: ["Technology", "Business"],
    content: `
      <p>This is the content for the Low-Latency Networks post. The rollout of 5G technology marks a monumental shift in telecommunications, promising ultra-fast speeds, low latency, and unprecedented connectivity.</p>
    `
  },
];
