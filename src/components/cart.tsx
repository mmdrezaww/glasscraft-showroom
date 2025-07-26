import { ShoppingCart, Heart, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "شیشه سکوریت ۸ میل",
      price: 250000,
      quantity: 2,
      image: "/api/placeholder/100/100",
      inStock: true
    },
    {
      id: 2,
      title: "شیشه لمینت شفاف",
      price: 450000,
      quantity: 1,
      image: "/api/placeholder/100/100", 
      inStock: true
    },
    {
      id: 3,
      title: "شیشه دکوراتیو",
      price: 680000,
      quantity: 1,
      image: "/api/placeholder/100/100",
      inStock: false
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50000;
  const tax = Math.round(subtotal * 0.09);
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <Card className="w-full max-w-md border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 space-x-reverse">
          <ShoppingCart className="h-5 w-5" />
          <span>سبد خرید</span>
          <Badge variant="secondary">{cartItems.length}</Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>سبد خرید شما خالی است</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 space-x-reverse p-3 border border-border rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.title}</h3>
                    <p className="text-primary font-semibold text-sm">
                      {formatPrice(item.price)} تومان
                    </p>
                    {!item.inStock && (
                      <Badge variant="destructive" className="text-xs mt-1">ناموجود</Badge>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center border border-border rounded">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-6 w-6 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <Input
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="w-10 h-6 text-center text-xs border-0 focus-visible:ring-0"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-6 w-6 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Order Summary */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>جمع کل:</span>
                <span>{formatPrice(subtotal)} تومان</span>
              </div>
              <div className="flex justify-between">
                <span>هزینه ارسال:</span>
                <span>{formatPrice(shipping)} تومان</span>
              </div>
              <div className="flex justify-between">
                <span>مالیات:</span>
                <span>{formatPrice(tax)} تومان</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-semibold text-base">
                <span>مجموع نهایی:</span>
                <span className="text-primary">{formatPrice(total)} تومان</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button className="w-full" size="sm">
                ادامه خرید
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                مشاهده سبد خرید
              </Button>
            </div>

            {/* Wishlist */}
            <div className="pt-4 border-t border-border">
              <Button variant="ghost" className="w-full text-muted-foreground" size="sm">
                <Heart className="h-4 w-4 ml-2" />
                لیست علاقه‌مندی‌ها
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Cart;