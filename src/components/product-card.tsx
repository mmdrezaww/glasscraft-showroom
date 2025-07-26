import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  category: string;
  href?: string;
}

const ProductCard = ({ title, description, image, price, features, category, href = "/products" }: ProductCardProps) => {
  const CardComponent = () => (
    <Card className="group h-full overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
            {category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-card-foreground">ویژگی‌ها:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 space-x-reverse">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="text-lg font-bold text-primary">{price}</div>
        <Button size="sm" variant="default">
          درخواست قیمت
        </Button>
      </CardFooter>
    </Card>
  );

  return href ? (
    <Link to={href} className="block h-full">
      <CardComponent />
    </Link>
  ) : (
    <CardComponent />
  );
};

export default ProductCard;