const menu_data = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Dashboard",
      link: "/dashboard",
  
    },
    {
      id: 3,
      title: "Records List",
      link: "/instructor",
    },
    {
      id: 4,
      title: "Doctor",
      link: "/doctor",
      has_dropdown: true,
      sub_menus: [
        { link: "/", title: "Course Grid" },
        { link: "/", title: "Course List" },
        { link: "/", title: "Course Details" },
      ],
    },
    {
      id: 5,
      title: "Patient",
      link: "/",
      has_dropdown: true,
      sub_menus: [
        { link: "/", title: "Blog Sidebar" },
        { link: "/", title: "Blog Grid" },
        { link: "/", title: "Blog Masonry" },
        { link: "/", title: "Blog Details" },
      ],
    },
    
  ];
  export default menu_data;
  