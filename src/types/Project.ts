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
  textTitle1: string;
  textText1: string;
  textTitle2: string;
  textText2: string;
  textTitle3: string;
  textText3: string;
  textTitle4: string;
  textText4: string;
  methods: IMethod[];
  microAnimationText: string;
  aboutProjectText: string;
  sliderImages: string[];
  analytics: IAnalytics[];
  nextProjectTitle: string;
  nextProjectSubtitle: string;
  nextProjectLink: string;
  nextProjectImage: string;
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
