import ListItem from "./listItem";

const List = ({ data, onListItemClick }) => {
  return (
    <>
      {data.map((movie) => (
        <ListItem
          key={movie.id}
          data={movie}
          onListItemClick={onListItemClick}
        />
      ))}
    </>
  );
};

export default List;
