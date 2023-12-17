import getCategory from "@/actions/get_category";
import getColors from "@/actions/get_colors";
import getProducts from "@/actions/get_products";
import getSizes from "@/actions/get_sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/no_results";
import ProductCard from "@/components/ui/product_card";
import MobileFilter from "./components/mobile_filters";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard
          data={ category.billboard }
        />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <MobileFilter size={ sizes } color={ colors } />
          <div className="hidden lg:block">
            <Filter
              valueKey="sizeId" 
              name="Sizes" 
              data={ sizes }
            />
            <Filter 
              valueKey="colorId" 
              name="Colors" 
              data={ colors }
            />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            { products.length === 0 && <NoResults /> }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              { products.map(product => (
                <ProductCard
                  key={ product.id }
                  data={ product }
                />
              )) }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;