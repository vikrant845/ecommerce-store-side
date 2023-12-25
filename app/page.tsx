import getBillboard from "@/actions/get_billboard";
import getProducts from "@/actions/get_products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product_list";
import ProjectInfoModal from "@/components/project_info_modal";
import Container from "@/components/ui/container";

export default async function Home() {
  const billboard = await getBillboard('657adb79371724d805b7e451');
  const products = await getProducts({});
  
  return (
    <Container>
      <ProjectInfoModal />
      <div className="space-y-10 pb-10">
        <Billboard data={ billboard } />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
