import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <div className="">
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard id={1} name="Pizza" price={12} imageUrl="/cards/pizza.png"/> */}
              <ProductsGroupList
                title="Pizzas"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Pizza",
                    price: 12,
                    imageUrl: "/cards/pizza.png",
                    items: [{ price: 12 }],
                  },
                  {
                    id: 2,
                    name: "Pizza",
                    price: 12,
                    imageUrl: "/cards/pizza.png",
                    items: [{ price: 12 }],
                  },
                  {
                    id: 3,
                    name: "Pizza",
                    price: 12,
                    imageUrl: "/cards/pizza.png",
                    items: [{ price: 12 }],
                  },
                  {
                    id: 4,
                    name: "Pizza",
                    price: 12,
                    imageUrl: "/cards/pizza.png",
                    items: [{ price: 12 }],
                  },
                  {
                    id: 5,
                    name: "Pizza",
                    price: 12,
                    imageUrl: "/cards/pizza.png",
                    items: [{ price: 12 }],
                  },
                ]}
              />
              {/* <ProductGroupList title={'Pizzas'} items={[1,2,3,4,5]}/>
              <ProductGroupList title={'Combos'} items={[1,2,3,4,5]}/> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
