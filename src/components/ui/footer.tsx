import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-glass-DEFAULT to-glass-deep"></div>
              <span className="text-xl font-bold">کریستال گلاس</span>
            </div>
            <p className="text-sm text-muted-foreground">
              ارائه دهنده محصولات شیشه‌ای با کیفیت بالا و خدمات تخصصی برای پروژه‌های ساختمانی و صنعتی
            </p>
            <div className="flex space-x-3 space-x-reverse">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  محصولات
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  خدمات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">محصولات</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">شیشه سکوریت</li>
              <li className="text-sm text-muted-foreground">شیشه لمینت</li>
              <li className="text-sm text-muted-foreground">شیشه دکوراتیو</li>
              <li className="text-sm text-muted-foreground">شیشه هوشمند</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">تماس با ما</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@crystalglass.ir</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © ۱۴۰۳ کریستال گلاس. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;