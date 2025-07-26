import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Grid, List } from "lucide-react";
import temperedGlass from "@/assets/tempered-glass.jpg";
import laminatedGlass from "@/assets/laminated-glass.jpg";
import decorativeGlass from "@/assets/decorative-glass.jpg";
import smartGlass from "@/assets/smart-glass.jpg";

const Products = () => {
  const allProducts = [
    {
      title: "شیشه سکوریت ۸ میل",
      description: "شیشه سکوریت با ضخامت ۸ میلی‌متر، مناسب برای درب و پنجره",
      image: temperedGlass,
      price: "۲۵۰,۰۰۰ تومان",
      features: ["مقاومت بالا", "ایمنی استاندارد", "برش سفارشی"],
      category: "سکوریت"
    },
    {
      title: "شیشه سکوریت ۱۰ میل",
      description: "شیشه سکوریت ضخیم برای کاربردهای سنگین",
      image: temperedGlass,
      price: "۳۲۰,۰۰۰ تومان",
      features: ["مقاومت فوق‌العاده", "ضد ضربه", "طول عمر بالا"],
      category: "سکوریت"
    },
    {
      title: "شیشه لمینت شفاف",
      description: "شیشه لمینت با لایه میانی شفاف برای ایمنی بالا",
      image: laminatedGlass,
      price: "۴۵۰,۰۰۰ تومان",
      features: ["ضد سرقت", "کاهش صدا", "محافظت UV"],
      category: "لمینت"
    },
    {
      title: "شیشه لمینت رنگی",
      description: "شیشه لمینت با رنگ‌های مختلف برای طراحی داخلی",
      image: laminatedGlass,
      price: "۵۲۰,۰۰۰ تومان",
      features: ["انواع رنگ", "طراحی زیبا", "کیفیت بالا"],
      category: "لمینت"
    },
    {
      title: "شیشه دکوراتیو کلاسیک",
      description: "طرح‌های سنتی و کلاسیک برای دکوراسیون داخلی",
      image: decorativeGlass,
      price: "۶۸۰,۰۰۰ تومان",
      features: ["طرح دست‌ساز", "کیفیت هنری", "منحصر به فرد"],
      category: "دکوراتیو"
    },
    {
      title: "شیشه دکوراتیو مدرن",
      description: "طراحی‌های مدرن و معاصر برای فضاهای امروزی",
      image: decorativeGlass,
      price: "۷۵۰,۰۰۰ تومان",
      features: ["طراحی مدرن", "تکنیک پیشرفته", "ظاهر لوکس"],
      category: "دکوراتیو"
    },
    {
      title: "شیشه هوشمند الکتروکرومیک",
      description: "تغییر شفافیت با کنترل الکترونیکی و ریموت",
      image: smartGlass,
      price: "۲,۵۰۰,۰۰۰ تومان",
      features: ["کنترل از راه دور", "صرفه‌جویی انرژی", "فناوری روز"],
      category: "هوشمند"
    },
    {
      title: "شیشه هوشمند حرارتی",
      description: "تغییر شفافیت بر اساس دمای محیط",
      image: smartGlass,
      price: "۱,۸۰۰,۰۰۰ تومان",
      features: ["کنترل حرارتی", "خودکار", "انرژی صفر"],
      category: "هوشمند"
    }
  ];

  const categories = [
    { value: "all", label: "همه محصولات" },
    { value: "سکوریت", label: "شیشه سکوریت" },
    { value: "لمینت", label: "شیشه لمینت" },
    { value: "دکوراتیو", label: "شیشه دکوراتیو" },
    { value: "هوشمند", label: "شیشه هوشمند" }
  ];

  return (
    <>
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">محصولات ما</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مجموعه کاملی از انواع شیشه با کیفیت بالا و قیمت مناسب برای تمام نیازهای شما
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            {/* Category Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <TabsList className="grid w-full sm:w-auto grid-cols-2 sm:grid-cols-5 h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="text-sm px-4 py-2"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 ml-2" />
                  فیلتر
                </Button>
                <Button variant="outline" size="sm">
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* All Products */}
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    features={product.features}
                    category={product.category}
                  />
                ))}
              </div>
            </TabsContent>

            {/* Category Specific Products */}
            {categories.slice(1).map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {allProducts
                    .filter((product) => product.category === category.value)
                    .map((product, index) => (
                      <ProductCard
                        key={index}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        features={product.features}
                        category={product.category}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-glass-crystal">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">مزایای خرید از ما</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              چرا ما را برای خرید شیشه انتخاب کنید؟
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-card/50 border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-2xl font-bold text-primary mb-2">ضمانت کیفیت</div>
                <p className="text-muted-foreground text-sm">تضمین کیفیت تمام محصولات</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-2xl font-bold text-primary mb-2">قیمت مناسب</div>
                <p className="text-muted-foreground text-sm">قیمت‌های رقابتی و منصفانه</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-2xl font-bold text-primary mb-2">تحویل سریع</div>
                <p className="text-muted-foreground text-sm">تحویل در کمترین زمان ممکن</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-card/50 border-border/50">
              <CardContent className="pt-8 pb-8">
                <div className="text-2xl font-bold text-primary mb-2">مشاوره رایگان</div>
                <p className="text-muted-foreground text-sm">مشاوره تخصصی برای انتخاب</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;