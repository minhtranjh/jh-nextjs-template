import { HomePageContextWrapper } from "../contexts";
import { HomePage } from "../screens";

export default function HomeContainer() {
  return (
    <HomePageContextWrapper>
      <HomePage />
    </HomePageContextWrapper>
  );
}
