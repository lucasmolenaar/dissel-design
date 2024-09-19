export interface IProject {
  logo: string;
  title: string;
  subtitle1: string;
  subtitle2: string;
  image: string;
  company: string;
  role: string;
  spentTime: string;
  skills: string[];
  link: string;
  text: string;
  goalsBackground: string;
  goalsText: string;
  goals: string[];
  methods: IMethod[];
  microAnimationText: string;
  aboutProjectText: string;
  sliderImages: string[];
  analytics: IAnalytics[];
}

interface IMethod {
  img: string;
  title: string;
  text: string;
}

interface IAnalytics {
  icon: string;
  title: string;
  text: string;
}
