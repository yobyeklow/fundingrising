import { debounce } from "lodash";
import { useState } from "react";

export default function useOnchange(time) {
  const [value, setValue] = useState(null);
  const handleOnchange = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleOnchange];
}
