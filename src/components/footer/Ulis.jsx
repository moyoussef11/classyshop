const Ulis = ({ title, linkOne, linkTwo, linkThree, linkFour }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="capitalize font-bold main_color">{title}</h3>
      <ul className="flex flex-col space-y-2">
        <li>
          <a href="#">{linkOne}</a>
        </li>
        <li>
          <a href="#">{linkTwo}</a>
        </li>
        <li>
          <a href="#">{linkThree}</a>
        </li>
        <li>
          <a href="#">{linkFour}</a>
        </li>
      </ul>
    </div>
  );
};

export default Ulis;
