import { SimpleGrid, Text } from "@chakra-ui/react";
import useOutfit from "../hooks/useOutfit";
import OutfitCard from "./OutfitCard";

const GameGrid = () => {
  const {outfits,error} = useOutfit()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm:1,md:2,lg:3}} spacing={10} padding='10px'>
        {outfits.map((outfit) => (
          <OutfitCard outfit={outfit}></OutfitCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
