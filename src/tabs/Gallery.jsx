import { useEffect, useState } from 'react';
import { ImageService } from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export const Gallery = () => {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [picturesData, setPicturesData] = useState([]);

  const handleSubmit = e => {
    if (e.currentTarget.elements.search.value === '') {
      alert('Please input correct query');
    }
    e.preventDefault();
    setQuery(e.currentTarget.elements.search.value);
    console.log(e.currentTarget.elements.search.value);
    e.target.reset();
  };

  const increasePageNumber = () => {
    setPage(page => page + 1);
    console.log(page);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    ImageService(query, page).then(data =>
      setPicturesData(prevValue => [...prevValue, ...data])
    );
  }, [query, page]);

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} />
      {picturesData && (
        <Grid>
          {picturesData &&
            picturesData.map(picture => (
              <GridItem key={picture.id}>
                <CardItem key={picture.id}>
                  <img src={picture.src.large} alt={picture.alt} />
                </CardItem>
              </GridItem>
            ))}
        </Grid>
      )}
      {!picturesData && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      {picturesData && (
        <Button onClick={() => increasePageNumber()}>Load more</Button>
      )}
    </>
  );
};
