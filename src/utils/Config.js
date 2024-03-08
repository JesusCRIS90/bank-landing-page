const AppInfo = {
  Header: {
    Logo: {
      src: "/img/icon.png",
      name: "Bankist",
    },
    NavItems: [
      {
        name: "Features",
        href: "#features",
        className: "nav-item-header",
        handleClick: undefined,
      },
      {
        name: "Operations",
        href: "#operations",
        className: "nav-item-header",
        handleClick: undefined,
      },
      {
        name: "Testimonials",
        href: "#testimonials",
        className: "nav-item-header",
        handleClick: undefined,
      },
      {
        name: "Open Account",
        href: undefined,
        className: "nav-item-header",
        handleClick: (e) => {
          e.preventDefault();
        },
      },
    ],
  },
  Footer: {
    Logo: {
      src: "/img/icon.png",
    },
    NavItems: [
      {
        name: "About",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
      {
        name: "Pricing",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
      {
        name: "Terms of Use",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
      {
        name: "Privacy Policy",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
      {
        name: "Careers",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
      {
        name: "Blog",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
      {
        name: "Contact Us",
        href: "#",
        className: "nav-item-footer",
        handleClick: undefined,
      },
    ],
  },
  Home: {
    HeaderText: {
      text: "When banking meets minimalist",
      keywords: ["banking", "minimalist"],
    },
    Slogan: "A simple banking experience for a simple life.",
    Button: {
      text: "Learn More ↓",
      onClickHandle: function () {
        const featureSection = document.querySelector("#featuress");
        featureSection?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    Image: {
      src: "/img/hero.png",
      className: "image",
      alt: "Minimalist Bank image",
    },
  },
  Features: {
    Header: {
      Title: "Features",
      Subtitle: "Everything you need in a modern bank and more.",
    },
    Features: [
      {
        Image: {
          src: "/img/digital.jpg",
          className: "feature-1",
          alt: "feature-1",
        },
        ClassName: "bank-feature-card",
        Icon: "/img/icons.svg#icon-monitor",
        Title: "100% Digital Bank",
        Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.",
      },
      {
        Image: {
          src: "/img/grow.jpg",
          className: "feature-2",
          alt: "feature-2",
        },
        ClassName: "bank-feature-card",
        Icon: "/img/icons.svg#icon-trending-up",
        Title: "Watch your money grow",
        Text: "Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!",
      },
      {
        Image: {
          src: "/img/card.jpg",
          className: "feature-3",
          alt: "feature-3",
        },
        ClassName: "bank-feature-card",
        Icon: "/img/icons.svg#icon-credit-card",
        Title: "Free debit card included",
        Text: "Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab.",
      },
    ],
  },
  Operations: {
    Header: {
      Title: "Operations",
      Subtitle: "Everything as simple as possible, but no simpler.",
    },
    TabInfo: {
      TabFunc: undefined,
      Tabs: [
        {
          id: "tranfers",
          text: "Instant Tranfers",
          data: {
            ClassName: "bank-operation-card card-tranfer",
            Icon: "/img/icons.svg#icon-upload",
            Title: "Tranfser money to anyone, instantly! No fees, no BS.",
            Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        },
        {
          id: "loans",
          text: "Instant Loans",
          data: {
            ClassName: "bank-operation-card card-loans",
            Icon: "/img/icons.svg#icon-home",
            Title:
              "Buy a home or make your dreams come true, with instant loans.",
            Text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
        {
          id: "closing",
          text: "Instant Closing",
          data: {
            ClassName: "bank-operation-card card-closing",
            Icon: "/img/icons.svg#icon-user-x",
            Title:
              "No longer need your account? No problem! Close it instantly.",
            Text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
        },
      ],
    },
  },
  Testimonials: {
    Header: {
      Title: "Testimonials",
      Subtitle: "Millions of Bankists are already making their lifes simpler.",
    },
    Testimonials: [
      {
        Profile: {
          Image: {
            src: "/img/user-1.jpg",
            alt: "",
            className: "image-profile",
          },
          Name: "Aarav Lynn",
          Place: "San Francisco, USA",
        },
        Slogan: "Best financial decision ever!",
        Text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
      },
      {
        Profile: {
          Image: {
            src: "/img/user-2.jpg",
            alt: "",
            className: "image-profile",
          },
          Name: "Miyah Miles",
          Place: "London, UK",
        },
        Slogan: "The last step to becoming a complete minimalist",
        Text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
      },
      {
        Profile: {
          Image: {
            src: "/img/user-3.jpg",
            alt: "",
            className: "image-profile",
          },
          Name: "Francisco Gomes",
          Place: "Lisbon, Portugal",
        },
        Slogan: "Finally free from old-school banks",
        Text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
      },
    ],
  },
  SignUp: {
    Slogan:
      "The best day to join Bankist was one year ago. The second best is today!",
    Button: {
      text: "Open your free account today!",
      onClickHandle: undefined,
    },
  },
  OpenAccountModalWindow: {
    Header: {
      text: "Open your bank account in just 5 minutes!",
      keywords: ["5", "minutes!"],
    },
    InputsFields: [
      {
        text: "First Name:",
        type: "text",
      },
      {
        text: "Last Name:",
        type: "text",
      },
      {
        text: "Email Address:",
        type: "email",
      },
    ],
  },
};

export { AppInfo };
