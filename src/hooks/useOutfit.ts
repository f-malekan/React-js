import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import outfitService, { Outfit } from "../services/outfit-service";


const useOutfit = () => {
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = outfitService.getAll<Outfit>();
    request
      .then((res) => {
        setOutfits(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => cancel();
  }, []);

  return {outfits,error,setError,setOutfits}
}

export default useOutfit