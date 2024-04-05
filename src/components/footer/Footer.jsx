import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import Ulis from "./Ulis";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaFacebook />,
      url: "https://www.facebook.com/?locale=ar_AR",
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      url: "https://web.whatsapp.com/",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/feed/",
    },
    {
      id: 4,
      icon: <FaGithub />,
      url: "https://github.com/moyoussef11",
    },
  ];

  const showIcons = icons.map((icon) => (
    <li key={icon.id}>
      <a target="_blank" href={icon.url}>
        {icon.icon}
      </a>
    </li>
  ));

  return (
    <footer className="main_paddingX py-2 bg-slate-300 text-center sm:text-left text-gray-500">
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="flex flex-col space-y-3">
          <h3 className=" text-3xl font-bold main_color">classyshop</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <ul className="flex items-center space-x-5 mx-auto sm:mx-0 main_color">
            {showIcons}
          </ul>
        </div>
        <Ulis
          title={"about us"}
          linkOne={"company history"}
          linkTwo={"meet the team "}
          linkThree={"employee handbook"}
          linkFour={"careers"}
        />
        <Ulis
          title={"our services"}
          linkOne={"web development"}
          linkTwo={"web design"}
          linkThree={"marketing"}
          linkFour={"google ads"}
        />
        <Ulis
          title={"helpful links"}
          linkOne={"FAQS"}
          linkTwo={"support"}
          linkThree={"Live chat"}
          linkFour={"messenger"}
        />
        <Ulis
          title={"Contact Us"}
          linkOne={"01146646254"}
          linkTwo={"mohamedyoussef@gmail.com"}
          linkThree={"company@hotmail.com"}
          linkFour={"Egypt_Giza"}
        />
      </div>
      <div className="font-semibold flex items-center flex-col sm:flex-row justify-between py-3">
        <span>© 2024 classyshop</span>
        <span>All rights reserved.· Mohamed youssef</span>
      </div>
    </footer>
  );
};

export default Footer;
