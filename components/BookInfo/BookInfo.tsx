import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const BOOK_DETAILS = gql`
  {
    book {
      name
      author
    }
  }
`;

const BookInfo = () => {
  const { loading, error, data } = useQuery(BOOK_DETAILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <p>
        {data.book.name} - {data.book.author}
      </p>
    </div>
  );
};

export default BookInfo;
