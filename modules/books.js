const Books = JSON.parse(localStorage.getItem('Books')) ?? [
  {
    id: 0,
    title: 'El coronel no tiene quien le escriba',
    author: 'Gabriel Garcia Marquez',
  },
  {
    id: 1,
    title: 'El amor en los tiempos del colera',
    author: 'Gabriel Garcia Marquez',
  },
  {
    id: 2,
    title: 'Cien anhos de soledad',
    author: 'Gabriel Garcia Marquez',
  },
];

export default Books;
