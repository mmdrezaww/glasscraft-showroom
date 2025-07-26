import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Star, Heart, Share2, Minus, Plus, ShoppingCart, Shield, Truck, RotateCcw, Award } from "lucide-react";
import { useState } from "react";
import temperedGlass from "@/assets/tempered-glass.jpg";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    id: 1,
    title: "شیشه سکوریت ۸ میلی‌متر",
    category: "شیشه سکوریت",
    price: "۲۵۰,۰۰۰",
    originalPrice: "۳۰۰,۰۰۰",
    rating: 4.8,
    reviewCount: 156,
    stock: 25,
    sku: "SG-8MM-001",
    images: [temperedGlass, temperedGlass, temperedGlass, temperedGlass],
    description: "شیشه سکوریت با ضخامت ۸ میلی‌متر، مناسب برای درب و پنجره‌های ساختمانی. این محصول با استفاده از فناوری روز دنیا تولید شده و دارای استحکام بالا و ایمنی فوق‌العاده است.",
    features: [
      "مقاومت ۵ برابر بیشتر از شیشه معمولی",
      "ضد ضربه و شکست",
      "قابلیت برش سفارشی تا ابعاد ۳ × ۲ متر",
      "استاندارد CE و ISO",
      "مناسب برای فضاهای داخلی و خارجی",
      "قابلیت بازیافت ۱۰۰٪"
    ],
    specifications: {
      "ضخامت": "۸ میلی‌متر",
      "حداکثر ابعاد": "۳۰۰ × ۲۰۰ سانتی‌متر",
      "وزن": "۲۰ کیلوگرم بر متر مربع",
      "مقاومت حرارتی": "تا ۲۵۰ درجه سانتی‌گراد",
      "استاندارد": "EN 12150-1",
      "گارانتی": "۵ سال"
    },
    applications: [
      "درب و پنجره ساختمان",
      "نمای شیشه‌ای",
      "پارتیشن اداری", 
      "کابینت آشپزخانه",
      "میز شیشه‌ای",
      "دیوار پرده"
    ]
  };

  const relatedProducts = [
    {
      title: "شیشه سکوریت ۱۰ میل",
      price: "۳۲۰,۰۰۰ تومان",
      image: temperedGlass,
      rating: 4.9
    },
    {
      title: "شیشه سکوریت ۶ میل", 
      price: "۱۸۰,۰۰۰ تومان",
      image: temperedGlass,
      rating: 4.7
    },
    {
      title: "شیشه سکوریت ۱۲ میل",
      price: "۴۵۰,۰۰۰ تومان", 
      image: temperedGlass,
      rating: 4.8
    }
  ];

  const reviews = [
    {
      name: "احمد رضایی",
      rating: 5,
      date: "۱۴۰۳/۰۸/۱۵",
      comment: "کیفیت عالی داشت. نصب هم حرفه‌ای انجام شد. کاملاً راضی هستم.",
      verified: true
    },
    {
      name: "مریم کریمی", 
      rating: 4,
      date: "۱۴۰۳/۰۸/۱۰",
      comment: "محصول خوبی بود ولی تحویل کمی تاخیر داشت. در کل راضی هستم.",
      verified: true
    },
    {
      name: "علی محمدی",
      rating: 5, 
      date: "۱۴۰۳/۰۸/۰۵",
      comment: "بهترین شیشه‌ای که تا حالا خریده‌ام. قیمت هم مناسب بود.",
      verified: false
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="container py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-muted-foreground">
          <span>خانه</span>
          <span className="mx-2">/</span>
          <span>محصولات</span>
          <span className="mx-2">/</span>
          <span>شیشه سکوریت</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviewCount} نظر)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-sm text-muted-foreground">کد: {product.sku}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3 space-x-reverse">
                <span className="text-3xl font-bold text-primary">{product.price} تومان</span>
                <span className="text-lg text-muted-foreground line-through">{product.originalPrice} تومان</span>
                <Badge variant="destructive">۱۷٪ تخفیف</Badge>
              </div>
              <p className="text-sm text-green-600">✓ موجود در انبار ({product.stock} عدد)</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-sm font-medium">تعداد:</span>
                <div className="flex items-center border border-border rounded">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-0 focus-visible:ring-0"
                  />
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-3 space-x-reverse">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="ml-2 h-4 w-4" />
                  افزودن به سبد خرید
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t border-border">
              <h3 className="font-semibold">مزایای این محصول:</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>گارانتی ۵ ساله</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>ارسال رایگان</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <RotateCcw className="h-4 w-4 text-primary" />
                  <span>قابلیت بازگشت</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span>کیفیت اروپایی</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">توضیحات</TabsTrigger>
            <TabsTrigger value="specifications">مشخصات</TabsTrigger>
            <TabsTrigger value="applications">کاربردها</TabsTrigger>
            <TabsTrigger value="reviews">نظرات ({product.reviewCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">ویژگی‌های کلیدی</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">مشخصات فنی</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted/50 rounded">
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">کاربردهای محصول</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {product.applications.map((app, index) => (
                    <div key={index} className="p-3 bg-glass-light/30 rounded border border-border/50">
                      {app}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">نظرات مشتریان</h3>
                  <div className="space-y-4">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <span className="font-medium">{review.name}</span>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">خرید تایید شده</Badge>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">محصولات مشابه</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <div className="aspect-square overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{product.price}</span>
                    <div className="flex items-center space-x-1 space-x-reverse">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;