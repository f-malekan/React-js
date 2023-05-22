import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar"
import GameGrid from "./components/OutfitGrid";
import { useState } from "react";

function App() {
  const [basketCount,setBasketCount] = useState(0)

  return (
    <Grid templateAreas={{
      base:`'nav' 'main'`,
      lg: `'nav nav' 'aside main'`
    }}>
      <GridItem area="nav">
        <NavBar basketCount={basketCount}></NavBar>
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid onClick={()=>setBasketCount(basketCount+1)}></GameGrid>
      </GridItem>
    </Grid>
  );
}
export default App;
