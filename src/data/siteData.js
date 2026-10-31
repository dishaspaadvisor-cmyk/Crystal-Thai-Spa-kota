export const contactData = {
  email: "crystalthaispa.kota@gmail.com",
  phone: "+919256604345",
  address: "2nd Floor, A-15, Jhalawar Road,Cinemall, Indraprastha Industrial Area,Kota, Rajasthan 324005",
  whatsapp: "+919256604345",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61582051532228",
  },

  whatsappMessage:
    "Hello, I would like to know more about your services.",

  map: {
    embedUrl:
     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.810079032116!2d75.85198267538003!3d25.142110977746512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8581066ef257%3A0x6ebb2a2878a24191!2sCrystal%20Thai%20Spa%20In%20Kota!5e0!3m2!1sen!2sin!4v1791295917890!5m2!1sen!2sin"
  },
};

const siteData = {
  brand: "Crystal Thai Spa ",

  logo: "/images/logo/1.png",

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Offers",
      href: "/offers",
    },
    {
      label: "About",
      href: "/about",
    },
   {
    label: "Contact",
    href: "/contact",
  },
  ],
  appointment: {
    label: "Book Appointment",
    href: "/contact",
  },

  /* =====================================================
     HERO
  ===================================================== */

  hero: {
    desktopSlides: [
      {
        id: 1,
        image: "/images/heroimages/10.png",

        eyebrow: "Crystal Thai Spa ",

        title: " Best Spa in Kota",

        description:
          "Escape into a peaceful luxury spa experience designed to relax your body, refresh your mind and restore your energy.",

        button: {
          label: "Explore Services",
          href: "/services",
        },
      },

      {
        id: 2,
        image: "/images/heroimages/11.png",

        eyebrow: "LUXURY WELLNESS",

        title: "New Staff  Available",

        description:
          "Discover carefully designed treatments and a calming atmosphere created around your comfort and complete relaxation.",

        button: {
          label: "Discover More",
          href: "/about",
        },
      },

      {
        id: 3,
        image: "/images/heroimages/13.png",

        eyebrow: "YOUR WELLNESS JOURNEY",

        title: "Give Yourself Time To Relax",

        description:
          "Take a moment for yourself and experience soothing treatments in an elegant and welcoming spa environment.",

        button: {
          label: "Book Your Experience",
          href: "/contact",
        },
      },
    ],

    /* =====================================================
       MOBILE
       ONE VIDEO + THREE TEXT SLIDES
    ===================================================== */

    mobile: {
      video: "/images/heroimages/1.mp4",

      slides: [
        {
          id: 1,

          eyebrow: "Crystal Thai Spa ",

          title: " Best Spa in Kota ",

          description:
            "Escape into a peaceful luxury spa experience designed to relax your body, refresh your mind and restore your energy.",
        },

        {
          id: 2,

          eyebrow: "LUXURY WELLNESS",

          title: "New Staff  Available",

          description:
            "Discover carefully designed treatments and a calming atmosphere created around your comfort and complete relaxation.",
        },

        {
          id: 3,

          eyebrow: "YOUR WELLNESS JOURNEY",

          title: " Best Spa Services in Kota ",

          description:
            "Take a moment for yourself and experience soothing treatments in an elegant and welcoming spa environment.",
        },
      ],
    },
  },
};

export default siteData;