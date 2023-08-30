import OpacityContent from "~/components/animated/opacity";
import Title from "~/components/title";
import EquipmentItem from "~/components/equipments/item";
import { getEquipments } from "~/services/equipments";
import { useQuery } from "@tanstack/react-query";
import ContentLoader from "react-content-loader";

const Equipments = () => {
  const { data, isLoading } = useQuery(["equipments"], () => getEquipments());

  return (
    <OpacityContent className="container mx-auto px-5 pt-16">
      <Title
        title="Ekipmanlar"
        description="Yazılım ve oyun konforumu arttırmak için satın aldığım ekipmanlar. Daha da eklemeler yapmayı planlıyorum."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        {isLoading &&
          [...Array(5)].map((i) => (
            <ContentLoader
              style={{ borderRadius: 5 }}
              width={"100%"}
              height={"50vh"}
              key={i}
            >
              <rect width="100%" height="100%" />
            </ContentLoader>
          ))}
        {!isLoading &&
          data.map((item) => <EquipmentItem key={item.id} item={item} />)}
      </div>
    </OpacityContent>
  );
};

export default Equipments;
