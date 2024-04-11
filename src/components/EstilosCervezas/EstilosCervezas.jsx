const EstilosCervezas = ({ beers }) => {
  return (
    <>
      <h2>Estilos de Cervezas</h2>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>Estilos: {beer.beerStyle}</li>
        ))}
      </ul>
    </>
  );
};

export default EstilosCervezas;
