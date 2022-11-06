import Row from "../components/Row";
import categories from "../data/api";

const MultipleRows = () => {
  return (
    <div className="flex flex-col gap-6">
      {categories.map((categorie) => (
        <Row
          key={categorie.name}
          title={categorie.title}
          path={categorie.path}
        ></Row>
      ))}
    </div>
  );
};

export default MultipleRows;
