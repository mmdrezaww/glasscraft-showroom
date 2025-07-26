import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "تلفن تماس",
      info: "۰۲۱-۱۲۳۴۵۶۷۸",
      description: "پاسخگویی در ساعات اداری"
    },
    {
      icon: Mail,
      title: "ایمیل",
      info: "info@crystalglass.ir",
      description: "پاسخ در کمتر از ۲۴ ساعت"
    },
    {
      icon: MapPin,
      title: "آدرس",
      info: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
      description: "دفتر مرکزی و نمایشگاه"
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      info: "شنبه تا پنج‌شنبه ۸ صبح تا ۶ عصر",
      description: "پشتیبانی ۲۴ ساعته"
    }
  ];

  const offices = [
    {
      city: "تهران",
      address: "خیابان ولیعصر، پلاک ۱۲۳",
      phone: "۰۲۱-۱۲۳۴۵۶۷۸",
      isMain: true
    },
    {
      city: "اصفهان", 
      address: "خیابان چهارباغ عباسی، پلاک ۴۵",
      phone: "۰۳۱-۱۲۳۴۵۶۷۸",
      isMain: false
    },
    {
      city: "شیراز",
      address: "خیابان زند، پلاک ۶۷",
      phone: "۰۷۱-۱۲۳۴۵۶۷۸", 
      isMain: false
    },
    {
      city: "مشهد",
      address: "خیابان امام رضا، پلاک ۸۹",
      phone: "۰۵۱-۱۲۳۴۵۶۷۸",
      isMain: false
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Header Section */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با ما</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              برای دریافت مشاوره، سفارش یا هر گونه سوال با ما در تماس باشید
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <div className="text-primary font-medium mb-1">{contact.info}</div>
                  <div className="text-sm text-muted-foreground">{contact.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-glass-crystal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/80 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>فرم تماس</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <Input id="firstName" placeholder="نام خود را وارد کنید" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="ایمیل خود را وارد کنید" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تلفن</Label>
                  <Input id="phone" placeholder="شماره تلفن خود را وارد کنید" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">موضوع</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="موضوع پیام خود را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">مشاوره</SelectItem>
                      <SelectItem value="order">سفارش</SelectItem>
                      <SelectItem value="support">پشتیبانی</SelectItem>
                      <SelectItem value="complaint">شکایت</SelectItem>
                      <SelectItem value="other">سایر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">پیام</Label>
                  <Textarea 
                    id="message" 
                    placeholder="پیام خود را بنویسید..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <Send className="h-4 w-4 ml-2" />
                  ارسال پیام
                </Button>
              </CardContent>
            </Card>

            {/* Map & Quick Contact */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="bg-card/80 border-border/50">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-500">نقشه دفتر مرکزی</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-card/80 border-border/50">
                <CardHeader>
                  <CardTitle>تماس سریع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-glass-light/30 rounded-lg">
                    <div>
                      <div className="font-medium">تماس تلفنی</div>
                      <div className="text-sm text-muted-foreground">مشاوره رایگان</div>
                    </div>
                    <Button size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-glass-light/30 rounded-lg">
                    <div>
                      <div className="font-medium">ایمیل</div>
                      <div className="text-sm text-muted-foreground">پاسخ سریع</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-glass-light/30 rounded-lg">
                    <div>
                      <div className="font-medium">بازدید حضوری</div>
                      <div className="text-sm text-muted-foreground">نمایشگاه و دفتر</div>
                    </div>
                    <Button size="sm" variant="outline">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">دفاتر ما</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              دفاتر فروش و خدمات ما در سراسر کشور
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className={`border-border/50 hover:border-primary/50 transition-colors ${office.isMain ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 space-x-reverse mb-4">
                    <h3 className="font-semibold text-lg">{office.city}</h3>
                    {office.isMain && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">دفتر مرکزی</span>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <MapPin className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm text-muted-foreground">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{office.phone}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    مسیریابی
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">سوالات متداول</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              پاسخ سوالات رایج مشتریان
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">چه مدت زمان برای تحویل سفارش نیاز است؟</h3>
                <p className="text-muted-foreground text-sm">
                  زمان تحویل بسته به نوع محصول و پیچیدگی سفارش بین ۳ تا ۱۴ روز کاری متغیر است.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">آیا خدمات نصب ارائه می‌دهید؟</h3>
                <p className="text-muted-foreground text-sm">
                  بله، تیم متخصص ما آماده نصب حرفه‌ای محصولات در محل مورد نظر شما است.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">ضمانت محصولات چقدر است؟</h3>
                <p className="text-muted-foreground text-sm">
                  کلیه محصولات ما دارای ضمانت کیفیت و خدمات پس از فروش هستند.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/80 border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">آیا امکان سفارش با ابعاد خاص وجود دارد؟</h3>
                <p className="text-muted-foreground text-sm">
                  بله، امکان تولید شیشه با ابعاد و مشخصات سفارشی فراهم است.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;