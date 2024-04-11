const ListIpaRed = ({ redAndIPA }) => {
  const redCount = redAndIPA.filter((beer) => beer.beerStyle === "Red").length;
  const ipaCount = redAndIPA.filter((beer) => beer.beerStyle === "IPA").length;

  return (
    <>
      <h2>Cantidad de Cervezas IPA y Red</h2>
      <ul>
        <li>{redCount + ipaCount}</li>
      </ul>
    </>
  );
};

export default ListIpaRed;
