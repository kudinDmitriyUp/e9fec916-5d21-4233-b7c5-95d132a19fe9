import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import FooterBrandReveal from '@/components/sections/footer/FooterBrandReveal';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import NavbarCentered from '@/components/ui/NavbarCentered';
import ProductMediaCards from '@/components/sections/product/ProductMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Jakanda"
      navItems={[
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Products",
          href: "#products",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Order Now",
        href: "#products",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBrand
      brand="Jakanda Flowers"
      description="Artisanal floral designs, hand-crafted with care and inspired by nature. Bringing beauty into your everyday life with fresh, seasonal blooms."
      primaryButton={{
        text: "Explore Collection",
        href: "#products",
      }}
      secondaryButton={{
        text: "Our Story",
        href: "#about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/blue-yellow-flowers-leaves_23-2147697950.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonial
      tag="Our Philosophy"
      quote="We believe flowers are more than just decoration; they are a language of connection, celebration, and serenity."
      author="Elena Rossi"
      role="Founder & Creative Director"
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-flowers_23-2149247537.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesMediaCards
      tag="Our Service"
      title="Why Choose Jakanda"
      description="Quality and care in every stem we select for you."
      items={[
        {
          title: "Fresh Daily",
          description: "Flowers picked at their peak for longest lasting beauty.",
          imageSrc: "https://pixabay.com/get/g575b31086e3401a46a88ccdeab68dad377b4711cf092a88b9d80c41102070c2a704e61681ef4c5c650602fc35a7f563af6388f78718ae8fd18494e29a9db29b0_1280.jpg?id=2132874",
        },
        {
          title: "Handpicked Selections",
          description: "Curated by master designers with years of expertise.",
          imageSrc: "http://img.b2bpic.net/free-photo/vase-with-fresh-summer-flowers-female-hands-white-background_169016-34138.jpg",
        },
        {
          title: "Bespoke Designs",
          description: "Custom arrangements for weddings, events, and gifts.",
          imageSrc: "http://img.b2bpic.net/free-photo/florist-showing-empty-design-space-paper-wooden-table-with-fresh-flowers-decorate_53876-16020.jpg",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductMediaCards
      tag="Our Collection"
      title="Fresh Arrivals"
      description="Explore our latest seasonal arrangements."
      products={[
        {
          name: "Garden Symphony",
          price: "$65",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-bride-s-hands-holding-beautiful-flower-bouquet_23-2148187552.jpg",
        },
        {
          name: "Summer Joy",
          price: "$55",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-flowers-cupboard_23-2147761241.jpg",
        },
        {
          name: "Classic Lily",
          price: "$80",
          imageSrc: "http://img.b2bpic.net/free-photo/blossom-flowers-vase-table_23-2148925343.jpg",
        },
        {
          name: "Wild Meadow",
          price: "$45",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-bunch-flowers-wooden-background-horizontal-vintage-toning_1220-1131.jpg",
        },
        {
          name: "Romantic Peony",
          price: "$95",
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-floral-arrangement-red-surface_58702-17427.jpg",
        },
        {
          name: "Morning Sun",
          price: "$50",
          imageSrc: "http://img.b2bpic.net/free-photo/vibrant-gerbera-daisies_23-2151961701.jpg",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialTrustCard
      quote="Jakanda made my wedding day absolutely breathtaking. Their attention to detail and color coordination is unmatched."
      rating={5}
      author="Sophie L."
      avatars={[
        {
          name: "Sophie",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-florists-posing-together_23-2148377315.jpg",
        },
        {
          name: "Mark",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-female-florist-offering-flowers_23-2148049441.jpg",
        },
        {
          name: "Anna",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-spectacular-woman-laughing-front_197531-19644.jpg",
        },
        {
          name: "John",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-smiling_23-2148454539.jpg",
        },
        {
          name: "Clara",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-holding-geranium-clay-pot-garden-center-young-woman-shopping-flowers-market-garden-centre_1391-656.jpg",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofMarquee
      tag="Featured In"
      title="Trusted by our partners"
      description="We collaborate with the best event organizers and lifestyle brands."
      names={[
        "Vogue Living",
        "Weddings Weekly",
        "Bloom Magazine",
        "Interior Designs",
        "EcoLife Hub",
        "Modern Retail",
        "Local Business Union",
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSimple
      tag="FAQ"
      title="Common Questions"
      description="Answers to your floral inquiries."
      items={[
        {
          question: "Do you offer delivery?",
          answer: "Yes, we provide same-day local delivery for all orders placed before 12pm.",
        },
        {
          question: "How do I care for my flowers?",
          answer: "Keep them in cool spots away from direct sun and trim stems daily.",
        },
        {
          question: "Can I request custom bouquets?",
          answer: "Absolutely! Contact us for bespoke arrangements for any special event.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      tag="Stay Updated"
      title="Join our Newsletter"
      description="Sign up for seasonal floral tips and exclusive offers."
      inputPlaceholder="Enter your email"
      buttonText="Subscribe"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBrandReveal
      brand="Jakanda"
      columns={[
        {
          items: [
            {
              label: "Shop",
              href: "#products",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Shipping Info",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
    </>
  );
}
