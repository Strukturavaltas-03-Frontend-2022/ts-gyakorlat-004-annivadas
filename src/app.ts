// Importáld be a HumanHero és TransformerHero osztályokat. 
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
//export const humans: any[] = [];
export const humans: HumanHero[] = [
    {
      id: 1,
      name: "John",
      sex: "male",
      age: 11,
      health: 1,
    },
    {
      id: 2,
      name: "Jim",
      sex: "male",
      age: 22,
      health: 2,
    },
    {
      id: 3,
      name: "Jack",
      sex: "male",
      age: 33,
      health: 3,
    },
  ];
  
/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
//export const transformers: any[] = [];
export const transformers: TransformerHero[] = [
    {
      id: 3,
      name: "Odysseus",
      wings: 0,
      wheels: 2,
      clan: "greek",
    },
    {
      id: 3,
      name: "Agamennon",
      wings: 0,
      wheels: 0,
      clan: "greek",
    },
    {
      id: 3,
      name: "Paris",
      wings: 6,
      wheels: 0,
      clan: "Trojan",
    },
  ];
  