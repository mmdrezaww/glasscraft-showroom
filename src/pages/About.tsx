import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Star, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Clock,
      number: "۱۵+",
      label: "سال تجربه",
      description: "در صنعت شیشه"
    },
    {
      icon: Users,
      number: "۵۰۰+",
      label: "پروژه موفق",
      description: "در سراسر کشور"
    },
    {
      icon: Award,
      number: "۱۰۰+",
      label: "مشتری راضی",
      description: "از خدمات ما"
    },
    {
      icon: Star,
      number: "۲۴/۷",
      label: "پشتیبانی",
      description: "در تمام ساعات"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "کیفیت",
      description: "استفاده از بهترین مواد اولیه و فناوری روز دنیا برای تولید محصولات با کیفیت"
    },
    {
      icon: Heart,
      title: "اعتماد",
      description: "ایجاد روابط بلندمدت با مشتریان بر اساس صداقت و شفافیت"
    },
    {
      icon: Eye,
      title: "نوآوری",
      description: "پیگیری آخرین فناوری‌ها و ارائه راه‌حل‌های خلاقانه"
    }
  ];

  const team = [
    {
      name: "محمد احمدی",
      position: "مدیر عامل",
      description: "بیش از ۲۰ سال تجربه در صنعت شیشه",
      image: "/api/placeholder/300/300"
    },
    {
      name: "علی رضایی",
      position: "مدیر فنی",
      description: "متخصص طراحی و تولید شیشه‌های صنعتی",
      image: "/api/placeholder/300/300"
    },
    {
      name: "زهرا کریمی",
      position: "مدیر فروش",
      description: "کارشناس ارشد مشاوره و فروش",
      image: "/api/placeholder/300/300"
    },
    {
      name: "حسن نوری",
      position: "مدیر نصب",
      description: "سرپرست تیم نصب و اجرای پروژه‌ها",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">درباره کریستال گلاس</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              پیشرو در تولید و ارائه انواع شیشه با کیفیت بالا و خدمات تخصصی
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">داستان ما</h2>
              <p className="text-muted-foreground text-lg mb-6">
                کریستال گلاس در سال ۱۳۸۸ با هدف ارائه محصولات شیشه‌ای با کیفیت و خدمات تخصصی 
                در ایران تأسیس شد. از همان ابتدا، ما بر کیفیت، نوآوری و رضایت مشتری تمرکز کرده‌ایم.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                طی این سال‌ها، موفق به اجرای بیش از ۵۰۰ پروژه موفق در سراسر کشور شده‌ایم و 
                امروز به عنوان یکی از پیشروان صنعت شیشه در ایران شناخته می‌شویم.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                تیم ما متشکل از متخصصین مجرب و کارآمد است که با استفاده از فناوری‌های روز دنیا 
                و رعایت استانداردهای بین‌المللی، بهترین خدمات را ارائه می‌دهند.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-glass-crystal border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">۱۳۸۸</div>
                    <div className="text-sm text-muted-foreground">سال تأسیس</div>
                  </CardContent>
                </Card>
                <Card className="bg-glass-crystal border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">۵۰+</div>
                    <div className="text-sm text-muted-foreground">کارمند متخصص</div>
                  </CardContent>
                </Card>
                <Card className="bg-glass-crystal border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">۱۰۰+</div>
                    <div className="text-sm text-muted-foreground">نوع محصول</div>
                  </CardContent>
                </Card>
                <Card className="bg-glass-crystal border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">۵ شهر</div>
                    <div className="text-sm text-muted-foreground">دفتر فروش</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-glass-crystal">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">آمار و ارقام</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نگاهی به دستاوردهای ما در طول سال‌های فعالیت
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-card/50 border-border/50">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ارزش‌های ما</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              اصول و ارزش‌هایی که راهنمای فعالیت ما هستند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 space-x-reverse mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">ماموریت ما</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  ارائه محصولات شیشه‌ای با کیفیت بالا و خدمات تخصصی برای تمام نیازهای 
                  ساختمانی و صنعتی، با هدف ایجاد فضاهای زیبا، ایمن و کارآمد برای مشتریان.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 space-x-reverse mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">چشم‌انداز ما</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  تبدیل شدن به پیشرو و مرجع اصلی صنعت شیشه در ایران و منطقه، با تکیه بر 
                  نوآوری، کیفیت و رضایت مشتریان در تمام فعالیت‌ها.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">تیم ما</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              متخصصین مجرب و کارآمد که پشتوانه موفقیت‌های ما هستند
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-medium mb-3">{member.position}</div>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-glass-deep/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">بیایید با هم کار کنیم</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            آماده همکاری با شما برای ایجاد بهترین راه‌حل‌های شیشه‌ای هستیم
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              شروع همکاری
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              بیشتر بدانید
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;