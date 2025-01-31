import LargeScreen from "./largescreen/Large";
import SmallScreen from "./elements/Small";
import MediumScreen from "./elements/Medium";

function Header() {
  return (
    <>
      <LargeScreen />
      <MediumScreen />
      <SmallScreen />
    </>
  );
}

export default Header;
