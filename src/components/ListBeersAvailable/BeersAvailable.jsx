const BeersAvailable = ({ beers }) => {
  const pesoArgentino = 1000;
  return (
    <>
      <hr />
      <h2>Lista de Cervezas Disponibles</h2>
      <ul>
        {beers
          .filter((beers) => beers.available)
          .map((beer) => (
            <li key={beer.id}>
              Nombre: {beer.beerName} - {beer.beerStyle} | Precio:{" "}
              {beer.price * pesoArgentino}
            </li>
          ))}
      </ul>
    </>
  );
};

export default BeersAvailable;
