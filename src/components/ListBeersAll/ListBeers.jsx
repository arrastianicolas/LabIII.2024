const ListBeer = ({ beers }) => {
  const pesosArgentinos = 1000; // Tasa de cambio USD a ARS
  return (
    <div>
      <h2>Lista de Cervezas</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            Nombre: {beer.beerName} - {beer.beerStyle} | Precio:$
            {beer.price * pesosArgentinos} ARS | Disponible:
            {beer.available ? "Sí" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBeer;
