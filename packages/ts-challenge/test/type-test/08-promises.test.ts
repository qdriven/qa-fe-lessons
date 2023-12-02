import { it } from "vitest";

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

// export const fetchLukeSkywalker = async (): LukeSkywalker => {
//   const data = await fetch("https://swapi.dev/api/people/1").then(res => {
//     return res.json();
//   });

//   return data;
// };
export const fetchLukeSkywalkerPromise = async (): Promise<LukeSkywalker> => {
  const data = await fetch("https://swapi.dev/api/people/1").then(res => {
    return res.json();
  });

  return data;
};

export const fetchLukeSkywalkerTypes = async () => {
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then(res => {
    return res.json();
  });

  return data;
};

it("test promise object", async () => {
  console.log("start testing");
  //TODO: how to handle a promise result
  const data = fetchLukeSkywalkerPromise();

  console.log(data);
  const result = await fetchLukeSkywalkerTypes();
  console.log(result);
});
