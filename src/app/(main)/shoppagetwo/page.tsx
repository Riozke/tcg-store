import { ShopPageTwo } from "@/components/pages/shop-pages/ShopPageTwo";
import { SearchParams } from "@/types/types";

export default function ShoppageTwoWrapper({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return <ShopPageTwo searchParams={searchParams} />;
}
