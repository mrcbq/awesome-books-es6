const Books = JSON.parse(localStorage.getItem('Books')) ?? [
  {
    id: 0,
    title: 'El coronel no tiene quien le escriba',
    author: 'Gabriel Garcia Marquez',
  },
];

export default Books;
