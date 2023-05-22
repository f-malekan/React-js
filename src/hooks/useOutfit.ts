import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import outfitService, { Outfit } from "../services/outfit-service";


const useOutfit = () => {
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [error, setError] = useState("");
  const [isLoading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
    const { request, cancel } = outfitService.getAll<Outfit>();
    request
      .then((res) => {
        setOutfits(res.data);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });
    return () => cancel();
  }, []);

  return {outfits,error,setError,setOutfits,isLoading,setLoading}
}

export default useOutfit