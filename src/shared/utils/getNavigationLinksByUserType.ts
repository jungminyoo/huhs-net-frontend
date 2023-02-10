interface INavigationLink {
  id: number;
  name: string;
  to: string;
}

const getNavigationLinksByUserType = (): INavigationLink[] => {
  return [
    {
      id: 1,
      name: "HUHS 소개",
      to: "/intro",
    },
    {
      id: 2,
      name: "Social",
      to: "/social",
    },
    {
      id: 3,
      name: "놀거리",
      to: "/playground",
    },
    {
      id: 4,
      name: "출석",
      to: "/attendance",
    },
    {
      id: 5,
      name: "로그인",
      to: "/login",
    },
  ];
};

export default getNavigationLinksByUserType;
