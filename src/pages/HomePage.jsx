import AccordionItem from "../components/AccordionItem.jsx";

const danceRegions = [
  {
    title: "Danzas del Altiplano",
    content: "El Altiplano boliviano es rico en danzas que reflejan la herencia aymara y quechua. Movimientos fuertes y enérgicos caracterizan estas danzas, a menudo acompañadas por instrumentos de viento como zampoñas y quenas. Ejemplos notables incluyen la Diablada, la Morenada y los Caporales, cada uno con trajes elaborados y significados profundos.",
    dances: ["Caporales", "Diablada", "Morenada"],
  },
  {
    title: "Danzas de los Valles",
    content: "Las danzas de los valles interandinos de Bolivia son más mestizas, fusionando influencias europeas e indígenas. La Cueca y el Bailecito son las más representativas, caracterizadas por su elegancia, el uso de pañuelos y un coqueteo constante entre las parejas. La música suele incluir guitarras y charangos.",
    dances: ["Cueca", "Bailecito", "Huayño"],
  },
  {
    title: "Danzas del Oriente y Chaco",
    content: "En el oriente y la región del Chaco, las danzas son alegres y de ritmo rápido, reflejando la calidez de su gente. El Taquirari y la Chacarera son ejemplos vibrantes, con zapateos y movimientos ágiles. Los trajes suelen ser más ligeros y coloridos, adaptados al clima tropical.",
    dances: ["Taquirari", "Chacarera", "Carnavalito"],
  },
  {
    title: "Danzas de la Amazonía",
    content: "Las danzas amazónicas están profundamente conectadas con la naturaleza y los ritos de las comunidades indígenas. Los Macheteros, por ejemplo, es una danza ceremonial que imita los movimientos de animales de la selva, utilizando plumajes y máscaras impresionantes para representar la fauna local.",
    dances: ["Macheteros", "Danza del Sol", "Tiri Tiri"],
  },
  {
    title: "Danzas de Tarija",
    content: "Tarija, en el sur de Bolivia, tiene una identidad cultural propia reflejada en su música y danza. La Rueda Chapaca es una danza grupal alegre y festiva, mientras que la Chacarera tarijeña tiene un estilo particular. El violín es un instrumento protagónico en su música.",
    dances: ["Rueda Chapaca", "Tonada", "Gato"],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-4">
      {danceRegions.map((region, index) => (
        <AccordionItem key={index} region={region} />
      ))}
    </div>
  );
}