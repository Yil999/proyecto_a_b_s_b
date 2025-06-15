import { useState } from "react";
import Modal from "../components/Modal.jsx";

const courses = [
  {
    id: 1,
    title: "Curso Intensivo de Cueca ",
    description: "Aprende los pasos, el zapateo y el elegante manejo del pañuelo en la danza nacional de Bolivia. Ideal para principiantes y eventos sociales.",
    image: "https://www.cochabamba.bo/img/noticias/l6W6h0WBcUtdPGUg83w3TrFidrETiCHqjDmwCO5i.jpeg",
    price: "450 Bs.",
  },
  {
    id: 2,
    title: "Taller de Caporales",
    description: "Siente la fuerza y energía de los Caporales. Este taller se enfoca en la coordinación, el ritmo y los movimientos acrobáticos característicos.",
    image: "https://i.pinimg.com/736x/0b/fa/96/0bfa966e6ce38ce915a2357affd230c0.jpg",
    price: "500 Bs.",
  },
  {
    id: 3,
    title: "Seminario de Danzas del Oriente",
    description: "Explora la alegría del Taquirari y el Carnavalito. Un curso dinámico para aprender los ritmos tropicales y la expresión corporal festiva.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcsylp_ohnhnaJ4Xy4l-neT8nBMbZb__AKMWyamoxfujUnFitk0ZNAf4cn3ORmhq8OZw&usqp=CAU",
    price: "400 Bs.",
  },
];

export default function CoursesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("");

  const openModal = (price) => {
    setSelectedPrice(price);
    setModalOpen(true);
  };

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.id} className="flex bg-white rounded shadow p-4">
          <img src={course.image} alt={course.title} className="w-1/3 rounded" />
          <div className="ml-4">
            <h3 className="text-xl font-bold text-blue-800">{course.title}</h3>
            <p className="mb-2">{course.description}</p>
            <button
              onClick={() => openModal(course.price)}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Ver precio
            </button>
          </div>
        </div>
      ))}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} price={selectedPrice} />
    </div>
  );
}