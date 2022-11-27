import { HerosDataType } from "types";

const imageUri: string =
  'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/';

export const HerosData: HerosDataType[] = [
  {
    id: 0,
    name: 'CAPTAIN AMERICA',
    uri:
      imageUri +
      'd/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/1000?cb=20190423175339',
    description:
      `Steve Rogers was a would-be U.S. Army enlistee rejected by recruiters because of his small size. He volunteers to receive a top-secret serum and transforms into a “super-soldier.” Dubbed Captain America and clad in a red, white, and blue costume with a matching stars-and-stripes shield, Rogers joins the army.`,
  },
  {
    id: 1,
    name: 'IRON MAN',
    uri:
      imageUri +
      '3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213',
    description:
      `Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father's footsteps, inheriting Stark Industries upon his parents' untimely death.`,
  },
  {
    id: 2,
    name: 'THOR',
    uri:
      imageUri +
      '2/22/Thor_in_LoveAndThunder_Poster.jpg/revision/latest?cb=20220615195810',
    description: `Thor is the son of Odin, the All-Father and King of Asgard. He was worshiped by the humans known as Vikings and became part of Norse Mythology. Armed with his enchanted Uru hammer Mjolnir, which helps him to channel his godly energies, he became the mightiest warrior in the Ten Realms`,
  },
  {
    id: 3,
    name: 'HULK',
    uri:
      imageUri +
      '7/79/Hulk_in_the_She-Hulk_series_-_Infobox.jpg/revision/latest?cb=20220819171053',
    description: `Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.`,
  },
  {
    id: 4,
    name: 'BLACK WIDOW',
    uri:
      imageUri +
      '9/9a/BlackWidow-EndgameProfile.jpg/revision/latest?cb=20190423174842',
    description:
     `Natasha was born in Stalingrad (now Volgograd), Russian SFSR, USSR. The first and best-known Black Widow is a Russian agent trained as a spy, martial artist, and sniper, and outfitted with an arsenal of high-tech weaponry, including a pair of wrist-mounted energy weapons dubbed her "Widow's Bite".`,
  },
];