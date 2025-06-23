import Cars from "@/app/components/cars/Cars";
import { ListType } from "@/common/enums/list-type.enum";

export default function CarsPage() {
  return <Cars listType={ListType.List} />
}
