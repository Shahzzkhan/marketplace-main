"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const fetchBlogData = async (slug: string) => {
  const blogs = [
    {
      img: "/Neelo-longhair.png",
      title: "Neelo's Long Hair Oil",
      content: (
        <>
          <h2>Revitalize Your Hair with Neelo's Long Hair Oil</h2>
          <p>
            If you're looking for a solution to dull, brittle hair, Neelo's Long Hair Oil provides an ideal remedy. This premium blend of natural oils is formulated to nourish, strengthen, and enhance the natural beauty of your hair, offering long-lasting results with every use.
          </p>

          <h2>Why Neelo's Long Hair Oil is Essential</h2>
          <div>
            <p><strong>1. Enriched with Nature’s Best Ingredients</strong></p>
            <p>
              Packed with coconut oil, almond oil, castor oil, and vitamin E, this oil provides deep nourishment to your scalp and hair, leaving your hair shiny, thick, and healthy.
            </p>

            <p><strong>2. Promotes Healthy Hair Growth</strong></p>
            <p>
              Designed to stimulate hair follicles, this oil helps accelerate hair growth, bringing you closer to achieving the long, luscious hair you desire.
            </p>

            <p><strong>3. Strengthens and Repairs</strong></p>
            <p>
              Neelo's Long Hair Oil deeply penetrates the hair shaft, strengthening it from the inside out and preventing breakage, split ends, and thinning.
            </p>

            <p><strong>4. Reduces Scalp Irritation</strong></p>
            <p>
              Thanks to its anti-inflammatory properties, this oil alleviates scalp irritation, reducing dandruff and itchiness while promoting a balanced and healthy scalp.
            </p>
          </div>

          <h2>How to Use Neelo's Long Hair Oil</h2>
          <ul>
            <li>Massage the oil into your scalp using circular motions.</li>
            <li>Allow it to sit for at least 2 hours, or leave it overnight for enhanced benefits.</li>
            <li>Wash your hair with a mild shampoo to reveal soft, shiny, and manageable locks.</li>
          </ul>

          <h2>Customer Reviews</h2>
          <div>
            <p>
              "I’ve been using Neelo's Long Hair Oil for a month now, and my hair has never felt better. It's thicker and more manageable!"
            </p>
            <p>
              "This oil has transformed my dry scalp and dandruff issues. It’s soothing, effective, and worth every penny."
            </p>
          </div>

          <h2>Where to Buy</h2>
          <p>
            You can purchase Neelo's Long Hair Oil online or at select beauty retailers. Start your journey to healthier hair today!
          </p>

          <p>
            Don’t miss out on this amazing opportunity to transform your hair care routine with Neelo’s Long Hair Oil!
          </p>
        </>
      ),
      slug: "neelos-long-hair-oil",
    },
    {
      img: "/pexels-828860-2639947.jpg",
      title: "Must-Have Beauty Products for 2025",
      content: (
        <>
          <h2>Must-Have Beauty Products for 2025</h2>
          <p>
            As we embrace 2025, the beauty industry continues to innovate with products that enhance your natural radiance while promoting sustainability. From eco-friendly makeup to advanced skincare tools, 2025 is all about personalized, cutting-edge solutions.
          </p>

          <h3>1. Smart Skincare Devices</h3>
          <p>
            The rise of AI-driven skincare devices is revolutionizing the way we approach skincare. These devices analyze your skin and recommend treatments tailored to your needs, offering personalized care from the comfort of your home.
          </p>

          <h3>2. Eco-Friendly Makeup</h3>
          <p>
            Sustainability is central to 2025's beauty products. Look for biodegradable packaging, refillable containers, and ingredients that are ethically sourced, ensuring both beauty and planet preservation.
          </p>

          <h3>3. Multi-Tasking Beauty Products</h3>
          <p>
            Maximize your time with beauty products that offer multiple benefits, such as tinted moisturizers with SPF or hybrid serums that hydrate and combat signs of aging.
          </p>

          <h3>4. Skin Barrier Protectors</h3>
          <p>
            Products designed to protect the skin’s natural barrier are more important than ever. Look for moisturizers and toners packed with ceramides and other ingredients that support skin health and protect against environmental stressors.
          </p>

          <h3>5. Sustainable Haircare Solutions</h3>
          <p>
            2025 is all about sustainable haircare, from solid shampoo bars to refillable hair treatments, helping reduce waste while delivering high-performance results.
          </p>

          <h3>6. Inclusive Beauty</h3>
          <p>
            Beauty brands are embracing inclusivity with products that cater to diverse skin tones, hair textures, and personal preferences, ensuring everyone finds their perfect match.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            2025 promises to be an exciting year for beauty, with innovations that blend sustainability, inclusivity, and effectiveness. Get ready to discover the products that will elevate your beauty routine while caring for the planet.
          </p>
          <p>
            <strong>Which products are you most excited to try? Share your thoughts in the comments below!</strong>
          </p>
        </>
      ),
      slug: "must-have-beauty-products-2025",
    },
    {
      img: "https://th.bing.com/th/id/R.d04ad041b191445a1ce67f950ee61802?rik=pVnA%2bnhHpvaQ8Q&pid=ImgRaw&r=0",
      title: "Why Organic Skin Care Products Are a Game Changer",
      content: (
        <>
          <h2>Why Organic Skin Care Products Are a Game Changer</h2>
          <p>
            The shift towards organic skincare products reflects a growing awareness of the ingredients we use on our skin. These products, free from synthetic chemicals, offer a cleaner, more natural alternative to traditional skincare solutions.
          </p>

          <h3>1. Gentle on Your Skin</h3>
          <p>
            Organic products are formulated without harsh chemicals, making them ideal for sensitive skin. They nourish and protect the skin without causing irritation or allergic reactions.
          </p>

          <h3>2. Packed with Nutrients</h3>
          <p>
            Rich in vitamins, antioxidants, and minerals, organic skincare ingredients like aloe vera and chamomile help reduce aging signs, improve texture, and fight inflammation.
          </p>

          <h3>3. Eco-Friendly</h3>
          <p>
            By choosing organic skincare, you're supporting sustainable practices. Many brands use eco-friendly packaging and responsibly sourced ingredients, making a positive impact on the environment.
          </p>

          <h3>4. Free from Harmful Additives</h3>
          <p>
            Organic products avoid additives and preservatives that can cause long-term skin damage. Choosing organic means reducing your exposure to harmful toxins and supporting your skin’s natural balance.
          </p>

          <h3>5. Long-Term Benefits</h3>
          <p>
            Organic skincare provides long-lasting results by supporting your skin’s overall health. With consistent use, you’ll notice improvements in texture, hydration, and overall skin vitality.
          </p>

          <h2>Why Make the Switch?</h2>
          <p>
            If you’re looking for a safer, more sustainable skincare routine, organic products are the answer. Make the switch today for healthier, glowing skin—and a healthier planet.
          </p>

          <h2>Customer Testimonials</h2>
          <p>
            "I switched to organic skincare a few months ago, and my skin feels incredible—more hydrated and smoother!"
          </p>
          <p>
            "After years of trying chemical products, I finally found that organic skincare works wonders for my sensitive skin."
          </p>

          <h2>Where to Buy</h2>
          <p>
            Organic skincare products are available online, in health stores, and at specialty boutiques. Look for certifications like USDA Organic to ensure the authenticity of the products you purchase.
          </p>

          <p>
            <strong>Experience the change for yourself!</strong> Switch to organic skincare and discover why it’s a game changer for your skin and the environment.
          </p>
        </>
      ),
      slug: "organic-skin-care-products",
    },
  ];

  return blogs.find((blog) => blog.slug === slug);
};

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost = ({ params }: BlogPostProps) => {
  const { slug } = params; // Extract slug from params
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const result = await fetchBlogData(slug);
      setBlog(result);
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="container flex gap-4 items-center text-gray-500">
        <Link href="/" className="cursor-pointer hover:text-accent">Home</Link>
        <Link href="/blog" className="cursor-pointer hover:text-accent">Blog</Link>
      </div>
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-gray-500 mb-4">{blog.comments}</p>
      <img src={blog.img} alt={blog.title} className="w-full max-w-lg mx-auto rounded-md mb-4" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
