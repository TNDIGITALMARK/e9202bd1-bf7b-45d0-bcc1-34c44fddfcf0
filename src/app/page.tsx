import MobileMenu from '../components/MobileMenu'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">Brew & Bean</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <MobileMenu />
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 coffee-hero-bg"></div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
            Perfect Coffee,<br />
            <span className="text-amber-600 dark:text-amber-400">Perfect Moment</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Discover the finest artisanal coffee beans, expertly roasted and brewed to perfection in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors hover-lift">
              View Menu
            </a>
            <a href="#about" className="inline-block px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-colors hover-lift">
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Menu</h2>
            <p className="text-xl text-muted-foreground">Handcrafted with love, served with passion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Coffee Menu */}
            <div className="bg-card p-8 rounded-xl shadow-sm border menu-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Signature Coffees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Espresso</h4>
                    <p className="text-muted-foreground text-sm">Rich and bold</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$3.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Cappuccino</h4>
                    <p className="text-muted-foreground text-sm">Perfectly balanced</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$4.75</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Flat White</h4>
                    <p className="text-muted-foreground text-sm">Smooth and creamy</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$5.25</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Cold Brew</h4>
                    <p className="text-muted-foreground text-sm">Slow-steeped perfection</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$4.50</span>
                </div>
              </div>
            </div>

            {/* Pastries Menu */}
            <div className="bg-card p-8 rounded-xl shadow-sm border menu-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Fresh Pastries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Croissant</h4>
                    <p className="text-muted-foreground text-sm">Buttery and flaky</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$3.25</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Blueberry Muffin</h4>
                    <p className="text-muted-foreground text-sm">Bursting with berries</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$2.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Almond Danish</h4>
                    <p className="text-muted-foreground text-sm">Sweet and nutty</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$4.50</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Chocolate Chip Cookie</h4>
                    <p className="text-muted-foreground text-sm">Warm and gooey</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$2.50</span>
                </div>
              </div>
            </div>

            {/* Specialty Drinks */}
            <div className="bg-card p-8 rounded-xl shadow-sm border menu-card hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Specialty Drinks</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Matcha Latte</h4>
                    <p className="text-muted-foreground text-sm">Premium Japanese matcha</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$5.75</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Chai Tea Latte</h4>
                    <p className="text-muted-foreground text-sm">Aromatic spice blend</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$4.95</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Golden Milk</h4>
                    <p className="text-muted-foreground text-sm">Turmeric wellness blend</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$5.25</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-card-foreground">Hot Chocolate</h4>
                    <p className="text-muted-foreground text-sm">Rich Belgian chocolate</p>
                  </div>
                  <span className="font-semibold text-card-foreground">$4.25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Our Story</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2010, Brew & Bean began as a small neighborhood coffee shop with a simple mission: 
              to bring people together over exceptional coffee. We source our beans directly from sustainable farms 
              around the world, ensuring every cup tells a story of craftsmanship and care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">12+</div>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">50k+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">25</div>
                <p className="text-muted-foreground">Coffee Varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Visit Us</h2>
            <p className="text-xl text-muted-foreground">Come experience the perfect cup</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Location & Hours</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <span className="font-semibold text-foreground min-w-20">Address:</span>
                    123 Coffee Street<br />Downtown District<br />City, State 12345
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold text-foreground min-w-20">Phone:</span>
                    (555) 123-BREW
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold text-foreground min-w-20">Email:</span>
                    hello@brewandbean.com
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Opening Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:30 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 text-foreground">Brew & Bean</div>
          <p className="text-muted-foreground mb-6">
            Crafting perfect moments, one cup at a time.
          </p>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Follow Us</a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © 2024 Brew & Bean. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}