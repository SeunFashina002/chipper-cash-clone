import { FlatList } from "react-native"
import { mock_list } from "../data/flatListData"
import { Transactions } from "./Transactions"
import { Hero } from "./Hero"






function renderItem({ item }) {
  switch (item.type) {
    case "hero":
      return <Hero/>;
    case "transaction":
        return <Transactions />;
      default:
        return null;
  }
}

export default function List() {
  return (
    <FlatList
      data={mock_list}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
    />
  );
}
