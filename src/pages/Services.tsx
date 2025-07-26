import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Users, Phone, Settings } from "lucide-react";
import installationImage from "@/assets/installation-service.jpg";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "مشاوره تخصصی",
      description: "ارائه مشاوره رایگان برای انتخاب بهترین نوع شیشه متناسب با پروژه شما",
      features: [
        "بررسی نیازهای پروژه",
        "پیشنهاد بهترین نوع شیشه",
        "محاسبه هزینه و زمان اجرا",
        "طراحی اولیه رایگان"
      ],
      price: "رایگان"
    },
    {
      icon: Settings,
      title: "طراحی و ساخت سفارشی",
      description: "طراحی و تولید شیشه‌های سفارشی با ابعاد و مشخصات دلخواه شما",
      features: [
        "طراحی منحصر به فرد",
        "برش و شکل‌دهی سفارشی",
        "انواع پردازش سطح",
        "کنترل کیفیت دقیق"
      ],
      price: "بر اساس پروژه"
    },
    {
      icon: Zap,
      title: "نصب و راه‌اندازی",
      description: "نصب حرفه‌ای شیشه توسط تیم متخصص با ضمانت کیفیت و ایمنی",
      features: [
        "نصب توسط متخصصین",
        "رعایت استانداردهای ایمنی",
        "ضمانت نصب",
        "خدمات پس از نصب"
      ],
      price: "۵۰,۰۰۰ تومان به بالا"
    },
    {
      icon: Shield,
      title: "تعمیر و نگهداری",
      description: "خدمات تعمیر، تعویض و نگهداری شیشه‌های نصب شده",
      features: [
        "تعمیر شیشه‌های شکسته",
        "تعویض قطعات فرسوده",
        "سرویس دوره‌ای",
        "پشتیبانی ۲۴ ساعته"
      ],
      price: "۳۰,۰۰۰ تومان به بالا"
    },
    {
      icon: CheckCircle,
      title: "بازرسی و ارزیابی",
      description: "بررسی وضعیت شیشه‌های موجود و ارائه گزارش تخصصی",
      features: [
        "بازرسی فنی دقیق",
        "گزارش کتبی وضعیت",
        "پیشنهادات بهبود",
        "برآورد هزینه تعمیرات"
      ],
      price: "۱۰۰,۰۰۰ تومان"
    },
    {
      icon: Phone,
      title: "پشتیبانی ۲۴/۷",
      description: "خدمات پشتیبانی و اورژانس در تمام ساعات شبانه‌روز",
      features: [
        "پاسخگویی ۲۴ ساعته",
        "خدمات اورژانسی",
        "مشاوره تلفنی",
        "هماهنگی سریع تعمیرات"
      ],
      price: "رایگان برای مشتریان"
    }
  ];

  const workProcess = [
    {
      step: "۱",
      title: "تماس و مشاوره",
      description: "تماس با تیم مشاوره برای بررسی نیازهای شما"
    },
    {
      step: "۲", 
      title: "بازدید و اندازه‌گیری",
      description: "بازدید حضوری و اندازه‌گیری دقیق محل نصب"
    },
    {
      step: "۳",
      title: "ارائه پیشنهاد",
      description: "ارائه پیشنهاد نهایی با جزئیات فنی و هزینه"
    },
    {
      step: "۴",
      title: "تولید و آماده‌سازی",
      description: "تولید و آماده‌سازی محصولات مطابق سفارش"
    },
    {
      step: "۵",
      title: "نصب و تحویل",
      description: "نصب حرفه‌ای و تحویل پروژه با ضمانت"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">خدمات ما</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مجموعه کاملی از خدمات تخصصی شیشه از مشاوره تا نصب و پشتیبانی
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <div className="text-sm text-primary font-medium">{service.price}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-6" variant="outline">
                    درخواست خدمات
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-glass-crystal">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">فرآیند کار ما</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              مراحل انجام پروژه از ابتدا تا پایان
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  {index < workProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Image Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                نصب حرفه‌ای توسط متخصصین
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                تیم ما از متخصصین مجرب تشکیل شده که با دانش فنی روز و تجهیزات مدرن، 
                بهترین کیفیت نصب را برای شما تضمین می‌کنند.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>رعایت استانداردهای ایمنی</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>استفاده از ابزار و تجهیزات مدرن</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>ضمانت کیفیت نصب</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>خدمات پس از نصب</span>
                </div>
              </div>
              
              <Button size="lg" className="text-lg px-8">
                درخواست بازدید رایگان
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={installationImage} 
                alt="نصب شیشه توسط متخصصین"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-glass-deep/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">نیاز به مشاوره دارید؟</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            متخصصین ما آماده ارائه مشاوره رایگان و بررسی پروژه شما هستند
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              تماس برای مشاوره
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              درخواست بازدید
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;