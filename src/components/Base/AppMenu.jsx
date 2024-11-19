const Menu = [
  {
    name: "Home",
    route: "/dashboard",
  },
  {
    name: "Messages",
    route: "/messages",
  },
  {
    name: "Settings",
    route: "/settings",
  },
  {
    name: "Profile",
    route: "/profile",
  }
];

const AppMenu = () => {
  return (
    <div className="w-full max-w-[350px] h-[70px] rounded-[60px] bg-white px-5 flex flex-row gap-1 mb-5">
      {Menu.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-center w-full relative"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default AppMenu;
