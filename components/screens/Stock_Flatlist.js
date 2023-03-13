import { FlatList } from "react-native"
import { stock_list } from "../../data/flatListData";
import { StocksDetails } from "./StocksDetails"

function renderItem({ item }) {
  switch (item.type) {
    case "stock":
      return <StocksDetails/>;
    default:
      return null;
  }
}

export default function List() {
  return (
    <FlatList
      data={stock_list}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
    />
  );
}
