import { SimpleGrid, Text } from "@chakra-ui/react";
import useOutfit from "../hooks/useOutfit";
import OutfitCard from "./OutfitCard";
import OutfitCardSkeleton from "./OutfitCardSkeleton";

interface Props{
  onClick:()=>void
}

const GameGrid = ({onClick}:Props) => {
  const {outfits,error,isLoading} = useOutfit()
  const skeleton=[1,2,3,4,5,6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm:1,md:2,lg:3}} spacing={10} padding='10px'>
        {isLoading && skeleton.map((s)=><OutfitCardSkeleton/>)}
        {outfits.map((outfit) => (
          <OutfitCard outfit={outfit} onClick={onClick}></OutfitCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
