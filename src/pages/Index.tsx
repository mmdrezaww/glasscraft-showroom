import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ProductCard from "@/components/product-card";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Star, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-glass.jpg";
import temperedGlass from "@/assets/tempered-glass.jpg";
import laminatedGlass from "@/assets/laminated-glass.jpg";
import decorativeGlass from "@/assets/decorative-glass.jpg";
import smartGlass from "@/assets/smart-glass.jpg";

const Index = () => {
  const featuredProducts = [
    {
      title: "شیشه سکوریت",
      description: "شیشه‌ای با مقاومت بالا در برابر ضربه و تغییرات دما",
      image: temperedGlass,
      price: "تماس بگیرید",
      features: ["مقاومت ۵ برابر بیشتر", "ایمنی بالا", "قابلیت برش سفارشی"],
      category: "ایمنی"
    },
    {
      title: "شیشه لمینت",
      description: "شیشه چند لایه با قابلیت حفاظت در برابر شکستگی",
      image: laminatedGlass,
      price: "تماس بگیرید", 
      features: ["ضد سرقت", "عایق صوتی", "محافظت UV"],
      category: "امنیت"
    },
    {
      title: "شیشه دکوراتیو",
      description: "طراحی‌های هنری و تزئینی برای فضاهای خاص",
      image: decorativeGlass,
      price: "تماس بگیرید",
      features: ["طراحی سفارشی", "رنگ‌های متنوع", "کیفیت هنری"],
      category: "تزئینی"
    },
    {
      title: "شیشه هوشمند",
      description: "فناوری پیشرفته تغییر شفافیت با کنترل الکترونیکی",
      image: smartGlass,
      price: "تماس بگیرید",
      features: ["کنترل هوشمند", "صرفه‌جویی انرژی", "حریم خصوصی"],
      category: "هوشمند"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "مشاوره تخصصی",
      description: "ارائه مشاوره رایگان برای انتخاب بهترین نوع شیشه"
    },
    {
      icon: Zap,
      title: "نصب و راه‌اندازی",
      description: "نصب حرفه‌ای توسط تیم متخصص با ضمانت کیفیت"
    },
    {
      icon: CheckCircle,
      title: "پشتیبانی دائمی",
      description: "خدمات پس از فروش و نگهداری تجهیزات"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40"></div>
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            کریستال
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glass-DEFAULT to-glass-deep"> گلاس</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ارائه دهنده محصولات شیشه‌ای با کیفیت بالا و فناوری روز دنیا برای پروژه‌های ساختمانی و صنعتی
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-8">
                مشاهده محصولات
                <ArrowLeft className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                درخواست مشاوره
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">چرا کریستال گلاس؟</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              با بیش از ۱۵ سال تجربه در صنعت شیشه، کیفیت و اعتماد را در اولویت قرار داده‌ایم
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">محصولات ویژه</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              انواع شیشه با کیفیت بالا و فناوری پیشرفته برای پاسخگویی به نیازهای شما
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
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
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                مشاهده همه محصولات
                <ArrowLeft className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-glass-crystal">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۱۵+</div>
              <div className="text-muted-foreground">سال تجربه</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۵۰۰+</div>
              <div className="text-muted-foreground">پروژه موفق</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۱۰۰+</div>
              <div className="text-muted-foreground">مشتری راضی</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">۲۴/۷</div>
              <div className="text-muted-foreground">پشتیبانی</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-glass-deep/10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">آماده شروع پروژه هستید؟</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            تیم ما آماده ارائه بهترین راه‌حل‌های شیشه‌ای برای پروژه شما است
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8">
                درخواست مشاوره رایگان
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8">
                تماس با ما
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
