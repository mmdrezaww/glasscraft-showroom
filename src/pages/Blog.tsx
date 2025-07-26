import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "راهنمای کامل انتخاب شیشه مناسب برای خانه",
    excerpt: "در این مقاله به بررسی انواع شیشه و کاربردهای مختلف آن‌ها در فضاهای مسکونی می‌پردازیم.",
    image: "/api/placeholder/800/400",
    author: "تیم فنی کریستال گلاس",
    date: "۱۴۰۳/۰۸/۲۰",
    readTime: "۸ دقیقه",
    category: "راهنما",
    views: 1245
  };

  const blogPosts = [
    {
      id: 2,
      title: "مزایا و کاربردهای شیشه هوشمند در ساختمان‌های مدرن",
      excerpt: "شیشه هوشمند یکی از فناوری‌های نوین در صنعت ساختمان است که امکانات فوق‌العاده‌ای ارائه می‌دهد.",
      image: "/api/placeholder/400/250",
      author: "مهندس احمدی",
      date: "۱۴۰۳/۰۸/۱۸",
      readTime: "۶ دقیقه",
      category: "فناوری",
      views: 892
    },
    {
      id: 3,
      title: "نکات ایمنی در نصب و استفاده از شیشه سکوریت",
      excerpt: "رعایت نکات ایمنی در نصب شیشه سکوریت برای جلوگیری از حوادث احتمالی ضروری است.",
      image: "/api/placeholder/400/250",
      author: "تیم نصب",
      date: "۱۴۰۳/۰۸/۱۵",
      readTime: "۵ دقیقه",
      category: "ایمنی",
      views: 654
    },
    {
      id: 4,
      title: "تاریخچه و تحول صنعت شیشه در ایران",
      excerpt: "نگاهی به روند تحول صنعت شیشه در ایران از گذشته تا امروز و چشم‌انداز آینده.",
      image: "/api/placeholder/400/250",
      author: "دکتر رضایی",
      date: "۱۴۰۳/۰۸/۱۲",
      readTime: "۱۰ دقیقه",
      category: "تاریخ",
      views: 423
    },
    {
      id: 5,
      title: "مقایسه انواع شیشه: لمینت، سکوریت و دابل گلیزینگ",
      excerpt: "بررسی تطبیقی انواع مختلف شیشه و مزایا و معایب هر کدام برای کاربردهای مختلف.",
      image: "/api/placeholder/400/250",
      author: "مشاور فنی",
      date: "۱۴۰۳/۰۸/۱۰",
      readTime: "۷ دقیقه",
      category: "مقایسه",
      views: 1156
    },
    {
      id: 6,
      title: "نگهداری و تمیز کردن انواع شیشه",
      excerpt: "روش‌های صحیح نگهداری و تمیز کردن انواع مختلف شیشه برای حفظ کیفیت و شفافیت.",
      image: "/api/placeholder/400/250",
      author: "تیم خدمات",
      date: "۱۴۰۳/۰۸/۰۸",
      readTime: "۴ دقیقه",
      category: "نگهداری",
      views: 789
    },
    {
      id: 7,
      title: "شیشه‌های انرژی‌بر و نقش آن‌ها در ساختمان‌های سبز",
      excerpt: "بررسی نقش شیشه‌های انرژی‌بر در کاهش مصرف انرژی و ایجاد ساختمان‌های پایدار.",
      image: "/api/placeholder/400/250",
      author: "مهندس محیط زیست",
      date: "۱۴۰۳/۰۸/۰۵",
      readTime: "۹ دقیقه",
      category: "محیط زیست",
      views: 567
    }
  ];

  const categories = [
    { name: "راهنما", count: 12 },
    { name: "فناوری", count: 8 },
    { name: "ایمنی", count: 6 },
    { name: "نگهداری", count: 4 },
    { name: "مقایسه", count: 5 },
    { name: "محیط زیست", count: 3 }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "راهنما": "bg-blue-100 text-blue-800",
      "فناوری": "bg-purple-100 text-purple-800",
      "ایمنی": "bg-red-100 text-red-800",
      "نگهداری": "bg-green-100 text-green-800",
      "مقایسه": "bg-yellow-100 text-yellow-800",
      "محیط زیست": "bg-emerald-100 text-emerald-800",
      "تاریخ": "bg-gray-100 text-gray-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-glass-light/30">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">وبلاگ و اخبار</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              آخرین اخبار، راهنماها و مطالب آموزشی در زمینه صنعت شیشه
            </p>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            <Card className="overflow-hidden border-border/50">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <Badge 
                  className={`absolute top-4 right-4 ${getCategoryColor(featuredPost.category)}`}
                >
                  {featuredPost.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link to={`/blog/${featuredPost.id}`}>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`}>
                  <Button variant="outline">
                    ادامه مطلب
                    <ArrowLeft className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge 
                      className={`absolute top-3 right-3 text-xs ${getCategoryColor(post.category)}`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-xs">
                          بیشتر
                          <ArrowLeft className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex space-x-2 space-x-reverse">
                <Button variant="outline" size="sm">قبلی</Button>
                <Button variant="default" size="sm">۱</Button>
                <Button variant="outline" size="sm">۲</Button>
                <Button variant="outline" size="sm">۳</Button>
                <Button variant="outline" size="sm">بعدی</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">دسته‌بندی‌ها</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer transition-colors">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">مطالب اخیر</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="flex space-x-3 space-x-reverse">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors">
                          <Link to={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center space-x-2 space-x-reverse text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-border/50 bg-glass-light/30">
              <CardHeader>
                <CardTitle className="text-lg">خبرنامه</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  برای دریافت آخرین اخبار و مطالب عضو خبرنامه شوید
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="ایمیل خود را وارد کنید"
                    className="w-full px-3 py-2 border border-border rounded text-sm"
                  />
                  <Button className="w-full" size="sm">
                    عضویت در خبرنامه
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;