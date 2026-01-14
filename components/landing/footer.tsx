import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Nodyne</h3>
            <p className="text-primary font-medium">Stay awake. Stay alive.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#product-overview" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Nodyne Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
