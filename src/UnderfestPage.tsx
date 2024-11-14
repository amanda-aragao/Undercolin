import { Nav } from "./Nav";

interface UnderfestPageProps {
  menuIsVisible: boolean;
  setMenuIsVisible: (isVisible: boolean) => void;
}

export function UnderfestPage({ menuIsVisible, setMenuIsVisible }: UnderfestPageProps) {
  return (
    <>
      <Nav menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />


    </>
  )
}