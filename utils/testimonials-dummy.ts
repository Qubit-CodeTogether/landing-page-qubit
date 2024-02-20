type Testimonial = {
  name: string;
  avatar: string;
  rate: number;
  role: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    avatar: "dummy-avatar.svg",
    role: "Web Developer",
    rate: 5,
    message:
      "Qubit has been a game-changer for me! The supportive environment and wealth of resources have helped me level up my web development skills.",
  },
  {
    name: "Sara Durtete",
    avatar: "dummy-avatar2.svg",
    role: "UI/UX Designer",
    rate: 5,
    message:
      "Qubit has been a game-changer for me! The supportive environment and wealth of resources have helped me level up my web development skills.",
  },
  {
    name: "Ujang",
    avatar: "dummy-avatar.svg",
    role: "Mobile Developer",
    rate: 5,
    message:
      "Qubit has been a game-changer for me! The supportive environment and wealth of resources have helped me level up my web development skills.",
  },
  {
    name: "John Doe",
    avatar: "dummy-avatar.svg",
    role: "Tech Lead",
    rate: 5,
    message:
      "Qubit has been a game-changer for me! The supportive environment and wealth of resources have helped me level up my web development skills.",
  },
];
